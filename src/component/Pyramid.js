import React, { useContext, useEffect } from 'react'
import './component.css'
import { usercontext } from '../context/userContext/UserContext';
// import { useState } from 'react'

export default function Pyramid() {

const {questionNo} = useContext(usercontext);
const {setWinprice} = useContext(usercontext);

  const pyramidContent = [
    { priceNumber: 1, priceAmount: "₹10,000"},
    { priceNumber: 2, priceAmount: "₹20,000"},
    { priceNumber: 3, priceAmount: "₹1,00,000"},
    { priceNumber: 4, priceAmount: "₹3,20,000"},
    { priceNumber: 5, priceAmount: "₹10,25,000"},
    { priceNumber: 6, priceAmount: "₹50,00,000"},
    { priceNumber: 7, priceAmount: "₹1cr"},
    { priceNumber: 8, priceAmount: "₹5cr"}
  ]

  useEffect(()=>{
    if(questionNo === 0) setWinprice(0)
    else setWinprice(pyramidContent[questionNo-1].priceAmount)
  },[questionNo])

  return (
    <>
      {pyramidContent.map((e,i) => {
        return (
          <div className= { questionNo+1 === pyramidContent[7-i].priceNumber ?`pyramid-item active` : `pyramid-item`} key={e.priceNumber}>
            <span className='PN'>{pyramidContent[7-i].priceNumber}</span>
            <span className='PA'>{pyramidContent[7-i].priceAmount}</span>
          </div>

          )
      })}

    </>
  )
}
