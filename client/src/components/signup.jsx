// import logo from '../images/LOGOGFINALBLACK.png'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function SignUp() {
    const [newUserImage, setNewUserImage] = useState("")
    const [newUserFirstName, setNewUserFirstName] = useState("")
    const [newUserLastName, setNewUserLastName] = useState("")
    const [newUserBirthday, setNewUserBirthday] = useState('')
    const [newUserUsername, setNewUserUsername] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    const [newUserPassword, setNewUserPassword] = useState('')

    const [signUpErrors, setSignUpErrors] = useState([])

    const history = useHistory();

    const imageSubmit=(e) =>{
        setNewUserImage(e.target.value)
    }

    const firstNameSubmit=(e) =>{
        setNewUserFirstName(e.target.value)
    }

    const LastNameSubmit=(e) =>{
        setNewUserLastName(e.target.value)
    }

    const birthdaySubmit=(e) =>{
        setNewUserBirthday(e.target.value)
    }

    const usernameSubmit=(e) =>{
        setNewUserUsername(e.target.value)
    }

    const emailSubmit=(e) =>{
        setNewUserEmail(e.target.value)
    }

    const passwordSubmit=(e) =>{
        setNewUserPassword(e.target.value)
    }


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

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' 
    },
    body: JSON.stringify(signUpNewUser),
})
    .then((res) => res.json())
    .then((data) => {
        if(data.errors) {
        setSignUpErrors(data.errors);
    } else {
        history.push('/signin')
    }
   
  });
}
// console.log(newUser);
// console.log(newPassword);
const errorMes = signUpErrors.map((err) => 
    <p>{err}</p>
)

    return (
        <div>
        </div>

  )
}




export default SignUp;
