import React from 'react'
import Sidebar from '../../components/Sidebar'
import Link from 'next/link'
import {client, urlFor} from '../../lib/client'
const Orders = ({products}) => {
  return (
    <div className='min-h-screen flex'>
        <Sidebar/>
        <main className='flex-1 px-10 py-6 space-y-3'>
            <a href="" className='inline-flex items-center gap-2'><span>&larr;</span>Back to Orders</a>
            <h1 className='text-4xl font-bold'>Products</h1>
            <div className='grid grid-cols-3 gap-3'>
                {products.map((item) =>(
                <div className='peer overflow-hidden border border-gray-200 rounded-lg' key={item._id}>
                    <img src={urlFor(item.image && item.image[0])} alt="" />
                    <div className='px-10 py-3'>
                        <div className=' flex justify-between items-center'>
                            <span className='font-bold text-lg'>{item.name}</span>
                            <span className='font-bold text-lg'>{item.price}</span>
                        </div>
                        <p className='mb-4'>Color:blue</p>
                        <p className='text-center mb-2 font-bold text-sky-500'>View Mockups</p>
                    </div>
                </div>
                ))} 
            </div>  
        </main>
        <div className='py-3 border-l-2 border-gray-100'>
	    <div className='px-10 py-3 border-b-2 border-gray-100'>
            <h1 className='text-xl font-extrabold'>Order #124369 Summary</h1>
	    <p className='text-gray-400'>Order Placed 12-30-2020</p>
	    </div>
	    <div className='px-10 border-b-2 border-gray-100'>
	     <div className='py-3 border-b-2 border-gray-100'>
	     <h1 className='text-2xl font-bold'>Swag -- Pack1/29/2020</h1>
	     <div className=''>
	       <div className='flex justify-between items-center'>
	         <span className='text-gray-400'>$900 x 100</span>
	         <span className='font-bold'>$9,000.00</span>
	       </div>
	       <Link href=''>
	          <span className='cursor-pointer text-emerald-500'>
	  		Edit Breakdown
	          </span>
	       </Link>
	      </div>
	      </div>
	      
	     <div className='py-3 border-b-2 border-gray-100'>
	     <h1 className='text-2xl font-bold'>Swag -- Pack1/29/2020</h1>
	     <div className=''>
	       <div className='flex justify-between items-center'>
	         <span className='text-gray-400'>$900 x 100</span>
	         <span className='font-bold'>$9,000.00</span>
	       </div>
	       <Link href=''>
	          <span className='cursor-pointer text-emerald-500'>
	  		Edit Breakdown
	          </span>
	       </Link>
	      </div>
	      </div>

	     <div className='py-3 border-b-2 border-gray-100'>
	     <h1 className='text-2xl font-bold'>Swag -- Pack1/29/2020</h1>
	     <div className=''>
	       <div className='flex justify-between items-center'>
	         <span className='text-gray-400'>$900 x 100</span>
	         <span className='font-bold'>$9,000.00</span>
	       </div>
	       <Link href=''>
	          <span className='cursor-pointer text-emerald-500'>
	  		Edit Breakdown
	          </span>
	       </Link>
	      </div>
	      </div>
	
	     <div className='py-3'>
	     <h1 className='text-2xl font-bold'>Swag -- Pack1/29/2020</h1>
	     <div className=''>
	       <div className='flex justify-between items-center'>
	         <span className='text-gray-400'>$900 x 100</span>
	         <span className='font-bold'>$9,000.00</span>
	       </div>
	       <Link href=''>
	          <span className='cursor-pointer text-emerald-500'>
	  		Edit Breakdown
	          </span>
	       </Link>
	      </div>
	      </div>  
	    </div>
	    <div className='px-10 py-3'>
	    	<div className='flex justify-between items-center'>
	           <span className='text-gray-400'>Sub total</span>
	           <span>$4,785.00</span>
	    	</div>
		
	    	<div className='flex justify-between items-center'>
	           <span className='text-gray-400'>Shipping</span>
	           <span>$4,785.00</span>
	    	</div>

	    	<div className='flex justify-between items-center border-b-2 border-gray-100 pb-3 mb-3'>
	           <span className='text-gray-400'>Warehouse</span>
	           <span>$4,785.00</span>
	    	</div>

	    	<div className='flex justify-between items-center mb-3'>
	           <span className='text-gray-400'>Total</span>
	           <span className='text-xl font-bold'>$4,785.00</span>
	    	</div>
	        <p className='bg-emerald-500 px-3 py-3 text-white rounded-full text-center cursor-pointer'>Continue</p> 
	    </div>
        </div>
    </div>
  )
}

export default Orders
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    return {
      props: { products, bannerData }
  }
}
