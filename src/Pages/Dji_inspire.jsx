import React from 'react'
import { insp } from '../Data/Products';


function Dji_inspire() {
  return (
    <div className="container">
    <div className="row">
      {insp.map((e) => (
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

export default Dji_inspire