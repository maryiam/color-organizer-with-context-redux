import React from 'react';
import { addColor, rateColor, removeColor, sortColors } from '../../redux/Actions';
import { sortByDate } from '../../helpers';
import ColorsList from '../presentationals/list/List';
import AddColorForm from '../presentationals/create/Add';
import Sort from '../presentationals/sort/Sort';
import ContextWrapper from './context-wrapper';

const ColorsContainer = ({ colors, sortBy, dispatch }) => {
  const sortedColors = sortByDate(colors, sortBy);
  const remove = id => dispatch(removeColor(id));
  const rate = (id, rating) => dispatch(rateColor(id, rating));
  return <ColorsList list={sortedColors} onDeleteColor={remove} onRateColor={rate} />
}

const CreateColorContainer = ({ dispatch }) => {
  const add = (title, color) => dispatch(addColor(title, color));
  return <AddColorForm onAddColor={add} />
}

const SortColorsContainer = ({ dispatch, sortBy }) => {
  const sort = order => dispatch(sortColors(order));
  return <Sort order={sortBy} onSort={sort} />
}

export const Colors = ContextWrapper(ColorsContainer);
export const CreateColor = ContextWrapper(CreateColorContainer);
export const SortColors = ContextWrapper(SortColorsContainer);
