<template>
  <div id="app">
    <template v-if="!getToken">
      <div id="nav">
        <router-link to="/signIn" class="lead text-uppercase">Вход</router-link>     
        |
        <router-link  to="/registration" class="lead text-uppercase">Регистрация</router-link>
      </div>         
    </template>    
    <template v-else>
      вход выполнен
      <button @click.prevent="signOut" class="btn btn-primary">Выход</button>
    </template>
    <transition name="slide-fade">
      <router-view @reg-success="sign = $event"/>
    </transition>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app',
    fetch({store}) {
        store.dispatch['getAuthUser'];
    },
    data () {
      return {
        // TODO вынести в store, прописать мутацию и геттер
        authorize: false,
        sign: null
      }
    },
    computed: {
      ...mapGetters(['getToken'])
    },
    methods: {
      ...mapActions(['signOut'])
    }
  }
</script>

<style lang="scss">
  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.       */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }

  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }

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
