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
</style>
