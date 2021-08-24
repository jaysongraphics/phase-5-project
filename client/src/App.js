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
import Bot from './components/bot'

function App() {
 
  const [currentUser, setCurrentUser] = useState(null)
  const [darkmode, setdarkMode] = useState(false)
  const [authorizeError, setAuthorizeError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token'); 
      if (token){   
        fetch("http://localhost:3000/me",{
          headers: {
          Authorization: `Bearer ${token}`,
          },
      })
      .then(res => res.json())
      .then(user => {
        if(user.errors) {
        setAuthorizeError(user.errors);
      } else {
        setTimeout(() =>{setCurrentUser(user)}, 200)
      }
    })
      }
},[])

// console.log(currentUser);
  return (
    <div className="App">
       
          <NavBar  
            currentUser={currentUser}
            authorizeError={authorizeError}
            setCurrentUser={setCurrentUser}/>

          <Switch>
            <Route exact path='/'>
              <Home 
                currentUser={currentUser}/>
            </Route> 

            <Route path='/profile'>
              <Profile 
                setdarkMode={setdarkMode}
                darkmode={darkmode}
                navpic={setCurrentUser}/>
            </Route>

            <Route path='/Signup'>
              <Signup 
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}/>
            </Route>

            <Route path='/Signin'>
              <SignIn 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}/>
            </Route>

            <Route path ='/Therapists'>
               <Therapist 
                 currentUser={currentUser}/>
            </Route>      

          
        </Switch>
    <Footer />

    <Bot currentUser={currentUser} />
  </div>
 )
}


export default App;
