import React, {useState} from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

const NowPlaying = () => {
  const { nowPlaying } = useGlobalContext();
  
  const [watchList, setWatchList] = useState([]);

  const addMovieWatchList = (movie) => {
    const movieWatchList = [...watchList, movie];
    setWatchList(movieWatchList);
    console.log(watchList);
  }

  return (
    <section className="w-100 py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="px-4">
            <h3 className="text-white mb-4 fs-2 fw-semibold text-uppercase">
              Now Playing
            </h3>
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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {nowPlaying.map((movie) => (
          <SwiperSlide key={movie?.id}>
            <Link to={`/movie/${movie?.id}/`}>
              <div className="card border-0 bg-transparent">
                <div className="card-body p-0">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                    className="w-100 rounded-2"
                    alt={movie?.title}
                  />
                </div>
              </div>
            </Link>
            <button type="button" onClick={() => addMovieWatchList(movie)} className="btn btn-sm btn-outline-warning text-white mt-3"><i className="fa-solid fa-plus"></i> Watchlist</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NowPlaying;
