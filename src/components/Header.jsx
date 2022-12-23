import React,{useState} from "react";
import Logo from "../assets/AIIT.png";
import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare, FaUserAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { AiFillMail,  } from "react-icons/ai";
import {FiLogOut} from "react-icons/fi"
import {IoMdAdd} from 'react-icons/io'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";


const Header = () => {

  const [{user}, dispatch] = useStateValue()
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [isMenu, setIsMenu] = useState(false);

  const handleLogin = async () => {
    if(!user){
      const {
        user:{
          providerData}} = await signInWithPopup(firebaseAuth, provider)
      dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    })
    localStorage.setItem('user', JSON.stringify(providerData[0]))
    }else{
      setIsMenu(!isMenu)
    }
  };
  const handleLogout = () =>{
    localStorage.clear()
    dispatch({
      type:actionType.SET_USER,
      user:null
    })
    window.location.reload(false);
  }

  return (
    <header className="z-50 w-screen bg-gradient-to-r from-bgHFto via-gray-300 to-gbHFfrom  px-28">
      {/* reponsive mobile */}
      <div className="flex hidden:md w-full h-full justify-between items-center">
        <div className=" gap-1 -ml-24 my-3 md:ml-12 md:my-5">
          <Link to={"/"} >
            <img src={Logo} className="w-16 md:w-36 object-cover " alt="" />
            <p className="text-headingColor text-sm md:text-2xl md:w-96 w-56 md:mt-3 mt-2 font-bold flex">
              Asian Institute
              <br />
              Innovation & Technology
            </p>
            </Link>
        </div>
          <ul className="flex items-center gap-2 md:gap-10 ml-auto">
              <motion.li
                whileTap={{ scale: 0.2 }}
                className="hover:texte cursor-poiter "
              > 
                <GrFacebook size={20} />
              </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter t"
          >
            <FaInstagramSquare size={20}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter "
          >
            <SiZalo size={20}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter"
          >
            <AiFillMail size={20}/>
          </motion.li>
          </ul>
          { user ? 
          <motion.div 
            onClick={handleLogin}
            whileTap={{ scale: 0.2 }}
            className="relative flex items-center justify-center pl-8 pr-5"
          >
            <img src={user.photoURL} className="absolute left-2 rounded-full w-10 h-10" alt="errs" />
          </motion.div> 
          : 
          <div onClick={handleLogin}
            whileTap={{ scale: 0.2 }}
            className="relative flex items-center justify-center pl-5"
          >
          <FaUserAlt size={15} className="absolute left-3 md:left-9" />
          </div>  
          }
          {
            isMenu && (
              <motion.div 
                className="w-24  bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-20 right-7">
                
            {user && user.email === "yuhuynguyen.1204@gmail.com" && (
                <Link to="/create">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                          transition-all duration-100 ease-in-out text-textColor ">
                    Add <IoMdAdd/>
                  </p>
                </Link>
            )}
            <p onClick={handleLogout} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 
                          transition-all duration-100 ease-in-out text-textColor">
                  Out <FiLogOut/>
            </p>
              </motion.div>
            )
          }
      </div>
    </header>
  );
};

export default Header;
