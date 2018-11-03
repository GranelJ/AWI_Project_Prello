import { ADD_USER } from '../actions/UserActions';
import { add } from '../common/helpers';

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
        console.log(state)
      return add(state, action);
    default:
      return state;
  }
};

export default users;
