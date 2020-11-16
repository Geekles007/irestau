import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { RecoilRoot } from 'recoil';
import Contact from "@/components/Contact";

interface LayoutProps {
  child: React.ReactNode;
  noFooter: boolean
}

export default ({ child, noFooter }: LayoutProps) => (
    <RecoilRoot>
        <div className="h-full">
            <Header />
            <main className="pt-18">{child}</main>
            <Footer noFooter={noFooter} />
        </div>
        <Contact />
    </RecoilRoot>
);
