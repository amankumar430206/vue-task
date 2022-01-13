<template>
  <!-- sign-in form -->
  <main class="form-signin">
    <form @submit.prevent="login()" class="" autocomplete="off">
      <div class="branding text-center my-3 mb-4">
        <h3>
          <router-link
            tag="a"
            class="text-decoration-none text-dark fw-bold"
            :to="{ name: 'home' }"
            >Vue<span class="text-primary">Task</span></router-link
          >
        </h3>
      </div>
      <div class="form-floating">
        <input
          v-model="form.username"
          type="text"
          class="form-control"
          placeholder="Username"
          required
        />
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <div class="mt-4 text-center">
        <p class="p-0 m-0">or</p>
        <a href="#" class="text-muted">Create an Account</a>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      const user = {
        username: this.form.username,
        password: this.form.password,
      };
      if (user.username == "kim" && user.password == "kim") {
        this.$store.dispatch("setCurrentUser", user.username);
        this.$router.push({ name: "dashboard" });
      } else if (user.password == null || user.username == null) {
        alert("Incorrect Credentials");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  padding-top: 5%;
  margin: auto;
  height: 100% !important;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
