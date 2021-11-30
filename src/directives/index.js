import directives from './directives';

export default Vue => {
  for (let [key, directive] of Object.entries(directives)) {
    Vue.directive(key, directive);
  }
}