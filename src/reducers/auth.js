const authReducer = (state= {data: null} , action) => {
    switch (action.type) {
        case 'AUTH':
            return state;
        default:
            return state;
    }
}
export default authReducer
