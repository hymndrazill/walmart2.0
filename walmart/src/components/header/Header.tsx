import"./header.css"
import {BsChevronDown,BsHouseDoor} from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {FaTruck} from "react-icons/fa"
import {AiFillCar} from "react-icons/ai"
import {GiBeachBag} from "react-icons/gi"
import { useState } from "react"
const Header = () => {
  const [shippement, setOpenShippement] = useState(false)
  return (
    <header>
        <div className="left">
            <img className="ship_img"src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"/>
            <span>How do you want your items?
          | </span>
       
         <BsChevronDown 
          onClick={(e)=>setOpenShippement(!shippement)}
           size={15} style={{color:"white"}}/>
         <HiOutlineLocationMarker
         size={15} style={{color:"white"}}/>
         <span>Sacramento, 95829 <BsHouseDoor/> Sacramento SuperCenter</span>
        </div>
        {shippement && (
          <div className="shippement">
           <div className="shippement_method">
              <div className="shippement_img">
                <FaTruck size={25} />
              
              </div>
              <div className="shippement_img">
                <AiFillCar size={25}/>
               
              </div>
              <div className="shippement_img">
                <GiBeachBag  size={25}/>
             
              </div>
           </div>
          </div>
          )}
        <div className="right">
        <ul >
            <li>Grocery & essentials</li>
            <li>Up to $300 off laptops</li>
            <li>Apparel</li>
            <li>Home</li>
            <li>Top Toys, Low Prices</li>
            <li>Deals for Days</li>

        </ul>

        </div>
    
    </header>
  )
}

export default Header
