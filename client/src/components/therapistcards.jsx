import Modal from './modal'
import swal from 'sweetalert';
import Loading from './loading';
import {useState} from 'react'


function TherapistCards({therapist, currentUser, therapistReview, search, setSearch,}) {
  const [review, setReview] = useState("")
  const [addReview, setAddReview] = useState(therapistReview)
  
  if(!therapist) {
    return <Loading />
}

function bookAppointment (date, time, location) {
  const token = localStorage.getItem('token'); 
  fetch("http://localhost:3000/appointments", {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
  },
      body: JSON.stringify({
        "user_id" : currentUser.id,
        "therapist_id" : therapist.id,
        "appointment_date": date,
        "appointment_time": time,
        "location": location
      }),
  })  .then(res => res.json())
      .then(data => console.log(data))
        swal("Booked!", {
          icon: "success",
      });  
}

  function deleteReview(id){
    const token = localStorage.getItem('token'); 
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
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
    const token = localStorage.getItem('token'); 
      e.preventDefault();
      setReview('')
      fetch("http://localhost:3000/reviews", {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
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
          <Modal 
            currentUser={currentUser}
            bookAppointment={bookAppointment}
            />
              <div id="therapits-detail-info" className="content">
                  <div className="titl">{therapist.name}</div>
                  <div className="meta">Phone number: {therapist.phone_number}</div>
                  <div className="description">Specificity: {therapist.speciality}</div>
                  <div className="description">Age: {therapist.age}
              </div> 
                
        <hr />
          <div className="header">Feedback
        <hr />
          </div>
            <div className="meta">
                {addReview.map(review =>
                    <div className="review-feedback">   
                      {review.review} <i style={{cursor: 'pointer'}} 
                      onClick={()=>deleteReview(review.id)}>✖️</i>
                      <hr />
                    </div>
                   )}
                          <br />
                          <br />
                  <form id="card-thera-button" onSubmit={handleSubmit}
                      className="ui form"> 
                        <input type="text" value={review} 
                          placeholder="How did I do?" 
                          onChange={(e) => setReview(e.target.value)}
                        />
                              <br />
                              <br />
                        <button className='button is-danger is-rounded'>
                          Submit
                        </button>
                  </form>

                </div>  
            </div>
        </div>
    </div>
  )
}

export default TherapistCards;
