// TODO: 이게 js지, ts냐? 똑바로 type 지정 및 typescript로 변환좀 하자. 2019.01.29 SDS
const fs = require('fs');
const path = require('path');
const express = require('express');
const resolve = (file: any) => path.resolve(__dirname, file);
const { createBundleRenderer } = require('vue-server-renderer');

function createRenderer(bundle: any, options: any) {
    return createBundleRenderer(bundle, Object.assign(options, {
        runInNewContext: false
    }));
}

// TODO: SSR Flow 확실하게 숙지하여보자. 음.. 상당히 어렵다.
const template = fs.readFileSync(resolve('../src/index.template.html'), 'utf-8');
const bundle = require('./vue-ssr-server-bundle.json');
const clientManifest = require('./vue-ssr-client-manifest.json');

const renderer: any = createRenderer(bundle, {
    template,
    clientManifest
});

// TODO: 앞으로 Gzip 적용하게 되면서 아마 js gzip 속성임을 content-type에 명시해 줘야 할것 이다.
const app = express();

app.use('/dist', express.static(resolve('./dist')));
app.use('/static', express.static(resolve('./static')));
app.get('*', render);

function render(req: any, res: any) {

    res.setHeader("Content-Type", "text/html");

    const handleError = (err: any) => {
        if (err.url) {
            res.redirect(err.url);
        } else if (err.code === 404) {
            res.status(404).send('404 | Page Not Found');
        } else {
            res.status(500).send('500 | Internal Server Error');
        }
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

app.listen(port, () => {
    console.log(`server started at ${port}`)
})