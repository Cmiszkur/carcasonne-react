import githubIcon from '../logosy/github-icon.svg'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom'
import Login from './headerComponents/Login'

const Header = () => {

    return (
            <header>
                <Link className={'headerItem'} title='MainPage' to='/'><span>O projekcie</span></Link> 
                <Link className={'headerItem'} title='AboutMe' to='/about'><span>O Mnie</span></Link> 
                <Login />
                <a className={'headerItem'} title="github" target='_blank' rel="noopener noreferrer" href='https://github.com/Cmiszkur'>
                   <img src={githubIcon} className='github-logo' alt='github-logo' />
                </a>
            </header>
    )    
}

export default Header
    