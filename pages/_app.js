import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {StateContext} from '../context/StateContext'
import Layout from '../components/Layout'
function MyApp({ Component,
  pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
    <StateContext>
      <ToastContainer/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </StateContext>
    </SessionProvider>
  )
}

export default MyApp


