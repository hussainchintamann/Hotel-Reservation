import React from "react";

export default function CommonHeading({ heading, title, subtitle }) {
    return (
      <>
        <div className="text-center wow fadeInUp" >
          <h6 className="section-title text-center text-warning text-uppercase">
            {heading}
          </h6>
          <h1 className="mb-5">
            {subtitle}{" "}
            <span className="text-warning text-uppercase">{title}</span>
          </h1>
        </div>
      </>
    );
  }