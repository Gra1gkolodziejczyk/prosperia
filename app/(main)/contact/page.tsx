import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FormMessage } from './components/messageForm';

export const metadata: Metadata = {
  title: 'Prosperia | Contact',
  description:
    'Contactez-nous pour toute question ou demande d&apos;information',
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const Contact = () => {
  return (
    <div className='container mx-auto mt-20 px-4 py-12'>
      <h1 className='text-4xl font-bold text-center mb-8 tracking-tighter sm:text-5xl dark:text-white'>
        Contactez-nous
      </h1>
      <p className='text-lg text-center text-muted-foreground mb-12'>
        Notre équipe est à votre disposition pour répondre à toutes vos
        questions
      </p>

      <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
        {/* Informations de contact */}
        <div className='space-y-8'>
          <h2 className='text-2xl font-semibold mb-6'>Nos Coordonnées</h2>

          <div className='space-y-6'>
            <div className='flex items-start space-x-4'>
              <MapPin className='w-6 h-6 text-secondary mt-1' />
              <div>
                <h3 className='font-medium mb-1'>Adresse</h3>
                <p className='text-muted-foreground'>
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Phone className='w-6 h-6 text-secondary mt-1' />
              <div>
                <h3 className='font-medium mb-1'>Téléphone</h3>
                <p className='text-muted-foreground'>+33 (0)1 23 45 67 89</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Mail className='w-6 h-6 text-secondary mt-1' />
              <div>
                <h3 className='font-medium mb-1'>Email</h3>
                <p className='text-muted-foreground'>contact@prosperia.com</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Clock className='w-6 h-6 text-secondary mt-1' />
              <div>
                <h3 className='font-medium mb-1'>Horaires d&apos;ouverture</h3>
                <p className='text-muted-foreground'>
                  Lundi - Vendredi : 9h00 - 18h00
                  <br />
                  Samedi - Dimanche : Fermé
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className='bg-card p-8 rounded-lg shadow-sm'>
          <h2 className='text-2xl font-semibold mb-6'>
            Envoyez-nous un message
          </h2>
          <FormMessage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
