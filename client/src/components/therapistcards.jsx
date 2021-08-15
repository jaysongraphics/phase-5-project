import {useState, useEffect} from 'react'



function TherapistCards({therapist}) {

  return (
    
  <div className="therapist-cards">
          <div id="id-card" className="ui card">
              <div className="image"><img id="img-div"src={therapist.image} alt="image1"/></div>
              <div id="therapits-detail-info" className="content">
                  <div className="titl">{therapist.name}</div>
                  <div className="meta"> {therapist.phone_number}</div>
                  <div className="description">{therapist.speciality}</div>
                  <div className="description">age: {therapist.age}
                  </div>
                  {/* <br />
                  <button className="ui violet button">test</button> */}
            </div>
        </div>
    </div>
  )
}

export default TherapistCards;
