import singleSpaSvelte from 'single-spa-svelte';
import singleSpaCss from 'single-spa-css';
import App from './app/App.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

const cssLifecycles = singleSpaCss({
  cssUrls: ['self'],
  webpackExtractedCss: false,
  shouldUnmount: true,
  timeout: 5000,

  createLink(url) {
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = url === 'self' ? import.meta.url.replace('js', 'css') : url;
    return linkEl;
  },
});

export const bootstrap = [cssLifecycles.bootstrap, svelteLifecycles.bootstrap];

export const mount = [cssLifecycles.mount, svelteLifecycles.mount];

export const unmount = [svelteLifecycles.unmount, cssLifecycles.unmount];
