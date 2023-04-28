import axios from "axios";
import mockdata from "./data.js";

async function getMockData(id) {
  const userId = parseInt(id);
  const userData = mockdata.USER_MAIN_DATA.find((user) => user.id === userId);
  const userActivity = mockdata.USER_ACTIVITY.find(
    (user) => user.userId === userId
  );
  const userPerformance = mockdata.USER_PERFORMANCE.find(
    (user) => user.userId === userId
  );
  return { userData, userActivity, userPerformance };
}
async function getApiData(id) {
  const baseUrl = "http://localhost:3000/user/";
  try {
    const userId = parseInt(id);
    const userData = await axios.get(baseUrl + userId).then((response) => {
      return response.data.data;
    });
    const userActivity = await axios
      .get(baseUrl + userId + "/activity")
      .then((response) => {
        return response.data.data;
      });
    return { userData, userActivity };
  } catch (error) {
    console.log("Le serveur ne répond pas " + error);
  }
}

export { getApiData, getMockData };
