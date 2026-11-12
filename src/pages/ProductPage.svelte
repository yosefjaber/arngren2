<script>
  // The page for ONE product: big picture, price, description, specs and
  // an "Add to cart" button.

  import ProductImage from '../components/ProductImage.svelte';
  import { route, t, localized, addToCart } from '../lib/store.svelte.js';
  import { findProduct, findCategory } from '../lib/products.js';
  import { formatPrice } from '../lib/format.js';

  // route.productId comes from the web address (#/product/hoverpod).
  // If there is no such product, `product` is undefined and we show a message.
  let product = $derived(findProduct(route.productId));
  let category = $derived(product ? findCategory(product.category) : null);

  // Turn the specs object { power: '750 W', speed: ... } into a list of pairs
  // so we can loop over it:  [['power', '750 W'], ['speed', ...]]
  let specs = $derived(product ? Object.entries(product.specs) : []);
</script>

<a class="back" href="#/">{t('backToShop')}</a>

{#if product}
  <div class="layout">
    <ProductImage {product} size="large" />

    <div class="info">
      <p class="category">{localized(category.name)}</p>
      <h1>{localized(product.name)}</h1>

      <p class="price">
        {#if product.price !== null}
          {formatPrice(product.price)}
        {:else}
          {t('priceOnRequest')}
        {/if}
      </p>

      <p class="description">{localized(product.description)}</p>

      <button class="button primary big" onclick={() => addToCart(product.id)}>
        🛒 {t('addToCart')}
      </button>

      <!-- Only show the table if this product has any specs -->
      {#if specs.length > 0}
        <h2>{t('specifications')}</h2>
        <table>
          <tbody>
            {#each specs as [key, value] (key)}
              <tr>
                <!-- 'spec_' + 'power' = 'spec_power', the translation key -->
                <th scope="row">{t('spec_' + key)}</th>
                <td>{localized(value)}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>
  </div>
{:else}
  <p>{t('productNotFound')}</p>
{/if}

<style>
  .back {
    display: inline-block;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  /* Picture on the left, info on the right. On a phone they stack. */
  .layout {
    display: grid;
    gap: 1.5rem;
    align-items: start;
  }

  @media (min-width: 800px) {
    .layout {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
  }

  .category {
    margin: 0 0 0.3rem;
    color: var(--muted);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  h1 {
    font-size: clamp(1.7rem, 4vw, 2.4rem);
  }

  .price {
    margin: 0.6rem 0;
    color: var(--accent);
    font-size: 1.8rem;
    font-weight: 800;
  }

  .description {
    margin: 0 0 1.25rem;
    max-width: 55ch;
    font-size: 1.1rem;
  }

  .big {
    padding: 0.8em 1.6em;
    font-size: 1.1rem;
  }

  h2 {
    margin: 2rem 0 0.6rem;
    font-size: 1.2rem;
  }

  table {
    width: 100%;
    max-width: 480px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.6rem 0.4rem;
    border-bottom: 1px solid var(--border);
    text-align: left;
  }

  th {
    width: 45%;
    color: var(--muted);
    font-weight: 600;
  }
</style>
