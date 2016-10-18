import React from 'react';

export default ({ addItem, isAddingItem }) => {
  let input;
  return (
    <form onSubmit={ e => addItem(e, input.value)}>
      <input ref={ node => input = node } type="text" />
      <button type="submit" disabled={ isAddingItem }>Add Item</button>
    </form>
  );
};
