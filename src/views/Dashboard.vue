<template>
  <div class="main dashboard pt-3">
    <div class="row w-100">
      <div
        class="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 col-md-8 offset-md-2"
      >
        <!-- Dashboard Component -->
        <h5 class="text-center">Dashboard</h5>
        <div class="alert alert-info alert-dismissible fade show" role="alert">
          <strong>Welcome {{ $store.getters.getCurrentUser }}!</strong> This a
          simple vuetask dashboard displaying list of blogs you made.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div class="search-bar">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="search-btn"
            >
              Search
            </button>
          </div>
        </div>
        <div class="blog-action d-flex justify-content-center mb-5">
          <button
            @click="$router.push({ name: 'compose' })"
            class="btn btn-primary px-4"
          >
            + &nbsp; Compose Blog
          </button>
        </div>
        <div class="blogs-results">
          <div class="blogs-recents">
            <p class="fw-bold">Recenet Blogs</p>
            <div class="list-group">
              <router-link
                tag="a"
                to="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
                v-for="item in blogs"
                :key="item.title"
              >
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0 blog-title">{{ item.title }}</h6>
                    <p class="mb-0 opacity-75 blog-description">
                      {{ item.description }}
                    </p>
                  </div>
                  <small class="opacity-50 text-nowrap">{{
                    item.author
                  }}</small>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogs() {
      return this.$store.getters.getBlogs;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 0.2rem;
  &:hover {
    background: #f5f5f5;
  }
  &-body {
    text-decoration: none !important;
  }
}
.blog {
  &-title,
  &-description {
    overflow: hidden;
    text-overflow: "----";
  }

  &-description {
    height: 3rem;
  }
}
</style>
