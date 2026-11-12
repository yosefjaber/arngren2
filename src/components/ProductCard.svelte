<script>
  // ONE product in the grid. Every product looks exactly the same here:
  // picture, name, short description, price and an "Add to cart" button.
  // (The original site gave every product a different layout, font and size.)

  import { t, localized, addToCart } from '../lib/store.svelte.js';
  import { formatPrice } from '../lib/format.js';
  import ProductImage from './ProductImage.svelte';

  // The parent (HomePage) gives us the product to show.
  let { product } = $props();
</script>

<article>
  <!-- Clicking the picture or the name opens the product page -->
  <a class="link" href="#/product/{product.id}">
    <ProductImage {product} />
    <h3>{localized(product.name)}</h3>
  </a>

  <p class="description">{localized(product.description)}</p>

  <div class="footer">
    <span class="price">
      {#if product.price !== null}
        {formatPrice(product.price)}
      {:else}
        {t('priceOnRequest')}
      {/if}
    </span>

    <button
      class="button primary"
      onclick={() => addToCart(product.id)}
      aria-label="{t('addToCart')}: {localized(product.name)}"
    >
      {t('addToCart')}
    </button>
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.9rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    color: inherit;
    text-decoration: none;
  }

  .link:hover h3 {
    text-decoration: underline;
  }

  h3 {
    font-size: 1.1rem;
  }

  .description {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
    /* Keep every card the same height: show at most 3 lines of text */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* margin-top: auto pushes the price and button to the bottom of the card */
  .footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 0.4rem;
  }

  .price {
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--accent);
  }
</style>
