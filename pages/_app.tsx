import React from 'react'
import '../styles/globals.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Spacer from '../components/ui/Spacer'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Spacer y={60} />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
