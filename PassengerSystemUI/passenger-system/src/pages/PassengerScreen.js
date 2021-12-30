import React from "react";
import "../styles/passenger.css";
import MUIDataTable  from 'mui-datatables'
function Passenger() {
  return (
    <div className="mainContent">
      <div className="flexContent">
        <h2 style={{textAlign:"center"}}>Passenger List</h2>
        <div>
            <MUIDataTable  />
        </div>
      </div>
    </div>
  );
}

export default Passenger;
