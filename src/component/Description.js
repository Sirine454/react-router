import React from "react";
import { Card } from "react-bootstrap";
import "./Description.css";

//Description Component

const Description = ({ movieList, match, history }) => {
  let movies = movieList.find((movie) => movie.id === match.params.id);
  return (
    <div className="description">
      <button
        style={{
          border: "none",
          borderRadius: "5px",
          backgroundColor: "blue",
          color: "white"
        }}
        onClick={() => history.push("/")}
      >
        Home
      </button>
      <h1 className="desc-title" style={{ fontFamily: "Sans serif" }}>
        {" "}
        Description <span>  </span>{" "}
      </h1>

      <Card
        style={{
          width: "450px",
          height: "600px",
          borderStyle: "outset",
          textALign: "center",
          boxShadow: " 1px 2px 5px 1px white",
          margin: "50px",
          padding: "10px"
        }}
      >
        <Card.Text>
          <h2>{movies.title}</h2>
        </Card.Text>
        <Card.Text>{movies.text}</Card.Text>
        <iframe
          style={{ width: "430px", height: "600px", borderRadius: "5px" }}
          className="video"
          title="Youtube player"
          src={movies.trailer}
        ></iframe>
      </Card>
    </div>
  );
};

export default Description;