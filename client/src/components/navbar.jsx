import logo from '../images/LOGOGFINALBLACK.png'
import {useHistory, Link} from 'react-router-dom'


function NavBar() {


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
            {/* <> */}
            <Link to='/'> 
                <li><a>Home</a></li>
            </Link>

            <Link to='/profile'>
                <li><a>Profile</a></li>
            </Link>

            <Link to='/therapist'>
                <li><a>Find Therapist</a></li>
            </Link>

            {/* </> */}
            </ul>
                <div className="nav-buttons">
                <Link to='/signin'>
                    <button id="nav-button"className='ui violet button'>Sign In</button>
                </Link>
{/* 
                <Link to='/signup'>
                    <button id="nav-button"className='ui violet button'>Sign Up</button>
                </Link> 

            <button id="nav-button" className='ui violet button'>Sign Out</button> */}
                <div> 
                    <div className="current-user">
                        {}
                    </div>
                </div>
                
            </div>
        </nav>
    </div>

  )
}




export default NavBar;
