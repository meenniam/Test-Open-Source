
const initialState = {
  display: 'none',
  newsId: 0
}


export default function modalReducer(state=initialState,action={}) {
  switch (action.type) {
    case "DISPLAY":
      return {
        ...state,
        display: action.payload.display,
        newsId: action.payload.id
      }
      break;
    default:
      return state
  }
}

export function displayBlock(display,id){
  return {
    type: "DISPLAY",
    payload: {
      display:display,
      id: id
    }
  }
}
