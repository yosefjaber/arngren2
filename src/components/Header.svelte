<script>
  // The header is on every page: logo, search, language, dark mode and cart.

  import { store, t, cartCount } from '../lib/store.svelte.js';

  // Runs every time the visitor types in the search box.
  function onSearchInput() {
    store.category = 'all'; // search looks in ALL products, not just one category
    location.hash = '#/'; // and make sure we are on the page that shows the results
  }
</script>

<header>
  <div class="container bar">
    <a class="logo" href="#/">
      <span class="logo-icon" aria-hidden="true"> <img src="photos/arngren_logo.gif" alt="arngrenlogo"> </span>
      <!-- {t('siteName')} -->
    </a>

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
        class="button"
        onclick={() => (store.lang = store.lang === 'en' ? 'no' : 'en')}
        aria-label={t('switchLanguage')}
      >
        🌐 {store.lang === 'en' ? 'Norsk' : 'English'}
      </button>

      <!-- Dark mode -->
      <button
        class="button"
        onclick={() => (store.dark = !store.dark)}
        aria-label={store.dark ? t('switchToLight') : t('switchToDark')}
      >
        {store.dark ? '☀️' : '🌙'}
      </button>

      <!-- Cart. The red number only shows when the cart is not empty. -->
      <a class="button primary" href="#/cart">
        🛒 {t('cart')}
        {#if cartCount() > 0}
          <span class="badge">{cartCount()}</span>
        {/if}
      </a>
    </div>
  </div>
</header>

<style>
  header {
    background: var(--surface);
    border-bottom: 3px solid var(--accent);
  }

  /* On a phone the header is two rows tall, so it scrolls away with the page
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

  /* On a phone: logo and buttons on the first row, search box on the second row. */
  .actions {
    order: 2;
    margin-left: auto;
    display: flex;
    gap: 0.5rem;
  }

  .search {
    order: 3;
    flex-basis: 100%;
  }

  .search input {
    width: 100%;
    border-radius: 999px;
  }

  /* On a wider screen: everything on one row, with the search box in the middle. */
  @media (min-width: 800px) {
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
</style>
