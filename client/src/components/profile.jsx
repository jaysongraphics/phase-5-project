import {useState, useEffect} from 'react'
import Profilemodal from './profilemodal'
import swal from 'sweetalert';
import Loading from './loading';
import Chat from './ChatBot';

function Profile({setdarkMode, darkmode}) {
  const [tweet, setTweet] = useState([])
  const [addTweet, setAddTweet] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [deleteAppointmets, setdeleteAppointmets] = useState(false)
  const [deletetweets, setDeletetweets] = useState(false)
  let apps;
  let twets;
  let img;

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
        setAddTweet(user.tweets)
      })
  },[deleteAppointmets, deletetweets])

  if(!currentUser) {
    return <Loading />
  }

  if(currentUser){
    apps = currentUser.appointments
    twets = currentUser.tweets
    img = currentUser.image
  }

  function submitProfileUpdate(image, firstName, lastName, birthday, username, email) { 
    const profile ={
      'image': image,
      'first_name': firstName,
      'last_name': lastName,
      'birthday': birthday,
      'username': username,
      'email': email
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
        .then(user => setCurrentUser(user))
          swal('Profile updated!',{
            icon: "info",
      });
}

 function handleTweet (e) {
  setTweet('')
  e.preventDefault();
  const token = localStorage.getItem('token'); 
  fetch("http://localhost:3000/tweets", {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
  },
      body: JSON.stringify({
        "tweet":  tweet,
        "user_id": currentUser.id,
      }),
  })  .then(res => res.json())
      .then(newtweet => setAddTweet([...addTweet, newtweet])
)}

function deleteTweet(id){
  const token = localStorage.getItem('token'); 
  fetch(`http://localhost:3000/tweets/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
  },             
})
    .then(res => res.json())
    .then(data => setDeletetweets(!deletetweets))
}

  function deleteApp(id){
    const token = localStorage.getItem('token'); 
    fetch(`http://localhost:3000/appointments/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
    },             
  })
      .then(res => res.json())
      .then(data => setdeleteAppointmets(!deleteAppointmets))
  }

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
                    <img id="userOnline-img" alt="profpic"
                    className="ui avatar image" 
                    style={{width: 200, height: 200}}src={currentUser.avatar.url} />
                <br/>

                <div className={darkmode ? "blk-whitefont" : ''}/>
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

              <div >
                 {apps.length >  0  ? 
                     apps.map(ap => 
                  <div className={darkmode ? "blk-whitefont" : ''}>
            <br />

                            <div className="app-divv">
                                Location: {ap.location}<br />
                                Date: {ap.appointment_date}<br />
                                Time: {ap.appointment_time}<br />  
                                <button 
                                    className='button is-danger is-outlined' 
                                    style={{cursor: 'pointer'}} 
                                    onClick={()=>deleteApp(ap.id)}>Cancel appointment
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>

                          </div> 
                              )
                              :
                              null}
                      </div> 
                  </div> 

            </div> : null }   
      </div>

        <div className="div3" id={darkmode ? "div2-dark" : "div2-regular"}> 
         
          <form onSubmit={handleTweet} id="input-div" className="tweets-div">
              <h6 className={darkmode ? "blk-whitefont" : ''} >What's on your mind?</h6>
                
                <div id="textbox-profile" className="ui input">
                  <input onChange={(e) => setTweet(e.target.value)} 
                  type="text" placeholder="What's on your mind?"
                  value={tweet}/>
                  <button className='button is-danger is-outlined'>Send Thought</button>
                </div>

         <div> 
              {addTweet.map(tweet => 
                <div>
                    <div className={darkmode ? "blk-whitefont" : ''}> 
                    <br/>
                    <hr/>
                      <img id="twwpic"src={img} style={{width: 36, height: 36}}/>
                      {tweet.tweet}
                        <i id="profile-x"style={{cursor: 'pointer'}} 
                            onClick={()=>deleteTweet(tweet.id)}>
                              {/* ✖️ */}
                              💢
                              {/* 🗑️ */}
                          </i>
                        </div>
                      </div>
                      )}
                      <hr/>
                </div> 
            </form>  
      </div>  

          <div className="div2" id={darkmode ? "chat-profile-blk" : "chat-profile"}>
            <Chat
            currentUser={currentUser}/>
          </div> 

    </div>
  )
}


export default Profile;