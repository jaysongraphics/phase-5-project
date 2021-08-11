import logo from '../images/LOGOGFINALBLACK.png'
import female from '../images/female.jpg'
import male from '../images/male.jpg'
import male2 from '../images/male2.jpg'


function Influencers() {


    return (
    <div className="influencers-section">
         <p className="influencers-title">Influencers</p>
        <div id="influencers-div" class="ui move reveal">
            <div class="visible content">
                <img id="influencers-img" src={female}class="ui small image" />
            </div>
            <div class="hidden content">
            <img id="influencers-img" src={logo} class="ui small image"/>
            <br />
    
            <p className="influencer-paragraph">Book appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments test</p>
            </div>
        </div>

        <div id="influencers-div" class="ui move reveal">
            <div class="visible content">
                <img id="influencers-img" src={male2}class="ui small image" />
            </div>
            <div class="hidden content">
            <img id="influencers-img" src={logo} class="ui small image"/>
            <br />

            <p className="influencer-paragraph">Book appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments test</p>
            </div>
        </div>

        <div id="influencers-div" class="ui move reveal">
            <div class="visible content">
                <img id="influencers-img" src={female}class="ui small image" />
            </div>
            <div class="hidden content">
            <img id="influencers-img"src={logo} class="ui small image"/>
            <br />

                <p className="influencer-paragraph">Book appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments test</p>
            </div>
        </div>

        <div id="influencers-div" class="ui move reveal">
            <div class="visible content">
                <img id="influencers-img" src={male2}class="ui small image" />
            </div>
            <div class="hidden content">
            <img id="influencers-img" src={logo} class="ui small image"/>
            <br />

                <p className="influencer-paragraph">Book appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments testBook appointments test</p>
            </div>
        </div>
  </div>

  )
}

export default Influencers;
