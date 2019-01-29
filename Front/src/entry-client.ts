import Vue from 'vue';
import { createApp } from './App';

const { app, router } = createApp();

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);

        if (!matched.length) {
            return next();
        }

        Promise.all(matched.map((component: any) => {
        })).then(() => {
            next();
        }).catch(next);
    });

    app.$mount('#app');
});