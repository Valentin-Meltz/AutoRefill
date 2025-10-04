import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Products from "pages/Products/Products";
import Cart from "pages/Cart/Cart";
import Client from "pages/Client/Client";
import Contact from "pages/Contact/Contact";
import LogIn from "pages/LogIn/LogIn";
import Account from "pages/Account/Account";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Page Home */}
      <Route path="/" element={<Home />} />

      {/* Page Products */}
      <Route path="/products" element={<Products />} />

      {/* Page Cart */}
      <Route path="/cart" element={<Cart />} />
      
      {/* Page Client */}
      <Route path="/client" element={<Client />} />

      {/* Page Contact */}
      <Route path="/contact" element={<Contact />} />

      {/* Page LogIn */}
      <Route path="/login" element={<LogIn />} />

      {/* Page SignIn */}
      <Route path="/account" element={<Account />} />

      {/* 404 */}
      <Route path="*" element={<div>Page introuvable</div>} />
    </Routes>
  );
}