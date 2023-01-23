import React from 'react'

const Footer = () => {
  return (
    <div className='px-10 py-8 border-t border-gray-300'>
      <div className='flex space-y-6 flex-col md:flex-row justify-between items-center'>
        <div>
          <h1 className='text-2xl md:text-4xl font-bold'>Subscribe to our newsletter</h1>
          <p className='text-sm md:text-xl text-slate-600'>Stay up to date with the latest products.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <input type="text" className='border border-gray-300 rounded-md' placeholder='Enter your email'/>
          <input type="submit" value="Subscribe" className='w-full bg-black text-white px-4 py-3 text-sm rounded-md' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center border-b border-gray-300'>
        <div className='w-full md:w-2/3 px-6 py-6'>
          <p className='text-4xl text-emerald-400'><span className="text-9xl font-bold text-emerald-500">W</span>elcome, to the world&#39;s leading ecommerce plateform.</p>
        </div>
        <div className='px-3 md:px-6 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <div>
              <p className='text-gray-400'>Company</p>
              <a href="">Lorem ipsum dolor sit amet.</a>
              <a href="">Lorem ipsum dolor sit amet.</a>
              <a href="">Lorem ipsum dolor sit amet.</a>
            </div>
            <div>
              <p className='text-gray-400'>Resource</p>
              <div className='flex flex-col gap-3'>
                <a href="">Blog</a>
                <a href="">Newsletter</a>
                <a href="">Events</a>
                <a href="">Helpcenter</a>
                <a href="">Tutorials</a>
                <a href="">Support</a>  
              </div>
            </div>
            <div>
              <p className='text-gray-400'>Social</p>
              <div className='flex flex-col'>
                <a href="">Twitter</a>
                <a href="">LinkedIn</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
              </div>
            </div>
            <div>
              <p className='text-gray-400'>Legal</p>
              <div className='flex flex-col'>
                <a href=''>Terms</a>
                <a href=''>Privacy</a>
                <a href=''>Cookies</a>
                <a href=''>License</a>
                <a href=''>Settings</a>
                <a href=''>Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center gap-6 py-6'>
        <div>&copy; 2017 ecommerce, All rights reserved.</div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer