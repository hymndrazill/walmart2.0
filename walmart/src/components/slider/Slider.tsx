import "./slider.css"

const Slider = () => {
  return (
    <div className="slider_container">
        <div className="details">
        <img 
            className="slider_img" 
            src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600" 
            alt="" />
        <h1>Check the new Shoes, Limited Edition.</h1>
        <p>This will have a 5% discount until the next week, don't forget!</p>
        <button>Shop Now.</button>
        </div>
    </div>
  )
}

export default Slider
