import React from 'react'

const Footer = () => {
  return (
    <div className='px-10 py-8 border-t border-gray-300'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-4xl font-bold'>Subscribe to our newsletter</h1>
          <p className='text-xl text-slate-600'>Stay up to date with the latest products.</p>
        </div>
        <div className='flex justify-between items-center gap-4'>
          <input type="text" className='border border-gray-300 rounded-md' placeholder='Enter your email'/>
          <input type="submit" value="Subscribe" className='bg-black text-white px-4 py-3 text-sm rounded-md' />
        </div>
      </div>
      <div className='flex items-center border-b border-gray-300'>
        <div className='w-2/3 px-6 py-6'>
          <p className='text-4xl text-emerald-400'><span className="text-9xl font-bold text-emerald-500">W</span>elcome, to the world's leading ecommerce plateform.</p>
        </div>
        <div className='px-6 py-6'>
          <div className='flex items-center justify-center gap-4'>
            <div>
              <p className='text-gray-400'>Company</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p className='text-gray-400'>Resource</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p className='text-gray-400'>Social</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p className='text-gray-400'>Legal</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
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