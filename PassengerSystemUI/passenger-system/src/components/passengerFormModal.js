import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PassengerObj from "../data/passenger";
import { Context } from "../context/PassengerContext";
const PassengerFormModal = ({ passenger, isShown, onclose }) => {
  let passengerObj = PassengerObj();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState(5);
  const [citizenship, setCitizenship] = useState(2);
  const [documentNo, setDocumentNo] = useState("");
  const [documentType, setDocumentType] = useState(0);
  const [documentTypeLabel, setDocumentTypeLabel] = useState("Visa");
  useEffect(() => {
    if (passenger) {
      setName(passenger.name);
      setSurname(passenger.surname);
      setGender(passenger.gender);
      const initialCitizenship =
        passengerObj.methods.getCitizenshipByDocumentType(
          passenger.documentType
        );

      setCitizenship(initialCitizenship);
      setDocumentNo(passenger.documentNo);
      setDocumentType(passenger.documentType);
    } else {
      clearPassenger();
    }
  }, [passenger]);

  const clearPassenger = () => {
    setName("");
    setSurname("");
    setDocumentNo("");
    setCitizenship(0);
    setDocumentType(0);
    setGender(0);
  };

  const { addPassenger, updatePassenger } = useContext(Context);
  const handleClose = () => {
    onclose();
  };
  const saveChanges = () => {
    passengerObj.data.Name = name;
    passengerObj.data.Surname = surname;
    passengerObj.data.gender = gender;
    passengerObj.data.citizenship = citizenship;
    passengerObj.data.DocumentNo = documentNo;
    passengerObj.data.documentType =
      passengerObj.methods.getDocumentTypeByCitizenship(citizenship);
    if (passenger) {
      passengerObj.data.Id = passenger.id
      updatePassenger(passengerObj.data, (err) => window.alert(err));
    } else {
      addPassenger(passengerObj.data, (err) => window.alert(err));
    }
    onclose();
  };

  return (
    <div>
      <Modal show={isShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={(e) => setGender(parseInt(e.target.value))}
                value={gender}
              >
                <option value={0}>Male</option>
                <option value={1}>Female</option>
                <option value={2}>Nonbinary</option>
                <option value={3}>Intersex</option>
                <option value={4}>Other</option>
                <option value={5}>Choose Not To Answer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Citizenship</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setCitizenship(parseInt(e.target.value));
                  let label =
                    passengerObj.methods.getDocumentTypeStringByCitizenship(
                      e.target.value
                    );
                  setDocumentTypeLabel(label);
                }}
                value={citizenship}
              >
                <option value={0}>USA</option>
                <option value={1}>UK</option>
                <option value={2}>TR</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{documentTypeLabel}</Form.Label>
              <Form.Control
                type="text"
                placeholder={documentTypeLabel}
                onChange={(e) => setDocumentNo(e.target.value)}
                value={documentNo}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PassengerFormModal;
