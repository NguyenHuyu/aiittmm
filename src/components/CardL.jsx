import React from 'react'

const CardL = ({data}) => {  
  return (
    <>
    {data && data.map(item =>(
      <div className='hidden:md md:mb-3'>
      <div key={item.id} className='md:w-[100%] md:flex md:gap-6 bg-white md:h-72 rounded-md md:items-center md:p-3 border border-r-neutral-400'>
        <img src={item.imageURL} 
           alt="pic" 
           className='md:w-56 h-52 md:flex-1 w-full'/>
        <div className='md:text-justify md:py-2 md:flex-3 px-2'>
          <p className='md:text-sm text-smm md:pt-2  '><strong><i>{item.calories}</i></strong></p>
          <h2 className='md:text-s07 md:py-2 text-sm md:poppins'>{item.title}</h2>
          <h3 className='md:text-sm text-sm  '>{item.price}</h3>
          <button className='bg-slate-400 rounded-lg hover:cursor-pointer hover:bg-gray-700 
                               md:bg-slate-300 shadow-lg shadow-slate-800/50
                               text-sm w-20
                               my-2
                               md:text-smm md:w-24 md:py-2 md:my-4 '>Đọc Thêm</button>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default CardL
