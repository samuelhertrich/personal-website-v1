<template>
    <div class="cookie-banner" id="cookie-banner">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, alias sapiente iure sit dignissimos odit dolorum incidunt rem, impedit necessitatibus, nemo totam perferendis modi quae nobis aperiam quaerat? Tempore, quo?</p>
        <div>
            <div v-on:click="closeCookieBanner" id="closeIcon" class="accept">accept</div>
            <router-link to="/data-protection"><a>data protection</a></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CookieBannerComponent',
    methods: {
        closeCookieBanner: function () {
            const cookieBanner = document.getElementById('cookie-banner');

            cookieBanner.style.display = "none";
        }
    }
}
</script>

<style>

.cookie-banner {
    background-color: var(--accent-color-500);
    width: 100%;
    min-height: 60px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cookie-banner p {
    margin: 0;
}

.cookie-banner div {
    display: flex;
}

.cookie-banner div .accept {
    cursor: pointer;
    color: var(--accent-color-100);
    width: 100px;
    margin-right: 20px;
    padding: 5px 0;
    border: 1px solid var(--accent-color-100);
    display: flex;
    justify-content: center;
    align-items: center;
}

.cookie-banner div a {
    color: var(--primary-color);
    width: 100px;
    text-decoration: underline;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

    .cookie-banner {
        padding: var(--padding-6s);
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    .cookie-banner {
        padding: var(--padding-6l);
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

    .cookie-banner {
        padding: var(--padding-7);
    }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

    .cookie-banner {
        padding: var(--padding-9);
    }

}

</style>