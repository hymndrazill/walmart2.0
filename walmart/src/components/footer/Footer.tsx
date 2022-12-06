import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="left_footer">
            <span>© 2022 Hymndrazill. All Rights Reserved.</span>
        </div>

        <div className="right_footer">
            <ul className="lists">
                <li className="list_item">CA Privacy Rights</li>
                <li className="list_item">DO NOT SELL MY PERSONAL INFORMATION</li>
                <li className="list_item">Request My Personal Information</li>
                <li className="list_item">California Supply Chains Act</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
