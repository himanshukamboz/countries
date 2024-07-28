import React from "react";
import './Country.css'
import './shimmerdetail.css'
export default function Shimmer(key) {
  return (
    <>
      <main>
        <div className="country-details new-details">
          <div className="img"></div>
          <div className="details-text-container new-text-continer">
            <h1></h1>
            <div className="details-text new-details-text">
              <div>
                <p>
                  <b> </b>
                </p>
                <p>
                  <b> </b>
                </p>
                <p>
                  <b> </b>
                </p>
                <p>
                  <b> </b>
                </p>
                <p>
                  <b> </b>
                </p>
              </div>
              <div>
                <p>
                  <b> </b>
                </p>
                <p>
                  <b> </b>
                </p>
                <p>
                  <b> </b>
                </p>
              </div>
            </div>
            <div className="border-countries">
              <p>
                <b> </b>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
