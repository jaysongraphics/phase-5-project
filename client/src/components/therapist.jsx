import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';
import Loading from './loading';

function Therapist({currentUser}) {
const [therapists, setTherapists] = useState ([])
const [search, setSearch] = useState([])

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

    if(!therapists) {
        return <Loading />
    }

    if(!search) {
        return <Loading />
    }

    const therapistsCards = therapists.map(therapist => 
        <TherapistCards 
        key={therapist.id}
        setSearch={setSearch}
        search={search}
        currentUser={currentUser}
        therapist={therapist}
        therapistReview={therapist.reviews}
        />)
 
const filter = therapists.map(therapist => 
 `name: ${therapist.name}, speciality: ${therapist.speciality}`  
)

if(!filter) {
    return <Loading />
}


// const therapistsArray = Object.entries(therapists);
// const filtered = therapistsArray.filter(([key, value]) => typeof value === 1);
// console.log(therapistsArray);
// console.log(filtered);


// let filteredP = therapists.filter(function (currentElement) {
//     return currentElement.speciality === "speciality"
//   });

// console.log(filteredP);


//   const filteredP = (therapistsArray) =>{
//       let array = [];
//       array = therapists.filter(thera => {
//           return thera.name
//       })
//       return array;
//   }
// console.log(filteredP(therapists));


    //     const filteredTherapist = filter.filter(therapist => {
    //     return (therapist.name.toLowerCase().includes(search.toLowerCase()))
    //     ||
    //     (therapist.speciality.toLowerCase().includes(search.toLowerCase()))
    //   })

// const testthera = therapists.map(thera => {console.log(thera.speciality);})

// const testthera = therapists.map(thera => {console.log(thera.filter(thera => { return (thera.name.toLowerCase().includes(search.toLowerCase()))
// }))
// })


// const testthera = therapists.map(thera => 
//     (thera.filter(therapist => {return (therapist.name)})
// ))


// const testthera = therapists.map(thera => {
//     return(thera.speciality);})

// console.log(therapists);
// console.log(testthera);

//         const filteredTherapist = testthera.filter(therapist => {
//         return (therapist.toLowerCase().includes(search))
//       })

    return (
        <div className="alltherapist-div">      
            <h1>Our therapists</h1>
            <input id="therasearch"className="input is-danger"onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Search by name or speciality..."/>
            <button className='button is-danger is-outlined'>Search
            </button>
<br />
<br />
            {therapistsCards}
            {/* {filteredTherapist} */}
            {/* {filteredTherapist} */}
        </div>
 )
}


export default Therapist;
