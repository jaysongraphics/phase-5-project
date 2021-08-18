// import logo from '../images/LOGOGFINALBLACK.png'
import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'
import swal from 'sweetalert';


function SignUp({currentUser, setCurrentUser}) {
    const [newUserImage, setNewUserImage] = useState("")
    const [newUserFirstName, setNewUserFirstName] = useState("")
    const [newUserLastName, setNewUserLastName] = useState("")
    const [newUserBirthday, setNewUserBirthday] = useState('')
    const [newUserUsername, setNewUserUsername] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    const [newUserPassword, setNewUserPassword] = useState('')
    const [signUpErrors, setSignUpErrors] = useState(null)

    const history = useHistory();

//     function handleSignUp(e){
//     e.preventDefault()
//     const signUpNewUser = {
//         "image": newUserImage,
//         "first_name": newUserFirstName,
//         "last_name": newUserLastName,
//         "birthday": newUserBirthday,
//         "username": newUserUsername,
//         "email": newUserEmail,
//         "password": newUserPassword
// }

// fetch('http://localhost:3000/signup', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' 
//     },
//     body: JSON.stringify(signUpNewUser),
// })
//     .then((res) => res.json())
//     .then((data) => {
//         if(data.errors) {
//         setSignUpErrors(data.errors.map((error) => 
//            <p>{error}</p>));
//     } else {
//         const {user, token} = data;
//         localStorage.setItem("token", token)
//         setCurrentUser(user)
//         history.push('/')
//     }
//   });
// }

//testing
function handleSignUp(e){
  e.preventDefault()
  const signUpNewUser = {
      "image": newUserImage,
      "first_name": newUserFirstName,
      "last_name": newUserLastName,
      "birthday": newUserBirthday,
      "username": newUserUsername,
      "email": newUserEmail,
      "password": newUserPassword
}
const token =localStorage.getItem('token'); 
fetch('http://localhost:3000/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(signUpNewUser),
})
  .then((res) => res.json())
  .then((data) => {
      if(data.errors) {
      setSignUpErrors(data.errors.map((error) => 
         <p>{error}</p>));
  } else {
      const {user, token} = data;
      localStorage.setItem("token", token)
      setCurrentUser(user)
      history.push('/')
      swal(`Welcome ${user.first_name} ${user.last_name}!`, {
        buttons: false,
        timer: 2000,
      });
  }
});
}
    return (
        <div className="signup-div"> 
            <form onSubmit={handleSignUp}id="sign-form" className="box">
                <div className="field">
                  <label id="label-id"className="label">Image</label>
                  <div className="control">
                      <input className="input" 
                      // type="file" 
                      type="text"
                      placeholder="Image Url"
                      onChange={(e) => setNewUserImage(e.target.value)}></input>
                    </div>
                  </div>

                <div className="field">
                  <label id="label-id"className="label">First Name</label>
                  <div className="control">
                      <input className="input" type="text" placeholder="First Name" onChange={(e) => setNewUserFirstName(e.target.value)}></input>
                    </div>
                </div>
                  
                <div className="field">
                  <label id="label-id"className="label">Last Name</label>
                  <div className="control">
                      <input className="input" type="text" placeholder="Last Name" onChange={(e) => setNewUserLastName(e.target.value)}></input>
                    </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">Birthday</label>
                  <div className="control">
                      <input className="input" type="date" placeholder="Birthday" onChange={(e) => setNewUserBirthday(e.target.value)}></input>
                    </div>
                </div>
{/* 
                <div className="field">
                  <label id="label-id"className="label">time</label>
                  <div className="control">
                      <input className="input" type="time" placeholder="Time" onChange={(e) => setTime(e.target.value)}></input>
                    </div>
                </div> */}

                <div className="field">
                  <label id="label-id"className="label">Username</label>
                  <div className="control">
                      <input className="input" type="text" placeholder="Username" onChange={(e) => setNewUserUsername(e.target.value)}></input>
                    </div>
                </div>


                <div className="field">
                  <label id="label-id"className="label">Email</label>
                  <div className="control">
                      <input className="input" type="email" placeholder="Email@" onChange={(e) => setNewUserEmail(e.target.value)}></input>
                    </div>
                </div>

                <div className="field">
                  <label id="label-id"className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" placeholder="********" onChange={(e) => setNewUserPassword(e.target.value)}></input>
                  </div>
                </div>
                <button className="button is-danger is-rounded">Sign up</button>
                <br/>
                <br/>


                {signUpErrors ?
                  <div className="notification is-danger is-light">
                      <button onClick={()=> setSignUpErrors("")}className="delete"></button>
                      {signUpErrors}
                  </div>  : null }

                    <Link id="member-already"to='/signin'> 
                   <a>Already a member? Sign in!</a>
                </Link> 
        </form>
    </div>

  )
}

export default SignUp;
