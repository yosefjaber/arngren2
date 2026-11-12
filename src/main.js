// This is the very first file that runs.
// Its only job is to start Svelte and tell it where to draw the app.

import { mount } from 'svelte';
import './app.css'; // global styles (colors, buttons, page width...)
import App from './App.svelte'; // the top-level component

const app = mount(App, {
  target: document.getElementById('app'), // the <div id="app"> in index.html
});

export default app;
