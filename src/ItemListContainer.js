import { connect } from 'react-redux';
import ItemList from './ItemList';
import * as actions from './actions';

export default connect(
  (state, ownProps) => ({
    isAddingItem: state.isAddingItem,
    items: state.items
  }),
  (dispatch, ownProps) => ({
    deleteItem (itemName) {
      dispatch(actions.deleteItem(itemName))
    }
  })
)(ItemList);
