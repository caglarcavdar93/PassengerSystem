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
    },
  };
}

export default PassengerObj;
