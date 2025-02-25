import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/public/heroImage.jpg'

export default function Hero() {
  return (
    <section className='w-full flex items-center justify-center py-12 md:py-24 lg:py-32 pt-24 bg-background relative overflow-hidden'>
      <div className='absolute inset-0' />
      <div className='absolute inset-0'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
        </div>
      </div>
      <div className='container relative px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-8'>
            <div className='space-y-6'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Investissez dans les entreprises de demain d&apos;aujourd&apos;hui
              </h1>
              <p className='max-w-[600px] text-xl'>
                Prosperia est la première plateforme d&apos;investissement dédiée à la transmission et à la croissance
                externe des PME, permettant aux investisseurs d&apos;accéder à un marché jusqu&apos;ici réservé aux
                institutionnels.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/plateforme-investissement'>
                <Button size='lg' className='w-full min-[400px]:w-auto'>
                  M&apos;avertir du lancement
                </Button>
              </Link>
            </div>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
              <Card className='backdrop-blur-sm border-0'>
                <CardContent className='pt-6 text-center'>
                  <div className='text-3xl font-bold mb-2'>150k</div>
                  <p className='text-sm'>emplois disparaissent chaque année</p>
                </CardContent>
              </Card>
              <Card className='backdrop-blur-sm border-0'>
                <CardContent className='pt-6 text-center'>
                  <div className='text-3xl font-bold mb-2'>36%</div>
                  <p className='text-sm '>des dirigeants de PME ont plus de 60 ans</p>
                </CardContent>
              </Card>
              <Card className='backdrop-blur-sm border-0'>
                <CardContent className='pt-6 text-center'>
                  <div className='text-3xl font-bold mb-2'>9Mds€</div>
                  <p className='text-sm '>investis dans le capital transmission en 2024</p>
                </CardContent>
              </Card>
              <Card className='backdrop-blur-sm border-0'>
                <CardContent className='pt-6 text-center'>
                  <div className='text-3xl font-bold mb-2'>5%</div>
                  <p className='text-sm'>proviennent d&apos;investisseurs individuels</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative w-full aspect-[4/3] overflow-hidden rounded-lg'>
              <Image
                src={heroImage}
                alt='PME en développement'
                fill
                className='object-cover hover:scale-105 transition-transform duration-500'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
