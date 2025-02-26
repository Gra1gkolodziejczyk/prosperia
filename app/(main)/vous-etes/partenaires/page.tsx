import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaqAccordions } from '@/components/landing/accordion/faqAccordion'

const Partenaires = () => {
  return (
    <div className='container mx-auto px-4 py-8 mt-28 space-y-16'>
      {/* Hero Section */}
      <section className='text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Développez votre activité en devenant partenaire de Prosperia
        </h1>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Rejoignez un réseau de CGP et d&apos;apporteurs d&apos;affaires et bénéficiez d&apos;opportunités exclusives
          pour proposer des solutions d&apos;investissement performantes et impactantes.
        </p>
        <Button size='lg' className='mt-8'>
          Devenir partenaire
        </Button>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2 text-primary'>100M€+</div>
              <p className='text-primary'>de financements levés</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2 text-primary'>20+</div>
              <p className='text-primary'>partenaires majeurs du financement</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-3xl font-bold mb-2 text-primary'>100%</div>
              <p className='text-primary'>modèle gagnant-gagnant</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Prosperia Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Un partenariat rentable et structuré pour les professionnels du patrimoine
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl text-secondary'>Rémunération attractive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-primary'>
                Générez des revenus complémentaires grâce à un modèle de commissions clair et transparent.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl text-secondary'>Opportunités de qualité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-primary'>
                Des solutions adaptées à chaque investisseur, avec des dossiers validés et encadrés par des experts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl text-secondary'>Accompagnement dédié</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-primary'>
                Un accès privilégié à notre équipe, des supports commerciaux et un suivi optimisé pour faciliter votre
                activité.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-8'>
          <Button size='lg'>Je découvre le programme partenaires</Button>
        </div>
      </section>

      {/* How it Works Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Un partenariat structuré et fluide</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
              <CardTitle className='text-xl text-secondary'>Rejoignez notre réseau</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-primary'>Contactez-nous et signez votre convention de partenariat.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
              <CardTitle className='text-xl text-secondary'>Proposez nos solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-primary'>Accédez à des opportunités rigoureusement sélectionnées.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
              <CardTitle className='text-xl text-secondary'>Générez des revenus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-primary'>Profitez d&apos;un modèle de rémunération avantageux et récurrent.</p>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-8'>
          <Button size='lg'>Je deviens partenaire</Button>
        </div>
      </section>

      {/* Solutions & Rémunérations */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Des rémunérations attractives pour nos partenaires</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card className='flex flex-col'>
            <CardHeader>
              <CardTitle className='text-2xl text-primary'>Rémunération des CGP</CardTitle>
            </CardHeader>
            <CardContent className='space-y-8'>
              {/* Prosperia CAP DEV */}
              <div className='space-y-6'>
                <h3 className='text-xl font-semibold text-primary'>Prosperia CAP DEV</h3>
                <div className='space-y-6'>
                  {/* Upfront */}
                  <div>
                    <h4 className='text-lg font-medium mb-3 text-primary'>Upfront</h4>
                    <ul className='space-y-2 text-primary'>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>&lt; 100k€ → 2%</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>100k€ - 300k€ → 2%</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>300k€ → 2%</span>
                      </li>
                    </ul>
                  </div>
                  {/* Encours annuel */}
                  <div>
                    <h4 className='text-lg font-medium mb-3 text-primary'>Encours annuel</h4>
                    <ul className='space-y-2 text-primary'>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>&lt; 100k€ → 0%</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>100k€ - 300k€ → 0,5%</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>300k€ → 0,75%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Prosperia PRIME */}
              <div className='space-y-6'>
                <h3 className='text-xl font-semibold text-primary'>Prosperia PRIME</h3>
                <div className='space-y-6'>
                  {/* Upfront */}
                  <div>
                    <h4 className='text-lg font-medium mb-3 text-primary'>Upfront</h4>
                    <ul className='space-y-2 text-primary'>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>&lt; 100k€ → 2,5%</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>100k€ → 4%</span>
                      </li>
                    </ul>
                  </div>
                  {/* Running */}
                  <div>
                    <h4 className='text-lg font-medium mb-3 text-primary'>Running</h4>
                    <ul className='space-y-2 text-primary'>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>&lt; 100k€ → 0%</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='text-primary'>100k€ → = à celui de la SGP</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Button variant='default' className='w-full mt-6 hover:bg-primary/70'>
                En savoir plus sur la rémunération des CGP
              </Button>
            </CardContent>
          </Card>

          <Card className='flex flex-col'>
            <CardHeader>
              <CardTitle className='text-2xl text-primary'>Rémunération des apporteurs d&apos;affaires</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col flex-grow'>
              <div className='flex-grow'>
                <h4 className='text-lg font-medium mb-3 text-primary'>Montant levé & Rémunération</h4>
                <ul className='space-y-2 text-primary'>
                  <li className='flex items-center gap-2'>
                    <span className='text-primary'>•</span>
                    <span className='text-primary'>0 à 500 000€ → 1 500€</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-primary'>•</span>
                    <span className='text-primary'>500k€ à 1M€ → 2 500€</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-primary'>•</span>
                    <span className='text-primary'>1M€ → 5 000€</span>
                  </li>
                </ul>
              </div>
              <Button variant='default' className='w-full mt-auto hover:bg-primary/70'>
                En savoir plus sur la rémunération des apporteurs d&apos;affaires
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className='text-3xl font-bold text-center mb-12'>Vous avez des questions ? Nous avons les réponses.</h2>
        <FaqAccordions page='partenaire' />
      </section>

      {/* Final CTA */}
      <section className='text-center space-y-6'>
        <h2 className='text-3xl font-bold'>Développez votre activité avec Prosperia dès aujourd&apos;hui</h2>
        <Button size='lg'>Je deviens partenaire</Button>
        <div className='flex justify-center gap-8 mt-8'>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>✨ Opportunités sélectionnées</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>💰 Rémunération attractive</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-muted-foreground'>👥 Accompagnement dédié</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partenaires
