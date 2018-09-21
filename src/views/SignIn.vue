<template>
  <div class="sign-in-wrapper">
    <form class="sign-in-form" action="">
      <input class="form-control mb-2" type="email" placeholder="Email*" required>
      <input class="form-control mb-2" type="password" placeholder="Пароль" required>
      <input type="submit" value="Войти" class="btn btn-primary" :class="{ 'disabled': !isValidForm }">
    </form>
  </div>
</template>

<script>
  import signIn from '@/components/signIn.vue'

  export default {
    name: 'SignIn',
    data () {
      return {
        isValidForm: false
      }
    },
    components: {
      signIn
    }
  }
</script>

<style lang="scss">

</style>