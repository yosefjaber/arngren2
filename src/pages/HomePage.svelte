<script>
  // The home page: a short intro, the category buttons, a sort menu,
  // and the grid of products.

  import CategoryBar from '../components/CategoryBar.svelte';
  import ProductCard from '../components/ProductCard.svelte';
  import { store, t, visibleProducts, clearFilters, goToRandomProduct } from '../lib/store.svelte.js';

  // The products that match the current search, category and sort.
  // $derived re-runs visibleProducts() whenever store.query, store.category
  // or store.sort changes, so the grid always stays up to date.
  let results = $derived(visibleProducts());
</script>

<section class="hero">
  <div>
    <h1>{t('heroTitle')}</h1>
    <p>{t('heroSub')}</p>
    <button class="button" onclick={goToRandomProduct}>🎲 {t('surprise')}</button>
  </div>
  <div class="hero-art" aria-hidden="true"><span> <img src="photos/arngren_logo.gif" alt="arngrenlogo"> </span></div>
</section>

<CategoryBar />

<div class="toolbar">
  <!-- Result count. Different text if the visitor is searching. -->
  <p class="count" aria-live="polite">
    {#if store.query.trim() !== ''}
      {t('resultsFor', { n: results.length, query: store.query.trim() })}
    {:else}
      {t('productsCount', { n: results.length })}
    {/if}
  </p>

  <div class="sort">
    <label for="sort">{t('sortLabel')}</label>
    <select id="sort" bind:value={store.sort}>
      <option value="featured">{t('sortFeatured')}</option>
      <option value="priceLow">{t('sortPriceLow')}</option>
      <option value="priceHigh">{t('sortPriceHigh')}</option>
    </select>
  </div>
</div>

<!-- Show the grid, or a friendly message if nothing matches -->
{#if results.length > 0}
  <div class="grid">
    <!-- (product.id) is a "key": it helps Svelte keep track of each card -->
    {#each results as product (product.id)}
      <ProductCard {product} />
    {/each}
  </div>
{:else}
  <div class="empty">
    <p>{t('noResults')}</p>
    <button class="button primary" onclick={clearFilters}>{t('clearSearch')}</button>
  </div>
{/if}

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    padding: 1.5rem 1.75rem;
    border-radius: var(--radius);
    background: var(--hero-bg);
    color: #ffffff;
  }

  h1 {
    white-space: pre-line;
  }

  .hero h1 {
    max-width: 22ch;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
  }

  .hero p {
    margin: 0.6rem 0 1rem;
    max-width: 50ch;
    opacity: 0.9;
  }

  /* The flying saucer slowly floats up and down (turned off automatically
     for people who ask for less motion, see app.css) */
  .hero-art {
    font-size: 5.5rem;
    line-height: 1;
    animation: float 5s ease-in-out infinite;
  }

  @keyframes float {
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 560px) {
    .hero-art {
      display: none;
    }
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-block: 1.25rem 1rem;
  }

  .count {
    margin: 0;
    font-weight: 600;
  }

  .sort {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* The product grid: as many columns as fit, each at least 260px wide */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.1rem;
  }

  .empty {
    padding: 3rem 1rem;
    text-align: center;
  }
</style>
