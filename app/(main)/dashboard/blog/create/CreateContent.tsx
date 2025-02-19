'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { createBlogFormSchema } from '@/src/lib/schemas';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { Content } from '@tiptap/react';
import { toast, Toaster } from 'sonner';
import { Button } from '@/components/ui/button';
import { authClient } from '@/src/lib/auth-client';
import { useRouter } from 'next/navigation';
import CategoryList from '../components/CategoryList';
import { CategoryType } from '@/src/interfaces/category';
import { UploadButton } from '../components/UploadButton';
import { Trash2 } from 'lucide-react';

const Editor = dynamic(() => import('../components/Editor'), {
  ssr: false,
  loading: () => <div>Chargement de l&apos;éditeur...</div>,
});

export default function CreateContent() {
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<Content>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/admin/category');
        const data = await res.json();
        if (data) {
          setCategories(data.data);
        }
      } catch (error) {
        toast.error('Erreur lors de la récupération des catégories');
        console.error('Error fetching Categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const session = authClient.useSession();
  const router = useRouter();

  const form = useForm<z.infer<typeof createBlogFormSchema>>({
    defaultValues: {
      title: '',
    },
  });

  const onDeleteImage = async () => {
    try {
      await fetch('/api/admin/image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mainImage),
      });
      setMainImage(null);
      toast.success('Image supprimée avec succès!');
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression de l'image");
    }
    setIsHovered(false);
  };

  const onSubmit = async (values: z.infer<typeof createBlogFormSchema>) => {
    setError(null);
    const validateTitle = createBlogFormSchema.safeParse(values);
    if (!validateTitle.success) {
      setError(validateTitle.error.errors[0].message);
      return;
    } else {
      if (!content) {
        setError('Veuillez saisir un contenu.');
        return;
      } else if (!mainImage) {
        setError('Veuillez ajouter une image principale.');
        return;
      } else {
        try {
          const res = await fetch('/api/admin/blog', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: validateTitle.data.title,
              content: content,
              mainImage,
              creatorId: session?.data?.user.id,
              categoryIds: selectedCategories,
            }),
          });
          const data = await res.json();
          switch (data.status) {
            case 201:
              toast.success('Article créé avec succès!');
              router.push(`/dashboard/blog`);
              break;
            case 400:
              setError(data.message);
              break;
            default:
              setError(
                "Une erreur est survenue lors de la création de l'article."
              );
              break;
          }
        } catch (error) {
          console.error(error);
          setError("Une erreur est survenue lors de la création de l'article.");
        }
      }
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex justify-between items-center mb-4'>
            <h1>Créer un nouvel article</h1>
            <Button
              variant='default'
              type='submit'
              className='mt-4 justify-center'
            >
              Créer
            </Button>
          </div>
          {error && (
            <Alert variant='destructive' className='mb-4'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Entrez votre titre' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className='flex flex-row gap-4 w-full'>
        <div className='flex justify-center items-center w-1/2 border-r border-gray-300'>
          {mainImage ? (
            <div
              className='relative mt-3 group w-[160px] h-[160px]'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={mainImage}
                alt='Main Image'
                width={160}
                height={160}
                className='object-cover rounded-lg border border-gray-300'
              />
              {isHovered && (
                <div className='absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 rounded-bl-lg'>
                  <Button onClick={onDeleteImage}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <UploadButton
              appearance={{
                button:
                  'bg-[#1e3e36] text-white rounded-lg h-9 px-4 py-2 ut-uploading:cursor-not-allowed after:bg-[#7ca998]',
              }}
              endpoint='blogImage'
              onClientUploadComplete={(res) => {
                setMainImage(res?.[0]?.ufsUrl || null);
                toast.success('Upload successful!');
              }}
              onUploadError={(error) => {
                console.error(error);
                toast.error(`Upload failed: ${error.message}`);
              }}
              content={{
                button({ ready }) {
                  if (ready) return <div>Ajouter une Image</div>;
                  return 'Chargement...';
                },
              }}
            />
          )}
        </div>
        <div className='flex justify-center items-center w-1/2 pl-4'>
          <div className='w-3/5'>
            <CategoryList
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </div>
        </div>
      </div>
      <Editor content={content} onChange={setContent} />
      <Toaster richColors />
    </div>
  );
}
