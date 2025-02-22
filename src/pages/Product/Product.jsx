import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import {assets} from "../../assets/assets";
import RelatedProducts from "../../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
    
  }

  const cartBuyPage = (x) => {
    if(size){
      addToCart(productData._id,size);
      if(x===2)
        navigate('/cart');
    }
    else {
      toast.error('Please select a size');
    }
  }

  useEffect(()=>{
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shirnk-0 cursor-pointer" alt="" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <div className="mb-4">
            {productData.sales && <span className="mt-4 px-6 py-1 font-bold text-white bg-orange-500">{productData.sales}%  SALES</span>}
          </div>
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 "/>
            <img src={assets.star_icon} alt="" className="w-3 "/>
            <img src={assets.star_icon} alt="" className="w-3 "/>
            <img src={assets.star_icon} alt="" className="w-3 "/>
            <img src={assets.star_dull_icon} alt="" className="w-3 "/>
            {/* <p className="pl-2">{122}</p> */}
          </div>
          <div className='mt-4 flex gap-3'>
            <p className={`text-xl ${productData.sales ? 'text-orange-500' : 'text-gray-900'} font-medium`}>{currency}{productData.sales ? productData.discountedPrice : productData.price}</p>
            { productData.sales && <p className='text-xl font-medium line-through'>{currency}{productData.price}</p>}
          </div>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index)=>(
              <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>cartBuyPage(1)} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700 hover:bg-gray-900">Add to cart</button>
            <button onClick={()=>cartBuyPage(2)} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700 hover:bg-gray-900">Buy Now</button>
          </div>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>- 100% Original product</p>
              <p>- Cash on delivery is available</p>
              <p>- Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review section */}
      <div className="mt-20">
          <div className="flex">
              <b className="border px-5 py-3 text-sm">Description</b>
              {/* <p className="border px-5 py-3 text-sm">Reviews (122)</p> */}
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis mollitia quibusdam inventore doloremque aperiam molestias deleniti, maiores fuga eius laboriosam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint est esse recusandae possimus neque hic suscipit ipsa nesciunt dolorem enim? Accusamus recusandae libero ipsa eos veritatis facere consequatur fugiat assumenda, omnis maiores rem aspernatur nesciunt?</p>
          </div>
      </div>

      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
