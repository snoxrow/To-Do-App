import React from 'react'

const Header = ({svg}) => {
  return (
    <div className='header'>
      <h1 id='todo'>TO DO</h1>
     <div className="svg">{svg} </div> 
    </div>
  )
}

export default Header