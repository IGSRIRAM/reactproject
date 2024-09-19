import React from 'react';
import { mavic } from '../Data/Products';



function Cameradrones() {
  return (
    <div className="container">
      <div className="row">
        {mavic.map((e) => (
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
  );
}

export default Cameradrones;