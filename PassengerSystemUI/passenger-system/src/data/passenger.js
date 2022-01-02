import passengerSystem from "../api/passengerSystem";
function PassengerObj() {
  return {
    data: {
      Id: "",
      Name: "",
      Surname: "",
      gender: 0,
      DocumentNo: "",
      documentType: 0,
      issueDate: null,
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
      getDocumentTypeStringByCitizenship(citizenshipNum) {
        citizenshipNum = parseInt(citizenshipNum);
        let str = "";
        switch (citizenshipNum) {
          case 0:
            str = "Passaport";
            break;
          case 1:
            str = "Travel Document";
            break;
          case 2:
            str = "Visa";
            break;
          default:
            str = "Visa";
        }
        return str;
      },
      getDocumentTypeByCitizenship(citizenshipNum) {
        switch (citizenshipNum) {
          case 0:
            return 0;
          case 1:
            return 2;
          case 2:
            return 1;
          default:
            return 1;
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
      getCitizenshipByDocumentType(documentTypeNum) {
        switch (documentTypeNum) {
          case 0:
            return 0;
          case 1:
            return 2;
          case 2:
            return 1;
          default:
            return 2;
        }
      },
      async getPassengers() {
        let passengerArr = [];
        await passengerSystem
          .get("/GetPassengers")
          .then((res) => res.data)
          .then((response) => passengerArr = response)
          .catch((err) => console.log(err));
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
          .then((res) => result = res)
          .catch((err) => result = 500);
        if (result === 200) {
          return true;
        } else {
          return false;
        }
      },
      async updatePassenger(passenger, errorCallBack) {
        if (!passenger) return;
        let updatedPassenger;
        await passengerSystem
          .put("/UpdatePassenger", passenger)
          .then((response) => response.data)
          .then((data) => updatedPassenger = data)
          .catch((err) => {
            errorCallBack(err.response.data.Message);
          });
        return updatedPassenger;
      },
      async addPassenger(passenger, errorCallBack) {
        let addPassenger;
        await passengerSystem
          .post("/AddPassenger", passenger)
          .then((response) => response.data)
          .then((data) => addPassenger = data)
          .catch((err) => {
            errorCallBack(err.response.data.Message);
          });
        return addPassenger;
      },
    },
  };
}

export default PassengerObj;
