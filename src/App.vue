<template>
  <div id="app">
    <template v-if="!authorize">
      <div id="nav">
        <router-link to="/signIn" class="lead text-uppercase">Вход</router-link> |
        <router-link to="/registration" class="lead text-uppercase">Регистрация</router-link>
      </div>
      <router-view/>
    </template>
    <template v-else>
      home
    </template>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        // TODO вынести в store, прописать мутацию и геттер
        authorize: false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
