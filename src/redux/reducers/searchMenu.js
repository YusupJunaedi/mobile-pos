import actionType from '../actions/actionType';

let initialState = {
  data: [],
  error: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const searchMenu = (prevState = initialState, {type, payload}) => {
  switch (type) {
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
    case actionType.clearSearch:
      return {
        ...prevState,
        data: [],
      };
    default:
      return prevState;
  }
};

export default searchMenu;
