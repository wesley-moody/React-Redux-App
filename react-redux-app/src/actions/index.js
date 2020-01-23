import axios from 'axios';

export const fetchActivity = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_ACTIVITY_START' });
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      
    })
  }
}