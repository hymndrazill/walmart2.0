import"./header.css"
import {BsChevronDown,BsChevronUp,BsHouseDoor} from "react-icons/bs"
import {HiOutlineLocationMarker } from "react-icons/hi"
import {MdOutlineDone } from "react-icons/md"
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
              <div className="ship">
                <div className="shippement_img">
                  {/* <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png" alt="" /> */}
                  <FaTruck size={25} />
                
                </div>
                <p>Shipping</p>
              </div>
             
              <div className="ship">
                <div className="shippement_img">
                  <AiFillCar size={25}/>
                </div>
                <p>Pick Up</p>
              </div>

              <div className="ship">
                <div className="shippement_img">
                   <GiBeachBag  size={25}/>
                </div>
                <p>Delivery</p>
              </div>
           </div>
            <div className="shippement_address">
                <HiOutlineLocationMarker size={15}/>
                <span>Add an address for shipping and delivery</span>
              <div className="shippement_details">
                <p>Sacramento,CA 95829</p>
                <button>Add address</button>
              </div> 
            </div>

            <div className="pickup_options">
              <div className="address_options">
                <BsHouseDoor size={15}/>
                <span>Sacremento SuperCenter</span>
              </div>
              <p>8915 Gerber Road, Sacramento, CA 95829</p>
                <div className="pickup">
                
                  <MdOutlineDone/>
                  <p>curbside Pickup</p>
                  <MdOutlineDone/>
                  <p>In-store Pickup</p>

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
