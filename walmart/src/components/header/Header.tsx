import"./header.css"
import {BsChevronDown,BsHouseDoor} from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
const Header = () => {
  return (
    <header>
        <div className="left">
            <img className="ship_img"src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"/>
            <span className="shippement">How do you want your items?
             | </span>
         <BsChevronDown size={15} style={{color:"white"}}/>
         <HiOutlineLocationMarker  size={15} style={{color:"white"}}/>
         <span>Sacramento, 95829 <BsHouseDoor/> Sacramento SuperCenter</span>
        </div>

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
