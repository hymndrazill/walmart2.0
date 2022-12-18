import Container from "./components/container/Container"
import Deal from "./components/deals/Deal"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Cart, { deal } from "./pages/cart/Cart"
// import "./App.css"
import Login from "./pages/login/Login"
function App({deal}:deal) {
  return (
    <div className="App">
      <Cart  deal={deal}/>
     
      

      {/* <Login/> */}
      {/* <Deal/>
      <Navbar/>
      <Header/>
      <Container/>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1>
      <h1>aaaaaaaaaaa</h1> */}

    </div>
  )
}

export default App
