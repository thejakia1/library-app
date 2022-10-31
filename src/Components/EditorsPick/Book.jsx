import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Book = (props) => {
  const [show, setShow] = useState(false);
  const { _id, image, title, price } = props.book[0];
  const { index } = props.book[1];

  // console.log(props);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-3">
      <Col className="h-100 ">
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" src={image} onClick={handleShow} />
          <Button className="mx-5 mb-2" variant="success" onClick={handleShow}>
            See Details
          </Button>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="fw-500"><b>Price:</b> {price}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </div>
  );
};

export default Book;
