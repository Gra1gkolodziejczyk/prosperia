import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function InvestmentStrategies() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className='flex flex-col items-center justify-center space-y-8'>
          <div className='space-y-4 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Des solutions d&apos;investissement en Actions ou en Obligations selon vos objectifs
            </h2>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 w-full max-w-5xl mx-auto'>
            <Card className='flex flex-col'>
              <CardHeader className='flex-none'>
                <CardTitle className='text-background font-bold text-2xl'>Prosperia Capital-Développement</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col flex-grow'>
                <div className='space-y-6'>
                  <div className='space-y-4'>
                    <div className='flex gap-4 text-center items-start'>
                      <span className='text-primary'>Objectif</span>
                      <span className='text-primary text-start'>
                        Financer la transmission et la croissance externe des PME
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>Durée</span>
                      <span className='text-primary'>3 à 5 ans</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>Instrument</span>
                      <span className='text-primary'>Obligations</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>Taux d&apos;intérêt</span>
                      <span className='text-primary'>9% à 12%/an*</span>
                    </div>
                  </div>
                  <Link href='/investir/capital-developpement' className='block mt-auto'>
                    <Button className='w-full hover:bg-primary/70' variant='default'>
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className='flex flex-col'>
              <CardHeader className='flex-none'>
                <CardTitle className='text-background font-bold text-2xl'>Prosperia Prime</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col flex-grow'>
                <div className='flex flex-col flex-grow'>
                  <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>Objectif</span>
                      <span className='text-primary'>Co-investir aux côtés des plus grands fonds</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>Durée</span>
                      <span className='text-primary'>3 à 7 ans</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>Instrument</span>
                      <span className='text-primary'>Actions</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-primary'>TRI</span>
                      <span className='text-primary'>x2 à x3 (20 à 25%)*</span>
                    </div>
                  </div>
                  <Link href='/investir/prime' className='block mt-auto'>
                    <Button className='w-full hover:bg-primary/70' variant='default'>
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className='text-sm '>
            * Les performances passées ne présagent pas des performances futures. Risque de perte en capital.
          </p>
        </div>
      </div>
    </section>
  )
}
