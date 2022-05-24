
const defaultState = {
    empl: []
}

const ADD_EMPL = 'ADD_EMPL'
const REM_EMPL = 'REM_EMPL'
const ADD_LIST_EMPl = 'ADD_LIST_EMPl'

export const emplReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_LIST_EMPl: 
            return {...state, empl: [...state.empl, ...action.payload]}
        case ADD_EMPL:
            return {...state, empl: [...state.empl, action.payload]}
        case REM_EMPL:
            return {...state, empl: state.empl.filter((empl)=> empl.id !== action.payload)}
        default:
            return state
    }
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload: payload})
export const remEmplAction = (payload) => ({type: REM_EMPL, payload: payload})
export const addListEmplAction = (payload) => ({type: ADD_LIST_EMPl, payload: payload})