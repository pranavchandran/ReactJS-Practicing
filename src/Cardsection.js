import React from "react"
import Card from "./Card"
import Card2 from "./Card2"
import ash from './ash.jpg'
import Card3 from "./Card3"

const Cardsection = () => (
<section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
              <Card title="Neeps coming 2022" buttonText="Enter"/>
          </div>
          <div className="col-4">
                <Card2 logo1={ash}/>
          </div>
          <div className="col-4">
                <Card3 textC="He come with in 1 Year"/>
          </div>
        </div>
      </div>
    </section>
)

export default Cardsection;