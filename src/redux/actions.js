import C from './Constants';
import { v4 } from 'uuid';

export const removeColor = (id) => {
  return {
    type: C.REMOVE_COLOR,
    id
  }
}

export const addColor = (title, color) => {
  return {
    type: C.ADD_COLOR,
    title,
    color,
    timestamp: new Date().toString(),
    id: v4()
  }
}

export const rateColor = (id, rating) => {
  return {
    type: C.RATE_COLOR,
    id,
    rating
  }
}

export const sortColors = (sortBy) => {
  return {
    type: C.SORT_COLORS,
    sortBy
  }
}
