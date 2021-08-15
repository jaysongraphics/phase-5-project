import { TextField } from '@material-ui/core';

function Profile({currentUser, setdarkMode, darkmode }) {

console.log(currentUser);
// console.log(currentUser.first_name);
// console.log(currentUser.last_name);
// const [image, first_name, last_name, email, birthday] = currentUser


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

            <div id="input-div"className="tweets-div">
              <h6>What's on your mind?</h6>
                <div id="textbox-profile" className="ui input">
                     <input type="text" placeholder="What's on your mind?"/>
                  </div>
              </div>
            }
                  <div className="tweet-box">
                    <h1>Hello</h1>
                  </div>

        {currentUser ? 
          <div id={darkmode ? "profile-detail-blk-white" : "profile-detail"}>
              <div className="userOnline" >
              {/* <img id="userOnline-img" class="ui medium circular image" src={currentUser.image} /> */}
              <img id="userOnline-img"className="ui avatar image" style={{width: 200, height: 200}}src={currentUser.image} />
              <br/>
              <br/>
                 <p className={darkmode ? "blk-whitefont" : ''}>{currentUser.first_name}</p>
                 <p className={darkmode ? "blk-whitefont" : ''}>{currentUser.last_name}</p>
                 <p className={darkmode ? "blk-whitefont" : ''}>{currentUser.email}</p>
                 <p className={darkmode ? "blk-whitefont" : ''}>{currentUser.birthday}</p>
              </div>
              <hr/>
                <div>
                  <h6 className={darkmode ? "blk-whitefont" : ''}>Upcoming Appointments</h6>
                    <div>
                      
                    </div>

                </div>
            </div> : null }
         
      </div>
  )
}




export default Profile;
