<template>
  <div id="app">
    <template v-if="!getToken">
      <div id="nav">
        <router-link to="/signIn" class="lead text-uppercase">Вход</router-link>         
        |
        <router-link  to="/registration" class="lead text-uppercase">Регистрация</router-link>
      </div>
      <router-view @reg-success="sign = $event"/>    
    </template>
    <template v-else>
      вход выполнен
      <button @click.prevent="signOut">Выход</button>
    </template>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'app',
    data () {
      return {
        // TODO вынести в store, прописать мутацию и геттер
        authorize: false,
        sign: null
      }
    },
    computed: {
      ...mapGetters(['getToken']),
    },
    methods: {
      signOut() {
        firebase.auth().signOut().then( () => {
          this.$store.commit('setToken', null);
        }).catch(function(error) {
          // An error happened.
        });
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
