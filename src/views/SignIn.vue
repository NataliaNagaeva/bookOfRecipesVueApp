<template>
  <div class="sign-in-wrapper">
    <form id="sign-in-form" class="sign-in-form" action="" @submit.prevent="signInLocal">
      <input v-model="user.email" class="form-control mb-2" type="email" placeholder="Email*" required>
      <input v-model="user.password" class="form-control mb-2" type="password" placeholder="Пароль" required>
      <input type="submit" value="Войти" class="btn btn-primary" :class="{ 'disabled': !isValidForm }">
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'SignIn',
    data () {
      return {
        //TODO что-то сделать с юзером, класс? вынести в store?
        user: {
          email: null,
          password: null,
          confirmPassword: null
        },
        isValidForm: true
      }
    },
    methods: {
      ...mapActions(['signIn']),
      signInLocal () {
        this.signIn(this.user)
          .then( () => {
            this.$emit('login-success', 'success');
            this.$router.replace('/');
          });
      }
    }
  }
</script>

<style lang="scss">

</style>