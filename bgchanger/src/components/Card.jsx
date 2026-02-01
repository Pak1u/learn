import React from 'react'

const bgMap = {
    Red:"bg-red-500",
    Green:"bg-green-500",
    Blue:"bg-blue-500",

  };
  
function Card(props) {
    return(
        <div className={`${bgMap[props.color]} w-screen h-screen`}>
            BG Changer
        </div>

    )
}

export default Card