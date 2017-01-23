import * as types from './action-types';

export const loadAllData = (data) => {
  return {
    type: types.LOAD_ALL_DATA,
    data
  };
}

export const addForm = (newForm) => {
  return {
    type: types.ADD_FORM,
    newForm
  }
}

export const editForm = (newForm) => {
  return {
    type: types.EDIT_FORM,
    newForm
  }
}

export default {
  loadAllData,
  addForm,
  editForm
}
