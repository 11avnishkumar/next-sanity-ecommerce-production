import { client } from '../lib/client'
import styles from '../styles/Home.module.css'
import { Banner, Product } from '../components'
import { ProductFilter } from '../components'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const Home = ({ products, bannerData }) => {
  const router = useRouter()
  const [color, setColor] = useState([])
  const [categories, setCategories] = useState([])
  const [brand, setBrand] = useState([])

  // Update the state of color categories and brand from the data reciving from filtercomponent(child component)
  const filterDataHandler = (colorPara, categoriesPara, brandPara) => {
    setColor(colorPara)
    setCategories(categoriesPara)
    setBrand(brandPara)
  }

  useEffect(() => {
    if (color.length > 0 || categories.length > 0 || brand.length > 0) {
      // const queryParams = {
      //   color,
      //   categories,
      //   brand,
      // }

      // Convert the queryParams object into a query string
      let queryString = ''

      if (color.length > 0) {
        queryString += `color=${encodeURIComponent(color)}&`
      }
        
      

      if (categories.length > 0) {
        queryString += `categories=${encodeURIComponent(categories)}&`
      }

      if (brand.length > 0) {
        queryString += `brand=${encodeURIComponent(brand)}&`
      }
      // queryString = new URLSearchParams(queryParams).toString();
      queryString = queryString.slice(0, -1) // Remove the trailing "&"
      // Use the router instance to navigate to a new URL with the query string
      const redirectUrl = `${router.pathname}?${queryString}`

      if (color || categories || brand) {
        router.push(redirectUrl)
        
      }
    }

  }, [color, categories, brand])
  return (
    <>
      <Banner heroBanner={bannerData.length && bannerData[0]} />
      <hr />
      <div className='grid grid-cols-3'>
        <div className=''>
          {/* Product filter component */}
          <ProductFilter filterDataHandler={filterDataHandler} />
        </div>
        <div className='col-span-2 py-4 px-4'>
          <p className='text-3xl font-bold'>Headphones for you</p>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
// This is how we fetch data in Next js, This is called rendering serverside props
export const getServerSideProps = async (context) => {
  const { color, categories, brand } = context.query
  const colorValues = color ? color.split(',') : []
  const categoriesValues = categories ? categories.split(',') : []
  const brandValues = brand ? brand.split(',') : []
  console.log('modified brand values', brandValues)
  // const query = `*[_type == "product" &&  (colors == "${colorValues}" || brand in "${brandValues.join(',')}" || categories == "${categoriesValues}")] | order(_createdAt asc)`;
  /* const query = `*[_type == "product" && (colors in ["${colorValues.join('","')}"] || brand in ["${brandValues.join('","')}"] || categories in ["${categoriesValues.join('","')}"])] | order(_createdAt asc)`; */
  let query = '*[_type == "product"]'

  if (
    colorValues.length > 0 ||
    categoriesValues.length > 0 ||
    brandValues.length > 0
  ) {
    query = `*[_type == "product" && (colors in ["${colorValues.join(
      '","'
    )}"] || brand in ["${brandValues.join(
      '","'
    )}"] || categories in ["${categoriesValues.join('","')}"])]`
  }

  query += ' | order(_createdAt asc)'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  return {
    props: { products, bannerData },
  }
}
export default Home
