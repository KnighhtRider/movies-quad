import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import defaultImage1 from "../assets/defaultImage1.jpg"; 

const Movie = (props) => {
  const navigate = useNavigate(); 

  const { movie } = props;

  function handleClick() { 
    // redirect to the MoviesBookingPage component
    //  and pass the movie
    let movieId = movie.show.id;
    navigate(`/bookmovie/${movieId}`, { state: { movie } });
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {movie.show.image && movie.show.image.original ? (
          <Card.Img variant="top" src={movie.show.image.original} />
        ) : <Card.Img variant="top" src={defaultImage1} />
      }
        <Card.Body>
          <Card.Title>{movie.show.name}</Card.Title>
          <Card.Text>
            Language: {movie.show.language}
            <br />
            Status: {movie.show.status}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Show More
          </Button>
        </Card.Body> 
      </Card>
    </>
  );
};

export default Movie;
