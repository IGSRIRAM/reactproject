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
            

          {/* Other Products 
          <div className="col-md-3">
            <div className="product-card">
              <img src={e.image} alt={e.name}  style={{ height: "150px" , marginTop: "0px" }}/>
              <h6>DJI Mavic 3 Pro Cine Premium Combo</h6>
            </div>

            <div className="product-card">
              <img src={e.image} alt={e.name}  style={{ height: "150px" , marginTop: "0px" }}/>
              <h6>DJI Mavic 3 Series Intelligent Flight Battery</h6>
            </div>
          </div>


        



        <div className="col-md-3">
          <div className="product-card">
            <img src="nd_filter_set.jpg" alt="DJI Mavic 3 Pro ND Filter Set" />
            <h6>DJI Mavic 3 Pro ND Filter Set (ND8/16/32/64)</h6>
          </div>
          <div className="product-card">
            <img src="wide_angle.jpg" alt="DJI Mavic 3 Pro Wide-Angle Lens" />
            <h6>DJI Mavic 3 Pro Wide-Angle Lens</h6>
          </div>
        </div>

        Final row
        <div className="col-md-3">
          <div className="product-card">
            <img src="propeller_guard.jpg" alt="DJI Mavic 3 Pro Propeller Guard" />
            <h6>DJI Mavic 3 Pro Propeller Guard</h6>
          </div>
        </div>

        View All Button
        <div className="col-md-3">
          <div className="product-card view-all">
            <a href="#"><i className="bi bi-arrow-right"></i></a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Cameradrones;
