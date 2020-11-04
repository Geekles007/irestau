import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  child: React.ReactNode;
  noFooter: boolean
}

export default ({ child, noFooter }: LayoutProps) => (
  <div className="h-full overflow-hidden">
    <Header />
    <main className="pt-18">{child}</main>
    <Footer noFooter={noFooter} />
  </div>
);
