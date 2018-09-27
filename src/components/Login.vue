<template>

  <div class="page-wrapper flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card p-4">
            <div class="card-header text-center text-uppercase h4 font-weight-light">
              Login
            </div>

            <div class="card-body py-5">
              <div class="form-group">
                <label class="form-control-label">Email</label>
                <input v-model="username" type="email" class="form-control">
              </div>

              <div class="form-group">
                <label class="form-control-label">Password</label>
                <input v-model="password" type="password" class="form-control">
              </div>

              <div class="custom-control custom-checkbox mt-4">
                <input v-model="rememberMe" type="checkbox" class="custom-control-input" id="login">
                <label class="custom-control-label" for="login">Remember me</label>
              </div>

            </div>


            <div class="card-footer">
              <button id="btn" @click="login" type="submit" class="btn btn-primary btn-block">Login</button>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false,
        msg: ''
      };
    },
    methods: {
      login() {
        if (this.username === '123' && this.password === '123') {
          this.$router.push("/home");
        }
      }
    }
  }
</script>

<style scoped>

</style>
