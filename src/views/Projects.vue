<template>
    <div class='fullscreen'>
        <div class="preview">
            <video id="video-preview" autoplay loop>
                <source src="" type="video/mp4">
            </video>
        </div>
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
            document.querySelector('#video-preview > source').src = 'https://nixwebdev.s3.eu-west-2.amazonaws.com/project_videos/' + imageId + '.mp4';
            document.querySelector('.fullscreen').style.display = 'flex';
            document.querySelector('#video-preview').load();
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

<style lang="scss" scoped>

    .spinner {
        margin-top: 4rem;
    }

    .text-content {

        .larger-title {
            font-size: 3em;
        }

        .full-title {
        display: flex;

            .sub-title {
                margin-top: 5.5em;
                margin-left: -5em;
            }
        }
    }

    .fader {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 55%;
        max-width: 1600px;
        opacity: 0;
        color: black;
        background-color: $fader-bg-color;
        margin-bottom: 4em;
        padding: 1.5em 0.5em;
        border-radius: 6px;
        box-shadow: 0 2px 8px 0px rgba($primary, 0.95);
        transform: translateX(25vw);
        transition: transform 650ms ease-out, opacity 250ms ease-in, width 400ms ease-in-out;
        
        .project-description {
            border-bottom: 0.5rem solid $fader-bg-color;
            align-self: center;
            position: relative;
            width: calc(100% - 5rem);
            margin: 0 2.5rem;
            height: 5em;
            overflow: hidden;
            background-color: rgba(255,255,255,0);
            outline: 10px solid rgba(255,255,255,0);
            transition: background-color 600ms ease, outline 500ms ease;

            h3 {
                font-size: 1.5em;
            }

            &::after {
                position: absolute;
                content: '[Read more...]';
                text-align: left;
                bottom: 0;
                padding-top: 0.2em;
                left: 0;
                width: 100%;
                height: 1.5em;
                font-size: 0.8em;
                background-color: $fader-bg-color;
            }

            & > div {
                margin-top: 0.25rem;
                margin-bottom: 0.5rem;
            }

            .description {
                overflow: hidden;
                font-size: 1em;
                padding-bottom: 1em;
                position: relative;
                height: 3.7rem;

                & ~ div {
                    width: 80%;
                    margin: 0 auto;
                }
            }

            .close-description {
                position: absolute;
                display: none;
                justify-content: center;
                align-items: center;
                top: -25px;
                right: 10px;
                color: black;
                cursor: pointer;
            }

            &:hover {
                position: absolute;
                text-align: center;
                padding-top: 1rem;
                width: 100%;
                height: 85%;
                z-index: 50;
                white-space: normal;
                overflow: visible;
                width: calc(100% - 2rem);
                margin: 1.5em auto;
                border: none;

                &::after {
                    display: none;
                }

                & + .image-container {
                    margin-top: 6em;
                    opacity: 0.05;
                    transition: opacity 600ms ease-out;
                }

                h3 {
                    font-size: 1.5em;
                }

                .description {
                    text-align: center;
                    font-size: 1.2em;
                    margin-top: 1em;
                    padding: 0 15%;
                    white-space: normal;
                    height: 70%;
                    overflow-y: auto;
                    transition: margin-top 600ms ease-in-out;

                    p {
                        margin-top: 0.5rem;
                    }

                    p:first-child::after {
                        display: none;
                    }
                }
            }
        }

        .image-container {
            position: relative;
            background-color: $lightmode-bg-color;
            margin-bottom: 0.5rem;
            z-index: 0;
            width: 100%;
            cursor: pointer;

            img {
            width: 100%;
            }

            &::before, &::after {
                position: absolute;
                content: '';
                bottom: 12px;
                width: 45%;
                height: 20px;
                background: rgba(0,0,0,0.3);
                box-shadow: 0 0 5px 8px rgba(0,0,0,0.3);
                z-index: -1;
            }

            &::before {
                left: 10px;
                transform: rotate(-2deg);
            }

            &::after {
                right: 10px;
                transform: rotate(2deg);
            }

            img {
                box-shadow: 0 0 5px 0 rgba(0,0,0,0.35);
            }
        }

        .project-links {
            display: flex;
            justify-content: space-around;
            width: 90%;

            a {
                max-width: 45%;
                max-height: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0,0,0,0.05);
                outline: 1px solid $highlightFont;
                outline-offset: -1px;
                padding: 1em;
                color: black;
                text-align: center;
                text-decoration: none;
                position: relative;
                
                &:hover {
                    outline-offset: 4px;
                    outline: 1px solid $fader-bg-color;
                    background-color: rgba($highlightFont, 0.8);
                    transition: outline-offset 200ms ease-out, outline 200ms ease-in-out 100ms;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 3px;
                        background-color: $highlightFont;
                    }
                }
            }
        }
    }

    .appear {
        transform: translateX(0);
        opacity: 1;
    }

    .fullscreen {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.9);
        z-index: 99;

        .preview {
            height: 720px;
            max-height: 90vh;
            width: auto;

            #video-preview {
                height: 100%;
            }
        }

        .close-fullscreen {
            position: absolute;
            justify-content: center;
            align-items: center;
            top: 2vh;
            right: 2vh;
            width: 60px;
            height: 60px;
            font-size: 3rem;
            color: white;
            cursor: pointer;
        }
    }

    @media screen and (hover: none) {
        .fullscreen {

            .close-fullscreen {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .fader {
            width: 95%;
            max-width: 550px;
            clip-path: none;

            .project-description {
                height: 4.2rem;
                border-bottom: 0.5rem solid rgba(243, 239, 239, 0);

                &:hover {
                    margin: 0;
                    padding-top: 0;
                    width: 100%;
                    height: 75%;
                    border-bottom: none;


                    & + .image-container {
                        margin-top: 4.5rem;
                    }

                    h3 {
                        font-size: 1.2rem;
                    }

                    & > div {
                        margin: 0.5rem;
                    }
                }
            }

            .image-container {
                &::before, &::after {
                    display: none;
                }
            }
        }

        .fullscreen .close-fullscreen {
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 900px) {
        .fader {
            .image-container {
                margin: 1rem 1rem 1.5rem;
            }
        }
    }

    @media screen and (min-width: 1900px) {

        .full-title {
            margin-bottom: 1rem;
            .sub-title {
                margin-top: 4.5em;
            }
        }

        .projects-container {
            .fader {

                &:first-child {
                    margin-top: 0;
                }

                .image-container {
                    &::before, &::after {
                        bottom: 15px;
                        width: 75%;
                    }
            
                    &::before {
                        transform: rotate(-1deg);
                    }
            
                    &::after {
                        transform: rotate(1deg);
                    }
                }
            }

        }
    }

    @media screen and (min-width: 3000px) {

        .fader {
            padding: 3rem 4rem;
            font-size: 1em;

            .project-description::after {
                bottom: 0.2em;
            }

            .image-container::before, .image-container::after {
                bottom: 15px;
            }
        }
    }

</style>