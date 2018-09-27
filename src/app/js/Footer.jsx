import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
                    <p>
                        <Link className="nav-link" to="/about">
                        About
                    </Link>
                        </p>
                    <p className="nav-link">“Data provided for free by <a href="https://iextrading.com/developer" className="link nav-link">IEX</a>. View <a href="https://iextrading.com/api-exhibit-a/">IEX’s Terms of Use</a>.”
                    <span className="rev">  &nbsp;&nbsp;  v~0.9.1 </span>
                    </p>
        </div>
    );
};

export default Footer;

