import Button from '../components/Button'
import '../stylesheets/register.css'
import { useState, useEffect, useRef, FormEvent } from 'react'
import POST from '../services/POST'
import RegistrationError from '../components/Error'
import { useSpring, a } from 'react-spring'

// interface responseInterface {
//     body: object,
//     errors: {msg: string}[]
// }

function Register() {

    const [password, setPassword] = useState('')
    const [progressBarName, setProgressBarName] = useState('')
    const [progressBarMessage, setProgressBarMessage] = useState('Wpisz swoje hasło...')
    const [errorMessages, setErrorMessages] = useState<Array<{message: string}>>([])
    const form = useRef<any>()
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 400}
    })

    const saveErrors = (res: Array<{message: string}> | void) => {
        const errors = res
        if(!!errors) setErrorMessages(errors)
    }

    const checkPassword = (password: String) => {

        if(
            !!password.match(/[A-Z]/g) &&
            !!password.match(/\W/g) && 
            !!password.match(/\d/g) && 
            password.length > 8
            ) {
                setProgressBarName("PG75")
                setProgressBarMessage('Dobre hasło')
            }
        if(
            password.length > 8 && 
            !!password.match(/[A-Z]/g) === false && 
            !!password.match(/\W/g) === false &&
            !!password.match(/\d/g) === false
        ) {
            setProgressBarName("PG50")
            setProgressBarMessage('Przeciętne hasło')
        }
        if(
            password.length < 8 && 
            !!password.match(/[A-Z]/g) === false && 
            !!password.match(/\W/g) === false &&
            !!password.match(/\d/g) === false &&
            !!password.length !== false
        ) {
            setProgressBarName("PG25")
            setProgressBarMessage('Słabe hasło')
        }
        if(!!password.length === false) {
            setProgressBarName("")
            setProgressBarMessage('Wpisz swoje hasło...')
        }
    }

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if(errorMessages !== []) setErrorMessages([])
       
        const data = new FormData(form.current)
        const plainFormData = Object.fromEntries(data.entries())
	    const formDataJsonString = JSON.stringify(plainFormData)

        POST('http://localhost:3030/register', formDataJsonString).then(res => saveErrors(res))
    }


    useEffect(() => {
        checkPassword(password)
    })

    return (
        <a.div style={styles} className={'mainRegisterWrapper'}>

            <div className={'registerHeader'}>
                <h1>Rejestracja</h1>
            </div>
            <RegistrationError errors = {errorMessages}/>
            <div className={'registerBody'}>
                <form ref={form} method='POST' onSubmit={submitForm}>
                    <label htmlFor='username'>Imię</label>
                    <input type='text' name='username' id='username'></input>

                    <label htmlFor='email'>E-mail</label>
                    <input type='text' name='email' id='email'></input>

                    <label htmlFor='password'>Hasło</label>
                    <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)}></input>
                    <div className={'passwordIndicator'}>
                        <div className={'passswordIndicatorBar'}>
                            <div className={'passswordIndicatorProgressBar ' + progressBarName}></div>
                        </div>
                        <span className={'passwordIndicatorMessage'}>{progressBarMessage}</span>
                    </div>

                    <label htmlFor='retypePassword'>Powtórz hasło</label>
                    <input type='password' id='retypePassword' name='retypedPassword'></input>
                    <Button type='submit' color='Apple Green' content='Zarejestruj się'/>
                </form>
            </div>

        </a.div>
        
    )
}

export default Register