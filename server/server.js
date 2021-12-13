import React from "react";
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import App from '../src/App'


const PORT = 5000;
const app = express();
const router = express.Router();

const serverRendered = (req, res) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send("An error occurred !");
        }

        return res.send(
            data.replace(
                `<div id="root"></div>`,

                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );

    });
}

router.use("^/$", serverRendered);

router.use(
    express.static(path.resolve(__dirname, "..", "build"), {maxAge: "30d"})
);

app.use(router);

app.listen(PORT, () => console.log("SSR running at 5000 !"));
