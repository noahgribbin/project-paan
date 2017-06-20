import myStore from './store.js';
import {signup, login, logout} from './actions/userActions.js';
// console.log('myStore' + '\n', myStore);
console.log('initialState'+'\n', myStore.getState());
// console.log('signup',signup);
myStore.dispatch(signup('george1234', 'passwordtest'));
console.log('state2'+'\n', myStore.getState());
