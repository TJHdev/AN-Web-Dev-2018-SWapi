import { 
  FETCH_STARWARS_PENDING,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILED,
  UPDATE_ITEM_SELECTED
} from './constants';

export const requestStarwarsData = (category, page='1', direction) => async (dispatch) => {
  dispatch({
    type: FETCH_STARWARS_PENDING
  });
  try {
    if (direction === 'next') {
      page = Number(page) + 1;
    } else if (direction === 'prev') {
      page = Number(page) - 1;
    }
    const response = await fetch(`https://swapi.co/api/${category}/?format=json&page=${page}`);
    const data = await response.json();
    console.log('response data: ', data);
    dispatch({ type: FETCH_STARWARS_SUCCESS, payload: data, category: category, page: page });
  } catch (err) {
    console.log('Oooops, something went wrong: ', err);
    dispatch({ type: FETCH_STARWARS_FAILED, payload: err });
  }
}

export const updateItemSelected = (itemNumber = 0) => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM_SELECTED,
    itemNumber: Number(itemNumber)
  })
}