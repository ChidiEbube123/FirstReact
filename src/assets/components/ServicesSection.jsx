import React from 'react'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  return (
    <section className="service_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2> Our Services </h2>
      </div>
      <div className="row">
      
        <ServiceCard imagepath={"./../images/s1.png"} card_head={"Maintenance"} card_content={" when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"}/>

        <ServiceCard imagepath={"./../images/s2.png"} card_head={"Electrical"} card_content={" when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"}/>
        <ServiceCard imagepath={"./../images/s3.png"} card_head={"Plumbing"} card_content={" when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"}/>

        
       
      </div>
      <div className="btn-box">
        <Link href="">
          View More
        </Link>
      </div>
    </div>
  </section>
  )
}

export default ServicesSection