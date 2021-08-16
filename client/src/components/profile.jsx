import {useState} from 'react'


function Profile({currentUser, setCurrentUser, setdarkMode, darkmode }) {
const [tweet, setTweet] = useState ("")
const [addTweet, setAddTweet] = useState (tweet)
let app;

// console.log(addTweet.map(tweet => tweet.tweet))

console.log(tweet);

if(currentUser){
  app = currentUser.appointments.map(app => {
    return ({
      // key: app.name,
      time: app.appointment_time.slice(7), 
      date: app.appointment_date, 
      location: app.location})
    })
}

if(!currentUser) {
  return <div>loading...</div>
}

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


function darkModeToggle(){
  setdarkMode(!darkmode)
}

    return (
        <div className={darkmode ? 'black' : ''}>
          <div onClick={darkModeToggle} id="dark-button" className="ui toggle checkbox">

            <input type="checkbox" name="public"></input>
               <label>🌙</label>
            </div>

            {darkmode ? 
              <div id="input-div"className="tweets-div">
              <h6 className="blk-whitefont">What's on your mind?</h6>
                <div id="textbox-profile" className="ui inverted input">
                     <input type="text" placeholder="What's on your mind?"/>
                  </div>
              </div>
            : 

          <form 
          onSubmit={handleTweet}
          id="input-div"
          className="tweets-div">
              <h6>What's on your mind?</h6>
                <div id="textbox-profile" className="ui input">
                     <input onChange={(e) => setTweet(e.target.value)} type="text" placeholder="What's on your mind?"
                     value={tweet}
                     />
                  </div>
                  {/* <div> 
                    {addTweet.map(tweet => 
                    <div>{tweet.tweet}
                    <i style={{cursor: 'pointer'}} onClick={()=>deletedTweet(tweet.id)}>✖️</i>
                    </div>
                    )}
                  </div> */}
                  
            </form>

            }
        {currentUser ? 
          <div id={darkmode ? "profile-detail-blk-white" : "profile-detail"}>
              <div className="userOnline" >
              {/* <img id="userOnline-img" class="ui medium circular image" src={currentUser.image} /> */}
              <img id="userOnline-img" alt="profpic"className="ui avatar image" style={{width: 200, height: 200}}src={currentUser.image} />
              <br/>
              <br/>
                 <p className={darkmode ? "blk-whitefont" : ''}>First Name: {currentUser.first_name}</p>
                 <p className={darkmode ? "blk-whitefont" : ''}>Last Name: {currentUser.last_name}</p>
                 <p className={darkmode ? "blk-whitefont" : ''}>Email: {currentUser.email}</p>
                 <p className={darkmode ? "blk-whitefont" : ''}>DOB: {currentUser.birthday}</p>
              </div>
              <hr/>
                <div>
                  <h6 className={darkmode ? "blk-whitefont" : ''}>Upcoming Appointments</h6>
                    <div>
                      {app.length >  0  ? 
                      app.map(item => 
                     <div>
                       <br />
                        <div>Location: {item.location}</div>
                         <div>Date: {item.date}</div>
                          <div>Time: {item.time}</div>
                     </div>)
                      :
                      null}
                
                       {/* <div>Date: {appDate}</div>
                       <div>Location: {appLocation}</div> */}
                    </div>
                  </div>
            </div> : null }
      </div>
  )
}


export default Profile;
