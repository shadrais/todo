import React from 'react'

const Input = () => {
  return (
    <div className='bg-white rounded py-2 px-4 flex justify-center items-center h-12 '>
      <div className='flex flex-row gap-4 align-middle w-full '>
        <input type='checkbox' className='h-6 w-6 rounded-full' />
        <input
          type='text'
          placeholder='Create a new task'
          className='h-6 border-none w-full outline-none'
        />
      </div>
    </div>
  )
}

export default Input
