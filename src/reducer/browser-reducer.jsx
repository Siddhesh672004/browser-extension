export const browserReducer = (state, action) => {
    switch (action.type) {
        case "NAME":
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
    
}