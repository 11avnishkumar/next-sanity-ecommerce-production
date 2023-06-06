import react,{useState} from 'react'
import Link from 'next/link'
const Index = () => {    
    return (
        <div className='min-h-screen bg-gray-100 px-6 py-6'>
            <div className="px-2 py-4">
                <h1 className='text-4xl mb-3'>Your Account</h1> 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4'>
                    <Link href='/accounts/orders'>
                    <div className='cursor-pointer bg-white shadow-md rounded-md px-4 py-4 text-center'>
                        <p className='text-2xl mb-2'>Orders</p>
                        <p className='text-gray-600'>Track Orders,Download Invoice</p>
                    </div>
                    </Link>

                    <Link href='/accounts/profile'>
                    <div className='cursor-pointer bg-white shadow-md rounded-md px-4 py-4 text-center'>
                        <p className='text-2xl mb-2'>Login and Security</p>
                        <p className='text-gray-600'>Change Password,Update name</p>
                    </div>

                    </Link>
                    <Link href='/accounts/address'>
                    <div className='cursor-pointer bg-white shadow-md rounded-md px-4 py-4 text-center'>
                        <p className='text-2xl mb-2'>Address</p>
                        <p className='text-gray-600'>Edit,Add,Delete address</p>
                    </div>
                    </Link>
                    <Link href=''>
                    <div className='cursor-pointer bg-white shadow-md rounded-md px-4 py-4 text-center'>
                        <p className='text-2xl mb-2'>Address</p>
                        <p className='text-gray-600'>Edit,Add,Delete address</p>
                    </div>
                    </Link>
                    <Link href=''>
                    <div className='cursor-pointer bg-white shadow-md rounded-md px-4 py-4 text-center'>
                        <p className='text-2xl mb-2'>Payments</p>
                        <p className='text-gray-600'>Add Payement methods,add card</p>
                    </div>
                    </Link>
                    <Link href=''>
                    <div className='cursor-pointer bg-white shadow-md rounded-md px-4 py-4 text-center'>
                        <p className='text-2xl mb-2'>Wallet</p>
                        <p className='text-gray-600'>Add money to your wallet.</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index

