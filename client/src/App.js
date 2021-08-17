// import {useHistory} from 'react-router-dom';
// import Banner from './components/banner'
// import MidBanner from  './components/midbanner'
// import Influencers from  './components/influencers'
// import SiteReviews from  './components/sitereviews'
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import {Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import Therapist from './components/therapist';
import Footer from './components/footer'
import SignIn from './components/signin'
import Signup from './components/signup'
import Profile from './components/profile'
import Home from './components/home'

// loading
//<progress class="progress is-danger" max="100">30%</progress>

function App() {
 
  const [currentUser, setCurrentUser] = useState(null)
  const [darkmode, setdarkMode] = useState(false)

  // console.log(currentUser);

  // useEffect(() =>{
  //   fetch(therapistsUrl)
  //       .then((res) => res.json())
  //       .then((data) => setTherapists(data))
  // }, [])


  useEffect(() => {
    const token = localStorage.getItem('token'); 
    fetch("http://localhost:3000/me",{
      headers: {
       Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
    })
  },[])

  // useEffect(() => {
  //   const onlineUser = localStorage.getItem("user")
  //       if(onlineUser){
  //       setCurrentUser(JSON.parse(onlineUser))}
  // },[])

  console.log(currentUser);
  // console.log(currentUser.email);

  return (
    <div className="App">
          <NavBar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser} 
          setdarkMode={setdarkMode}
          darkmode={darkmode}
          />
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route> 

                  <Route path='/profile'>
                    <Profile 
                     setdarkMode={setdarkMode}
                     darkmode={darkmode}
                     currentUser={currentUser}
                     setCurrentUser={setCurrentUser}
                     />
                  </Route>

                  <Route path='/Signup'>
                    <Signup 
                    setCurrentUser={setCurrentUser}/>
                  </Route>

                  <Route path='/Signin'>
                   <SignIn 
                   currentUser={currentUser}
                   setCurrentUser={setCurrentUser}
                   darkmode={darkmode}
                   />
                  </Route>
                    <Route path ='/Therapists'>
                      <Therapist 
                      currentUser={currentUser}
                        />
                      </Route> 
              </Switch>
          <Footer /> 
    </div>
  );
}

export default App;
