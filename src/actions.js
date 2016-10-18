import { createAction } from 'redux-actions';

export const DELETE_ITEM = 'app:deleteitem';
export const ADD_ITEM = 'app:additem';

export const addItem = createAction(ADD_ITEM, (item, isPending) => item, (item, isPending) => ({isPending}));
export const deleteItem = createAction(DELETE_ITEM);

// export const addItem = (itemName) => ({
//   type: ADD_ITEM,
//   payload: itemName
// });

// export const deleteItem = (itemName) => ({
//   type: DELETE_ITEM,
//   payload: itemName
// });
//
