<template>
  <div class="registrataion-wrapper">
    <form class="registrataion-form" action="" @submit.prevent="registerNewUser">
      <input v-model="user.email" class="form-control mb-2" type="email" placeholder="Email*" required>
      <input v-model="user.password" class="form-control mb-2" type="password" placeholder="Пароль" required>
      <input v-model="user.confirmPassword" class="form-control mb-2" type="password" placeholder="Повторите пароль" required>
      <div class="alert alert-danger mb-2" v-if="error">
        Пароли не совпадают или он слишком короткий
      </div>
      <input type="submit" value="Зарегистрироваться" class="btn btn-primary" :class="{ 'disabled': !isValidForm }">      
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'registration',
    data () {
      return {
        //TODO вынести в store, прописать мутацию и геттер
        user: {
          email: null,
          password: null,
          confirmPassword: null
        },
        //TODO реализовать свою валидацию
        isValidForm: true,
        error: false
      }
    },
    methods: {
      ...mapActions(['registration']),
      registerNewUser () {
        if (this.user.password !== this.user.confirmPassword || this.user.password.length < 6) {
          this.error = true
        } else {
          this.registration(this.user)
            .then( () => {
              this.$emit('reg-success', 'sign-in');
              this.$router.replace('/signIn');
            });
        }        
      }
    }
  }
</script>

<style lang="scss">

</style>