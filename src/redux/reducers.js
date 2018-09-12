import C from './Constants';

export const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        rating: 0,
        color: action.color,
        timestamp: action.timestamp
      };
    case C.RATE_COLOR:
      return state.id === action.id ? {
        ...state,
        rating: action.rating
      } : state;

    default:
      return state;
  }
}

export const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return [
        ...state,
        color({}, action)
      ]
    case C.RATE_COLOR:
      return state.map(item => color(item, action));

    case C.REMOVE_COLOR:
      return state.filter(color => color.id !== action.id);

    default:
      return state;
  }
}

export const sortBy = (state = 'DESC', action) => {
  switch (action.type) {
    case C.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
}
