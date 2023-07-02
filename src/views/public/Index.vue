<template>
    <div>
        <h2>Hello, World Public Pages</h2>
        <router-link :to="{ name: 'dashboard' }">Goto Dashboard</router-link>
    </div>
</template>

<script>
export default {
    name: "public",
};
</script>
