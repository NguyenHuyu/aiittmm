import React from 'react'
import imgBanner from "../assets/Rectangle 1068.png"

const Main = () => {
  return (
    <div className='w-screen'>
      <div className='hidden:md'>
        <div className='w-full h-80vh flex items-center justify-center '>
          <div className='w-full relative md:flex md:items-center md:justify-center bg-slate-800'>
            <div className='absolute top-7 left-10 md:top-48 md:left-64 '>
              <p className='text-white text-lg md:text-white md:text-6xl '>VIỆN ĐỔI MỚI VÀ CÔNG NGHỆ CHÂU Á</p>
            </div>
            <img src={imgBanner} 
               alt="banner" 
               className='w-full opacity-30'
            />
            <button className='absolute opacity-80 w-20 h-8 top-20 left-10
                              md:top-96 md:left-48 md:w-44 md:h-16 md:text-xl border-none
                               
                             bg-slate-400 rounded-xl text-sm hover:opacity-100'>Xem Thêm</button>
          </div>
        </div>
        <br />  
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-white'>
        <div className="py-2 flex-3 flex flex-col items-start md:items-center justify-center">
          
          <div className=''>
              <p>Tin Tức Mới Nhất</p>
          </div>
          </div>
          <div className="py-4 bg-slate-500 flex-1  ">
            Abcd
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main
