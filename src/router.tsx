import React from "react";
import HomePage from "./pages/user/homepage";
import ProductPage from "pages/user/productPage";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/user/theme/masterLayout";
import path from "path";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: <ProductPage/>
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key: number) => (
                        <Route key={key} path={item.path} element={item.component}/>
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;