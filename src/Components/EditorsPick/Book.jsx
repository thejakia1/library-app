import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import useCollapse from "react-collapsed";

const Book = (props) => {
  const [show, setShow] = useState(false);
  const { _id, image, title, price } = props.book[0];
  const { index } = props.book[1];
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  // console.log(props);

  const handelClick = () => {
    setShow(!show);
  };

  return (
    <div className="mt-3">
      <Col className="h-100 ">
        <Card style={{ width: "100%", height: "100%" }}>
          <div className="collapsible">
            <div className="header" {...getToggleProps()}>
              {isExpanded ? (
                <div>
                  <Card.Img variant="top" src={image} onClick={handelClick} />
                </div>
              ) : (
                <Card.Img variant="top" src={image} onClick={handelClick} />
              )}
            </div>
            <div {...getCollapseProps()}>
              <div className="content">
                <Card.Body>
                  <Card.Text
                    className={show ? "showSection show" : "showSection"}
                  >
                    <Card.Title>{title}</Card.Title>
                    <span>Price: {price}</span>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Book;
