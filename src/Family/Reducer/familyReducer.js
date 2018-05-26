const initialState = {
  value: "Vignesh Nagarajan",
  familyDetails:{}
}

export default function familyReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD':
        return Object.assign({}, state, {
          value: action.value
        })
      case 'FAMILY_UPDATE':
        return Object.assign({}, state, {
          familyDetails: action.payload
        })
      default:
        return state
    }
  }