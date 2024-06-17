import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface MasterLayoutProps {
    children: ReactNode;
}
const MasterLayout: React.FC<MasterLayoutProps> = ({ children, ...props }) => {

    return (
        <div {...props}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default MasterLayout;
