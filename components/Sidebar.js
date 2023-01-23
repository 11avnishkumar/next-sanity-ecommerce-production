import React from 'react'
import {ComputerDesktopIcon} from '@heroicons/react/24/outline'
import {Square3Stack3DIcon} from '@heroicons/react/24/outline'
import {ChartBar} from '@heroicons/react/24/outline'
import Link from 'next/link'
const Sidebar = () => {
    const icon = [ComputerDesktopIcon,Square3Stack3DIcon,ChartBar,ChartBar]
    const navigation = [
        {name:"overview",href:"/dashboard",},
        {name:"products",href:"/dashboard/products/",},
        {name:"orders",href:"/dashboard/orders/",},
    ]
  return (
    <div className='min-h-screen'>
        <nav className='py-6 px-10 w-64 border-r border-gray-200'>
            {navigation.map((nav,i) => (
            <div className='py-3 px-10 bg-emerald-500 rounded-md text-white cursor-pointer mb-4'>
                <Link href={nav.href}>
                <div className='flex items-center gap-2'>
                <span className='capitalize'>{nav.name}</span>
                </div>
                </Link>
            </div>
            ))}
        </nav>
    </div>
  )
}

export default Sidebar