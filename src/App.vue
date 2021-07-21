<template>
    <div class='header'>
      <div class='menu-container'>
          <input class='menu-toggler' type='checkbox'/>
          <div class='burger-menu'><div></div></div>
          <div class='menu'>
              <div id='darkmode-container' class='no-select'>
                  <img src='@/assets/graphics/light-mode-icon.png'>
                  <div id='darkmode-toggler' class='no-select' @Click="toggleDarkMode()">
                      <div id='toggler'></div>
                  </div>
                  <img src='@/assets/graphics/dark-mode-icon.png'>
              </div>
              <ul>
                  <li class="link" id='link-projects'>
                    <router-link :to="{ name: 'Projects' }" class="links" active-class="active-link">PROJECTS</router-link>
                  </li>
                  <li class="link" id='link-home'>
                    <router-link :to="{ name: 'About' }" class='links' active-class="active-link">ABOUT</router-link>
                  </li>
                  <li class="link" id='link-contact'>
                    <router-link :to="{ name: 'Contact' }" class='links' active-class="active-link">CONTACT</router-link>
                  </li>
                  <li class="link" id='link-blog'>
                    <router-link :to="{ name: 'Blog' }" class='links' active-class="active-link">BLOG</router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class='banner'>
          <router-link class='logo' to='/'>
            <img id='logo' src='@/assets/graphics/LogoLight-500px.png' alt='logo' />
          </router-link>
          <div class='contact-links'>
              <a target='_blank' href='mailto:mpnix@protonmail.com' class='header-link' id='email-link'></a>
              <a target='_blank' href='https://github.com/c0llid3r' class='header-link' id='github-link'></a>
              <a target='_blank' href='https://www.linkedin.com/in/michael-nix-a0b88b200/' class='header-link' id='linkedin-link'></a>
          </div>
      </div>
  </div>

  <div class='main'>
    <router-view/>
    <div class='scrollToTop' :class="this.$route.name === 'Projects' || this.$route.name === 'About' ? 'scroll' : ''" @Click="scrollToTop()">
        <span>Top</span>
        <img id='scroll-to-top' src="@/assets/graphics/scroll-to-top.png" alt='Scroll To Top'>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
      return {
          darkMode: false
      }
  },
  methods: {
    toggleDarkMode () {
        this.darkMode = !this.darkMode
        console.log(this.darkMode)
        
        const logo = document.getElementById('logo')
        const toggler = document.getElementById('darkmode-toggler')
        const scrollIcon = document.getElementById('scroll-to-top')

        if (document.body.clientWidth <= 750) {
            const logoSource = this.darkMode
            ? require('@/assets/graphics/LogoLight-500px.png')
            : require('@/assets/graphics/LogoDark-500px.png')
            logo.src = logoSource
        } else {
            logo.src = require('@/assets/graphics/LogoLight-500px.png')
        }

        scrollIcon.src = this.darkMode ? require('@/assets/graphics/scroll-to-top.png') : require('@/assets/graphics/scroll-to-top-white.png')

        toggler.style.justifyContent = toggler.style.justifyContent !== 'flex-end' 
        ? 'flex-end' : 'flex-start'

        document.getElementById('body').classList.toggle('dark-mode')

        setTimeout(() => {
            document.querySelector('.menu-toggler').checked = false
        }, 400)
    },
    closeMenu () {
      setTimeout(() => {
          document.querySelector('.menu-toggler').checked = false
      }, 200)
    },
    setLogo () {
      const docWidth = document.body.clientWidth
      const logo = document.getElementById('logo')

      logo.src = docWidth > 750 
      ? require('./assets/graphics/LogoLight-500px.png')
      : require('./assets/graphics/LogoDark-500px.png')
    },
    scrollToTop () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  },
  mounted () {
    this.setLogo()

    const scroller = document.querySelector('.scrollToTop')

    document.addEventListener('scroll', () => {
        window.scrollY > 300 ? scroller.style.opacity = 1 : scroller.style.opacity = 0
    })
  }
}
</script>

<style lang="scss">

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    overflow-x: hidden;
}

body {
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background-color: $lightmode-bg-color;

    a, a:active, a:visited {
        color: black;
    }

    h1 {
        font-size: 1.5rem;
    }

    .text-content {

        span {
            font-size: 1em;
        }

        .title-font {
            font-family: 'Baloo Tammudu 2', cursive;
        }

        
        .highlight-color {
            margin-left: -2rem;
            font-size: 3rem;
            color: $highlightFont;
            position: relative;
        }

        .larger-title {
            font-size: 4rem;
        }
    }

    div h2 {
        margin-top: 3rem;
    }

    .inline-link {
        position: relative;
        text-decoration: underline;
        color: black;
        &::after {
            content: '';
            position: absolute;
            opacity: 0;
            top: 120%;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: $highlightFont;
        }
        &:hover {
            cursor: pointer;
            text-decoration: none;
            &::after {
                top: 100%;
                opacity: 1;
                transition: opacity ease-in 600ms, top ease 600ms;
            }
        }
    }

    a {
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }

        &:visited, &:active {
            color: black;
        }
    }
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(#{$burger-dimensions} * 2.5);
    z-index: 9;

    //Fading gradient using pseudo element
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: calc(#{$contactHeight} * 2.5);
        z-index: 1;

        background: -webkit-gradient(linear, top, bottom, color-stop(20%,$lightmode-bg-color), color-stop(100%,rgba(255,255,255,0))); /* Chrome, Safari4+ */
        background: -webkit-linear-gradient(bottom, $lightmode-bg-color 20%, rgba(255,255,255,0) 80%); /* Chrome10+, Safari5.1+ */
        background: -moz-linear-gradient(bottom, $lightmode-bg-color 20%,rgba(255,255,255,0) 100%);    /* FF3.6+ */
        background: linear-gradient(to bottom, $lightmode-bg-color 20%,rgba(255,255,255,0) 80%);      /* W3C */

    }

    .banner {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 1rem;
        right: 0;
        min-height: $contactHeight;
        height: 2.5vw;
        max-height: calc(#{$contactHeight} * 1.5);
        padding: 0;
        color: $lightmode-font-color;
        background: $darkmode-bg-color;
        clip-path: polygon(0.75% 0, 100% 0, 100% 100%, 0 100%);
        z-index: 2;
        
        .logo {
            position: relative;
            display: flex;
            align-items: center;
            height: 85%;
            margin: 0 10px;
            cursor: pointer;
            &::before {
                content: '';
                background: $lightmode-bg-color;
                position: absolute;
                top: -20%;
                right: -5%;
                width: 2px;
                height: 140%;
                transform: rotate(3deg);
            }

            img {
              height: 110%;
            }
        }

        .contact-links {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0.6em;

            a {
                cursor: pointer;
                margin: 0 10px;
                font-size: 1rem;

                &:first-child {
                    margin-left: 0.5rem;
                }

                &:last-child {
                    margin-right: 2em;
                }
            }

            .header-link {
                height: 100%;
                width: 1.75em;
                background-image: url('./assets/graphics/github-logo.png');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;

                &:hover {
                    background-image: url('./assets/graphics/github-logo-hover.png');
                }
            }

            #email-link {
                background-image: url('./assets/graphics/email-icon.png');
                &:hover {
                    background-image: url('./assets/graphics/email-icon-hover.png');
                }
            }
            #linkedin-link {
                background-image: url('./assets/graphics/linkedin-logo.png');

                &:hover {
                    background-image: url('./assets/graphics/linkedin-logo-hover.png');
                }
            }
        }
    }
}

.menu-container {
    margin-top: 1rem;
    margin-right: 2rem;
    position: absolute;
    left: 1rem;
    width: calc(#{$burger-dimensions} * 1.5);
    height: calc(#{$burger-dimensions} * 1.5);

    .menu {
        position: fixed;
        top: 0;
        height: 2000px;
        min-height: 100vh;
        opacity: 1;
        left: 0;
        min-width: $menu-width;
        max-width: 500px;
        width: 15vw;
        transition: right 400ms ease-out, opacity 500ms ease;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        background-color: $darkmode-bg-color;
        clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
        z-index: 1;

        #darkmode-container {
            position: absolute;
            top: 20px;
            width: 100%;
            right: 0;
            padding-right: 15%;
            height: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: white;

            img {
              height: 100%;
            }

            #darkmode-toggler {
                width: 30px;
                height: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border: 1px solid white;
                border-radius: 10px;
                cursor: pointer;
                transition: justify-content 150ms ease-in;
                    
                div {
                    width: 14px;
                    height: 14px;
                    margin: 0 2px;
                    margin-left: 2px;
                    border-radius: 7px;
                    background: rgb(230,230,230);
                }
            }
        }

        ul {
            margin-top: 20vh;
            margin-right: 25%;
            list-style: none;
            font-size: 1em;
            transform: rotate(4deg);
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;

            .link {
                position: relative;
                transform: rotate(-4deg);
                margin-bottom: 2.5rem;
                cursor: pointer;
                font-family: 'Montserrat', sans-serif;
                font-weight: 800;
                text-decoration: none;
                color: white;
                transition: margin-right 200ms ease-in-out;

                &:hover {
                    text-shadow: 0 0 12px white;

                    &::before {
                        position: absolute;
                        left: -20px;
                        top: 0;
                        height: 100%;
                        width: 20px;
                        content: '‣';
                    }
                }

                .links {
                  color: white;
                }

                .active-link {
                color: $highlightFont;
                text-shadow: 0 0 4px $highlightFont;
                &:hover {
                    text-shadow: 0 0 4px $highlightFont;
                    &::before {
                        display: none;
                    }
                }
            }
            }
        }
    }

    .menu-toggler {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        display: none;
        z-index: 10;

        &:checked {
            & + .burger-menu div {
                background-color: $lightmode-bg-color;
                transform: rotate(225deg);
                &::after {
                    background-color: $lightmode-bg-color;
                    top: 0;
                    transform: rotate(90deg);
                }

                &::before {
                    top: 0;
                    background-color: $lightmode-bg-color;
                }
            }

            & ~ .menu {
                right: 0;
                opacity: 1;
            }
        }
    }
    
    .burger-menu {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        z-index: 5;
        
        div {
           width: 80%;
           height: 7px;
           background-color: black;
           position: relative;
           transition: transform 400ms ease-in-out;
           
           &::before, &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 7px;
                background-color: black;
                transition: background-color 2s ease;
            }
            
            &::before {
                top: -15px;
           }

           &::after {
               bottom: -15px;
           }
        }
    }
}

.main {
    position: relative;
    min-height: 100vh;
    width: calc(100vw - ((#{$menu-width} + 15vw) / 2));
    margin-left: calc((#{$menu-width} + 15vw) / 2);
    padding-bottom: 4em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .scrollToTop {
        display: none;
        opacity: 0;
        position: fixed;
        bottom: 0;
        left: calc(50vw + (#{$menu-width}) / 2);
        transform: translateX(-50%);
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin: 2em 0;
        transition: opacity 400ms ease;

        img {
            position: absolute;
            bottom: 101%;
            width: 30px;
            opacity: 0.6;
            transition: opacity 300ms ease;
        }

        span {
            color: rgba(0,0,0,0.6);
            padding: 0.5rem 1rem;
            box-shadow: 0 0 0 4px rgba($darkmode-bg-color, 0.6);
            border-radius: 10px;
            background-color: rgba($lightmode-bg-color, 0.6);
            transition: background-color 300ms ease, box-shadow 300ms ease;
            text-align: center;

            &:hover {
                background-color: rgba($highlightFont, 0.9);
                box-shadow: 0 0 0 4px rgba($darkmode-bg-color, 0.8);

                & ~ img {
                    opacity: 0.8;
                }
            }

        }
    }

    .scroll {
        display: flex;
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: calc(#{$contactHeight} * 1.4);
    padding-top: calc(#{$contactHeight} * 0.5);
    overflow-x: hidden;

    & > .text-content {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            margin-top: 1rem;
        }

        ul {
            margin: 0 auto 2em;
            padding-right: 10%;
        }

        img {
            margin: 0 auto;
        }

        &:last-child {
            padding-bottom: 3rem;
        }
    }

    .title-flow {
        margin: 2.5em 4em;
        position: relative;
        font-size: 2em;
        margin-right: 1em;
        background: $lightmode-bg-color;
        padding: 0 5px;
        &::before, &::after {
            content: '';
            position: absolute;
            width: 50%;
            height: 200%;
            position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        &::before {
            bottom: 25%;
            left: -50%;
            background-image: url('./assets/graphics/ArrowLeft.png');
        }
        &::after {
            top: 50%;
            right: -50%;
            background-image: url('./assets/graphics/ArrowRight.png');
        }
    }
}

.about-container, .contact-container, .blog-container {
    justify-content: flex-start;
    align-items: center;

    & > div {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            margin: 1em 0;
            align-self: flex-start;
        }
    }
}

#about {
    display: flex;
}

#projects {
    display: flex;
}

#contact {
    display: flex;
}

@media screen and (max-width: 350px) {

    .header .banner .logo {
        display: none;
    }
}

@media screen and (max-width: 750px) {

    body {
        font-size: 0.8rem;
        h1 {
            margin-left: -0.3rem;
        }
    }

    .header {
        z-index: 20;

        .banner {
            top: 0;
            height: calc(#{$contactHeight} * 1.5);
            clip-path: none;
            justify-content: flex-end;
            background: none;

            .logo {
                height: 55%;
                right: 1rem;
                &::before {
                    display: none;
                }
            }
            .contact-links {
                display: none;
                width: 0;
            }
        }
    }

    .main {
        width: 95vw;
        margin: 0 auto;

        &::before {
            display: none;
            width: 100%;
        }


        .scrollToTop {
            bottom: -0.5rem;
            left: calc(100vw - 65px);
            z-index: 10;
            span {
                color: white;
                box-shadow: 0 0 0 4px rgba($lightmode-bg-color, 0.9);
                background-color: rgba(0,0,0,0.4);
                &:hover {
                    box-shadow: 0 0 0 4px rgba($lightmode-bg-color, 0.9);
                }
            }
        }

        .container {
            margin: 0 auto;
            height: 100%;
            gap: 2rem;
            padding-top: calc(#{$contactHeight} * 1.5 + 1rem);
        }

        .text-content {
            width: 95%;
    
            .highlight-color {
                margin-left: 0rem;
                font-size: 1.4em;
            }
        }
    }

    .menu-container {
        z-index: 20;

        .menu-toggler {
            display: block;
        }
    
        .menu {
            top: -110vh;
            opacity: 0;
            left: 0;
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            clip-path: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.97);
            transition: top 400ms ease 400ms, opacity 400ms ease;

            #darkmode-container {
                right: 30px;
                padding: 0;
            }

            ul {
                margin: 0;
                transform: rotate(0);
                font-size: 2em;
                .link {
                    transform: rotate(0);
                }
                li {
                    margin: 0 auto;
                    text-align: center;
                }
            }
        }
        width: $burger-dimensions;
        height: $burger-dimensions;

        .burger-menu {
            display: flex;

            div {
                height: 5px;
                
                &::before {
                    top: -10px;
                    height: 5px;
                }
                
                &::after {
                    bottom: -10px;
                    height: 5px;
                }
            }
        }
    }

    .menu-toggler:checked ~ .menu {
        top: 0;
        opacity: 1;
        transition: top 400ms ease 40ms;
    }

    .menu-toggler:not(:checked) ~ .menu {
        opacity: 0;
    }

    .no-select {
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
}

@media screen and (min-width: 900px) {

    .menu-container .menu {
        ul {
            font-size: 1.2rem;
        }
    }

    #email-link, #github-link, #linkedin-link {
        width: 2rem;
    }
}

@media screen and (min-width: 1900px) {

    body {
        font-size: 1.4rem;
    }

    .main::before {
        background: linear-gradient(to bottom, $lightmode-bg-color 55%, transparent 100%);
    }

    .header {
        height: calc(#{$burger-dimensions} * 3.5);

        .banner {
            .contact-links span {
                font-size: 1.5rem;
            }
        }
    }

    .container {
        padding-top: calc(#{$contactHeight} * 5);
        padding-top: 5vw;
    }

    .menu-container .menu {

        #darkmode-container {
            position: absolute;
            top: 30px;
            width: 100%;
            right: 0;
            padding-right: 15%;
            height: 40px;

            #darkmode-toggler {
                width: 50px;
                height: 30px;
                border-radius: 15px;
                display: flex;
                justify-content: left;
                    
                div {
                    width: 20px;
                    height: 20px;
                    margin: 0 4px;
                    margin-left: 4px;
                    border-radius: 14px;
                }
            }
        }

        ul {
            font-size: 1.8rem;
        }
    }
}

@media screen and (min-width: 3000px) {

    body .text-content .highlight-color {
        font-size: 4.7rem;
    }

    .header {
        .banner {
            max-height: calc(#{$contactHeight} * 2.5);
            .contact-links span {
                font-size: 2.5rem;
            }
        }
    }

    .main {
        &::before {
            background: none;
        }

        .container {
            height: 100%;
            margin-top: 0;
        }
    }
}

.dark-mode {
    background: $darkmode-bg-color;
    color: white;
    .inline-link {
        color: white;
    }
    .menu-container .burger-menu > div,
    .menu-container .burger-menu > div::before,
    .menu-container .burger-menu > div::after {
        background: $lightmode-bg-color;
    }

    #snake, a {
        color: white;
    }

    .menu {
        background-color: rgba($darkmode-menu-color, 0.98);
    }

    .banner {
        background: rgba($header-bg-color, 0.6);
        background: none;
    }

    .header::before {
        background: -webkit-gradient(linear, top, bottom, color-stop(20%,$darkmode-bg-color), color-stop(100%,rgba(255,255,255,0)));
        background: -webkit-linear-gradient(bottom, $darkmode-bg-color 20%, rgba(255,255,255,0) 80%);
        background: -moz-linear-gradient(bottom, $darkmode-bg-color 20%,rgba(255,255,255,0) 100%);
        background: linear-gradient(to bottom, $darkmode-bg-color 20%,rgba(255,255,255,0) 80%);
    }

    .title-flow {
        background: $darkmode-bg-color;
    }

    .success-container {
        border: 2px solid $lightmode-bg-color;
    }

    .fader {
        background: none;
        box-shadow: 0 0 4px 0 rgba($highlightFont, 0.7);
        color: white;

        .project-description {
            border-bottom: 0.5rem solid $darkmode-bg-color;
            &::after {
                background: $darkmode-bg-color;
            }
            p:first-child::after {
                background: $darkmode-bg-color;
            }

            &:hover {
                border: none;
            }

            .simplebar-scrollbar::before {
                background-color: white;
            }
        }

        .image-container {
            background: $darkmode-bg-color;
        }

        .project-links a {
            outline: 1px solid white;
            border: 1px solid white;
            color: white;

            &:hover {
                border: 1px solid $darkmode-bg-color;
                outline: 1px solid $darkmode-bg-color;
            }
        }
    }

    .experience-links .experience-buttons {
        background: $darkmode-bg-color;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 2px 8px 1px rgba(255, 255, 255, 0.3);
    }

    .scrollToTop {
        img {
            opacity: 0.7;
        }
        span {
            color: rgba(255,255,255,0.8);
            background-color: rgba($darkmode-bg-color, 0.4);
            box-shadow: 0 0 0 4px rgba(255,255,255,0.7);

            &:hover {
                box-shadow: 0 0 0 4px rgba(255,255,255,0.9);

                & ~ img {
                    opacity: 0.9;
                }
            }
        }
    }

    .footer {
        color: white;
        a {
            color: white;
        }
    }
}
</style>
