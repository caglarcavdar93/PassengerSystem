import passengerSystem from "../api/passengerSystem";
function PassengerObj() {
  return {
    data: {
      id: "",
      name: "",
      surName: "",
      gender: 0,
      documentNo: "",
      documentType: 0,
      issueDate: "",
      citizenship: 0,
    },
    methods: {
      getGenderString(genderNum) {
        switch (genderNum) {
          case 0:
            return "Male";
          case 1:
            return "Female";
          case 2:
            return "Nonbinary";
          case 3:
            return "Intersex";
          case 4:
            return "Other";
          case 5:
            return "Choose Not To Answer";
          default:
            return "Choose Not To Answer";
        }
      },
      getDocumentTypeString(documentTypeNum) {
        switch (documentTypeNum) {
          case 0:
            return "Passaport";
          case 1:
            return "Visa";
          case 2:
            return "Travel Document";
          default:
            return "Visa";
        }
      },
      getDocumentTypeByCitizenship(citizenshipNum){
        switch (citizenshipNum) {
          case 0:
            return "Passaport";
          case 1:
            return "Travel Document";
          case 2:
            return "Visa";
          default:
            return "Visa";
        }
      },
      getCitizenshipString(citizenshipNum) {
        switch (citizenshipNum) {
          case 0:
            return "USA";
          case 1:
            return "UK";
          case 2:
            return "TR";
          default:
            return "TR";
        }
      },
      getCitizenshipStringByDocumentType(documentTypeNum){
        switch (documentTypeNum) {
          case 0:
            return "USA";
          case 1:
            return "TR";
          case 2:
            return "Uk";
          default:
            return "TR";
        }
      },
      async getPassengers() {
        let passengerArr = [];
        await passengerSystem
          .get("/GetPassengers")
          .then((res) => res.data)
          .then((response) => (passengerArr = response))
          .catch((err) => console.log(err));
        console.log(passengerArr);
        return passengerArr;
      },
      async deletePassenger(id) {
        if (!id) return;
        let result = 0;
        await passengerSystem
          .delete("/DeletePassenger", {
            data: {
              id: id,
            },
          })
          .then((response) => response.status)
          .then((res) => (result = res))
          .catch((err) => (result = 500));
        if (result === 200) {
          return true;
        } else {
          return false;
        }
      },
      async updatePassenger(passenger,errorCallBack) {
        if (!passenger) return;
        let updatedPassenger;
        await passengerSystem.put("/UpdatePassenger", {
          data: passenger,
        }).then(response => response.data).then(data => updatedPassenger = data).catch(err => errorCallBack(err));
        return updatedPassenger;
      },
      async addPassenger(passenger,errorCallBack){
        let addPassenger;
        console.log(passenger)
        await passengerSystem.post("/AddPassenger",{
          data: passenger
        }).then(response=> response.data).then(data => addPassenger=data).catch(err => errorCallBack(err));
        return addPassenger;
      }
    },
  };
}

export default PassengerObj;
