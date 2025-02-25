import { Card, CardContent } from '@/components/ui/card'
import { Building2, PiggyBank, TrendingUp, Users } from 'lucide-react'

export default function WhyChoose() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className='flex flex-col items-center justify-center space-y-8'>
          <div className='space-y-4 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              La plateforme d&apos;investissement qui vous ouvre les portes du LBO
            </h2>
            <p className='md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Capital-Développement - Capital Transmission
            </p>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto'>
            <Card className=''>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <Building2 className='h-12 w-12' />
                  <h3 className='text-xl font-bold text-center'>Le Leverage Buy-Out (LBO)</h3>
                  <p className='text-center'>
                    Le LBO est un rachat d&apos;entreprise par endettement. Avec Prosperia, vous investissez aux côtés
                    de la Banque.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className=''>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <PiggyBank className='h-12 w-12' />
                  <h3 className='text-xl font-bold text-center'>Un meilleur équilibre risque/rendement</h3>
                  <p className='text-center'>
                    Investir en LBO c&apos;est partager le risque avec une Banque qui finance 50% à 80% de
                    l&apos;opération, dans une PME rentable.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className=''>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <TrendingUp className='h-12 w-12 ' />
                  <h3 className='text-xl font-bold text-center'>Une classe d&apos;actif résiliente</h3>
                  <p className='text-center'>
                    Les investisseurs professionnels augmentent leurs allocations sur le Capital-Développement et le
                    Capital-Transmission.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className=''>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center space-y-4'>
                  <Users className='h-12 w-12 ' />
                  <h3 className='text-xl font-bold text-center'>Réservée aux investisseurs institutionnels</h3>
                  <p className='text-center'>
                    Seulement 5% des fonds investis en LBO proviennent d&apos;investisseurs privés avec des tickets
                    d&apos;entrée entre 100 000€ et 1M€.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
