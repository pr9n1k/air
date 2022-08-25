import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
