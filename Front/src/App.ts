import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import VueRouter from 'vue-router';

export function createApp(): { app: Vue, router: VueRouter } {
    const router = createRouter();

    const app = new Vue({
        el: '#app',
        render: h => h(App),
        router
    });

    return { app, router };
}