import React from 'react'

const ClientReview = ({imagepath, clientname, review}) => {
  return (
    <div className="item">
            <div className="box">
              <div className="client_id">
                <div className="img-box">
                  <img src={imagepath} alt=""/>
                </div>
                <div className="client_detail">
                  <div className="client_info">
                    <h6>
                      {clientname}
                    </h6>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
              <div className="client_text">
                <p>
{review}
                </p>
              </div>
            </div>
          </div>
  )
}

export default ClientReview