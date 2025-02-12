"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/layout/Nav";
import Footer from "@/src/components/layout/Footer";
import Image from "next/image";
const Login = () => {
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
      <div className="container">
        <div className="row py-3 py-md-5 align-items-center">
          <div className="col-12 col-lg-8 d-flex justify-content-center">
            <Image src={require("@/public/images/login-img.png")} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-lg-4 px-5 px-lg-0 py-4 py-lg-0">
            <h2 className="mb-3">Log in</h2>
            <form>
              <div className="form-group my-3">
                <label htmlFor="account">帳號</label>
                <input type="text" className="form-control" id="faccount" placeholder="email@example.com" />
              </div>
              <div className="form-group my-3">
                <label htmlFor="password">密碼</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="row m-0 my-3">
                <a href="#" className="col-4 p-0">
                  <p className="">忘記密碼</p>
                </a>
                <div className="button-group col-8 d-flex justify-content-end p-0">
                  <button type="button" className="btn btn-outline-primary mx-3">
                    註冊
                  </button>
                  <button type="button" className="btn btn-primary">
                    登入
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
