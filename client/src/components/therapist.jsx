import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';


function Therapist({therapists, handleAppoinment, currentUser}) {
    // console.log(therapists)
 
    
    const therapistsCards = therapists.map(therapist => 
        <TherapistCards 
        currentUser={currentUser}
        handleAppoinment={handleAppoinment}
        key={therapist.id}
        therapist={therapist}
        reviews={therapist.reviews.map(review =><div>{review.review}</div>
        )}
     />)

    return (
        <div>
            <h1>Therapist</h1>
            {therapistsCards}
        </div>
    )
}




export default Therapist;
