import { JsxElement } from "typescript"
import { ButtonHTMLAttributes } from 'react'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'Old Gold' | 'Apple Green' | 'Rust' | 'Golden Brown'
    content: string|JsxElement
}

const Button = (props: buttonProps) => {

    const mainColor = () => {
        switch(props.color){
            case('Old Gold'):
                return '#C7B742'
            case('Apple Green'):
                return '#90B802'
            case('Rust'):
                return '#A3512A'
            case('Golden Brown'):
                return '#9E6106'
        }
    }

    const styles: Object = {
        margin: '0 0.5em',
        padding: '0.4em 1.4em',
        fontSize: '1.2em',
        fontWeight: '300',
        color: 'white',
        border: 'none',
        borderRadius: '0.3em',
        backgroundColor: mainColor(),
        boxShadow: '0px 0px 7px -5px' + mainColor()
    }

    return (
        <button type={props.type} style={styles}>
            {props.content}
        </button>
    )
}

export default Button