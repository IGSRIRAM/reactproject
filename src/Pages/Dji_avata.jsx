import React from 'react'
import { avata } from '../Data/Products';


function Dji_avata() {
  return (
    <div className="container">
    <div className="row">
      {avata.map((e) => (
        <div className="col-md-6" key={e.id}>
          <div className="product-card">
            <img src={e.image} alt={e.name}  style={{ height: "450px" , marginTop: "0px" }}/>
            <h5>{e.name}</h5>
            <p>Price: ${e.Price}</p>
          </div>
          </div>
      ))}
      </div>
      </div>
  )
}

export default Dji_avata