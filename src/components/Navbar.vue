<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <router-link tag="a" class="navbar-brand fw-bold" :to="{ name: 'home' }"
        >Vue<span class="text-primary">Task</span></router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              tag="a"
              to="/me"
              class="nav-link"
              >Home</router-link
            >
          </li>

          <li v-if="$store.getters.loggedIn" class="nav-item dropdown">
            <a
              tag="a"
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ currentUser }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Notifications</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
        <button
          @click="logout()"
          v-if="$store.getters.loggedIn"
          class="btn btn-danger px-4 ms-2"
        >
          Logout
        </button>
        <button
          v-if="!$store.getters.loggedIn"
          class="btn btn-primary px-4 ms-2"
          @click="signIn()"
        >
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" });
    },
    signIn() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
