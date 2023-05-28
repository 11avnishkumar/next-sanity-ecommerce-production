import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from '../../components/Modal'
import Sidebar from '../../components/Sidebar'
import { client, urlFor } from '../../lib/client'
const Products = ({ products }) => {
    function formatDateWithoutTime(date) {
		const formattedDate = new Date(date).toLocaleDateString();
		return formattedDate;
	}
    const [showModal, setShowModal] = useState(false)
    const status = [
        { name: "Published", href: "" },
        { name: "Draft", href: "" },
        { name: "Hidden", href: "" },
        { name: "Rejected", href: "" },
        { name: "Under Review", href: "" },
    ]

    return (
        <div className='min-h-screen min-w-screen flex'>
            <Sidebar />
            {/* main container */}
            <div className='flex-1'>
                <div className='flex justify-between items-center  py-7 px-10'>
                    <div>
                        <p className='font-semi-bold text-2xl'>Products</p>
                        <p>Create Products</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className='inline-flex gap-x-2 bg-emerald-500 px-3 py-3 rounded-lg focus:outline-none focus:ring-emerald-300 focus:ring-4 text-white cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Create Products</span>
                    </button>
                    {showModal && <Modal closeModal={setShowModal} />}
                </div>
                <ul className='flex items-center gap-x-24 px-4 border-y border-gray-200'>
                    {status.map((item) => (
                        <li key={item._id}>
                            <button className='flex items-center gap-x-2 py-5 px-6 text-gray-500 hover:text-emerald-500 relative group'>
                                {item.name}
                                <span className='absolute -left-0 w-full bg-emerald-500 h-0.5 bottom-0 rounded scale-x-0 group-hover:scale-x-100'></span>
                            </button>
                        </li>
                    ))}
                </ul>
                <table className='w-full border-b border-gray-200'>
                    <thead>
                        <tr className='text-sm font-medium border-b border-gray-200'>
                            <td className='pl-10'>
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
                        {products.map((item) => (
                            <tr className='cursor-pointer hover:bg-gray-100 transition-colors' key={item._id}>
                                <td className='pl-10 flex gap-x-4 items-center py-4'>
                                    <input type="checkbox"
                                        className='w-5 h-5 focus:ring-emerald-500 rounded text-emerald-500 cursor-pointer'
                                    />
                                    <Image src={urlFor(item.image && item.image[0])}
                                        className="w-48 aspect-[3/2] rounded-lg object-contain border border-gray-200" alt=""
                                    />
                                    <div>
                                        <span className='text-lg font-semibold hover:text-emerald-500'>
                                            <Link href={`/product/${item.slug.current}`}>{item.name}</Link>
                                        </span>
                                    </div>
                                </td>
                                <td className='font-medium text-center'>${item.price}</td>
                                <td className='font-medium text-center'>10</td>
                                <td className='font-medium text-center'>{formatDateWithoutTime(item._createdAt)}</td>
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
export default Products
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    return {
        props: { products, bannerData }
    }
}