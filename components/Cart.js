import React, { useRef } from 'react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { urlFor } from '../lib/client'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useStateContext } from '../context/StateContext'
import getStripe from '../lib/getStripe'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function Cart() {
  const cartRef = useRef()
  const {
    showCart,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
    totalPrice,
    cartItems,
    totalQuantities,
  } = useStateContext()
  const handelCheckout = async () => {
    const stripe = await getStripe()
    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      })

      if (response.statusCode === 500) return
      const data = await response.json()
      toast.info(' Redirecting...!', {
        position: toast.POSITION.TOP_CENTER,
      })
      stripe.redirectToCheckout({ sessionId: data.id })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog
        as='div'
        ref={cartItems}
        className='font-pop relative z-10'
        onClose={setShowCart}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Shopping cart ({totalQuantities} items)
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={() => setShowCart(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {cartItems.map((product) => (
                              <li key={product._id} className='flex py-6'>
                                <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                  <img
                                    src={urlFor(product?.image[0])}
                                    alt={product.name}
                                    className='h-full w-full object-cover object-center'
                                  />
                                </div>

                                <div className='ml-4 flex flex-1 flex-col'>
                                  <div>
                                    <div className='flex justify-between text-base font-medium text-gray-900'>
                                      <h3>
                                        <Link href={product.slug.current}>
                                          {product.name}
                                        </Link>
                                      </h3>
                                      <p className='ml-4'>{product.price}</p>
                                    </div>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {product.color}
                                    </p>
                                    <div className='flex items-center mb-2'>
                                      <span
                                        className='text-xl rounded-md bg-gray-100 p-1.5 w-full text-center cursor-pointer block'
                                        onClick={() =>
                                          toggleCartItemQuanitity(
                                            product._id,
                                            'dec'
                                          )
                                        }
                                      >
                                        -
                                      </span>
                                      <span className='block p-3'>
                                        {product.quantity}
                                      </span>
                                      <span
                                        className='text-xl bg-gray-100 rounded-md p-1.5 w-full text-center cursor-pointer block'
                                        onClick={() =>
                                          toggleCartItemQuanitity(
                                            product._id,
                                            'inc'
                                          )
                                        }
                                      >
                                        +
                                      </span>
                                    </div>
                                  </div>
                                  <div className='flex items-center justify-between text-sm gap-x-4'>
                                    <p className='text-gray-500'>
                                      Qty {product.quantity}
                                    </p>
                                    <div className='flex'>
                                      <button
                                        type='button'
                                        className='font-medium text-indigo-600 hover:text-indigo-500'
                                        onClick={() => onRemove(product)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6'>
                        <button
                          type='button'
                          onClick={handelCheckout}
                          className='flex items-center justify-center rounded-full border border-transparent bg-emerald-500 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-emerald-700 w-full'
                        >
                          Checkout
                        </button>
                      </div>
                      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or
                          <button
                            type='button'
                            className='ml-4 font-medium text-indigo-600 hover:text-indigo-500'
                            onClick={() => setShowCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden='true'> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
