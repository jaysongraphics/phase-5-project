import {useState, useEffect} from 'react'
import Profilemodal from './profilemodal'
import swal from 'sweetalert';

function Profile({currentUser, setCurrentUser, setdarkMode, darkmode, bookAppointment}) {
  const [tweet, setTweet] = useState ('')
  const [addTweet, setAddTweet] = useState ([])
  let apps;

  console.log(currentUser);
  console.log(apps);

  if(!currentUser) {
    return <div>loading...</div>
  }

  if(currentUser){
    apps = currentUser.appointments
  }


//   if(currentUser){
//   app = currentUser.appointments.map(app => {
//     return ({
//       id: app.id,
//       time: app.appointment_time, 
//       date: app.appointment_date, 
//       location: app.location})
//   })
// }

function submitProfileUpdate(image, firstName, lastName, birthday, username, email) { 
  const profile ={
    'image': image,
    'first_name':  firstName,
    'last_name':  lastName,
    'birthday':   birthday,
    'username': username,
    'email':  email
  }
  const token = localStorage.getItem('token'); 
    fetch("http://localhost:3000/me", {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
      },
        body: JSON.stringify(profile),
    })
        .then(res => res.json())
        .then(user => {console.log(user);
          setCurrentUser(user)

          swal('Profile updated!',{
            icon: "info",
          });

 });
}

// useEffect(() =>{
//   fetch('http://localhost:3000/tweets')
//       .then((res) => res.json())
//       .then(data => {
//         setAddTweet(data)
//         const onlineUser = localStorage.getItem("user")
//         if(onlineUser){
//         setCurrentUser(JSON.parse(onlineUser))
//       }})
// }, [])

function handleTweet(e) { 
  e.preventDefault();
    fetch("http://localhost:3000/tweets", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "tweet":  tweet,
          "user_id": currentUser.id,
        }),
      })
        .then((res) => res.json())
        .then((newtweet) => setAddTweet([...addTweet, newtweet]))
 }
 
 function deletedTweet(id){
  fetch(`http://localhost:3000/tweets/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => {console.log(data)})
      filteredTweets(id);
  }
 
  const filteredTweets = (id) => {
    const deletedTweets = addTweet.filter(item => item.id !== id)
    setAddTweet(deletedTweets)
  }


  function deleteApp(id){
    fetch(`http://localhost:3000/appointments/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {console.log(data)})
      //  filteredApp(id);
    }
    // const filteredApp = (id) => {
    //   const deletedApps = appProfile.filter(item => item.id !== id)
    //   setAppProfile(deletedApps)
    // }

function darkModeToggle(){
  setdarkMode(!darkmode)
}

  return (

    <div className="parent">
        <div className="div1"> 
        <div onClick={darkModeToggle} id="dark-button" className="ui toggle checkbox">
              <input type="checkbox" name="public"></input>
                <label>🌙</label>
          </div>

      {currentUser ? 
          <div id={darkmode ? "profile-detail-blk-white" : "profile-detail"}>
                <div className="userOnline" > 
                <img id="userOnline-img" alt="profpic"className="ui avatar image" style={{width: 200, height: 200}}src={currentUser.image} />
                <br/>
                <br className={darkmode ? "blk-whitefont" : ''}/>
                  <p className={darkmode ? "blk-whitefont" : ''}>First Name: {currentUser.first_name}</p>
                  <p className={darkmode ? "blk-whitefont" : ''}>Last Name: {currentUser.last_name}</p>
                  <p className={darkmode ? "blk-whitefont" : ''}>Email: {currentUser.email}</p>
                  <p className={darkmode ? "blk-whitefont" : ''}>DOB: {currentUser.birthday}</p>
                  <Profilemodal
                  currentUser={currentUser} 
                  submitProfileUpdate={submitProfileUpdate}/>
                </div>
            <hr className={darkmode ? "blk-whitefont" : ''}/>
                <div> 
                    <h6 className={darkmode ? "blk-whitefont" : ''}>Upcoming Appointments</h6>
                    <div>
                        {apps.length >  0  ? 
                          apps.map(item => 
                        <div className={darkmode ? "blk-whitefont" : ''}>
                            <br />
                            <div>Location: {item.location}</div>
                            <div>Date: {item.appointment_date}</div>
                          <div>Time: {item.appointment_time}</div>
                          <i style={{cursor: 'pointer'}} 
                          onClick={()=>deleteApp(item.id)}>✖️</i>
                        </div>)
                        :
                        null}
                      </div>  
                </div> 
            </div> : null }   
        </div>


        <div className="div2" id={darkmode ? "div2-dark" : "div2-regular"}> 
          <form 
          onSubmit={handleTweet}
          id="input-div"
          className="tweets-div">
              <h6 className={darkmode ? "blk-whitefont" : ''} >What's on your mind?</h6>
                <div id="textbox-profile" className="ui input">
                     <input onChange={(e) => setTweet(e.target.value)} type="text" placeholder="What's on your mind?"
                     value={tweet}
                     /> 
                  </div>

                 <div> 
                    {addTweet.map(tweet => 
                        <div>
                            <p className={darkmode ? "blk-whitefont" : ''}> 
                          {tweet.tweet} <i style={{cursor: 'pointer'}} onClick={()=>deletedTweet(tweet.id)}>✖️</i>
                          </p>
                    </div>
                        )}
                  </div> 
            </form>     
      </div>  


            <div className="div3" id={darkmode ? "div2-dark" : "div2-regular"}> 
            
            </div>



              <div className="div4" id={darkmode ? "div2-dark" : "div2-regular"}> 
              
              </div>
      </div>

    )
  }


export default Profile;
