import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>

        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img  src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#35413f]'>
        <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2019-2022</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#35413f]'>
        <img  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2019-2022</button>
        </div>

        </div>
      
    </div>
  )
}

export default Cards
