import React from 'react'
import { fpv } from '../Data/Products';


function Dji_fpv() {
  return (
    <div className="container">
    <div className="row">
      {fpv.map((e) => (
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

export default Dji_fpv