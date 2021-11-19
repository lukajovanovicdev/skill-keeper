import axios from "axios";

const useAxios = () => {
  const skillURL = "https://6195285474c1bd00176c6be7.mockapi.io/skills";

  // const getSkills = () => {
  //   axios
  //     .get(skillURL)
  //     .then((response) => response.data)
  //     .catch((err) => console.log(err));
  // };
  const getSkillsAsync = async () => {
    try {
      const response = await axios(skillURL);
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const createSkill = (skillData) => {
    axios
      .post(skillURL, skillData)
      .then((response) => response)
      .catch((err) => console.log(err));
  };

  return { createSkill, getSkillsAsync };
};
export default useAxios;
