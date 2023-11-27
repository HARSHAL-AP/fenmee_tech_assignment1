import React,{useEffect,useState} from 'react'
import style from "./Navbar.module.css"
import {HiOutlineBars3BottomLeft} from "react-icons/hi2"
import {BiSearch} from "react-icons/bi"

const Navbar = () => {
  const [isMobail,setisMobail]=useState(false)
  return (
    <nav className={style.nav}>
    <div className={style.logocontainer}>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
    </div>
    <div className={style.navlinks}>
        <div>Home</div>
        <div>Industries</div>
        <div>AI Software</div>
        <div>Blog</div>
        <div>Contact Us</div>
    </div>
    <div className={style.hamburgicons}>
         <BiSearch/>
         <HiOutlineBars3BottomLeft/>
        
    </div>
   
 </nav>
 
  )
}

export default Navbar