// ---------------------------------------------------------------
// TRANSLATIONS (English and Norwegian)
// ---------------------------------------------------------------
// Every sentence the shop shows lives here, once per language.
// In a component we write  {t('addToCart')}  and the store picks
// the right language. See `t()` in store.svelte.js.
//
// Some texts have blanks in curly braces, like {name}.
// We fill them in with  t('thanksTitle', { name: 'Ola' })
//
// TIP: if you add a key to `en`, add the same key to `no`.
// (The text will show the key name itself if a translation is missing.)
// ---------------------------------------------------------------

export const translations = {
  en: {
    // Header
    siteName: 'ARNGREN.net',
    searchPlaceholder: 'Search products…',
    searchLabel: 'Search products',
    cart: 'Cart',
    switchLanguage: 'Switch language',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',

    // Home page
    heroTitle: 'Weird and wonderful things, finally easy to find.',
    heroSub: 'Search, pick a category and add to your cart. No phone call needed.',
    allCategories: 'All',
    categoriesLabel: 'Categories',
    sortLabel: 'Sort by',
    sortFeatured: 'Featured',
    sortPriceLow: 'Price: low to high',
    sortPriceHigh: 'Price: high to low',
    productsCount: '{n} products',
    resultsFor: '{n} results for "{query}"',
    noResults: 'No products match your search.',
    clearSearch: 'Clear search and filters',
    surprise: 'Surprise me',

    // Products
    addToCart: 'Add to cart',
    addedToCart: 'Added to your cart!',
    priceOnRequest: 'Price on request',
    backToShop: '← Back to the shop',
    specifications: 'Specifications',
    productNotFound: 'We could not find that product.',

    // Spec labels (the keys match the `specs` in products.js)
    spec_power: 'Motor power',
    spec_battery: 'Battery',
    spec_speed: 'Top speed',
    spec_range: 'Range',
    spec_seats: 'Seats',
    spec_drive: 'Drive',
    spec_weight: 'Weight',
    spec_size: 'Size',
    spec_zoom: 'Zoom',
    spec_material: 'Material',
    spec_height: 'Height',
    spec_altitude: 'Flying height',
    spec_wheels: 'Wheels',
    spec_capacity: 'Lifting capacity',

    // Cart page
    cartTitle: 'Your cart',
    cartEmpty: 'Your cart is empty.',
    quantity: 'Quantity',
    increase: 'One more',
    decrease: 'One less',
    remove: 'Remove',
    total: 'Total',
    quoteNote: 'Some items have their price on request. We will send you a price by email.',

    // Order form
    orderTitle: 'Place your order',
    nameLabel: 'Your name',
    emailLabel: 'Email',
    phoneLabel: 'Phone (optional)',
    messageLabel: 'Message (optional)',
    placeOrder: 'Place order',
    errorName: 'Please enter your name.',
    errorEmail: 'Please enter a valid email address.',
    prototypeNote: 'This is a prototype. No order is really sent.',

    // Thank-you page
    thanksTitle: 'Thank you, {name}!',
    orderNumber: 'Order number: {number}',
    thanksBody: 'In the real shop, a confirmation would be sent to {email}.',
    continueShopping: 'Continue shopping',

    // Footer
    footerContact: 'Prefer to order by phone or email?',
    footerNote: 'A student redesign of arngren.net. This is not the real shop.',
  },

  no: {
    // Header
    siteName: 'ARNGREN.net',
    searchPlaceholder: 'Søk etter produkter…',
    searchLabel: 'Søk etter produkter',
    cart: 'Handlekurv',
    switchLanguage: 'Bytt språk',
    switchToDark: 'Bytt til mørk modus',
    switchToLight: 'Bytt til lys modus',

    // Home page
    heroTitle: 'Rare og flotte ting, endelig lett å finne.',
    heroSub: 'Søk, velg en kategori og legg i handlekurven. Ingen telefonsamtale nødvendig.',
    allCategories: 'Alle',
    categoriesLabel: 'Kategorier',
    sortLabel: 'Sorter etter',
    sortFeatured: 'Utvalgte',
    sortPriceLow: 'Pris: lav til høy',
    sortPriceHigh: 'Pris: høy til lav',
    productsCount: '{n} produkter',
    resultsFor: '{n} treff for «{query}»',
    noResults: 'Ingen produkter passer med søket ditt.',
    clearSearch: 'Fjern søk og filtre',
    surprise: 'Overrask meg',

    // Products
    addToCart: 'Legg i handlekurv',
    addedToCart: 'Lagt i handlekurven!',
    priceOnRequest: 'Pris på forespørsel',
    backToShop: '← Tilbake til butikken',
    specifications: 'Spesifikasjoner',
    productNotFound: 'Vi fant ikke dette produktet.',

    // Spec labels
    spec_power: 'Motoreffekt',
    spec_battery: 'Batteri',
    spec_speed: 'Topphastighet',
    spec_range: 'Rekkevidde',
    spec_seats: 'Seter',
    spec_drive: 'Drift',
    spec_weight: 'Vekt',
    spec_size: 'Størrelse',
    spec_zoom: 'Forstørrelse',
    spec_material: 'Materiale',
    spec_height: 'Høyde',
    spec_altitude: 'Flyhøyde',
    spec_wheels: 'Hjul',
    spec_capacity: 'Løftekapasitet',

    // Cart page
    cartTitle: 'Handlekurven din',
    cartEmpty: 'Handlekurven er tom.',
    quantity: 'Antall',
    increase: 'En til',
    decrease: 'En færre',
    remove: 'Fjern',
    total: 'Totalt',
    quoteNote: 'Noen varer har pris på forespørsel. Vi sender deg en pris på e-post.',

    // Order form
    orderTitle: 'Legg inn bestilling',
    nameLabel: 'Navn',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon (valgfritt)',
    messageLabel: 'Melding (valgfritt)',
    placeOrder: 'Send bestilling',
    errorName: 'Skriv inn navnet ditt.',
    errorEmail: 'Skriv inn en gyldig e-postadresse.',
    prototypeNote: 'Dette er en prototype. Ingen bestilling blir sendt.',

    // Thank-you page
    thanksTitle: 'Takk, {name}!',
    orderNumber: 'Bestillingsnummer: {number}',
    thanksBody: 'I den ekte butikken ville en bekreftelse blitt sendt til {email}.',
    continueShopping: 'Fortsett å handle',

    // Footer
    footerContact: 'Vil du heller bestille på telefon eller e-post?',
    footerNote: 'En redesign av arngren.net laget som skoleprosjekt. Dette er ikke den ekte butikken.',
  },
};
