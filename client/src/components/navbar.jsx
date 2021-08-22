import logo from '../images/LOGOGFINALBLACK.png'
import {useHistory, Link} from 'react-router-dom'
import swal from 'sweetalert';

function NavBar({currentUser, setCurrentUser}) {

const history = useHistory();

    function logOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
         history.push('/')
            swal(`See you soon${currentUser.first_name} ${currentUser.last_name}!`, {
            buttons: false,
            timer: 2000,
    });
}

    return (
        <div>
            <nav className="navbar-bar">
            <Link to='/'>
                <div className="logo">
                  <img className ="logo-image" alt="logo"src={logo}/>
                </div>
            </Link>

        {currentUser ?     
            <div id="useronluine" className="current-user"> <img 
            className="ui avatar image" 
            alt={currentUser.first_name}
            style={{width: 36, height: 36}}
            src={currentUser.avatar.url}
            />Hi, {currentUser.username}!
                {/* <img 
                className="ui avatar image" 
                alt={currentUser.first_name}
                style={{width: 36, height: 36}}
                src={currentUser.avatar.url}
                /> */}
                {/* <p 
                className="useronluine">Hi, {currentUser.username}!</p> */}
             </div>
              :
         null }

        {currentUser ? (
            <>
                    <Link to='/'> 
                        <a className="a-buttons">Home</a>
                    </Link>

                    <Link to='/therapists'>
                        <a className="a-buttons">Therapists</a>
                    </Link>

                    <Link to='/profile'>
                        <a className="a-buttons">Profile</a>
                    </Link>
                    
                    <Link to="/">
                    <button onClick={logOut} id="nav-button" 
                    className='button is-danger is-rounded'>Sign Out
                    </button>
                    </Link> 
            </>
            ):(
             <>
                    <div className="nav-buttons">
                    <Link to='/signin'>
                        <button id="nav-button-in-out"
                        className='button is-danger is-rounded'>Sign In</button>
                    </Link>

                    <Link to='/signup'>
                        <button id="nav-button-in-out"
                        className='button is-danger is-rounded'>Sign Up</button>
                    </Link> 
                </div>
             </>)}
        </nav>
    </div>
  )
}


export default NavBar;
