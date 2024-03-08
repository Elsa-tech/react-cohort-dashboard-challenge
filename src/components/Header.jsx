import '../styling/components/Header.css'
import titleHeader from '../assets/logo/title-header.svg'

export default function Header(){
    return (
        <header className='header-container'>
            <div className='header-logo'>
                <img src={titleHeader} alt='header-logo'/>
            </div>
            <div className='header-profile'>
                E.L
            </div>
        </header>
    )
}