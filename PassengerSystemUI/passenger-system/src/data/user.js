import passengerSystem from "../api/passengerSystem";

function User() {
  return {
    data: {
      email: "",
      fullName: "",
      password: "",
      token: "",
    },
    methods: {
      async login(email, password, errCallback) {
        let result;
        await passengerSystem
          .post("/Login", {
            email,
            password,
          })
          .then((res) => res.data)
          .then((response) => result = response)
          .catch((err) => {
            console.log(err);
            errCallback(err);
          });
        return result;
      },
    },
  };
}

export default User;
