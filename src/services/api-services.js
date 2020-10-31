import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

export const login = (email, password) => {
  return axios.post("/login", { email, password }).then((res) => res.data);
};

export const logout = () => {
  return axios.get("/logout").then((res) => res.data);
};

export const signin = () => {
  return axios.get("/signin").then((res) => res.data);
};

// API's public

export const listConvert = () => {
    return axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
    .then((response) => response.data)
}

export const listAllCrypto = () => {
    return axios.get('/currencies')
    .then((response) => response.data)
}

export const quoteCrypto = () => {
  axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR`)
}

export const getCoinDay = () => {
  return axios.get('/coin-day')
  .then((response) => response.data)
}