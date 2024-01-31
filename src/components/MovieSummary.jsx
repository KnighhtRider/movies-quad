import React from "react";

const MovieSummary = (props) => {
  const { name, summary, img } = props;

  return (
    <div className="container text-center mt-5">
      <h3 className="mb-4 display-4 font-weight-bold text-uppercase text-center text-primary">
        {name}
      </h3>

      <img
        alt="movie"
        className="img-fluid rounded"
        src={img}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
      <div className="mt-4">
        <p className="lead" dangerouslySetInnerHTML={{ __html: summary }}></p>
      </div>
    </div>
  );
};

export default MovieSummary;
