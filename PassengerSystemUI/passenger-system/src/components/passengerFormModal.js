import React, { useState, useContext,useEffect } from "react";
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
  useEffect(() => {
   if(passenger){
    setName(passenger.name);
    setSurname(passenger.surName);
    setGender(passenger.gender);
    setCitizenship( passengerObj.methods.getCitizenshipStringByDocumentType(
      passenger.DocumentType
    ));
    setDocumentNo(passenger.documentNo);
    setDocumentType(passengerObj.methods.getDocumentTypeByCitizenship(citizenship))
   }
  }, [])
  const { addPassenger, updatePassengers } = useContext(Context);
  const handleClose = () => {
    onclose();
  };
  const saveChanges = () => {
    if (passenger) {
      passenger.name = name;
      passenger.surName = surname;
      passenger.gender = gender;
      passenger.citizenship = citizenship;
      passenger.documentNo = documentNo;
      passenger.getDocumentType =
      passengerObj.methods.getDocumentTypeByCitizenship(citizenship);
      updatePassengers(passenger, (err) => window.alert(err));
    } else {
      passengerObj.data.name = name;
      passengerObj.data.surName = surname;
      passengerObj.data.gender = gender;
      passengerObj.data.citizenship = citizenship;
      passengerObj.data.documentNo = documentNo;
      passengerObj.data.getDocumentType =
      passengerObj.methods.getDocumentTypeByCitizenship(citizenship);
      console.log(passengerObj.data);
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
                onChange={(e) => setName(e.target.Value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                onChange={(e) => setSurname(e.target.Value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                onChange={(e) => setGender(e.target.Value)}
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
                onChange={(e) => setCitizenship(e.target.Value)}
              >
                <option value={0}>USA</option>
                <option value={1}>UK</option>
                <option value={2}>TR</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                {passengerObj.methods.getDocumentTypeByCitizenship(citizenship)}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={passengerObj.methods.getDocumentTypeByCitizenship(
                  citizenship
                )}
                onChange={(e) => setDocumentNo(e.target.Value)}
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
