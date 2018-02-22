<template>
  <div>
    <theHeader></theHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  components:{
    'theHeader':header
  }
}
</script>

<style>
</style>
