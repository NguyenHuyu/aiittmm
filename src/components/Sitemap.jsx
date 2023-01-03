import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Sitemap = () => {

  const sizeText = {
      fontSize: 8
  }
  return (
    <div className='flex items-center bg-slate-600 h-full'>
      <div className="hidden md:flex w-full h-full z-20 items-center justify-center">
        <ul className='flex items-center gap-14 font-semibold'>
          <Link to="/"><AiOutlineHome className='cursor-pointer bg-transparent fill-white' size={27}/></Link>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'><Link to='/gioi-thieu'>GIỚI THIỆU</Link></li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'><Link to='/nghien-cuu'>NGHIÊN CỨU KHOA HỌC</Link></li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'><Link to='/dao-tao'>ĐÀO TẠO</Link></li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'><Link to='/hop-tac'>HỢP TÁC</Link></li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'><Link to='/tin-tuc'>TIN TỨC</Link></li>
          <li className='hover:text-lg hover:text-slate-500 cursor-pointer text-white'><Link to='/lien-he'>LIÊN HỆ</Link></li>
        </ul>
    </div>
    <div className="flex md:hidden w-full h-full z-20 items-center justify-center">
        <ul className='flex items-center text-xs gap-2 font-medium'>
          <AiOutlineHome size={15}/>
          <li><p style={sizeText}><Link to='/gioi-thieu'>GIỚI THIỆU</Link></p></li>
          <li><p style={sizeText}><Link to='/nghien-cuu'>NGHIÊN CỨU KHOA HỌC</Link></p></li>
          <li><p style={sizeText}><Link to='/dao-tao'>Đào Tạo</Link></p></li>
          <li><p style={sizeText}><Link to='/hop-tac'>HỢP TÁC</Link></p></li>
          <li><p style={sizeText}><Link to='/tin-tuc'>TIN TỨC</Link></p></li>
          <li><p style={sizeText}><Link to='/lien-he'>LIÊN HỆ</Link></p></li>
        </ul>
      </div>
    </div>
  )
}

export default Sitemap
