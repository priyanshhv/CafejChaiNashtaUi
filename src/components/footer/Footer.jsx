import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Phone } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                   Thank you for visiting Cafe Chai Nashta! <br></br> Indulge in the delightful flavors of our handcrafted chai and delectable nashta treats. We take pride in serving you the finest quality ingredients, sourced with care and prepared with love.

Stay connected with us on social media for updates on our latest offerings and special promotions:
                </div>
                <div className="socialIcons">
                    {/* <span className="icon">
                        <FaFacebookF />
                    </span> */}
                    <a href="https://instagram.com/cafe_chai_nashta" className="icon">
                    <span >
                        <FaInstagram />
                    </span>
                    </a>
                     <a href="tel:+917017059157" className="icon">
                    <span className="icon">
                        <Phone/>
                    </span>
                    </a>
                    {/* <span className="icon">
                        <FaLinkedin />
                    </span> */}
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;