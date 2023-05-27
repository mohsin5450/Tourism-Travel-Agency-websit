import React from 'react'
import Home from './Home'
import AboutUs from '../AboutUs'
import Service from '../Services/Service'
import Package from '../Packages/Package'
import Tours from '../Tours/Tours'
import Contact1 from '../Contact/Contact1'

const HomePage = ({ PkgDetail, SrvDetail, TDetail }) => {

  return (
    <div>


      <Home />
      <AboutUs />
      <Service SrvDetail={SrvDetail} />
      <Package PkgDetail={PkgDetail} />
      <Tours TDetail={TDetail} />
      <Contact1 />


    </div>
  )
}

export default HomePage