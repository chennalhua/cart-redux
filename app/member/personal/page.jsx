"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/layout/Nav";
import Footer from "@/src/components/layout/Footer";
import Image from "next/image";
const MemberPersonal = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-3 py-md-5">
          <div className="col-12 col-lg-2">
            <h5 className="text-primary d-none d-lg-block">會員中心</h5>
            <ul className="list-unstyled d-flex d-lg-block justify-content-between">
              <li className="my-lg-3 border-bottom border-primary">
                <a href="#" className="text-secondary">
                  會員資料修改
                </a>
              </li>
              <li className="my-lg-3 ">
                <a href="#" className="text-secondary">
                  訂單查詢
                </a>
              </li>
              <li className="my-lg-3 ">
                <a href="#" className="text-secondary">
                  退／換貨申請
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 text-secondary order-lg-2">
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <Image src={require("@/public/images/icon/user-alt-block.svg")} alt="" />
                <p className="m-0">會員編碼T00020080615</p>
              </li>
              <li>
                <p>
                  購物車<span className="ml-3">56</span>
                </p>
              </li>
              <li>
                <p>
                  我的收藏<span className="ml-3">23</span>
                </p>
              </li>
              <li>
                <p>
                  已完成訂單<span className="ml-3">8</span>
                </p>
              </li>
              <li>
                <p>
                  會員紅利<span className="ml-3">2680</span>
                </p>
              </li>
              <li>
                <p className="m-0">
                  專屬邀請碼<span className="ml-3">TK2075</span>
                </p>
                <small className="text-success">新戶輸入邀請碼即可獲贈紅利點數1000點</small>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-7 order-lg-1">
            <div className="personal-mod text-secondary mb-5">
              <p className="border-bottom text-dark font-weight-bold">個人資料修改</p>
              <form>
                <div className="form-group row">
                  <label htmlFor="name" className="col-md-2 col-form-label pr-0">
                    會員姓名
                  </label>
                  <div className="col-md-10">
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="sex" className="col-md-2 col-form-label pr-0">
                    會員性別
                  </label>
                  <div className="col-4 col-md-3">
                    <select id="sex" className="form-control">
                      <option value="woman" selected>
                        女
                      </option>
                      <option value="man">男</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-md-2 col-form-label pr-0">
                    電子信箱
                  </label>
                  <div className="col-md-10">
                    <input type="text" className="form-control" id="email" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="phoneNumber" className="col-md-2 col-form-label pr-0">
                    手機號碼
                  </label>
                  <div className="col-md-10">
                    <input type="text" className="form-control" id="phoneNumber" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="address" className="col-md-2 col-form-label">
                    聯絡地址
                  </label>
                  <div className="col-md-10">
                    <select id="address" className="form-control mb-3">
                      <option value="taiwan" selected>
                        台灣
                      </option>
                      <option value="island">離島</option>
                    </select>
                    <div className="form-row mb-3">
                      <div className="col-6">
                        <select id="address" className="form-control">
                          <option value="kaohsiung" selected>
                            高雄
                          </option>
                          <option value="taipei">台北</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <select id="address" className="form-control">
                          <option value="fengshan" selected>
                            鳳山區
                          </option>
                          <option value="sanmin">三民區</option>
                        </select>
                      </div>
                    </div>
                    <input type="text" className="form-control mb-3" id="address" placeholder="請輸入地址" />
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Check" />
                      <label className="form-check-label" htmlFor="Check">
                        我願意收到最新優惠情報
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="address" className="col-md-2 col-form-label">
                    配送地址
                  </label>
                  <div className="col-md-10">
                    <select id="address" className="form-control mb-3">
                      <option value="taiwan" selected>
                        台灣
                      </option>
                      <option value="island">離島</option>
                    </select>
                    <div className="form-row mb-3">
                      <div className="col-6">
                        <select id="address" className="form-control">
                          <option value="kaohsiung" selected>
                            高雄
                          </option>
                          <option value="taipei">台北</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <select id="address" className="form-control">
                          <option value="fengshan" selected>
                            鳳山區
                          </option>
                          <option value="sanmin">三民區</option>
                        </select>
                      </div>
                    </div>
                    <input type="text" className="form-control mb-3" id="address" placeholder="請輸入地址" />
                    <button type="button" className="btn btn-primary px-5">
                      確定修改
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="password-mod text-secondary">
              <p className="border-bottom text-dark font-weight-bold">修改密碼</p>
              <form>
                <div className="form-group row">
                  <label htmlFor="oldpassword" className="col-md-2 col-form-label pr-0">
                    舊密碼
                  </label>
                  <div className="col-md-10">
                    <input type="text" className="form-control" id="oldpassword" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="newpassword" className="col-md-2 col-form-label pr-0">
                    新密碼
                  </label>
                  <div className="col-md-10">
                    <input type="password" className="form-control" id="newpassword" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="checkpassword" className="col-md-2 col-form-label pr-0">
                    確認新密碼
                  </label>
                  <div className="col-md-10">
                    <input type="password" className="form-control mb-3" id="checkpassword" />
                    <button type="button" className="btn btn-primary px-5">
                      變更密碼
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MemberPersonal;
