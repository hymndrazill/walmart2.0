import Deal from "../../components/deals/Deal"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./cart.css"

export interface deal {
    deal: String
}
const Cart = ({deal}:deal) => {
  return (
    <div>
        <Deal deal="Up to 25% off Holiday decor Shop now"/>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Cart
