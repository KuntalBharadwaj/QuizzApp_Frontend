import React, { useContext } from 'react'
import Main from './component/main'
import Pyramid from './component/Pyramid'
import "./App.css"
import Winner from './component/winner'
import {usercontext} from './context/userContext/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'

export default function App() {

    // const [question,setquestion] = useState([]);
    const {gameover} = useContext(usercontext)
    
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={(gameover) ? <Winner/> :
            <div className='mx-3 d-flex main'>
                <div className="content">
                
                <Main />
                {/* <Main setquestion={setquestionNO} questionNo={data.question} RightAns={data.correctAnswer} answer={data.answer}/> */}

                {/* {question.forEach(e => {
                    <Main question={e.question.text} />
                })} */}

                </div>
                <div className="pyramid">
                    <Pyramid/>
                </div>
            </div>}/>
        </Routes>
        
            </BrowserRouter>
        </>
    )
}