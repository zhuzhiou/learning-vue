import Vue from 'vue';
import VueRouter from 'vue-router';

import Homepage from './Homepage';
import About from './About';

Vue.use(VueRouter);

const routes = [
    {
        path: '/Homepage', component: Homepage
    },
    {
        path: '/About', component: About
    }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router
});