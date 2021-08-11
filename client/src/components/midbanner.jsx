import image from '../images/doggie.gif'
import image2 from '../images/unboxing.png'
import image3 from '../images/loving.png'
import image4 from '../images/selfie.png'
import image5 from '../images/laying.png'

function MidBanner() {
    return (
        <div id="whole-service-div">
        <div className="mid-section">
                <div>
                    <img className ="mid-bannerimg" src={image}/>
                    </div>

                    <div className="mid-banner-div">
                     <p className="mid-banner-title">Our Services</p>
                  </div>


        <div className="mid-services-div">
                <div className="mid-book">
                    <img id="midbanner-image" class="ui medium circular image" src={image2}/>
                    <p className="mid-banner-paragraph">Book appointments</p>
                    <p className="mid-paragraph">Book an appointment with your favorite therapists!</p>
                </div>

   
                <div className="mid-review">
                <img id="midbanner-image" class="ui medium circular image" src={image3}/>
                <p className="mid-banner-paragraph">Review therapists</p>
                <p className="mid-paragraph">Review your therapists, tell the community how good they are!</p>
                </div>


                <div className="mid-share">
                <img id="midbanner-image" class="ui medium circular image" src={image4}/>
                <p className="mid-banner-paragraph">Share your feelings</p>
                <p className="mid-paragraph">Do not hide your feelings, share them.</p>
                </div>


                <div className="mid-chat">
                <img id="midbanner-image" class="ui medium circular image" src={image5}/>
                <p className="mid-banner-paragraph">Chat with friends</p>
                <p className="mid-paragraph">Talk to your friends online.</p>
                </div>
            </div>
        </div>
    </div>

  )
}




export default MidBanner;
