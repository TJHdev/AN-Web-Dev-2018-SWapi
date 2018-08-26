import { 
  FETCH_STARWARS_PENDING,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILED,
  UPDATE_ITEM_SELECTED
} from './constants';

const initialStateData = {
  data: {},
  isPendingData: true,
  page: 1,
  category: 'people',
  itemSelected: 0
}

export const requestData = (state=initialStateData, action={}) => {
  switch(action.type) {
    case FETCH_STARWARS_PENDING:
      return { ...state, isPendingData: true }
    case FETCH_STARWARS_SUCCESS:
      return { ...state, isPendingData: false, data: action.payload, page: action.page, category: action.category, itemSelected: 0 }
    case FETCH_STARWARS_FAILED:
      return { ...state, isPendingData: false, error: action.payload }
    case UPDATE_ITEM_SELECTED:
      return { ...state, itemSelected: action.itemNumber }
    default: 
      return state;
  }
}