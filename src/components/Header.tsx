import githubIcon from '../logosy/github-icon.svg'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
            <header>
                <Link className={'headerItem'} title='MainPage' to='/'>O projekcie</Link> 
                <Link className={'headerItem'} title='AboutMe' to='/about'>O Mnie</Link> 
                <Link className={'headerItem'} title='Login' to='/login'>Zaloguj się</Link>
                <a className={'headerItem'} title="github" target='_blank' rel="noopener noreferrer" href='https://github.com/Cmiszkur'>
                   <img src={githubIcon} className='github-logo' alt='github-logo' />
                </a>
            </header>
    )    
}

export default Header
    