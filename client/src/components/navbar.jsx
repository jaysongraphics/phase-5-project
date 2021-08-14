import logo from '../images/LOGOGFINALBLACK.png'
import {useHistory, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function NavBar({currentUser, setCurrentUser, setdarkMode, darkmode}) {

console.log(currentUser);

const history = useHistory();

    function logOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
        history.push('/signin')
    }

    function darkModeToggle(){
        setdarkMode(!darkmode)
    }
    // console.log(darkmode);

    return (
        <div>
            <nav>
            <Link to='/'>
                <div className="logo">
                  <img className ="logo-image" src={logo}/>
                    {/* <h2 className="logo-text">Selflax</h2> */}
                </div>

            </Link>
            {currentUser ?     
            <div className="current-user">
                 <img className="ui avatar image" src={currentUser.image} />
                 <p>Hi, {currentUser.username}!</p>
             </div> : null }
                {currentUser ? (
            <>
                {/* <ul className="navnav"> */}

                    <Link to='/'> 
                        <li>Home</li>
                    </Link>

                    <Link to='/profile'>
                        <li>Profile</li>
                    </Link>

                    <Link to='/therapists'>
                        <li>Therapists</li>
                    </Link>

                    <Link to="/">
                    <button onClick={logOut} id="nav-button" className='button is-danger is-rounded'>Sign Out
                    </button>
                    </Link> 
                {/* </ul>    */}

                <div onClick={darkModeToggle} className="ui toggle checkbox">
                <input type="checkbox" name="public"></input>
                <label>🌙</label>
                </div>
            </>
            ):(
             <>
                {/* <ul className="navnav"> */}
                {/* <i className="500px icon"></i> */}
                {/* <i class="circle icon"></i> */}
                <Link to='/'> 
                    <li>Home</li>
                 </Link>
                {/* </ul> */}

                    <div className="nav-buttons">
                    <Link to='/signin'>
                        <button id="nav-button"className='button is-danger is-rounded'>Sign In</button>
                    </Link>

                    <Link to='/signup'>
                        <button id="nav-button"className='button is-danger is-rounded'>Sign Up</button>
                    </Link> 
                </div>
        </>)}
        </nav>
    </div>

  )
}




export default NavBar;
