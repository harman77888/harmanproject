import React from "react";

import facebook from "../../Brand.png"
import twitter from "../../Brand 2.png"
import insta from "../../Brand 3.png"
import printest from "../../Pinterest svg.png"
const Footer = () => {
    return(
        <div className="container">
            <footer>
                <div className="footer_part">
                    <div>
                        <ul className="footer_list">
                            <li className="custmers">CUSTOMER SERVICE</li>
                            <li className="abot_page">Help & FAQs</li>
                            <li className="abot_page">Return & Refund</li>
                            <li className="abot_page">Shipping Policy</li>
                            <li className="abot_page">Customs & Taxes </li>
                            <li className="abot_page">Customer's Reviews</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer_list">
                            <li className="custmers">COMPANY</li>
                            <li className="abot_page">About Japan With Love</li>
                            <li className="abot_page">Contact Us</li>
                            <li className="abot_page">Special Deals & Offers</li>
                            <li className="abot_page">Terms of Service</li>
                            <li className="abot_page">Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer_list">
                            <li className="custmers">HELP CENTER</li>
                            <li className="abot_page">Order Information</li>
                            <li className="abot_page">Shipping Option</li>
                            <li className="abot_page">International Shipping</li>
                            <li className="abot_page">Payment Options</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer_list">
                            <li className="custmers">RETURN & WARRANTLY</li>
                            <li className="abot_page">Returns & Exchange Policy</li>
                            <li className="abot_page">Returns Center</li>
                            <li className="abot_page">Warranty Policy</li>
                            <li className="abot_page">Warranty Registration</li>
                            <li className="abot_page">Warranty Repair Center</li>
                        </ul>
                    </div>
                </div>
                <div className="copy_ryt">
                    <div className="furniture">Furnitur © Copyright 2020, Inc. All rights reserved</div>
                    <div className="apps">
                        <ul>
                        <li><a href="#"><img src= {facebook} alt="error" /></a></li>
                        <li><a href="#"><img src={twitter} alt="error"/></a></li>
                        <li><a href="#"><img src={insta} alt="error"/></a></li>
                        <li><a href="#"><img src={printest} alt="error"/></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;


