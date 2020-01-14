import { UPDATE_HTML } from "../actions";

const initialState = {
  output: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_HTML:
        return {
            output: action.output,
      }
      default:
        return state
    }
}

export default reducer;

