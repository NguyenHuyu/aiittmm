import React from 'react'

const CardL = ({data}) => {  
  console.log(data) 
  return (
    <>
    {data && data.map(item =>(
      <div className='hidden:md'>
      <div key={item.id} className='md:w-[100%] md:flex md:gap-10 bg-white md:py-6 md:h-72 rounded-md md:items-center md:p-5 border border-r-neutral-400'>
        <img src={item.imageURL} 
           alt="pic" 
           className='md:w-72 h-64 md:flex-1'/>
        <div className='md:text-justify md:py-2 md:flex-3'>
          <p className='md:text-sm text-smm'><i>{item.calories}</i></p>
          <h2 className='md:text-s07 md:py-2 text-sm md:poppins'>{item.title}</h2>
          <h3 className='md:text-sm text-sm '>{item.price}</h3>
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
