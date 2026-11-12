<script>
  // Shown after "Place order". Everything it shows comes from store.lastOrder.
  // (App.svelte only shows this page when lastOrder exists.)

  import { store, t, localized } from '../lib/store.svelte.js';
  import { formatPrice } from '../lib/format.js';

  let order = $derived(store.lastOrder);
</script>

<section>
  <p class="check" aria-hidden="true">✅</p>
  <h1>{t('thanksTitle', { name: order.customer.name })}</h1>
  <p class="number">{t('orderNumber', { number: order.number })}</p>
  <p>{t('thanksBody', { email: order.customer.email })}</p>

  <ul>
    {#each order.lines as line (line.id)}
      <li>
        <span>{line.qty} × {localized(line.product.name)}</span>
        <span>
          {line.product.price !== null ? formatPrice(line.product.price * line.qty) : t('priceOnRequest')}
        </span>
      </li>
    {/each}
  </ul>

  <p class="total">
    <span>{t('total')}</span>
    <strong>{formatPrice(order.total)}</strong>
  </p>
  {#if order.hasQuoteItems}
    <p class="note">{t('quoteNote')}</p>
  {/if}

  <a class="button primary" href="#/">{t('continueShopping')}</a>
</section>

<style>
  section {
    max-width: 520px;
    margin-inline: auto;
    text-align: center;
  }

  .check {
    margin: 0;
    font-size: 3.5rem;
  }

  .number {
    font-weight: 700;
    font-size: 1.1rem;
  }

  ul {
    margin: 1.5rem 0 0;
    padding: 0;
    list-style: none;
    text-align: left;
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border);
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin: 0.8rem 0 0;
    font-size: 1.2rem;
  }

  .note {
    color: var(--muted);
    font-size: 0.9rem;
  }

  a.button {
    margin-top: 1.5rem;
  }
</style>
