import React from 'react'
import picR from "../assets/box2.png"
import logoR from "../assets/Ellipse20.png"
import Twiter from "../assets/Vector.png"
import {AiOutlineHeart, AiOutlineShareAlt} from "react-icons/ai"

const CardR = ({ dataa }) => {
    console.log(dataa);
  return (
    <>
        { dataa && dataa.map(item => (
            <div key={item.id} className='hidden:md'>
            <div className='md:flex md:gap-1 md:items-center md:justify-center md:px-8 bg-bgCard md:grid-cols-3 rounded-md border border-r-neutral-400'>
                <img src={logoR} alt="alt" className='md:w-10 md:h-10 md:-mt-80 md:col-span-1 md:inline-block hidden'/>
                <div className='md:float-left  md:flex md:col-span-2 md:flex-col md:w-96 px-2'>
                    <h1 className='md:mt-3 md:text-sm'>Asian Institute <br />
                                        Innovation & Technology <br />
                                        Asian Institute  
                    </h1>
                    <img src={Twiter}  
                         alt="" 
                         className='md:relative md:w-6 md:left-80 md:-top-12 md:inline-block hidden' /> 
                    <p className='md:text-sm text-sm md:text-justify'>
                        {item.title}
                    </p>
                    <img src={picR} 
                         alt=""
                         className='md:w-full object-cover md:h-[60%] md:mt-2 rounded-3xl' />
                    <div className='md:flex md:justify-between md:my-3 flex justify-between'>
                        <div className='md:flex md:justify-between md:gap-6 flex gap-5'>
                            <AiOutlineHeart/>
                            <AiOutlineShareAlt/>
                        </div>
                        <div>
                            <p>{item.date}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        ))}
    </>
  )
}

export default CardR
