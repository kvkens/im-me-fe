import axios from "axios";

const GET_USER_URL = "https://mock.yonyoucloud.com/mock/56/nc/api/user";

export function getUser() {
    return axios.get(GET_USER_URL);
}