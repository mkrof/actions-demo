import findIndex from 'lodash/findIndex';
import * as actions from './actions';

const initialState = {
  isAddingItem: false,
  items: [
    'item one',
    'item two',
    'item three'
  ]
};

function onDeleteItem (state, action) {
  const index = findIndex(state.items, item => item === action.payload);
  if (index === -1) return state;
  return Object.assign({}, state, { 
    items: [
      ...state.items.slice(0, index),
      ...state.items.slice(index + 1)
    ]
  });
}

function onAddItem (state, action) {
  if (action.meta && action.meta.isPending) {
    return Object.assign({}, state, { isAddingItem: true });
  } else {
    return Object.assign({}, state, {
      isAddingItem: false,
      items: [...state.items, action.payload]
    });
  }
}

function itemListReducer (state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case actions.ADD_ITEM:
      return onAddItem(state, action);
    case actions.DELETE_ITEM:
      return onDeleteItem(state, action);
    default:
      return state;
  }
}

export {
  itemListReducer
};
