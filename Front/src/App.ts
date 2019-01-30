import Vue from 'vue';
import App from './App.vue';

// TODO: Lazy-load, vuex도 추가해야한다,
// TODO: 음 국제화 추가해야 하는데..
import i18n from './translations';
import { createRouter } from './router';

export function createApp() {
    const router = createRouter();

    const app = new Vue({
        router,
        i18n,
        render: h => h(App)
    });

    return { app, router };
}