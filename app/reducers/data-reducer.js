import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ALL_DATA:
      return {
        ...state,
        all: action.data
      };
    case types.ADD_FORM:
      console.log('attempting to add', action.newForm);
      return {
        ...state,
        all: [
          action.newForm,
          ...state.all
        ]
      };
    case types.EDIT_FORM:
      console.log('attempting to edit', action.newForm);
      var index = state.all.findIndex(function(campaign){
        return campaign.id === action.newForm.id
      })
      return {
        ...state,
        all: [
          action.newForm,
          ...state.all.slice(0, index),
          ...state.all.slice(index+1)
        ]
      };
    default:
      return state;
  }
};
