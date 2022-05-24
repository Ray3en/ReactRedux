
const defaultState = {
    count: 0
}

const INCR = 'INCR'
const DECR = 'DECR'

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCR:
            return {...state, count: state.count + action.payload}
        case DECR:
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}

export const incrCountAction = (payload) => ({type: INCR, payload: payload})
export const decrCountAction = (payload) => ({type: DECR, payload: payload})