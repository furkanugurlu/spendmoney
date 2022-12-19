import { CategoryState, CategoryAction } from "../../types/category";

const initialState: CategoryState = {
  data: [],
  loading: false,
  error: "",
};

const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryAction
) => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return { ...state, loading: true };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_CATEGORIES_ERROR":
      return { ...state, loading: false, error: "Error fetching categories" };

    case "ADD_CATEGORY_START":
      return { ...state, loading: true };

    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_CATEGORY_ERROR":
      return { ...state, loading: false, error: "Error adding categories" };

    case "UPDATE_CATEGORY_START":
      return { ...state, loading: true, error: "" };

    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
      };

    case "UPDATE_CATEGORY_ERROR":
      return { ...state, loading: false, error: "Error updating category" };

    case "DELETE_CATEGORY_START":
      return { ...state, loading: true, error: "" };

    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((category) => category.id !== action.payload),
      };

    case "DELETE_CATEGORY_ERROR":
      return { ...state, loading: false, error: "Error delete category" };

    default:
      return state;
  }
};

export default categoryReducer;