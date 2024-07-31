import React from 'react'
import ClientReview from './ClientReview'

const ClientReviewSection = () => {
  return (
    <section className="client_section ">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          What Our Clients Say
        </h2>
      </div>
      <div className="carousel-wrap layout_padding2-top ">
        <div className="owl-carousel">
      

<ClientReview imagepath={"./../images/client-1.jpg"} clientname={"Jorch Morik"} review={"                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"}/>

<ClientReview imagepath={"./../images/client-2.jpg"} clientname={"John Petie"} review={"                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"}/>

<ClientReview imagepath={"./../images/client-1.jpg"} clientname={"John Petie"} review={"                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"}/>

<ClientReview imagepath={"./../images/client-2.jpg"} clientname={"John Petie"} review={"                  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"}/>

       
         
        </div>
      </div>
    </div>
  </section>

  )
}

export default ClientReviewSection