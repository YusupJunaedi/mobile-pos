import Axios from 'axios';

export const getDataUser = (id) => {
  const URI = `http://192.168.43.116:8000/auth/getdata/${id}`;
  return Axios.get(URI);
};

export const getAllMenu = () => {
  const URI = `http://192.168.43.116:8000/pagination?page=1&limit=10`;
  return Axios.get(URI);
};

export const getMoreMenu = (page) => {
  const URI = `http://192.168.43.116:8000/pagination?page=${page}&limit=10`;
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

export const authLogin = (email, password) => {
  const URI = `http://192.168.43.116:8000/auth/login`;
  return Axios.post(URI, {
    email: email,
    password: password,
  });
};

export const authRegister = (name, email, password) => {
  const URI = `http://192.168.43.116:8000/auth/register`;
  return Axios.post(URI, {
    username: name,
    email: email,
    password: password,
    level_id: 3,
  });
};
