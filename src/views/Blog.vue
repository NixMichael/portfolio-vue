<template>
    <div id='blog' class='container blog-container'>
        <div class='text-content'>
        <h1><span class='title-font highlight-color'>Blog</span></h1>
        <div class="post" v-for="post in posts.reverse()" :key="post">
            <div>{{post.title}} <span>({{post.created_at}})</span></div>

            <img
                :src="'https://nixwebdev.s3.eu-west-2.amazonaws.com/' + post.image + '.png'"
                :alt="post.title" />

            <div><p v-html="post.body"></p></div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            posts: []
        }
    },
    methods: {
        async getPosts () {
           const response = await fetch('https://nixwebdev-api.herokuapp.com/api/data');
           const posts = await response.json();
           this.posts = posts;
        }
    },
    mounted () {
        this.getPosts();
        window.scrollTo(0,0)
        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 50)
    }
}
</script>
