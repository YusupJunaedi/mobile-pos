import actionType from '../actions/actionType';

let initialState = {
  data: [],
  editMenu: [],
  error: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const menuReducer = (prevState = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getAllMenu + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getAllMenu + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.getAllMenu + '_FULFILLED':
      let newData = payload.data.data.map((item) => {
        const dataMenu = {
          id_product: item.id_product,
          image: item.image,
          name_category: item.name_category,
          name_product: item.name_product,
          price_product: item.price_product,
          category_id: item.category_id,
          checked: false,
        };
        return dataMenu;
      });

      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: newData,
        isRejected: false,
      };
    case actionType.getMoreMenu + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getMoreMenu + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.getMoreMenu + '_FULFILLED':
      let newData1 = payload.data.data.map((item) => {
        const dataMenu = {
          id_product: item.id_product,
          image: item.image,
          name_category: item.name_category,
          name_product: item.name_product,
          price_product: item.price_product,
          category_id: item.category_id,
          checked: false,
        };
        return dataMenu;
      });

      const arr = [...prevState.data];
      const newArr = arr.concat(newData1);

      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: newArr,
        isRejected: false,
      };
    case actionType.editMenu:
      return {
        ...prevState,
        editMenu: payload,
      };
    case actionType.searchMenu + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.searchMenu + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.searchMenu + '_FULFILLED':
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };
    case actionType.checkedMenu:
      let arrData = [...prevState.data];
      arrData[payload] = {
        ...arrData[payload],
        checked: true,
      };
      return {
        ...prevState,
        data: arrData,
      };
    case actionType.unCheckedMenu:
      arrData[payload] = {
        ...arrData[payload],
        checked: false,
      };
      return {
        ...prevState,
        data: arrData,
      };
    case actionType.clearMenu:
      return {
        ...prevState,
        data: [],
      };
    default:
      return prevState;
  }
};

export default menuReducer;
