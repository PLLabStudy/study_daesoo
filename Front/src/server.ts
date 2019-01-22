import { createApp } from './app';
import VuerRenderer from 'vue-server-renderer';
import express from 'express';

const server = express();
const renderer = VuerRenderer.createRenderer();

server.get('*', (req, res) => {
    const context = { url: req.url };
    const { app } = createApp();

    console.log('asdf');

    renderer.renderToString(app, (err, html) => {
        // handle error...
        res.end(html);
    });
})