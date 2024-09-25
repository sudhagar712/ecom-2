import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Collections from "./Pages/Collections"
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Order from './Pages/Order'
import Placeorder from './Pages/Placeorder'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Whatapps from './Components/Commen/Whatapps'
import SearchBar from './Components/SearchBar'
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[1vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/place-order" element={<Placeorder />} />
      </Routes>
      <Whatapps />
      {/* <Footer /> */}
    </div>
  );
}

export default App
