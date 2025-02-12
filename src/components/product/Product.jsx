import React from "react";
import { Card, Badge, Button } from "antd";
import { HeartOutlined, StarFilled } from "@ant-design/icons";
// import Countdown from "react-countdown";

const ProductCard = ({ product }) => {
    return (
        <Badge.Ribbon text={`${product.discount}% off`} color="green">
            <Card
                hoverable
                bordered={false}
                cover={
                    <div className="relative">
                        <img
                            alt={product.title}
                            src={product.image}
                            className="rounded-lg w-full object-cover"
                        />
                        {/* 收藏按鈕 */}
                        {/* <Button
                            shape="circle"
                            icon={<HeartOutlined />}
                            className="absolute top-4 right-4 bg-white shadow-md"
                        /> */}
                    </div>
                }
            >
                {/* 倒數計時器 */}
                {/* {product.countdown && (
                    <div className="bg-yellow-500 text-white text-center py-1 rounded-lg">
                        <Countdown date={product.countdown} />
                    </div>
                )} */}

                <div>
                    <p className="text-gray-500">{product.category}</p>
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-black">{product.price}</span>
                        <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    </div>

                    <div className="flex items-center mt-2">
                        <StarFilled className="text-yellow-500" />
                        <span className="ml-1 font-bold">{product.rating}</span>
                    </div>
                </div>
            </Card>
        </Badge.Ribbon>
    );
};

export default ProductCard;
