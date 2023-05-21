import React from 'react'
import {useState} from 'react'
import ProductReviewForm from '../components/ProductReviewForm'
/* import {client, urlFor} from '../../lib/client' */
import {StarIcon} from '@heroicons/react/20/solid'
/* import {useStateContext} from '../../context/StateContext' */

const ProductReviews = () => {
    const [showProuductReviewForm,setShowProductReviewForm] = useState(false);
    const reviews = [
     {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
     {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
    {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
    {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
    {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
    {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
    {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
    {
      productName:"Nice Product",
      productMsg:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
     },
   ]
    const toggleProductReviews = () =>{
     setShowProductReviewForm(!showProuductReviewForm);
    } 
    return (
        <div className='container mx-auto font-pop py-6'>
            <div className='space-y-4 py-4 px-4 w-full md:grow'>
                <h1 className='text-3xl text-slate-700 font-extrabold capitalize'>Product Reviews</h1>
                <hr/>
                <button onClick={toggleProductReviews} className='text-xl bg-gray-400 text-white py-2 px-4 rounded-md  focus:outline-none focus:ring focus:ring-offset-2'>Write Product Review</button>
                {showProuductReviewForm && <ProductReviewForm/>}
                {reviews.map(item => (
                <div className='flex justify-start items-center'>
                 <div className='overflow-hidden h-24 w-24'>
                   <img src='hello.jpg'/>
                 </div>
                 <div className='helo'>
                 <p className='text-xl mb-2'>{item.productName}</p>
                 <div className='flex justify-start items-center mb-3'>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    ({20})
                 </div>
                 <p>{item.productMsg}</p>
                 </div>
                </div> 
                ))}
             </div>
        </div>
    )
}
export default ProductReviews 
