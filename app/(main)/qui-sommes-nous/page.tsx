import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
// import Newsletter from '@/components/landing/newsletter/newsletter';

const QuiSommesNous = () => {
  return (
    <div className='mt-28 mx-auto space-y-16'>
      {/* Hero Section */}
      <section className='container relative px-4 md:px-6 text-center space-y-8'>
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
            Prosperia : Financer la transmission des PME & démocratiser le
            Private Equity
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Nous permettons aux PME de se transmettre, de se développer et
            d&apos;accélérer leur transformation, tout en ouvrant
            l&apos;investissement en Private Equity au plus grand nombre.
          </p>
          <Link href='/plateforme-investissement'>
            <Button size='lg' className='mt-4'>
              Découvrir la plateforme
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-16'>
          <Card className='bg-white/10 backdrop-blur-sm'>
            <CardContent className='pt-6 text-center'>
              <div className='text-3xl font-bold mb-2'>150k+</div>
              <p className='text-muted-foreground'>
                PME à reprendre chaque année en France
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white/10 backdrop-blur-sm'>
            <CardContent className='pt-6 text-center'>
              <div className='text-3xl font-bold mb-2'>1Md€+</div>
              <p className='text-muted-foreground'>
                marché du Private Equity en expansion
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white/10 backdrop-blur-sm'>
            <CardContent className='pt-6 text-center'>
              <div className='text-3xl font-bold mb-2'>8-12%</div>
              <p className='text-muted-foreground'>
                rendement cible CAP-Développement
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white/10 backdrop-blur-sm'>
            <CardContent className='pt-6 text-center'>
              <div className='text-3xl font-bold mb-2'>300+</div>
              <p className='text-muted-foreground'>investisseurs intéressés</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notre Mission */}
      <section className='container px-4 md:px-6 py-16 bg-muted/50'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Une solution pour la transmission des PME & l&apos;accès au Private
            Equity
          </h2>
          <p className='text-lg text-muted-foreground'>
            Chaque année, plus de 150 000 PME cherchent un repreneur, mais
            seules 50 000 trouvent une solution, mettant en péril des milliers
            d&apos;emplois. Par ailleurs, le Private Equity, souvent réservé aux
            grands investisseurs, est une classe d&apos;actif résiliente offrant
            des rendements attractifs.
          </p>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Notre ambition :</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                ✓ Financer les repreneurs de PME sur des opérations de 1M€ à
                10M€
              </li>
              <li>
                ✓ Apporter des solutions de financement complémentaires aux
                banques
              </li>
              <li>
                ✓ Démocratiser l&apos;investissement en Private Equity dès 500€
              </li>
              <li>
                ✓ Soutenir le tissu économique local et la transmission des
                entreprises
              </li>
            </ul>
          </div>
          <Link href='/plateforme-investissement'>
            <Button size='lg' variant='outline'>
              Découvrir nos solutions
            </Button>
          </Link>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className='container px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Une plateforme d&apos;investissement pour relier PME & investisseurs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>
                Mise en relation PME & investisseurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Nous connectons des entrepreneurs en recherche de financement
                avec des investisseurs souhaitant diversifier leur épargne.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>
                Des financements adaptés aux PME
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Nous proposons des obligations amortissables, convertibles et
                des co-investissements en actions pour répondre aux besoins
                spécifiques des entreprises.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>
                Un accès simplifié au Private Equity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Dès 500€, investissez aux côtés de professionnels sur des
                opérations de transmission et de croissance externe.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nos Offres */}
      <section className='container px-4 md:px-6 py-16 bg-muted/50'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Deux stratégies d&apos;investissement adaptées à vos objectifs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>CAP-Développement</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-muted-foreground'>
                Financer la transmission & la croissance des PME
              </p>
              <Link href='/investir/cap-developpement'>
                <Button variant='outline' className='w-full'>
                  En savoir plus
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Prime</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-muted-foreground'>
                Co-investir avec des fonds leaders
              </p>
              <Link href='/investir/prime'>
                <Button variant='outline' className='w-full'>
                  En savoir plus
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className='container px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Une équipe d&apos;experts en finance, private equity & acquisition
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card>
            <CardContent className='pt-6 text-center'>
              <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-muted'></div>
              <h3 className='font-semibold mb-2'>Hugo Fernandez</h3>
              <p className='text-sm text-muted-foreground'>
                CEO & Co-fondateur
              </p>
              <p className='text-sm text-muted-foreground mt-2'>
                +8M€ de projets financés en 2024
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-center'>
              <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-muted'></div>
              <h3 className='font-semibold mb-2'>Inès Lacroix</h3>
              <p className='text-sm text-muted-foreground'>
                Directrice juridique
              </p>
              <p className='text-sm text-muted-foreground mt-2'>
                Spécialiste des levées de fonds
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-center'>
              <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-muted'></div>
              <h3 className='font-semibold mb-2'>Victor Collas</h3>
              <p className='text-sm text-muted-foreground'>
                CMO & Co-fondateur
              </p>
              <p className='text-sm text-muted-foreground mt-2'>
                Expert en acquisition et growth marketing
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-center'>
              <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-muted'></div>
              <h3 className='font-semibold mb-2'>Cyril Koslowski</h3>
              <p className='text-sm text-muted-foreground'>
                COO & Co-fondateur
              </p>
              <p className='text-sm text-muted-foreground mt-2'>
                A géré +80M€/an en collecte
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className='container px-4 md:px-6 py-16 bg-muted/50'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Vous avez des questions ?
        </h2>
        <div className='max-w-3xl mx-auto space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Pourquoi investir avec Prosperia ?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Prosperia offre un accès simplifié au Private Equity avec des
                opportunités de transmission d&apos;entreprises rentables et un
                accompagnement expert.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Quels sont les risques d&apos;un investissement en Private
                Equity ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Les risques incluent une faible liquidité et la variabilité des
                performances. Cependant, les opérations ciblées par Prosperia
                ont historiquement un TRI de 20%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Comment sont sélectionnées les entreprises financées ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Nous collaborons avec des cabinets de transmission et des
                experts financiers pour une due diligence approfondie.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className='container px-4 md:px-6 text-center space-y-8 mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          Investissez dans l&apos;économie réelle dès maintenant
        </h2>
        <div className='flex flex-col items-center gap-4'>
          <Link href='/plateforme-investissement'>
            <Button size='lg' className='min-w-[200px]'>
              Découvrir les opportunités
            </Button>
          </Link>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
            <div className='flex items-center gap-2'>
              <span className='text-primary'>🔒</span>
              <span className='text-sm text-muted-foreground'>
                Processus sécurisé
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-primary'>✓</span>
              <span className='text-sm text-muted-foreground'>
                Sélection rigoureuse
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-primary'>👥</span>
              <span className='text-sm text-muted-foreground'>
                Accompagnement expert
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-primary'>💰</span>
              <span className='text-sm text-muted-foreground'>Dès 500€</span>
            </div>
          </div>
        </div>
      </section>

      {/* <Newsletter /> */}
    </div>
  );
};

export default QuiSommesNous;
