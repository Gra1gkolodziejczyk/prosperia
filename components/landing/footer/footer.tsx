import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.webp';

export default function Footer() {
  return (
    <footer className='w-full py-12 bg-muted/50'>
      <div className='container px-4 mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {/* Logo et Description */}
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <Image src={logo} alt='Logo' width={32} height={32} />
              <span className='font-bold text-foreground'>Prosperia</span>
            </Link>
            <p className='text-sm text-muted-foreground mb-4 max-w-sm'>
              Prosperia vous accompagne dans la gestion de votre patrimoine avec
              des solutions innovantes et personnalisées.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className='font-semibold mb-3 text-foreground'>Navigation</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/qui-sommes-nous'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className='font-semibold mb-3 text-foreground'>Légal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/mentions-legales'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href='/politique-confidentialite'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href='/cgv'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href='/cookies'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-semibold mb-3 text-foreground'>Contact</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='tel:+33100000000'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  +33 1 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href='mailto:contact@prosperia.fr'
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  contact@prosperia.fr
                </a>
              </li>
              <li className='text-sm text-muted-foreground'>
                123 Avenue Example
                <br />
                75000 Paris
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className='border-t border-border my-8' />

        {/* Copyright et Réseaux sociaux */}
        <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Prosperia. Tous droits réservés.
          </p>
          <div className='flex items-center gap-6'>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'
            >
              Twitter
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'
            >
              LinkedIn
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
