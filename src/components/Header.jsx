import '../styling/components/Header.css'
import titleHeader from '../assets/logo/title-header.svg'
import { DataContext } from '../App'
import { useContext } from 'react'
import Initials from './Initials'
export default function Header(){

    const { user } = useContext(DataContext)

    return (
        <header className='header-container'>
            <div className='header-logo'>
                <img src={titleHeader} alt='header-logo'/>
            </div>
            <div className='header-profile'>
                <Initials firstname={user.firstName} lastname={user.lastName} favouriteColour={user.favouriteColour} />
            </div>
        </header>
    )
}