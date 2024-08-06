import React from "react";
import { facilty, roomItem } from "../component/Data/data";
import { Link } from "react-router-dom";
import BookNow from "./BookNow";

function Rooms() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {roomItem.map((el) => (
              <div className="col-lg-4 col-md-6">
                <div className="room-items shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={el.img} alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-warning text-white rounded py-1 px-3 ms-4 ">
                      {el.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0"> {el.name}</h5>
                      <h5 className="ps-2"> {el.star}</h5>
                    </div>
                    <div className="d-flex mb-3">
                      {facilty.map((item) => (
                        <small className="border-end me-3 pe-3">
                          {item.icon}
                          {item.quantity}
                          {item.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{el.description}</p>
                    <Link
                      to={`/booking/${el.id}`}
                      className="btn btn-sm btn-dark rounded py-2 px-4 "
                    >
                      {el.darkbtn}
                    </Link>
                    <Link
                      to={`/rooms/${el.id}`}
                      className="btn btn-sm btn-warning rounded py-2 px-4"
                    >
                      {el.yellowbtn}
                    </Link>
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

export default Rooms;
