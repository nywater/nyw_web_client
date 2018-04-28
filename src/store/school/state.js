import { PAGINATION_STATE } from '@/store/lib/mixins'

// School Module State
export default {
  ...PAGINATION_STATE,
  collection: [],
  model: {},
  selected_model_id: '',
  fetching: false,
  fetching_model: false,
  filter: '',
  city: ''
}
