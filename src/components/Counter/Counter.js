import React from 'react'
import Button from '../Button/Button'

function Counter({handleCountAdd, handleCountMinus, count}) {
  return (
    <div>
        <Button onclickHandler = {handleCountAdd}  text = {'+'} btnStyle = {'btn-blue'}/>
        <Button onclickHandler = {handleCountMinus}  text = {'-'} btnStyle = {'btn-red'}/>
        <div>{count}</div>
    </div>
  )
}

export default Counter