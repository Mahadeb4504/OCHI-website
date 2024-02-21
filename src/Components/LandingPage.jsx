import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import cart from '../images/cart.jpg'

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section date-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
            return (
               <div className='masker'>
            <div className='w-fit flex items-end overflow-hidden'>
             {index=== 1 && 
             (<motion.div initial={{width: 0}} 
              animate={{width:"8vw"}}
             transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
             className='mr-[1vw] w-[8vw] h-[5.7vw] relative top-[.5vw] bg-green-500'> 
             <img className='w-[8vw] h-[5.7vw]' src={cart} alt=''/>
             </motion.div>) }  
            <h1 className='flex items-center uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold'>{item}</h1>
        </div>
        </div>
        )  
            
          })}
           

        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=> (
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
          ))}
          <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-700 text-md uppercase rounded-full'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
              <FaArrowUp />
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default LandingPage
