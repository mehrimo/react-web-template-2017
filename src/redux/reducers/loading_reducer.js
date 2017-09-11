import {
  SET_LOADING,
} from '../actions/types'

const INITIAL_STATE = {
  app: true,
  example_data: false,
};

const INITIAL_ACTION = { type: '' };

export default function(state=INITIAL_STATE, action=INITIAL_ACTION) {

  switch(action.type){

    case SET_LOADING:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state
  }

}
