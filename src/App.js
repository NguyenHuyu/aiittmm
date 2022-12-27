import React, {useEffect} from 'react'
import { Create, Header, Main, Sitemap, Footer } from './components'
import {Contact, Intro, News, Research, Train} from "./pages"
import {Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getItem } from './utils/firebaseFunc'
import { actionType } from './context/reducer'


const App = () => {

  const [{}, dispatch ] = useStateValue()
  const fetchData = async() =>{
    await getItem().then((data)=>{
      dispatch({
        type:actionType.SET_INFO,
        Infomation: data
      })
    })
  }
  useEffect(() => {
    fetchData()
  }, []);
 

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-[100%] h-auto flex flex-col md:justify-center md:items-center'>
        <Header/>
        <sitemap className="w-full h-16  ">
          <Sitemap />
        </sitemap>
        <main className='mt-0 md:mt-0 w-full'>
          <Routes>
            <Route path='/*' element={<Main/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/gioi-thieu' element={<Intro/>} /> 
            <Route path='/nghien-cuu' element={<Research/>} />
            <Route path='/dao-tao' element={<Train/>} />
            <Route path='/tin-tuc' element={<News/>} />
            <Route path='/lien-he' element={<Contact/>} />
          </Routes>
        </main>
        <Footer/>
      </div>  
    </AnimatePresence>
  )
}

export default App