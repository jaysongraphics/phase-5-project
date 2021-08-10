import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/navbar'
import Therapist from './components/therapist';
import Banner from './components/banner'
import MidBanner from  './components/midbanner'

function App() {
  const therapistsUrl = 'http://localhost:4000/therapists'
  const [therapists, setTherapists] = useState ([])

  useEffect(() =>{
  fetch(therapistsUrl)
      .then((res) => res.json())
      .then((data) => setTherapists(data))
}, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MidBanner />
      {/* <Therapist 
        therapists={therapists}
        /> */}


    </div>
  );
}

export default App;
