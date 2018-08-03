import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardreducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer