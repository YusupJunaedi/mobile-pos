import Axios from 'axios';

export const getAllMenu = () => {
  const URI = `http://192.168.43.116:8000/pagination?page=1&limit=9`;
  return Axios.get(URI);
};

export const getAllTransaksi = () => {
  const URI = `http://192.168.43.116:8000/transaksi`;
  return Axios.get(URI);
};

export const getAllCategory = () => {
  const URI = `http://192.168.43.116:8000/categorys`;
  return Axios.get(URI);
};

export const searchMenu = (name, by) => {
  const URI = `http://192.168.43.116:8000/search?name=${name}&by=${by}`;
  return Axios.get(URI);
};

export const authLogin = (name, password) => {
  const URI = `http://192.168.43.116:8000/auth/login`;
  return Axios.post(URI, {
    username: name,
    password: password,
  });
};