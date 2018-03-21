import Vue from 'vue';
import VueRouter from 'vue-router';

import Default from './Default';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Default
        },
        {
            path: '/page1',
            component: Page1
        },
        {
            path: '/page2',
            component: Page2
        },
        {
            path: '/page3',
            component: Page3
        }
    ]
});