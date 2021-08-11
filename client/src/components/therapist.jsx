import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';


function Therapist({therapists}) {
    console.log(therapists)

    const therapistsCards = therapists.map(therapist => 
        <TherapistCards 
            key={therapist.id}
            therapist={therapist}
        />)

    return (
        <div>
            <h1>Therapist</h1>
            {therapistsCards}
        </div>
    )
}




export default Therapist;
