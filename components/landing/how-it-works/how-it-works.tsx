import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck, LineChart, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
      <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className='flex flex-col items-center justify-center space-y-8'>
          <div className='space-y-4 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Investir avec Prosperia en 3 étapes simples
            </h2>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto'>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                    <UserPlus className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-center'>
                    Créez votre compte
                  </h3>
                  <p className='text-muted-foreground text-center'>
                    En quelques minutes, renseignez votre profil et effectuez le
                    processus KYC (Know Your Customer), une obligation légale
                    garantissant un cadre sécurisé et conforme à la
                    réglementation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                    <ClipboardCheck className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-center'>
                    Découvrez des opportunités exclusives
                  </h3>
                  <p className='text-muted-foreground text-center'>
                    Accédez à des dossiers détaillés avec les indicateurs clés :
                    chiffre d&apos;affaires, rentabilité, business model,
                    perspectives de croissance, structure financière.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                    <LineChart className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-center'>
                    Suivez vos investissements
                  </h3>
                  <p className='text-muted-foreground text-center'>
                    Gérez votre portefeuille depuis un tableau de bord
                    individualisé et recevez des reportings trimestriels pour
                    suivre l&apos;évolution des entreprises financées.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='text-center'>
            <Link href='/plateforme-investissement'>
              <Button
                size='lg'
                className='bg-primary text-white hover:bg-primary/90'
              >
                M&apos;avertir du lancement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
