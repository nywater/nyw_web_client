import _ from 'lodash'

// City Module Getters
export default {
  collection: state => {
    return _.compact(state.collection).sort()
  },
  fetching: state => {
    return state.fetching
  },
  fetched: state => {
    return state.fetched
  },
  filter: state => {
    return state.filter
  },
  filteredCollection: state => {
    if (!state.filter) {
      return _.sortedUniq(state.collection)
    }

    _.chain(state.collection)
    .filter(u => {
      return u.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    .sortedUniq()
    .value()
  }
}
