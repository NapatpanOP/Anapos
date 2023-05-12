import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopupSanook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 1</button>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 2</button>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 3</button>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 4</button>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 5</button>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 6</button>
      <button onClick={handleShow} type="button" class="btn btn-outline-dark">POSITION 7</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Position selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>If sure to select this position, press Save and press Next.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary btn-success" onClick={handleClose}>
            Save
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <a href="/next-page" style={{ color: 'white', textDecoration: 'none' }}>
              Next
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupSanook;