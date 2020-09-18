import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
// import thunk from "redux-thunk";
import rpm from 'redux-promise-middleware';

import indexReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, indexReducer);

const enhancers = applyMiddleware(rpm);

// let store = createStore(persistedReducer, enhancers);
// let persistor = persistStore(store);
// export {store, persistor};

export default () => {
  let store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

// const storeRedux = createStore(indexReducer, enhancers);

// export default storeRedux;
