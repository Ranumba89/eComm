import { Button, Modal, ListGroup } from "react-bootstrap";
import { useState } from "react";

const Modals = ({ ingredientLines, label }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button onClick={handleShow}>recipe</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {ingredientLines.map((ingLine) => {
              return <ListGroup.Item>{ingLine}</ListGroup.Item>;
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );

  //  render(<Modals />);
};
export default Modals;
