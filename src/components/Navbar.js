import {Link, NavLink} from 'react-router-dom'
import { BsFillCartCheckFill, BsFillSunFill,BsFillMoonFill } from "react-icons/bs";
import { useState } from 'react';

const Navbar = () =>{

    const [navToggle,setNavToggle] = useState(false);
    const [dark, setDark] = useState(false);
    
    const darkToggle =() =>{
        setDark(!dark);
        !dark?document.body.style.background="#000000cc":document.body.style.background="white";
        !dark?document.body.style.color = "white": document.body.style.color = "black";
    }
    
    
    return(
        <>
        <div className="navbar_section">
            <div className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="links">
                    <NavLink activeClassName="active_nav" to='/'>Home</NavLink>
                    <NavLink activeClassName="active_nav" to='/about'>About</NavLink>
                    <NavLink activeClassName="active_nav" to='/login'>Login/Register</NavLink>
                    <NavLink activeClassName="active_nav" to='/products'>Products</NavLink>
                    <NavLink activeClassName="active_nav" to="/cart"><BsFillCartCheckFill /><sup>5</sup></NavLink>
                </div>
                <div style={{display:'flex'}}>
                <div className={navToggle?"toggle_btn opan":"toggle_btn open"} onClick={() =>{
                    setNavToggle(!navToggle);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="theme_mode" onClick={darkToggle}>
                    <div className="theme_btn">
                       {dark? <BsFillSunFill style={{color: 'yellow',fontWeight:'600',fontSize:'18px'}}/> : <BsFillMoonFill style={{color: 'black',fontWeight:'600',fontSize:'18px'}} />}
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className={navToggle?"show_menu":"hide_menu"}>
            <div className="links" id='links'>
                <Link onClick={() =>setNavToggle(false)} to='/'>Home</Link>
                <Link onClick={() =>setNavToggle(false)} to='/about'>About</Link>
                <Link onClick={() =>setNavToggle(false)} to='/login'>Login/Register</Link>
                <Link onClick={() =>setNavToggle(false)} to='/products'>Products</Link>
                <Link onClick={() =>setNavToggle(false)} to="/cart"><BsFillCartCheckFill /><sup>5</sup></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;