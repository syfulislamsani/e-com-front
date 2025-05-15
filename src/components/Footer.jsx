import React from 'react'
import logo from '../images/logo.png'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo_main} className='mb-5 w-20' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quibusdam ut iste sit est qui asperiores eos tempore eaque adipisci.
        </p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/cart'>Delivery</Link></li>
          <li><Link to='/privacy-policy'>Privacy & Policy</Link></li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>contact@foreveryou.com</li>
        </ul>
      </div>
      <div className='col-span-3'>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 styleoclock.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer