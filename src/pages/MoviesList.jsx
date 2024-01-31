import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Movie from "../components/Movie";

const page = 0;
const url = "https://api.tvmaze.com/search/shows?q=all&page=${page}";

//movies API call method
const getMovies = async () => {
  try {
    const response = await axios.get(url);
    console.log("response:-", response);
    return response.data;
  } catch (error) {
    console.log("error while getting movies:-", error);
  }
};

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <Container>
      <Row>
        {movies.map((movie) => {
          return (
            <Col className="mt-4" key={movie.show.id}>
              <Movie key={movie.show.id} movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesList;
