'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import logo from '@/public/Prosperia_Logo-Principal-blanc.svg'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed top-0 w-full h-16 z-50 bg-primary text-white'>
      <div className='flex items-center justify-between h-full mx-9'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src={logo} alt='Logo' width={150} height={150} />
        </Link>

        <div className='flex items-center gap-6'>
          <nav className='hidden nav:flex items-center gap-6'>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1 text-sm font-medium'>
                Investir <ChevronDown className='h-4 w-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href='/investir/cap-developpement'>
                  <DropdownMenuItem className='cursor-pointer'>CAP Développement</DropdownMenuItem>
                </Link>
                <Link href='/investir/prime'>
                  <DropdownMenuItem className='cursor-pointer'>Prime</DropdownMenuItem>
                </Link>
                {/* <Link href='/investir/investir-avec-son-pea'>
                  <DropdownMenuItem className='cursor-pointer'>Investir avec son PEA</DropdownMenuItem>
                </Link> */}
                {/* <Link href='/investir/reduire-son-ir'>
                  <DropdownMenuItem className='cursor-pointer'>Réduire son IR</DropdownMenuItem>
                </Link> */}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1 text-sm font-medium'>
                Vous êtes <ChevronDown className='h-4 w-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href='/vous-etes/repreneurs'>
                  <DropdownMenuItem className='cursor-pointer'>Repreneurs</DropdownMenuItem>
                </Link>
                <Link href='/vous-etes/investisseurs'>
                  <DropdownMenuItem className='cursor-pointer'>Investisseurs</DropdownMenuItem>
                </Link>
                <Link href='/vous-etes/cedants'>
                  <DropdownMenuItem className='cursor-pointer'>Cédant</DropdownMenuItem>
                </Link>
                <Link href='/vous-etes/partenaires'>
                  <DropdownMenuItem className='cursor-pointer'>Partenaires</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1 text-sm font-medium'>
                Qui sommes-nous ? <ChevronDown className='h-4 w-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href='/qui-sommes-nous/temoignages'>
                  <DropdownMenuItem className='cursor-pointer'>Témoignages</DropdownMenuItem>
                </Link>
                <Link href='/qui-sommes-nous/conseils'>
                  <DropdownMenuItem className='cursor-pointer'>Conseils</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href='/comment-ca-marche' className='text-sm font-medium'>
              Comment ça marche ?
            </Link>
            <Link href='/contact' className='text-sm font-medium'>
              Contact
            </Link>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='nav:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-full sm:w-full'>
              <div className='flex flex-col gap-4 mt-8'>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-semibold mb-2'>Investir</div>
                  <Link href='/investir/cap-developpement' className='' onClick={() => setIsOpen(false)}>
                    CAP Développement
                  </Link>
                  <Link href='/investir/prime' className='' onClick={() => setIsOpen(false)}>
                    Prime
                  </Link>
                  <Link href='/investir/pea' className='' onClick={() => setIsOpen(false)}>
                    Investir avec son PEA
                  </Link>
                  <Link href='/investir/reduire-ir' className='' onClick={() => setIsOpen(false)}>
                    Réduire son IR
                  </Link>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-semibold mb-2'>Vous êtes</div>
                  <Link href='/vous-etes/repreneurs' className='' onClick={() => setIsOpen(false)}>
                    Repreneurs
                  </Link>
                  <Link href='/vous-etes/investisseurs' className='' onClick={() => setIsOpen(false)}>
                    Investisseurs
                  </Link>
                  <Link href='/vous-etes/cedants' className='' onClick={() => setIsOpen(false)}>
                    Cédant
                  </Link>
                  <Link href='/vous-etes/partenaires' className='' onClick={() => setIsOpen(false)}>
                    Partenaires
                  </Link>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-semibold mb-2'>Qui sommes-nous ?</div>
                  <Link href='/qui-sommes-nous/temoignages' className='' onClick={() => setIsOpen(false)}>
                    Témoignages
                  </Link>
                  <Link href='/qui-sommes-nous/conseils' className='' onClick={() => setIsOpen(false)}>
                    Conseils
                  </Link>
                </div>

                <Link href='/comment-ca-marche' className='text-lg font-semibold' onClick={() => setIsOpen(false)}>
                  Comment ça marche ?
                </Link>
                <Link href='/contact' className='text-lg font-semibold' onClick={() => setIsOpen(false)}>
                  Contact
                </Link>

                <div className='flex flex-col gap-2 mt-4'>
                  <Link href='/sign-in' onClick={() => setIsOpen(false)}>
                    <Button className='w-full'>Se connecter</Button>
                  </Link>
                  <Link href='/sign-up' onClick={() => setIsOpen(false)}>
                    <Button className='w-full'>Créer un compte</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className='flex items-center gap-4'>
            <div className='hidden nav:flex items-center gap-4'>
              <Link href='/'>
                <Button className='bg-card hover:bg-card/30 text-sm'>Se connecter</Button>
              </Link>
              <Link href='/'>
                <Button className='bg-card hover:bg-card/30 text-sm'>Créer un compte</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
