<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <p>{{ post.title }}</p>
      <router-link v-bind:to="'/posts/' + post.id">
        <img v-bind:src="post.image">
      </router-link>
    </div>
  </div>
</template>


<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Blog Posts Index Page",
      posts: [],
    };
  },
  created: function () {
    console.log("in created");
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      console.log("posts index..");
      axios.get("/api/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>