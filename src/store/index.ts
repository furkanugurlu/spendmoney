import { combineReducers } from "redux";
import { UserState } from "../types/user";
import userReducer from "./reducers/userReducer";
import categoryReducers from "./reducers/categoryReducers";
import { CategoryState } from "../types/category";
import { RecordState } from "../types/record";
import recordReducer from "./reducers/recordReducer";

export interface AppState {
  user: UserState;
  categories: CategoryState;
  records: RecordState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducers,
  records: recordReducer,
});

export default rootReducer;
