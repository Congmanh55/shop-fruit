import React from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import "./style.scss";

interface IProduct {
    img: any,
    name: string,
    price: number
}
const ProductCart: React.FC<IProduct> = (
    { img, name, price}
) => {

    return (
        <>
            <div className="featured-item pl-pr-10 ">
                <div className="featured-item-pic"
                    style={{
                        backgroundImage: `url(${img})`
                    }}
                >
                    <ul className="featured-item-pic-hover">
                        <li>
                            <AiOutlineEye/>
                        </li>
                        <li>
                            <AiOutlineShoppingCart/>
                        </li>
                    </ul>
                </div>

                <div className="featured-item-text">
                    <h4>
                        <Link to={""}>{name}</Link>
                    </h4>
                    <h5>{formatter(price)}</h5>
                </div>
            </div>
        </>
    )
}

export default ProductCart;