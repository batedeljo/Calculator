import React, {useState, useEffect} from 'react'
import Button from './components/Button/Button'
import Calculator from './components/Calculator/Calculator'
import Counter from './components/Counter/Counter'


function App() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(1)
    const handleCountMulti = () => {
        setCount1(count1*2)
    }
    const handleCountDivide = () => {
        setCount1(count1/2)
    }
    const handleCountAdd = () => {
        setCount(count+1)
    }
    const handleCountMinus = () => {
        setCount(count-1)
    }
    useEffect(()=>{
        if(count % 2 === 0) {
            handleCountMulti()
        }
    },[count])
  return (
    <div>
        <Counter handleCountAdd={handleCountAdd} handleCountMinus={handleCountMinus} count={count}/>
        <Counter handleCountAdd={handleCountMulti} handleCountMinus={handleCountDivide} count={count1}/>
        <Calculator/>
    </div>

  )
}

export default App