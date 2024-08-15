import Image from "next/image";

const ContactButton = () => {
  return (
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
  );
}

export default ContactButton;
