import React from 'react'




export default function corner({className,bgColor}) {

  return (
    <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                  fill={bgColor}
                ></path>
    </svg>
  )
}
