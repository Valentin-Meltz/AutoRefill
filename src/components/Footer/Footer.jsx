import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer flex items-center justify-center px-4 py-2 w-full border-t-2">
            <div className="footer-container flex items-center justify-between w-full h-full my-10 mx-20">
                <div className='info flex flex-col items-start justify-start gap-4'>
                    <p className="text-gray-500">&copy; 2025 Auto Refill. All rights reserved.</p>
                    <div className="social-logo flex items-center justify-start mt-2 gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className=" mx-2 w-8 h-8" loading="lazy"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="mx-2 w-8 h-8" loading="lazy"/>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/042/148/611/small_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png" alt="Twitter" className="mx-2 w-10 h-10" loading="lazy"/>
                        <img src="https://get-picto.com/wp-content/uploads/2024/07/png-logo-youtube.webp" alt="YouTube" className="mx-2 w-8 h-8" loading="lazy"/>
                    </div>
                </div>
                <div className="link">
                    <Link to="/contact" className="nav-item text-gray-500 mx-2">Contact</Link>
                </div>
            </div>
        </footer>
    );
}