import React, { useEffect, useState } from "react";
import "./style.scss";
import {
    AiOutlineDownCircle,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineMenu,
    AiOutlinePhone,
    AiOutlineShoppingCart,
    AiOutlineTwitch,
    AiOutlineUpCircle,
    AiOutlineUser

} from "react-icons/ai";

import { Link, useLocation } from "react-router-dom";
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

interface IProps {
    name: string,
    path: string,
    isShowMenu?: boolean,
    child? : any
};

const Header : React.FC = () => {

    const location = useLocation();

    // const [isShowCategories, setIsShowCategories] = useState<Boolean>(false);
    const [isShowHamberger, setIsShowHamberger] = useState<Boolean>(false);
    const [isHome, setIsHome] = useState<any>(location.pathname.length <= 1)
    const [isShowCategories, setIsShowCategories] = useState(isHome)
    const [menu, setMenu] = useState<IProps[]>([
        {
            name: "Trang Chu",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cua Hang",
            path: ROUTERS.USER.HOME
        },
        {
            name: "San Pham",
            path: ROUTERS.USER.HOME,
            isShowMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ""              
                },
                {
                    name: 'Rau',
                    path: " "
                },
                {
                    name: "Hoa Qủa",
                    path: " "
                }
            ]
        },
        {
            name: "Bai Viet",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Lien He",
            path: ROUTERS.USER.HOME
        }
    ]);
    const categories = [
        "Thịt tươi",
        "Rau củ",
        "Nước trái cây ",
        "Trái cây",
        "Hải sản"
    ]

    useEffect(() => {
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome)
        setIsShowCategories(isHome)
    }, [location])

    const handleClickProduct = (key:number) => {
        const newMenu = [...menu];
        newMenu[key].isShowMenu = !newMenu[key].isShowMenu;
        setMenu(newMenu);
    }

    return (
        <>
            <div 
                className={"hamberger-menu-overlay" + 
                (isShowHamberger ? " active " : " " )}
                onClick={() => setIsShowHamberger(false)}
                >

            </div>

            <div className={"hamberger-menu-wrapper" + (isShowHamberger ? " show " : " " )}>
                <div className="header-logo">
                    <h1>Shop SeeM</h1>
                </div>
                <div className="hamberger-menu-cart">
                    <ul>
                        <li>
                            <Link to={""}><AiOutlineShoppingCart/></Link>
                            <span>5</span>
                        </li>
                    </ul>
                    <div className="header-cart-price">
                        Giỏ hàng: <span>{formatter(1001230)}</span>
                    </div>
                </div>

                <div className="hamberger-menu-widget">
                    <div className="header-top-right-auth">
                        <Link to={""}>
                            <AiOutlineUser/> Đăng nhập
                        </Link>
                    </div>
                </div>

                <div className="hamberger-menu-nav">
                    <ul>
                        {
                            menu.map((menu, key) => (
                                <li key={key}>
                                    <Link to={menu.path} onClick={() => handleClickProduct(key)}>
                                        {menu.name}
                                        {menu.child && (
                                            menu.isShowMenu ? (
                                                <AiOutlineDownCircle/>
                                            ): (<AiOutlineUpCircle/>)
                                        )}
                                    </Link>

                                    {menu.child && 
                                        (<ul className={ "header-menu-dropdown" + (menu.isShowMenu ? "show-submenu" : " ")}>
                                            {menu.child.map((child: any, keyChild: number) => (
                                                <li key={keyChild}>
                                                    <Link to={child.path}>{child.name}</Link>
                                                </li>
                                            ))}
                                        </ul>)
                                    }
                                </li>
                                
                            ))
                        }
                    </ul>
                </div>

                <div className="header-top-right-social">
                    <Link to={""} ><AiOutlineFacebook/></Link>
                    <Link to={""}><AiOutlineInstagram/></Link>
                    <Link to={""}><AiOutlineLinkedin/></Link>
                    <Link to={""}><AiOutlineTwitch/></Link>
                </div>

                <div className="hamberger-menu-contact">
                    <ul>
                        <li>
                            <AiOutlineMail/> manh@gmail.com
                        </li>
                        <br/>
                        <li>Miễn phí đơn hàng từ {formatter(200000)}</li>
                    </ul>
                </div>

            </div>

            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li>
                                    <AiOutlineMail/>
                                    manh@gmail.com
                                </li>
                                <li>
                                    Mien phi ship hoa don tu {formatter(200000)} 
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header-top-right">
                            <ul>
                                <li>
                                    <Link to={""} ><AiOutlineFacebook/></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineInstagram/></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineLinkedin/></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineTwitch/></Link>
                                </li>
                                <li>
                                    <Link to={""}><AiOutlineUser/></Link>
                                    <span>Dang nhap</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="header-logo">
                            <h1>Shop SeeM</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <nav className="header-menu">
                            <ul>
                                {
                                    menu && menu.map((menu, menuKey) => (
                                        <li key={menuKey} className="active">
                                            <Link to={menu?.path}>
                                            {menu.name}
                                            </Link>
                                            {
                                                menu.child && (
                                                    <ul className="header-menu-dropdown">
                                                        {
                                                            menu.child.map((childItem: any, childKey: number) => (
                                                                <li key={`$(menuKey)-$(childKey)`}>
                                                                    <Link to={childItem.path}>
                                                                        {childItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                        
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="header-cart">
                            <div className="header-cart-price">
                                <span>{formatter(1000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <AiOutlineShoppingCart/>
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="humberger-open">
                                <AiOutlineMenu onClick={() => setIsShowHamberger(true)}/>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row hero-categories-container">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 hero-categories ">
                        <div className="hero-categories-all" onClick={() => setIsShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh sach san pham
                        </div>
                        {isShowCategories &&
                            <ul className={isShowCategories ? "" : "hidden"}>
                                {
                                    categories.map((item, key) => (
                                        <li key={key}>
                                            <Link to={ROUTERS.USER.PRODUCTS}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        }
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 hero-search-container">
                        <div className="hero-search">
                            <div className="hero-search-form">
                                <form action="">
                                    <input type="text" name="" value={""} placeholder="Ban dang tim gi"/>
                                    <button type="submit">Tim kiem</button>
                                </form>
                            </div>

                            <div className="hero-search-phone">
                                <div className="hero-search-phone-icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero-search-phone-text">
                                    <p>0346623762</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>

                        { isHome && (
                            <div className="hero-item">
                                <div className="hero-text">
                                    <span>Trai cay tuoi</span>
                                    <h2>
                                        Rau qua <br/>
                                        sach 100%
                                    </h2>
                                    <p>Mien phi gia hang tan noi</p>
                                    
                                    <Link to={""} className="primary-btn">Mua ngay</Link>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header;