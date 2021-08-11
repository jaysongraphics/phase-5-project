// import logo from '../images/LOGOGFINALBLACK.png'
import { Link } from 'react-router-dom';


function Footer() {


    return (
    <div className="footer-div">
            <div>
                <h1>About Us</h1>
                <Link href="#">Vision</Link>
            </div>
            <div>
                <h1>Store</h1>
                <Link href="#">Writing</Link>
            </div>
            <div>
                <h1>Contact Us</h1>
                <Link href="#">Uttar Pradesh</Link>
            </div>
            <div>
                <h1>Social Media</h1>
                <Link href="#">
                <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                    Facebook
                    </span>
                </i>
                </Link>
                <Link href="#">
                <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                    Instagram
                    </span>
                </i>
                </Link>
                <Link href="#">
                <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                    Twitter
                    </span>
                </i>
                </Link>
            </div>
    </div>
  )
}
    

export default Footer;
