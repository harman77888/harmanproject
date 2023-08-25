import React from 'react'
import Banner from '../components/home/banner'
import Designed from '../components/home/designed'
import Trusted from '../components/home/trusted'
import Featured from '../components/home/featured'
import Choose from '../components/home/choose'
import Modern from '../components/home/modern'
import Review from '../components/home/review'

const Home = () => {
  return (
    <div>
      <Banner />
      <Designed/>
      <Trusted/>
      <Featured/>
      <Choose/>
      <Modern/>
      <Review/>
    </div>
  )
}

export default Home
