import Hero from '@/components/landing/hero/hero';
import WhyChoose from '@/components/landing/why-choose/why-choose';
import HowItWorks from '@/components/landing/how-it-works/how-it-works';
import InvestmentStrategies from '@/components/landing/investment-strategies/investment-strategies';
import FAQ from '@/components/landing/faq/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prosperia | La plateforme pour investir dans les PME rentables',
  description:
    "Rejoignez la communauté d'investisseurs Prosperia et investissez dans la transmission et la croissance externe des PME rentables en France.",
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <InvestmentStrategies />
      <FAQ />
    </main>
  );
}
