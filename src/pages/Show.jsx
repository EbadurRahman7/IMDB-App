import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [show, setShow] = useState([]);
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
      setShow(result);
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
          src={show?.primaryImage}
          className="w-100"
          alt={show?.originalTitle}
        />
        <div className="movie-detail-container py-4">
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card p-0 bg-transparent mb-sm-0 mb-4">
                  <div className="card-body p-0">
                    <img
                      src={show?.primaryImage}
                      className="w-100 rounded-3"
                      alt={show?.originalTitle}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="d-flex flex-column">
                  <h2 className="text-start mb-3 fs-1 fw-bolder text-white">
                    {show?.originalTitle}
                  </h2>
                  <h5 className="text-start fs-5 mb-3 text-white">
                    Release Date: {show?.releaseDate}
                  </h5>
                  {show?.contentRating && (
                    <h5 className="text-start fs-5 mb-3 text-white">
                      Content Rating: {show?.contentRating}
                    </h5>
                  )}
                  <h5 className="text-start fs-5 mb-3 text-white">
                    Directed By: {show.directors?.[0]?.fullName}
                  </h5>
                  <h5 className="text-white mb-3">
                    IMDB Rating: {parseFloat(show?.averageRating).toFixed(1)} /
                    10
                  </h5>
                  <h5 className="text-white mb-3">
                    Genres:{" "}
                    {show.genres &&
                      show.genres.map((item) => item).join(", ")}
                  </h5>
                  <h5 className="text-white mb-3">
                    Production Companies:{" "}
                    {show.productionCompanies &&
                      show.productionCompanies
                        .map((item) => item.name)
                        .join(", ")}
                  </h5>
                  <p className="text-start fs-5 mb-0 fst-italic text-white">
                    Description: {show?.description}
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
