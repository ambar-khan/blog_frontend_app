<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <h1>title: {{ post.title }} </h1>
    <h1>body: {{ post.body }} </h1>
    <h1>image: {{ post.image }} </h1>
    
    <h1>User Id? {{ $parent.getUserId() }}</h1>
    <h1>User Id of the Post? {{ post.user_id }}</h1>

    <router-link v-if="$parent.getUserId() == post.user_id" v-bind:to="`/posts/${post.id}/edit`">Edit</router-link>
    <br>
    <button v-if="$parent.getUserId() == post.user_id" v-on:click="postsDestroy()">Delete</button>
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
    postsDestroy: function () {
      console.log("destorying post...");
      axios.delete(`api/posts/${this.post.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/posts");
      });
    },
  },
};
</script>