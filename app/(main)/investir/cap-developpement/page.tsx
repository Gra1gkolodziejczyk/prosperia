import { Suspense } from 'react'
// import Image from 'next/image';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import { FaqAccordions } from '@/components/accordion/FaqAccordion'
import FaqAccordionLoading from '@/components/accordion/FaqAccordionLoading'

export const metadata: Metadata = {
  title:
    'Prosperia | Investissez dans la transmission et la croissance externe de PME rentables grâce à Prosperia | Rendement 9-12%/an*',
  description:
    "Prosperia Capital-Développement vous permet d'investir en obligations ou en actions dans la reprise et la croissance des PME françaises tout en bénéficiant d'un rendement compris entre 9 et 12%/an*",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
}

const CapDeveloppement = () => {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 mt-10 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl sm:text-5xl font-bold text-black leading-tight dark:text-white'>
                Investissez dans la transmission et le développement des PME avec CAP-Développement
              </h1>
              <h2 className='text-xl sm:text-2xl text-gray-800/50 dark:text-gray-300'>
                Un investissement à haut rendement (8% à 12%*), sécurisé et impactant, au service des PME françaises.
              </h2>
              <Link
                href='/'
                className='inline-block px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg'>
                Je découvre les opportunités CAP-Développement
              </Link>

              {/* Réassurance */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-blue-400 text-xl'>📈</span>
                  </div>
                  <p className='text-sm font-medium text-black dark:text-gray-300'>8% à 12% de rendement annuel*</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-blue-400 text-xl'>🏢</span>
                  </div>
                  <p className='text-sm font-medium text-black dark:text-gray-300'>Financement des PME en croissance</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-blue-400 text-xl'>🔒</span>
                  </div>
                  <p className='text-sm font-medium text-black dark:text-gray-300'>Investissement sécurisé</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-blue-400 text-xl'>🌍</span>
                  </div>
                  <p className='text-sm font-medium text-black dark:text-gray-300'>Impact territorial</p>
                </div>
              </div>
            </div>

            {/* <div className='relative h-[400px] rounded-xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/investment-meeting.jpg'
                alt="Réunion d'investissement"
                fill
                className='object-cover'
                priority
              />
            </div> */}
            <div className='relative h-[400px] bg-foreground/20 rounded-xl overflow-hidden shadow-2xl'></div>
          </div>
        </div>
      </section>

      {/* Pourquoi investir Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-primary/5'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-16'>
            Un produit financier sécurisé et impactant
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-primary/80'>
              <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6'>
                <span className='text-blue-400 text-xl'>💰</span>
              </div>
              <h3 className='text-xl font-bold mb-4'>Rendement attractif & sécurisé</h3>
              <p className='text-muted-foreground'>
                Taux d&apos;intérêt cible entre 8% et 12% sur 3 à 5 ans* avec une gestion optimisée du risque.
              </p>
            </div>

            <div className='p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-primary/80'>
              <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6'>
                <span className='text-blue-400 text-xl'>🏛️</span>
              </div>
              <h3 className='text-xl font-bold mb-4'>Un investissement structuré & encadré</h3>
              <p className='text-muted-foreground'>
                Co-investissement avec des acteurs financiers reconnus, avec un modèle de sûretés (nantissement, GAPD,
                hypothèque).
              </p>
            </div>

            <div className='p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-primary/80'>
              <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6'>
                <span className='text-blue-400 text-xl'>🌱</span>
              </div>
              <h3 className='text-xl font-bold mb-4'>Un impact réel sur l&apos;économie locale</h3>
              <p className='text-muted-foreground'>
                Financement dédié à la transmission, la pérennité et la transformation des PME françaises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-16'>Investissez en 3 étapes simples</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card>
              <CardHeader>
                <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
                <CardTitle className='text-xl'>Découvrez les opportunités</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>Consultez les PME éligibles et sélectionnées avec rigueur.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
                <CardTitle className='text-xl'>Investissez en toute sécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>Un processus digitalisé, encadré et transparent.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
                <CardTitle className='text-xl'>Suivez vos rendements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Accédez à votre tableau de bord et recevez des mises à jour régulières.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Détails du Produit Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-primary/5'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-16'>CAP-Développement en chiffres</h2>

          <Card className='max-w-3xl mx-auto'>
            <CardContent className='space-y-6 pt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='font-semibold mb-4'>Caractéristiques clés</h3>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                      <span className='text-primary'>📄</span>
                      <span>Type : Obligations</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='text-primary'>⏱️</span>
                      <span>Durée : 3 à 5 ans (+ différé)</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='text-primary'>💰</span>
                      <span>Taux : 8% à 12% par an*</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold mb-4'>Sécurisation</h3>
                  <ul className='space-y-3 text-muted-foreground'>
                    <li>✓ Nantissement</li>
                    <li>✓ GAPD</li>
                    <li>✓ Hypothèque</li>
                  </ul>
                </div>
              </div>
              <Button className='w-full mt-6'>Accéder aux opportunités CAP-Développement</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-16'>
            Vous avez des questions ? Nous avons les réponses.
          </h2>
          <Suspense fallback={<FaqAccordionLoading />}>
            <FaqAccordions page={'cap-dev'} />
          </Suspense>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-primary/5'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-8'>Prêt à investir dans des PME à fort potentiel ?</h2>
          <Button size='lg' className='mb-8'>
            Je découvre les opportunités CAP-Développement
          </Button>
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>💰 Rendement sécurisé</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>🔍 Sélection rigoureuse</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>👥 Accompagnement expert</span>
            </div>
          </div>
          <p className='text-sm text-muted-foreground mt-8'>
            * Les performances passées ne préjugent pas des performances futures
          </p>
        </div>
      </section>
    </main>
  )
}

export default CapDeveloppement
