import axios from "axios";
const userURL = "https://6195285474c1bd00176c6be7.mockapi.io/profiles";
const users = {
  get: async () => {
    try {
      const response = await axios(userURL);
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  post: async (userData) => {
    axios
      .post(userURL, userData)
      .then((response) => response)
      .catch((err) => console.log(err));
  },
  delete: async (id) => {
    await axios
      .delete(`https://6195285474c1bd00176c6be7.mockapi.io/profiles/${id}`)
      .then((response) => {
        console.log(response.data);
      });
  },
};

export default users;
