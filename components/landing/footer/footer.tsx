import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.webp'

export default function Footer() {
  return (
    <footer className='w-full py-12 bg-primary text-white'>
      <div className='container px-4 mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {/* Logo et Description */}
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <Image src={logo} alt='Logo' width={32} height={32} />
              <span className='font-bold'>Prosperia</span>
            </Link>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className='font-semibold mb-3'>Navigation</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='text-sm'>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href='/' className='text-sm'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/' className='text-sm'>
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href='/' className='text-sm'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className='font-semibold mb-3'>Légal</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='text-sm'>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href='/' className='text-sm'>
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href='/' className='text-sm'>
                  CGV
                </Link>
              </li>
              <li>
                <Link href='/' className='text-sm'>
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-semibold mb-3'>Contact</h3>
            <ul className='space-y-2'>
              <li>
                <a href='tel:+33100000000' className='text-sm'>
                  +33 1 00 00 00 00
                </a>
              </li>
              <li>
                <a href='mailto:contact@prosperia.fr' className='text-sm'>
                  contact@prosperia.fr
                </a>
              </li>
              <li className='text-sm'>
                123 Avenue Example
                <br />
                75000 Paris
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className='my-8' />

        {/* Copyright et Réseaux sociaux */}
        <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
          <p className='text-sm'>© {new Date().getFullYear()} Prosperia. Tous droits réservés.</p>
          <div className='flex items-center gap-6'>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-sm'>
              Twitter
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-sm'>
              LinkedIn
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-sm'>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
