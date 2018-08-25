import { 
  FETCH_STARWARS_PENDING,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILED,
} from './constants';

const initialStateData = {
  listItems: {}
}

export const requestData = (state=initialStateData, action={}) => {
  switch(action.type) {
    case FETCH_STARWARS_PENDING:
      return { ...state, isPendingData: true }
    case FETCH_STARWARS_SUCCESS:
      return { ...state, isPendingData: false, data: action.payload }
    case FETCH_STARWARS_FAILED:
      return { ...state, isPendingData: false, error: action.payload }
    default: 
      return state;
  }
}