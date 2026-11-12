// ---------------------------------------------------------------
// PRODUCT DATA
// ---------------------------------------------------------------
// There is no database in this project. All products live here, in
// two plain JavaScript lists: `categories` and `products`.
//
// Anything a visitor reads (names, descriptions) has two versions:
//   { en: 'English text', no: 'Norsk tekst' }
// The shop shows the one that matches the chosen language.
//
// SAMPLE DATA: these products are based on things sold on arngren.net.
// Some prices and descriptions are our own guesses, so replace them
// with the real ones if you have them.
// ---------------------------------------------------------------

// Norwegians write "km/t" instead of "km/h". This little helper builds
// both versions of a speed:  kmh('50–60')  ->  { en: '50–60 km/h', no: '50–60 km/t' }
function kmh(value) {
  return { en: `${value} km/h`, no: `${value} km/t` };
}

// Categories. `hue` is a color number (0-360) used for the product tiles,
// so every category gets its own friendly color.
export const categories = [
  { id: 'ebikes',   hue: 150, name: { en: 'Electric bikes',          no: 'Elektriske sykler' } },
  { id: 'scooters', hue: 200, name: { en: 'Scooters & mopeds',       no: 'Scootere og mopeder' } },
  { id: 'cars',     hue: 10,  name: { en: 'Cars & ATVs',             no: 'Biler og ATV-er' } },
  { id: 'kids',     hue: 45,  name: { en: "Kids' vehicles",          no: 'Barnekjøretøy' } },
  { id: 'optics',   hue: 260, name: { en: 'Telescopes & binoculars', no: 'Teleskoper og kikkerter' } },
  { id: 'robots',   hue: 300, name: { en: 'Robots & RC',             no: 'Roboter og RC' } },
  { id: 'weird',    hue: 330, name: { en: 'Weird & wonderful',       no: 'Rart og fantastisk' } },
];

// Products.
//   id        - short unique name, used in the page address (#/product/pink-fatbike)
//   category  - must match one of the category ids above
//   emoji     - stands in for a photo. To use a real photo, add  image: 'photos/name.jpg'
//               (put the file in a `public/photos` folder). See ProductImage.svelte.
//   price     - in Norwegian kroner. `null` means "price on request"
//   specs     - small facts shown in a table. The keys (power, speed...) are
//               translated in translations.js as spec_power, spec_speed...
//               A value is either a plain string (same in both languages)
//               or { en: '...', no: '...' }.
export const products = [
  // ---------------- Electric bikes ----------------
  {
    id: 'pink-fatbike',
    category: 'ebikes',
    emoji: '🚲',
    price: 22998,
    name: { en: 'Pink electric fatbike', no: 'Rosa el-fatbike' },
    description: {
      en: 'A big-tyre electric bike in pink. Rider and helmet are not included.',
      no: 'En el-sykkel med brede dekk i rosa. Syklist og hjelm følger ikke med.',
    },
    specs: { power: '1000 W', battery: '48 V', speed: kmh('50–60') },
  },
  {
    id: 'folding-fatbike',
    category: 'ebikes',
    emoji: '🚲',
    price: 12998,
    name: { en: 'Folding electric fatbike', no: 'Sammenleggbar el-fatbike' },
    description: {
      en: 'Folds up for easy storage and transport. Brushless motor and lithium battery.',
      no: 'Kan legges sammen for enkel oppbevaring og transport. Børsteløs motor og litiumbatteri.',
    },
    specs: { power: '750 W', battery: { en: '48 V lithium', no: '48 V litium' } },
  },
  {
    id: 'snow-fatbike',
    category: 'ebikes',
    emoji: '🚵',
    price: 14998,
    name: { en: 'Snow fatbike', no: 'Fatbike for snø' },
    description: {
      en: 'Wide tyres for driving in snow, with a powerful 1000 W motor.',
      no: 'Brede dekk for kjøring i snø, med kraftig motor på 1000 W.',
    },
    specs: { power: '1000 W', battery: { en: 'Lithium', no: 'Litium' } },
  },
  {
    id: 'cargo-bike',
    category: 'ebikes',
    emoji: '🛺',
    price: 16998,
    name: { en: 'Danish 3-wheel cargo bike', no: 'Dansk 3-hjuls lastesykkel' },
    description: {
      en: 'Three wheels and lots of space. Designed and made in Denmark.',
      no: 'Tre hjul og masse plass. Designet og produsert i Danmark.',
    },
    specs: { wheels: '3' },
  },

  // ---------------- Scooters & mopeds ----------------
  {
    id: 'el-scooter-5000',
    category: 'scooters',
    emoji: '🛵',
    price: 29998,
    name: { en: 'Electric scooter 5000 W', no: 'Elektrisk scooter 5000 W' },
    description: {
      en: 'A fast electric scooter for people who are in a hurry.',
      no: 'En rask elektrisk scooter for deg som har det travelt.',
    },
    specs: { power: '5000 W', speed: kmh('100') },
  },
  {
    id: 'el-moped',
    category: 'scooters',
    emoji: '🛵',
    price: 12998,
    name: { en: 'Electric moped', no: 'Elektrisk moped' },
    description: {
      en: 'A classic red moped. Choose a lithium or a lead battery.',
      no: 'En klassisk rød moped. Velg mellom litium- og blybatteri.',
    },
    specs: { battery: { en: 'Lithium or lead', no: 'Litium eller bly' } },
  },
  {
    id: 'kick-scooter',
    category: 'scooters',
    emoji: '🛴',
    price: 2998,
    name: { en: 'Electric kick scooter', no: 'Elektrisk sparkesykkel' },
    description: {
      en: 'Light and simple. Perfect for short trips around town.',
      no: 'Lett og enkel. Perfekt for korte turer i byen.',
    },
    specs: { power: '500 W', battery: '48 V' },
  },

  // ---------------- Cars & ATVs ----------------
  {
    id: 'willy-jeep',
    category: 'cars',
    emoji: '🚙',
    price: 39998,
    name: { en: 'Electric Willy jeep', no: 'Elektrisk Willy-jeep' },
    description: {
      en: 'A small military-style jeep with rubber wheels. Choose 6 or 40 km/h.',
      no: 'En liten jeep i militærstil med gummihjul. Velg mellom 6 og 40 km/t.',
    },
    specs: {
      power: '1500 W',
      battery: '60 V',
      speed: { en: '6 or 40 km/h', no: '6 eller 40 km/t' },
    },
  },
  {
    id: 'electric-porsche',
    category: 'cars',
    emoji: '🏎️',
    price: 399890,
    name: { en: 'Electric Porsche', no: 'Elektrisk Porsche' },
    description: {
      en: 'The big one. From 0 to 100 km/h in 4.9 seconds.',
      no: 'Den store. Fra 0 til 100 km/t på 4,9 sekunder.',
    },
    specs: { speed: kmh('250'), range: '300 km' },
  },
  {
    id: 'cabeasy',
    category: 'cars',
    emoji: '🛺',
    price: 59998,
    name: { en: 'CabEasy 3-wheel moped car', no: 'CabEasy 3-hjuls mopedbil' },
    description: {
      en: 'A small enclosed car for up to 3 people. Good for city driving.',
      no: 'En liten lukket bil for opptil 3 personer. Bra i byen.',
    },
    specs: { speed: kmh('45'), range: '70 km', seats: '3' },
  },
  {
    id: 'comarth',
    category: 'cars',
    emoji: '🚗',
    price: 89998,
    name: { en: 'Comarth electric car', no: 'Comarth elbil' },
    description: {
      en: 'Compact electric car with 2 or 4 seats. 2WD or 4WD.',
      no: 'Kompakt elbil med 2 eller 4 seter. 2WD eller 4WD.',
    },
    specs: { drive: '2WD / 4WD', seats: { en: '2 or 4', no: '2 eller 4' } },
  },
  {
    id: 'el-atv-6000',
    category: 'cars',
    emoji: '🏍️',
    price: 59998,
    name: { en: 'Electric ATV 6000 W', no: 'Elektrisk ATV 6000 W' },
    description: {
      en: 'A strong electric four-wheeler for rough ground.',
      no: 'En kraftig elektrisk firhjuling for røft terreng.',
    },
    specs: { power: '6000 W' },
  },
  {
    id: 'air-jack',
    category: 'cars',
    emoji: '🔧',
    price: 998,
    name: { en: 'Air-jack', no: 'Luftjekk' },
    description: {
      en: 'Lifts a car or a boat. Small to store, strong to use.',
      no: 'Løfter en bil eller en båt. Liten å oppbevare, sterk i bruk.',
    },
    specs: { capacity: { en: '4.2 tons', no: '4,2 tonn' } },
  },

  // ---------------- Kids' vehicles ----------------
  {
    id: 'kids-jeep',
    category: 'kids',
    emoji: '🚙',
    price: 2498,
    name: { en: "Kids' electric jeep", no: 'Elektrisk barnejeep' },
    description: {
      en: 'A small jeep that children can drive themselves.',
      no: 'En liten jeep som barna kan kjøre selv.',
    },
    specs: { battery: '12 V' },
  },
  {
    id: 'kids-atv',
    category: 'kids',
    emoji: '🏍️',
    price: 4998,
    name: { en: "Kids' electric ATV", no: 'Elektrisk barne-ATV' },
    description: {
      en: 'A small four-wheeler made for young drivers.',
      no: 'En liten firhjuling laget for unge sjåfører.',
    },
    specs: { drive: '4WD' },
  },
  {
    id: 'kids-defender',
    category: 'kids',
    emoji: '🚙',
    price: 7998,
    name: { en: "2-seat 4WD kids' Land Rover", no: '2-seters 4WD barne-Land Rover' },
    description: {
      en: 'Remote control for parents, leather seats and safety harnesses.',
      no: 'Fjernkontroll for foreldre, skinnseter og sikkerhetsseler.',
    },
    specs: { battery: '12 V', seats: '2', drive: '4WD' },
  },
  {
    id: 'pedal-gokart',
    category: 'kids',
    emoji: '🏎️',
    price: 1998,
    name: { en: 'Pedal go-kart', no: 'Pedal-gokart' },
    description: {
      en: 'No battery needed. Just pedal!',
      no: 'Trenger ikke batteri. Bare trå!',
    },
    specs: { drive: { en: 'Pedals', no: 'Pedaler' } },
  },

  // ---------------- Telescopes & binoculars ----------------
  {
    id: 'giant-binoculars',
    category: 'optics',
    emoji: '🔭',
    price: 2998,
    name: { en: 'Giant zoom binoculars', no: 'Store zoom-kikkerter' },
    description: {
      en: 'Zoom from 20x to 144x. The longest and most powerful in the shop.',
      no: 'Zoom fra 20x til 144x. De lengste og kraftigste i butikken.',
    },
    specs: { zoom: '20x – 144x' },
  },
  {
    id: 'telescope',
    category: 'optics',
    emoji: '🔭',
    price: 2998,
    name: { en: 'Telescope', no: 'Teleskop' },
    description: {
      en: 'Look at the moon, the planets and the neighbours.',
      no: 'Se på månen, planetene og naboene.',
    },
    specs: { zoom: { en: '30x, 75x and 300x', no: '30x, 75x og 300x' } },
  },

  // ---------------- Robots & RC ----------------
  {
    id: 'zeno-robot',
    category: 'robots',
    emoji: '🤖',
    price: 99998,
    name: { en: 'Zeno humanoid robot', no: 'Zeno humanoid robot' },
    description: {
      en: 'A robot boy with a face that moves almost like a human face. Can talk, dance and pick up things. Programmable in Java, C++ and C#.',
      no: 'En robotgutt med et ansikt som beveger seg nesten som et menneskeansikt. Kan snakke, danse og plukke opp ting. Kan programmeres i Java, C++ og C#.',
    },
    specs: {
      height: '69 cm',
      weight: '6 kg',
      battery: { en: 'Rechargeable', no: 'Oppladbart' },
    },
  },
  {
    id: 'rc-tank',
    category: 'robots',
    emoji: '🪖',
    price: 2998,
    name: { en: 'Big RC tank', no: 'Stor RC-tank' },
    description: {
      en: 'A remote-controlled tank made of metal.',
      no: 'En fjernstyrt tank laget av metall.',
    },
    specs: { size: '55 cm', material: { en: 'Metal', no: 'Metall' } },
  },
  {
    id: 'r2d2',
    category: 'robots',
    emoji: '🤖',
    price: 1998,
    name: { en: 'R2-D2 robot with web cam', no: 'R2-D2-robot med webkamera' },
    description: {
      en: 'A remote-controlled droid with a web cam, a projector and a DVD player.',
      no: 'En fjernstyrt droide med webkamera, projektor og DVD-spiller.',
    },
    specs: {}, // no specs yet. The product page hides the table when it is empty.
  },

  // ---------------- Weird & wonderful ----------------
  {
    id: 'hoverpod',
    category: 'weird',
    emoji: '🛸',
    price: null, // null = price on request
    name: { en: 'The Hoverpod', no: 'Hoverpod' },
    description: {
      en: 'A flying pod that hovers 2 metres above the ground. It works over water, snow, ice, grass and mountains.',
      no: 'Et flyvende fartøy som svever 2 meter over bakken. Det fungerer over vann, snø, is, gress og fjell.',
    },
    specs: {
      size: { en: '2.4 m across', no: '2,4 m i diameter' },
      weight: '200 kg',
      seats: { en: '1 or 3', no: '1 eller 3' },
      speed: kmh('50–120'),
      range: '500 km',
      altitude: { en: '2 m (max 3 m)', no: '2 m (maks 3 m)' },
      material: { en: 'Kevlar & carbon fibre', no: 'Kevlar og karbonfiber' },
    },
  },
  {
    id: 'helicopter',
    category: 'weird',
    emoji: '🚁',
    price: 398000,
    name: { en: 'Build-your-own 2-seat helicopter', no: 'Bygg-selv 2-seters helikopter' },
    description: {
      en: 'Yes, really. Some assembly required.',
      no: 'Ja, på ekte. Må settes sammen selv.',
    },
    specs: { seats: '2' },
  },
  {
    id: 'talking-figure',
    category: 'weird',
    emoji: '🧍',
    price: 399,
    name: { en: 'Talking collectible figure', no: 'Snakkende samlerfigur' },
    description: {
      en: 'A hand-painted 30 cm figure. Limited edition, and it talks.',
      no: 'En håndmalt figur på 30 cm. Begrenset opplag, og den snakker.',
    },
    specs: { height: '30 cm', material: 'PVC' },
  },
];

// ---------------------------------------------------------------
// Small helper functions
// ---------------------------------------------------------------

// Find one product by its id. Returns undefined if there is no match.
export function findProduct(id) {
  return products.find((p) => p.id === id);
}

// Find one category by its id.
export function findCategory(id) {
  return categories.find((c) => c.id === id);
}
