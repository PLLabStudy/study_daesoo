import { createApp } from './App';

const { app, router } = createApp();

router.onReady((): void => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);

        if (!matched.length) {
            return next();
        }

        Promise.all(matched.map((component: any) => {
        })).then(() => {
            // TODO: 찾고자 하는 경로의 component 를 찾은 상황 => 이 때 딱히 현재는 action을 따로 하고있지는 않지만. 추후 뭔가 있을지도.
            next();
        }).catch(next);
    });

    app.$mount('#app');
});