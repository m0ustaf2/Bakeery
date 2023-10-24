import React from "react";
import style from "./Home.module.css";
import img1 from "../../assets/images/image 1.png";
import img555 from "../../assets/images/Frame 1.png";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-8 py-4 main-bg`}>
            <div className={` ff ${style.trans}`}>
              <div className="col-md-12 mb-5 pb-5">
                <div className="d-flex">
                  <img src={img1} className={style.mimg} alt="" />
                  <p className="ps-2 text-uppercase text-white pt-3">
                    Peachy Pup <br /> Bakery
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row mb-5">
                  <div className="col-md-6 mb-5">
                    <h1 className={`text-white h-home ${style.head}`}>
                      Tasty pastries
                    </h1>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                    <div className=" my-4">
                      <button className="btn btn-warning text-uppercase text-white fw-bold rounded-4">
                        SEE MORE
                      </button>
                    </div>
                    <div className="text-white fw-bold text-center">
                      <p>Telephone:+7 700 000 00 00</p>
                    </div>
                  </div>

                  <div className="col-md-6 ">
                    <div className="">
                    <img src={img555} className="w-100" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-md-4 ${style.right}`}></div>
        </div>
      </div>
    </>
  );
}
