import exp from "constants";
import Image from "next/image";

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

const FeaturesSection = () => {
  return (
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
    </div>
  );
}

export default FeaturesSection;
