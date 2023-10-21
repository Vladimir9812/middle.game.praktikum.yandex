/* eslint-disable unicorn/prefer-module */

import * as path from 'node:path';
import * as fs from 'node:fs';

import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

dotenv.config();

const startServer = async () => {
  const app = express();

  app.use(cors());
  const port = Number(process.env.SERVER_PORT) || 3005;
  const distributionPath = path.dirname(require.resolve('client/dist/index.html'));
  const sourceClientPath = require.resolve('client/dist-ssr/client.cjs');

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });

  app.use('/src', express.static(path.resolve(distributionPath, 'src'), { index: false }));

  app.use('*', async (request, res, next) => {
    try {
      const url = request.originalUrl;
      console.log(url);
      const template = fs.readFileSync(path.resolve(`${distributionPath}`, 'index.html'), 'utf8');
      const { render } = await import(sourceClientPath);
      const appHtml = await render(url);
      console.log(appHtml);
      const html = template.replace('<!--ssr-outlet-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      next(error);
    }
  });

  // app.get('*', (_, res) => {
  //   res.sendFile('index.html', { root: `${clientDir}` });
  // });
};

startServer();
