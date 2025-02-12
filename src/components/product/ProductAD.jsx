import Image from "next/image";
import React, { useState } from "react";
const ProductAD = (props) => {
  let { id } = props;
  return (
    <>
      <div className="newpro-area">
        <div className={`row align-items-center pb-4 ${Number(id) % 2 == 0 && "flex-row-reverse"}`}>
          <div className="col-12 col-lg-6 text-center">
            <Image src={require(`@/public/images/index-img/newpro${id}.png`)} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-lg-6 px-5 mt-4 mt-ld-0">
            <h3>Gabrielle CHANEL</h3>
            <p className="text-justify">
              全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
            </p>
            <a href="page/purchase.html" className="text-primary">
              查看更多
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductAD;
