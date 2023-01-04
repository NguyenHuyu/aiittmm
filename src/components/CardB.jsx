import React from 'react'
import imgPic from "../assets/310702755_197578142713558_6492450711396096315_n.jpg"


const CardB = () => {
  return (
    <div className='hidden:md'>
      <div className=' md:w-52 h-auto drop-shadow-lg  bg-bgCardB md:border '>
        <img src={imgPic} alt="" className='md:w-auto md:object-fill md:h-44'/>
        <p className='md:text-left md:text-s077  md:p-4'>Thúc đẩy hoạt động chuyển giao ứng dụng các kết quả nghiên cứu của trường</p>
      </div>
    </div>
  )
}

export default CardB
