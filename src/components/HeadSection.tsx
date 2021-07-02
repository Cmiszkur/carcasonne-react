import { FC } from 'react'
import closingTagIcon from '../SVGs/mainPageSVGs/closingTag.svg'
import curlyBracesIcon from '../SVGs/mainPageSVGs/curlyBraces.svg'
import {Link} from 'react-router-dom'
import { useSpring, a } from 'react-spring'

const HeadSection: FC = (): JSX.Element => {

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 400}
    })

    return(
        <a.div style={styles} className = {'headSectionWrapper'}>

            <div className='text'>

                <h1>Mój najlepszy projekt do portfolio</h1>
                <p>Ten projekt jest podejściem do zrobienia webowej wersji gry Carcasonne z wykorzystaniem serwera opartego na Express.js oraz Socket.io</p>

                    <div className={'SVGWrapper'}>

                        <div id={'curlyBracesIconWrapper'}>
                            <img src = {curlyBracesIcon} className = {'mainWrapperSVG'} id = {'curlyBracesIcon'} alt = ''/>
                        </div>
                                
                        <div id={'closingTagIconWrapper'}>
                            <img src = {closingTagIcon} className = {'mainWrapperSVG'} id = {'closingTagIcon'} alt = ''/>
                        </div>
                                
                    </div>
                    
            </div>
                    
            <div className = 'buttons'>

                <Link to='/register'>
                    <button id = 'register'>Zarejestruj się</button>
                </Link>
                <button id = 'playAsGuest'>Zagraj jako gość</button>

            </div>

        </a.div>
    )

    

}

export default HeadSection