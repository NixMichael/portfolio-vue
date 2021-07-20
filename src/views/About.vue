<template>
    <div id='about' class='container about-container'>
        <div class='text-content'>
            <div class="full-title"><h1><span class='title-font highlight-color'>Experience</span></h1></div>

            <div class="experience-links">
                <a class="experience-buttons" href="#history">HISTORY</a>
                <a class="experience-buttons" href="#coding-skills">CODING</a>
                <a class="experience-buttons" href="#design-skills">DESIGN</a>
            </div>

            <h3 id="history"><br><br><br>History</h3>
            <p class='first-para'>My fascination with computers and programming began back in my early teens when I inherited a BBC MICRO. I figured out how to fill the screen with text using a loop and was immediately hooked. Over the next few years I found more and more to love about computers with both the hardware and software side of things.</p>
            <p>The first language I learnt in depth was Visual Basic, mostly using it to create simple games. Once I had an internet connection I discovered HTML and began experimenting, tweaking existing web pages and building my own with the Notepad. My interest grew and grew as I learned about other programming languages and the existence of open source Linux based operating systems.</p>
            <p>At some point during college I became interested in photography. This led me to quite an abrupt but rewarding decision to switch from a maths and computing degree to photography and multimedia production, achieving a BSc (Hons). Soon after graduating I began working as a clinical photographer in the NHS.</p>
            <p>Throughout my clinical photography career my interest in web development continued. Over the years I built websites for colleagues and numerous portfolio sites for my photography.</p>
            <p>In 2019, having spent over ten years as a clinical photographer, I found myself being drawn back to web development with even more enthusiasm than before.</p>
            <h3 id="coding-skills"><br><br><br>Coding Skills</h3>
            <p>I have experience in the following:</p>
            <br><br>
                <ul>
                    <li>HTML and CSS/SCSS</li>
                    <li>JavaScript (including ES6+)</li>
                    <li>jQuery</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>React.js + Redux</li>
                    <li>Vue.js + Vuex</li>
                    <li>Node.js</li>
                    <li>Webpack</li>
                    <li>Using and building APIs</li>
                    <li>Relational databases including MySQL and PostgreSQL</li>
                    <li>Package managers including NPM and Composer</li>
                    <li>Git and GitHub for version control</li>
                </ul>

            <p>I began my transition back into web development by first of all focusing on my JavaScript skills. Once I felt confident with my abilities I moved on to React.js which really opened my eyes to the possibilities of modern web development. From there I learnt to build similar front-end interfaces using Vue.js, and soon after delved back into PHP and began experimenting with Laravel.</p>
            <h3 id="design-skills"><br><br><br>Design Skills</h3>
            <p>Having trained and worked as a photographer and videographer, I also have extensive experience using creative editing software. I have been using Adobe products for over fifteen years, including Photoshop, Illustrator and Premiere Pro. I also have experience with similar software including Inkscape and GIMP.</p>
            <img style='width: 40%; max-width: 400px' src='@/assets/graphics/adobe-logos.png' alt='design software experience'>
            <p>I enjoy using Illustrator or Inkscape to create vector graphics for logos and icons, although I feel most comfortable in Photoshop, not surprisingly due to my extensive background in photography.</p>
            <p><br>To see some examples of my work take a look at the <router-link :to="{ name: 'Projects' }" class='inline-link'>Projects</router-link> page and please get in touch if you'd like to collaborate or find out more.</p>
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0,0)
    setTimeout(() => {
        document.querySelector('.menu-toggler').checked = false
    }, 50)
  }
}
</script>

<style lang="scss" scoped>
@use '@/scss/_colors.scss' as *;

.about-container {
    .experience-links {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin: 0 auto;

        .experience-buttons {
            margin: 0 1.5em;
            padding: 0.5em 1em;
            text-decoration: none;
            border-radius: 10px;
            background: rgba(255,255,255,0.5);
            box-shadow: 0 5px 10px 1px rgba(0,0,0,0.3);
        }
    }
}
    @media screen and (max-width: 350px) {
        .about-container .experience-links {
            flex-wrap: wrap;
            .experience-buttons {
                margin: 0.5em 1em;
            }
        }
    }

    @media screen and (min-width: 3000px) {
       .experience-links .experience-buttons {
            background: $darkmode-bg-color;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 2px 8px 1px rgba(255, 255, 255, 0.3);
        }
    }
</style>