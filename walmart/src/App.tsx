import Container from "./components/container/Container"
import Deal from "./components/deals/Deal"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Deal/>
      <Navbar/>
      <Header/>
      <Container/>
    </div>
  )
}

export default App
