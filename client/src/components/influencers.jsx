import logo from '../images/LOGOGFINALBLACK.png'
import female from '../images/female.jpg'
import male2 from '../images/male2.jpg'
import beyonce from '../images/beyonce.jpg'
import rock from '../images/rock.jpg'
import selena from '../images/selena.jpg'
import prince from '../images/prince.jpg'
import princee from '../images/princee.jpg'


function Influencers() {


    return (
    <div className="influencers-section">
         <p className="influencers-title">Influencers</p>
        <div id="influencers-div" className="ui move reveal">
            <div className="visible content">
                <img id="influencers-img" src={female}className="ui small image" style={{width: 250, height: 200}}/>
            </div>
            <div class="hidden content">
            <img id="influencers-img" src={beyonce} className="ui small image" style={{width: 250, height: 200}}/>
            <br />
    
            <p className="influencer-paragraph">Beyoncé <br/>
                "It was beginning to get fuzzy―I couldn't even tell which day or which city I was at. I would sit there at ceremonies and they would give me an award and I was just thinking about the next performance," she told The Sun in 2011. "My mother was very persistent and she kept saying that I had to take care of my mental health."
            </p>
            </div>
        </div>

        <div id="influencers-div" className="ui move reveal">
            <div className="visible content">
                <img id="influencers-img" src={male2}class="ui small image" style={{width: 250, height: 200}}/>
            </div>
            <div className="hidden content">
            <img id="influencers-img" src={rock} className="ui small image" style={{width: 250, height: 200}}/>
            <br />

            <p className="influencer-paragraph">Dwayne Johnson<br/>
            "I found that, with depression, one of the most important things you could realize is that you're not alone," he said in a YouTube video "You're not the first to go through it; you're not going to be the last to go through it. And oftentimes—it happens—you just feel like you're alone. You feel like it's only you. You're in your bubble. And I wish I had someone at that time who could just pull me aside and [say], 'Hey, it's gonna be OK. It'll be OK.' So, I wish I knew that."
            </p>
            </div>
        </div>

        <div id="influencers-div" className="ui move reveal">
            <div className="visible content">
                <img id="influencers-img" src={female}className="ui small image" style={{width: 250, height: 200}}/>
            </div>
            <div className="hidden content">
            <img id="influencers-img"src={selena} className="ui small image" style={{width: 250, height: 200}}/>
            <br />

                <p className="influencer-paragraph">Selena Gomez<br/>
                "I've discovered that anxiety, panic attacks and depression can be side effects of lupus, which can present their own challenges," she told People. "I want to be proactive and focus on maintaining my health and happiness and have decided that the best way forward is to take some time off […] I know I am not alone by sharing this, I hope others will be encouraged to address their own issues."
            </p>
            </div>
        </div>

        <div id="influencers-div" className="ui move reveal">
            <div className="visible content">
                <img id="influencers-img" src={male2}className="ui small image" style={{width: 250, height: 200}} />
            </div>
            <div className="hidden content">
            <img id="influencers-img" src={prince} className="ui small image" style={{width: 250, height: 200}}/>
            <br />

                <p className="influencer-paragraph">Prince Harry<br/>
                "I've spent most of my life saying 'I'm fine,'" Prince Harry said in an interview with The Telegraph journalist Bryony Gordon on her mental health podcast. "I can safely say that losing my mum at the age of 12 and therefore shutting down all of my emotions for the last 20 years has had a quite serious effect on not only my personal life but also my work as well...I have probably been very close to a complete breakdown on numerous occasions."
                </p>
            </div>
        </div>
  </div>

  )
}

export default Influencers;
