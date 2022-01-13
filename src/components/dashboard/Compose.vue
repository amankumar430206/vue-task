<template>
  <div class="col-lg-8 mx-auto p-3 py-md-5">
    <header class="pb-3 mb-3 border-bottom">
      <input
        v-model="title"
        type="text"
        class="form-control input-title"
        placeholder="Amazing title goes here..."
      />
    </header>
    <main>
      <textarea
        v-model="description"
        name="input-body"
        class="input-body form-control"
      >
      </textarea>
    </main>
    <footer class="my-3 text-muted border-top">
      <div class="mb-3">
        Author
        <span class="text-primary">{{ $store.getters.getCurrentUser }}</span>
      </div>
      <button @click="post()" class="btn btn-primary px-4">Post Now!</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: `Done with titile..
Lets give some more detail to this article!

clear these lines...`,
    };
  },
  methods: {
    post() {
      const blog = {
        title: this.title,
        description: this.description,
        author: this.$store.getters.getCurrentUser,
      };
      this.$store.dispatch("composeBlog", blog).then(() => {
        this.$router.go(-1);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-list {
  padding-left: 0;
  list-style: none;
}
.icon-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.25rem;
}
.icon-list li::before {
  display: block;
  flex-shrink: 0;
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5rem;
  content: "";
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'/%3E%3C/svg%3E")
    no-repeat center center / 100% auto;
}

.input-title {
  font-size: 20px;
  font-weight: 500;
  border: none;
  &:focus {
    box-shadow: none;
  }
}

.input-body {
  width: 100%;
  height: 40vh;
  padding: 0.5rem;
  border: none !important;
  &:focus {
    background: rgb(248, 248, 248);
    border: none !important;
    box-shadow: none;
    transition: 0.3s ease;
  }
}
</style>
