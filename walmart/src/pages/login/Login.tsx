import Footer from "../../components/footer/Footer"
import "./login.css"

const Login = () => {
  return (
    <div className="login">
        <img className="login_img"src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt="" />
        <h2>Enter your email to sign <br/>  in or create an account</h2>
        <div className="form">
            <label ><strong>Email Address</strong></label>
            <input type="email" placeholder="Enter Your Email here" />
            <button>Continue</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Login
