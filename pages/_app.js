import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Toaster } from 'react-hot-toast';
import {StateContext} from '../context/StateContext'
import Layout from '../components/Layout'
function MyApp({ Component,session, pageProps }) {
  return (
    <SessionProvider session={session}>
    <StateContext>
      <Toaster/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </StateContext>
    </SessionProvider>
  )
}

export default MyApp
