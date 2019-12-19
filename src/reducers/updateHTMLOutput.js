import { updateHTMLOutput } from '../actions';

const initialState = {
    html: '',
}

export default function updateHTMLState(state = initialState, action) {
    switch (action.type) {
      case updateHTMLOutput:
        return {
            html: [
                ...state.html, {
                    payload: action.payload
                }
            ]
        }
      default:
        return state
    }
  }