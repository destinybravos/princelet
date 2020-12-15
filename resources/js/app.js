require('./bootstrap');

require('moment');

import Vue from 'vue';

// Font-Awesome Integration
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
 
library.add(faUserSecret, faBell, faSignOutAlt)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';

Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
