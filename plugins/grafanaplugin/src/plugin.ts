import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const grafanapluginPlugin = createPlugin({
  id: 'grafanaplugin',
  routes: {
    root: rootRouteRef,
  },
});

export const GrafanapluginPage = grafanapluginPlugin.provide(
  createRoutableExtension({
    name: 'GrafanapluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
