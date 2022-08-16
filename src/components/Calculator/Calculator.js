import React, {useState} from 'react'
import Button from '../Button/Button'



function Calculator() {
    const [number, setNumber] = useState([])
    console.log(number)
    const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const Operation = ['+', '-', '*', '/', '=']
    const getNumber = (data) => {
        if(data === '='){
            console.log(sum(calculate()))
        }else{
            let copy = [...number]
            copy.push(data)
            setNumber(copy)
        }
    }
    const calculate = () => {
        let arr = [];
        let num = null;
        for(let i = 0; i < number.length; i++){
            if(typeof number[i] === 'number'){
                if(num){
                    num = num * 10 + number[i];
                }else{
                    num = number[i];
                }
            }else{
                arr.push(num);
                arr.push(number[i]);
                num= null;
            }
            if(i === number.length - 1){
                arr.push(num)
            }

        } return arr;
         
    }
    const sum = (data) => {
        ``
    }
  return (
    <div>
        {Number.map((item, index)=>{
            return <Button key={index} onclickHandler={getNumber} text={item} btnStyle = {'btn-white'} data = {item} />
        })}
        {Operation.map((item, index)=>{
            return <Button key={index} onclickHandler={getNumber} text={item} btnStyle = {'btn-white'} data = {item} />
        })}
    </div>
  )
}

export default Calculator