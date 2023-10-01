<script>
import {RouterView} from "vue-router";

import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    components: {
        NavbarComponent,
        FooterComponent,
    },
    data() {
        return {
            title: "Vue.js App",
            description: "A simple Vue.js application.",
        };
    },
};
</script>

<template>
    <div id="app">
        <NavbarComponent />
        <div class="center-top">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
        <FooterComponent />
        <RouterView />
    </div>
</template>

<style>
#app {
    text-align: center;
    font-family: Arial, sans-serif;
}
</style>
