import Vue from 'vue';
import VueRouter from 'vue-router';

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
// TODO: 추후 code splitting 을 위해서 동적 routing 하도록 하자.
Vue.use(VueRouter)

export function createRouter(): VueRouter {
    return new VueRouter({
        mode: 'history',
        routes: [
            { path: '/', component: { template: '<div> Home Page </div>' } },
            { path: '/login', component: { template: '<div> Login Page </div>' } },
        ]
    });
}
