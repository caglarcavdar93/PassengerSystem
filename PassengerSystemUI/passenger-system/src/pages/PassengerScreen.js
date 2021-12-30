import React, { useEffect, useState } from "react";
import "../styles/passenger.css";
import passengerSystem from "../api/passengerSystem";
import PassengerObj from "../data/passenger";
import { Table, Button } from "react-bootstrap";
import { BiTrash, BiRefresh } from "react-icons/bi";
const Passenger = () => {
  const [passengers, setPassengers] = useState([]);
  useEffect(() => {
    passengerSystem
      .get("/GetPassengers")
      .then((res) => res.data)
      .then((response) => setPassengers(response));
  }, []);
  var passengerObj = PassengerObj();
  var keys = Object.keys(passengerObj.data);

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
    console.log(id);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleNewPassengerClick = ()=>{

  }
  return (
    <div className="mainContent">
      <div className="flexContent">
        <h2 style={{ textAlign: "center" }}>Passenger List</h2>
        <div style={{textAlign:"right", marginBottom:"20px"}}>
            <Button variant="primary" onClick={()=> handleNewPassengerClick()}>+</Button>
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
              {passengers.map((item) => {
                var itemObj = Object.keys(item);
                return (
                  <tr key={item["id"]}>
                    {itemObj.map((key, index) => {
                      if (index === 0) {
                        return (
                          <div
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
                          </div>
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
