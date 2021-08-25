import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/review.css'
import img1 from '../images/1.jpeg'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.jpeg'
import img6 from '../images/6.jpeg'

function SiteReviews() {

return (
      <Carousel
        className="myCarousel-div"
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}>
          
        <div className="myCarousel-div">
          <img src={img1} alt="review1"style={{width: 150, height: 150}}/>
          <div className="myCarousel">
            <h3>Lillie</h3>
            <h4>Student</h4>
            <p>
              I really love this site, it has everything I was looking for.
            </p>
          </div>
        </div>

        <div className="myCarousel-div">
          <img src={img3} alt="review2"style={{width: 150, height: 150}}/>
          <div className="myCarousel">
            <h3>Susan</h3>
            <h4>Social worker</h4>
            <p>
            Selflax saved my business.
            </p>
          </div>
        </div>

        <div className="myCarousel-div">
          <img src={img5} alt="review3" style={{width: 150, height: 150}}/>
          <div className="myCarousel">
            <h3>Willie</h3>
            <h4>Software Engineer</h4>
            <p>
              I enjoy catching up with my therapist on my computer or n my phone when I'm on the go!
            </p>
          </div>
        </div>

        <div className="myCarousel-div">
          <img src={img2} alt="review4" style={{width: 150, height: 150}}/>
          <div className="myCarousel">
            <h3>Jona</h3>
            <h4>Graphic Designer</h4>
            <p>
              Join the movement, you will not regret it.
            </p>
          </div>
        </div>

        <div className="myCarousel-div">
          <img src={img4} alt="review5"style={{width: 150, height: 150}}/>
          <div className="myCarousel">
            <h3>Lily</h3>
            <h4>Speech Pathologist</h4>
            <p>
            Selflax impressed me on multiple levels. Its just amazing!
            </p>
          </div>
        </div>
     
        <div className="myCarousel-div">
          <img src={img6} alt="review6"style={{width: 150, height: 150}}/>
          <div className="myCarousel">
            <h3>Yasmin</h3>
            <h4>Teacher</h4>
            <p>
              The therapists are very professionals.
            </p>
          </div>
        </div>

    </Carousel>
  );
}



export default SiteReviews