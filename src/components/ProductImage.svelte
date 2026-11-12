<script>
  // Shows a product "picture". We do not have photos yet, so it shows the
  // product's emoji on a colored tile. The color comes from the category.
  //
  // This component is used in three places (product card, product page, cart),
  // so it takes a `size` as input: 'small', 'medium' or 'large'.
  //
  // To use a real photo: add  image: 'photos/my-photo.jpg'  to the product in
  // products.js and put the file in  public/photos/ . Then it shows the photo.

  import { findCategory } from '../lib/products.js';

  // $props() is how a component receives its inputs from the parent.
  // `size = 'medium'` means: if the parent does not give a size, use 'medium'.
  let { product, size = 'medium' } = $props();

  // $derived makes a value that is recalculated when its inputs change.
  let category = $derived(findCategory(product.category));
</script>

<!-- The product name is written next to the picture, so the picture is
     "decorative" and screen readers can skip it (aria-hidden). -->
<div class="tile {size}" style="--hue: {category.hue}" aria-hidden="true">
  {#if product.image}
    <img src={product.image} alt="" />
  {:else}
    <span>{product.emoji}</span>
  {/if}
</div>

<style>
  .tile {
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: var(--radius);
    background: hsl(var(--hue) var(--tile-s) var(--tile-l));
    line-height: 1;
    user-select: none;
  }

  .tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .small {
    flex: none;
    width: 64px;
    height: 64px;
    font-size: 2rem;
    border-radius: 12px;
  }

  .medium {
    height: 170px;
    font-size: 5rem;
  }

  .large {
    aspect-ratio: 4 / 3;
    font-size: clamp(6rem, 22vw, 11rem);
  }
</style>
