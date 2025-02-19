import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaqAccordions } from '@/components/landing/accordion/faqAccordion'

const Cedants = () => {
  return (
    <div className='container mt-28 mx-auto px-4 py-8 space-y-16'>
      {/* Hero Section */}
      <section className='text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Cédez votre entreprise en toute sérénité avec Prosperia
        </h1>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Un processus structuré pour trouver le bon repreneur, sécuriser la transmission et garantir la pérennité de
          votre entreprise.
        </p>
        <Button size='lg' className='mt-8'>
          Parler avec un conseiller
        </Button>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-16'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>50+</div>
              <p className='text-muted-foreground'>PME accompagnées</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>100M€+</div>
              <p className='text-muted-foreground'>de financements levés</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>99%</div>
              <p className='text-muted-foreground'>des cessions financées et finalisées</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2'>500+</div>
              <p className='text-muted-foreground'>repreneurs sérieux et qualifiés</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Prosperia Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Une solution complète et sécurisée pour votre transmission
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Sélection des repreneurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Nous identifions et validons les candidats selon leur profil, leur capacité financière et leur
                adéquation avec votre vision d&apos;entreprise.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Financement optimisé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Grâce à notre réseau d&apos;investisseurs et de partenaires bancaires, nous trouvons les solutions
                financières adaptées pour maximiser votre valorisation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Accompagnement complet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                De l&apos;évaluation de votre entreprise à la finalisation du deal, nous vous guidons à chaque étape
                pour garantir une transmission en toute confiance.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-8'>
          <Button size='lg'>Parler avec un conseiller</Button>
        </div>
      </section>

      {/* How it Works Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Vendre votre entreprise au bon repreneur, au bon prix</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
              <CardTitle className='text-xl'>Valorisation juste et solide</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <ul className='space-y-2 text-muted-foreground'>
                <li>✓ Analyse approfondie de vos données financières</li>
                <li>✓ Benchmark sectoriel et multiples comparables</li>
                <li>✓ Documentation claire pour les acquéreurs</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
              <CardTitle className='text-xl'>Sélection du repreneur idéal</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <ul className='space-y-2 text-muted-foreground'>
                <li>✓ Base de repreneurs qualifiés</li>
                <li>✓ Matching personnalisé selon vos critères</li>
                <li>✓ Validation rigoureuse des candidats</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
              <CardTitle className='text-xl'>Accompagnement complet</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <ul className='space-y-2 text-muted-foreground'>
                <li>✓ Négociation du protocole</li>
                <li>✓ Gestion du calendrier</li>
                <li>✓ Suivi post-cession</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-8'>
          <Button size='lg'>Être accompagné dans la vente de mon entreprise</Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Vous avez des questions ? Nous avons les réponses.</h2>
        <FaqAccordions page='cedant' />
      </section>

      {/* Final CTA */}
      <section className='text-center space-y-6'>
        <h2 className='text-3xl font-bold'>Vous souhaitez céder votre entreprise en toute sérénité ?</h2>
        <Button size='lg'>Parler avec un conseiller</Button>
        <div className='flex justify-center gap-8 mt-8'>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>🔒 Processus sécurisé</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>✨ Repreneurs fiables</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>👥 Accompagnement expert</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cedants
