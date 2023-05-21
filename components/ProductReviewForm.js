import React from 'react'
import {useState} from 'react'
/* import {client, urlFor} from '../../lib/client' */
import {StarIcon} from '@heroicons/react/20/solid'
/* import {useStateContext} from '../../context/StateContext' */

const ProductReviewForm = () => {
    const [showProuductReviewForm,setShowProductReviewForm] = useState(false);
    const [review,setReview] = useState(""); 
    const handleProductReviews = (e) =>{
     e.preventDefault();
     console.log(review);
    } 
    return (
        <div className='container mx-auto font-pop py-6'>
            <div className='space-y-4 py-4 px-4 w-full md:grow'>
                <form onSubmit={handleProductReviews}>
                 <div className='form-group mb-3'>
            <textarea className='resize-none border border-emerald-500 rounded-md' row="50" cols="50" placeholder='Write product reviews here' onChange={(e) => setReview(e.target.value)}></textarea>
                 </div>
                  <button type="submit" className='text-xl bg-emerald-500 text-white py-2 px-4 rounded-md focus:outline-emerald-300 focus:outline-none focus:ring focus:ring-offset-2 hover:bg-emerald-700'>Submit Review</button>
                </form>   
             </div>
        </div>
    )
}
export default ProductReviewForm 
