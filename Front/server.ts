const fs = require('fs');
const path = require('path');
const express = require('express');
const resolve = (file: any) => path.resolve(__dirname, file);
const { createBundleRenderer } = require('vue-server-renderer');

const app = express();

function createRenderer(bundle: any, options: any) {
    return createBundleRenderer(bundle, Object.assign(options, {
        runInNewContext: false
    }));
}

let renderer: any;
let readyPromise: any;
const templatePath = resolve('../src/index.template.html');

// In production
const template = fs.readFileSync(templatePath, 'utf-8')
const bundle = require('./vue-ssr-server-bundle.json')
const clientManifest = require('./vue-ssr-client-manifest.json')
renderer = createRenderer(bundle, {
    template,
    clientManifest
})

app.use('/dist', express.static(resolve('./dist')));
app.use('/public', express.static(resolve('./public')));
app.use('/static', express.static(resolve('./static')));

function render(req: any, res: any) {

    res.setHeader("Content-Type", "text/html");

    const handleError = (err: any) => {
        if (err.url) {
            res.redirect(err.url);
        } else if (err.code === 404) {
            res.status(404).send('404 | Page Not Found');
        } else {
            res.status(500).send('500 | Internal Server Error');
            console.error(`error during render : ${req.url}`);
            console.error(err.stack);
        }
    }

    function renderSelectedStyles() {

    }

    const context = {
        title: 'title',
        url: req.url
    }
    renderer.renderToString(context, (err: any, html: any) => {
        if (err) {
            return handleError(err);
        }
        res.send(html);
    });
}

const port = 8080;

app.get('*', render);

app.listen(port, () => {
    console.log(`server started at ${port}`)
})