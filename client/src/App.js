import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bulma/css/bulma.min.css';
import NavBar from './components/navbar'
import Therapist from './components/therapist';
import Banner from './components/banner'
import MidBanner from  './components/midbanner'
import Influencers from  './components/influencers'
import SiteReviews from  './components/sitereviews'
import Footer from './components/footer'
import SignIn from './components/signin'
import Signup from './components/signup'
import Profile from './components/profile'
import Home from './components/home'


function App() {
  const therapistsUrl = 'http://localhost:4000/therapists'
  const [therapists, setTherapists] = useState ([])

  const [currentUser, setCurrentUser] = useState("")
  const [darkmode, setdarkMode] = useState(false)

  console.log(currentUser);

  useEffect(() =>{
  fetch(therapistsUrl)
      .then((res) => res.json())
      .then((data) => setTherapists(data))
}, [])

// local storage
// useEffect(() => {
//   const userId = localStorage.getItem("user_id")
//   fetch(`http://localhost:3000/me?user_id=${userId}`)
//   .then((res) => {
//     if (res.ok) {
//       res.json()
//       .then((newUser => setCurrentUser(newUser)))
//     }
//   })
// },[])

  return (
    <div className="App">
          <NavBar 
          setCurrentUser={setCurrentUser} 
          setdarkMode={setdarkMode}
          darkmode={darkmode}
          />
              <Switch>
                {/* <Banner /> */}

                  {/* <Route exact path='/'>
                    <Home />
                  </Route> */}

                  <Route path='/profile'>
                    <Profile 
                    setCurrentUser={setCurrentUser}/>
                  </Route>

                  <Route path ='/Signup'>
                    <Signup setCurrentUser={setCurrentUser}/>
                  </Route>

                  <Route path ='/Signin'>
                   <SignIn setCurrentUser={setCurrentUser}
                   darkmode={darkmode}
                   />
                  </Route>

                    {/* <Route path ='/Therapists'>
                      <Therapist 
                        therapists={therapists}
                        />
                      </Route> */}
              </Switch>
          <Footer /> 
    </div>
  );
}

export default App;
