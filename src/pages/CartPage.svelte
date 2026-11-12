<script>
  // The cart page: the items you added, and a short order form.
  // (The original shop had no cart at all. You had to phone or email.)

  import ProductImage from '../components/ProductImage.svelte';
  import {
    t,
    localized,
    cartLines,
    cartTotal,
    cartHasQuoteItems,
    changeQuantity,
    removeFromCart,
    placeOrder,
  } from '../lib/store.svelte.js';
  import { formatPrice } from '../lib/format.js';

  // Recalculated automatically whenever the cart changes
  let lines = $derived(cartLines());
  let total = $derived(cartTotal(lines));
  let hasQuoteItems = $derived(cartHasQuoteItems(lines));

  // What the visitor types in the form. bind:value (below) keeps these up to date.
  let form = $state({ name: '', email: '', phone: '', message: '' });

  // true = show an error message under that field
  let errors = $state({ name: false, email: false });

  function submitOrder(event) {
    event.preventDefault(); // do not reload the page

    // Check the fields. The email check is simple: "something@something.something"
    errors.name = form.name.trim() === '';
    errors.email = !/^\S+@\S+\.\S+$/.test(form.email.trim());

    if (errors.name || errors.email) return; // stop here, the errors are now visible

    placeOrder(form); // see store.svelte.js
  }
</script>

<h1>{t('cartTitle')}</h1>

{#if lines.length === 0}
  <p class="empty">{t('cartEmpty')}</p>
  <a class="button primary" href="#/">{t('backToShop')}</a>
{:else}
  <div class="layout">
    <!-- LEFT: the items -->
    <ul class="lines">
      {#each lines as line (line.id)}
        <li>
          <ProductImage product={line.product} size="small" />

          <div class="name">
            <a href="#/product/{line.id}">{localized(line.product.name)}</a>
            <span class="each">
              {line.product.price !== null ? formatPrice(line.product.price) : t('priceOnRequest')}
            </span>
          </div>

          <!-- Quantity: minus, number, plus -->
          <div class="quantity" role="group" aria-label={t('quantity')}>
            <button
              class="round"
              onclick={() => changeQuantity(line.id, -1)}
              aria-label={t('decrease')}
            >−</button>
            <span class="number">{line.qty}</span>
            <button
              class="round"
              onclick={() => changeQuantity(line.id, 1)}
              aria-label={t('increase')}
            >+</button>
          </div>

          <strong class="line-total">
            {line.product.price !== null ? formatPrice(line.product.price * line.qty) : '—'}
          </strong>

          <button class="remove" onclick={() => removeFromCart(line.id)}>{t('remove')}</button>
        </li>
      {/each}
    </ul>

    <!-- RIGHT: total and order form -->
    <aside>
      <p class="total">
        <span>{t('total')}</span>
        <strong>{formatPrice(total)}</strong>
      </p>
      {#if hasQuoteItems}
        <p class="note">{t('quoteNote')}</p>
      {/if}

      <h2>{t('orderTitle')}</h2>

      <!-- novalidate: we show our own error messages instead of the browser's -->
      <form onsubmit={submitOrder} novalidate>
        <div class="field">
          <label for="name">{t('nameLabel')}</label>
          <input
            id="name"
            type="text"
            autocomplete="name"
            bind:value={form.name}
            aria-invalid={errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {#if errors.name}
            <p class="error" id="name-error">{t('errorName')}</p>
          {/if}
        </div>

        <div class="field">
          <label for="email">{t('emailLabel')}</label>
          <input
            id="email"
            type="email"
            autocomplete="email"
            bind:value={form.email}
            aria-invalid={errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {#if errors.email}
            <p class="error" id="email-error">{t('errorEmail')}</p>
          {/if}
        </div>

        <div class="field">
          <label for="phone">{t('phoneLabel')}</label>
          <input id="phone" type="tel" autocomplete="tel" bind:value={form.phone} />
        </div>

        <div class="field">
          <label for="message">{t('messageLabel')}</label>
          <textarea id="message" rows="3" bind:value={form.message}></textarea>
        </div>

        <button class="button primary big" type="submit">{t('placeOrder')}</button>
        <p class="note">{t('prototypeNote')}</p>
      </form>
    </aside>
  </div>
{/if}

<style>
  h1 {
    margin-bottom: 1.25rem;
  }

  .layout {
    display: grid;
    gap: 2rem;
    align-items: start;
  }

  @media (min-width: 900px) {
    .layout {
      grid-template-columns: 1.6fr 1fr;
    }
  }

  /* ----- item list ----- */
  .lines {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem 1rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--border);
  }

  .name {
    flex: 1 1 160px;
    display: flex;
    flex-direction: column;
  }

  .name a {
    font-weight: 700;
  }

  .each {
    color: var(--muted);
    font-size: 0.9rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .round {
    width: 2.2rem;
    height: 2.2rem;
    border: 2px solid var(--border);
    border-radius: 50%;
    background: var(--surface);
    color: var(--text);
    font: inherit;
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
  }

  .round:hover {
    border-color: var(--text);
  }

  .number {
    min-width: 1.5rem;
    text-align: center;
    font-weight: 700;
  }

  .line-total {
    min-width: 6.5rem;
    text-align: right;
  }

  .remove {
    border: none;
    background: none;
    color: var(--muted);
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  .remove:hover {
    color: var(--accent);
  }

  /* ----- total and form ----- */
  aside {
    padding: 1.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 1.3rem;
  }

  .total strong {
    color: var(--accent);
  }

  .note {
    margin: 0.5rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
  }

  h2 {
    margin: 1.5rem 0 0.8rem;
    font-size: 1.2rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.9rem;
  }

  label {
    font-weight: 600;
  }

  input[aria-invalid='true'] {
    border-color: var(--accent);
  }

  .error {
    margin: 0;
    color: var(--accent);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .big {
    width: 100%;
    padding: 0.8em 1.4em;
    font-size: 1.1rem;
  }
</style>
