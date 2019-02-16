<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
    <div id="show-blogs" v-theme:col="'wide'">
        <h1>博客总览</h1>
        <input type="text" placeholder="搜索" v-model="search">
        <div  v-for="blog in filteredBlogs" class="single-blog">
            <router-link :to="'/blog/'+blog.id">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>
                {{blog.body | shenglue}}
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowBlogs",
        data(){
            return{
                blogs:[],
                search:''
            }
        },
        created() {
          this.$axios.get('/posts.json')
              .then(data=>{
                  this.blogs = data.data.slice(0,10)
              })
        },
        computed:{
            filteredBlogs:function () {
                return this.blogs.filter((blog)=>{
                    return blog.title.match(this.search)
                })
            }
        },
        filters:{
            'to-uppercase':(data)=>{
            return data.toUpperCase()
            },
            'shenglue':function (data) {
                if (data.length > 100) {
                    return data.slice(0,100)+'...'
                }else {
                    return data
                }
            }
        },
        directives:{
            'rainbow':{
                bind(el,binding,vnode){
                    el.style.color = '#'+Math.random().toString(16).slice(2,8);
                }

            }
        }

    }
</script>

<style scoped>
    h1{
        margin-left: 20px;
        padding-top: 20px;
    }
    input{
        padding: 8px;
        width: 100%;


        box-sizing:border-box;
    }
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
    .single-blog{
        padding: 20px;
        margin: 20px 0 ;
        box-sizing: border-box;
        background: #eee;
    }
    a{
        text-decoration: none;
    }
</style>