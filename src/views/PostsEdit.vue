<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit a Post</h1>
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
    };
  },
  created: function () {
    console.log("in created...");
    this.getPostsData();
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
      };
      axios
        .patch("/api/posts/" + this.$route.params.id, params)
        .then((response) => {
          this.$router.push("/posts/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getPostsData: function () {
      axios.get("/api/posts/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.title = response.data.title;
        this.body = response.data.body;
        this.image = response.data.image;
      });
    },
  },
};
</script>