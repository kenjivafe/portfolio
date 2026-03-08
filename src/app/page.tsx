import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import ExperienceComponent from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      
      {/* Index Section (Hero) */}
      <section id="index" className="relative pt-16">
        <Hero />
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="relative mr-auto ml-auto sm:px-6 sm:pb-16 pb-12 pr-4 pl-4">
        <FeaturedWork />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative mr-auto ml-auto sm:px-6 sm:pb-16 pb-12 pr-4 pl-4">
        <ExperienceComponent />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative mr-auto ml-auto sm:px-6 sm:pb-16 pb-12 pr-4 pl-4">
        <Contact />
      </section>
    </div>
  );
}
