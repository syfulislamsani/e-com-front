import React from 'react'
import heroImg from '../images/hero.webp'

const Hero = () => {
  return (
    <>
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero Left Side */}
            <div className='ml-5 md:ml-0 w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 font-prata'>
                <div className='text-[#414141] flex flex-col items-left'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>নতুন গাউনের কালেকশন</p>
                    </div>
                    <h1 className='text-3xl sm:py-3 lg:text-4xl 2xl:text-5xl leading-relaxed'>নরম কাপড়, স্টাইলিশ ডিজাইন</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={heroImg} alt="" />
        </div>
        <p className='text-[10px] italic text-right text-gray-500'>Photo by <a href="https://unsplash.com/@shoeibabhn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Shoeib Abolhassani</a> on <a href="https://unsplash.com/photos/woman-in-yellow-and-white-floral-hijab-Me2-Xz5FHQY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
    </>
  )
}

export default Hero