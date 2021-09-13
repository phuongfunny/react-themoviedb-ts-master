import { combineReducers } from "@reduxjs/toolkit";
import movies from "../store/movies/movieSlice";
import counter from '../features/counter/counterSlice';
import people from "../store/people/peopleSlice";


const reducer = combineReducers({
  counter,
  movies,
  people,
});

export default reducer;