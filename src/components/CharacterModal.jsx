import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getDate } from "../utils/helpers";

function CharacterModal({ show, handleClose, character }) {
  const { name, height, mass, created, films, birth_year } = character;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="Character Details Modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Text>
          <span>Height: </span> {height} meters
        </Card.Text>
        <Card.Text>
          <span>Mass: </span> {mass} Kg
        </Card.Text>
        <Card.Text>
          <span>Date Added: </span> {getDate(created)}
        </Card.Text>
        <Card.Text>
          <span>Number of films: </span> {films?.length}
        </Card.Text>
        <Card.Text>
          <span>Birth Year: </span> {birth_year}
        </Card.Text>
      </Modal.Body>
      <Modal.Footer>
        <Button
          aria-label="Close Modal"
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CharacterModal;
