<template>
    <div class='fullscreen'>
        <div class="image"></div>
        <div class="close-fullscreen" @Click="closeFullScreen()"><strong>X</strong></div>
    </div>
    <div class="container">
        <div class='text-content'>
            <div class='full-title'>
                <div>
                    <h3 class='title-font highlight-color larger-title'>Hello!</h3>
                </div>
                <div class="sub-title">
                    <h3>I'm Michael,</h3>
                    <h3>&nbsp;&nbsp;&nbsp;a web developer based in Manchester, UK.</h3>
                </div>
            </div>
            <p>
                Passionate about building websites and apps with a variety of technologies, I enjoy both coding and visual design.
            </p>
            <p>
                My skill set includes both front and back-end technologies. I am experienced in JavaScript and PHP as well as various frameworks and libraries (including React.js, Vue.js and Laravel). I also enjoy writing server side code with Node.js and Express, and working with databases including MySQL and PostgreSQL.
            </p>
            <p>Take a look at some of my projects below and don't hesitate to get in touch!</p>
            <div id="projects" class='title-flow'>Projects</div>
        </div>

        <div id='projects' class='container projects-container' v-if="projects.length > 0">
        <div class='fader' v-for="project in projects" :key="project.image_id">
            <div class="project-description">
                <h3>{{project.title}}</h3>
                <div class="description" data-simplebar data-simplebar-auto-hide="false">
                    <p v-html="project.body"></p>
                </div>
            </div>
            <div class='image-container' :id="project.image_id" @click='showImage($event.currentTarget.id)'>
                <img 
                :srcset="'https://nixwebdev.s3.eu-west-2.amazonaws.com/project_images/' + project.image_id + '_700.webp' + ' 700w, ' + 'https://nixwebdev.s3.eu-west-2.amazonaws.com/project_images/' + project.image_id + '_1200.webp' + ' 1200w '"
                :src="'https://nixwebdev.s3.eu-west-2.amazonaws.com/project_images/' + project.image_id + '_700.png'" 
                :alt="project.title" />

            </div>
            <div class='project-links'>
                <a v-if="project.frontend_link" target='_blank' :href="project.frontend_link">VIEW CODE</a>
                <a v-if="project.backend_link" target='_blank' :href="project.backend_link">VIEW CODE (BACK-END)</a>
                <a v-if="project.live_link" target='_blank' :href="project.live_link">VIEW LIVE</a>
            </div>
        </div>
        </div>
        <div v-else><Spinner class="spinner" :size="80" :depth="10" color="#d387bc"/></div>
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
            projects: []
        }
    },
    methods: {
        async fetchProjects () {
            const response = await fetch('https://nixwebdev-api.herokuapp.com/api/projects');
            const projects = await response.json();
            this.projects = projects.reverse();
        },
        showImage (imageId) {
            const imageLink = 'https://nixwebdev.s3.eu-west-2.amazonaws.com/project_images/' + imageId + '.gif';
            document.querySelector('.image').style.backgroundImage = `url(${imageLink})`
            document.querySelector('.fullscreen').style.display = 'flex'
        },
        closeFullScreen () {
            document.querySelector('.fullscreen').style.display = 'none'
        },
        fadeProjects () {
            const faders = document.querySelectorAll('.fader')

            faders.forEach(fader => {
                fader.classList.remove('appear')
            })

            const options = {
                threshold: 0.4
            }

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return
                    } else {
                        entry.target.classList.add('appear')
                        observer.unobserve(entry.target)
                    }
                })
            }, options)

            faders.forEach(fader => {
                observer.observe(fader)
            })
        }
    },
    created () {
        this.fetchProjects();
    },
    mounted () {
        window.scrollTo(0,0)
        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 50)
    },
    updated () {
        this.fadeProjects();

        // Scroll description text back to top when hover away
        const description = document.querySelectorAll('.description')

        document.querySelectorAll('.project-description').forEach((el, i) => {
            el.addEventListener('mouseleave', () => {
                description[i].scrollTop = 0;
            })
        })
    }
}
</script>

<style scoped>
    .spinner {
        margin-top: 4rem;
    }
</style>