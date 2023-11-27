import React from 'react'
import style from "./Footer.module.css"
import {AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <div className={style.footer}>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" className={style.ftlogo}/>
        <div className={style.footerlinks}>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us </p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
        </div>
       
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div className={style.socialicons}>
            <AiOutlineTwitter/><AiFillLinkedin/>
        </div>
        <p>© 2022. Ntwist Inc.</p>
    </div>
  )
}

export default Footer