import { useState } from 'react'
import Link from 'next/link'
import { client, urlFor } from '../../lib/client'
const Orders = ({ products }) => {
  const [searchKeyword,setSearchKeyword] = useState('')
  const handleSearch = (getData) => {
   setSearchKeyword(getData);
  }

  return (
    <div className='min-h-screen bg-gray-100 px-6 py-6'>
      <div className='px-2 py-4 grid grid-cols-2 items-center'>
        <h1 className='text-xl md:text-2xl lg:text-4xl mb-3'>Your Orders</h1>
        <input
          type='text'
          className='w-full rounded-full outline-none px-4 placeholder:text-center'
          placeholder='Search Your Orders'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className='bg-white p-8 rounded-md'>
        <div className=''>
          <h1 className='text-3xl mb-4'>Delivered October 28</h1>
          {products.filter(item => item === "" ? item : item.name.toLowerCase().includes(searchKeyword)).map((item) => (
            <div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start border-b-2 border-gray-100 mb-3'
              key={item._id}
            >
              <div className='overflow-hidden'>
                <img src={urlFor(item.image[0])} className='h-full w-full object-cover' />
              </div>
              <div className='py-2'>
                <p className='text-lg font-bold mb-2'>{item.name}</p>
                <div className='flex flex-wrap justify-center items-start gap-4'>
                  <Link href=''>
                    <p className='bg-emerald-500 px-3 py-2.5 text-white rounded-full w-full text-center'>
                      Buy it again
                    </p>
                  </Link>
                  <Link href=''>
                    <p className='border border-1 border-emerald-500 px-2 sm:px-3 py-2.5 text-emerald-500 rounded-full w-full text-center'>
                      View item Details
                    </p>
                  </Link>
                </div>
              </div>
              {/* third column*/}
              <div className=''>
                <a className='block bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>
                  Get Product Support
                </a>

                <a className='block bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>
                  Track Package
                </a>

                <a className='block bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>
                  Return or replace items
                </a>

                <a className='block bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>
                  Share gift reciept
                </a>

                <a className='block bg-emerald-500 rounded-full px-3 py-3 text-white text-center mb-2'>
                  Write a product review
                </a>
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
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  return {
    props: { products },
  }
}
