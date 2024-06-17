import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {

    return (
        <>
            <footer className="footer container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer-about">
                            <h1 className="footer-about-logo">SHOP SEEM</h1>
                            <ul>
                                <li>Địa chỉ: Văn Quán</li>
                                <li>Phone: 0342323443</li>
                                <li>Email: manh@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer-widget">
                            <h4>Cua Hang</h4>
                            <ul>
                                <li>
                                    <Link to={""}>Lien He</Link>
                                </li>
                                <li>
                                    <Link to={""}>Thông tin về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to={""}>Sản phẩm kinh doanh</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to={""}>Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to={""}>Gior hàng</Link>
                                </li>
                                <li>
                                    <Link to={""}>Danh sách ưu thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer-widget">
                            <h4>Khuyến mãi & Ưu đãi</h4>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action="#">
                                <div className="input-group">
                                    <input type="text" placeholder="Nhập email..." />
                                    <button type="submit" className="button-submit">
                                        Đăng ký
                                    </button>
                                </div>
                                <div className="footer-widget-social">
                                    <div>
                                        <AiOutlineFacebook/>
                                    </div>
                                    <div>
                                        <AiOutlineInstagram/>
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;