import { createApp } from 'vue';
import App from './App.vue';

// css-global-files//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js';

import "bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';


import '@/assets/css/style.css';
import '@/assets/css/responsive.css';
import '@/assets/css/product.css';
// css-global-files-end//


// js-global-files//
import jQuery from 'jquery';
window.$=window.jQuery=jQuery;
// js-global-files-end//


//vuex-store//



// mixins-js-files//
import { datatable,Home,product } from './mixins';
// mixins-js-files-end//


// pages-path//
import sidebar from './components/common/Sidebar.vue';
import navigation from './components/common/Navigation.vue';
import footer from './components/common/Footer.vue';


// pages-path-end//
import router from '@/router';
const app=createApp(App);
app.component('tsidebar',sidebar);
app.component('tnavigation',navigation);
app.component('tfooter',footer);

app.use(router);
app.mixin(datatable);
app.mixin(product);
app.mixin(Home)
app.mount('#app');
