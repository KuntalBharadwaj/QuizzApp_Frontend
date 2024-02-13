import React from 'react'
import {usercontext} from '../context/userContext/UserContext'
import { useContext } from 'react'


function Winner(props) {

  const {count} = useContext(usercontext)
  const {winprice} = useContext(usercontext)
  const {questionNo} = useContext(usercontext)

  return (
    <div className='winnercontainer'>
      <div className='winner'>
        <h1>You correct {questionNo} answers</h1>
        <h1>You win {winprice} rupees</h1>
      </div>
    </div>
  )
}

export default Winner
