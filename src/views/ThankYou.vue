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
                <p class='first-para'>My fascination with computers and programming reaches as far back as my very early teens when I inherited a BBC MICRO. I figured out how to fill the screen with my name using a loop and was immediately hooked. Over the next few years I found more to love about computing. The first language I learnt in depth was Visual Basic. Once I had an internet connection I began experimenting with HTML, tweaking existing web pages and building my own with a basic text editor. My interest grew and grew as I learned about other programming languages and the existence of open source Linux operating systems.</p>
                <p>At some point during college I became interested in photography. This led me to quite an abrupt but rewarding decision to switch from a maths and computing course to a focus on photography, achieving a BSc (Hons) in Photography and Media Production. Soon after graduating I began working as a clinical photographer in the NHS.</p>
                <p>Throughout my clinical photography career my interest in web design continued. Over the years I've had the opportunity to build websites for colleagues as well as a number of portfolio sites for my personal photography.</p>
                <p>Now, having spent over ten years as a clinical photographer, I find myself being drawn back to web development with even more enthusiasm than before.</p>
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

                    <p>My first venture back into web development began with learning JavaScript. Once I felt confident with my abilities I moved on to React which was a real eye opener to the possibilities of modern web development. From there I learnt to build similar products using Vue and soon after delved back into PHP and began experimenting with Laravel. The learning never ends and <a target="_blank" href="https://c0llid3r.github.io/snake"><span class='inline-link' id='snake'>never gets dull</span></a>.</p>
                </p>
                <h3 id="design-skills"><br><br><br>Design Skills</h3>
                <p>
                    Having trained and worked as a photographer and videographer, I also have extensive experience using creative editing software. I have been using Adobe products including Photoshop, Illustrator and Premiere Pro for over ten years. I also have experience with similar software including Inkscape and GIMP.
                </p>
                <img src='@/assets/graphics/adobe-logos.png' alt='design software experience' height='80px'>
                <p>I enjoy using Illustrator or Inkscape to create vector graphics for logos and icons, although I feel most comfortable in Photoshop, not surprisingly due to my extensive background in photography.</p>
                <p><br><br><br>To see some examples of my work take a look at the <router-link to="/" class='inline-link'>Projects</router-link> page and please get in touch if you'd like to collaborate or find out more.</p>
            </div>
        </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0,0)
  }    
}

</script>