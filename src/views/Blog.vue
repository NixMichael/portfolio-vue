<template>
    <div class='container'>
        <div class='text-content'>
        <h1><span class='title-font highlight-color'>Blog</span></h1>
        <p>Thoughts and findings relating to web development, Linux, and anything else of interest to me.</p>
        <div id='blog' class='container blog-container' v-if="posts.length > 0">
            <div class="post" v-for="post in posts" :key="post">
                <div><span>{{post.title}}</span>({{post.created_at}})</div>
                <img 
                    :srcset="'https://nixwebdev.s3.eu-west-2.amazonaws.com/blogimages/' + post.image + '.webp' + ' 1359'"
                    :src="'https://nixwebdev.s3.eu-west-2.amazonaws.com/blogimages/' + post.image + '.png'" 
                    :alt="post.title" />

                <div><p v-html="post.body"></p></div>
            </div>
        </div>
        <div class="container spinner-container" v-else><Spinner class="spinner" :size="80" :depth="10" color="#d387bc"/></div>
        </div>
    </div>
</template>

<script>
import Spinner from 'vue-spinner-component/src/Spinner.vue';

export default {
    components: {
        Spinner
    },
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
    created () {
        this.getPosts();
    },
    mounted () {
        window.scrollTo(0,0)
        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 50)
    }
}
</script>

<style lang="scss" scoped>
    .spinner-container {
        height: 200px;
        .spinner {
            margin-top: 2rem;
        }
    }

.blog-container {
    .post {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        padding: 1rem;
        box-shadow: 0 0 15px 0 rgba(0,0,0,0.3);
        div, img {
            width: 100%;
            font-size: 1em;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                font-size: 2em;
            }
            p {
                font-size: 1em;
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .blog-container {
        .post {
            width: 100%;
            box-shadow: none;
            background-color: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.9);
        }
    }
}

</style>