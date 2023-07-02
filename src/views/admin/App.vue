<template>
    <div>
        <tnavigation></tnavigation>
        <tsidebar></tsidebar>
        <div class="main__body">
            <router-view></router-view>
            <tfooter></tfooter>
        </div>
    </div>
</template>

<script>
import sidebar from "@/components/admin/common/Sidebar.vue";
import navigation from "@/components/admin/common/Navigation.vue";
import footer from "@/components/admin/common/Footer.vue";

export default {
    name: "dashboard",
    components: {
        tsidebar: sidebar,
        tnavigation: navigation,
        tfooter: footer,
    },
};
</script>
