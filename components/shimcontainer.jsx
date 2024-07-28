import React from "react";

import './shimmer.css';

export default function Shimcontainer() {
  const container = Array.from({length:12}).map((e,i) =>{
    return  <div className="country-card country-card-new"key={i} >
    <div className="card-text">
      
    </div>
</div>
  })
  return (
    
      <div className="card-container">{container}</div>
    
  );
}
