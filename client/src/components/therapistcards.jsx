import {useState, useEffect} from 'react'


function TherapistCards({therapist, handleAppoinment, reviews, currentUser}) {

  console.log(therapist);
  console.log(reviews);

  const [review, setReview] = useState ("")

     
  function addReview(newReview) {
    let reviewArray = [...reviews, newReview]
    setReview(reviewArray)
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
          .then((newreview) => console.log(newreview))
   }

  return (
  <div className="therapist-cards">
          <div id="id-card" className="ui card">
          <button onClick={() => handleAppoinment(therapist.id)}className="button is-danger is-rounded">Make an appointment</button>
              <div className="image"><img id="img-div"src={therapist.image} alt="image1"/></div>
              <div id="therapits-detail-info" className="content">
                  <div className="titl">{therapist.name}</div>
                  <div className="meta">Phone number: {therapist.phone_number}</div>
                  <div className="description">Specificity: {therapist.speciality}</div>
                  <div className="description">Age: {therapist.age}
                  </div>  
                  <hr />
            <div className="header">Reviews
            </div>
            <div className="meta">
              <br />
              {reviews}
              <br />
                <form onSubmit={handleSubmit} class="ui form">
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
