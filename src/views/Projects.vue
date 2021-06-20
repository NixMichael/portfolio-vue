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
                Passionate about building websites and apps with a variety of technologies, I enjoy both coding and visual design.
            </p>
            <p>
                My skillset includes both front and backend technologies. I am experienced in Javascript and PHP as well as various frameworks and libraries (React, Vue, Laravel), writing server side code with Node.js and Express, and working with databases including MySQL and PostgreSQL.
            </p>
            <p>Take a look at some of my projects below and don't hesitate to get in touch!</p>
            <div id="projects" class='title-flow'>Projects</div>
        </div>

        <div class='fader'>
            <div class='project-description'>
                <h3>GP Assistant</h3>
                <div class='description' data-simplebar data-simplebar-auto-hide="false">
                    <p>
                        GP appointments and messaging system, built using OOP PHP.
                    </p>
                    <p>
                        Based on an existing GP system, I wanted to create a similar system but with a better user experience.
                    </p>
                    <p>
                        Patients are able to log in to the system to book and cancel appointments, as well have discussions with their GP without having to attend the surgery.
                    </p>
                </div>
            </div>
            <div class='image-container' id='gp-assistant' @click='showImage($event.currentTarget.id)'>
                <img 
                :srcset="require('@/assets/images/project-images/gp-assistant/gp-assistant-700px.webp') + ' 700w, ' + require('@/assets/images/project-images/gp-assistant/gp-assistant-1200px.webp') + ' 1200w '"
                :src="require('@/assets/images/project-images/gp-assistant/gp-assistant-700px.png')" 
                alt='e-commerce website with PayPal integration' />

            </div>
            <div class='project-links'>
                <a target='_blank' href="https://github.com/c0llid3r/gpassistant">VIEW CODE</a>
                <a target='_blank' href="https://serene-hollows-39973.herokuapp.com/">VIEW LIVE</a>
            </div>
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
                        I saw it was in need of a redesign and decided it would make for an interesting VueJS project.
                    </p>
                    <p>
                        Building this website gave me great insight into integrating payment methods, using PayPal on this occasion. I also added the option to toggle between Pounds Sterling and Euros currencies.
                    </p>
                </div>
            </div>
            <div class='image-container' id='green-oil' @click='showImage($event.currentTarget.id)'>
                <img 
                :srcset="require('@/assets/images/project-images/green-oil/green-oil-700px.webp') + ' 700w, ' + require('@/assets/images/project-images/green-oil/green-oil-1200px.webp') + ' 1200w '"
                :src="require('@/assets/images/project-images/green-oil/green-oil-700px.png')" 
                alt='e-commerce website with PayPal integration' />

            </div>
            <div class='project-links'>
                <a target='_blank' href="https://github.com/c0llid3r/green-oil">VIEW CODE</a>
                <a target='_blank' href="https://elastic-lovelace-14cb3f.netlify.app/">VIEW LIVE</a>
            </div>
        </div>

        <div class='fader'>
            <div class='project-description'>
                <h3>Medical Illustration Database</h3>
                <div class='description' data-simplebar data-simplebar-auto-hide="false">
                    <p>
                        Full stack database solution built using ReactJS, NodeJS and PostgreSQL.
                    </p>
                    <p>
                        This was built as a potential upgrade to an old MS Access database which had been in use since the mid 90s.
                    </p>
                    <p>
                        I initially took a class based approach to building the app, but having learned how to use React Hooks and Redux I rebuilt the app to take advantage of this new approach. This was a great learning experience, reviewing my original code and discovering where it could be changed to improve the functionality and reliability of the app.
                    </p>
                    <p>
                        My most complex project to date, but also the most enjoyable as I was able to really get to grips with the full capabilities of React.
                    </p>
                </div>
            </div>
            <div class='image-container' id='record-keeper' @click='showImage($event.currentTarget.id)'>
                <img 
                :srcset="require('@/assets/images/project-images/record-keeper/record-keeper-700px.webp') + ' 700w, ' +
                require('@/assets/images/project-images/record-keeper/record-keeper-1200px.webp') + ' 1200w'"
                :src="require('@/assets/images/project-images/record-keeper/record-keeper-700px.png')" 
                alt='database built with ReactJS and Postgresql' width='100%' 
                />
            </div>
            <div class='project-links'>
                <a target='_blank' href="https://github.com/c0llid3r/recordkeeper">VIEW CODE (FE)</a>
                <a target='_blank' href="https://github.com/c0llid3r/recordkeeper-api">VIEW CODE (BE)</a>
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
        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 50)
        this.fadeProjects()

        const description = document.querySelectorAll('.description')

        document.querySelectorAll('.project-description').forEach((el, i) => {
            el.addEventListener('mouseleave', () => {
                description[i].scrollTop = 0
            })
        })
    }
}
</script>