import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

export const login = (email, password) => {
  return axios.post("/login", { email, password }).then((res) => res.data);
};

export const getProducts = () => {
  return axios.get("/product").then((res) => res.data);
};

// API's public

export const listConvert = () => {
    return axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
    .then((response) => response.data)
}

export const listAllCrypto = () => {
    return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => response.data)
}

export const quoteCrypto = () => {
  axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR`)
}