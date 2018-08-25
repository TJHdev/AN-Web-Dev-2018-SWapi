import { 
  FETCH_STARWARS_PENDING,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILED,
} from './constants';

export const requestStarwarsData = (button, page='1') => async (dispatch) => {
  dispatch({
    type: FETCH_STARWARS_PENDING,
    page: page
  });
  try {
    const response = await fetch(`https://swapi.co/api/${button}/?format=json&page=${page}`);
    const data = await response.json();
    console.log('response data: ', data);
    dispatch({ type: FETCH_STARWARS_SUCCESS, payload: data });
  } catch (err) {
    console.log('Oooops, something went wrong: ', err);
    dispatch({ type: FETCH_STARWARS_FAILED, payload: err });
  }
}