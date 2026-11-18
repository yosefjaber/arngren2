<script>
  // App.svelte is the top of the component tree. Everything else lives inside it.
  // Its job: draw the header, the CURRENT page, and the footer.

  import { store, route, t } from './lib/store.svelte.js';

  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import HomePage from './pages/HomePage.svelte';
  import ProductPage from './pages/ProductPage.svelte';
  import CartPage from './pages/CartPage.svelte';
  import ThanksPage from './pages/ThanksPage.svelte';
  import AboutPage from './pages/AboutPage.svelte';

  const figmaPhoto = `${import.meta.env.BASE_URL}photos/figma.png`;
  let figmaReady = $state(false);
  let figma = $state();

  function prepareFigmaPhoto({ currentTarget: photo }) {
    photo.style.setProperty('--figma-ratio', String(photo.naturalWidth / photo.naturalHeight));
    figmaReady = true;
  }

  // $effect runs once at the start, and again whenever a value it reads changes.
  // Here it copies our dark-mode and language choices onto the <html> tag:
  //   - the CSS in app.css looks at  data-theme  to pick the colors
  //   - screen readers and translation tools look at  lang
  $effect(() => {
    document.documentElement.dataset.theme = store.dark ? 'dark' : 'light';
    document.documentElement.lang = store.lang === 'no' ? 'nb' : 'en';
  });
</script>

<Header />

<main class="container">
  <!-- Show one page, depending on the address (see "PAGES" in store.svelte.js) -->
  {#if route.page === 'product'}
    <ProductPage />
  {:else if route.page === 'cart'}
    <CartPage />
  {:else if route.page === 'thanks' && store.lastOrder}
    <ThanksPage />
  {:else if route.page === 'about'}
    <AboutPage />
  {:else}
    <HomePage />
  {/if}
</main>

<Footer />

<!-- A small message at the bottom of the screen ("Added to your cart!").
     The box is always on the page, so screen readers announce it when text appears. -->
<div class="toast" role="status">
  {#if store.notice}
    <span>{t(store.notice)}</span>
  {/if}
</div>

{#if figmaReady}
  <button class="figma-trigger" type="button" aria-label="Figma" onclick={() => figma.showModal()}></button>
{/if}

<dialog class="figma" bind:this={figma} aria-label="Figma preview">
  <button class="figma-dismiss" type="button" aria-label="Close Figma preview" onclick={() => figma.close()}>
    <img src={figmaPhoto} alt="" onload={prepareFigmaPhoto} />
  </button>
</dialog>

<style>
  main {
    padding-block: 1.5rem 3rem;
    min-height: 70vh;
  }

  .toast {
    position: fixed;
    bottom: 1.25rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    pointer-events: none; /* clicks pass through the (invisible) box */
    z-index: 20;
  }

  .toast span {
    padding: 0.7em 1.3em;
    border-radius: 999px;
    background: var(--text);
    color: var(--bg);
    font-weight: 600;
    box-shadow: var(--shadow);
  }

  .figma-trigger {
    position: fixed;
    right: env(safe-area-inset-right, 0px);
    bottom: env(safe-area-inset-bottom, 0px);
    z-index: 21;
    width: 1.125rem;
    height: 1.125rem;
    padding: 0;
    border: 0;
    background: transparent;
  }

  .figma {
    --figma-fade-duration: 5.6s;
    --figma-grow-duration: 12s;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: white;
    overflow: hidden;
  }

  .figma::backdrop {
    background: transparent;
  }

  .figma-dismiss {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline-offset: -4px;
  }

  .figma-dismiss img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: max(100%, calc(100dvh * var(--figma-ratio, 1)));
    height: auto;
    translate: -50% -50%;
  }

  .figma[open] {
    animation: figma-fade-in var(--figma-fade-duration) ease both;
  }

  .figma[open] img {
    animation: figma-grow var(--figma-grow-duration) ease-in-out var(--figma-fade-duration) both;
  }

  @keyframes figma-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes figma-grow {
    from { scale: 0.015; visibility: hidden; }
    to { scale: 1; visibility: visible; }
  }
</style>
