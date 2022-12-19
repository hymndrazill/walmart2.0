import Deal from "../../components/deals/Deal"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import ButtonCart from "./ButtonCart"
import "./cart.css"

export interface deal {
    deal: String
}
const Cart = () => {
  return (
    <div>
        <Deal deal="Up to 25% off Holiday decor Shop now"/>
        <Navbar/>
        <h2 className="cart__text">Cart <span style={{color:"#46474a"}}>(0 Item)</span></h2>
        <div className="items">
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff" alt="" />
            <h2>Sign in to see your saved items.</h2>
            <button >Sign in</button>      
        </div>
        <hr style={{width:"40%", color:"#c1c1c2"}}/>   
        <div className="items">
        <h2>Time to start shopping!</h2>
        <p>Fill it up with savings from these popular departments.</p>
        <div className="departments">
            <ButtonCart  desc='Shop Grocery'/>
            <ButtonCart desc='Shop Electronics'/>
            <ButtonCart desc='Shop Toys'/>
            <ButtonCart desc='Shop Home'/>

        </div>
        </div>
    <Footer/>
    </div>
  )
}

export default Cart
