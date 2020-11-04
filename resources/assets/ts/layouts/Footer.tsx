import React from "react";

interface FooterProps {
    noFooter: boolean
}

function Footer({noFooter}: FooterProps) {
    return (
        <>
            <footer className={noFooter ? "hidden" : ""}>
                Footer
            </footer>
        </>
    );
}

export default Footer;
