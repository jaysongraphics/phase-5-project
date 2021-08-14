
function Profile({currentUser, setdarkMode, darkmode }) {

console.log(currentUser);

function darkModeToggle(){
  setdarkMode(!darkmode)
}

    return (
        <div className={darkmode ? 'black' : ''}>
          <div onClick={darkModeToggle} id="dark-button" className="ui toggle checkbox">

            <input type="checkbox" name="public"></input>
            <label>🌙</label>
          </div>

          <div id="profile-detail">
            <p>Hello World!</p>
          </div>
    </div>
  )
}




export default Profile;
