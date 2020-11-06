import axios from "axios";

axios.defaults.baseURL = 'https://pamex-api.herokuapp.com/'
axios.defaults.withCredentials = true;

export const login = ({email, password}) => {
  return axios.post("/login", { email, password }).then((res) => res.data);
};

export const logout = () => {
  return axios.post("/logout").then((res) => res.data);
};

export const signup = (user) => {
  return axios.post("/users", user).then((res) => {
   return res.data
  });
};

export const getUser = (id) => {
  return axios.get(`/users/${id}`).then((res) => res.data)
}

export const updateUser = (id, user) => {
  return axios.patch(`/users/${id}`, user).then((res) => res.data)
}

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

export const getExhanges= () => {
  return axios.get('/exchanges')
  .then((response) => response.data)
}
