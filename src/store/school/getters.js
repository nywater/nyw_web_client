import { API_ROOT } from './constants'
import { PAGINATION_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
export default {
  ...PAGINATION_GETTERS,
  collection: state => {
    return state.collection
  },
  model: state => {
    return state.model
  },
  selected_model_id: state => {
    return state.selected_model_id
  },
  fetching: state => {
    return state.fetching
  },
  fetching_model: state => {
    return state.fetching_model
  },
  filter: state => {
    return state.filter
  },
  district: state => {
    return state.district
  },
  showingInactive: state => {
    return state.showingInactive
  },
  orderBy: state => {
    return state.orderBy
  },
  apiQuery: state => {
    let query = {}
    if (state.district) query.district = state.district
    if (state.filter) query.q = state.filter
    return query
  },
  fetchUrl: state => {
    let fetchUrl = API_ROOT
    if (state.district || state.filter) {
      fetchUrl += '/search'
    }
    return fetchUrl
  }
}
