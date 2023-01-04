import React from 'react'
import logoR from "../assets/Ellipse20.png"
import Twiter from "../assets/Vector.png"
import {AiOutlineHeart, AiOutlineShareAlt} from "react-icons/ai"

const CardR = ({ dataa }) => {
  return (
    <>
        { dataa && dataa.map( item => (
            <div key={item.id} className='hidden:md'>
            <div className='md:flex md:items-center md:w-[100%] md:justify-between md:px-2 md:mb-1 bg-bgCard rounded-md border border-r-neutral-400'>
                <img src={logoR} alt="alt" className='md:relative md:w-8 md:h-8 bottom-32 md:flex hidden '/>
                <div className='md:float-left  md:flex md:flex-col md:w-72 px-2 '>
                    <h1 className='md:mt-2 md:text-smm'>Asian Institute <br />
                                        Innovation & Technology <br />
                                        Asian Institute  
                    </h1>
                    <img src={Twiter}  
                         alt="" 
                         className='md:relative md:w-6 md:left-52 md:-top-8 md:inline-block hidden' /> 
                    <p className='md:text-s007 text-sm md:w-[90%] md:text-justify'>
                        {item.title}
                    </p>
                    <img src={item.imageURL} 
                         alt=""
                         className='md:w-[80%] object-cover md:h-[60%] md:mt-2 rounded-3xl' />
                    <div className='md:flex md:justify-around md:my-3 flex justify-between'>
                        <div className='md:flex md:justify-between md:gap-6 flex gap-5'>
                            <AiOutlineHeart/>
                            <AiOutlineShareAlt/>
                        </div>
                        <div>
                            <p className='md:text-s007'>{item.date}</p>
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


