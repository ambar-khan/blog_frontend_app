<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/posts">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/signup">Signup</a></li>
          <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/login">Login</a></li>
          <li v-if="isLoggedIn()"><a class="dropdown-item" href="/logout">Logout</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link create" href="/posts/new" tabindex="-1" aria-disabled="false">Create a Post</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div class="container">
  <h1>Logged in? {{ isLoggedIn() }}</h1>
    <router-view/>
</div>
  </div>
</template>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      console.log("getting user id...");
      console.log(localStorage.getItem("user_id"));
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<style>
body {
  background-image: url("geometric-leaves.png");
}

#app {
  font-family: Big Caslon, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


