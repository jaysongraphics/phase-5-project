import logo from '../images/LOGOGFINALBLACK.png'
import {useHistory, Link} from 'react-router-dom'


function NavBar({currentUser, setCurrentUser, setdarkMode, darkmode}) {

console.log(currentUser);

const history = useHistory();

    function logOut(){
        setCurrentUser("")
        history.push('/signin')
    }
 
    function darkModeToggle(){
        setdarkMode(!darkmode)
    }
    // console.log(darkmode);

    // const onlineUser = currentUser.user.map(user => {
    //     return(user.image)
    // })

    // currentUser.user.map(user => user.image)

    return (
        <div>
            <nav>
            <Link to='/'>
                <div className="logo">
                  <img className ="logo-image" src={logo}/>
                    {/* <h2 className="logo-text">Selflax</h2> */}
                </div>
            </Link>

            <ul className="navnav">
            {/* <i className="500px icon"></i> */}
            {/* <i class="circle icon"></i> */}
            <div> 
                    <div className="current-user">
                        {currentUser.username}
                    </div>
                </div> 
                
            <Link to='/'> 
                <li><a>Home</a></li>
            </Link>

            <Link to='/profile'>
                <li><a>Profile</a></li>
            </Link>

            <Link to='/therapists'>
                <li><a>Therapists</a></li>
            </Link>

            {/* </> */}
            </ul>
                <div className="nav-buttons">
                <Link to='/signin'>
                    <button id="nav-button"className='button is-danger is-rounded'>Sign In</button>
                </Link>

                <Link to='/signup'>
                    <button id="nav-button"className='button is-danger is-rounded'>Sign Up</button>
                </Link> 

            <Link onClick={logOut} id="nav-button" className='button is-danger is-rounded'>Sign Out</Link> 
                
            <div onClick={darkModeToggle}class="ui toggle checkbox">
              <input type="checkbox" name="public"></input>
              <label>🌙</label>
            </div>

            </div>
        </nav>
    </div>

  )
}




export default NavBar;
