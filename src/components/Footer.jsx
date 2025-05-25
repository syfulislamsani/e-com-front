import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
      <div>
        <img src={logo} className='mb-5 w-20' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Hikmahh Lifestyle brings you an exclusive collection of elegant and stylish gowns designed to make every woman feel confident and beautiful. From casual comfort to luxurious evening wear, our pieces are crafted with care, quality, and a touch of timeless charm.
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
          <li>+880 1722-754817</li>
        </ul>
      </div>
      <div className='col-span-3'>
        <hr />
        <p className='pt-5 text-sm text-center'>Copyright 2025 hikmahlifestyle.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer