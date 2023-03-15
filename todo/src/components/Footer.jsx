import React from 'react'

const Footer = ({count, onClear, task, showAll}) => {
  return (
    <div className='footer'>
      <div className="count">{count} items left</div>
      <div className="filters">
        <div tabIndex={1} onClick={showAll} className="all hover">All</div>
        <div tabIndex={2}  className="active hover">Active</div>
        <div tabIndex={3}  className="completed hover">Completed</div>
      </div>
      <div className="clear hover" onClick={()=> onClear(task.checked)}>Clear Completed</div>
    </div>
  )
}

export default Footer