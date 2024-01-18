import React from "react";
import { Button, Modal } from "react-bootstrap";
import HomeBanner from "../HomeBanner";

const HomeModal = ({show, handleClose}) => {

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false} size="lg">
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
            <HomeBanner />
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Get started
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default HomeModal;
