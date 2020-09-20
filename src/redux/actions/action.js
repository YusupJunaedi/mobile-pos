import {
  getAllMenu,
  searchMenu,
  getAllCategory,
  authLogin,
  getAllTransaksi,
  authRegister,
  getMoreMenu,
  getDataUser,
  filterMenu,
} from '../../utils/http';
import actionType from './actionType';

export const filterMenuCreator = (by, order) => {
  return {
    type: actionType.filterMenu,
    payload: filterMenu(by, order),
  };
};

export const getDataUserCreator = (id) => {
  return {
    type: actionType.getDataUser,
    payload: getDataUser(id),
  };
};

export const getAllMenuCreator = () => {
  return {
    type: actionType.getAllMenu,
    payload: getAllMenu(),
  };
};

export const getMoreMenuCreator = (page) => {
  return {
    type: actionType.getMoreMenu,
    payload: getMoreMenu(page),
  };
};

export const dataEditMenuCreator = (data) => {
  return {
    type: actionType.editMenu,
    payload: data,
  };
};

export const clearMenuCreator = () => {
  return {
    type: actionType.clearMenu,
  };
};

export const searchMenuCreator = (name, by) => {
  return {
    type: actionType.searchMenu,
    payload: searchMenu(name, by),
  };
};

export const getAllCategoryCreator = () => {
  return {
    type: actionType.getAllCategory,
    payload: getAllCategory(),
  };
};

export const addToCartCreator = (data) => {
  return {
    type: actionType.addToCart,
    payload: data,
  };
};

export const deleteCartCreator = (data) => {
  console.log(data);
  return {
    type: actionType.deleteCart,
    payload: data,
  };
};

export const deleteALLCartCreator = () => {
  return {
    type: actionType.deleteAllCart,
  };
};

export const updateInvoiceCreator = () => {
  return {
    type: actionType.updateInvoice,
  };
};

export const plusQtyCreator = (index) => {
  return {
    type: actionType.plusQty,
    payload: index,
  };
};

export const minusQtyCreator = (index) => {
  return {
    type: actionType.minusQty,
    payload: index,
  };
};

export const authLoginCreator = (name, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(name, password),
  };
};

export const authRegisterCreator = (name, email, password) => {
  return {
    type: actionType.authLogin,
    payload: authRegister(name, email, password),
  };
};

export const checkedMenuCreator = (index) => {
  return {
    type: actionType.checkedMenu,
    payload: index,
  };
};

export const uncheckedMenuCreator = (index) => {
  return {
    type: actionType.checkedMenu,
    payload: index,
  };
};

export const getAllTransaksiCreator = () => {
  return {
    type: actionType.getAllTransaksi,
    payload: getAllTransaksi(),
  };
};

export const logoutCreator = () => {
  return {
    type: actionType.logout,
  };
};
