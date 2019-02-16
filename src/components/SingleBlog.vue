<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created() {
            this.$axios.get('/posts.json')
                .then((res=>{
                    this.blog = res.data[this.id-1];
                }))
        }
    }
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>