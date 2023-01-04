import React from 'react'

const CardL = ({data}) => {  
  return (
    <>
    {data && data.map(item =>(
      <div className='hidden:md md:mb-1 '>
      <div key={item.id} className='md:w-[100%] md:gap-6 bg-white md:h-auto rounded-md md:items-center md:px-2 border border-r-neutral-400 md:flex md:flex-row'>
        <img src={item.imageURL} 
           alt="pic" 
           className='md:w-48 h-40 md:flex-1 w-full basis-1/4'/>
        <div className='md:text-justify md:py-1 md:flex-3 px-2 basis-3/4'>
          <p className='md:text-sm text-smm'><strong><i>{item.calories}</i></strong></p>
          <h2 className='md:text-s007 md:py-2 md:h-auto text-sm md:poppins md:text-clip whitespace-pre-wrap'>{item.title}</h2>
          <h3 className='md:text-s007 text-sm  '>{item.price}</h3>
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


