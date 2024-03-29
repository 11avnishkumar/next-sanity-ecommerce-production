import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { urlFor } from '../lib/client'
export default function Banner({heroBanner}) {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="text-4xl sm:text-6xl md:text-8xl text-center">Electronics <span className="text-emerald-500">Fair</span></p>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">{heroBanner.smallText}</span>
              <span className="hidden md:inline">{heroBanner.smallText}</span>
            </p>
          </div>
        </div>
        {/* New Product Details goes here */}
        <div className='mt-4 overflow-hidden relative flex items-center px-15 py-10'>
          <div className='space-y-6'>
		        <p className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-emerald-500 leading-relaxed'>{heroBanner.discount}</p>
	          <a className='block w-full md:w-48 text-center mt-3 bg-emerald-500 rounded-full py-3 text-md px-4 text-white'>{heroBanner.buttonText}</a>
          </div>
          <img src={urlFor(heroBanner.image)} alt="" className='absolute top-24 sm:top-0 right-0 sm:right-12 w-28 sm:48 md:w-80'/>
        </div>
        <div className='mt-3'>
          <p className='text-md'>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
} 
