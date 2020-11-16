import React, { useState } from "react";
import Logo from "@/components/common/Logo";
import SecondMenu from "@/components/common/SecondMenu";
import NewsLetter from "@/components/common/NewsLetter";
import SocialLink from "@/components/common/SocialLink";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ISocialLink from "@/core/models/ISocialLink";

interface FooterProps {
    noFooter: boolean
}

function Footer({noFooter}: FooterProps) {

    const [socials, setSocials] = useState<ISocialLink[]>([
        {
            id: 1,
            link: "",
            icon: <FaFacebookF />
        },
        {
            id: 2,
            link: "",
            icon: <FaTwitter />
        },
        {
            id: 3,
            link: "",
            icon: <FaInstagram />
        },
        {
            id: 4,
            link: "",
            icon: <FaLinkedin />
        },
    ]);

    return (
        <>
            <footer className={"px-10 pt-10 inline-flex flex-col gap-y-6 bg-white w-full " + (noFooter ? "hidden" : "")}>
                <div className="flex w-full justify-between items-start">
                    <div className="inline-flex flex-col gap-y-3 w-3/5">
                        <Logo />
                        <SecondMenu />
                    </div>
                    <div className="flex w-2/5 flex-col">
                        <h3 className="text-3xl font-bold mb-3">NewsLetter Subscription</h3>
                        <NewsLetter />
                    </div>
                </div>
                <div className="flex w-full items-center">
                    <div className="socials inline-flex items-center gap-x-3 w-1/2">
                        <a href="#">
                            <img className="h-10" src="./../images/apple-store-badge.png" alt="apple store badge"/>
                        </a>
                        <a href="#">
                            <img className="h-10" src="./../images/get-it-on-google-play-store-button.png" alt="google play store badge"/>
                        </a>
                    </div>
                    <div className="inline-flex justify-end gap-x-3 w-1/2">
                        {
                            socials.map((item: ISocialLink) => {
                                return (
                                    <SocialLink key={item.id} data={item} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-between border-t border-solid border-gray-300 h-16 items-center">
                    <div className="inline-flex gap-x-3 items-center">
                        Admin Contact: <span className="font-semibold">+7 (944) 054 43 43</span>
                    </div>
                    {(new Date()).getFullYear()} © Rest's Corporation
                </div>
            </footer>
        </>
    );
}

export default Footer;
