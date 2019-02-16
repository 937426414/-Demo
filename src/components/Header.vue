<template>
        <nav>
            <ul>
                <li>
                    <router-link to="/" exact>博客</router-link>
                    <router-link :to="{name:'addBlog'}" exact>写博客</router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    nav{
        background: #ff4630;
        padding: 30px 0 ;
    }
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    a{
        margin-left: 20px;
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
        color: #fff;
    }
    .router-link-active{
        background: rgba(255,255,255,0.8);
        color:#444;
    }

</style>