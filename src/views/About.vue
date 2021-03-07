<template>
            <div id='about' class='container about-container'>
            <div class='text-content'>
                <h1><span class='title-font highlight-color'>Experience</span></h1>

            <div class="experience-links">
                <a class="experience-buttons" href="#history">HISTORY</a>
                <a class="experience-buttons" href="#coding-skills">CODING</a>
                <a class="experience-buttons" href="#design-skills">DESIGN</a>
            </div>

            <h3 id="history"><br><br><br>History</h3>
                <p class='first-para'>My fascination with computers and programming reaches as far back as my very early teens when I inherited a BBC MICRO. I figured out how to fill the screen with text using a loop and was immediately hooked. Over the next few years I found more and more to love about computers with both the hardware and software side of things.</p>
                <p>The first language I learnt in depth was Visual Basic, mostly using it to create simple games. Once I had an internet connection I discovered HTML and began experimenting, tweaking existing web pages and building my own with the Windows text editor. My interest grew and grew as I learned about other programming languages and the existence of open source Linux based operating systems.</p>
                <p>At some point during college I became interested in photography. This led me to quite an abrupt but rewarding decision to switch from a maths and computing course to a photography and multimedia degree, achieving a BSc (Hons) in Photography and Media Production. Soon after graduating I began working as a clinical photographer in the NHS.</p>
                <p>Throughout my clinical photography career my interest in web development continued. Over the years I built websites for colleagues and a number of portfolio sites for my photography.</p>
                <p>In 2019, having spent over ten years as a clinical photographer, I found myself being drawn back to web development with even more enthusiasm than before.</p>
                <h3 id="coding-skills"><br><br><br>Coding Skills</h3>
                <p>My experience lies in the following:
                <br><br>
                    <ul>
                        <li>HTML and CSS/SCSS</li>
                        <li>JavaScript (including ES6)</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>ReactJS + Redux</li>
                        <li>VueJS + Vuex</li>
                        <li>NodeJS</li>
                        <li>Using and building APIs</li>
                        <li>Relational databases including MySQL and PostgreSQL</li>
                        <li>Package managers including NPM and Composer</li>
                        <li>Git and GitHub for version control</li>
                    </ul>

                    <p>My move back into web development began by improving my JavaScript skills. Once I felt confident with my abilities I moved on to React which really opened my eyes to the possibilities of modern web development. From there I learnt to build similar products using Vue, and soon after delved back into PHP and began experimenting with Laravel. The learning never ends and <a target="_blank" href="https://c0llid3r.github.io/snake"><span class='inline-link' id='snake'>never gets dull</span></a>.</p>
                </p>
                <h3 id="design-skills"><br><br><br>Design Skills</h3>
                <p>
                    Having trained and worked as a photographer and videographer, I also have extensive experience using creative editing software. I have been using Adobe products for over fifteen years, including Photoshop, Illustrator and Premiere Pro. I also have experience with similar software including Inkscape and GIMP.
                </p>
                <img src='@/assets/graphics/adobe-logos.png' alt='design software experience' height='80px'>
                <p>I enjoy using Illustrator or Inkscape to create vector graphics for logos and icons, although I feel most comfortable in Photoshop, not surprisingly due to my extensive background in photography.</p>
                <p><br><br><br>To see some examples of my work take a look at the <router-link :to="{ name: 'Projects' }" class='inline-link'>Projects</router-link> page and please get in touch if you'd like to collaborate or find out more.</p>
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