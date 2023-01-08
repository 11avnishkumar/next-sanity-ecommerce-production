import {client} from '../lib/client'
import styles from '../styles/Home.module.css'
import {Banner,Product} from '../components'

const Home = ({products,bannerData}) =>  (
    <>
      <Banner heroBanner={bannerData.length && bannerData[0]}/>
      <hr/>
      <div className='py-4 px-4'>
        <p className='text-3xl font-bold'>Headphones for you</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
    </>
  )
  // This is how we fetch data in Next js, This is called rendering serverside props
  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    return {
      props: { products, bannerData }
  }
}
export default Home