import React, { useState } from 'react'
import data from "../../component/dummydata.json"
const usercontext = React.createContext()

function UserContext(props) {

  const [questionNo,setquestionNO] = useState(0);
  const [winprice, setWinprice] = useState(0)
  const [gameover, setGameover] = useState(false)


  return (
    <usercontext.Provider value={{questionNo,setquestionNO,winprice,setWinprice,gameover,setGameover,data}}>
      {props.children}
    </usercontext.Provider>
  )
}

export {UserContext,usercontext}
