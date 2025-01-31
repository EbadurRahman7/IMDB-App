import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  // For Searching a movie
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
    if (text) {
      setSearchTerm(text);
    }
  };

  const fetchPopular = async () => {
    const url = "https://imdb236.p.rapidapi.com/imdb/most-popular-movies";
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
      setPopular(result);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchTopRated = async () => {
    const url = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
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
      setTopRated(result);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTvShows = async () => {
    const url = "https://imdb236.p.rapidapi.com/imdb/most-popular-tv";
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
      setTvShows(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <AppContext.Provider
      value={{
        popular,
        topRated,
        tvShows,
        handleChange,
        isLoading,
        searchMovies,
        text,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
