import React from "react";
import { socialIcon, team } from "../component/Data/data";
import CommonHeading from "../component/CommanHeading";

function Team() {
  return (
    <div>
      <div className="container-xxl py-3">
        <div className="container">
          <CommonHeading
            heading="Our Team"
            subtitle="Explore Our"
            title="Staffs"
          />
          <div className="row g-4">
            {team.map((el) => (
              <div className="col-lg-3 col-md-6">
                <div className="team-item shadow rounded overflow-hidden">
                  <div className=" sets position-relative ">
                    <img
                      className="h-100 w-100 img-fluid"
                      src={el.img}
                      alt=""
                    />
                    <div className=" socail-icon position-absolute top-60 trasnlate-middle d-flex align-items-center">
                      {socialIcon.slice(0, 3).map((val, index) => (
                        <a
                          className="btn btn-square btn-warning mx-1 "
                          href=""
                          key={index}
                        >
                          {val.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 mt-5">
                    <div style={{ textAlign: "center" }}>
                      <h5>{el.name}</h5>
                      <p>{el.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
