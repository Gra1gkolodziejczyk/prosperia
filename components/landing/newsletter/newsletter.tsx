// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import Link from 'next/link';

// export default function Newsletter() {
//   return (
//     <section className='w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden'>
//       {/* Effet de fond décoratif */}
//       <div className='absolute inset-0'>
//         <div className='absolute inset-y-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl'>
//           <div className='relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10' />
//         </div>
//       </div>

//       <div className='container relative px-4 md:px-6'>
//         <div className='flex flex-col items-center justify-center space-y-4 text-center'>
//           <div className='space-y-2'>
//             <h2 className='text-3xl font-bold tracking-tighter text-foreground sm:text-5xl'>
//               Restez informé
//             </h2>
//             <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
//               Inscrivez-vous à notre newsletter pour recevoir nos dernières
//               actualités et conseils
//             </p>
//           </div>
//           <div className='w-full max-w-sm space-y-2'>
//             <form className='flex flex-col gap-2 min-[400px]:flex-row'>
//               <Input
//                 className='flex-1 bg-background/80 border-border focus:border-primary transition-colors'
//                 placeholder='Entrez votre email'
//                 type='email'
//                 required
//               />
//               <Button
//                 type='submit'
//                 className='bg-primary text-white hover:bg-primary/90 transition-colors'
//               >
//                 S&apos;inscrire
//               </Button>
//             </form>
//             <p className='text-xs text-muted-foreground'>
//               En vous inscrivant, vous acceptez nos{' '}
//               <Link
//                 href='/politique-confidentialite'
//                 className='text-secondary hover:text-foreground underline underline-offset-2'
//               >
//                 conditions d&apos;utilisation
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
