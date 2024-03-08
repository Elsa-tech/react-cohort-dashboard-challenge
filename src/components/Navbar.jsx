import '../styling/components/Navbar.css'
import homeIcon from '../assets/logo/home-icon.svg'
import profileIcon from '../assets/logo/profile-icon.svg'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <nav className='nav-container'>
            <div className="nav-item">
                <Link to={'/'}>
                <img src={homeIcon}/>
                </Link>
            </div>
            <div className="nav-item">
                <Link to={'/profile'}>
                <img src={profileIcon}/>
                </Link>
            </div>
        </nav>
    )
}