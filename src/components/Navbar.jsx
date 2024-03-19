import '../styling/components/Navbar.css'
import homeIcon from '../assets/logo/home-icon.svg'
import profileIcon from '../assets/logo/profile-icon.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
    const location = useLocation()
    const { pathname } = location

    return (
        <nav className='nav-container'>
        <div className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <Link to={'/'}>
                <img src={homeIcon} alt="Home Icon" style={{marginTop: '10px'}} />
                <p>Home</p>
            </Link>
        </div>
        <div className={`nav-item ${pathname === '/profile' ? 'active' : ''}`}>
            <Link to={'/profile'}>
                <img src={profileIcon} alt="Profile Icon" style={{marginTop: '10px'}}/>
                <p>Profile</p>
            </Link>
        </div>
    </nav>
    )
}