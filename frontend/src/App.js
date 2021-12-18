import React from "react";
import { GlobalStyles } from "./styles/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Context/UserContext";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Page404 from "./pages/Page404/Page404";
import Produt from "./pages/Produt/Produt";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Faq from "./pages/Faq/Faq";
import User from "./pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="product/*" element={<Produt />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login/*" element={<Login />} />
          <Route path="faq" element={<Faq />} />
          <Route path="cart" element={<Cart />} />
          <Route path="acount/*" element={<User />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Social />
        <Footer />
        <GlobalStyles />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
