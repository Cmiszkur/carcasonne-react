import Button from '../components/Button'
import { useState, useRef, FormEvent } from 'react'
import '../stylesheets/login.css'
import POST from '../services/POST'
import { useSpring, a } from 'react-spring'
import LoginError from '../components/Error'

function Login() {

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

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if(errorMessages !== []) setErrorMessages([])
       
        const data = new FormData(form.current)
        const plainFormData = Object.fromEntries(data.entries())
	    const formDataJsonString = JSON.stringify(plainFormData)

        POST('http://localhost:3030/login', formDataJsonString).then(err => saveErrors([err]))
    }

    return (
        <a.div style={styles} className={'mainLoginWrapper'}>

            <div className={'loginHeader'}>
                <h1>Login</h1>
            </div>
            <LoginError errors = {errorMessages}/>
            {/* <RegistrationError errors = {errorMessages}/> */}
            <div className={'loginBody'}>
                <form ref={form} method='POST' onSubmit={submitForm}>
                    <label htmlFor='username'>Nazwa użytkownika</label>
                    <input type='text' name='username' id='username'></input>

                    <label htmlFor='password'>Hasło</label>
                    <input type='password' id='password' name='password'></input>
                    <Button type='submit' color='Apple Green' content='Zaloguj się'/>
                </form>
            </div>

        </a.div>
        
    )
}

export default Login