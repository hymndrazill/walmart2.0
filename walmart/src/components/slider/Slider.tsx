import "./slider.css"

const Slider = () => {
  // const images = [
  //   {
  //     id:1,
  //     title:"Check the new Shoes, Limited Edition.",
  //     description:"his will have a 5% discount until the next week, ",
  //     img:"https://images.pexels.com/photos/14481421/pexels-photo-14481421.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  //   {
  //     id:2,
  //     title:"Check the new Shoes, Limited Edition.",
  //     description:"his will have a 5% discount until the next week, ",
  //     img:"https://images.pexels.com/photos/11434514/pexels-photo-11434514.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  //   {
  //     id:3,
  //     title:"Check the new Shoes, Limited Edition.",
  //     description:"his will have a 20% discount until the next week, ",
  //     img:"https://images.pexels.com/photos/14481421/pexels-photo-14481421.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  //   {
  //     id:4,
  //     title:"Check the new Shoes, Limited Edition.",
  //     description:"his will have a 55% discount until the next week, ",
  //     img:"https://images.pexels.com/photos/11512730/pexels-photo-11512730.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  // ]


  return (
    <div className="slider_container">
       {/* { images.map((image,index)=>(
        <div className="slider"> */}
        <img 
         className="slider_img" 
         src="https://images.pexels.com/photos/11512730/pexels-photo-11512730.jpeg?auto=compress&cs=tinysrgb&w=600"
        //  {image.img}
        //  key={index}
         alt="" />
          <div className="details">
            <h1>Check the new Shoes, Limited Edition</h1>
            <p>his will have a 55% discount until the next week</p>
            <button>Shop Now.</button>
        </div>
        </div>
            // ))}
    // </div>
  )
}

export default Slider
