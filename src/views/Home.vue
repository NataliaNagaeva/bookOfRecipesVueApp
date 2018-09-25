<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div @click="getAuthUser">
      home
    </div>

    <router-link  to="/settings" class="lead text-uppercase">Настройки</router-link>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['getAuthUser'])
  }
}
</script>
