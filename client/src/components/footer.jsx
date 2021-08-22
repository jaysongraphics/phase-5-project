import { Link } from 'react-router-dom';

function Footer() {
    return (
         <div className="footer-div">
            <div>
                <h1 className="footer-color-tilt">About Us</h1>
                <Link to=''
                id="member-already"
                className="footer-color"
                href="#">Vision
                </Link>
            </div>

            <div>
                <h1 className="footer-color-tilt">Store</h1>
                <a id="member-already"href="https://www.selflax.com/collections/mental-health-awareness" 
                className="footer-color"
                title="example">Shop Selflax</a>
            </div>

            <div>
                <h1 className="footer-color-tilt">Contact Us</h1>
                <Link to=''
                id="member-already" className="footer-color"
                href="#">Uttar Pradesh
                </Link>
            </div>

            <div>
                <h1 className="footer-color-tilt">Social Media</h1>
                    <div>
                        <a id="member-already"
                        href="https://www.instagram.com/selflax/"
                        className="footer-color"
                        title="example">Instagram</a>
                    </div>

                        <div>
                            <a id="member-already"
                            href="https://www.facebook.com/Selflax/" 
                            className="footer-color"
                            title="example">Facebook</a>
                        </div>

                    <div>
                        <a id="member-already"
                        href="https://twitter.com/selflax" className="footer-color" 
                        title="example">Twitter</a>
                    </div>   
            </div>
    </div>
  )
}  

export default Footer;