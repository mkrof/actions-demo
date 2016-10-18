import { connect } from 'react-redux';
import AddItem from './AddItem';
import * as actions from './actions';

export default connect(
  state => ({
    isAddingItem: state.isAddingItem
  }),
  dispatch => ({
    addItem (e, value) {
      e.preventDefault();
      dispatch(actions.addItem(value, true));
      setTimeout(() => dispatch(actions.addItem(value)), 500);
    }
  })
)(AddItem);
