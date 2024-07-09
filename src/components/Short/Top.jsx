import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Top = ({openToggle}) => {
  return (
    <div className={` max-3nm:mx-[30px] 1nm:pr-[10px] max-1nm:ml-[100px] max-1nm:pr-[40px] max-3nm:pr-0 my-5 flex bg-transparent justify-between items-center ${openToggle ? 'ml-[100px] ':'ml-[260px]'}`}>
    <div className="flex items-center gap-2">
      <div className="w-[30px] h-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          focusable="false"
          className="pointer-events-none block w-full h-full">
          <g>
              <path
                  d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                  fill="red"></path>
              <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff"></polygon>
          </g>
      </svg>
      </div>
      <p className="text-[20px] capitalize font-semibold">shorts</p>
    </div>
    <button>
      <AiOutlineClose className="text-2xl"/>
    </button>
  </div> 
  )
}

export default Top
