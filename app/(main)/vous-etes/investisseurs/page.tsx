import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { FaqAccordions } from '@/components/landing/accordion/faqAccordion';

export const metadata: Metadata = {
  title:
    'Prosperia |  Investissez dans la transmission et la croissance externe de PME rentables',
  description:
    "Rejoignez Prosperia et investissez dans la reprise, le développement et la croissance externe des PME françaises. Profitez d'opportunités exclusives avec des rendements de 9 à 15% par an en co-investissant aux côtés des banques ou des meilleurs fonds d’investissement.",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const Investisseurs = () => {
  return (
    <div className='container mt-28 mx-auto px-4 py-8 space-y-16'>
      {/* Hero Section */}
      <section className='text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Investissez dans la transmission de PME solides financièrement et
          participez à la pérennité des territoires
        </h1>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Un nombre limité d&apos;opportunités chaque année, rigoureusement
          sélectionnées pour des investissements à haut potentiel, avec des
          rendements attractifs et un risque maîtrisé.
        </p>
        <Button size='lg' className='mt-8'>
          Je découvre les opportunités d&apos;investissement
        </Button>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>36%</div>
              <p className='text-muted-foreground'>
                des cédants ont plus de 60 ans, accélérant le besoin de
                transmission
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>700k+</div>
              <p className='text-muted-foreground'>
                entreprises seront à céder d&apos;ici 2032
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>47%</div>
              <p className='text-muted-foreground'>
                des salariés du privé sont employés par des PME
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Prosperia Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Des opportunités d&apos;investissement confidentielles sur un marché
          résilient et porteur
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>
                Rendement/Risque Maîtrisé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Investissez avec un couple rendement/risque maîtrisé aux côtés
                des banques régionales
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Classe d&apos;actif performante accessible dès 1000€
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Processus Simple</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Sélection, paiement, accompagnement et reporting en toute
                transparence
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Investir avec Prosperia en 3 étapes simples
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
              <CardTitle className='text-xl'>Créez votre compte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                En quelques minutes, renseignez votre profil et effectuez le
                processus KYC, une obligation légale garantissant un cadre
                sécurisé.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
              <CardTitle className='text-xl'>
                Découvrez les opportunités
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Accédez à des dossiers détaillés avec les indicateurs clés :
                chiffre d&apos;affaires, rentabilité, business model,
                perspectives.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
              <CardTitle className='text-xl'>
                Suivez vos investissements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Gérez votre portefeuille depuis un tableau de bord individualisé
                et recevez des reportings trimestriels.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Options */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='flex flex-col'>
          <CardHeader className='flex-none'>
            <CardTitle className='text-2xl mb-4'>
              Prosperia Capital-Développement
            </CardTitle>
            <p className='text-muted-foreground'>
              Investissez dans la transmission et la croissance externe des PME
            </p>
          </CardHeader>
          <CardContent className='flex-grow flex flex-col justify-between space-y-6'>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>🎯</span>
                <span>Durée : 3 à 5 ans (+ différé)</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>💰</span>
                <span>Taux d&apos;intérêt : 8% à 12% bruts par an*</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>🔒</span>
                <span>Sûretés : Nantissement / GAPD / Hypothèque</span>
              </li>
            </ul>
            <Button variant='outline' className='w-full mt-auto'>
              En savoir plus
            </Button>
          </CardContent>
        </Card>

        <Card className='flex flex-col'>
          <CardHeader className='flex-none'>
            <CardTitle className='text-2xl mb-4'>Prosperia Prime</CardTitle>
            <p className='text-muted-foreground'>
              Co-investissez aux côtés des plus grands fonds
              d&apos;investissement
            </p>
          </CardHeader>
          <CardContent className='flex-grow flex flex-col justify-between space-y-6'>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>📅</span>
                <span>Durée : 3 à 7 ans</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>📈</span>
                <span>TRI : x2 à x3 (20 à 25%)*</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>🤝</span>
                <span>
                  Fonds Lead : Négociation valorisation, pacte
                  d&apos;actionnaires
                </span>
              </li>
            </ul>
            <Button variant='outline' className='w-full mt-auto'>
              En savoir plus
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Vous avez des questions ?
        </h2>
        <FaqAccordions page='investisseur' />
      </section>

      {/* Final CTA */}
      <section className='text-center space-y-6'>
        <h2 className='text-3xl font-bold'>Encore des questions ?</h2>
        <Button size='lg'>Planifier un appel</Button>
        <div className='flex justify-center gap-8 mt-8'>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>🔒 Processus sécurisé</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>
              ✨ Opportunités triées
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>
              👥 Accompagnement expert
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investisseurs;
