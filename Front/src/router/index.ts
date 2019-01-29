import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            { path: '/', name: 'home', components: { options: { template: '<div> Hello Main Page?</div>' } } },
            { path: '/sub', name: 'sub', component: () => import('../components/Sub.vue') }
        ]
    });
}