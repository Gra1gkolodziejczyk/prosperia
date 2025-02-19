import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { FaqAccordions } from '@/components/landing/accordion/faqAccordion';

export const metadata: Metadata = {
  title: 'Prosperia | Comment ça marche',
  description:
    "Investissez dans la classe d'actifs préférée des investisseurs professionnels et institutionnels : les PME rentables en phase de développement ou de transmission.",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const CommentCaMarche = () => {
  return (
    <div className='mb-28 mt-28'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl'>
        <div className='space-y-16'>
          {/* Hero Section */}
          <section className='text-center space-y-6'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              Investissez dans la transmission des PME en toute simplicité
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Un accompagnement clé en main pour financer les PME et sécuriser
              votre investissement.
            </p>
            <Button size='lg' className='mt-8'>
              Je découvre les opportunités d&apos;investissement
            </Button>

            {/* Stats Grid */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-16'>
              <Card>
                <CardContent className='pt-6'>
                  <div className='text-3xl font-bold mb-2'>100M€+</div>
                  <p className='text-muted-foreground'>
                    d&apos;investissements déjà engagés
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='pt-6'>
                  <div className='text-3xl font-bold mb-2'>50+</div>
                  <p className='text-muted-foreground'>PME accompagnées</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='pt-6'>
                  <div className='text-3xl font-bold mb-2'>8-25%</div>
                  <p className='text-muted-foreground'>rendement cible</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='pt-6'>
                  <div className='text-3xl font-bold mb-2'>20+</div>
                  <p className='text-muted-foreground'>
                    experts du Private Equity
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Hero Image */}
            {/* <div className='relative w-full max-w-4xl mx-auto aspect-[16/9] mt-8'>
              <Image
                src='/images/process.jpg'
                alt="Processus d'investissement"
                fill
                className='object-cover rounded-xl'
                priority
              />
            </div> */}
          </section>

          {/* Comment ça marche Section */}
          <section>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Une démarche claire et rapide en 3 étapes
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <Card>
                <CardHeader>
                  <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
                  <CardTitle className='text-xl'>
                    Découvrez les opportunités disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li>✓ Accédez à une sélection exclusive de PME</li>
                    <li>✓ Consultez les analyses financières</li>
                    <li>✓ Échangez avec notre équipe d&apos;experts</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
                  <CardTitle className='text-xl'>
                    Investissez en quelques clics
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li>✓ Sélectionnez votre projet</li>
                    <li>✓ Définissez votre montant</li>
                    <li>✓ Signez électroniquement</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
                  <CardTitle className='text-xl'>
                    Suivez et optimisez votre investissement
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li>✓ Recevez des mises à jour régulières</li>
                    <li>✓ Accédez à votre tableau de bord</li>
                    <li>✓ Bénéficiez d&apos;un accompagnement dédié</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className='text-center mt-8'>
              <Button size='lg'>
                Je découvre les opportunités d&apos;investissement
              </Button>
            </div>
          </section>

          {/* Solutions d'investissement Section */}
          <section>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Deux stratégies d&apos;investissement adaptées à votre profil
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card className='flex flex-col'>
                <CardHeader className='flex-none'>
                  <CardTitle className='text-2xl mb-4'>
                    CAP-Développement
                  </CardTitle>
                  <p className='text-muted-foreground'>
                    Soutenez la transmission et la modernisation des PME
                  </p>
                </CardHeader>
                <CardContent className='flex-grow flex flex-col justify-between space-y-6'>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-3'>
                      <span className='flex-none'>🎯</span>
                      <span>Objectif : Financer la transmission des PME</span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='flex-none'>📅</span>
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
                  <Link href='/investir/cap-developpement' className='mt-auto'>
                    <Button variant='outline' className='w-full'>
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className='flex flex-col'>
                <CardHeader className='flex-none'>
                  <CardTitle className='text-2xl mb-4'>Prime</CardTitle>
                  <p className='text-muted-foreground'>
                    Investissez aux côtés des plus grands fonds
                  </p>
                </CardHeader>
                <CardContent className='flex-grow flex flex-col justify-between space-y-6'>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-3'>
                      <span className='flex-none'>🎯</span>
                      <span>Objectif : Accéder à des deals haut de gamme</span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='flex-none'>📅</span>
                      <span>Durée : 3 à 7 ans</span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='flex-none'>📈</span>
                      <span>TRI cible : x2 à x3 (20 à 25%)*</span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='flex-none'>🛡</span>
                      <span>Fonds Lead : Négociation & suivi optimisés</span>
                    </li>
                  </ul>
                  <Link href='/investir/prime' className='mt-auto'>
                    <Button variant='outline' className='w-full'>
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sécurité & Transparence Section */}
          <section className='bg-primary/5 rounded-xl p-8'>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Un cadre d&apos;investissement sécurisé et réglementé
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0'>
                    🔍
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>
                      Sélection rigoureuse des PME
                    </h3>
                    <p className='text-muted-foreground'>
                      Analyse financière & due diligence approfondie
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0'>
                    📊
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Transparence totale</h3>
                    <p className='text-muted-foreground'>
                      Accès aux documents juridiques et financiers
                    </p>
                  </div>
                </div>
              </div>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0'>
                    ⚖️
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Agrément en cours</h3>
                    <p className='text-muted-foreground'>
                      Conformité avec la réglementation européenne
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0'>
                    👥
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>
                      Accompagnement expert
                    </h3>
                    <p className='text-muted-foreground'>
                      Des professionnels du Private Equity à vos côtés
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Les réponses aux questions les plus fréquentes
            </h2>
            <FaqAccordions page='comment-ca-marche' />
          </section>

          {/* Final CTA */}
          <section className='text-center space-y-6'>
            <h2 className='text-3xl font-bold'>
              Prêt à investir dans des PME rentables et impactantes ?
            </h2>
            <Button size='lg'>Je découvre les opportunités</Button>
            <div className='flex justify-center gap-8 mt-8'>
              <div className='flex items-center gap-2'>
                <span className='text-muted-foreground'>
                  🔒 Processus sécurisé
                </span>
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
      </div>
    </div>
  );
};

export default CommentCaMarche;
