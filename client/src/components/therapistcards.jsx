import {useState, useEffect} from 'react'


function TherapistCards({therapist, handleAppoinment,currentUser, therapistReview}) {
  const [review, setReview] = useState ("")
  const [addReview, setAddReview] = useState (therapistReview)

  console.log(therapist);
  // console.log(therapistReview);


  funtion addReviewProfile(){

  }
  
 const therapistApps = therapist.appointments.map(item =>
  <>
  <br/>
    <div>

  {`${item.location} 
    ${item.appointment_date} 
    ${item.appointment_time}`}
    <i style={{cursor: 'pointer'}} onClick={()=>addReviewProfile(review.id)}>📩</i>
    </div>
  </>)

  function deleteReview(id){
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {console.log(data)})
      filteredReview(id);
    }

const filteredReview = (id) => {
          const deletedReviews = addReview.filter(item => item.id !== id)
   setAddReview(deletedReviews)
}

  function handleSubmit (e) {
      e.preventDefault();

      fetch("http://localhost:3000/reviews", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "review": review,
            "therapist_id": therapist.id,
            "user_id": currentUser.id,
          }),
        })
          .then((res) => res.json())
          .then((newreview) => setAddReview([...addReview, newreview]))
   }

  return (
  <div className="therapist-cards">
          <div id="id-card" className="ui card">
              <div className="image"><img id="img-div"src={therapist.image} alt="image1"/></div>
              <div id="therapits-detail-info" className="content">
                  <div className="titl">{therapist.name}</div>
                  <div className="meta">Phone number: {therapist.phone_number}</div>
                  <div className="description">Specificity: {therapist.speciality}</div>
                  <div className="description">Age: {therapist.age}
                  </div>  
                  <hr />
                  <div className="header">Available Appointments
                  <br />
                  
                  </div>
                    {therapistApps} 
                  <br />
            <div className="header">Reviews
            </div>
            <div className="meta">
              <br />
              {addReview.map(review => <div>{review.review}
                <i style={{cursor: 'pointer'}} onClick={()=>deleteReview(review.id)}>✖️</i></div>)}
              <br />
                <form onSubmit={handleSubmit} className="ui form">
                    <input type="text" 
                    value={review} 
                    placeholder="How did I do?" onChange={(e) => setReview(e.target.value)}/>
                      <button className='button is-danger is-rounded'>Submit</button>
                  </form>
                  <br />
                </div>                 
            </div>
        </div>
    </div>
  )
}

export default TherapistCards;
