import axios from "axios";
import mockdata from "./data.js";


async function getMockData(id) {
    let userId = parseInt(id);
    const userData = mockdata.USER_MAIN_DATA.find(user => user.id === userId);
    const userActivity = mockdata.USER_ACTIVITY.find(user => user.userId === userId);
    return {userData, userActivity};
}


export default getMockData;