import Vue from "vue";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import App from "./App";

new Vue ( {
    el: "#app",
    render: h => h(App)
});

