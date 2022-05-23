<template>
    <div>
        <section class="landing">
            <div class="introduction">hi, my name is</div>
            <div class="name">samuel hertrich</div>
            <div class="professions">
                <ul class="professions-list">
                    <li class="first">i am a tec lover</li>
                    <li class="second">i am an it student</li>
                    <li class="third">i am a developer</li>
                </ul>
            </div>
            <a href="#about" class="btn-start">who i am</a>
        </section>
        <span class="anchor" id="about"></span>
        <section class="about-me">
            <h1><span>></span>about me</h1>
            <div>
                <div class="text">
                    <p>welcome to my website! my name is samuel and i enjoy creating things on and for computers. my interest in web development started back in 2018 when my mothers’ small company needed a website.</p>
                    <p>currently i am studying at a university of applied sciences and i am the one who takes care of the it systems at home and at my mothers' work.</p>
                    <p>these technologies i've been using recently:</p>
                    <ul>
                        <li><span>></span>javascript</li>
                        <li><span>></span>vue.js</li>
                        <li><span>></span>symfony</li>
                        <li><span>></span>wordpress</li>
                        <li><span>></span>php</li>
                    </ul>
                </div>
                <div class="picture">
                    <img src="../assets/picture.png">
                </div>
            </div>
        </section>
        <span class="anchor" id="work"></span>
        <section class="work">
            <h1><span>></span>what i've build</h1>
            <div>
                <div v-for="(project, i) in projects" :key="i" class="card">
                    <div class="preview">
                        <img :src="project.imgUrl">
                    </div>
                    <div class="information">
                        <h3>{{ project.name }}</h3>
                        <a>{{ project.links.website }}</a>
                        <div>
                            <div class="tags">
                                <div v-for="(tag, j) in project.tags" :key="j">{{ tag }}</div>
                            </div>
                            <div class="links">
                                <a v-if="project.links.github != ''" :href="project.links.github" target="_blank"><svg viewBox="0 0 13 13" fill="#9EA7A9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.81251 0.312547C2.93751 0.625047 0.625006 2.93755 0.312506 5.75005C5.60284e-06 8.68755 1.68751 11.3126 4.25001 12.3126C4.43751 12.3751 4.62501 12.2501 4.62501 12.0001V11.0001C4.62501 11.0001 4.37501 11.0626 4.06251 11.0626C3.18751 11.0626 2.81251 10.3126 2.75001 9.87505C2.68751 9.62505 2.56251 9.43755 2.37501 9.25005C2.18751 9.18755 2.12501 9.18755 2.12501 9.12505C2.12501 9.00005 2.31251 9.00005 2.37501 9.00005C2.75001 9.00005 3.06251 9.43755 3.18751 9.62505C3.50001 10.1251 3.87501 10.2501 4.06251 10.2501C4.31251 10.2501 4.50001 10.1875 4.62501 10.125C4.68751 9.68755 4.87501 9.25005 5.25001 9.00005C3.81251 8.68755 2.75001 7.87505 2.75001 6.50005C2.75001 5.81255 3.06251 5.12505 3.50001 4.62505C3.43751 4.50005 3.37501 4.18755 3.37501 3.75005C3.37501 3.50005 3.37501 3.12505 3.56251 2.75005C3.56251 2.75005 4.43751 2.75005 5.31251 3.56255C5.62501 3.43755 6.06251 3.37505 6.50001 3.37505C6.93751 3.37505 7.37501 3.43755 7.75001 3.56255C8.56251 2.75005 9.50001 2.75005 9.50001 2.75005C9.62501 3.12505 9.62501 3.50005 9.62501 3.75005C9.62501 4.25005 9.56251 4.50005 9.50001 4.62505C9.93751 5.12505 10.25 5.75005 10.25 6.50005C10.25 7.87505 9.18751 8.68755 7.75001 9.00005C8.12501 9.31255 8.37501 9.87505 8.37501 10.4376V12.0626C8.37501 12.2501 8.56251 12.4376 8.81251 12.3751C11.125 11.4376 12.75 9.18755 12.75 6.56255C12.75 2.81255 9.56251 -0.124953 5.81251 0.312547Z"/>
                                    </svg>
                                </a>
                                <a :href="project.links.website" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="#9EA7A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeComponent',
    data () {
        return {
            projects: [
                { imgUrl: "", name: "personal website", links: { website: "https://samuelhertrich.com", github: "https://github.com/samuelhertrich/personal-website-v1" }, tags: [ "vue.js" ]},
                { imgUrl: "", name: "studentenapartments", links: { website: "https://studentenapartments.de", github: "" }, tags: [ "wordpress" ]},
                { imgUrl: "", name: "casa bella", links: { website: "http://casabella-in.de", github: "" }, tags: [ "bootstrap", "html", "css" ]},
            ]
        }
    },
}
</script>

<style>

.landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.landing .introduction {
    font-family: var(--secondary-font);
    color: var(--accent-color-100);
    margin-bottom: 10px;
}

.landing .name {
    color: var(--secondary-color);
}

.landing .professions {
    font-family: var(--secondary-font);
    overflow: hidden;
}

.landing .professions .professions-list .first,
.landing .professions .professions-list .second,
.landing .professions .professions-list .third {
    position: relative;
    width: max-content;
}

.landing .professions .professions-list .first::before,
.landing .professions .professions-list .first::after,
.landing .professions .professions-list .second::before,
.landing .professions .professions-list .second::after,
.landing .professions .professions-list .third::before,
.landing .professions .professions-list .third::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.landing .professions .professions-list .first::before,
.landing .professions .professions-list .second::before,
.landing .professions .professions-list .third::before {
    background-color: var(--primary-background-color);
}

.landing .professions .professions-list .first::after,
.landing .professions .professions-list .second::after,
.landing .professions .professions-list .third::after {
    width: .1rem;
    background-color: var(--accent-color-50);
}

.landing .professions .professions-list .first::before {
    animation: typewriter var(--type-writer-duration) steps(17) var(--type-writer-delay) alternate infinite;
}

.landing .professions .professions-list .first::after {
    animation: 
        typewriter var(--type-writer-duration) steps(17) var(--type-writer-delay) alternate infinite,
        blink 500ms steps(11) infinite;
}

.landing .professions .professions-list .second::before {
    animation: typewriter var(--type-writer-duration) steps(19) var(--type-writer-delay) alternate infinite;
}

.landing .professions .professions-list .second::after {
    animation: 
        typewriter var(--type-writer-duration) steps(19) var(--type-writer-delay) alternate infinite,
        blink 500ms steps(11) infinite;
}

.landing .professions .professions-list .third::before {
    animation: typewriter var(--type-writer-duration) steps(17) var(--type-writer-delay) alternate infinite;
}

.landing .professions .professions-list .third::after {
    animation: 
        typewriter var(--type-writer-duration) steps(17) var(--type-writer-delay) alternate infinite,
        blink 500ms steps(11) infinite;
}

.landing .btn-start {
    font-size: .8rem;
    width: 150px;
    margin-top: 50px;
    padding: 10px 0;
    font-family: var(--secondary-font);
    color: var(--accent-color-100);
    border: 1px solid var(--accent-color-100);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-content: center;
}

.about-me > div {
    display: flex;
}

.about-me .text ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 80px;
}

.about-me .text ul li {
    line-height: 150%;
}

.about-me .text ul li span {
    color: var(--accent-color-100);
    margin-right: 5px;
    font-size: .8rem;
}

.about-me .picture {
    height: 100%;
    width: 100%;
    position: relative;
}

.about-me .picture::before,
.about-me .picture::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
    transition: 300ms ease;
}

.about-me .picture::before {
    top: 0;
    left: 0;
    background-color: var(--accent-color-50);
}

.about-me .picture::after {
    top: 10px;
    left: 10px;
    border: 2px solid var(--accent-color-50);
    z-index: -1;
}

.about-me .picture:hover::before {
    cursor: pointer;
    background-color: transparent;
}

.about-me .picture:hover::after {
    top: 5px;
    left: 5px;
}

.about-me .picture img {
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
}

.work > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.work .card {
    background-color: var(--accent-color-500);
    border-radius: var(--border-radius);
    margin-bottom: 50px;
}

.work .card .preview {
    width: 100%;
    height: auto;
    position: relative;
}

.work .card .preview::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--accent-color-50);
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
    transition: 300ms ease;
}

.work .card .preview:hover::after {
    cursor: pointer;
    background-color: transparent;
}

.work .card .preview img {
    width: 100%;
    height: 100%;
}

.work .card .information {
    margin: 20px;
}

.work .card .information h3 {
    color: var(--secondary-color);
    margin-bottom: 10px;
}

.work .card .information a {
    font-size: .5rem;
    font-family: var(--secondary-font);
    color: var(--accent-color-100);
}

.work .card .information > div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.work .card .information > div .tags {
    width: calc(100% - 2 * (20px + 10px));
    display: flex;
    flex-wrap: wrap;
}

.work .card .information > div .tags div {
    margin-right: 20px;
    font-size: .5rem;
    font-family: var(--secondary-font);
}

.work .card .information > div .links {
    display: flex;
}

.work .card .information > div .links a {
    width: 15px;
    height: 15px;
    margin-left: 10px;
}


@keyframes typewriter {
    to {
        left: calc(100% + 1ch);
    }
}

@keyframes blink {
    to {
        background: transparent;
    }
}

@keyframes move-6s {
    to {
        transform: translateY(-7.5rem);
    }
}

@keyframes move-6l {
    to {
        transform: translateY(-9rem);
    }
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .landing {
        height: calc(100vh - var(--nav-height-6s) - var(--burger-menu-height) - var(--footer-height-6s) - var(--section-margin));
    }

    .landing .introduction {
        font-size: .8rem;
    }

    .landing .name {
        font-size: 2.5rem;
    }

    .landing .professions {
        height: 2.5rem;
        font-size: 1.5rem;
        line-height: 2.5rem;
    }

    .landing .professions .professions-list {
        animation: move-6s calc(var(--type-writer-duration) * 2 * 3) steps(3) var(--type-writer-delay) normal infinite;
    }

    .landing .professions .professions-list .first::before,
    .landing .professions .professions-list .first::after,
    .landing .professions .professions-list .second::before,
    .landing .professions .professions-list .second::after,
    .landing .professions .professions-list .third::before,
    .landing .professions .professions-list .third::after {
        height: 2.5rem;
    }

    .about-me > div {
        flex-direction: column;
    }
    
    .about-me .picture {
        margin-top: 30px;
        max-width: 250px;
    }

    .work .card {
        width: 100%;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    .landing {
        height: calc(100vh - var(--nav-height-6l) - var(--footer-height-6l) - var(--section-margin));
    }

    .landing .introduction {
        font-size: 1rem;
    }

    .landing .name {
        font-size: 3.5rem;
    }

    .landing .professions {
        height: 3rem;
        font-size: 2rem;
        line-height: 3rem;
    }

    .landing .professions .professions-list {
        animation: move-6l calc(var(--type-writer-duration) * 2 * 3) steps(3) var(--type-writer-delay) normal infinite;
    }

    .landing .professions .professions-list .first::before,
    .landing .professions .professions-list .first::after,
    .landing .professions .professions-list .second::before,
    .landing .professions .professions-list .second::after,
    .landing .professions .professions-list .third::before,
    .landing .professions .professions-list .third::after {
        height: 3rem;
    }

    .about-me > div {
        flex-direction: column;
    }
    
    .about-me .picture {
        margin-top: 30px;
        max-width: 250px;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

    .landing {
        height: calc(100vh - var(--nav-height-7) - var(--footer-height-6l) - var(--section-margin));
    }

    .landing .introduction {
        font-size: 1rem;
    }

    .landing .name {
        font-size: 4rem;
    }

    .about-me > div {
        flex-direction: row;
    }
    
    .about-me .picture {
        margin-top: 0;
        margin-left: 50px;
        max-width: 200px;
    }

    .work .card {
        width: 45%;
    }

}

</style>