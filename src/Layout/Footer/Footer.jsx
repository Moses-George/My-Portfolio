import React from "react";
import { Link } from "react-router-dom";
import "../../style/footer.css";
import {  FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {


    return (
        <footer>
            <hr />
            <div className="footer_content">
                <div className="footer_links">
                    <div className="link_list">
                        <p className="link_heading">general</p>
                        <Link to="/" className="link">
                            Home
                        </Link>
                        <Link to="/about" className="link">
                            about
                        </Link>
                        <Link to="/projects" className="link">
                            projects
                        </Link>
                    </div>

                    <div className="link_list">
                        <p className="link_heading">extra</p>
                        <a href="https://drive.google.com/file/d/1sUo06mNkvIa6-AIK8Lk0OHnPWmvK8D-7/view?usp=sharing" className="link" title="Resume" >
                            Resume
                        </a>
                        <Link to="/contact" className="link" >
                            Contact
                        </Link>
                    </div>

                    <div className="link_list">
                        <p className="link_heading">socials</p>
                        <div className="socials">
                            <a href="https://wa.me/08165960182" target='_blank' rel="noreferrer">
                                <FaWhatsapp style={{ fontSize: "35px", color:"#25D366" }} />
                            </a>
                            <a href="https://www.twitter.com/GeorgeM_32" target='_blank' rel="noreferrer">
                                <FaTwitter style={{ fontSize: "35px", color:"#1DA1F2" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/george-moses-427601240" target='_blank' rel="noreferrer">
                                <FaLinkedin style={{ fontSize: "35px", color:"#0072B1" }} />
                            </a>
                            <a href="https://github.com/Moses-George" target='_blank' rel="noreferrer">
                                <FaGithub style={{ fontSize: "35px", color:"black" }} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer_bottom">
                <p className="author">© {new Date().getFullYear()} Moses George</p>
            </div>
        </footer>
    );
};

export default Footer;
