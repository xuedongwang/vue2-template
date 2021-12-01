import directives from './directives'

export default Vue => {
  for (const [key, directive] of Object.entries(directives)) {
    Vue.directive(key, directive)
  }
}
