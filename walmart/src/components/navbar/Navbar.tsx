import "./navbar.css"
import {BiCategory} from  'react-icons/bi'
import {AiOutlineSearch,AiFillHeart,AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div>
        {/* Logo */}
        <div className="navbar">
            <div className="image">
                <img 
                className="navbar__image" 
                src="https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png"/>
            </div>
            <span><BiCategory/>Category</span>
            <span><BiCategory/>Services</span>
            <div className="input_search">
                <input type="text" placeholder="Search Everything At Walmart online and in store" />
                <AiOutlineSearch/>
            </div>
            <div className="order">
                <AiFillHeart/>
                <span >reorder</span>
                <h3>My Items</h3>
            </div>
            <div className="login">
                <AiOutlineUser/>
                <span>Sign in</span>
                <h3>Account</h3>
            </div>
            <div className="cart">
                <AiOutlineShoppingCart/>
                <span>0</span>
                <h3>$0.00</h3>
            </div>


        </div>


    </div>
  )
}

export default Navbar
