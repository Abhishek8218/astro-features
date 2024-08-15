import exp from "constants";
import Image from "next/image";

const features = [
    {
        title: 'Custom PDF Generation',
        description: 'Easily create personalized PDF documents  to streamline your reporting and ensure professional presentation.',
        image: "/example.webp"
      },
      {
        title: 'Order Management System',
        description: 'Track and manage all orders efficiently from a central hub, with real-time updates and comprehensive order details at your fingertips.',
        image: "/example.webp"
      },
      {
        title: 'Customer Account Creation',
        description: 'Quickly set up new customer accounts with a streamlined process, enabling immediate access to customer management and engagement tools.',
        image: "/example.webp"
      },
      {
        title: 'Comprehensive Customer Details Management',
        description: 'Efficiently manage and update detailed customer information to ensure accuracy and enhance customer relationship management.',
        image: "/example.webp"
      },
      {
        title: 'Advanced Full-Text Search',
        description: 'Perform powerful, full-text searches across your entire database to swiftly locate specific information and improve data accessibility.',
        image: "/example.webp"
      },
      {
        title: 'Simple and Insightful Customer Statistics',
        description: 'Access clear and actionable customer statistics to gain insights and make data-driven decisions for better engagement and strategy.',
        image: "/example.webp"
      },
      {
        title: 'Robust Credit Management',
        description: 'Handle customer credit limits and transactions efficiently, ensuring smooth financial operations and accurate credit tracking.',
        image: "/example.webp"
      },
      {
        title: 'Tailored Custom Solutions',
        description: 'Explore bespoke solutions designed to meet your unique business challenges with flexibility and customization to fit your specific needs.',
        image: "/example.webp"
      }
      
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
