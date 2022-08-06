import React from "react";

function Section({name, style}){
    return(
        <div>
        <section className = {style}>
      <div className="container">
        <div className="title-wraper bold black">{name}</div>

        <div className="price-wrapper grey">From $999.</div>
        <div className="links-wrapper">
          <ul>
            <li><a href="">Learn more</a></li>
            <li><a href="">Order</a></li>
          </ul>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Section