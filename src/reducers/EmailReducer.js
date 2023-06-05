export const EmailReducer = (state, action) => {
    switch (action.type) {
        case "ADD": 
            return {
                email: action.payload
            }
        case "REMOVE": 
            return {
                email: null
            } 
        default: 
            return state
    }
}