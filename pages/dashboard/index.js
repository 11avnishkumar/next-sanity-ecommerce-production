import React from 'react'
import Link from 'next/link'
import {client, urlFor} from '../../lib/client'
const index = ({products}) => {
  
  const status = [
    {name:"Published",href:""},
    {name:"Draft",href:""},
    {name:"Hidden",href:""},
    {name:"Rejected",href:""},
    {name:"Under Review",href:""},
  ]
  
  return (
    <div className='min-h-screen min-w-screen flex'>
        <div className='min-h-screen'>
            <nav className='py-6 px-10 w-64 border-r border-gray-200'>
                <div className='mb-3 py-6 px-10'>
                    <Link href=''>
                    <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <span>Overview</span>
                    </div>
                    </Link>
                </div>
                <div className='mb-3 py-6 px-10'>
                    <Link href=''>
                    <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>
                    <span>Products</span>
                    </div>
                    </Link>
                </div>
                <div className='mb-3 py-6 px-10'>
                    <Link href=''>
                    <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <span>Analytics</span>
                    </div>
                    </Link>
                </div>
                <div className='mb-3 py-6 px-10'>
                    <Link href=''>
                    <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <span>Overview</span>
                    </div>
                    </Link>
                </div>
                <div className='mb-3 py-6 px-10'>
                    <Link href=''>
                    <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <span>Overview</span>
                    </div>
                    </Link>
                </div>
            </nav>
        </div>
        {/* main container */}
        <div className='flex-1'>
            <div className='flex justify-between items-center  py-7 px-10'>
                <div>
                    <p className='font-semi-bold text-2xl'>Products</p>
                    <p>Create Products</p>
                </div>
                <button className='inline-flex gap-x-2 bg-emerald-500 px-3 py-3 rounded-lg focus:outline-none focus:ring-emerald-300 focus:ring-4 text-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Create Products</span>
                </button>
            </div>
            <ul className='flex items-center gap-x-24 px-4 border-y border-gray-200'>
            {status.map((item) => (
                <li key={item._id}>
                    <button  className='flex items-center gap-x-2 py-5 px-6 text-gray-500 hover:text-emerald-500 relative group'>
                    {item.name}
                    <span className='absolute -left-0 w-full bg-emerald-500 h-0.5 bottom-0 rounded scale-x-0 group-hover:scale-x-100'></span>
                    </button>
                </li>
            ))}
            </ul>
            <table className='w-full border-b border-gray-200'>
                <thead>
                    <tr className='text-sm font-medium flex items-center gap-x-24 border-b border-gray-200'>
                        <td className='pl-10' style={{'columnSpan':2}}>
                            <div className='flex items-center gap-x-4'>
                                <input type="checkbox" className='w-5 h-5 focus:ring-emerald-500 rounded text-emerald-500 cursor-pointer' />
                                <span>Products</span>
                            </div>
                        </td>
                        <td className='px-4 py-4 text-center'>Price</td>
                        <td className='px-4 py-4 text-center'>Stock</td>
                        <td className='px-4 py-4 text-center'>Date</td>
                        <td className='px-4 py-4 text-center'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) =>(
                    <tr className='flex items-center gap-x-24 cursor-pointer hover:bg-gray-100 transition-colors'>
                        <td className='pl-10 flex gap-x-4 items-center py-4'>
                            {console.log(item)}
                            <div className='flex items-center gap-x-4'>
                                <input type="checkbox" className='w-5 h-5 focus:ring-emerald-500 rounded text-emerald-500 cursor-pointer' />
                                <img src={urlFor(item.image && item.image[0])} className="w-48 aspect-[3/2 rounded-lg object-cover object-top border border-gray-200]" alt="" />
                                <span className='text-lg font-semibold hover:text-emerald-500'>
                                <Link href={`/product/${item.slug.current}`}>{item.name}</Link>    
                                </span>
                            </div>
                        </td>
                        <td className='font-medium text-center'>{item.price}</td>
                        <td className='font-medium text-center'>10</td>
                        <td className='font-medium text-center'>{item._createdAt}</td>
                        <td className='font-medium text-center flex items-center gap-x-6'>
                            <div className='flex items-center'>
                            <Link href=''>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </Link>    
                            </div>
                            <div className='flex items-center'>
                            <Link href=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            </Link>    
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default index
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    return {
      props: { products, bannerData }
  }
}