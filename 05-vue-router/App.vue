<template>
  <div id="app">
    <h1>05-vue-router</h1>
    <router-link to='/'>主页</router-link>
    <router-link to='/page1'>页一</router-link>
    <router-link to='/page2'>页二</router-link>
    <router-link to='/page3'>页三</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
