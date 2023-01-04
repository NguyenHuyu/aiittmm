import React from 'react'
import Logo from "../assets/AIIT.png"
import { motion } from 'framer-motion'
import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { AiFillMail,  } from "react-icons/ai"; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full z-50 bg-gradient-to-r from-bgHFto via-gray-400 to-gbHFfrom p-6 px-2'>
      <div className='hidden:md flex justify-center items-center md:flex md:justify-center md:items-center '>
        <div className='-ml-14 md:ml-12 md:flex-1 flex-1 '>
          <img src={Logo} 
             alt="logo"
             className='w-16 h-auto object-cover
                        md:w-28'
          />
          <p className='text-stone-900 md:text-sm font-bold mt-3 text-sm'>Asian Institute <br/> Innovation & Technology</p>
          <div>
          <ul className="flex items-center md:gap-6 gap-2 ml-auto pr-3 text-stone-900 mt-3">
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter "
          >
            <GrFacebook size={22} />
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter t"
          >
            <FaInstagramSquare size={22}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter "
          >
            <SiZalo size={22}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter"
          >
            <AiFillMail size={22}/>
          </motion.li>
        </ul>
          </div>
        </div>
        <ul className='text-smm mx-10 flex-2 md:text-sm'>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
          <li><Link to="/nghien-cuu">Nghiên cứu</Link></li>
          <li><Link to="/dao-tao">Đào tạo</Link></li>
          <li><Link to="/hop-tac">Hợp tác</Link></li>
          <li><Link to="/tin-tuc">Tin tức</Link></li>
          <li><Link to="/lien-he">Liên hệ</Link></li>
        </ul>
        <div className='text-right -mr-12 md:text-sm text-smm flex-1 md:-mr-0'>
          <p className=''>Quyền truy cập của nhân viên | Quyền truy cập của sinh viên | Liên hệ chúng tôi</p>
          <ul className='md:text-right  text-smmm md:text-sm'>
            <li>Trụ sở: 18 Tống Hữu Định, Thảo Điền, TP.Thủ Đức, TPHCM</li>
            <li>Văn phòng: 8C-11-16-18 Tống Hữu Định, Thảo Điền, TP.Thủ Đức, TPHCM</li>
            <li>Điện thoại: 028.36203932</li>
            <li>Fax: 028.54093928</li>
            <li>Email: aiit@siu.edu.vn</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
