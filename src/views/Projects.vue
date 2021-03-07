<template>
    <div class='fullscreen'>
        <div class="image"></div>
        <div class="close-fullscreen" @Click="closeFullScreen()"><strong>X</strong></div>
    </div>
    <div id='projects' class='container projects-container'>
        <div class='text-content'>
            <div class='fulltitle'>
                <div>
                    <h3 class='title-font highlight-color larger-title'>Hello!</h3>
                </div>
                <div class="subtitle">
                    <h3>I'm Michael,</h3>
                    <h3>&nbsp;&nbsp;&nbsp;a web developer based in Manchester, UK.</h3>
                </div>
            </div>
            <p class='first-para'>
                Passionate about building websites and apps with a variety of technologies,
                I enjoy visual and structural design equally.
            </p>
            <p>
                My skillset includes both front and backend technologies. I am experienced in Javascript and PHP as well as various frameworks and libraries (React, Vue, Laravel), writing server side code with Node.js and Express, and working with databases including MySQL and PostgreSQL.
            </p>
            <p>Take a look at some of my projects below and don't hesitate to get in touch!</p>
            <div id="projects" class='title-flow'>Projects</div>
        </div>

        <div class='fader'>
            <div class='project-description'>
                <h3>Green Oil</h3>
                <div class='description' data-simplebar data-simplebar-auto-hide="false">
                    <p>
                        Custom built e-commerce website based on a sustainable bicycle oil company, using a PayPal payment API.
                    </p>
                    <p>
                        I visited Green Oil's website whilst looking for eco friendly oil for maintaining my bike. 
                        I saw it was in need of a redesign and realised it was a great project to take on to learn more about online payment integration.
                    </p>
                    <p>
                        This project gave me a great insight into integrating payment methods, using PayPal on this occasion. I also added the option to toggle between Pounds Sterling and Euros currencies.
                    </p>
                </div>
            </div>
            <div class='image-container' id='green-oil' @click='showImage($event.currentTarget.id)'>
                <img :src="require('@/assets/images/project-images/green-oil/green-oil-700px.png')" 
                :srcset="require('@/assets/images/project-images/green-oil/green-oil-700px.webp') + ' 700w, ' + require('@/assets/images/project-images/green-oil/green-oil-1200px.webp') + ' 1200w '"
                alt='e-commerce website with PayPal integration' />

            </div>
            <div class='project-links'>
                <a target='_blank' href="https://github.com/c0llid3r/green-oil">VIEW CODE</a>
                <a target='_blank' href="https://elastic-lovelace-14cb3f.netlify.app/">VIEW LIVE</a>
            </div>
        </div>

        <div class='fader'>
            <div class='project-description'>
                <h3>MACA</h3>
                <div class='description' data-simplebar data-simplebar-auto-hide="false">
                    <p>
                        Website for vegan animal activism group 'Manchester Animal Climate Action'.
                    </p>
                    <p>
                        Manchester Animal Action were in the process of rebranding to Manchester Animal Climate Action. They were also in need of a website overhaul as their original site has various design issues.
                    </p>
                    <p>
                        As the site needs to be easily updated by MACA volunteers, I chose to build it using Wordpress. I created a custom theme so that I could design the site from scratch.
                    </p>
                </div>
            </div>
            <div class='image-container' id='maca' @click='showImage($event.currentTarget.id)'>
                <img :src="require('@/assets/images/project-images/maca/maca-700px.png')" 
                :srcset="require('@/assets/images/project-images/maca/maca-700px.webp') + ' 700w, ' + require('@/assets/images/project-images/maca/maca-1200px.webp') + ' 1200w '"
                alt='e-commerce website with PayPal integration' />
            </div>
            <div class='project-links'>
                <a target='_blank' href="https://github.com/c0llid3r/maca-wp-theme">VIEW CODE</a>
                <a target='_blank' href="http://35.177.13.244/">VIEW LIVE</a>
            </div>
        </div>

        <div class='fader'>
            <div class='project-description'>
                <h3>Medical Illustration Database</h3>
                <div class='description' data-simplebar data-simplebar-auto-hide="false">
                    <p>
                        Full stack database solution built using ReactJS, NodeJS and Postgresql.
                    </p>
                    <p>
                        This was built to replace an old MS Access database which had been in use since the mid 90s.
                    </p>
                    <p>
                        Probably my most complex project to date, but also the most enjoyable as I was able to really get to grips with the full capabilities of React.
                    </p>
                    <p>
                        I initially took a class based approach to building the app, but having learnt how to use React Hooks and Redux I rebuilt the app. This was a great learning experience, reviewing my original code and discovering where it could be improved to improve the functionality and reliability of the app.
                    </p>
                </div>
            </div>
            <div class='image-container' id='record-keeper' @click='showImage($event.currentTarget.id)'>
                <img :src="require('@/assets/images/project-images/record-keeper/record-keeper-700px.png')" 
                :srcset="require('@/assets/images/project-images/record-keeper/record-keeper-700px.webp') + ' 700w, ' +
                require('@/assets/images/project-images/record-keeper/record-keeper-1200px.webp') + ' 1200w'"
                alt='database built with ReactJS and Postgresql' width='100%' 
                />
            </div>
            <div class='project-links'>
                <a target='_blank' href="https://github.com/c0llid3r/recordkeeper">VIEW CODE</a>
                <a target='_blank' href="https://distracted-liskov-55fae3.netlify.app">VIEW LIVE</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showImage (imageId) {
            const imageLink = require(`@/assets/gifs/${imageId}.gif`)
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
    mounted () {
        window.scrollTo(0,0)
        this.fadeProjects()
        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 50)
    }
}
</script>