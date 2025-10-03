import { Link } from "react-router-dom";
import logo from "assets/logo.webp";
import cart from "assets/cart-outline.svg";
import user from "assets/person-outline.svg";
import "components/Header/Header.css";

export default function Header() {
  return (
    <header className="header flex items-center justify-between px-4 py-2 w-full border-b-2 h-2/12">
        <div className="header-containe flex items-center justify-between w-full">
            <div className="logo-container w-1/6">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" className="h-12" />
                </Link>
            </div>
            <div className="navbar flex items-center justify-end w-5/6">
                <ul className="navbar-nav flex items-center justify-around gap-10">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <img src={cart} alt="Cart" className="icon" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            <img src={user} alt="User" className="icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  );
}