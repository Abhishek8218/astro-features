import ContactButton from "./../components/contactButton";
import FeaturesSection from "./../components/features";
import Footer from "./../components/footer";
import HeroSection from "./../components/hero";


export default function Home() {
  return (
    <section className="relative min-h-screen text-gray-900 pt-12 px-6 md:px-12">
      <HeroSection />
      <FeaturesSection />
      <ContactButton />

    </section>
  );
}
