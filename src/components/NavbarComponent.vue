<template>
    <nav ref="nav">
        <a href="/#">
            <div class="logo">sh/<span>></span></div>
        </a>
        <ul id="links" class="links">
            <a v-for="(navLink, i) in navLinks" :key="i" :href="navLink.link"><li class="link"><span>></span>{{ navLink.text }}</li></a>
        </ul>
        <ul id="links-mobile" class="links-mobile">
            <a v-for="(navLink, i) in navLinks" :key="i" v-on:click="closeMenu" :href="navLink.link"><li class="link"><span>></span>{{ navLink.text }}</li></a>
        </ul>
        <div class="burger-menu">
          <svg v-on:click="openMenu" id="burgerIcon" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
              <title>menu</title>
              <desc>Created with Sketch.</desc>
              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Outlined" transform="translate(-919.000000, -3438.000000)">
                      <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                          <g id="Outlined-/-Navigation-/-menu" transform="translate(816.000000, 54.000000)">
                              <g>
                                  <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                  <path d="M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z" id="🔹-Icon-Color" fill="red"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          <svg v-on:click="closeMenu" id="closeIcon" style="display: none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
          </svg>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
    data () {
        return {
            navLinks: [
                { text: "home", link: "/#"},
                { text: "about", link: "/#about"},
                { text: "work", link: "/#work"},
            ]
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            var nav = document.getElementsByTagName("nav")[0];

            if (window.top.scrollY >= 60) {
                nav.style.boxShadow = "0 0 80px 0 #0B102D";
            } else {
                nav.style.boxShadow = "none";
            }
        },
        openMenu: function () {
            const burgerIcon = document.getElementById('burgerIcon');
            const closeIcon = document.getElementById('closeIcon');
            const links = document.getElementById('links-mobile');

            links.style.transform = "translateY(0%)";
            links.style.opacity = "1";
            burgerIcon.style.display = "none";
            closeIcon.style.display = "block";
        },
        closeMenu: function () {
            const burgerIcon = document.getElementById('burgerIcon');
            const closeIcon = document.getElementById('closeIcon');
            const links = document.getElementById('links-mobile');

            links.style.transform = "translateY(100%)";
            links.style.opacity = "0";
            burgerIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    }
}
</script>

<style>

nav {
    width: 100%;
    background-color: var(--primary-background-color);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 999999999;
}

nav .logo {
    width: 100%;
    color: var(--secondary-color);
    font-family: var(--secondary-font);
    font-size: 2rem;
}

nav .logo span {
    color: var(--accent-color-100);
}

nav .links,
nav .links-mobile {
    display: flex;
}

nav .links .link,
nav .links-mobile .link {
    color: var(--primary-color);
}

nav .links .link span,
nav .links-mobile .link span {
    color: var(--accent-color-100);
    margin-right: 5px;
}

nav .burger-menu {
    display: none;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    nav {
        height: var(--nav-height-6s);
        justify-content: center;
    }

    nav .links {
        display: none;
    }

    nav .links-mobile {
        width: 100%;
        height: 40vh;
        background-color: var(--accent-color-500);
        position: fixed;
        left: 0;
        bottom: var(--burger-menu-height);
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        transform: translateY(100%);
        opacity: 0;
        transition: 200ms ease-in-out;
    }

    nav .links-mobile .link {
        font-size: 3rem;
    }

    nav .burger-menu {
        width: 100%;
        height: var(--burger-menu-height);
        background-color: var(--accent-color-500);
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999999;
    }

    nav .burger-menu svg {
        height: 24px;
        width: 30px;
    }

    nav .burger-menu svg path {
        fill: var(--primary-color);
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    nav {
        height: var(--nav-height-6l);
        justify-content: space-between;
        padding: var(--padding-6l);
    }

    nav .links .link {
        margin-left: 50px;
    }

    nav .links-mobile {
        display: none;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

    nav {
        height: var(--nav-height-7);
        padding: var(--padding-7);
    }

    nav .links .link {
        font-size: 1.3rem;
        margin-left: 60px;
    }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

    nav {
        padding: var(--padding-9);
    }

    nav .links .link {
        margin-left: 80px;
    }

}

</style>
