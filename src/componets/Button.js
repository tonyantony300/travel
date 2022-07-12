import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

const STYLE = ['btn--primary','btn--outline'];
const SIZE  = ['btn--medium','btn--large'];

export const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {
    

    const checkButtonStyle = STYLE.includes(buttonStyle)? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize)? buttonSize :STYLE[0];

    return(
        <Link to='/sign-up' className='btn--mobile'>
            <Button
             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
             onclick={onClick} 
             type={type}>
                {children}
            </Button>
        </Link>
    )

}