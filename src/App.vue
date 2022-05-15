<template>
  <div id="app">
    <NavbarComponent/>
    <div class="main-container">
      <div class="content-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent,
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');

:root {
  
  font-size: 16px;

  --nav-height-6s: 50px;
  --nav-height-6l: 60px;
  --nav-height-7: 80px;

  --burger-menu-height: 60px;

  --padding-6l: 0 20px;
  --padding-7: 0 40px;
  --padding-9: 0 80px;

  --section-margin: 100px;

  --primary-font: 'Roboto', sans-serif;
  --secondary-font: 'B612 Mono', monospace;
  
  --primary-background-color: #0E153A;
  --primary-color: #9EA7A9;
  --secondary-color: #E2F3F5;
  --accent-color-100: rgba(34, 209, 238, 1);
  --accent-color-50: rgba(34, 209, 238, .5);
  --accent-color-500: #0B102D;

}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--primary-background-color);
  font-family: var(--primary-font);
  color: var(--primary-color);
}

p {
    line-height: 200%;
    margin-bottom: 15px;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

.main-container {
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  width: 100%;
  margin-top: var(--nav-height);
  display: flex;
  justify-content: center;
}

.content-container {
  width: 100%;
}

.anchor{
  display: block;
  visibility: hidden;
}

section {
    margin: var(--section-margin) 0;
}

section h1 {
    position: relative;
    font-family: var(--secondary-font);
    font-size: 1.5rem;
    color: var(--secondary-color);
    display: inline;
}

section h1::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 60px;
    top: 50%;
    left: calc(100% + 20px);
    background-color: var(--primary-color);
}

section h1 span {
    margin-right: 10px;
    color: var(--accent-color-100);
    font-size: 1.2rem;
}

section h1 + div {
    margin-top: 30px;
}

</style>
