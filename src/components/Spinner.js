import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flec-col item-center space-y-2'>
      <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold'>Loading....</p>
      {/* css loader generater name ki website */}
    </div>
  )
}

export default Spinner
