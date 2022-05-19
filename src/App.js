import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import About from "./components/About";

const App = () =>{

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/products/:_id" element={<SingleProduct/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
            <Footer/>
        </>
    )   
}
export default App;