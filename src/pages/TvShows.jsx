import React from 'react'
import { useGlobalContext } from "../context";
import { Link } from 'react-router-dom';

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const Popular = () => {
  const { tvShows } = useGlobalContext();

  return (
    <section className='w-100 py-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='px-4'>
            <h3 className='text-white mb-4 fs-2 fw-semibold text-uppercase'>TV Shows</h3>
          </div>
        </div>
      </div>
      {/* <div className='container'>
        <div className='row align-items-center'>
          {popular.map((movie) => (
            <div className='col-lg-3 col-sm-6' key={movie?.id}>
              <div className='movie-card position-relative mb-3 overflow-hidden'>
                <Link to={`/movie/${movie?.id}/${movie?.original_title}`} className='card mb-3 bg-transparent h-100'>
                  <div className='card-body p-0 rounded-2 h-100'>
                    <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="w-100 h-100" alt={movie?.title} />
                    <div className='movie-hover-desc'>
                      <h2 className="text-start mb-3 fs-6 fw-bolder">{movie?.original_title}</h2>
                      <div className="d-flex flex-column align-items-start">
                        <span className="text-start fs-6">Release Date: {movie?.release_date}</span>
                        <span className="text-start fs-6">IMDB Rating: {movie?.vote_average} / 10</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div> */}

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
        {tvShows.map((shows) => (
          <SwiperSlide key={shows?.id}>
            <Link to={`/tv-shows/${shows?.id}/`}>
              <div className="card border-0 bg-transparent">
                <div className="card-body p-0">
                  <img
                    src={shows?.primaryImage}
                    className="w-100 rounded-2"
                    alt={shows?.originalTitle}
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

export default Popular