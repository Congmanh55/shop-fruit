import React from "react";
import "./style.scss";
import { ROUTERS } from "utils/router";
import { Link } from "react-router-dom";

const BreakCrumb = (props: any ) => {

    return (
        <>
            <div className="breakcrumb">
                <div className="breakcrumb-text">
                    <h2>Shop SeeM</h2>
                    <div className="breakcrumb-option">
                        <ul>
                            <li className="link">
                                <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                            </li>
                            <li>{props.name}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreakCrumb;