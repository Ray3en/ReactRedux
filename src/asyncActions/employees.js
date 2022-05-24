import { addListEmplAction } from "../store/emplReducer"

export const fetchEmployees = () => {
    return function(dispatch) {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => dispatch(addListEmplAction(data)))
    }
}
