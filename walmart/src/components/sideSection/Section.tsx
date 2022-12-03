import "./section.css"

const Section = () => {
  return (
    <div className="section_container">
        <img className="section_img"
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="section_details">
          <p>Find gifts, holiday faves & more.</p>
          <h3>Major Savings</h3>
          <span>Shop Now</span>
        </div>
    </div>
  )
}

export default Section
