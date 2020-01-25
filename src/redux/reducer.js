const initialState = {}

const reducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case 'test':
            console.log(123)
            return Object.assign({}, state, {
                test: action.payload,
            })
        default:
            return state
    }
}

export default reducer
