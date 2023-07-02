import { createApp } from "vue";
import App from "./App.vue";

// css-global-library-files//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

// css-global-files//
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/product.css";
import "./assets/css/login.css";
// css-global-files-end//

// js-global-files//
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
// js-global-files-end//

// mixins-js-files//
// import { datatable, Home, product, imagedrop } from "./mixins";
// mixins-js-files-end//

import router from "./router";

const app = createApp(App);

app.use(router);
// app.mixin(datatable);
// app.mixin(imagedrop);
// app.mixin(product);
// app.mixin(Home);
app.mount("#app");
