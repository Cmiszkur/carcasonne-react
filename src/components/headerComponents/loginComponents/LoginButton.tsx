import { Link } from 'react-router-dom'
import {ReactComponent as Arrow} from '../../../SVGs/arrow.svg'
import { useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'

const LoginButton = () => {

    const [loginButtonClicked, setLoginButtonClicked] = useState(false)
    const styleClicked = { transform: 'rotate(180deg)' }
    const styleNotClicked = { transform: 'rotate(0deg)' }
    const username = useSelector((state: RootState) => state.user.username)

    if( username !== null && username !== undefined  ) {
        return <div className={'LoginButton'} onClick={() => setLoginButtonClicked(!loginButtonClicked)}>
                <button className={'headerItem'} id={'login'} title='username'>
                    <span>{username}</span>
                    <Arrow style={loginButtonClicked ? styleClicked : styleNotClicked}/>
                </button>
                <div className={'outline'}></div>
        </div>
    } else {
        return <Link className={'headerItem'} title='Login' to='/login'>Zaloguj się</Link>
    }
}

export default LoginButton