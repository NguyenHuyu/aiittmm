import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
const Sitemap = () => {

  const sizeText = {
      fontSize: 8
  }
  return (
    <div className='flex items-center bg-slate-600 h-full'>
      <div className="hidden md:flex w-full h-full z-20 items-center justify-center">
        <ul className='flex items-center gap-14 font-semibold'>
          <AiOutlineHome className='cursor-pointer bg-transparent fill-white' size={27}/>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'>GIỚI THIỆU</li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'>NGHIÊN CỨU KHOA HỌC</li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'>ĐÀO TẠO</li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'>HỢP TÁC</li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'>TIN TỨC</li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'>LIÊN HỆ</li>
        </ul>
    </div>
    <div className="flex md:hidden w-full h-full z-20 items-center justify-center">
        <ul className='flex items-center text-xs gap-2 font-medium'>
          <AiOutlineHome size={15}/>
          <li><p style={sizeText}>GIỚI THIỆU</p></li>
          <li><p style={sizeText}>NGHIÊN CỨU KHOA HỌC</p></li>
          <li><p style={sizeText}>ĐÀO TẠO</p></li>
          <li><p style={sizeText}>HỢP TÁC</p></li>
          <li><p style={sizeText}>TIN TỨC</p></li>
          <li><p style={sizeText}>LIÊN HỆ</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Sitemap
