import React, { useContext, useState } from "react";
import Title from "../../components/Title"
import CartTotal from "../../components/CartTotal"
import { assets } from "../../assets/assets";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, setDelivery_fee, products } = useContext(ShopContext);
  const [formData, setFromData] = useState({
    name:'',
    email:'',
    zilla:'',
    thana:'',
    home_address:'',
    city:'',
    area:'',
    phone:''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFromData((data) => ({ ...data, [name]: value }));

    if (name === 'area') {
      if (value === 'inside_Dhaka') {
        setDelivery_fee(60);
      } else {
        setDelivery_fee(100);
      }
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      
      let orderItems = []

      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]

              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method){
        // api calls for cod
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
          if(response.data.success){
            setCartItems({})
            setDelivery_fee(60)
            navigate('/orders')
          }
          else{
            toast.error(response.data.message)
          }
          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error)
        res.json({success:false, message:error.message})
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 sm:max-w-[480px]">

        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          {!token && <p className="text-red-500 text-sm">Please login first to order.</p>}
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='name' value={formData.name} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Name" />
        </div>
        <input onChange={onChangeHandler} name='email' value={formData.email} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address (Optional)" />
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
        <input required onChange={onChangeHandler} name='zilla' value={formData.zilla} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zilla" />
        <input required onChange={onChangeHandler} name='thana' value={formData.thana} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Thana" />
        <input required onChange={onChangeHandler} name='home_address' value={formData.home_address} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Address" />
        <input required onChange={onChangeHandler} name='city' value={formData.city} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
        <div className="flex gap-3">
          <select required onChange={onChangeHandler} name='area' value={formData.area} className="border border-gray-300 rounded py-1.5 px-3.5 w-full">
            <option value="" disabled>Select Delivery Area</option>
            <option value="inside_Dhaka">Inside Dhaka</option>
            <option value="outside_Dhaka">Outside Dhaka</option>
          </select>
        </div>
      </div>

      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('bkash')} className="flex items-center gap-3 border p-2 px-3 opacity-60 pointer-events-none">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'bkash' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            {/* <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div> */}
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACR ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
};

export default PlaceOrder;
