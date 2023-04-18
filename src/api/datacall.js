import axios from "axios";
import mockdata from "./data.js";

async function getMockData(id) {
    let userId = parseInt(id);
    const userMainData = mockdata.USER_MAIN_DATA.find(user => user.id === userId);
    return userMainData;
}

export default getMockData;