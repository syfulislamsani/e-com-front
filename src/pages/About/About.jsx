import React from "react";
import Title from "../../components/Title";
import {assets} from "../../assets/assets";

const About = () => {
  return <div>
    
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className="w-full md:max-w-[450px]" src={ assets.about_img } alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Welcome to Hikmahh Lifestyle, your go-to destination for elegant and stylish ladies’ gowns. We specialize in bringing you the latest trends in fashion, combining timeless designs with modern styles to suit every occasion.</p>
        <p>Whether you're looking for something graceful for a wedding, a sophisticated evening look, or a classy outfit for a party — we've got you covered. Every gown in our collection is carefully selected for its quality, comfort, and beauty.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>At Hikmahh Lifestyle, we believe every woman deserves to feel confident and beautiful. Explore our collection and find the perfect gown that fits your style and personality.</p>
      </div>
    </div>

    <div className="text-xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance: </b>
        <p className="text-gray-600">At Hikmahh Lifestyle, we never compromise on quality. Each gown is crafted with precision using premium fabrics to ensure elegance, comfort, and durability. Our quality control team carefully inspects every piece before it reaches your wardrobe.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience: </b>
        <p className="text-gray-600">Shopping with us is easy and hassle-free. From a user-friendly website to doorstep delivery across Bangladesh, we’ve made sure your journey — from selecting to receiving your gown — is smooth and enjoyable.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Expectation: </b>
        <p className="text-gray-600">We understand what today’s women expect — style, comfort, and reliability. Our collection is curated to not only meet but exceed your expectations, helping you look your best at every event.</p>
      </div>
    </div>

  </div>;
};

export default About;
