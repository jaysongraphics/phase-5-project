
function Profile({currentUser, setdarkMode, darkmode }) {

console.log(currentUser);
// console.log(currentUser.appointments.map(app => {
//    return (app.appointment_time.slice(7))}))

const app = currentUser.appointments.map(app => {
  return ({time: app.appointment_time.slice(7), date: app.appointment_date, location: app.location})})

function handleltweet(e) {
  e.preventDefault();
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

            <form onsubmit={handleltweet}id="input-div"className="tweets-div">
              <h6>What's on your mind?</h6>
                <div id="textbox-profile" className="ui input">
                     <input type="text" placeholder="What's on your mind?"/>
                  </div>
              </form>
            }
    
        {currentUser ? 
          <div id={darkmode ? "profile-detail-blk-white" : "profile-detail"}>
              <div className="userOnline" >
              {/* <img id="userOnline-img" class="ui medium circular image" src={currentUser.image} /> */}
              <img id="userOnline-img"className="ui avatar image" style={{width: 200, height: 200}}src={currentUser.image} />
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
