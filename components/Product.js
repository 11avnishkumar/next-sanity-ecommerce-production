import React from 'react'
import Link from 'next/link';
import {StarIcon} from '@heroicons/react/20/solid'
import {urlFor} from '../lib/client';
const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div className='py-3 px-3'>
      <Link href={`/product/${slug.current}`} className='block'>
        <div className='bg-gray-100 rounded-lg overflow-hidden'>
          <img src={urlFor(image && image[0])} alt={name} className='h-full w-full object-cover cursor-pointer' />
        </div>
	    </Link>
        <div>  
          <div className='py-4'>
            <div className='flex justify-start items-center mb-2'>
                  <StarIcon className='h-7 w-7 text-yellow-400'/>
                  <StarIcon className='h-7 w-7 text-yellow-400'/>
                  <StarIcon className='h-7 w-7 text-yellow-400'/>
                  <StarIcon className='h-7 w-7 text-yellow-400'/>
                  ({20})
            </div>
            <div className='flex justify-between items-center mb-2'> 
              <p className='text-xl'>{name}</p>
              <p className='text-xl font-bold'>${price}</p>
            </div>
            <p className='text-xl text-emerald-500'>In Stock</p>
          </div>
        </div>
    </div>
  )
}
export default Product
