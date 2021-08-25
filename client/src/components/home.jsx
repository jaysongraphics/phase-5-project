import Banner from './banner'
import MidBanner from  './midbanner'
import Influencers from  './influencers'
import SiteReviews from "./siteReviews";

function Home() {

    return (
        <>
            <Banner />
                <MidBanner />
                <Influencers />
            <SiteReviews />
        </>
  )
}

export default Home;