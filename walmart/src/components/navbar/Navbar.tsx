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
                src="//i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"/>
            </div>
            <span><BiCategory className="icons"/>Category</span>
            <span><BiCategory className="icons"/>Services</span>
            <div className="input_search">
                <input type="text" placeholder="Search Everything At Walmart online and in store" />
                <AiOutlineSearch size={35}  className="search_icon"/>
            </div>
            <div className="order">
                <AiFillHeart className="heart_icon"/>
                <span >reorder</span>
                <h3>My Items</h3>
            </div>
            <div className="login">
                <AiOutlineUser className="user_icon"/>
                <span>Sign in</span>
                <h3>Account</h3>
            </div>
            <div className="cart">
                    <AiOutlineShoppingCart size={30} style={{color:"white"}}className="cart_icon"/>                   
                     <div className="cart_total">
                        <div className="total">0</div>
                     </div>
                    <span >$0.00</span>
            </div>
        </div>


    </div>
  )
}

export default Navbar
