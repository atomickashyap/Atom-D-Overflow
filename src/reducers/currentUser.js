const currentUserReducer =(State = null, action) => {
    switch(action.type) {
        case 'FETCH_CURRENT_USER':
            return action.payload;
        default:
            return State;
    }
}

export default currentUserReducer;