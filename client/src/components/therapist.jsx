import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';
import Loading from './loading';

function Therapist({currentUser}) {
const [therapists, setTherapists] = useState ([])

    useEffect(() =>{
        const token = localStorage.getItem('token'); 
        fetch('http://localhost:3000/therapists', {
         headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(data => setTherapists(data))
}, [])

    const therapistsCards = therapists.map(therapist => 
        <TherapistCards 
        currentUser={currentUser}
        key={therapist.id}
        therapist={therapist}
        therapistReview={therapist.reviews}
    />)

      if(!therapistsCards) {
        return <Loading />
    }
      
    return (
        <div className="alltherapist-div">      
            <h1>Our therapists</h1>
            {therapistsCards}
        </div>
 )
}


export default Therapist;
