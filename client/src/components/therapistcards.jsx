import {useState, useEffect} from 'react'



function TherapistCards({therapist}) {

  return (
<div class="ui card">
      <div class="content">
        {/* <div class="right floated meta">14h</div> */}
        {/* <img class="ui avatar image"src={therapist.name}/> Elliot */}
        {therapist.name}
      </div>
      <div class="image">
      <img class="image"src={therapist.image}/>
      </div>
      <div class="content">
        <span class="right floated">
          <i class="heart outline like icon"></i>
          17 likes
        </span>
        <i class="comment icon"></i>
        3 comments
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..."/>
        </div>
      </div>
</div>
  // <div className="therapist-cards">
  //       <div id="id-card" className="ui card">
  //           <div className="image"><img id="img-div"src={therapist.image} alt="image1"/></div>
  //           <div className="content">
  //               <div className="header">{therapist.name}</div>
  //               <div className="meta"> {therapist.phone_number}</div>
  //               <div className="description">{therapist.speciality}</div>
  //               <div className="description">age: {therapist.age}
  //               </div>
  //               {/* <br />
  //               <button className="ui violet button">test</button> */}
  //           </div>
  //       </div>
  //   </div>

  )
}

export default TherapistCards;

