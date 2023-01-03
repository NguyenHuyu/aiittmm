import React, { useState } from 'react';
import { MdCloudUpload, MdDelete, MdFoodBank } from 'react-icons/md';
import {motion} from 'framer-motion'
import {GrAction} from "react-icons/gr"
import Loader from './Loader';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase.config';
import { getItemR, saveItemR } from '../utils/firebaseFunc';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const CreateR = () => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [image, setImage] = useState(null)
  const [fields, setFields] = useState(false)

  const [alert, setAlert] = useState("danger")
  const [msg, setMsg] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const [{}, dispatch ] = useStateValue()
 
  const uploadImage = (e) =>{
    setIsLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile) 
    
  uploadTask.on('state_changed', (snapshot)=> {
    const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes)*100
    
  }, (error) => {
        console.log(error)
        setFields(true)
        setMsg("Lỗi khi tải ảnh : Thử lại")
        setAlert('danger')
        setTimeout(()=>{
          setFields(false)
          setIsLoading(false)

        }, 4000)   
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImage(downloadURL)
          setIsLoading(false)
          setFields(true)
          setMsg('Upload thành công')
          setAlert('Thành công')
          setTimeout(()=>{
            setFields(false)

          },4000)
        })
    })  
  }

  const deleteImage = () =>{
    setIsLoading(true)
    const deleteRef = ref(storage, image)
    deleteObject(deleteRef).then(()=>{
      setImage(null)
      setIsLoading(false)
      setFields(true)
      setMsg("Xóa thành công")
      setAlert("Thành công")
      setTimeout(()=>{
        setFields(false)
      },4000)
    })

  }

  const handleSave = () =>{
    setIsLoading(true)
    try {
      if(!title || !date || !image ){
        setFields(true)
        setMsg("Hãy điền đầy đủ thông tin")
        setAlert('danger')
        setTimeout(()=>{
          setFields(false)
          setIsLoading(false)
        }, 4000)   
      } else {
        const dataa =  {
          id: `${Date.now()}`,
          title: title,
          imageURL: image,
          date: date,
          qty: 1,
        }
        saveItemR(dataa)
        setIsLoading(false)
        setFields(true)
        setMsg("Dữ liệu đã thêm thành công")
        clearData()
        setAlert("Thành công")
        setTimeout(()=>{
          setFields(false) 
        },4000)
      }
    } catch (error) {
      console.log(error)
        setFields(true)
        setMsg("Lỗi : Thử lại")
        setAlert('danger')
        setTimeout(()=>{
          setFields(false)
          setIsLoading(false)

        }, 4000)   
    }
    fetchDataR()
  }

  const clearData = () =>{
    setTitle("")
    setImage(null)
    setDate("")
  }

  const fetchDataR = async () => {
    await getItemR().then((dataa)=>{
      dispatch({
        type:actionType.SET_INFOR,
        InfomationR: dataa
      })
    })
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-red-900 rounded-md 
                      p-4 flex flex-col items-center justify-center md:gap-4'>
        {
          fields && (
            <motion.p 
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              className={`w-full p-2 rounded-sm text-center text-sm font-semibold 
                ${alert === 'danger' 
                ? 'bg-red-400 text-red-800' 
                : 'bg-emerald-400 text-orange-900'}`}
            >
              {msg}
            </motion.p>
          )}
          <div className="md:w-full md:py-2 border-b border-gray-300 md:flex 
                          md:items-center md:gap-2"
          >
            <GrAction className='md:text-xl md:text-gray-700'/>
            <input 
              type="text" 
              required 
              value={title} 
              placeholder="Nội Dung"
              onChange={(e)=> setTitle(e.target.value)}
              className='md:w-full md:h-full md:text-base bg-transparent outline-none border-none'
            />
          </div>
          <div className='md:group md:flex md:justify-center md:items-center 
                          md:flex-col border-2 border-dotted border-gray-200 
                          w-full md:h-225 cursor-pointer rounded-lg'>
                { isLoading 
                ? <Loader/> 
                : ( <> { !image 
                  ? <>
                    <label className='md:w-full md:h-full md:flex md:flex-col 
                                      md:items-center md:justify-center cursor-pointer'
                    >
                      <div className='md:w-full md:h-full md:flex md:flex-col 
                                      md:items-center md:justify-center cursor-pointer md:gap-2'
                      >
                        <MdCloudUpload className='md:text-gray-500 md:text-3xl hover:text-gray-700'/>
                        <p className='md:text-gray-500 hover:text-gray-700'
                        > Click to Upload </p>
                      </div>
                      <input 
                        type="file"
                        name='uploadimage'
                        accept='image/*'
                        onChange= {uploadImage}
                        className='h-0 w-0'  />
                    </label>
                  </> 
                  : 
                  (<>
                    <div className="md:relative md:w-full md:flex md:items-center md:justify-center">
                      <img src={image} 
                          alt="uploadimage" 
                          className='md:w-[30%] md:h-[100%]'    
                      />
                      <button type='button'
                              onClick={deleteImage}
                              className='md:absolute md:bottom-3 md:right-3 rounded-full 
                                      bg-red-400 md:text-xl cursor-pointer duration-500 
                                        transition-all ease-in-out '>
                              <MdDelete className='text-white'/>
                      </button>
                    </div>
                  </> 
                  )}
                </>
                )}
          </div>
          <div className='w-full md:flex md:flex-col md:items-center md:gap-3'>
              <div className='w-full md:py-2 border-b border-gray-200 md:flex md:items-center md:gap-2'>
                  <MdFoodBank className='md:text-base text-2xl'/>
                  <input type="text"
                        required
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                        placeholder='Ngày'
                        className='w-full h-full text-base bg-transparent outline-none border-none placeholder:text-gray-400' />
              </div>
              {/* <div className='w-full md:py-2 border-b border-gray-200 md:flex md:items-center md:gap-2'>
                  <MdFoodBank className='md:text-base text-2xl'/>
                  <input type="text"
                        required
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                        placeholder='Chú thích thêm:'
                        className='w-full h-full text-base bg-transparent outline-none border-none placeholder:text-gray-400' />
              </div> */}
          </div>
          <div className='md:flex md:items-center w-full'>
            <button type='button'
                    className='md:ml-0 md:w-full border-none outline-none bg-green-600 md:px-12 md:py-2 rounded-lg md:text-base text-white'
                    onClick={handleSave}
            >
                    THÊM
            </button>
          </div>
      </div>
    </div>
  );
}

export default CreateR;
