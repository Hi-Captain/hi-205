import * as actions from '../actions';
import { connect } from 'react-redux';
import Record from '../components/Record';

const mapStateToProps = (state) => ({
  record: state.record
});

const mapDispatchToProps = (dispatch) => ({
  goClearRec: () => {
    dispatch(actions.clearRec())
  }
})

const RecordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Record)

export default RecordContainer;
