import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../context/userContext/UserContext'
import './component.css'

export default function QuesAns() {

  const {questionNo} = useContext(usercontext)
  const {setquestionNO} = useContext(usercontext)
  const {setGameover} = useContext(usercontext)
  const {data} = useContext(usercontext)

  const [timer, setTimer] = useState(15)
  const [isclear,setIsclear] = useState(false)
  const [intervalFunc, setIntervalFunc] = useState(null)



const timerFunc = ()=>{

  setIntervalFunc(setInterval(() => {
    setTimer((pretimer)=> pretimer - 1)
  }, 1000))

  if(isclear) clearInterval(intervalFunc)
}



if(timer === 0 ) {
  setTimer(54)
  clearInterval(intervalFunc);
  setGameover(true)
}

useEffect(()=>{
  timerFunc()
},[questionNo])
  
const handleclick = (e)=> {
  // if(questionNo === 8) {
  //   setGameover(true)
  //   clearInterval(intervalFunc);
  // }
  
  if(data[questionNo].correctAnswer === e.target.innerText) {

    e.target.classList.add('correct')
    
    setTimeout(() => {
      if(questionNo === 7) {
        setGameover(true)
        clearInterval(intervalFunc);
      }
      else {
      setquestionNO((prequestionNo)=> prequestionNo + 1)
      setTimer(15)
      setIsclear(true)
      }
      
    }, 2500);
  }

  else {
    e.target.classList.add('wrong')
    setTimeout(() => {
      if(questionNo === 7) {
        setGameover(true)
        clearInterval(intervalFunc);
      }
      setTimer(15)
      setGameover(true)
    },2500)
    clearInterval(intervalFunc);
  }

}

  return (
    <div className='quesans'>
      <div className='timer'>{timer}</div>

      <div className='Question'>{data[questionNo].question}</div>

        <div className='Answer'>

        {data[questionNo].Answer.map(e=>{
          return <div key = {e} className='Answer-item' onClick={handleclick}>{e}</div>
        })}

        </div>

    </div>
  )
}
