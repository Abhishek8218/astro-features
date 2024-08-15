import Image from "next/image";

const ContactButton = () => {
  return (
    <div className="flex justify-center mt-20 xl:mx-40">
      <a 
        href="https://wa.me/919149050623?text=Hello,%20Astro" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition duration-300 flex flex-row"
      >
        Contact Us 
        <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="ml-4" />
      </a>
    </div>
  );
}

export default ContactButton;
