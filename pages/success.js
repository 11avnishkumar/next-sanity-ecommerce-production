import React, { useEffect, useState } from "react"
import {client} from '../lib/client'
import Link from "next/link"
import {Product} from '../components'
import { useStateContext } from '../context/StateContext';
const Success = ({products}) =>{
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
      }, []);
return(
<div className="max-w-screen min-h-screen px-12">
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-emerald-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-2xl md:text-3xl text-emerald-500">Thank for shopping! Your order has been placed.</p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-3">
        <Link href='/' >
            <p className="block w-full text-center bg-emerald-500 border border-2 rounded-full py-3 px-6 text-white cursor-pointer">
                Continue Shopping
            </p>
             
        </Link>
        <Link href='' >
            <p className="block w-full text-center border border-2 rounded-full border-emerald-500 text-emerald-500 px-6 py-3 cursor-pointer">
            Order Status
            </p>
        </Link>
    </div>
    <hr/>
    <div className="py-2">
        <p className="text-md md:text-2xl text-slate-600 font-bold">Products You Might Interested In</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
    </div>
</div>
)
}
export default Success
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return {
      props: { products }
  }
}