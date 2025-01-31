import React from 'react'
import { useGlobalContext } from "../context";
import { Link } from 'react-router-dom';

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const TopRated = () => {
  const { topRated } = useGlobalContext();

  return (
    <section className='w-100 py-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='px-4'>
            <h3 className='text-white mb-4 fs-2 fw-semibold text-uppercase'>Top 250 Rated</h3>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {topRated.map((movie) => (
          <SwiperSlide key={movie?.id}>
            <Link to={`/movie/${movie?.id}`}>
              <div className="card border-0 bg-transparent">
                <div className="card-body p-0">
                  <img
                    src={movie?.primaryImage}
                    className="w-100 rounded-2"
                    alt={movie?.originalTitle}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TopRated