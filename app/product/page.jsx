"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/layout/Nav";
import Footer from "@/src/components/layout/Footer";
import Image from "next/image";
const Product = () => {
  return (
    <>
      <Navbar />
      <div className="brand-list bg-primary d-none d-md-block">
        <div className="container px-5">
          <div className="row">
            <ul className="list-unstyled d-flex align-items-center m-0 py-3">
              <li className="mr-4">
                <a href="#" className="text-light">
                  CHANEL
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-light">
                  Jo Malone
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-light">
                  Curology
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-light">
                  Dior
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-light">
                  Chloe
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-light">
                  ZARA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" product-area">
        <div className="container pt-3 pb-1 pt-md-5">
          <ul className="row px-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <li className="card col-12 col-md-6 col-lg-3 bg-transparent border-0">
                  <Image className="card-img-top" src={require(`@/public/images/product-img/pro-${index + 1}.png`)} alt="Card image cap" />
                  <div className="card-body p-0 mt-2">
                    <h4 className="card-title m-0">Poppy & Barley</h4>
                    <p className="card-text mt-2 m-0">Jo Malone</p>
                    <p className="card-text card-price m-0">
                      NT$1,380 &nbsp;
                      <del className="text-secondary">NT$1,580</del>
                    </p>
                    <div className="d-flex mt-2">
                      <a href="#" className="mr-3 mr-lg-2" data-toggle="modal" data-target="#love-add">
                        <Image src={require(`@/public/images/icon/heart-brown.svg`)} alt="" />
                      </a>
                      <a href="#" data-toggle="modal" data-target="#cart-add">
                        <Image src={require(`@/public/images/icon/shopping-cart-brown.svg`)} alt="" />
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="modal fade" id="love-add" tabindex="-1" role="dialog" aria-labelledby="love-add" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p className="modal-title text-primary text-center font-weight-bold" id="love-add">
                已加入我的收藏
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="cart-add" tabindex="-1" role="dialog" aria-labelledby="cart-add" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p className="modal-title text-primary text-center font-weight-bold" id="cart-add">
                已加入購物車
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer type="home" />
    </>
  );
};
export default Product;
