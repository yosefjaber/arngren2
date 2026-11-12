<script>
  // A row of buttons for choosing a category. Clicking one filters the products.
  // The buttons wrap onto a second line on small screens, so there is never
  // any sideways scrolling.

  import { categories, products } from '../lib/products.js';
  import { store, t, localized, productsInCategory } from '../lib/store.svelte.js';
</script>

<nav aria-label={t('categoriesLabel')}>
  <!-- The "All" button -->
  <button
    class="chip"
    class:active={store.category === 'all'}
    aria-pressed={store.category === 'all'}
    onclick={() => (store.category = 'all')}
  >
    {t('allCategories')}
    <span class="count">{products.length}</span>
  </button>

  <!-- One button for every category. {#each ... (category.id)} loops over the list. -->
  {#each categories as category (category.id)}
    <button
      class="chip"
      class:active={store.category === category.id}
      aria-pressed={store.category === category.id}
      style="--hue: {category.hue}"
      onclick={() => (store.category = category.id)}
    >
      {localized(category.name)}
      <span class="count">{productsInCategory(category.id)}</span>
    </button>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.4em 0.9em;
    border: 2px solid var(--border);
    border-radius: 999px;
    background: var(--surface);
    color: var(--text);
    font: inherit;
    cursor: pointer;
  }

  .chip:hover {
    border-color: var(--text);
  }

  /* The selected category gets the dark/navy look */
  .chip.active {
    background: var(--navy);
    border-color: var(--navy);
    color: var(--bg);
    font-weight: 700;
  }

  .count {
    font-size: 0.85em;
    opacity: 0.75;
  }
</style>
