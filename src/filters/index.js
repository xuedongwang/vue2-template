import filters from './filters';

export default Vue => {
  for (let [key, filter] of Object.entries(filters)) {
    Vue.filter(key, filter);
  }
  Vue.prototype.$filters = filters;
}