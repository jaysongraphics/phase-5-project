import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';


function Therapist({currentUser}) {
const therapistsUrl = 'http://localhost:3000/therapists'
const [therapists, setTherapists] = useState ([])

    useEffect(() =>{
        fetch(therapistsUrl)
            .then((res) => res.json())
            .then((data) => setTherapists(data))
      }, [])

      function handleAppoinment(therapist_id){
        let addAppoinment = {
            "user_id": currentUser.id,
            "therapist_id": therapist_id,
        }
        fetch(`http://localhost:3000/appointments`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(addAppoinment)
        }) 
            .then(res => res.json())
            .then(console.log(addAppoinment))
  }
   
    const therapistsCards = therapists.map(therapist => 
        <TherapistCards 
        currentUser={currentUser}
        handleAppoinment={handleAppoinment}
        key={therapist.id}
        therapist={therapist}
        therapistReview={therapist.reviews}
    />)

    return (
        <div>
            <h1>Therapist</h1>
            {therapistsCards}
        </div>
    )
}


export default Therapist;
