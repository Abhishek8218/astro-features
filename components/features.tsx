import exp from "constants";
import Image from "next/image";

const features = [
    {
        title: 'Custom PDF Generation',
        description: 'Easily create personalized PDF documents  to streamline your reporting and ensure professional presentation.',
        image: "/6.png"
      },
      {
        title: 'Order Management System',
        description: 'Track and manage all orders efficiently from a central hub, with real-time updates and comprehensive order details at your fingertips.',
        image: "/4.png"
      },
      {
        title: 'Customer Account Creation',
        description: 'Quickly set up new customer accounts with a streamlined process, enabling immediate access to customer management and engagement tools.',
        image: "/1.png"
      },
      {
        title: 'Comprehensive Customer Details Management',
        description: 'Efficiently manage and update detailed customer information to ensure accuracy and enhance customer relationship management.',
        image: "/5.png"
      },
      {
        title: 'Advanced Full-Text Search',
        description: 'Perform powerful, full-text searches across your entire database to swiftly locate specific information and improve data accessibility.',
        image: "/3.png"
      },
      {
        title: 'Simple and Insightful Customer Statistics',
        description: 'Access clear and actionable customer statistics to gain insights and make data-driven decisions for better engagement and strategy.',
        image: "/2.png"
      },
      {
        title: 'Robust Credit Management',
        description: 'Handle customer credit limits and transactions efficiently, ensuring smooth financial operations and accurate credit tracking.',
        image: "/7.png"
      },
      {
        title: 'Tailored Custom Solutions',
        description: 'Explore bespoke solutions designed to meet your unique business challenges with flexibility and customization to fit your specific needs.',
        image: "/grandeur-logo.webp"
      }
      
];

const FeaturesSection = () => {
  return (
    <div className="relative z-10 min-h-screen bg-opacity-70">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-12 mt-5">
      Enhance the speed and efficiency of Astro&apos;s customer management
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8   gap-y-20 justify-items-center mt-28 xl:px-32">
        {features.map((feature, index) => (
          <div key={index} className="rounded-l self-center max-w-[480px] h-[480px]">
            <img src={feature.image} alt={feature.title}  className={`mb-4 w-full h-[350px] ${index == 7 ? "object-none": "object-contain"} rounded-lg shadow-md `} />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
