import React from "react"
import pran from './proffesor.jpg'

const Card3 = ({title="Pranav Watching All", buttonText="Going Red", image=pran, textC="Danger Mode" }) => (
    <div className="card" style= {{width: '18rem'}}>
    <img
      src={image}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {textC}
      </p>
      <a href="#" className="btn btn-success">{buttonText}</a>
    </div>
  </div>

)

export default Card3;