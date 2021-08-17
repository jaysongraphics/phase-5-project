import {useState} from 'react'
import Modal from './modal'

function TherapistCards({therapist, currentUser, therapistReview}) {
  const [review, setReview] = useState("")
  const [addReview, setAddReview] = useState(therapistReview)
  // const [ate, setAte] = useState (currentUser.appointments)

  // console.log(therapist);
  // console.log(therapist.appointments);
  // console.log(currentUser);
  // console.log(therapist);

//   console.log(therapist.appointments.map(item =>item.appointment_date
//   // {item.appointment_time} 
//   // {item.location}}
// ))

// console.log(therapist.appointments.map(item =>{
//   <div>{`${item.appointment_date} 
//   ${item.appointment_time} 
//   ${item.location}`}
//   </div>})
// )

if(!currentUser) {
  return <div>loading...</div>
}

function bookAppointment (date, time, location) {
  fetch("http://localhost:3000/appointments", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "user_id" : currentUser.id,
        "therapist_id" : therapist.id,
        "appointment_date": date,
        "appointment_time": time,
        "location": location
      }),
  })  .then(res => res.json())
      .then(data => console.log(data))
      // .then(res => {
        // .then((data) => setAte([...ate, data]))
      // localStorage.setItem("user", JSON.stringify({...currentUser, appointments:[...currentUser.appointments, res]}))
  }

//  const therapistApps = therapist.appointments.map(item =>
//   <>
//     <br/>
//       <div>
//       {`${item.location} 
//         ${item.appointment_date} 
//         ${item.appointment_time}`}
//       </div>
//   </>)

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
                      <br/>
                      <br/>
                  </form>

                  <Modal 
                  currentUser={currentUser}
                  bookAppointment={bookAppointment}
                  />

                  <br />
                </div>                 
            </div>

            
        </div>
    </div>
  )
}

export default TherapistCards;
