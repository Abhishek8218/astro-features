import Image from "next/image";
import { MaterialSymbol } from "react-material-symbols";

export default function Home() {

  const features = [
    {
      title: 'Dynamic Kundli', 
      description: 'Generate and view dynamic Kundli charts instantly with real-time updates and personalized astrological insights.' ,
      image: "/example.webp"
    },
    {
      title: 'Kundli Generation', 
      description: 'Create accurate and detailed Kundli charts using our advanced astrological algorithms, providing deep insights into your future.' ,
      image: "/example.webp"
    },
    {
      title: 'PDF Download', 
      description: 'Download your Kundli charts in high-quality PDF format for easy sharing and offline viewing, ensuring you always have access to your astrological information.' ,
      image: "/example.webp"
    },
    {
      title: 'Customer List and Smart Filter', 
      description: 'View a comprehensive list of customers and use smart filtering options to sort and find customers based on various attributes and astrological data.' ,
      image: "/example.webp"
    },
    {
      title: 'Customer Creation with Useful Astrological Information', 
            description: 'Create new customer profiles enriched with detailed astrological information to provide personalized services and insights.' ,
      image: "/example.webp"
    },
    {
      title: 'Customer Details Editing', 
            description: 'Easily view and edit customer details, including personal information and astrological data, to keep your records up-to-date and accurate.' ,
      image: "/example.webp"
    },
  ];

  return (
    <section className="relative min-h-screen text-gray-900 py-12 px-6 md:px-12">


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            All your online orders need just one restaurant billing software
          </h1>
          <p className="text-lg mb-6">
            Accept multiple orders, manage riders, reconcile order payments and do much more without any hassle!
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            Take a free demo
          </button>
        </div>
        <div className="md:w-1/2 mt-5 flex justify-center">
          {/* Add image here */}
          <Image src="/hero.webp" alt="Hero" width={300} height={300} className="w-[450px] h-80 md:h-[350px]" />
        </div>
      </section>

     {/* Features Section */}
      <div className="relative z-10 min-h-screen bg-opacity-70">
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-12 mt-5">
          Make order management quicker & more efficient
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-28 xl:px-32">
          {features.map((feature, index) => (
            <div key={index} className="rounded-l self-center max-w-[480px] h-[480px]">
              <Image src={feature.image} alt={feature.title} width={300} height={300} className="mb-4 w-full h-[350px] object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
          
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-20 xl:mx-40">
          <a 
            href="https://wa.me/yourwhatsappnumber?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition duration-300 flex flex-row"
          >
            Contact Us 
            <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="ml-4" />
          </a>
         
        </div>
      </div>
    </section>
  );
}
