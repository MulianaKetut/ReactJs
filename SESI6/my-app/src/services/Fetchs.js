import axios from "axios";

const api_url = "https://jsonplaceholder.typicode.com";

class Fetchs {
  async getData(target) {
    const url_target = api_url + target;
    return axios.get(url_target);
  }

  postData(target, jsonData) {
    const url_target = api_url + target;
    return axios.post(url_target, jsonData);
  }

  deleteData(target, jsonData) {
    const url_target = api_url + target;
    return axios.post(url_target, jsonData);
  }

  putData(target, jsonData) {
    const url_target = api_url + target;
    return axios.put(url_target, jsonData);
  }
}

export default new Fetchs();
