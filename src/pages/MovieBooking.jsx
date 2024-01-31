import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import MovieSummary from "../components/MovieSummary";

const MovieBooking = () => {
  const { state } = useLocation();
  console.log("Movie data from useLocation", state);
  const { movie } = state;

  return (
    <Container>
      <div className="">
        <div>
          <MovieSummary
            name={movie.show.name}
            summary={movie.show.summary}
            img={movie.show.image.original}
          />
        </div>
        <div className="">
          <BookingForm name={movie.show.name} />
        </div>
      </div>
    </Container>
  );
};

export default MovieBooking;
