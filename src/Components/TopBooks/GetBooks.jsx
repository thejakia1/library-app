import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import useBooks from "../../hooks/useBooks";
import NewRelease from "./NewRelease";
import dialStyle from "./dialStyle.css";
import bookListStyle from "./bookListStyle.css";
import { Roll, Fade } from "react-reveal";

function GetBooks() {
  const [books] = useBooks();
  const [limit, setLimit] = useState(5);

  const calculate = (value) => {
    if (value === "decrease" && limit > 1) {
      setLimit(limit - 1);
    } else if (value === "increase" && limit < 10) {
      setLimit(limit + 1);
    } else {
      alert("Only 1-10 entries available! You broke the limit");
    }
  };

  return (
    <div className="mt-4 mb-5">
      {books.length === 0 ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <Row xs={1} lg={2} md={2} className="container mx-auto">
          <Col>
            <Roll right>
              <h3 className="textStyle ms-3">Recent Released Books</h3>
            </Roll>
            <Fade left>
              <div className="listContainer">
                <ol className="listStyle">
                  {books.map((book) => (
                    <NewRelease key={book._id} book={[book]}></NewRelease>
                  ))}
                </ol>
              </div>
            </Fade>
          </Col>
          <Col>
            <Roll left>
              <h3 className="textStyle ms-3">Top Books</h3>
            </Roll>
            <Fade right>
              <div className="listContainer">
                <ol className="listStyle">
                  {books.map((book, i) => {
                    if (i >= limit) return;
                    return (
                      <NewRelease key={book._id} book={[book]}></NewRelease>
                    );
                  })}
                </ol>
              </div>
            </Fade>
            {/* <p>{test.length}</p> */}
            <div className="ms-3 fw-bold">
              Show{" "}
              <button
                onClick={() => calculate("decrease")}
                className="entreeBtn"
              >
                -
              </button>
              <input
                value={limit}
                type="text"
                className="inputBtn"
                disabled
              ></input>
              <button
                onClick={() => calculate("increase")}
                className="entreeBtn"
              >
                +
              </button>{" "}
              Entries
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default GetBooks;
