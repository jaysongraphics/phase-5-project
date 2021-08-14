// import logo from '../images/LOGOGFINALBLACK.png'
import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'


function SignUp({setCurrentUser}) {
    const [newUserImage, setNewUserImage] = useState("")
    const [newUserFirstName, setNewUserFirstName] = useState("")
    const [newUserLastName, setNewUserLastName] = useState("")
    const [newUserBirthday, setNewUserBirthday] = useState('')
    const [newUserUsername, setNewUserUsername] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    const [newUserPassword, setNewUserPassword] = useState('')
    const [time, setTime] = useState('')

    const [signUpErrors, setSignUpErrors] = useState(null)

    // console.log(newUserBirthday);.
    // console.log(time);

    const history = useHistory();

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

fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' 
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
    }
  });
}
// console.log(newUser);
// console.log(newPassword);
// const errorMesgs = signUpErrors.map((error) => 
//     <p>{error}</p>
// )
// console.log(signUpErrors);

    return (
        <div className="signup-signin-div"> 
            <form onSubmit={handleSignUp}id="sign-form" className="box">
                <div className="field">
                  <label id="label-id"className="label">Image</label>
                  <div className="control">
                      <input className="input" type="file" placeholder="Image"
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

                    <Link to='/signin'> 
                   <a id="member-already">Already a member? Sign in!</a>
                </Link> 
        </form>
    </div>

  )
}

{/* fileInput = React.createRef();
                             <label>
                             Upload file:
                             <input type="file" ref={this.fileInput} />
                             </label> */}
export default SignUp;


// <div classNameName="signUp-form">
// <form id="last-name">  

// <div className="field">
//         <label className="label">Image</label>
//         <div className="control has-icons-left has-icons-right">
//             <input className="input" type="text" placeholder="Text input" value="Image"></input>
//         <span className="icon is-small is-left">
//             <i className="fas fa-user"></i>
//             </span> 
//         <span className="icon is-small is-right">
//             <i className="fas fa-check"></i>
//             </span> 
//         </div>
//         <p className="help is-success">This username is available</p>
//     </div>

//     <div className="field">
//         <label className="label">First Name</label>
//         <div className="control has-icons-left has-icons-right">
//             <input className="input" type="text" placeholder="Text input" value="First Name"></input>
//         <span className="icon is-small is-left">
//             <i className="fas fa-user"></i>
//             </span> 
//         <span className="icon is-small is-right">
//             <i className="fas fa-check"></i>
//             </span> 
//         </div>
//         <p className="help is-success">This username is available</p>
//     </div>

// <div className="field">
// <label className="label">Last Name</label>
// <div className="control has-icons-left has-icons-right">
//     <input className="input is-success" type="text" placeholder="Text input" value="Last Name"></input>
//     <span className="icon is-small is-left">
//     <i className="fas fa-user"></i>
//     </span>
//     <span className="icon is-small is-right">
//     <i className="fas fa-check"></i>
//     </span>
// </div>
// <p className="help is-success">This username is available</p>
// </div>

// <div className="field">
// <label className="label">Birthday</label>
// <div className="control has-icons-left has-icons-right">
//     <input className="input is-success" type="text" placeholder="Birthday" value="Birthday"></input>
//     <span className="icon is-small is-left">
//     <i className="fas fa-user"></i>
//     </span>
//     <span className="icon is-small is-right">
//     <i className="fas fa-check"></i>
//     </span>
// </div>
// <p className="help is-success">This username is available</p>
// </div>


// <div className="field">
// <label className="label">Username</label>
// <div className="control has-icons-left has-icons-right">
//     <input className="input is-success" type="text" placeholder="Text input" value="Username"></input>
//     <span className="icon is-small is-left">
//     <i className="fas fa-user"></i>
//     </span>
//     <span className="icon is-small is-right">
//     <i className="fas fa-check"></i>
//     </span>
// </div>
// <p className="help is-success">This username is available</p>
// </div>


// <div className="field">
// <label className="label">Email</label>
// <div className="control has-icons-left has-icons-right">
//     <input className="input is-danger" type="email" placeholder="Email input" value="email@"></input>
//     <span className="icon is-small is-left">
//     <i className="fas fa-envelope"></i>
//     </span>
//     <span className="icon is-small is-right">
//     <i className="fas fa-exclamation-triangle"></i>
//     </span>
// </div>
// <p className="help is-danger">This email is invalid</p>
// </div>

// <div className="field">
// <label className="label">Password</label>
// <div className="control has-icons-left has-icons-right">
//     <input className="input is-danger" type="email" placeholder="Password" value="em"></input>
//     <span className="icon is-small is-left">
//     <i className="fas fa-envelope"></i>
//     </span>
//     <span className="icon is-small is-right">
//     <i className="fas fa-exclamation-triangle"></i>
//     </span>
// </div>
// <p className="help is-danger">This email is invalid</p>
// </div>

// {/* #bio */}
// {/* 
// <div className="field">
// <label className="label">Message</label>
// <div className="control">
// <textarea className="textarea" placeholder="Textarea"></textarea>
// </div>
// </div> */}

// {/* terms and conditions */}
// {/* <div className="field">
// <div className="control">
// <label className="checkbox">
// <input type="checkbox">
// I agree to the <a href="#">terms and conditions</a>
// </label>
// </div>
// </div> */}

//         <div >
//             <div className="control">
//                 <button className="button is-danger is-rounded">Submit</button>
//             </div>
            
//                 <Link to='/'> 
//                     <a id="member-already">Already a member? Sign in!</a>
//                 </Link> 
//         </div> 
// </form>
// </div>



// )
// }