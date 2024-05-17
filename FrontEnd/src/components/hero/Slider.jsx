

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
export default function Slider() {
  return (

    
      <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide >
            <img src="src\Images\slider22.jpg" alt="" style={{height:"408px",width:"95%"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\Images\pexels-jeshoots-com-147458-442576.jpg" alt="" style={{height:"408px",width:"95%",}}/>
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\Images\slider2.jpg" alt="" style={{height:"408px",width:"95%"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\Images\slider33 (1).jpg" alt="" style={{height:"408px",width:"95%"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\Images\slider4.jpg" alt="" style={{height:"408px",width:"95%"}}/>
        </SwiperSlide>
      </Swiper>
    
  );
}

  

