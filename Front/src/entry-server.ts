import Vue from 'vue';
import { createApp } from './App';

export default function createContext(context: any) {
    return new Promise<Vue>((resolve, reject) => {
        const { app, router } = createApp();

        router.push(context.url);

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();

            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }

            Promise.all(matchedComponents.map((component) => {
            })).then(() => {
                console.log('find it!');
                resolve(app);
            });
        }, reject);
    });
}