import imageone from '../images/meditating.png'

function Banner() {


    return (
        <div className="whole-banner-div"> 
        <div className="banner-section">
            <div>
            <img className ="bannerimg" src={imageone} alt="meditateimg"/>
            </div>
            <div className="banner-div">
                <p className="banner-title">Breaking Taboo</p>
                <p className="banner-paragraph">Our intention is to educate, share, and encourage open conversations about this topic. We believe that in order to solve a problem, we must focus on the root cause. In order to save lives, we must kill the silence. In order to kill the silence we must break the taboo. </p>
            </div>
                <button id="banner-button"className='button is-danger is-rounded'>Sign Up</button>

          {/* <section id="banner-diva"class="hero is-danger">
                    <div class="hero-body">
                     <p className="banner-title">Breaking Taboo</p>
                     <p className="banner-paragraph">Our intention is to educate, share, and encourage open conversations about this topic. We believe that in order to solve a problem, we must focus on the root cause. In order to save lives, we must kill the silence. In order to kill the silence we must break the taboo. </p>
                     <img className ="bannerimg" src={imageone}/>
                    </div>
            </section>  */}

        </div>
    </div>
  )
}




export default Banner;
