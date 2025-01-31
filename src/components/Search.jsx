import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Search = () => {
  const {handleChange, isLoading, searchMovies, text} = useGlobalContext();

  // const [text, setText] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchMovies, setSearchMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (e) => {
  //   setText(e.target.value);
  //   if (text) {
  //     setSearchTerm(text);
  //   }
  // };

  // const fetchSearchedMovies = async () => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=4e44d9029b1270a757cddc766a1bcb63&include_adult=false&language=en-US&page=1`
  //     );
  //     if (data.results) {
  //       setSearchMovies(data.results);
  //       console.log(data.results);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   setSearchMovies([]);
  //   if (text !== "") {
  //     fetchSearchedMovies();
  //   }
  // }, [searchTerm]);

  return (
    <>
      <section className="w-100 pt-5 search-container">
        <div className="container">
          <div className="row">
            <h3 className="text-white text-center mb-3">
              Search Your Favoruite Movies
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <input
              type="text"
              value={text}
              onChange={handleChange}
              autoComplete="off"
              name="text"
              className="input w-50"
              placeholder="Enter Movie Name..."
            />
          </div>
        </div>
      </section>

      {text !== "" && searchMovies.length < 1 ? (
        <div className="text-center mx-auto text-white fs-4 mt-5">
          Nothing Found.
        </div>
      ) : null}

      {isLoading ? (
        <Loading />
      ) : (
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              {searchMovies.map((movie) => {
                return (
                  <div key={movie?.id} className="col-lg-3 col-sm-6">
                    <Link
                      to={`/movie/${movie?.id}`}
                      className="movie-card card mb-4 bg-transparent h-100 position-relative text-decoration-none overflow-hidden"
                    >
                      <div className="card-body p-0 rounded-2">
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                          className="w-100"
                          alt={movie?.original_title}
                        />
                        <div className="movie-details d-flex flex-column">
                          <span className="text-white fs-6 fw-semibold">
                            {movie?.original_title}
                          </span>
                          <span className="text-white fs-6 fw-semibold">
                            {parseFloat(movie?.vote_average).toFixed(1)} / 10
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Search;