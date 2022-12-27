export const actionType = {
    SET_USER : 'SET_USER',
    SET_INFO : 'SET_INFO'

}

const reducer = (state, action)=>{
    console.log(action)

    switch (action.type) {
        case actionType.SET_USER:
            return{
                ...state,
                user:action.user
            }
        case actionType.SET_INFO:
            return{
                ...state,
                Infomation:action.Infomation
                }
        default:
            return state
    }
}

export default reducer