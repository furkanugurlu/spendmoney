import { ThunkDispatch } from "redux-thunk";

export interface CategoryState {
  data: Category[];
  loading: boolean;
  error: string;
}

export interface Category {
  id: number;
  name: string;
  type: "expense" | "income";
  color: string;
}

export interface CategoryForm {
  name: string;
  type: "income" | "expense";
  color?: string;
}

interface GET_START {
  type: "GET_CATEGORIES_START";
}
interface GET_SUCCESS {
  type: "GET_CATEGORIES_SUCCESS";
  payload: Category[];
}
interface GET_ERROR {
  type: "GET_CATEGORIES_ERROR";
}

interface ADD_START {
  type: "ADD_CATEGORY_START";
}
interface ADD_SUCCESS {
  type: "ADD_CATEGORY_SUCCESS";
  payload: Category;
}
interface ADD_ERROR {
  type: "ADD_CATEGORY_ERROR";
}

interface UPDATE_START {
  type: "UPDATE_CATEGORY_START";
}
interface UPDATE_SUCCESS {
  type: "UPDATE_CATEGORY_SUCCESS";
  payload: Category;
}
interface UPDATE_ERROR {
  type: "UPDATE_CATEGORY_ERROR";
}

interface DELETE_START {
  type: "DELETE_CATEGORY_START";
}
interface DELETE_SUCCESS {
  type: "DELETE_CATEGORY_SUCCESS";
  payload: number;
}
interface DELETE_ERROR {
  type: "DELETE_CATEGORY_ERROR";
}

export type CategoryAction =
  | GET_ERROR
  | GET_SUCCESS
  | GET_START
  | ADD_ERROR
  | ADD_SUCCESS
  | ADD_START
  | UPDATE_ERROR
  | UPDATE_SUCCESS
  | UPDATE_START
  | DELETE_ERROR
  | DELETE_SUCCESS
  | DELETE_START;
export type CategoryDispatch = ThunkDispatch<
  CategoryState,
  () => void,
  CategoryAction
>;
