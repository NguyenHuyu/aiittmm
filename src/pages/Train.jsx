import React from 'react'
import P1 from "../assets/CSI-Graduate-Program-crop-image-500x300.jpg"
import P2 from "../assets/Career-Accelerator-Postdoc-Fellowship-Thumbnail.jpg"
import P3 from "../assets/CSI-Special-Fellow-Program-Banner-500x300.jpg"



const Research = () => {
  return (
    <div>
      <div className="py-10 bg-gradient-to-br bg-slate-700">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
          <h2 className="text-2xl text-yellow-500 font-bold md:text-4xl">CHƯƠNG TRÌNH ĐÀO TẠO</h2>
          {/* <p className="lg:w-6/12 lg:mx-auto">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p> */}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">

          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl sm:h-[100%]">
            <img src={P1} alt="art cover" loading="lazy" className="h-52 sm:h-[100%] w-full sm:w-5/12 object-cover rounded-lg transition duration-500 group-hover:rounded-xl"/>
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">Tăng tốc sự phát triển học bổng sau tiến sĩ.</h4>
                  <p className="text-gray-600 text-sm">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
                </div>
                <a href="www.tailus.io" className="block w-max text-cyan-600">Xem Thêm</a>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl sm:h-[100%]">
            <img src={P2} alt="art cover" loading="lazy" className="h-52 sm:h-[100%] w-full sm:w-5/12 object-cover rounded-lg transition duration-500 group-hover:rounded-xl"/>
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">Chương trình tốt nghiệp.</h4>
                  <p className="text-gray-600 text-sm">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
                </div>
                <a href="www.tailus.io" className="block w-max text-cyan-600">Xem Thêm</a>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl sm:h-[100%]">
            <img src={P3} alt="art cover" loading="lazy" className="h-52 sm:h-[100%] w-full sm:w-5/12 object-cover rounded-lg transition duration-500 group-hover:rounded-xl"/>
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">Chương trình nghiên cứu sinh đặc biết.</h4>
                  <p className="text-gray-600 text-sm">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
                </div>
                <a href="www.tailus.io" className="block w-max text-cyan-600">Xem Thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Research
