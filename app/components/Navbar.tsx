import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} id="offacnvasbutton">
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header>

          <Offcanvas.Title className="offcanvasheader">
            Offcanvas
          </Offcanvas.Title>
          <Button onClick={handleClose}>Close</Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
