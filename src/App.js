import React from 'react'
import { Create, Header, Main, Sitemap } from './components'
import {Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


const App = () =>{
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col'>
        <Header/>
        <sitemap className="mt-28 md:mt-48 w-full h-16  ">
          <Sitemap />
        </sitemap>
        <main className='mt-0 md:mt-0 w-full py-4 px-16 bg-slate-800'>
          <Routes>
            <Route path='/*' element={<Main/>} />
            <Route path='/create' element={<Create/>} />
          </Routes>
        </main>
      </div>  
    </AnimatePresence>
  )
}

export default App