import { Head, Tailwind } from '@react-email/components'
export const InvitationTemplate = (invitaionCode: string) => {
  return (
    <Tailwind>
      <Head>
        <style>
          {`
          @media (min-width: 768px) {
            .md-text-3xl { font-size: 1.875rem; } /* 30px */
            .md-p-8 { padding: 2rem; } /* 32px */
          }
          `}
        </style>
      </Head>
      <div className='bg-gray-100 font-sans'>
        <div className='max-w-2xl mx-auto p-8'>
          <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
            <div className='bg-gray-900 p-6 text-center'>
              <h1 className='text-2xl md:text-3xl font-bold text-white'>Vous etes invité !</h1>
            </div>
            <div className='p-6 md:p-8'>
              <p className='text-gray-700 text-lg mb-6'>Un administrateur vous a invité a rejoindre l&apos;aventure</p>
              <div className='bg-gray-100 border-l-4 border-gray-900 p-4 mb-6'>
                <p className='text-gray-700'>Clique sur le bouton pour vous inscrire</p>
              </div>
              <div className='text-center'>
                <a
                  href={`http://localhost:3000/invitation/${invitaionCode}`}
                  className='inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out'>
                  S&apos;inscrire
                </a>
              </div>
              <p className='mt-6 text-center text-gray-600 text-sm'>
                Si vous avez des questions, n&apos;hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tailwind>
  )
}
