import { stat } from "fs";
import { RecordAction, RecordState } from "../../types/record";

const INITIAL_STATE: RecordState = {
  data: [],
  loading: false,
  error: "",
};

const recordReducer = (
  state: RecordState = INITIAL_STATE,
  action: RecordAction
): RecordState => {
  switch (action.type) {
    case "GET_RECORDS_START":
      return { ...state, loading: true, error: "" };
    case "GET_RECORDS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_RECORDS_ERROR":
      return { ...state, loading: false, error: "Error fetching records " };

    case "ADD_RECORDS_START":
      return { ...state, loading: true, error: "" };
    case "ADD_RECORDS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };

    case "ADD_RECORDS_ERROR":
      return { ...state, loading: false, error: "Error  fetching new records" };

    case "UPDATE_RECORDS_START":
      return { ...state, loading: true, error: "" };
    case "UPDATE_RECORDS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.map((record) =>
          record.id === action.payload.id ? action.payload : record
        ),
      };
    case "UPDATE_RECORDS_ERROR":
      return { ...state, loading: false, error: "error Updateing record" };

    case "DELETE_RECORDS_START":
      return { ...state, loading: true, error: "" };
    case "DELETE_RECORDS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((record) => record.id !== action.payload),
      };
    case "DELETE_RECORDS_ERROR":
      return { ...state, loading: false, error: "Error deleted" };
    default:
      return state;
  }
};

export default recordReducer;
