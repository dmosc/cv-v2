const axios = require("axios");

const backendClient = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
});

module.exports = {
  backendClient
}
