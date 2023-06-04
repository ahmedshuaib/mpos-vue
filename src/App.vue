<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Navigation></Navigation>
    <Header></Header>
    <Sidebar></Sidebar>
</template>

<script>
import Navigation from "./components/common/Navigation.vue";
import Header from "./components/common/Header.vue";
import Sidebar from "./components/common/Sidebar.vue";

export default {
    name: "App",
    components: {
        Navigation,
        Header,
        Sidebar,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
