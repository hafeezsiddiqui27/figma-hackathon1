import React from 'react'

import ContactUs from '../components/contact/contacthero'
import Contactdetail from '../components/contact/contactdet'

import Header from '../components/aboutheader'

const Contact = () => {
  return (
    <div>
   
      <Header/>
      <ContactUs />
      <Contactdetail />
    </div>
  )
}

export default Contact