import axios from "axios";

const useAxios = () => {
  const skillURL = "https://6195285474c1bd00176c6be7.mockapi.io/skills";

  /* TODO Ovde treba iskoristiti react state i optimizovati hook
  https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj */

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
