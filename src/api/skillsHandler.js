import axios from "axios";
const skillURL = "https://6195285474c1bd00176c6be7.mockapi.io/skills";
const skills = {
  get: async () => {
    try {
      const response = await axios(skillURL);
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  post: async (skillData) => {
    axios
      .post(skillURL, skillData)
      .then((response) => response)
      .catch((err) => console.log(err));
  },
  delete: async (id) => {
    await axios
      .delete(`https://6195285474c1bd00176c6be7.mockapi.io/skills/${id}`)
      .then((response) => {
        console.log(response.data);
      });
  },
};

export default skills;
