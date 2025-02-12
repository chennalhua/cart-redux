"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/layout/Nav";
import Footer from "@/src/components/layout/Footer";
import Image from "next/image";
const ProductItem = () => {
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
      <div className="purchase-area">
        <div className="container">
          <div className="row pt-3 pb-5 pt-md-5 px-3">
            <div className="col-12 col-lg-8">
              <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-1.png")} width="100%" className="mb-4" />
              <div className="row mb-4 d-none d-lg-flex">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-2.png")} className="float-left" width="100%" />
                </div>
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-3.png")} className="float-left" width="100%" />
                </div>
              </div>
              <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-1.png")} width="100%" className="d-none d-lg-flex" />
            </div>
            <div className="col-12 col-lg-4 px-3">
              <div className="pro-info mb-4">
                <h2>CHANEL N°5</h2>
                <p className="text-justify">
                  N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
                </p>
              </div>
              <div className="pro-shop mb-5">
                <p>NT$4,980</p>
                <div className="input-group mb-2">
                  <input
                    type="number"
                    className="form-control border-primary"
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon1"
                    // value="1"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-5" type="button" data-toggle="modal" data-target="#cart-add">
                      加入購物車
                    </button>
                  </div>
                </div>
                <a href="#" data-toggle="modal" data-target="#love-add">
                  <Image alt="" src={require("@/public/images/icon/heart-brown.svg")} className="mr-2" />
                  <span>加入我的收藏</span>
                </a>
              </div>
              <div className="shop-info">
                <p className="font-weight-bold m-0">商品購買須知</p>
                <p>
                  產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。 商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
                  D’Perfume
                  盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
                </p>
                <p className="font-weight-bold m-0">退換貨須知</p>
                <p>
                  依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
                </p>
              </div>
            </div>

            <div className="row mb-4 d-lg-none">
              <div className=" col-12 my-4 mb-lg-0">
                <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-2.png")} className="float-left" width="100%" />
              </div>
              <div className=" col-12 mb-lg-0">
                <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-3.png")} className="float-right" width="100%" />
              </div>
            </div>
            <Image alt="" src={require("@/public/images/pro-purchase-img/purchase-1.png")} width="100%" className="d-md-block d-lg-none" />
          </div>
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
export default ProductItem;
