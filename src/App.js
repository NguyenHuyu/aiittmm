import React from 'react'
import { Create, Header, Main, Sitemap, Footer } from './components'
import {Contact, Intro, News, Research, Train} from "./pages"
import {Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


const App = () =>{
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col'>
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
        <footer className=''>
            <Footer/>
        </footer>
      </div>  
    </AnimatePresence>
  )
}

export default App