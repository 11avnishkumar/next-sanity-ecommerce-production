import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const Modal = ({closeModal}) => {
  return (
    <div className='min-h-screen transition-all z-[1000] absolute left-0 right-0 bottom-0 top-0'>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg rounded-lg space-x-8 bg-white space-y-8">
          <div className='mx-auto mt-6 flex justify-evenly items-center'>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Enter the product details
            </span>
            <span className='text-2xl cursor-pointer' onClick={()=> closeModal(false)}>&times;</span>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm">
              <div className='mb-4'>
                <label htmlFor="product-name" className="sr-only">
                  Enter Product Name
                </label>
                <input
                  id="product-name"
                  name="product-name"
                  type="text"
                  autoComplete="product-name"
                  required
                  className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  placeholder="Enter Product Details"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Product Description
                </label>
                <textarea
                  id="text-area"
                  name="text-area"
                  type="text-area"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  placeholder="Enter Product Description"
                  onChange={(e) => setPassword(e.target.value)}
                >
                </textarea>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="is-active"
                  name="is-active"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="is-active" className="ml-2 block text-sm text-gray-900">
                  Active
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-500 py-3 px-4 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal