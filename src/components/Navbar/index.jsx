import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
  return (
    <div>
      <div className="text-top bg-image">
        <Link to={'/'} className='text-dark'>
          Rick &amp; Monty Assessment
        </Link>
      </div>

      <div className="navbar-nav ">
        <nav className="navbar navbar-expand bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* nav links for characters */}
                <NavLink className='nav-link' to={'/'} activeclassname={'active'} >
                  Characters
                </NavLink>
                {/* nav links for the episodes */}
                <NavLink className='nav-link' to={'/episodes'}>
                  Episodes
                </NavLink>
                {/* nav links for the location */}
                <NavLink className='nav-link' to={'/location'}>
                  Location
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div >
  )
}

export default NavBar
