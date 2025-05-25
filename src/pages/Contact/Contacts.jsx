import React from "react";
import Title from "../../components/Title"
import {assets} from "../../assets/assets";
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagramSquare } from "react-icons/fa";


const Contacts = () => {
  return <div>
    
    <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
    </div>

    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
      <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
      <div className="flex flex-col justify-center items-start gap-5">
        <p className="font-semibold text-xl">Find Us Online</p>
        <p className="text-gray-500">Whatsapp: +880 1722-754817</p>
        <p className="text-gray-500">Tel: +880 1722-754817</p>
        <p className="text-gray-500">Email: hikmahh21062@gmail.com</p>
        {/*<p className="text-gray-500">Learn more about us.</p>
        <div className="flex gap-4 text-xl">
          <FaFacebook />
          <FaWhatsapp />
          <FaTiktok />
          <FaInstagramSquare />
        </div>*/}
      </div>
    </div>
  </div>;
};

export default Contacts;
