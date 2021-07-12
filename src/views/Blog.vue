<template>
    <div id='blog' class='container blog-container'>
        <div class='text-content'>
        <h1><span class='title-font highlight-color'>Blog</span></h1>
        <p>Thoughts and findings relating to web development, Linux, and anything else of interest to me.</p>
        <div class="post" v-for="post in posts" :key="post">
            <div>{{post.title}}<span>({{post.created_at}})</span></div>
            <img 
                :srcset="'https://nixwebdev.s3.eu-west-2.amazonaws.com/blogimages/' + post.image + '.webp' + ' 1359'"
                :src="'https://nixwebdev.s3.eu-west-2.amazonaws.com/blogimages/' + post.image + '.png'" 
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
           this.posts = posts.reverse();
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
