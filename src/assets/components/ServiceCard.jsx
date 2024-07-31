import React from 'react'

const ServiceCard = ({imagepath, card_head, card_content}) => {
  return (
    <div className="col-sm-6 col-md-4 mx-auto">
    <div className="box ">
      <div className="img-box">
        <img src={imagepath} alt="" />
      </div>
      <div className="detail-box">
        <h5>
          {card_head}
        </h5>
        <p>
          {card_content}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ServiceCard