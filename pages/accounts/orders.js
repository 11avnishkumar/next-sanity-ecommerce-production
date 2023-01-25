import react,{useState} from 'react'
import Link from 'next/link'
import {client, urlFor} from '../../lib/client'
const Orders = ({products}) => {    
    return (
        <div className='min-h-screen bg-gray-100 px-6 py-6'>
            <div className="px-2 py-4 grid grid-cols-2"> 
                <h1 className='text-4xl mb-3'>Your Orders</h1>
	       <form>
	        <input type="text"  
	          className='w-full rounded-full outline-none px-4 placeholder:text-center'
	          value='' 
	          placeholder='Search Your Orders' 
	          onChange={''}/>
	       </form>
	       </div>
	       <div className='bg-white p-8 rounded-md'>
	       <div className=''>
	       {products.map((item) => (
	    	<div className='grid grid-cols-3 gap-3 items-center border-b-2 border-gray-100 mb-3' key={item._id}>
		  <div className='col-span-2'>
		    <h1 className='text-3xl'>Delivered October 28</h1>   
		  <div className='grid grid-cols-3 items-center gap-4'>
		  <div className='overflow-hidden h-48 w-48'>
		     <img src={urlFor(item.image[0])} className='h-full w-full'/>
		  </div>
		  <div className='col-span-2 py-2'>
		     <p className='text-lg font-bold'>{item.name}</p>
		     <p className='mb-2'>{item.details}</p>
		     <div className='flex justify-between items-center gap-4'>
		     <Link href=''>
		       <p className='bg-emerald-500 px-3 py-3 text-white rounded-full w-full text-center'>
		       Buy it again
		       </p>
		     </Link>
                     <Link href=''>
		        <p className='border border-1 border-emerald-500 px-3 py-3 text-emerald-500 rounded-full w-full text-center'>View item Details</p>
		     </Link>
		     </div>
		  </div>
		  </div>
		  </div>
		  <div className='flex flex-col'>
		      <a className='bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>Get Product Support</a>
		      
		      <a className='bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>Track Package</a>

		      <a className='bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>Return or replace items</a>

		      <a className='bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>Share gift reciept</a>

		      <a className='bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>Write a product review</a>
		  </div>
	        </div>
	       ))}
	      </div>
	    </div>
        </div>
    )
}

export default Orders
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return {
      props: { products }
  }
}

