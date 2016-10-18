import React from 'react';
import uuid from 'uuid';

export default ({ items, deleteItem, isAddingItem }) => (
  <ul>
    {items.map(item => 
      <li key={ uuid.v4() }>
        { item }
        &nbsp;<button onClick={ () => deleteItem(item) } disabled={ isAddingItem }>&times;</button>
      </li>
    )} 
  </ul>
);
