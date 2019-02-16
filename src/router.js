import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from "./components/ShowBlogs";
import AddBlog from "./components/AddBlog";
import SingleBlog from "./components/SingleBlog";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/add',
      name:'addBlog',
      component:AddBlog
    },
    {
      path: '/',
      name: 'showBlogs',
      component: ShowBlogs
    },
    {
      path:'/blog/:id',
      name:'singleBlog',
      component:SingleBlog
    }
  ],
  mode:'history'
})
