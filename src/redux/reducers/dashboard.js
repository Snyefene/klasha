

const initialState = {
    transactions: [],
    activePage: 'Dashboard',
    activePeriod: '7 days',
    data:[10, 40, 100, 50, 60, 10,100, 200, 500, 600, 400, 100],
    salesData:{
        main: [700, 40, 10, 300, 800, 10,100, 50, 500, 700, 400, 100],
        sevenDays: [700, 40, 3000, 300, 30, 1000,100, 50, 500, 700, 400, 100],
        thirtyDays: [900, 900, 500, 300, 500, 10,60, 50, 500, 70, 900, 100],
    }

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