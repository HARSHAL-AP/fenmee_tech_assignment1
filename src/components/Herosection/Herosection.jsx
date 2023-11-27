import React from 'react'
import style from "./Herosection.module.css"

const Herosection = () => {
  return (
    <div className={style.herosection}>
        <div className={style.heroheding}>
          <h1>Data-powered solutions <br/> for Industrial Excellence</h1>
     
          <button>Read More</button>
        </div>
        <div className={style.heroimag}>
            <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
        </div>
      </div>
  )
}

export default Herosection