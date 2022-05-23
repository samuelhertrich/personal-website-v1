<template>
    <footer>
        <ul>
            <router-link to="/imprint"><li><span>></span>imprint</li></router-link>
            <router-link to="/data-protection"><li><span>></span>data protection</li></router-link>
        </ul>
        <div>designed & build by samuel hertrich</div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style>

footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

footer ul {
    display: flex;
}

footer ul li {
    color: var(--secondary-color);
}

footer ul li span {
    color: var(--accent-color-100);
    margin-right: 5px;  
}

footer div {
    font-family: var(--secondary-font);
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    footer {
        height: var(--footer-height-6s);
        margin-bottom: var(--burger-menu-height);
    }

    footer ul li {
        font-size: 1.2rem;
        margin: 0 30px 20px 30px;
    }

    footer div {
        font-size: .6rem;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    footer {
        height: var(--footer-height-6l);
        margin-bottom: var(--footer-margin-bottom-6l);
    }

    footer ul li {
        font-size: 1.2rem;
        margin: 0 30px 15px 30px;
    }

    footer div {
        font-size: 1rem;
    }

}

</style>