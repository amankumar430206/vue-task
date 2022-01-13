<template>
  <div class="home bg-light">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
