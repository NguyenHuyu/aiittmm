import React from 'react'
import imgBanner from "../assets/bn.jpg"
import { useStateValue } from '../context/StateProvider'
import CardB from './CardB'
import CardL from './CardL'
import CardR from './CardR'

const Main = () => {

  const [{Infomation}] = useStateValue() 

  return (
    <div className='w-full'>
      <div className='hidden:md'>
        <div className='w-full flex md:flex md:items-center md:justify-center items-center justify-center '>
          <div className='w-full relative md:flex md:items-center md:justify-center bg-slate-600'>
            <div className='absolute top-7 left-10 md:top-48 md:left-64 '>
              {/* <p className='text-white text-lg md:text-white md:text-6xl '>VIỆN ĐỔI MỚI VÀ CÔNG NGHỆ CHÂU Á</p> */}
            </div>
            <img src={imgBanner} 
               alt="banner" 
               className='w-full opacity-50'
            />
            <button className='absolute opacity-80 w-20 h-8 top-20 left-10
                               md:top-96 md:left-48 md:w-32 md:h-12 md:text-base border-none
                             md:bg-slate-300 md:shadow-lg md:shadow-slate-800/50
                             bg-slate-400 rounded-xl text-sm hover:opacity-100'>Xem Thêm</button>
          </div>
        </div>
        <div className='bg-bgBody
                          md:shadow-lg md:shadow-slate-700/40
                          md:grid md:grid-cols-5 md:px-32 py-8 md:items-center'>
          <div className='col-span-3 flex flex-col items-start px-1'>
            <p className='md:text-xl md:font-semibold md:py-4 md:mb-6 md:items-center'>Diễn Biến Mới Của Viện</p>
            <div className='md:overflow-y-auto md:h-864'>
              <CardL data={Infomation}/>
            </div>
          </div>
          <div className='col-span-2 flex flex-col items-start justify-center px-1'>
            <p className='md:text-xl md:font-semibold md:py-4 md:mb-6'>Theo Dõi Twiter</p>
            <div className='md:overflow-y-auto md:h-864  '>
              <CardR />
              <CardR/>
              <CardR/>
            </div>
          </div>
        </div>
        <div className='md:flex bg-white md:p-12 md:items-center md:gap-32 md:justify-between'>
          <div className='md:flex-2 md:pl-6'>
            <h1 className='md:text-3xl'>Sự kiên sắp tới của viện</h1>
            <p className='md:text-left'>Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum</p>
            <button className='bg-slate-400 rounded-lg hover:cursor-pointer hover:bg-gray-700 
                                 md:bg-slate-300 shadow-lg shadow-slate-800/50
                                 text-sm w-20
                                 my-2
                                 md:text-smm md:w-24 md:py-2 md:my-4'>Xem tất cả</button>
          </div>
          <div className='md:flex-3 md:flex md:flex-grow md:gap-8'>
              <CardB/>
              <CardB/>
              <CardB/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
