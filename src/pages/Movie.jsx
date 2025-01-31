import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovie = async () => {
    setIsLoading(true);
    const url = `https://imdb236.p.rapidapi.com/imdb/${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d516f62de4msh8702f8b10e8adb7p114043jsn03bd54c55ceb",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovie(result);
      setIsLoading(false);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="w-100 position-relative overflow-hidden">
      <div className="w-100">
        <img
          src={movie?.primaryImage}
          className="w-100"
          alt={movie?.originalTitle}
        />
        <div className="movie-detail-container py-4">
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card p-0 bg-transparent mb-sm-0 mb-4">
                  <div className="card-body p-0">
                    <img
                      src={movie?.primaryImage}
                      className="w-100 rounded-3"
                      alt={movie?.originalTitle}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="d-flex flex-column">
                  <h2 className="text-start mb-3 fs-1 fw-bolder text-white">
                    {movie?.originalTitle}
                  </h2>
                  <h5 className="text-start fs-5 mb-3 text-white">
                    Release Date: {movie?.releaseDate}
                  </h5>
                  {movie?.contentRating && (
                    <h5 className="text-start fs-5 mb-3 text-white">
                      Content Rating: {movie?.contentRating}
                    </h5>
                  )}
                  <h5 className="text-start fs-5 mb-3 text-white">
                    Directed By: {movie.directors?.[0]?.fullName}
                  </h5>
                  <h5 className="text-white mb-3">
                    Runtime: {movie?.runtimeMinutes} mins
                  </h5>
                  <h5 className="text-white mb-3">
                    IMDB Rating: {parseFloat(movie?.averageRating).toFixed(1)} /
                    10
                  </h5>
                  <h5 className="text-white mb-3">
                    Genres:{" "}
                    {movie.genres &&
                      movie.genres.map((item) => item).join(", ")}
                  </h5>
                  <h5 className="text-white mb-3">
                    Production Companies:{" "}
                    {movie.productionCompanies &&
                      movie.productionCompanies
                        .map((item) => item.name)
                        .join(", ")}
                  </h5>
                  <p className="text-start fs-5 mb-0 fst-italic text-white">
                    Description: {movie?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
