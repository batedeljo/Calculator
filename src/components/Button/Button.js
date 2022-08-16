import React from 'react'
import './button.css'


function Button({onclickHandler, text, btnStyle, data = null}) {
    
  return (
    <button className={`btn ${btnStyle}`} onClick={()=>{
        if(data !== null){
            onclickHandler(data)
        }else {onclickHandler()}
    }}>{text}</button>
  )
}

export default Button