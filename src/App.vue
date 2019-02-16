<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from "./components/AddBlog";
  import ShowBlogs from "./components/ShowBlogs";
  import Header from "./components/Header";

  export default {
    name: "AddBlog",
    components:{
      'addBlog':AddBlog,
      'showBlog':ShowBlogs,
      'blog-header':Header
    }
  }
</script>

<style>
</style>
