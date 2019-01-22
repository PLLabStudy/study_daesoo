import { createApp } from './app';

export default function createContext(context: any) {
    const { app } = createApp();
    return app;
}