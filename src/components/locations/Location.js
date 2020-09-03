import React from "react";
import "./Location.css"

export const Location = ({location}) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__square-footage">Square Feet: {location.sqft}</div>
        {/* <div className="location__handicap">Handicap Accessible:{location.handicap}</div> */}
    </section>
)