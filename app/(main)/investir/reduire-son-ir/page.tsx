import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, FileText, Target, TrendingUp, Info, AlertCircle, BarChart, Shield } from 'lucide-react'
import { FaqAccordions } from '@/components/accordion/FaqAccordion'
import FaqAccordionLoading from '@/components/accordion/FaqAccordionLoading'
// import Image from 'next/image';

const ReduireSonImpotSurLeRevenue = () => {
  return (
    <div className='mt-28 mx-auto'>
      {/* Hero Section */}
      <section className='relative h-[500px] w-full'>
        {/* <div className='absolute inset-0'>
          <Image
            src='/images/header-ir.jpg'
            alt="Réduction d'impôt sur le revenu"
            fill
            className='object-cover brightness-50'
            priority
          />
        </div> */}
        <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-white'>
            Réduisez vos impôts en investissant dans des PME avec l&apos;IR PME
          </h1>
          <p className='text-xl text-primary/90 max-w-3xl mb-8 dark:text-white'>
            Profitez d&apos;un avantage fiscal jusqu&apos;à 25% grâce à l&apos;investissement dans des entreprises à
            fort potentiel
          </p>
          <Button size='lg' className='mb-12'>
            Je découvre les opportunités d&apos;investissement
          </Button>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
            <Card className='bg-white/10 backdrop-blur-sm border-0'>
              <CardContent className='pt-6 text-center text-primary dark:text-white'>
                <div className='text-3xl font-bold mb-2'>25%</div>
                <p>de réduction d&apos;impôt</p>
              </CardContent>
            </Card>
            <Card className='bg-white/10 backdrop-blur-sm border-0'>
              <CardContent className='pt-6 text-center text-primary dark:text-white'>
                <div className='text-3xl font-bold mb-2'>100%</div>
                <p>PME sélectionnées avec rigueur</p>
              </CardContent>
            </Card>
            <Card className='bg-white/10 backdrop-blur-sm border-0'>
              <CardContent className='pt-6 text-center text-primary dark:text-white'>
                <div className='text-3xl font-bold mb-2'>360°</div>
                <p>Suivi par des experts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que l'IR PME Section */}
      <section className='py-20 px-4'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Qu&apos;est-ce que l&apos;IR PME et comment fonctionne-t-il ?
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <p className='text-lg'>
                L&apos;IR PME permet aux investisseurs particuliers de bénéficier d&apos;une réduction d&apos;impôt en
                contrepartie d&apos;un investissement dans des entreprises éligibles.
              </p>
              <p className='text-lg'>
                Cet avantage fiscal est prévu par l&apos;article 199 terdecies-0 A du Code Général des Impôts.
              </p>
              <p className='text-lg'>La réduction peut atteindre 25% du montant investi, sous conditions.</p>
            </div>
            <Card className='bg-primary/5'>
              <CardContent className='pt-6'>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Info className='h-9 w-9 text-primary mt-1' />
                    <p>Investissez dans une PME éligible et bénéficiez d&apos;une réduction d&apos;impôt de 25%</p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <AlertCircle className='h-6 w-6 text-primary mt-1' />
                    <p>Plafond : 50 000€ (célibataire) ou 100 000€ (couple)</p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Shield className='h-6 w-6 text-primary mt-1' />
                    <p>Conservation des titres pendant 5 ans minimum</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi l'État encourage Section */}
      <section className='py-20 px-4 bg-primary/5'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Pourquoi l&apos;État encourage-t-il l&apos;investissement dans les PME ?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Soutenir la croissance locale</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Favoriser le développement des entreprises françaises et l&apos;économie des territoires.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Création d&apos;emplois</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Encourager la création et le maintien d&apos;emplois durables dans les régions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stimuler l&apos;innovation et la compétitivité des entreprises françaises.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entreprises éligibles Section */}
      <section className='py-20 px-4'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Quels types d&apos;entreprises sont éligibles à l&apos;IR PME ?
          </h2>
          <Card className='mb-8'>
            <CardContent className='pt-6'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='font-semibold mb-4'>Critères d&apos;éligibilité</h3>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle2 className='h-5 w-5 text-primary' />
                      <span>Entreprises non cotées en bourse</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle2 className='h-5 w-5 text-primary' />
                      <span>PME européennes de moins de 250 salariés</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle2 className='h-5 w-5 text-primary' />
                      <span>CA inférieur à 50 millions d&apos;euros</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle2 className='h-5 w-5 text-primary' />
                      <span>Phase de développement ou transmission</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold mb-4'>Notre sélection</h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-2'>
                      <BarChart className='h-5 w-5 text-primary mt-1' />
                      <span>Analyse approfondie de la santé financière</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Target className='h-5 w-5 text-primary mt-1' />
                      <span>Évaluation du potentiel de croissance</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Shield className='h-5 w-5 text-primary mt-1' />
                      <span>Validation par un comité d&apos;experts</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button className='w-full mt-8'>Découvrir les PME éligibles</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comment bénéficier Section */}
      <section className='py-20 px-4 bg-primary/5'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Comment bénéficier du régime fiscal avantageux ?</h2>
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <Badge className='w-fit mb-4 text-white'>Étape 1</Badge>
                <CardTitle className='text-xl'>Recevez votre attestation fiscale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Après votre investissement, vous recevez une attestation fiscale détaillée.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className='w-fit mb-4 text-white'>Étape 2</Badge>
                <CardTitle className='text-xl'>Déclarez l&apos;investissement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Remplissez la case correspondante sur votre déclaration d&apos;impôts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className='w-fit mb-4 text-white'>Étape 3</Badge>
                <CardTitle className='text-xl'>Bénéficiez de la réduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  La réduction s&apos;applique directement sur votre montant d&apos;impôt.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Barème de la réduction d&apos;impôt IR PME</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-start gap-3'>
                <TrendingUp className='h-6 w-6 text-primary mt-1' />
                <p>Jusqu&apos;à 25% de réduction d&apos;impôt sur l&apos;investissement</p>
              </div>
              <div className='flex items-start gap-3'>
                <Target className='h-6 w-6 text-primary mt-1' />
                <p>Plafond annuel : 50 000€ pour une personne seule / 100 000€ pour un couple</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Risques et Précautions Section */}
      <section className='py-20 px-4'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Investir dans une PME : risques et précautions à prendre
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <Card>
              <CardHeader>
                <CardTitle>Principaux risques</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <AlertCircle className='h-6 w-6 text-primary mt-1' />
                  <p>Risque de perte en capital</p>
                </div>
                <div className='flex items-start gap-3'>
                  <AlertCircle className='h-6 w-6 text-primary mt-1' />
                  <p>Liquidité limitée</p>
                </div>
                <div className='flex items-start gap-3'>
                  <AlertCircle className='h-6 w-6 text-primary mt-1' />
                  <p>Dépendance aux performances de l&apos;entreprise</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Critères d&apos;évaluation</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <CheckCircle2 className='h-6 w-6 text-primary mt-1' />
                  <p>Rentabilité et croissance prévisionnelle</p>
                </div>
                <div className='flex items-start gap-3'>
                  <CheckCircle2 className='h-6 w-6 text-primary mt-1' />
                  <p>Qualité du management et du projet</p>
                </div>
                <div className='flex items-start gap-3'>
                  <CheckCircle2 className='h-6 w-6 text-primary mt-1' />
                  <p>Solidité financière et stratégie long terme</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rentabilité Section */}
      <section className='py-20 px-4 bg-primary/5'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Quelle est la rentabilité moyenne avec Prosperia ?</h2>
          <Card>
            <CardContent className='space-y-6 pt-6'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='font-semibold mb-4'>Performance cible</h3>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                      <TrendingUp className='h-6 w-6 text-primary mt-1' />
                      <p>TRI cible : entre x2 et x3 (20-25% annuel)</p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Target className='h-6 w-6 text-primary mt-1' />
                      <p>Accès à des opportunités de croissance sélectionnées</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='font-semibold mb-4'>Obligations</h3>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                      <FileText className='h-6 w-6 text-primary mt-1' />
                      <p>Engagement de conservation des titres (5 ans minimum)</p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <BarChart className='h-6 w-6 text-primary mt-1' />
                      <p>Reporting et suivi des performances</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className='w-full'>Découvrir les PME disponibles</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 px-4'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>FAQ : les réponses à vos questions sur l&apos;IR PME</h2>
          <Suspense fallback={<FaqAccordionLoading />}>
            <FaqAccordions page={'reduire-ir'} />
          </Suspense>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-20 px-4 bg-primary/5'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>
            Prêt à réduire vos impôts tout en soutenant l&apos;économie réelle ?
          </h2>
          <Button size='lg' className='mb-8'>
            Je découvre les opportunités d&apos;investissement
          </Button>
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>💰 25% de réduction d&apos;impôt</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground'>🔍 PME sélectionnées avec rigueur</span>
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
    </div>
  )
}

export default ReduireSonImpotSurLeRevenue
