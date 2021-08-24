import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';
import Loading from './loading';

function Therapist({currentUser}) {
const [therapists, setTherapists] = useState ([])
const [search, setSearch] = useState("")


// useEffect(() => {
// }, [therapistsCards])

    useEffect(() =>{
        const token = localStorage.getItem('token'); 
        fetch('http://localhost:3000/therapists', {
         headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(data =>
        //   setTimeout(() =>{setTherapists(data)}, 200)
           setTherapists(data)
        )
        
}, [])

if(!therapists) {
    return <Loading />
}

const filteredTherapist = therapists.filter(
    filteredCard => filteredCard.name.toLowerCase().includes(search.toLowerCase())
    ||
    filteredCard.speciality.toLowerCase().includes(search.toLowerCase())
    )
    
    const therapistsCards = filteredTherapist.map(therapist => 
        <TherapistCards 
        key={therapist.id}
        setSearch={setSearch}
        search={search}
        currentUser={currentUser}
        therapist={therapist}
        therapistReview={therapist.reviews}
        />)
  
    return (
        <div className="alltherapist-div">      
            <h1>Our therapists</h1>

            <input id="therasearch"className="input is-danger"onChange={(e) => 
                setSearch(e.target.value)} type="text" value={search} placeholder="Search by name or speciality..."/>
            <button className='button is-danger is-outlined'>Search
            </button>

<br />
<br />
            {therapistsCards}
        </div>
 )
}


export default Therapist;
