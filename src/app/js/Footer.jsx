import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="Footer Navigation">
            <div className="container nav-content">
                <div>
                    <Link className="link nav-link" to="/about">
                        About
                    </Link>
                    &nbsp; &nbsp; &nbsp;
                    <p className="link nav-link">“Data provided for free by <a href="https://iextrading.com/developer">IEX</a>. View <a href="https://iextrading.com/api-exhibit-a/">IEX’s Terms of Use</a>.”</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

