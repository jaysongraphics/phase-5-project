import logo from '../images/LOGOGFINALBLACK.png'


function NavBar() {


    return (
        <div>
            <nav>
                <div className="logo">
                  <img className ="logo-image" src={logo}/>
                    {/* <h2 className="logo-text">Selflax</h2> */}
                </div>
            <ul className="navnav">
            {/* <i className="500px icon"></i> */}
            {/* <i class="circle icon"></i> */}
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Find Therapist</a></li>
            </ul>
        </nav>
    </div>

  )
}




export default NavBar;
