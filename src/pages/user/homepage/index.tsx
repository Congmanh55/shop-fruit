import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1 from "../../../assets/user/images/hero/cat1.jpg";
import cat2 from "../../../assets/user/images/hero/cat2.jpg";
import cat3 from "../../../assets/user/images/hero/cat3.jpg";
import cat4 from "../../../assets/user/images/hero/cat4.jpg";
import cat5 from "../../../assets/user/images/hero/cat5.jpg";
import thit1 from "../../../assets/user/images/feat/thit1.jpg";
import thit2 from "../../../assets/user/images/feat/thit2.jpg";
import qua1 from "../../../assets/user/images/feat/qua1.png";
import qua2 from "../../../assets/user/images/feat/qua2.jpg";
import tan from "../../../assets/user/images/feat/tan.jpg";
import tan1 from "../../../assets/user/images/feat/tan1.jpg";
import tan2 from "../../../assets/user/images/feat/tan2.jpg";
import tan5 from "../../../assets/user/images/feat/tan5.jpg";
import banner1 from "../../../assets/user/images/banner/banner1.jpg";
import banner2 from "../../../assets/user/images/banner/banner2.jpg";
import "./style.scss";
import { Tabs, TabList, Tab, TabPanel} from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";

const HomePage: React.FC = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: cat1,
            name: 'Qua Dua'
        },
        {
            bgImg: cat2,
            name: 'Qua Dua'
        },
        {
            bgImg: cat3,
            name: 'Qua Dua'
        },
        {
            bgImg: cat4,
            name: 'Qua Dua'
        },
        {
            bgImg: cat5,
            name: 'Qua Dua'
        },
        
    ]

    const featproducts = {
        all: {
            title: "Toàn bộ",
            products: [
                {
                    img: thit1,
                    name: "Thịt tươi",
                    price: 20000
                },
                {
                    img: thit2,
                    name: "Thịt tươi",
                    price: 20000
                },
                {
                    img: qua1,
                    name: "Trái cây",
                    price: 20000
                },
                {
                    img: qua2,
                    name: "Trái cây",
                    price: 20000
                },
                {
                    img: tan,
                    name: "Thức ăn nhanh",
                    price: 20000
                },
                {
                    img: tan1,
                    name: "Thức ăn nhanh",
                    price: 20000
                },
                {
                    img: tan2,
                    name: "Thức ăn nhanh",
                    price: 20000
                },
                {
                    img: tan5,
                    name: "Thức ăn nhanh",
                    price: 20000
                }
            ]
        },

        freshMeat: {
            title: "Thịt tươi",
            products: [
                {
                    img: thit1,
                    name: "Thịt bò nạc",
                    price: 25000
                },
                {
                    img: thit2,
                    name: "Thịt lợn",
                    price: 40000
                }
            ]
        },

        fruits: {
            title: "Trai cay",
            products: [
                {
                    img: qua1,
                    name: "Qua cam",
                    price: 15000
                },
                {
                    img: qua2,
                    name: "Qủa quýt",
                    price: 18000
                }
            ]
        },

        fassfood: {
            title: "Thức ăn nhanh",
            products: [
                {
                    img: tan,
                    name: "Hamberger",
                    price: 20000
                },
                {
                    img: tan1,
                    name: "Pizza",
                    price: 20000
                },
                {
                    img: tan2,
                    name: "Bánh ngọt",
                    price: 20000
                },
                {
                    img: tan5,
                    name: "Gà rán",
                    price: 20000
                }
            ]
        }
    }

    const renderFeaturedProduct = (data: any) => {
        const tabList: JSX.Element[] = [];
        const tabPanels: JSX.Element[] = []
        

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index} >{data[key].title}</Tab>)

            const tabPanel = data[key].products.map((item: any, j: number) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                        <div className="featured-item pl-pr-10 ">
                            <div className="featured-item-pic"
                                style={{
                                    backgroundImage: `url(${item.img})`
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
                                    <Link to={""}>{item.name}</Link>
                                </h4>
                                <h5>{formatter(item.price)}</h5>
                            </div>
                        </div>
                        
                    </div>
            ));
            tabPanels.push(
                <TabPanel key={index}>
                    <div className="row">
                        {tabPanel}
                    </div>
                </TabPanel>
            );
        })

        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                { tabPanels }
            </Tabs>
        )
    }

    return (
        
        <>
            {/*CateGories Begin*/}
            <div className="container container-categories-slider">
                <Carousel responsive={responsive} className="categories-slider">
                    {
                        sliderItems.map((item, key) => (
                            <div 
                                key={key}
                                className="categories-slider-item"
                                style={{ backgroundImage: `url(${item.bgImg}` }}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                    
                </Carousel>;
            </div>
            
            {/*CateGories Begin*/}

            {/* San pham noi bat */}
            <div className="container">
                <div className="featured">
                    <div className="section-title">
                        <h2>San pham noi bat</h2>
                    </div>
                    {
                        renderFeaturedProduct(featproducts)
                    }
                </div>
            </div>

            {/* Banner Begin */}
            <div className="container">
                    <div className="banner">
                        <div className="banner-pic">
                            <img src={banner1} alt="banner" />
                        </div>
                        <div className="banner-pic">
                            <img src={banner2} alt="banner" />
                        </div>
                    </div>
            </div>

        </>
        
    )
}

export default HomePage;
