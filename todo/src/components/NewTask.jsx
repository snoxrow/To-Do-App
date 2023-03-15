import React from 'react'
import Checkbox from './Checkbox'

const NewTask = ({task}) => {
  return (
    <form className='task-container'>
      <Checkbox task={task} />
      <input id='newTask' type="text" placeholder='Create a new todo...'/>
    </form>
  )
}

export default NewTask