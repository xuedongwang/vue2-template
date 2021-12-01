import filters from './filters'

export default Vue => {
  for (const [key, filter] of Object.entries(filters)) {
    Vue.filter(key, filter)
  }
  Vue.prototype.$filters = filters
}
