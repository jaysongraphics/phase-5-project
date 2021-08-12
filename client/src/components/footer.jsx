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
                <a target="_blank" href="https://www.selflax.com/collections/mental-health-awareness" title="example">Shop Selflax</a>
                {/* <Link href="https://www.selflax.com/collections/mental-health-awareness">Shop Selflax</Link> */}
            </div>
            <div>
                <h1>Contact Us</h1>
                <Link href="#">Uttar Pradesh</Link>
            </div>
            <div>
                <h1>Social Media</h1>
                <div>
                <a target="_blank" href="https://www.instagram.com/selflax/" title="example">Instagram</a>
                </div>

                <div>
                <a target="_blank" href="https://www.facebook.com/Selflax/" title="example">Facebook</a>
                </div>

                <div>
                <a target="_blank" href="https://twitter.com/selflax" title="example">Twitter</a>
                </div>   
            </div>
    </div>
  )
}
    

export default Footer;
