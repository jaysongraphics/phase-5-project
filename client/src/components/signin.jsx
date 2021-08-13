import {useHistory, Link} from 'react-router-dom'
import React, { useState } from 'react';


function SignIn({setCurrentUser, darkmode}) {
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
        if(data.signInErrors) {
          setSignInErrors(data.signInErrors);
    } else {
      setCurrentUser(data)
        history.push('/')
    }
  });
}

console.log(darkmode);
    return (
      <div className="signup-signin-div"> 
            <form onSubmit={handleSignIn}id="sign-form"className=
              {darkmode ? 'box' : 'black'}> 
            {/* black as className, box */}
              
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
                <Link to='/signup'> 
                   <a id="member-already">Don't have an account? Sign up!</a>
                </Link> 

        </form>
    </div>
  )
}




export default SignIn;
