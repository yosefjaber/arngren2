<script>
  // The header is on every page: logo, menu, search, language, dark mode and cart.

  import { store, route, t, cartCount } from '../lib/store.svelte.js';

  // Runs every time the visitor types in the search box.
  function onSearchInput() {
    store.category = 'all'; // search looks in ALL products, not just one category
    location.hash = '#/'; // and make sure we are on the page that shows the results
  }

  // Which menu link is the current page? (Used to highlight it.)
  // The shop covers the home page AND the product pages.
  let inShop = $derived(route.page === 'home' || route.page === 'product');
  let inAbout = $derived(route.page === 'about');
</script>

<header>
  <div class="container bar">
    <a class="logo" href="#/">
      <span class="logo-icon" aria-hidden="true"> <img src="photos/arngren_logo.gif" alt="arngrenlogo"> </span>
      <!-- {t('siteName')} -->
    </a>

    <!-- The menu. aria-current="page" tells screen readers which link is the current page,
         and we also use it in the CSS below to highlight that link. -->
    <nav class="menu" aria-label={t('mainMenu')}>
      <a href="#/about" aria-current={inAbout ? 'page' : undefined}>{t('aboutLink')}</a>
    </nav>

    <!-- Pressing Enter in a form would normally reload the page.
         preventDefault() stops that. The results already update as you type. -->
    <form class="search" role="search" onsubmit={(event) => event.preventDefault()}>
      <label class="visually-hidden" for="search-box">{t('searchLabel')}</label>
      <!-- bind:value keeps store.query and the text in the box the same -->
      <input
        id="search-box"
        type="search"
        placeholder={t('searchPlaceholder')}
        bind:value={store.query}
        oninput={onSearchInput}
      />
    </form>

    <div class="actions">
      <!-- Language: the button shows the language you can switch TO -->
      <button
        class="button cart-btn"
        onclick={() => (store.lang = store.lang === 'en' ? 'no' : 'en')}
        aria-label={t('switchLanguage')}
      >
        🌐 {store.lang === 'en' ? 'Norsk' : 'English'}
      </button>

      <!-- Cart. The red number only shows when the cart is not empty. -->
      <a class="button primary cart-btn" href="#/cart">
        🛒 {t('cart')}
        {#if cartCount() > 0}
          <span class="badge">{cartCount()}</span>
        {/if}
      </a>

      <!-- Dark mode -->
      <button
        class="button"
        onclick={() => (store.dark = !store.dark)}
        aria-label={store.dark ? t('switchToLight') : t('switchToDark')}
      >
        {store.dark ? '☀️' : '🌙'}
      </button>
    </div>
  </div>
</header>

<style>
  header {
    background: var(--surface);
    border-bottom: 3px solid var(--accent);
  }

  /* On a phone the header is three rows tall, so it scrolls away with the page
     (it would take up too much of the small screen). On a wider screen it is
     one row, so it can stay at the top while you scroll. */
  @media (min-width: 800px) {
    header {
      position: sticky;
      top: 0;
      z-index: 10;
    }
  }

  .bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem 1rem;
    padding-block: 0.7rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: var(--navy);
  }

  .logo-icon {
    font-size: 1.8rem;
  }

  /* THE MENU: two pill-shaped links.
     - normal:  navy text
     - hover:   a soft background appears
     - current: filled pill (navy background, page color text) */
  .menu {
    display: flex;
    gap: 0.3rem;
  }

  .menu a {
    padding: 0.45em 1em;
    border-radius: 999px;
    color: var(--navy);
    font-weight: 700;
    text-decoration: none;
    transition: background 0.15s;
  }

  .menu a:hover {
    background: var(--bg);
  }

  .menu a[aria-current='page'] {
    background: var(--navy);
    color: var(--surface);
  }

  /* On a phone, from top to bottom:
       row 1: logo and buttons
       row 2: menu
       row 3: search box */
  .actions {
    order: 2;
    margin-left: auto;
    display: flex;
    gap: 0.5rem;
  }

  .menu {
    order: 3;
    flex-basis: 100%;
  }

  .search {
    order: 4;
    flex-basis: 100%;
  }

  .search input {
    width: 100%;
    border-radius: 999px;
  }

  /* On a wider screen: everything on one row.
     logo, menu, search box (takes the leftover space), buttons. */
  @media (min-width: 800px) {
    .menu {
      order: 1;
      flex-basis: auto;
    }

    .search {
      order: 2;
      flex: 1;
      flex-basis: auto;
    }

    .actions {
      order: 3;
      margin-left: 0;
    }
  }

  .badge {
    min-width: 1.5em;
    padding: 0 0.4em;
    border-radius: 999px;
    background: var(--accent-text);
    color: var(--accent);
    font-size: 0.9em;
    text-align: center;
  }

  .cart-btn {
    width: 9rem; /* fixed length; adjust to taste */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    white-space: nowrap;
    box-sizing: border-box;
  }
</style>