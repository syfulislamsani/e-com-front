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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur esse alias, aliquam quo accusantium ad doloremque, ratione ipsum accusamus similique commodi, veritatis amet nemo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus sequi, libero quasi quo, ducimus vero obcaecati, possimus nesciunt excepturi nisi facilis iste nihil nemo architecto minima fuga blanditiis. Facilis, minima! Esse suscipit voluptate eum.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nobis. Vero dignissimos iusto culpa adipisci. Aliquam magni ea voluptatem earum. Sint asperiores voluptas accusantium exercitationem vero delectus tempore iure temporibus.</p>
      </div>
    </div>

    <div className="text-xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance: </b>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deserunt illo numquam doloribus optio in itaque quibusdam consectetur, hic consequuntur, dolorem delectus illum!</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience: </b>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deserunt illo numquam doloribus optio in itaque quibusdam consectetur, hic consequuntur, dolorem delectus illum!</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Expectation: </b>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deserunt illo numquam doloribus optio in itaque quibusdam consectetur, hic consequuntur, dolorem delectus illum!</p>
      </div>
    </div>

  </div>;
};

export default About;
