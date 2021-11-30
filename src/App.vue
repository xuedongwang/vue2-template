<template>
  <div class="app">
    <component :is="$route.meta.layout || 'blank-layout'">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import BlankLayout from './layouts/blank-layout';
import CommonLayout from './layouts/common-layout';
export default {
  components: {
    BlankLayout,
    CommonLayout
  },
}
</script>

<style lang="scss" scoped>
</style>