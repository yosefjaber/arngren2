<script>
  // The "About us" page: who is behind arngren.net, and what is the Hoverpod?
  //
  // This page has a lot of text that is NOT used anywhere else, so instead of
  // putting every sentence in translations.js, we keep them right here in the
  // `text` object below. Each piece has an `en` and a `no` version, just like
  // the product names in products.js. `localized()` picks the right one.
  //
  // To change a sentence: edit it here. To add a paragraph: add a new entry to
  // `text` and a new <p> in the markup further down.

  import { localized } from '../lib/store.svelte.js';
  import { findProduct } from '../lib/products.js';

  const text = {
    title: { en: 'The man behind the shop', no: 'Mannen bak butikken' },

    intro: {
      en: 'I am Frithjof Arngren, a Norwegian engineer (siv.ing.) from Oslo, and ARNGREN.net is my shop. It is full of gadgets, e-bikes and other electric vehicles. It also has something you will not find anywhere else: a flying car that I am building.',
      no: 'Jeg er Frithjof Arngren, en norsk sivilingeniør fra Oslo, og ARNGREN.net er butikken min. Den er full av duppeditter, elsykler og andre elektriske kjøretøy. Her finner du også noe du ikke finner andre steder: en flygende bil som jeg bygger.',
    },

    dreamTitle: { en: 'The dream: The Hoverpod', no: 'Drømmen: Hoverpod' },

    dream1: {
      en: 'Imagine skipping the traffic jam. The Hoverpod floats about two metres above water, land, snow, ice, grass or rock, and it comes as a one-seater or a three-seater. You steer it with a joystick, take corners at 1 G and stop faster than a car. You can even hover on the spot and spin around.',
      no: 'Tenk deg å slippe køen. Hoverpod svever omtrent to meter over vann, land, snø, is, gress eller fjell, og den finnes som enseter eller treseter. Du styrer den med en styrespak, tar svinger med 1 G og stopper raskere enn en bil. Du kan til og med stå stille og rotere rundt deg selv.',
    },

    dream2: {
      en: 'I hold the rights to the Hoverpod in Europe, and I am looking for partners who want to help me make the parts and sell it. Want to be part of it? Ask me about the one-seater or the three-seater. The price is on request.',
      no: 'Jeg har rettighetene til Hoverpod i Europa, og jeg søker partnere som vil hjelpe meg med å lage delene og selge den. Vil du være med? Spør meg om enseteren eller treseteren. Prisen er ved forespørsel.',
    },

    howTitle: { en: 'How does it fly?', no: 'Hvordan flyr den?' },

    how1: {
      en: 'There is no big helicopter blade. A round fan (a "drum fan") inside the hull spins around the middle of the craft and pushes air outwards. A soft skirt around the body turns that air downwards, and that is what lifts the Hoverpod. Move the skirt, and you steer it.',
      no: 'Det finnes ingen stor helikopterrotor. En rund vifte («trommelvifte») inne i skroget snurrer rundt midten av fartøyet og skyver luft utover. Et mykt skjørt rundt kroppen leder luften nedover, og det er dette som løfter Hoverpod. Beveger du skjørtet, styrer du den.',
    },

    how2: {
      en: 'The blades are hidden inside the skirt, so nothing is spinning out in the open like on a helicopter. That makes it safe to use close to buildings and trees. It stays about two metres off the ground, so you get the feeling of flying without leaving the ground far behind.',
      no: 'Viftebladene er skjult inne i skjørtet, så det er ingenting som snurrer åpent slik som på et helikopter. Det gjør den trygg å bruke nær bygninger og trær. Den holder seg omtrent to meter over bakken, så du får følelsen av å fly uten å forlate bakken helt.',
    },

    factsTitle: { en: 'Hoverpod at a glance', no: 'Hoverpod i korte trekk' },

    facts: [
      { label: { en: 'Seats', no: 'Seter' }, value: { en: '1 or 3', no: '1 eller 3' } },
      { label: { en: 'Hovers at', no: 'Svever i' }, value: { en: '2 m above water, land, snow, ice, grass or rock', no: '2 m over vann, land, snø, is, gress eller fjell' } },
      { label: { en: 'Width (one-seater)', no: 'Bredde (enseter)' }, value: { en: '2.4 m', no: '2,4 m' } },
      { label: { en: 'Weight', no: 'Vekt' }, value: { en: '200 kg', no: '200 kg' } },
      { label: { en: 'Speed', no: 'Fart' }, value: { en: '50–120 km/h along the ground', no: '50–120 km/t langs bakken' } },
      { label: { en: 'Range', no: 'Rekkevidde' }, value: { en: 'About 500 km on petrol, 60 km on electric motors (silent)', no: 'Ca. 500 km på bensin, 60 km med elektromotorer (lydløst)' } },
      { label: { en: 'Engines', no: 'Motorer' }, value: { en: '3 × Rotax 30 hp, or electric motors', no: '3 × Rotax 30 hk, eller elektromotorer' } },
      { label: { en: 'Material', no: 'Materiale' }, value: { en: 'Kevlar and carbon fibre', no: 'Kevlar og karbonfiber' } },
      { label: { en: 'Steering', no: 'Styring' }, value: { en: 'Joystick. It can stand still and spin on the spot.', no: 'Styrespak. Den kan stå stille og rotere på stedet.' } },
      { label: { en: 'Price', no: 'Pris' }, value: { en: 'On request', no: 'Ved forespørsel' } },
    ],

    contact: {
      en: 'Want to build it, sell it or buy one? Get in touch. My phone and email are at the bottom of the page.',
      no: 'Vil du lage den, selge den eller kjøpe en? Ta kontakt. Telefon og e-post står nederst på siden.',
    },

    hoverpodButton: { en: 'See the Hoverpod in the shop', no: 'Se Hoverpod i butikken' },
    back: { en: '← Back to the shop', no: '← Tilbake til butikken' },
  };

  // THE PICTURES
  // Put these files in the  public/photos/  folder. `file` is the file name,
  // `alt` is the text for screen readers, `caption` is shown under the picture.
  // To add a fourth picture, copy one block and change the three lines.
  const photos = [
    {
      file: 'Hoverpod-m.stort.jpg',
      alt: { en: 'Illustration of a person sitting in the Hoverpod, with blue arrows showing air pushed out around the hull', no: 'Illustrasjon av en person som sitter i Hoverpod, med blå piler som viser luft som skyves ut rundt skroget' },
      caption: { en: 'Illustration: air is pushed out around the hull.', no: 'Illustrasjon: luft skyves ut rundt skroget.' },
    },
    {
      file: 'Hoverpod-app_surf_full.jpg',
      alt: { en: 'Computer rendering of a yellow Hoverpod marked SLSC hovering over a beach', no: 'Datagrafikk av en gul Hoverpod merket SLSC som svever over en strand' },
      caption: { en: 'Rendering: a yellow Hoverpod over a beach.', no: 'Datagrafikk: en gul Hoverpod over en strand.' },
    },
    {
      file: 'Frithjof-Hoverpod.jpg',
      alt: { en: 'A person sitting in the cockpit of a large full-size Hoverpod model inside a workshop', no: 'En person som sitter i cockpiten på en stor Hoverpod-modell i full størrelse inne i et verksted' },
      caption: { en: 'A full-size model, with someone in the cockpit.', no: 'En modell i full størrelse, med noen i cockpiten.' },
    },
  ];

  // If a picture file is missing, we show a grey box with its name instead of
  // a broken image. `missing` remembers which files failed, e.g. { 'a.jpg': true }.
  let missing = $state({});

  // Only show the "see it in the shop" button if the product exists in products.js.
  const hoverpod = findProduct('hoverpod');
</script>

<!-- A "snippet" is a reusable piece of markup that lives inside this file.
     We use it so the picture code is written once and used three times below.
     `side` is 'left' or 'right': the picture floats to that side of the text. -->
{#snippet picture(photo, side)}
  <figure class={side}>
    {#if missing[photo.file]}
      <div class="placeholder">public/photos/{photo.file}</div>
    {:else}
      <img
        src={'photos/' + photo.file}
        alt={localized(photo.alt)}
        loading="lazy"
        onerror={() => (missing[photo.file] = true)}
      />
    {/if}
    <figcaption>{localized(photo.caption)}</figcaption>
  </figure>
{/snippet}

<article>

  <h1>{localized(text.title)}</h1>

  <!-- Each section starts with a picture. The text then wraps around it. -->
  <section>
    {@render picture(photos[2], 'right')}
    <p>{localized(text.intro)}</p>
  </section>

  <section>
    {@render picture(photos[1], 'left')}
    <h2>{localized(text.dreamTitle)}</h2>
    <p>{localized(text.dream1)}</p>
    <p>{localized(text.dream2)}</p>
  </section>

  <section>
    {@render picture(photos[0], 'right')}
    <h2>{localized(text.howTitle)}</h2>
    <p>{localized(text.how1)}</p>
    <p>{localized(text.how2)}</p>
  </section>

  <h2>{localized(text.factsTitle)}</h2>
  <!-- <dl> is the HTML tag for a list of "label: value" pairs -->
  <dl>
    {#each text.facts as fact}
      <div class="fact">
        <dt>{localized(fact.label)}</dt>
        <dd>{localized(fact.value)}</dd>
      </div>
    {/each}
  </dl>

  <p class="contact">{localized(text.contact)}</p>

  <div class="buttons">
    {#if hoverpod}
      <a class="button primary" href="#/product/hoverpod">{localized(text.hoverpodButton)}</a>
    {/if}
    <a class="button" href="#/">{localized(text.back)}</a>
  </div>
</article>

<style>
  article {
    max-width: 860px;
    margin-inline: auto;
  }

  .saucer {
    margin: 0;
    font-size: 3.5rem;
    text-align: center;
  }

  h1 {
    text-align: center;
  }

  h2 {
    margin: 2rem 0 0.8rem;
    color: var(--navy);
  }

  p {
    line-height: 1.65;
  }

  /* Each section holds its own floating picture. `flow-root` makes the section
     wrap around its picture, so a picture never spills into the next section. */
  section {
    display: flow-root;
    margin-top: 2rem;
  }

  section h2 {
    margin-top: 0;
  }

  /* `overflow: hidden` keeps each paragraph in its own column next to the
     picture, so a long text never wraps underneath it. */
  section > h2,
  section > p {
    overflow: hidden;
  }

  /* The pictures float to one side and the text wraps around them. */
  figure {
    width: 38%;
    max-width: 300px;
    margin: 0.2rem 0 1rem;
  }

  figure.right {
    float: right;
    margin-left: 1.5rem;
  }

  figure.left {
    float: left;
    margin-right: 1.5rem;
  }

  figure img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius);
    border: 1px solid var(--border);
  }

  figcaption {
    margin-top: 0.4rem;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .placeholder {
    display: grid;
    place-items: center;
    aspect-ratio: 4 / 3;
    padding: 0.5rem;
    border: 2px dashed var(--border);
    border-radius: var(--radius);
    color: var(--muted);
    font-size: 0.85rem;
    text-align: center;
    word-break: break-all;
  }

  /* The facts: label on the left, value on the right. On a phone they stack. */
  dl {
    margin: 0;
    padding: 0;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    overflow: hidden;
  }

  .fact {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 0.5rem 1rem;
    padding: 0.7rem 1rem;
    border-bottom: 1px solid var(--border);
  }

  .fact:last-child {
    border-bottom: none;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin: 0;
  }

  @media (max-width: 600px) {
    figure {
      float: none !important;
      width: 100%;
      max-width: none;
      margin: 0 0 1rem !important;
    }
  }

  @media (max-width: 520px) {
    .fact {
      grid-template-columns: 1fr;
      gap: 0.1rem;
    }
  }

  .contact {
    margin-top: 1.5rem;
    font-weight: 600;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.5rem;
  }
</style>