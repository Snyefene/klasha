

const initialState = {
    transactions: [],
    activePage: 'Dashboard',
    activePeriod: '7 days',
  }
const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ACTIVE_TAB':
            return {
                ...state,
                activePeriod: action.payload
         }
         case 'SET_ACTIVE_PAGE':
            return {
                ...state,
                activePage: action.payload
         }
       
        default:
            return state
    }
}
export default dashboardReducer;