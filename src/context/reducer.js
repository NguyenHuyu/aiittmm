export const actionType = {
    SET_USER : 'SET_USER',
    SET_INFO : 'SET_INFO',
    SET_INFOR : 'SET_INFOR'
}

const reducer = (state, action)=>{
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
        case actionType.SET_INFOR:
            return{
                ...state,
                InfomationR:action.InfomationR
            }
        default:
            return state
    }
}

export default reducer


