import image from '../images/doggie.gif'

function MidBanner() {


    return (
        <div>
            <div>
            <img className ="mid-bannerimg" src={image}/>
            </div>
            <div className="mid-banner-div">
                <p className="mid-banner-title"> Taboo</p>
                <p className="mid-banner-paragraph">Our intention</p>
            </div>
                <button id="mid-banner-button"className="ui violet button">test</button>
         </div>

  )
}



export default MidBanner;
