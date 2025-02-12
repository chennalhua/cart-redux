"use client";
import Navbar from "@/src/components/layout/Nav";
import Footer from "@/src/components/layout/Footer";
import { Card, Button, Row, Col, Flex, Radio } from "antd";
import Image from "next/image";
import ProductAD from "@/src/components/product/ProductAD";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* HEADER */}
      <header className="mb-5">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-md-8 col-lg-5 text-light header-info">
              <h2>極簡美學，格調生活</h2>
              <p className="font-weight-light">
                設計感家具，讓空間更有品味。
                <br />
                下單即享免運，立即選購你的心頭好！
              </p>
              <button type="button" className="btn btn-outline-light font-weight-light col-8">
                去逛逛
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- 新產品 --> */}
      <div className="container">
        {[1, 2, 3, 4].map((item, index) => {
          return <ProductAD key={index} id={index + 1} />;
        })}
      </div>
      {/* <!-- 產品價格區 --> */}
      <div className=" proprice-area bg-success">
        <div className="container py-5">
          <ul className="row px-3">
            {/* <!-- 產品價格1 --> */}
            <li className="card col-12 col-lg-4 bg-transparent border-0 mb-4 mb-lg-0">
              <Image src={require(`@/public/images/index-img/proprice1.png`)} className="card-img-top" alt="" />
              <div className="card-body p-0 mt-2">
                <h4 className="card-title m-0">Poppy & Barley</h4>
                <p className="card-text mt-2">Jo Malone</p>
                <p className="card-text card-price">
                  NT$1,380 &nbsp;
                  <del className="text-secondary">NT$1,580</del>
                </p>
              </div>
            </li>
            {/* <!-- 產品價格2 --> */}
            <li className="card col-12 col-lg-4 bg-transparent border-0 mb-4 mb-lg-0">
              <Image src={require(`@/public/images/index-img/proprice2.png`)} className="card-img-top" alt="" />
              <div className="card-body p-0 mt-2">
                <h4 className="card-title m-0">Body Wash</h4>
                <p className="card-text mt-2">Curology</p>
                <p className="card-text card-price">NT$1,580</p>
              </div>
            </li>
            {/* <!-- 產品價格3 --> */}
            <li className="card col-12 col-lg-4 bg-transparent border-0 mb-4 mb-lg-0">
              <div className="soldout">
                <Image src={require(`@/public/images/index-img/proprice3.png`)} className="card-img-top" alt="" />
                <p className="text-light d-flex justify-content-center align-items-center ">Sold out</p>
              </div>
              <div className="card-body p-0 mt-2">
                <h4 className="card-title m-0">Apple Cider Vinegar Capsule</h4>
                <p className="card-text mt-2">Tonik</p>
                <p className="card-text card-price">NT$1,580</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- 瓶子回收區 --> */}
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-8 text-center">
            <Image src={require(`@/public/images/index-img/bottle-recycling.png`)} width="95%" alt="" />
          </div>
          <div className="col-12 col-lg-4 px-5 mt-4 mt-ld-0">
            <h3>Bottle-Recycling</h3>
            <h5 className="font-weight-light">Recycle your used empty bottles and be rewarded!</h5>
            <p className="mt-3 font-weight-light">
              For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than
              860 pine trees for a better environment.For the past 10 years, we have collected over 800,000 bottles through Empty Bottle
              Recycling Campaign and planted more than 860 pine trees for a better environment.
            </p>
            <a href="#" className="text-primary">
              查看更多
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer type="home" />
    </div>
  );
}
