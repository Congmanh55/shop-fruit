import React from "react";
import BreakCrumb from "../theme/breakCrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
import thit1 from "../../../assets/user/images/feat/thit1.jpg";
import thit2 from "../../../assets/user/images/feat/thit2.jpg";
import qua1 from "../../../assets/user/images/feat/qua1.png";
import qua2 from "../../../assets/user/images/feat/qua2.jpg";
import tan from "../../../assets/user/images/feat/tan.jpg";
import tan1 from "../../../assets/user/images/feat/tan1.jpg";
import tan2 from "../../../assets/user/images/feat/tan2.jpg";
import tan5 from "../../../assets/user/images/feat/tan5.jpg";
import { ProductCart } from "component";

const ProductPage = () => {

    const sorts = [
        "Từ thấp đến cao",
        "Từ cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá"
    ]
    const categories = [
        "Thịt tươi",
        "Rau củ",
        "Nước trái cây ",
        "Trái cây",
        "Hải sản"
    ]

    const product = [
        {
            img: thit1,
            name: "Thịt bò tươi",
            price: 45000
        },
        {
            img: thit2,
            name: "Thịt lợn tươi",
            price: 30000
        },
        {
            img: qua1,
            name: "Qủa cam",
            price: 15000
        },
        {
            img: qua2,
            name: "Qủa táo",
            price: 18000
        },
        {
            img: tan,
            name: "Bánh humberger",
            price: 20000
        },
        {
            img: tan1,
            name: "Pizza",
            price: 45000
        },
        {
            img: tan2,
            name: "Bánh ngọt",
            price: 15000
        },
        {
            img: tan5,
            name: "Gà rán",
            price: 19000
        }

    ]

    return (
        <>
            <BreakCrumb name="Danh sách sản phẩm"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="sidebar">

                            <div className="sidebar-item">
                                <h2>Tìm kiếm</h2>
                                <input type="text"/>
                            </div>

                            <div className="sidebar-item">
                                <h2>Mức giá</h2>
                                <div className="price-range-wrap">
                                    <div>
                                        <p>Từ:</p>
                                        <input type="number" min={0} />
                                    </div>
                                    <div>
                                        <p>Đến:</p>
                                        <input type="number" min={0} />
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-item">
                                <h2>Sắp xếp</h2>
                                <div className="tags">
                                    {sorts.map((item, key ) => (
                                        <div 
                                            className={`tag $(key===0 ? "active : ")`} 
                                            key={key}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="sidebar-item">
                                <h2>Thể loại khác</h2>
                                <ul>
                                    {categories.map((item, key) => (
                                        <li key={key}>
                                            <Link to={ROUTERS.USER.PRODUCTS}>{item}</Link>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                                {
                                    product.map((item:any, key:number) => (
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                                            <ProductCart
                                                name={item.name}
                                                img={item.img}
                                                price={item.price}
                                            />                         
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;

