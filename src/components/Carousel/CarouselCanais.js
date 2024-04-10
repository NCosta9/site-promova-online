import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function CarouselCanais() {

  return (
    <>
      <div id='canais'>
        <Swiper

          slidesPerView={3}
          spaceBetween={10}

          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper-canais"
          data-aos="fade-left" data-aos-duration="800"
        >

          
            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/PromovaOnline/clients/logo1?t=2024-03-25T20%3A21%3A15.945Z' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/PromovaOnline/clients/logo-cumbuca.png?t=2024-03-25T17%3A07%3A40.492Z' />
            </SwiperSlide>

            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/PromovaOnline/clients/logo-jofranimoveis.png?t=2024-03-25T17%3A07%3A48.162Z' />
            </SwiperSlide>

            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/PromovaOnline/clients/logo-lucas-xavier.png?t=2024-03-25T17%3A07%3A57.750Z' />
            </SwiperSlide>

            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/PromovaOnline/clients/logo-netsim.png?t=2024-03-25T17%3A08%3A06.578Z' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-100 mt-4 item-canais'
                src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/PromovaOnline/clients/logo-startec.png?t=2024-03-25T17%3A08%3A18.125Z' />
            </SwiperSlide>
        </Swiper>
      </div>


    </>
  )
}