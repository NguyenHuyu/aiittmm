import React from 'react'
import imgBanner from "../assets/bnr.jpg"
import { useStateValue } from '../context/StateProvider'
import CardB from './CardB'
import CardL from './CardL'
import CardR from './CardR'

const Main = () => {

  const [{ Infomation , InfomationR }] = useStateValue() 
  console.log(InfomationR)
  console.log(Infomation)

  return (
    <div className='w-full'>
      <div className='hidden:md'>
        <div className='w-full flex md:flex md:items-center md:justify-center items-center justify-center '>
          <div className='w-full relative md:flex md:items-center md:justify-center bg-slate-600'>
            <img src={imgBanner} 
               alt="banner" 
               className='md:relative md:left-11 md:w-full opacity-50'
            />
            <button className='md:relative opacity-80 w-24 h-8 top-20 left-10 
                               md:top-20 md:-left-48 md:w-40 md:h-12 md:text-s07 border-none md:px-6
                             md:bg-slate-300 md:shadow-lg md:shadow-slate-800/50
                             bg-slate-400 rounded-xl text-sm hover:opacity-100'>Xem Thêm</button>
          </div>
        </div>
        <div className='bg-bgBody
                          md:shadow-lg md:shadow-slate-700/40
                          md:px-20 py-8 md:flex md:flex-row md:space-x-1 '>
          <div className='col-span-3 flex flex-col items-start md:basis-3/4'>
            <p className='md:text-xl md:font-semibold md:py-2 md:mb-6 md:items-center'>Diễn Biến Mới Của Viện</p>
            <div className='md:overflow-y-auto md:h-864'>
              <CardL data={Infomation}/>
            </div>
          </div>
          <div className='col-span-2 flex flex-col items-start px-1 md:basis-1/4'>
            <p className='md:text-xl md:font-semibold md:py-2 md:mb-6'>Theo Dõi Twiter</p>
            <div className='md:overflow-y-auto md:h-864  '>
              <CardR dataa={InfomationR}/>
            </div>
          </div>
        </div>
        <div className='md:flex bg-white md:p-12 md:items-center md:gap-10 md:justify-between md:flex-row'>
          <div className='md:basis-2/5 md:pl-6'>
            <h1 className='md:text-2xl'>Sự kiên sắp tới của viện</h1>
            <p className='md:text-left'>Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum</p>
            <button className='bg-slate-400 rounded-lg hover:cursor-pointer hover:bg-gray-700 
                                 md:bg-slate-300 shadow-lg shadow-slate-800/50
                                 text-sm w-20
                                 my-2
                                 md:text-smm md:w-24 md:py-2 md:my-4'>Xem tất cả</button>
          </div>
          <div className='md:basis-3/5 md:flex md:flex-grow md:gap-8 md:overflow-y-auto'>
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
