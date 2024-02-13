import React from 'react'
import QuesAns from './QuesAns'

export default function Main(props) {
  return (
    <div>
      <QuesAns setquestionNO={props.setquestionNO} questionNo={props.questionNo} data={props.data} setGameover={props.setGameover}/>
    </div>
  )
}
