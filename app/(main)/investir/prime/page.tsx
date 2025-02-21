import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import { FaqAccordions } from '@/components/accordion/FaqAccordion'
import FaqAccordionLoading from '@/components/accordion/FaqAccordionLoading'

export const metadata: Metadata = {
  title: "Investissez avec Prosperia PRIME | Accédez aux mêmes deals que les plus grands fonds d'investissement.",
  description:
    "Co-investissez aux côtés des meilleurs fonds d'investissement, aux mêmes conditions et dès 1 000€. Et bénéficiez du suivi de la participation et d'une sortie opérées par le fonds d'investissement, TRI cible x2 à x3 (20-25%)*.",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
}

const Prime = () => {
  return (
    <div className='container mx-auto px-4 py-8 mt-28 space-y-16'>
      <section className='text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Investissez aux côtés des meilleurs fonds sur des deals exclusifs & haut de gamme
        </h1>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Accédez à un portefeuille d&apos;investissements triés sur le volet, validés par des experts du Private Equity
          et sécurisés par un cadre structuré.
        </p>
        <Button size='lg' className='mt-8'>
          Je découvre les opportunités d&apos;investissement
        </Button>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-16'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>100M€+</div>
              <p className='text-muted-foreground'>d&apos;investissements sous gestion</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>20+</div>
              <p className='text-muted-foreground'>fonds leaders partenaires</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>x2-3</div>
              <p className='text-muted-foreground'>rendement cible (20-25% TRI)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>100%</div>
              <p className='text-muted-foreground'>validation par des experts</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Une stratégie d&apos;investissement réservée aux initiés du Private Equity
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Deals exclusifs & forte sélectivité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Seuls les projets les plus solides et les plus prometteurs sont sélectionnés après une due diligence
                approfondie.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Co-investissement d&apos;excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Bénéficiez d&apos;un alignement d&apos;intérêt total avec des acteurs institutionnels qui participent à
                chaque deal.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Optimisation & gestion des risques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Un cadre structuré avec une négociation optimisée (valorisation, pacte d&apos;actionnaire, suivi de la
                participation).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Investir avec Prosperia PRIME en 3 étapes simples</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
              <CardTitle className='text-xl'>Sélectionnez vos opportunités</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>Accédez à des deals validés par des experts.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
              <CardTitle className='text-xl'>Investissez avec les leaders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>Un processus sécurisé et optimisé aux côtés des fonds leaders.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
              <CardTitle className='text-xl'>Optimisez vos rendements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>Tableaux de bord, reporting & sorties stratégiques.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Accédez à des investissements haut de gamme avec un fort potentiel de croissance
        </h2>
        <Card className='max-w-3xl mx-auto'>
          <CardContent className='space-y-6 pt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h3 className='font-semibold mb-4'>Caractéristiques clés</h3>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-2'>
                    <span className='text-primary'>📈</span>
                    <span>Type d&apos;instrument : Actions</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-primary'>⏱️</span>
                    <span>Durée : 2 à 7 ans</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-primary'>💰</span>
                    <span>TRI cible : x2 à x3 (20-25%)*</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-semibold mb-4'>Fonds Lead</h3>
                <ul className='space-y-3 text-muted-foreground'>
                  <li>✓ Sélection rigoureuse</li>
                  <li>✓ Négociation des valorisations</li>
                  <li>✓ Structuration du pacte d&apos;actionnaire</li>
                  <li>✓ Suivi des participations</li>
                </ul>
              </div>
            </div>
            <Button className='w-full mt-6'>Je découvre les opportunités d&apos;investissement</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Vous avez des questions ? Nous avons les réponses.</h2>
        <Suspense fallback={<FaqAccordionLoading />}>
          <FaqAccordions page={'prime'} />
        </Suspense>
        s
      </section>

      <section className='text-center space-y-6'>
        <h2 className='text-3xl font-bold'>Prêt à investir sur des deals exclusifs avec des fonds leaders ?</h2>
        <Button size='lg'>Je découvre les opportunités d&apos;investissement</Button>
        <div className='flex justify-center gap-8 mt-8'>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>🔍 Sélection rigoureuse</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>🔒 Investissement sécurisé</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>📈 Forte rentabilité cible</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Prime
