import { stat } from "fs";
import { User, UserAction, UserState } from "../../types/user";

const initialState: UserState = {
  data: {} as User,
  loading: false,
  error: "",
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: "" };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, data: action.payload };

    case "LOGIN_ERROR":
      return { ...state, loading: false, error: "Login faild." };
    default:
      return state;
      break;
  }
};

export default userReducer;
