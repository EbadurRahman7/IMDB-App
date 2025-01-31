import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useGlobalContext } from "../context";

const Banner = () => {
  const { popular } = useGlobalContext();
  const selectedIndex = 0;

  return (
    <section className="w-100">
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner position-relative">
        {popular.map((movie, index) => (
          <div className={selectedIndex === index ? 'carousel-item active' : 'carousel-item'} key={movie?.id} data-bs-interval="10000">
            <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="d-block w-100" alt={movie?.title} />
            <div className="carousel-caption d-none d-md-block movie-description">
              <h2 className="text-start mb-3 fs-1 fw-bolder">{movie?.original_title}</h2>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="text-start fs-5">Release Date: {movie?.release_date}</h5>
                <h5 className="text-start fs-5">IMDB Rating: {movie?.vote_average} / 10</h5>
              </div>
              <p className="text-start fs-5 mb-0 fst-italic">{movie?.overview}</p>
            </div>
          </div>
        ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <Carousel 
        showThumbs={false}
        autoPlay={true}
        showIndicators={true}
        showStatus={false}
        transitionTime={3}
        infiniteLoop={true}
      >
        {popular.map((movie, index) => (
          <div className='' key={movie?.id}>
            <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="d-block w-100" alt={movie?.title} />
            <div className="carousel-caption d-none d-md-block movie-description">
              <h2 className="text-start mb-3 fs-1 fw-bolder">{movie?.original_title}</h2>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="text-start fs-5">Release Date: {movie?.release_date}</h5>
                <h5 className="text-start fs-5">IMDB Rating: {movie?.vote_average} / 10</h5>
              </div>
              <p className="text-start fs-5 mb-0 fst-italic">{movie?.overview}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;