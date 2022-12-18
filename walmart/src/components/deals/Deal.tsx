import { deal } from "../../pages/cart/Cart"
import "./deal.css"

const Deal = ({deal}:deal) => {
  return (
    <div className="deals">

      <h4> {deal}</h4>
      {/* Link here */}
        <p>Shop Deals</p>
    </div>
  )
}

export default Deal
