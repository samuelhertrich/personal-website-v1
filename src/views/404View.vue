<template>
    <section class="not-found">
        <div>404</div>
        <p>looks like the site doesn't exist.</p>
    </section>
</template>

<script>
export default {
  name: '404View',
}
</script>

<style>

.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.not-found div {
    font-size: 5rem;
    font-family: var(--secondary-font);
    color: var(--secondary-color);
}

</style>