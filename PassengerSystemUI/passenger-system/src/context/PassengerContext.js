import dataContext from "./dataContext";
import PassengerObj from "../data/passenger";

const passengerReducer = (state, action) => {
  switch (action.type) {
    case "getPassengers":
      return action.payload; //{ ...state, state: action.payload };
    case "deletePassenger":
      return state.filter((passenger) => passenger.id !== action.payload);
    case "updatePassenger":
      return state.map((passenger) => {
        if (passenger.id === action.payload.id) {
          return action.payload;
        } else {
          return passenger;
        }
      });
    case "addPassenger":
      return { ...state, state: [...state, action.payload] };
    default:
      return state;
  }
};

const getPassengers = (dispath) => async () => {
  const response = await PassengerObj().methods.getPassengers();
  dispath({ type: "getPassengers", payload: response });
};
const deletePassenger = (dispath) => async (id) => {
  console.log(id);
  let result = await PassengerObj().methods.deletePassenger(id);
  if (result) {
    dispath({ type: "deletePassenger", payload: id });
  }
};
const updatePassenger = (dispath) => async (passenger, callback) => {
  const response = await PassengerObj().methods.updatePassenger(
    passenger,
    callback
  );
  if (response) dispath({ type: "updatePassenger", payload: response });
};
const addPassenger = (dispath) => async (passenger, callback) => {
  const response = await PassengerObj().methods.addPassenger(
    passenger,
    callback
  );
  if (response) dispath({ type: "addPassenger", payload: response });
};
export const { Provider, Context } = dataContext(
  passengerReducer,
  { getPassengers, updatePassenger, deletePassenger, addPassenger },
  []
);
