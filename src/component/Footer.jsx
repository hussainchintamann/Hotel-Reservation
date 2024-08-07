import React from 'react';
// import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>HOTELIER</h4>
                    <p>Providing the best hotel services since 1990.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Rooms</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Options</h4>
                    <ul>
                        <li>Booking</li>
                        <li>Our Team</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /> </a>
                        <a href="#"><FaWhatsapp /> </a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 HOTELIER. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
 