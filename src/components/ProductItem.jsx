import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, sales, discountedPrice, price}) => {
    
    const {currency} = useContext(ShopContext);
    
  return (
    <Link onClick={()=>window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer group' to={`/product/${id}`}>
        <div className='relative overflow-hidden'>
          { sales && <span className='absolute top-2 right-0 pb-1 bg-orange-500 text-white font-semibold w-10 h-6 rounded-sm flex items-center justify-center z-10'>{sales}%</span>}
          <img className='group-hover:scale-110 duration-200 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <div className='flex gap-3'>
          <p className={`text-sm ${sales ? 'text-orange-500' : 'text-gray-900'} font-medium`}>{currency}{sales ? discountedPrice : price}</p>
          { sales && <p className='text-sm font-medium line-through'>{currency}{price}</p>}
        </div>
    </Link>
  )
}

export default ProductItem