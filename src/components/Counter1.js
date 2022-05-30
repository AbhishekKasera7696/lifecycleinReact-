import React, { useEffect } from 'react'

const Counter1 = ({number}) => {


    useEffect(()=>{
        console.log("functional Component: updating..")

        return() => {
             console.log("functional component:removed")
        }
    },[number])

  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

export default Counter1
