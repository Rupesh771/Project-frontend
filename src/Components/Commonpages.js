import { Link } from "react-router-dom";
import React from "react";

const Commonpages = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> FUSION</strong>
                  </h1>
                  <h2 className="my-3">
                    We are here to sell Handicrafts Products
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commonpages;
