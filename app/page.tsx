import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { WhyChooseUs } from '@/components/why-choose-us';
import { FeaturedMenu } from '@/components/featured-menu';
import { OurStory } from '@/components/our-story';
import { Awards } from '@/components/awards';
import { Gallery } from '@/components/gallery';
import { Reviews } from '@/components/reviews';
import { OrderCta } from '@/components/order-cta';
import { Location } from '@/components/location';
import { Footer } from '@/components/footer';
import { WhatsappFab } from '@/components/whatsapp-fab';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <span id="top" />
        <Hero />
        <WhyChooseUs />
        <FeaturedMenu />
        <OurStory />
        <Awards />
        <Gallery />
        <Reviews />
        <OrderCta />
        <Location />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
