"use client";

import Image from "next/image";

const Footer = (props) => {
  const { type } = props;
  return (
    <>
      <footer className="bg-primary">
        {type === "home" && (
          <div className="sub-area">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 sub-info">
                  <h2 className="text-secondary mb-3">
                    記得
                    <br />
                    訂閱以獲取更多資訊！
                  </h2>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control px-3 py-4 border-primary"
                      placeholder="Your email address"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary " type="button">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <!-- 版權宣告區 --> */}
        <div className="copyright-area py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex align-items-center">
                <a href="index.html" className="mr-3">
                  <Image src={require("@/public/images/logo/logo-w.png")} alt="" />
                </a>
                <span className="text-light">&copy; 2020. All Rights Reserved.</span>
              </div>
              <ul className="col-lg-5 mb-0 d-none d-lg-flex align-items-center justify-content-end list-unstyled">
                <li className="mr-4">
                  <a className="text-light" href="product.html">
                    Product
                  </a>
                </li>
                <li className="mr-4">
                  <a className="text-light" href="#">
                    Blog
                  </a>
                </li>
                <li className="mr-4">
                  <a className="text-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
