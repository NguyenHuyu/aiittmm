import React from 'react'
import { Link } from 'react-router-dom'
import A1 from "../assets/Res10.jpg"
import A2 from "../assets/FLEMING-1.jpg"
import A3 from "../assets/LEWIS.jpg"

const Intro = () => {
  return (
    <div>
      <Link to="/gioi-thieu">
      <section>
	      <div className="bg-slate-700  text-white py-10">
	      	<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
	      		<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
	      			<h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">A I I T</h1>
	      			<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">TRƯỜNG ĐẠI HỌC QUỐC TẾ SÀI GÒN
	      			</h2>
	      			<p className="text-sm md:text-base text-gray-50 mb-4"><strong>VIỆN ĐỔI MỚI CÔNG NGHỆ</strong></p>
	      			<Link to="/"
	      				className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
	      				Trang Chủ</Link>
	      		  </div>
	      		  <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
	      			<div className=" flex gap-4">
	      					<img className="xl:block rounded-3xl w-[33%] object-cover " src={A1} alt='anh'/>    
	      					<img className="rounded-3xl w-[30%] object-cover "  src={A2}alt='anh'/> 
	      					<img className="lg:block rounded-3xl w-[30%] object-cover" src={A3} alt='anh'/>
	      				</div>
	      		  </div>
	      		</div>
            <div>
              <h1 className='flex items-center justify-center my-5 text-4xl'> <strong>GIÁ TRỊ CỐT LÕI</strong> </h1>
            </div>
            <div>  
              <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                  <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                      <div className="bg-slate-700 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                          <div className="mb-12 space-y-4">
                              <h3 className="text-2xl font-semibold text-yellow-300">Tầm Nhìn</h3>
                              <p className="mb-6 text-slate-400">Đến năm 2025, Viện AIIT sẽ trở thành một viện kiểu mẫu về kết nối thúc đẩy đổi mới sáng tạo tiên phong của SIU. Đến năm 2030 trở thành đơn vị chuyên đổi mới sáng tạo của tập đoàn GAIE.</p>
                          </div>
                          <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                      </div>
                      <div className="bg-slate-700 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                          <div className="mb-12 space-y-4">
                              <h3 className="text-2xl font-semibold text-yellow-300">Sứ Mạng</h3>
                              <p className="mb-6 text-slate-400">Viện có sứ mạng xây dựng tinh thần đổi mới sáng tạo cho đội ngũ giảng viên khoa học trình độ cao của SIU; sẵn sàng kết nối cộng đồng bên trong của SIU, GAIE với đối tác uy tín bên ngoài, các tổ chức trong nước và quốc tế; đồng thời mở rộng hợp tác, đổi mới đào tạo và nghiên cứu nhằm nâng cao thương hiệu SIU.</p>
                          </div>
                          <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                      </div>
                      <div className="bg-slate-700 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                          <div className="mb-12 space-y-4">
                              <h3 className="text-2xl font-semibold text-yellow-300">Phạm Vị Hoạt Động</h3>
                              <p className="mb-6 text-slate-400">Đổi mới sáng tạo trong 5 lĩnh vực nghiên cứu sâu: <br />
                                                              - Trí tuệ nhân tạo, dữ liệu lớn; <br />
                                                              - Khoa học quản lý xã hội và cộng đồng doanh nghiệp;<br />
                                                              - Khoa học giáo dục & chuyển đổi số;<br />
                                                              - Tài nguyên, môi trường và kinh tế biển;<br />
                                                              - Sức khoẻ và y tế </p>
                          </div>S
                          <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
                        </div>
                      </div>
                    </div>
                  </div>
	      	</div>
        </section>
      </Link>
    </div>
  )
}

export default Intro
