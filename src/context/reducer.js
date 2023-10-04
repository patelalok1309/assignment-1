export const actionType = {
    SET_SEARCHTERM : 'SET_SEARCHTERM',
}

const reducer = (state , action) => {

    switch (action.type){
        case actionType.SET_SEARCHTERM:
            return {
                ...state,
                searchTerm : action.searchTerm,
            }

        default:
            return state
    }
}

export default reducer;