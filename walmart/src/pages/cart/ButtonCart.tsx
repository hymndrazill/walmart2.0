import "./buttoncart.css"

interface Department {
    desc: String;
}
const ButtonCart = ({desc}:Department) => {
  return (
    <div>
      <button className='btn'>{desc}</button>
    </div>
  )
}

export default ButtonCart
