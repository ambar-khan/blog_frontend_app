<template>
  <div class="posts_new">
    <form v-on:submit.prevent="submit()">
      <img v-if="status" v-bind:src="`https://http.cat/${status}`" width="800px">
      <h1>Create a New Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Title:</label> 
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="body">
        <small> {{ 500 - body.length }} characters remaining</small>

      </div>
      <div class="form-group">
        <label>image:</label>
        <input type="text" class="form-control" v-model="image">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      title: "",
      body: "",
      image: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
      };
      axios
        .post("/api/posts", params)
        .then((response) => {
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.status);
          this.status = error.response.status;
        });
    },
  },
};
</script>

