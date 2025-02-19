import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { FaqAccordions } from '@/components/landing/accordion/faqAccordion';

export const metadata: Metadata = {
  title: "Prosperia | Financer la reprise d'une PME rentable",
  description:
    "Financement sur mesure de reprise de PME jusqu'à 1 million d'euros.",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const Repreneurs = () => {
  return (
    <div className='container mx-auto px-4 py-8 mt-28 space-y-16'>
      {/* Hero Section */}
      <section className='text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Reprenez une PME rentable et devenez votre propre patron avec
          Prosperia
        </h1>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Accédez à des entreprises sélectionnées, sécurisez votre financement
          et bénéficiez d&apos;un accompagnement stratégique à chaque étape.
        </p>
        <Button size='lg' className='mt-8'>
          Discuter avec un conseiller
        </Button>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>50+</div>
              <p className='text-muted-foreground'>
                entreprises prêtes à être reprises
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>100M€+</div>
              <p className='text-muted-foreground'>
                de financements structurés
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>360°</div>
              <p className='text-muted-foreground'>
                accompagnement avec des experts
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Prosperia Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Une approche unique pour sécuriser votre reprise d&apos;entreprise
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>
                Entreprises solides et sélectionnées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Toutes nos PME sont rigoureusement analysées pour garantir leur
                rentabilité, leur potentiel de croissance et leur compatibilité
                avec votre projet.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>
                Solutions de financement adaptées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Nous structurons des financements optimisés pour faciliter la
                transmission, avec des partenaires bancaires et des
                co-investisseurs institutionnels.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Accompagnement expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                De l&apos;analyse de l&apos;entreprise à la structuration du
                deal, bénéficiez de notre expertise et d&apos;un réseau de
                partenaires spécialisés.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Reprendre une entreprise avec Prosperia en 3 étapes simples
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
              <CardTitle className='text-xl'>
                Trouvez votre opportunité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Accédez aux entreprises prêtes à être reprises, évaluées et
                validées par nos experts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
              <CardTitle className='text-xl'>Structurez votre projet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Sécurisez votre financement et bénéficiez d&apos;un
                accompagnement personnalisé.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
              <CardTitle className='text-xl'>
                Finalisez votre acquisition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Passez à l&apos;action avec une stratégie de transmission
                optimisée.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions de financement */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='flex flex-col'>
          <CardHeader className='flex-none'>
            <CardTitle className='text-2xl mb-4'>CAP-Développement</CardTitle>
            <p className='text-muted-foreground'>
              Financement structuré pour votre reprise
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
                <span>Taux d&apos;intérêts : 8% à 12%*</span>
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
            <CardTitle className='text-2xl mb-4'>Prime</CardTitle>
            <p className='text-muted-foreground'>
              Financement premium avec co-investisseurs
            </p>
          </CardHeader>
          <CardContent className='flex-grow flex flex-col justify-between space-y-6'>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>📅</span>
                <span>Durée : 2 à 7 ans</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>📈</span>
                <span>TRI : x2 à x3 (20 à 25%)*</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-none'>🤝</span>
                <span>
                  Fonds Lead : Négociation valorisation, pacte
                  d&apos;actionnaire
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
          Vous avez des questions ? Nous avons les réponses.
        </h2>
        <FaqAccordions page='repreneur' />
      </section>

      {/* Final CTA */}
      <section className='text-center space-y-6'>
        <h2 className='text-3xl font-bold'>
          Prêt à reprendre une entreprise et concrétiser votre projet
          entrepreneurial ?
        </h2>
        <Button size='lg'>Je découvre les opportunités de reprise</Button>
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

export default Repreneurs;
