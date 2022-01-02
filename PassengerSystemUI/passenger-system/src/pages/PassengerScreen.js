import React, { useEffect, useContext, useState } from "react";
import "../styles/passenger.css";

import { Table, Button } from "react-bootstrap";
import { BiTrash, BiRefresh } from "react-icons/bi";
import { Context } from "../context/PassengerContext";
import PassengerObj from "../data/passenger";
import PassengerFormModal from "../components/passengerFormModal";
const Passenger = () => {
  const { state, deletePassenger, getPassengers } = useContext(Context);
  useEffect(() => {
    getPassengers();
  }, []);
  let passengerObj = PassengerObj();
  var keys = Object.keys(passengerObj.data);
  const [openForm, setOpenForm] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState();
  const setpassengerValue = (value, key) => {
    if (key === "gender") {
      return passengerObj.methods.getGenderString(value);
    } else if (key === "documentType") {
      return passengerObj.methods.getDocumentTypeString(value);
    } else {
      return value;
    }
  };
  const handleUpdate = (id) => {
    let passenger = state.find((x) => x.id === id);
    setSelectedPassenger(passenger);
    setOpenForm(true);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      deletePassenger(id);
    }
  };
  const handleNewPassengerClick = () => {
    setSelectedPassenger();
    setOpenForm(true);
  };
  return (
    <div className="mainContent">
      <PassengerFormModal
        isShown={openForm}
        onclose={() => {
          setSelectedPassenger();
          setOpenForm(false);
        }}
        passenger={selectedPassenger}
      />
      <div className="flexContent">
        <h2 style={{ textAlign: "center" }}>Passenger List</h2>
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <Button variant="primary" onClick={() => handleNewPassengerClick()}>
            +
          </Button>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                {keys.map((item, index) => {
                  if (index === keys.length - 1) return;
                  if (index === 0) {
                    return <th>Operation</th>;
                  }
                  return <th>{item.toUpperCase()}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {state.map((item) => {
                var itemObj = Object.keys(item);
                return (
                  <tr key={item["id"]}>
                    {itemObj.map((key, index) => {
                      if (index === 0) {
                        return (
                          <td
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-around",
                            }}
                          >
                            <Button
                              variant="warning"
                              onClick={() => handleUpdate(item["id"])}
                            >
                              <BiRefresh />{" "}
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(item["id"])}
                            >
                              <BiTrash />
                            </Button>
                          </td>
                        );
                      }
                      return <td>{setpassengerValue(item[key], key)}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Passenger;
