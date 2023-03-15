import React from 'react'

const Checkbox = ({onCheck, task}) => {
  return (
    <div className='checkbox'><input id={task.id} type="checkbox" defaultChecked= {false} checked={task.checked} onClick={() => onCheck(task.id)}/>
    <label for={task.id} ></label></div>
  )
}

export default Checkbox