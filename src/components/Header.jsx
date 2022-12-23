import React,{useState} from "react";
import Logo from "../assets/AIIT.png";
import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare, FaUserAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import {FiLogOut} from "react-icons/fi"
import { AiFillMail,  } from "react-icons/ai";
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
      const {user:{providerData}} = await signInWithPopup(firebaseAuth, provider)
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
    <header className="fixed z-50 w-screen bg-blue-900 p-6 px-16">
      {/* reponsive destop */}
      <div className="hidden md:flex w-full h-full p-4 z-20">
        <div className="md:items-center gap-2">
          <Link to={"/"}>
            <img src={Logo} className="w-13 h-12 object-cover" alt="" />
          </Link>
          <p className="text-stone-900 text-xl font-bold mt-3">
            Asian Institute
            <br />
            Innovation & Technology
          </p>
        </div>
        <ul className="flex items-center gap-6 ml-auto pr-3 text-stone-900">
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter "
          >
            <GrFacebook size={27} />
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter t"
          >
            <FaInstagramSquare size={27}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter "
          >
            <SiZalo size={27}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter"
          >
            <AiFillMail size={27}/>
          </motion.li>
        </ul>
          { user ? <motion.div onClick={handleLogin}
            whileTap={{ scale: 0.2 }}
            className="relative flex items-center justify-center pl-8 pr-5"
          >
            <img src={user.photoURL} className="absolute left-2 rounded-full w-10 h-10" alt="err" />
          </motion.div> 
          : 
          <div onClick={handleLogin}
            whileTap={{ scale: 0.2 }}
            className="relative flex items-center justify-center pl-5"
          >
          <FaUserAlt size={25} className="absolute left-8" />
          </div>
          }
          {
            isMenu && (
              <motion.div 
                initial={{opacity:0, scale:0.6}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.6}}
                className="w-28  bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-32 right-4">
            {user && user.email === "yuhuynguyen.1204@gmail.com" && (
              <Link to="/create">
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                          transition-all duration-100 ease-in-out text-textColor ">
                  Add <IoMdAdd/>
                </p>
              </Link>
            )}
            <p onClick={handleLogout} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                          transition-all duration-100 ease-in-out text-textColor">
              
                  Logout <FiLogOut />
            </p>
          </motion.div>
            )
          }
      </div>


      
      {/* reponsive mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-between">
          <Link to={"/"} className="flex-col items-center gap-2 pr-3">
            <img src={Logo} className="w-16 object-cover" alt="" />
            <p className="text-headingColor text-xs font-bold mt-3 flex items-center justify-center">
            Asian Institute
            <br />
            Innovation & Technology
          </p>
          </Link>
          <ul className="flex items-center gap-4 ml-auto pr-3 pl-2">
              <motion.li
                whileTap={{ scale: 0.2 }}
                className="hover:texte cursor-poiter "
              > 
                <GrFacebook size={15} />
              </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter t"
          >
            <FaInstagramSquare size={15 }/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter "
          >
            <SiZalo size={15}/>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.2 }}
            className="hover:texte cursor-poiter"
          >
            <AiFillMail size={15}/>
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
          <FaUserAlt size={15} className="absolute left-7" />
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
