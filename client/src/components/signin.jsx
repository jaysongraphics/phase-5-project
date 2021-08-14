import {useHistory, Link} from 'react-router-dom'
import React, { useState } from 'react';


function SignIn({currentUser, setCurrentUser, darkmode}) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [signInErrors, setSignInErrors] = useState(null)

  const history = useHistory();

  function handleSignIn(e){
    e.preventDefault()
    const signInUser = {
    "username": username,
    "password": password
}

  fetch('http://localhost:3000/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' 
    },
    body: JSON.stringify(signInUser),
})
    .then((res) => res.json())
    .then((data) => {
      if(data.error) {
        setSignInErrors(data.error);
    } else {
      const {user, token} = data;
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setCurrentUser(user)
      history.push('/')
    }
  });
}
console.log(currentUser);

// console.log(darkmode);

    return (
      <div className="signup-signin-div"> 
            <form onSubmit={handleSignIn}id="sign-form"
            className='box'>               
                <div className="field">
                  <label id="label-id"className="label">Username</label>
                  <div className="control">
                      <input className="input" type="text" 
                      value={username}
                      placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                  </div>

                <div className="field">
                  <label id="label-id"className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" 
                    value={password}
                    placeholder="********" onChange={(e) => setPassword(e.target.value)}></input>
                  </div>
                </div>
                <button className="button is-danger is-rounded">Sign in</button>
                <br/>
                <br/>

              {signInErrors ?
              <div className="notification is-danger is-light">
                  <button onClick={()=> setSignInErrors('')}className="delete"></button>
                  {signInErrors}
              </div>  : null }

                <Link to='/signup'> 
                   <a id="member-already">Don't have an account? Sign up!</a>
                </Link> 
        </form>
    </div>
  )
}

export default SignIn;
