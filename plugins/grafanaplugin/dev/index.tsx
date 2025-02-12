import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { grafanapluginPlugin, GrafanapluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(grafanapluginPlugin)
  .addPage({
    element: <GrafanapluginPage />,
    title: 'Root Page',
    path: '/grafanaplugin',
  })
  .render();
