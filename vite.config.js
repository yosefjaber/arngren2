// Vite is the tool that runs our site while we work on it ("npm run dev")
// and bundles it into plain files when we are done ("npm run build").
// The only thing it needs to know is that we are using Svelte.

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],

  // './' makes the built site use relative file paths, so it still works
  // when it is hosted in a sub-folder (for example on GitHub Pages).
  base: './',
});
