import React from 'react'
import UserImg from "../images/firstshow/Vector.svg"


function login() {
  return (
    <div className="cartdiv flex">
      <img src={UserImg} alt="" />
      <p className='font-Montserrat text-semibold text-center text-brandred ml-1'>Login | Register</p>
    </div>
  )
}

export default login
