import React from 'react'

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <div className='px-10 py-4 border-t border-gray-300'>
      <div className='flex  flex-col md:flex-row md:justify-between md:items-center'>
        <div className='mb-4 md:mb-0'>
          <h1 className='text-xl md:text-3xl font-bold'>
            Subscribe to our newsletter
          </h1>
          <p className='text-sm md:text-md text-slate-600'>
            Stay up to date with the latest products.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <input
            type='text'
            className='w-full border border-gray-300 rounded-md'
            placeholder='Enter your email'
          />
          <input
            type='submit'
            value='Subscribe'
            className='w-full bg-black text-white px-4 py-3 text-sm rounded-md md:w-44'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 items-start mt-4 border-b border-gray-300 gap-x-4'>
          <div className='w-full'>
            <p className='text-gray-400'>Company</p>
            <a className="block" href=''>Paypal.</a>
            <a className="block" href=''>Meta.</a>
            <a className="block" href=''>Infosys.</a>
          </div>
          <div className='w-full mb-4 md:mb-0'>
            <p className='text-gray-400'>Resource</p>
            <a className='block' href=''>
              Blog
            </a>
            <a className='block' href=''>
              Newsletter
            </a>
            <a className='block' href=''>
              Events
            </a>
            <a className='block' href=''>
              Helpcenter
            </a>
            <a className='block' href=''>
              Tutorials
            </a>
            <a className='block' href=''>
              Support
            </a>
          </div>
          <div className=''>
            <p className='text-gray-400'>Social</p>
            <a className='block' href=''>Twitter</a>
            <a className='block' href=''>LinkedIn</a>
            <a className='block' href=''>Facebook</a>
            <a className='block' href=''>Instagram</a>
          </div>
          <div className=''>
            <p className='text-gray-400'>Legal</p>
            <a className='block' href=''>
              Terms
            </a>
            <a className='block' href=''>
              Privacy
            </a>
            <a className='block' href=''>
              Cookies
            </a>
            <a className='block' href=''>
              License
            </a>
            <a className='block' href=''>
              Settings
            </a>
            <a className='block' href=''>
              Contacts
            </a>
          </div>
      </div>
      <div className='flex justify-center items-center gap-6 py-6'>
        <p>&copy; {copyright} Electronics Fair, All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
