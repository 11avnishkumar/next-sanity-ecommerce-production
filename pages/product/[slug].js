import React from 'react'
import {useState} from 'react'
import {Product} from '../../components'
import {client, urlFor} from '../../lib/client'
import {StarIcon} from '@heroicons/react/20/solid'
import {useStateContext} from '../../context/StateContext'

const ProductDetails = ({products, product}) => {
    const {image, name, price, details} = product
    const [index, setIndex] = useState(0)
    const {decQty, incQty, qty, onAdd} = useStateContext()
    return (
        <div className='container mx-auto font-pop py-6'>
            <div className='flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-2/3'>
                <div className='bg-white shadow-md overflow-hidden rounded-md mb-4'>
                    <img src={urlFor(image && image[index])} alt="w-full h-full rounded-lg"/>
                </div>
                {/* Image gallary */}
                <div className='image-gallary-container'>
                    <div className='mx-auto mt-3 grid grid-cols-4 bg-white'>
                        {image?.map((item, i) => (
                            <div key={i} className="overflow-hidden rounded-md">
                                <img src={urlFor(item)} alt="" className="h-full w-full"
                                     onMouseEnter={() => setIndex(i)}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* right column */}
            <div className='space-y-4 py-4 px-4 w-full md:grow'>
                <p className='text-3xl text-slate-700 font-extrabold capitalize'>{name}</p>
                <div className='flex justify-start items-center'>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    <StarIcon className='h-7 w-7 text-yellow-400'/>
                    ({20})
                </div>
                <hr/>
                <div className='mt-4'>
                    <p className='text-3xl font-extrabold mb-2'>$ {price}</p>
                    <p className='text-sm mb-2'>{details}</p>
                    <p className='text-emerald-500 text-2xl'>In Stock</p>
                </div>
                <hr/>
                <div className='flex gap-4 justify-center items-center bg-gray-200 rounded-full md:w-1/2'>
                    <span className='px-3 py-4 cursor-pointer text-2xl text-center block  rounded-md'
                          onClick={decQty}>-</span> <span className='text-2xl'>{qty}</span>
                    <span className='px-3 py-4 cursor-pointer text-2xl text-center block  rounded-md'
                          onClick={incQty}>+</span>
                </div>
                <div className="flex items-center gap-2 mx-auto">
                    <input type="button" value="Add to cart"
                           className="border border-2 border-emerald-500 text-emerald-500 py-4 w-full cursor-pointer rounded-full text-xl"
                           onClick={() => onAdd(product, qty)}/>
                    <input type="button" value="Buy Now"
                           className='bg-emerald-500 py-4 w-full cursor-pointer rounded-full text-white text-xl'/>
                </div>
            </div>
        </div>
        {/* Product Recommendation  */}
        <div className='mt-4 px-4'>
            <p className='text-2xl md:text-3xl text-slate-700'>Your May also like</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {products.map((item) => (
                <Product key={item._id} product={item}/>
            ))}
            </div>
        </div>
        </div>
    )
}

export default ProductDetails

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }`
    const products = await client.fetch(query)

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productQuery = '*[_type== "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productQuery);
    return {
        props: {products, product}
    }
}
