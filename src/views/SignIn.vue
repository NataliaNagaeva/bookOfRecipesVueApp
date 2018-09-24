<template>
  <div class="sign-in-wrapper">
    <form class="sign-in-form" action="" @submit.prevent="logInLocal">
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
        //TODO вынести в store, прописать мутацию и геттер
        user: {
          email: null,
          password: null,
          confirmPassword: null
        },
        isValidForm: true,
        requiredRules: [
            v => !!v || 'Обязательное поле'
        ]
      }
    },
    methods: {
      ...mapActions(['logIn']),
      logInLocal () {
        this.logIn(this.user)
          .then( () => {
            this.$emit('login-success', 'success');
            this.$router.replace('/home');
          })
          .catch( (error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,' ', errorMessage);
            // ...
          });
      }
    }
  }
</script>

<style lang="scss">

</style>