import myStore from './store.js';
import {signup, login, logout} from './actions/userActions.js';
// console.log('myStore' + '\n', myStore);
console.log('initialState'+'\n', myStore.getState());
// console.log('signup',signup);
// myStore.dispatch(signup('goji3456', 'passwordtest'));

myStore.dispatch(login('goji3456', 'passwordtest'));

function checkState() {
  console.log('checkState'+'\n', myStore.getState());
}

function signoff() {
  myStore.dispatch(logout());
}

setTimeout(function() { checkState(); }, 5000);
setTimeout(function() { signoff(); }, 6000);
setTimeout(function() { checkState(); }, 7000);
