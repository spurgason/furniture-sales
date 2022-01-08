import { createStore } from 'redux';
import reducers from '../utils/reducers';

const store = createStore(reducers);

export default store;