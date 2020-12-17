<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <h1>title: {{ post.title }} </h1>
    <h1>body: {{ post.body }} </h1>
    <h1>image: {{ post.image }} </h1>
    <router-link v-bind:to="`/posts/${post.id}/edit`">Edit</router-link>
  </div>
</template>


<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Show Page",
      post: {},
    };
  },
  created: function () {
    this.postsShow();
  },
  methods: {
    postsShow: function () {
      console.log("in posts show");
      console.log(this.$route.params.id);
      axios.get("/api/posts/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
};
</script>