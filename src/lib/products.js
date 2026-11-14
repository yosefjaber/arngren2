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
// Product data for the Arngren redesign.
// Every product has an English and a Norwegian version of its name and
// description. Prices are in Norwegian kroner (NOK). Set a price to `null`
// when it is "price on request".
//
// `image` points at the files in this folder. Copy them to
// `public/photos/` (or adjust the paths) so the app can serve them.

// Product data for the Arngren redesign.
// Every product has an English and a Norwegian version of its name and
// description. Prices are in Norwegian kroner (NOK). Set a price to `null`
// when it is "price on request".
//
// `image` points at the files in this folder. Copy them to
// `public/photos/` (or adjust the paths) so the app can serve them.

export const products = [
  // ---------------- Electric bikes ----------------
  {
    id: 'summit-mountain-bike', category: 'ebikes', emoji: '🚵', image: 'photos/SYkkel180.summit-175x105.jpg', price: 4990,
    name: { en: 'Summit mountain bike', no: 'Summit terrengsykkel' },
    description: { en: 'A 26-inch mountain bike with 21 gears and a lightweight frame, suitable for forest trails and gravel roads.', no: 'En 26-tommers terrengsykkel med 21 gir og lett ramme, egnet for skogsstier og grusveier.' },
    specs: { gears: '21', size: '26"', weight: '14 kg' },
  },
  {
    id: 'ambassador-city-bike', category: 'ebikes', emoji: '🚲', image: 'photos/Sykkel28.ambassador-erc-203x123.jpg', price: 7490,
    name: { en: 'Ambassador city bike', no: 'Ambassador bysykkel' },
    description: { en: 'A 28-inch city bike with three gears, a front basket and mudguards for daily commuting.', no: 'En 28-tommers bysykkel med tre gir, frontkurv og skjermer for daglig pendling.' },
    specs: { gears: '3', size: '28"', weight: '15 kg', basket: 'Standard' },
  },

  // ---------------- Scooters & mopeds ----------------
  {
    id: 'e-scooter-40', category: 'scooters', emoji: '🛴', image: 'photos/ATV-1.6438_37-273x273.jpg', price: 12990,
    name: { en: 'Street e-scooter 40', no: 'Gate-e-scooter 40' },
    description: { en: 'A stand-up electric scooter with a 1200 W motor, a 48 V battery and a top speed of 40 km/h. Approved for road use.', no: 'En ståscooter med 1200 W motor, 48 V batteri og toppfart på 40 km/t. Godkjent for bruk på vei.' },
    specs: { power: '1200 W', battery: '48 V', speed: kmh('40'), range: '45 km' },
  },
  {
    id: 'e-scooter-red-40', category: 'scooters', emoji: '🛴', image: 'photos/ATV-1.9804_13-272x272.jpg', price: 13990,
    name: { en: 'Red e-scooter 40', no: 'Rød e-scooter 40' },
    description: { en: 'A road-approved electric scooter with a 1200 W motor and a top speed of 40 km/h, finished in red.', no: 'En veigodkjent elektrisk scooter med 1200 W motor og toppfart på 40 km/t, i rødt.' },
    specs: { power: '1200 W', battery: '48 V', speed: kmh('40'), range: '45 km' },
  },
  {
    id: 'e-scooter-black', category: 'scooters', emoji: '🛴', image: 'photos/ATV-1.9851_0-246x246.jpg', price: 9990,
    name: { en: 'Black city e-scooter', no: 'Svart by-e-scooter' },
    description: { en: 'A compact folding electric scooter with an 800 W motor, intended for short urban trips and combined public transport.', no: 'En kompakt sammenleggbar elektrisk scooter med 800 W motor, beregnet for korte byturer og kombinert kollektivtransport.' },
    specs: { power: '800 W', battery: '36 V', speed: kmh('30'), range: '30 km' },
  },
  {
    id: 'e-scooter-street-grey', category: 'scooters', emoji: '🛴', image: 'photos/ATV-20-6438_37-284x284.jpg', price: 13490,
    name: { en: 'Grey street e-scooter', no: 'Grå gate-e-scooter' },
    description: { en: 'A grey electric scooter with a wide footboard, turn signals and a 1200 W motor. Suitable for uneven urban surfaces.', no: 'En grå elektrisk scooter med bred fotplate, blinklys og 1200 W motor. Egnet for ujevne byunderlag.' },
    specs: { power: '1200 W', battery: '48 V', speed: kmh('40'), range: '45 km' },
  },
  {
    id: 'scooter-speedometer', category: 'scooters', emoji: '🏍️', image: 'photos/Go.speedmeter-1050x787.jpg', price: 890,
    name: { en: 'Scooter speedometer, 80 km/h', no: 'Scooter-speedometer, 80 km/t' },
    description: { en: 'A round analogue speedometer with an odometer, intended for scooters and small mopeds with a 12 V electrical system.', no: 'Et rundt analogt speedometer med kilometerteller, beregnet for scootere og små mopeder med 12 V anlegg.' },
    specs: { speed: kmh('80'), supply: '12 V', size: '85 mm' },
  },
  {
    id: 'urban-electric-moped', category: 'scooters', emoji: '🛵', image: 'photos/MOPED-1.32-267x378.jpg', price: 24990,
    name: { en: 'Urban electric moped', no: 'Urban elektrisk moped' },
    description: { en: 'A full-size electric moped with seating for two, a 3000 W motor and a range of approximately 70 km.', no: 'En fullstørrelse elektrisk moped med plass til to, 3000 W motor og rekkevidde på omtrent 70 km.' },
    specs: { power: '3000 W', battery: '60 V', speed: kmh('45'), range: '70 km' },
  },
  {
    id: 'mobility-scooter-comfort', category: 'scooters', emoji: '♿', image: 'photos/MOPED-2.34-360x240.jpg', price: 18990,
    name: { en: 'Comfort mobility scooter', no: 'Komfort-mobilitetsscooter' },
    description: { en: 'A four-wheel mobility scooter with a padded seat, a front basket and a top speed of 12 km/h.', no: 'En firehjuls mobilitetsscooter med polstret sete, frontkurv og toppfart på 12 km/t.' },
    specs: { power: '500 W', battery: '24 V', speed: kmh('12'), range: '35 km' },
  },
  {
    id: 'scooter-silver', category: 'scooters', emoji: '🛵', image: 'photos/MOPEE.b-410x400.jpg', price: 21990,
    name: { en: 'Silver electric scooter', no: 'Sølv elektrisk scooter' },
    description: { en: 'A silver electric scooter with a 2000 W hub motor, LED lighting and a lockable storage compartment under the seat.', no: 'En sølvfarget elektrisk scooter med 2000 W navmotor, LED-lys og låsbart oppbevaringsrom under setet.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), range: '60 km' },
  },
  {
    id: 'scooter-blue-xm3500', category: 'scooters', emoji: '🛵', image: 'photos/MOPEE.xm3500li-side-left-blue-400px-412x300.jpg', price: 22990,
    name: { en: 'Blue XM3500 scooter', no: 'Blå XM3500-scooter' },
    description: { en: 'A blue electric scooter with disc brakes, a digital instrument panel and a range of approximately 65 km.', no: 'En blå elektrisk scooter med skivebremser, digitalt instrumentpanel og rekkevidde på omtrent 65 km.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), range: '65 km' },
  },
  {
    id: 'scooter-touring-convoy', category: 'scooters', emoji: '🛵', image: 'photos/MOPEEE.2008123112228-721x541.jpg', price: 24990,
    name: { en: 'Touring electric scooter', no: 'Turscooter elektrisk' },
    description: { en: 'A touring electric scooter with a long seat, a windscreen and a luggage rack, designed for longer journeys.', no: 'En elektrisk turscooter med lang sal, vindskjerm og bagasjerack, beregnet for lengre turer.' },
    specs: { power: '3000 W', battery: '60 V', speed: kmh('50'), range: '80 km' },
  },
  {
    id: 'scooter-red-retro', category: 'scooters', emoji: '🛵', image: 'photos/Scooter-Gashandel.DSC06385-979x734.jpg', price: 23990,
    name: { en: 'Red retro scooter', no: 'Rød retro-scooter' },
    description: { en: 'A red retro-style electric scooter with chrome details and a 2500 W motor.', no: 'En rød elektrisk retroscooter med kromdetaljer og 2500 W motor.' },
    specs: { power: '2500 W', battery: '60 V', speed: kmh('45'), range: '60 km' },
  },
  {
    id: 'scooter-silver-disc', category: 'scooters', emoji: '🛵', image: 'photos/Scooter-solv-diskbrake.DSC06613-441x331.jpg', price: 21990,
    name: { en: 'Silver scooter with disc brake', no: 'Sølv-scooter med skivebrems' },
    description: { en: 'A silver electric scooter with a hydraulic front disc brake and a 2000 W motor.', no: 'En sølvfarget elektrisk scooter med hydraulisk skivebrems foran og 2000 W motor.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), brakes: 'Hydraulic disc' },
  },
  {
    id: 'scooter-dashboard', category: 'scooters', emoji: '🏍️', image: 'photos/Scooter.Speedometer.DSC06607-559x419.jpg', price: 1290,
    name: { en: 'Scooter dashboard', no: 'Scooter-dashbord' },
    description: { en: 'A complete replacement dashboard with speedometer, fuel gauge and indicator lights for scooter repairs.', no: 'Et komplett erstatningsdashbord med speedometer, drivstoffmåler og kontrollamper for scooterreparasjoner.' },
    specs: { speed: kmh('80'), supply: '12 V', type: 'Analogue' },
  },
  {
    id: 'segway-i2', category: 'scooters', emoji: '🛴', image: 'photos/Segway-girl.B00007EPJ6.01.PT06.LZZZZZZZ-298x501.jpg', price: 59990,
    name: { en: 'Segway i2 personal transporter', no: 'Segway i2 personlig transportmiddel' },
    description: { en: 'A self-balancing personal transporter with a top speed of 20 km/h and a range of approximately 38 km.', no: 'Et selvbalanserende personlig transportmiddel med toppfart på 20 km/t og rekkevidde på omtrent 38 km.' },
    specs: { speed: kmh('20'), range: '38 km', battery: 'Lithium', weight: '48 kg' },
  },
  {
    id: 'segway-x2-offroad', category: 'scooters', emoji: '🛴', image: 'photos/Swgway-large.B00007EPJ6.01.LZZZZZZZ-336x493.jpg', price: 64990,
    name: { en: 'Segway x2 off-road', no: 'Segway x2 offroad' },
    description: { en: 'A self-balancing transporter with off-road tyres, increased ground clearance and a range of approximately 19 km.', no: 'Et selvbalanserende transportmiddel med offroad-dekk, økt bakkeklaring og rekkevidde på omtrent 19 km.' },
    specs: { speed: kmh('18'), range: '19 km', battery: 'Lithium', weight: '54 kg' },
  },

  // ---------------- Cars & ATVs ----------------
  {
    id: 'ev-city-blue', category: 'cars', emoji: '🚙', image: 'photos/2-944x678.jpg', price: 119000,
    name: { en: 'Blue four-seat city EV', no: 'Blå fireseters bybil' },
    description: { en: 'A four-seat electric city car with a 5 kW motor, a range of approximately 100 km and a top speed of 80 km/h.', no: 'En fireseters elektrisk bybil med 5 kW motor, rekkevidde på omtrent 100 km og toppfart på 80 km/t.' },
    specs: { seats: '4', range: '100 km', speed: kmh('80'), power: '5 kW' },
  },
  {
    id: 'ev-pickup-white', category: 'cars', emoji: '🛻', image: 'photos/2-low-908x681.jpg', price: 129000,
    name: { en: 'White electric pickup', no: 'Hvit elektrisk pickup' },
    description: { en: 'An electric utility pickup with a tipping cargo bed, a 300 kg payload and a range of approximately 90 km.', no: 'En elektrisk nyttebil med tippbart lasteplan, 300 kg nyttelast og rekkevidde på omtrent 90 km.' },
    specs: { payload: '300 kg', range: '90 km', speed: kmh('80'), power: '7 kW' },
  },
  {
    id: 'ev-van-grey', category: 'cars', emoji: '🚐', image: 'photos/3-low-936x702.jpg', price: 139000,
    name: { en: 'Grey electric utility van', no: 'Grå elektrisk nyttebil' },
    description: { en: 'A two-seat electric utility van with sliding doors, a flat load floor and a range of approximately 100 km.', no: 'En toseters elektrisk nyttebil med skyvedører, flatt lastegulv og rekkevidde på omtrent 100 km.' },
    specs: { seats: '2', range: '100 km', speed: kmh('80'), power: '7 kW' },
  },
  {
    id: 'ev-utility-street-white', category: 'cars', emoji: '🚙', image: 'photos/4-955x702.jpg', price: 124000,
    name: { en: 'White electric utility car', no: 'Hvit elektrisk nyttebil' },
    description: { en: 'A four-seat electric utility car with a 6 kW motor, a rear boot and a range of approximately 90 km.', no: 'En fireseters elektrisk nyttebil med 6 kW motor, bagasjerom og rekkevidde på omtrent 90 km.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'ev-utility-red', category: 'cars', emoji: '🚙', image: 'photos/ARNGREN-POSTEN.Ny_DSC_4744_929px-492x341.jpg', price: 129000,
    name: { en: 'Red electric utility car', no: 'Rød elektrisk nyttebil' },
    description: { en: 'A four-seat electric utility car with a 6 kW motor and a range of approximately 90 km, finished in red.', no: 'En fireseters elektrisk nyttebil med 6 kW motor og rekkevidde på omtrent 90 km, i rødt.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'quad-red-250', category: 'cars', emoji: '🏍️', image: 'photos/ATV-1.2-578x249.jpg', price: 39990,
    name: { en: 'Red sport quad 250', no: 'Rød sportskvad 250' },
    description: { en: 'A 250 cc sport quad with a five-speed gearbox, electric start and a top speed of approximately 70 km/h.', no: 'En 250 cm³ sportskvad med femtrinns girkasse, elektrisk start og toppfart på omtrent 70 km/t.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', start: 'Electric' },
  },
  {
    id: 'quad-s8-black', category: 'cars', emoji: '🏍️', image: 'photos/ATV-1.s8_elektrik_schwarz_seitevr-279x279.jpg', price: 34990,
    name: { en: 'S8 black electric quad', no: 'S8 svart elektrisk kvad' },
    description: { en: 'A full-size electric quad with a 1500 W motor, reverse gear and a range of approximately 45 km.', no: 'En fullstørrelse elektrisk kvad med 1500 W motor, revers og rekkevidde på omtrent 45 km.' },
    specs: { power: '1500 W', battery: '60 V', speed: kmh('45'), range: '45 km' },
  },
  {
    id: 'quad-s10-white', category: 'cars', emoji: '🏍️', image: 'photos/ATV-2.s10_1000watt_weiss_seitevr-283x283.jpg', price: 39990,
    name: { en: 'S10 white electric quad', no: 'S10 hvit elektrisk kvad' },
    description: { en: 'A white electric quad with a 2000 W motor, cargo racks and a range of approximately 50 km.', no: 'En hvit elektrisk kvad med 2000 W motor, lasterack og rekkevidde på omtrent 50 km.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), range: '50 km' },
  },
  {
    id: 'quad-camo-orange', category: 'cars', emoji: '🏍️', image: 'photos/ATV-CE.1247032168DSCI0490-353x353.jpg', price: 54990,
    name: { en: 'Camo 300 quad', no: 'Kamuflasjekvad 300' },
    description: { en: 'A 300 cc petrol quad in camouflage with a five-speed gearbox and a towing capacity of 250 kg.', no: 'En 300 cm³ bensinkvad i kamuflasje med femtrinns girkasse og slepekapasitet på 250 kg.' },
    specs: { engine: '300 cc', speed: kmh('70'), gears: '5', towing: '250 kg' },
  },
  {
    id: 'quad-yellow-250', category: 'cars', emoji: '🏍️', image: 'photos/ATV-NY.DSC06918-1250x937.jpg', price: 44990,
    name: { en: 'Yellow 250 quad', no: 'Gul 250-kvad' },
    description: { en: 'A yellow 250 cc quad with a five-speed gearbox, electric start and a top speed of approximately 70 km/h.', no: 'En gul 250 cm³ kvad med femtrinns girkasse, elektrisk start og toppfart på omtrent 70 km/t.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', start: 'Electric' },
  },
  {
    id: 'quad-yellow-front', category: 'cars', emoji: '🏍️', image: 'photos/ATV-NY.DSC06922-1050x787.jpg', price: 44990,
    name: { en: 'Yellow quad, front view', no: 'Gul kvad, front' },
    description: { en: 'Front view of the yellow 250 cc quad, showing the twin headlights and the front bumper.', no: 'Frontbilde av den gule 250 cm³ kvaden, med to frontlykter og frontstøtfanger.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', lights: 'LED' },
  },
  {
    id: 'quad-yellow-side', category: 'cars', emoji: '🏍️', image: 'photos/ATV-NY.DSC06923-950x712.jpg', price: 43990,
    name: { en: 'Yellow quad, side view', no: 'Gul kvad, side' },
    description: { en: 'Side view of the yellow 250 cc quad, showing the long seat and the rear cargo rack.', no: 'Sidebilde av den gule 250 cm³ kvaden, med lang sal og bakre lasterack.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', rack: 'Rear' },
  },
  {
    id: 'quad-electric-cargo', category: 'cars', emoji: '🏍️', image: 'photos/ATV.2_Wheel_Motors_Drive_Electric_ATV-646x500.jpg', price: 49990,
    name: { en: 'Electric cargo quad', no: 'Elektrisk lastkvad' },
    description: { en: 'A two-wheel-drive electric quad with a 3000 W motor, a cargo box and a range of approximately 60 km.', no: 'En tohjulsdrevet elektrisk kvad med 3000 W motor, lasteboks og rekkevidde på omtrent 60 km.' },
    specs: { power: '3000 W', battery: '60 V', speed: kmh('40'), range: '60 km' },
  },
  {
    id: 'quad-country-250', category: 'cars', emoji: '🏍️', image: 'photos/ATVE.GeoCOuntryquadhorse-640x964.jpg', price: 45990,
    name: { en: 'Country quad 250', no: 'Landlig 250-kvad' },
    description: { en: 'A 250 cc country quad with road-legal lighting, a five-speed gearbox and a top speed of approximately 70 km/h.', no: 'En 250 cm³ landlig kvad med gatelegale lys, femtrinns girkasse og toppfart på omtrent 70 km/t.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', roadlegal: 'Yes' },
  },
  {
    id: 'quad-camo-utility', category: 'cars', emoji: '🏍️', image: 'photos/ATVE.Web20HATV20-2-677x508.jpg', price: 52990,
    name: { en: 'Camo utility quad', no: 'Nyttekvad i kamuflasje' },
    description: { en: 'A 300 cc utility quad in camouflage with front and rear racks, a tow hitch and a low-range gearbox.', no: 'En 300 cm³ nyttekvad i kamuflasje med rack foran og bak, hengerfeste og lavgir.' },
    specs: { engine: '300 cc', speed: kmh('70'), gears: '5', towing: '300 kg' },
  },
  {
    id: 'quad-blue-sport', category: 'cars', emoji: '🏍️', image: 'photos/ATVE.Web20HATV20-3-675x507.jpg', price: 42990,
    name: { en: 'Blue sport quad 250', no: 'Blå sportskvad 250' },
    description: { en: 'A blue 250 cc sport quad with wide footrests and a single-cylinder engine.', no: 'En blå 250 cm³ sportskvad med brede fothvilere og enkeltsylindret motor.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', start: 'Electric' },
  },
  {
    id: 'quad-blue-200', category: 'cars', emoji: '🏍️', image: 'photos/ATVEE.quad01-411x308.jpg', price: 36990,
    name: { en: 'Blue 200 quad', no: 'Blå 200-kvad' },
    description: { en: 'A blue 200 cc quad with an automatic clutch, reverse gear and a top speed of approximately 60 km/h.', no: 'En blå 200 cm³ kvad med automatisk klutch, revers og toppfart på omtrent 60 km/t.' },
    specs: { engine: '200 cc', speed: kmh('60'), gears: 'Automatic', reverse: 'Yes' },
  },
  {
    id: 'buggy-offroad-red', category: 'cars', emoji: '🏎️', image: 'photos/BIL-_MG_6756_310-338x225.jpg', price: 89990,
    name: { en: 'Red off-road buggy', no: 'Rød offroad-buggy' },
    description: { en: 'An open two-seat off-road buggy with an 800 cc engine, a roll cage and rear-wheel drive.', no: 'En åpen toseter offroad-buggy med 800 cm³ motor, veltebur og bakhjulsdrift.' },
    specs: { engine: '800 cc', seats: '2', speed: kmh('90'), drive: 'RWD' },
  },
  {
    id: 'utility-cart-yellow', category: 'cars', emoji: '🚜', image: 'photos/BIL.IMG-0011-300x225.jpg', price: 79990,
    name: { en: 'Yellow utility cart', no: 'Gul nyttevogn' },
    description: { en: 'A yellow electric utility cart with a flat load bed, seating for two and a range of approximately 70 km.', no: 'En gul elektrisk nyttevogn med flatt lasteplan, plass til to og rekkevidde på omtrent 70 km.' },
    specs: { power: '4 kW', seats: '2', speed: kmh('40'), range: '70 km' },
  },
  {
    id: 'golf-cart-red', category: 'cars', emoji: '⛳', image: 'photos/BIL.JEEPE-B100767-222x222.jpg', price: 89990,
    name: { en: 'Red electric golf cart', no: 'Rød elektrisk golfbil' },
    description: { en: 'A four-seat electric golf cart with a canopy, a 3 kW motor and a range of approximately 60 km.', no: 'En fireseters elektrisk golfbil med tak, 3 kW motor og rekkevidde på omtrent 60 km.' },
    specs: { seats: '4', power: '3 kW', speed: kmh('30'), range: '60 km' },
  },
  {
    id: 'van-red-delivery', category: 'cars', emoji: '🚐', image: 'photos/BIL.T-crsportpostennorge-333x241.jpg', price: 159000,
    name: { en: 'Red electric delivery van', no: 'Rød elektrisk leveringsbil' },
    description: { en: 'A compact electric delivery van with a 500 kg payload, sliding side doors and a range of approximately 120 km.', no: 'En kompakt elektrisk leveringsbil med 500 kg nyttelast, skyvedører og rekkevidde på omtrent 120 km.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), payload: '500 kg' },
  },
  {
    id: 'truck-yellow-mini', category: 'cars', emoji: '🚚', image: 'photos/BIL.T-truck-corredera-313x227.jpg', price: 149000,
    name: { en: 'Yellow electric mini truck', no: 'Gul elektrisk minilastebil' },
    description: { en: 'A narrow electric mini truck with a 500 kg payload, a 7 kW motor and a range of approximately 80 km.', no: 'En smal elektrisk minilastebil med 500 kg nyttelast, 7 kW motor og rekkevidde på omtrent 80 km.' },
    specs: { payload: '500 kg', range: '80 km', speed: kmh('60'), power: '7 kW' },
  },
  {
    id: 'minibus-electric-blue', category: 'cars', emoji: '🚌', image: 'photos/BIL.buss-06-296x222.jpg', price: 249000,
    name: { en: 'Blue electric minibus', no: 'Blå elektrisk minibuss' },
    description: { en: 'An eight-seat electric minibus with a 15 kW motor, large windows and a range of approximately 120 km.', no: 'En åtteseters elektrisk minibuss med 15 kW motor, store vinduer og rekkevidde på omtrent 120 km.' },
    specs: { seats: '8', range: '120 km', speed: kmh('60'), power: '15 kW' },
  },
  {
    id: 'ev-four-seat-white', category: 'cars', emoji: '🚙', image: 'photos/BIL.fire-seter-297x218.jpg', price: 115000,
    name: { en: 'White four-seat electric car', no: 'Hvit fireseters elbil' },
    description: { en: 'A four-seat electric car with a 6 kW motor, a heater and a rear boot.', no: 'En fireseters elektrisk bil med 6 kW motor, varmeapparat og bagasjerom.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'ev-city-red', category: 'cars', emoji: '🚗', image: 'photos/BILEN-220x358.jpg', price: 99000,
    name: { en: 'Red electric city car', no: 'Rød elektrisk bybil' },
    description: { en: 'A two-seat electric city car with a 5 kW motor, a range of approximately 80 km and charging from a standard socket.', no: 'En toseters elektrisk bybil med 5 kW motor, rekkevidde på omtrent 80 km og lading fra vanlig stikkontakt.' },
    specs: { seats: '2', range: '80 km', speed: kmh('70'), power: '5 kW' },
  },
  {
    id: 'ev-city-red-classic', category: 'cars', emoji: '🚗', image: 'photos/BILEN.2006E-I-733x454.jpg', price: 89000,
    name: { en: 'Red classic-style EV', no: 'Rød elbil i klassisk stil' },
    description: { en: 'A two-seat electric car with a retro body, a 4 kW motor and a range of approximately 80 km.', no: 'En toseters elektrisk bil med retrokarosseri, 4 kW motor og rekkevidde på omtrent 80 km.' },
    specs: { seats: '2', range: '80 km', speed: kmh('60'), power: '4 kW' },
  },
  {
    id: 'ev-battery-open', category: 'cars', emoji: '🔋', image: 'photos/BILEN.5-525x394.jpg', price: 95000,
    name: { en: 'EV with visible battery pack', no: 'Elbil med synlig batteripakke' },
    description: { en: 'A demonstrator vehicle with the battery pack exposed, intended for inspection and training.', no: 'En demonstrasjonsbil med synlig batteripakke, beregnet for inspeksjon og opplæring.' },
    specs: { battery: '72 V', range: '80 km', seats: '2', power: '5 kW' },
  },
  {
    id: 'ev-motor-red', category: 'cars', emoji: '⚙️', image: 'photos/BILEN.DSC05574-526x395.jpg', price: 95000,
    name: { en: 'Red EV motor compartment', no: 'Rød elbil, motorrom' },
    description: { en: 'A view of the motor compartment in the red electric vehicle, showing the controller, contactor and wiring.', no: 'Bilde av motorrommet i den røde elbilen, med kontroller, kontaktstykke og ledningsnett.' },
    specs: { battery: '72 V', motor: 'AC', power: '5 kW' },
  },
  {
    id: 'ev-dashboard-indicator', category: 'cars', emoji: '💡', image: 'photos/BILEN.indicator-598x449.jpg', price: 450,
    name: { en: 'EV dashboard indicator', no: 'Elbil-indikator' },
    description: { en: 'A green LED indicator lamp for the instrument panel, operating on 12 V.', no: 'En grønn LED-indikatorlampe for instrumentpanelet, med 12 V driftsspenning.' },
    specs: { type: 'LED', supply: '12 V', colour: 'Green' },
  },
  {
    id: 'buggy-camo-four-seat', category: 'cars', emoji: '🏎️', image: 'photos/DSC03937-511x383.jpg', price: 109990,
    name: { en: 'Camo four-seat buggy', no: 'Kamuflasjebuggy med fire seter' },
    description: { en: 'A four-seat off-road buggy in camouflage with an 800 cc engine, a roll cage and four-point harnesses.', no: 'En fireseters offroad-buggy i kamuflasje med 800 cm³ motor, veltebur og firepunktseler.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), drive: 'RWD' },
  },
  {
    id: 'buggy-camo-four-seat-b', category: 'cars', emoji: '🏎️', image: 'photos/DSC03938-510x383.jpg', price: 109990,
    name: { en: 'Camo buggy, trail view', no: 'Kamuflasjebuggy, på stien' },
    description: { en: 'The four-seat camo buggy photographed on a wet forest trail.', no: 'Den fireseters kamuflasjebuggyen fotografert på en våt skogssti.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), drive: 'RWD' },
  },
  {
    id: 'buggy-camo-four-seat-c', category: 'cars', emoji: '🏎️', image: 'photos/DSC03939-545x409.jpg', price: 109990,
    name: { en: 'Camo buggy, side view', no: 'Kamuflasjebuggy, side' },
    description: { en: 'Side view of the four-seat buggy, showing the wheelbase and the off-road tyres.', no: 'Sidebilde av fireseteren, med akselavstand og offroad-dekk.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), tyres: 'Off-road' },
  },
  {
    id: 'buggy-camo-four-seat-d', category: 'cars', emoji: '🏎️', image: 'photos/DSC03940-510x382.jpg', price: 109990,
    name: { en: 'Camo buggy, rear view', no: 'Kamuflasjebuggy, bak' },
    description: { en: 'Rear view of the four-seat buggy with the spare wheel and tow point.', no: 'Bakfra på fireseteren, med reservehjul og slepepunkt.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), spare: 'Yes' },
  },
  {
    id: 'buggy-camo-four-seat-e', category: 'cars', emoji: '🏎️', image: 'photos/DSC03941-509x381.jpg', price: 109990,
    name: { en: 'Camo buggy, front view', no: 'Kamuflasjebuggy, front' },
    description: { en: 'Front view of the four-seat buggy with an LED light bar and a wide track.', no: 'Frontbilde av fireseteren med LED-lyslist og bred sporvidde.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), lights: 'LED bar' },
  },
  {
    id: 'porsche-911-silver', category: 'cars', emoji: '🏎️', image: 'photos/EL-porsche.LamoTitle019-1500x1004.jpg', price: 899000,
    name: { en: 'Silver Porsche 911', no: 'Sølv Porsche 911' },
    description: { en: 'A silver Porsche 911 coupe with a 3.6-litre engine and rear-wheel drive.', no: 'En sølv Porsche 911 coupe med 3,6-liters motor og bakhjulsdrift.' },
    specs: { engine: '3.6 L', power: '272 hp', seats: '4', drive: 'RWD' },
  },
  {
    id: 'ev-green-utility', category: 'cars', emoji: '🚙', image: 'photos/El-Bil-gon-stor-1.ygpE3F01-650x676.jpg', price: 119000,
    name: { en: 'Green electric utility car', no: 'Grønn elektrisk nyttebil' },
    description: { en: 'A green four-seat electric utility car with a glass cabin, a small rear bed and a range of approximately 90 km.', no: 'En grønn fireseters elektrisk nyttebil med glasskabin, lite lasteplan bak og rekkevidde på omtrent 90 km.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'ev-beetle-yellow', category: 'cars', emoji: '🚗', image: 'photos/El-Bil-gul-3.04-1-850x637.jpg', price: 99000,
    name: { en: 'Yellow electric Beetle', no: 'Gul elektrisk Boble' },
    description: { en: 'A yellow electric car with a Beetle-style body, two seats and a range of approximately 80 km.', no: 'En gul elektrisk bil med Boble-inspirert karosseri, to seter og rekkevidde på omtrent 80 km.' },
    specs: { seats: '2', range: '80 km', speed: kmh('70'), power: '5 kW' },
  },
  {
    id: 'ev-sports-orange', category: 'cars', emoji: '🏎️', image: 'photos/El-Bil-orange-2.Electric_Car-210x210.jpg', price: 149000,
    name: { en: 'Orange electric sports car', no: 'Oransje elektrisk sportsbil' },
    description: { en: 'An orange two-seat electric sports car with a 10 kW motor and a range of approximately 100 km.', no: 'En oransje toseters elektrisk sportsbil med 10 kW motor og rekkevidde på omtrent 100 km.' },
    specs: { seats: '2', range: '100 km', speed: kmh('90'), power: '10 kW' },
  },
  {
    id: 'ev-hotrod-red', category: 'cars', emoji: '🚗', image: 'photos/El-Bil-rod-2.02-1-533x518.jpg', price: 159000,
    name: { en: 'Red electric hot rod', no: 'Rød elektrisk hot rod' },
    description: { en: 'A red two-seat electric hot rod with a 10 kW motor and a range of approximately 100 km.', no: 'En rød toseters elektrisk hot rod med 10 kW motor og rekkevidde på omtrent 100 km.' },
    specs: { seats: '2', range: '100 km', speed: kmh('90'), power: '10 kW' },
  },
  {
    id: 'ev-van-grey-tall', category: 'cars', emoji: '🚐', image: 'photos/IMG_1270-low-948x711.jpg', price: 139000,
    name: { en: 'Grey electric van, tall roof', no: 'Grå elektrisk varebil, høyt tak' },
    description: { en: 'A tall electric van with sliding doors, a flat load floor and a range of approximately 100 km.', no: 'En høy elektrisk varebil med skyvedører, flatt lastegulv og rekkevidde på omtrent 100 km.' },
    specs: { seats: '2', range: '100 km', speed: kmh('80'), power: '7 kW' },
  },
  {
    id: 'golf-cart-red-two', category: 'cars', emoji: '⛳', image: 'photos/JEEPE.B1007676975-367x367.jpg', price: 84990,
    name: { en: 'Red golf cart, compact', no: 'Rød golfbil, kompakt' },
    description: { en: 'A compact two-seat electric golf cart with a roof, a rear cargo box and a range of approximately 50 km.', no: 'En kompakt toseters elektrisk golfbil med tak, lasteboks bak og rekkevidde på omtrent 50 km.' },
    specs: { seats: '2', power: '2.5 kW', speed: kmh('25'), range: '50 km' },
  },
  {
    id: 'utv-black-800', category: 'cars', emoji: '🏍️', image: 'photos/UTV.BALCK-928x619.jpg', price: 89990,
    name: { en: 'Black UTV 800', no: 'Svart UTV 800' },
    description: { en: 'A black side-by-side UTV with an 800 cc engine, four-wheel drive and seating for two.', no: 'En svart side-by-side UTV med 800 cm³ motor, firehjulsdrift og plass til to.' },
    specs: { engine: '800 cc', seats: '2', speed: kmh('80'), drive: '4WD' },
  },
  {
    id: 'comarth-black-one', category: 'cars', emoji: '🚗', image: 'photos/comarth-sort-sh-1-1303x791.jpg', price: 189000,
    name: { en: 'Black Comarth electric car', no: 'Svart Comarth elbil' },
    description: { en: 'A black Comarth electric city car with two seats, a 13 kW motor and a range of approximately 120 km.', no: 'En svart Comarth elektrisk bybil med to seter, 13 kW motor og rekkevidde på omtrent 120 km.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), power: '13 kW' },
  },
  {
    id: 'comarth-black-two', category: 'cars', emoji: '🚗', image: 'photos/comarth-sort-sh-4-1221x743.jpg', price: 189000,
    name: { en: 'Black Comarth, rear view', no: 'Svart Comarth, bak' },
    description: { en: 'Rear view of the black Comarth, showing the hatchback boot and the vehicle dimensions.', no: 'Bakfra på den svarte Comarthen, med hengslet bakluke og bilens mål.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), boot: '210 L' },
  },
  {
    id: 'comarth-white-red', category: 'cars', emoji: '🚗', image: 'photos/elbil-comarth.10-363x272.jpg', price: 179000,
    name: { en: 'White and red Comarth', no: 'Hvit og rød Comarth' },
    description: { en: 'A white Comarth electric city car with red accents, two seats and a range of approximately 120 km.', no: 'En hvit Comarth elektrisk bybil med røde detaljer, to seter og rekkevidde på omtrent 120 km.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), power: '13 kW' },
  },

  // ---------------- Kids' vehicles ----------------
  {
    id: 'gokart-offroad-800', category: 'kids', emoji: '🏎️', image: 'photos/ATV-1.gokart_800_seitevr-279x279.jpg', price: 14990,
    name: { en: 'Off-road go-kart 800', no: 'Offroad-gokart 800' },
    description: { en: 'An 800 W electric go-kart with off-road tyres, a 48 V battery and a top speed of 30 km/h.', no: 'En 800 W elektrisk gokart med offroad-dekk, 48 V batteri og toppfart på 30 km/t.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('30'), age: '8+' },
  },
  {
    id: 'miniquad-blue-800', category: 'kids', emoji: '🏍️', image: 'photos/ATV-1.miniquad_racer_800_blau_seitevr-279x279.jpg', price: 7990,
    name: { en: 'Blue mini quad 800', no: 'Blå minikvad 800' },
    description: { en: 'A blue 800 W electric mini quad with a speed limiter and a parental remote control.', no: 'En blå 800 W elektrisk minikvad med hastighetsbegrenser og fjernkontroll for foreldre.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('25'), age: '6+' },
  },
  {
    id: 'miniquad-red-800', category: 'kids', emoji: '🏍️', image: 'photos/ATV-1.miniquad_racer_800_rot_seitevr-600x593.jpg', price: 7990,
    name: { en: 'Red mini quad 800', no: 'Rød minikvad 800' },
    description: { en: 'A red 800 W electric mini quad with a padded seat, disc brakes and an adjustable speed limiter.', no: 'En rød 800 W elektrisk minikvad med polstret sete, skivebremser og justerbar hastighetsbegrenser.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('25'), age: '6+' },
  },
  {
    id: 'gokart-black-red', category: 'kids', emoji: '🏎️', image: 'photos/ATV-9.gokart_800_seitehl-710x710.jpg', price: 14990,
    name: { en: 'Black and red go-kart', no: 'Svart og rød gokart' },
    description: { en: 'Side view of the 800 W go-kart, showing the steel frame and the bucket seat.', no: 'Sidebilde av 800 W-gokarten, med stålramme og bøttesete.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('30'), age: '8+' },
  },
  {
    id: 'miniquad-petrol-50', category: 'kids', emoji: '🏍️', image: 'photos/ATV-Bensin.v01_E27D604A8302AC78D123AADD9AE23595_357X398_-239x214.jpg', price: 5990,
    name: { en: 'Petrol mini quad 50', no: 'Bensin-minikvad 50' },
    description: { en: 'A 50 cc petrol mini quad with a pull starter and a top speed of approximately 35 km/h.', no: 'En 50 cm³ bensin-minikvad med snorstart og toppfart på omtrent 35 km/t.' },
    specs: { engine: '50 cc', speed: kmh('35'), start: 'Pull', age: '6+' },
  },
  {
    id: 'miniquad-red-48v', category: 'kids', emoji: '🏍️', image: 'photos/ATV.grand-quad-electrique-pour-ados-48v-800w-1303731197-365x274.jpg', price: 8490,
    name: { en: 'Red 48 V mini quad', no: 'Rød 48 V minikvad' },
    description: { en: 'A red 48 V electric mini quad with reverse gear and a hydraulic disc brake.', no: 'En rød 48 V elektrisk minikvad med revers og hydraulisk skivebrems.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('30'), age: '8+' },
  },
  {
    id: 'miniquad-handlebar', category: 'kids', emoji: '🔧', image: 'photos/ATV.miniquad_racer_500_blau_lade-309x309.jpg', price: 350,
    name: { en: 'Blue mini quad handlebar', no: 'Blått minikvad-styre' },
    description: { en: 'A replacement handlebar with grips and a thumb throttle for the blue 500 W mini quad.', no: 'Et erstatningsstyre med håndtak og tommelgass til den blå 500 W-minikvaden.' },
    specs: { fits: '500 W mini quad', material: 'Steel', grips: 'Rubber' },
  },
  {
    id: 'aston-martin-rc', category: 'kids', emoji: '🏎️', image: 'photos/Aston-Martin-bond-car.BN600-PIP-323x396.jpg', price: 499,
    name: { en: 'Aston Martin RC car', no: 'Aston Martin RC-bil' },
    description: { en: 'A 1:18 scale remote-controlled Aston Martin model with rear-wheel drive.', no: 'En 1:18 fjernstyrt Aston Martin-modell med bakhjulsdrift.' },
    specs: { scale: '1:18', drive: 'RWD', battery: 'AA', age: '6+' },
  },
  {
    id: 'ride-on-yellow', category: 'kids', emoji: '🚗', image: 'photos/BILEN.11-424x318.jpg', price: 1990,
    name: { en: 'Yellow ride-on car', no: 'Gul lekebil' },
    description: { en: 'A yellow foot-to-floor ride-on car for children from two years of age.', no: 'En gul lekebil med fotdrift for barn fra to år.' },
    specs: { age: '2+', seats: '1', power: 'None', material: 'Plastic' },
  },
  {
    id: 'kids-electric-dirt-bike', category: 'kids', emoji: '🏍️', image: 'photos/DIRT-bike-electrique-zzz350-une-moto-enfant-phenomenale-1326146700-433x325.jpg', price: 4990,
    name: { en: 'Kids electric dirt bike', no: 'Elektrisk terrengsykkel for barn' },
    description: { en: 'A 24 V electric dirt bike for children with a 350 W motor and a top speed of 20 km/h.', no: 'En 24 V elektrisk terrengsykkel for barn med 350 W motor og toppfart på 20 km/t.' },
    specs: { power: '350 W', battery: '24 V', speed: kmh('20'), age: '6+' },
  },
  {
    id: 'ferrari-f1-rc', category: 'kids', emoji: '🏎️', image: 'photos/FERRARI.ferrari-x-sito-marchio-684x434.jpg', price: 599,
    name: { en: 'Ferrari F1 RC car', no: 'Ferrari F1 RC-bil' },
    description: { en: 'A 1:24 scale remote-controlled Ferrari Formula 1 car with rear-wheel drive.', no: 'En 1:24 fjernstyrt Ferrari Formel 1-bil med bakhjulsdrift.' },
    specs: { scale: '1:24', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'ferrari-california-rc', category: 'kids', emoji: '🏎️', image: 'photos/FERRARI.ferrari_california_02marchi_1-603x402.jpg', price: 599,
    name: { en: 'Ferrari California RC car', no: 'Ferrari California RC-bil' },
    description: { en: 'A 1:24 scale remote-controlled Ferrari California with working headlights.', no: 'En 1:24 fjernstyrt Ferrari California med fungerende frontlys.' },
    specs: { scale: '1:24', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'hummer-yellow-rideon', category: 'kids', emoji: '🚙', image: 'photos/Hummer.DSC00514-274x205.jpg', price: 2990,
    name: { en: 'Yellow Hummer ride-on', no: 'Gul Hummer-lekebil' },
    description: { en: 'A yellow Hummer-style ride-on car with 12 V power, a horn and a top speed of 5 km/h.', no: 'En gul Hummer-lekebil med 12 V drift, horn og toppfart på 5 km/t.' },
    specs: { battery: '12 V', speed: kmh('5'), seats: '1', age: '3+' },
  },
  {
    id: 'hummer-white-rideon', category: 'kids', emoji: '🚙', image: 'photos/Hummer.DSC00699-1-396x528.jpg', price: 2990,
    name: { en: 'White Hummer ride-on', no: 'Hvit Hummer-lekebil' },
    description: { en: 'A white Hummer-style ride-on car with opening doors and a top speed of 5 km/h.', no: 'En hvit Hummer-lekebil med åpningsbare dører og toppfart på 5 km/t.' },
    specs: { battery: '12 V', speed: kmh('5'), seats: '1', age: '3+' },
  },
  {
    id: 'jeep-rideon-catalogue', category: 'kids', emoji: '🚙', image: 'photos/JEEP3.scan3-559x800.jpg', price: 5990,
    name: { en: 'Military-style jeep ride-on', no: 'Militærjeep-lekebil' },
    description: { en: 'A military-style jeep ride-on with 12 V power, seating for two and a top speed of 6 km/h.', no: 'En militærjeep-lekebil med 12 V drift, plass til to og toppfart på 6 km/t.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'jeep-rideon-dark', category: 'kids', emoji: '🚙', image: 'photos/Jeep.JEEP2-605x843.jpg', price: 6990,
    name: { en: 'Dark Jeep ride-on', no: 'Mørk Jeep-lekebil' },
    description: { en: 'A dark green jeep ride-on with large wheels, seating for two and a parental remote control.', no: 'En mørkegrønn Jeep-lekebil med store hjul, plass til to og fjernkontroll for foreldre.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'jeep-rideon-yellow-show', category: 'kids', emoji: '🚙', image: 'photos/Jeep.Raider.IFEMA013-717x537.jpg', price: 5990,
    name: { en: 'Yellow Jeep ride-on', no: 'Gul Jeep-lekebil' },
    description: { en: 'A yellow jeep ride-on with 12 V power, seating for two and a top speed of 6 km/h.', no: 'En gul Jeep-lekebil med 12 V drift, plass til to og toppfart på 6 km/t.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'jeep-rideon-yellow-street', category: 'kids', emoji: '🚙', image: 'photos/Jeep.foto1-730x509.jpg', price: 5990,
    name: { en: 'Yellow Jeep ride-on, street', no: 'Gul Jeep-lekebil, gate' },
    description: { en: 'The yellow jeep ride-on photographed outdoors in use.', no: 'Den gule Jeep-lekebilen fotografert utendørs i bruk.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'mercedes-ml63-rideon', category: 'kids', emoji: '🚙', image: 'photos/ML63red_11_-p-600x399.jpg', price: 3490,
    name: { en: 'Mercedes ML63 ride-on', no: 'Mercedes ML63-lekebil' },
    description: { en: 'A red Mercedes ML63 ride-on with chrome trim, seating for two and a top speed of 5 km/h.', no: 'En rød Mercedes ML63-lekebil med kromdetaljer, plass til to og toppfart på 5 km/t.' },
    specs: { battery: '12 V', speed: kmh('5'), seats: '2', age: '3+' },
  },
  {
    id: 'minority-report-car-toy', category: 'kids', emoji: '🚗', image: 'photos/Minority-report-car.PW538-PIP-311x398.jpg', price: 699,
    name: { en: 'Minority Report concept car', no: 'Minority Report-konseptbil' },
    description: { en: 'A 1:32 scale die-cast model of the concept car from Minority Report.', no: 'En 1:32 støpt metallmodell av konseptbilen fra Minority Report.' },
    specs: { scale: '1:32', material: 'Die-cast', age: '6+' },
  },
  {
    id: 'polaris-rzr-rideon', category: 'kids', emoji: '🏎️', image: 'photos/POLARIS.polaris-ranger-rzr-900-peg-perego-233x233.jpg', price: 5990,
    name: { en: 'Polaris RZR ride-on', no: 'Polaris RZR-lekebil' },
    description: { en: 'A two-seat Polaris RZR ride-on with 24 V power, a roll bar and a top speed of 8 km/h.', no: 'En toseter Polaris RZR-lekebil med 24 V drift, veltebøyle og toppfart på 8 km/t.' },
    specs: { battery: '24 V', speed: kmh('8'), seats: '2', age: '6+' },
  },
  {
    id: 'porsche-carrera-gt-model', category: 'kids', emoji: '🏎️', image: 'photos/Porsce-carrera-GT.PW535-PIP-291x365.jpg', price: 499,
    name: { en: 'Porsche Carrera GT model', no: 'Porsche Carrera GT-modell' },
    description: { en: 'A 1:32 scale die-cast Porsche Carrera GT model with opening doors.', no: 'En 1:32 støpt metallmodell av Porsche Carrera GT med åpningsbare dører.' },
    specs: { scale: '1:32', material: 'Die-cast', doors: 'Opening' },
  },
  {
    id: 'red-formula-racer', category: 'cars', emoji: '🏎️', image: 'photos/Race2_Sports_Car-405x214.jpg', price: 24990,
    name: { en: 'Red Formula race car', no: 'Rød Formel-racerbil' },
    description: { en: 'A red Formula-style race car with front and rear wings and wide rubber tires. A bold eye-catcher for showrooms, events and tracks.', no: 'En rød racerbil i Formel-stil med fram- og bakvinge og brede gummidekk. En blikkfang for utstillinger, arrangementer og baner.' },
    specs: { seats: '1', speed: kmh('60'), power: '5 kW' },
  },
  {
    id: 'tractor-rideon', category: 'kids', emoji: '🚜', image: 'photos/TRAKTOR-litebilde.1260498571-208x208.jpg', price: 2490,
    name: { en: 'Ride-on tractor', no: 'Traktor-lekebil' },
    description: { en: 'A green ride-on tractor with a matching trailer for children from three years of age.', no: 'En grønn traktor-lekebil med tilhenger for barn fra tre år.' },
    specs: { age: '3+', seats: '1', trailer: 'Included', material: 'Plastic' },
  },

  // ---------------- Robots & RC ----------------
  {
    id: 'rc-heli-md500', category: 'robots', emoji: '🚁', image: 'photos/2ch-MINI-Helicopter-MD500-3.B1003198957-279x279.jpg', price: 1290,
    name: { en: 'MD500 mini helicopter', no: 'MD500 minihelikopter' },
    description: { en: 'A two-channel radio-controlled helicopter in police livery with a built-in gyro.', no: 'Et tokanals radiostyrt helikopter i politifarger med innebygd gyro.' },
    specs: { channels: '2', battery: '3.7 V', runtime: '8 min', age: '8+' },
  },
  {
    id: '3d-printer-duplicator-4s', category: 'robots', emoji: '🖨️', image: 'photos/3D-20141028090054846-591x591.jpg', price: 8990,
    name: { en: 'Wanhao Duplicator 4S 3D printer', no: 'Wanhao Duplicator 4S 3D-skriver' },
    description: { en: 'A dual-nozzle 3D printer for PLA and ABS with a build volume of 225 x 145 x 150 mm.', no: 'En 3D-skriver med to dyser for PLA og ABS og et byggevolum på 225 x 145 x 150 mm.' },
    specs: { build: '225 × 145 × 150 mm', nozzles: '2', filament: 'PLA / ABS', connectivity: 'USB / SD' },
  },
  {
    id: '3d-print-sample-pack', category: 'robots', emoji: '🧸', image: 'photos/3d-20141016092236807-600x398.jpg', price: 249,
    name: { en: '3D print sample pack', no: '3D-utskriftspakke' },
    description: { en: 'A set of 3D-printed sample objects in assorted colours, supplied with a small demonstration quadcopter.', no: 'Et sett med 3D-utskrevne prøveobjekter i ulike farger, levert med en liten demonstrasjonsquadcopter.' },
    specs: { pieces: '20+', material: 'PLA', colours: 'Assorted' },
  },
  {
    id: '3d-printed-figure-shelf', category: 'robots', emoji: '🧸', image: 'photos/3D-2-securedownload-261x261.jpg', price: 349,
    name: { en: '3D-printed figure set', no: '3D-utskrevet figursett' },
    description: { en: 'A set of four hand-painted 3D-printed figures between 8 and 15 cm in height.', no: 'Et sett med fire håndmalte 3D-utskrevne figurer mellom 8 og 15 cm høye.' },
    specs: { pieces: '4', material: 'PLA', height: '8–15 cm', painted: 'By hand' },
  },
  {
    id: '3d-printer-black', category: 'robots', emoji: '🖨️', image: 'photos/3d-20141028090250839-652x600.jpg', price: 7990,
    name: { en: 'Black 3D printer', no: 'Svart 3D-skriver' },
    description: { en: 'A black 3D printer with a heated bed, a 0.4 mm nozzle and a build volume of 200 x 200 x 180 mm.', no: 'En svart 3D-skriver med varmebed, 0,4 mm dyse og byggevolum på 200 x 200 x 180 mm.' },
    specs: { build: '200 × 200 × 180 mm', nozzle: '0.4 mm', filament: 'PLA / ABS', connectivity: 'USB' },
  },
  {
    id: '3d-printer-red-spool', category: 'robots', emoji: '🖨️', image: 'photos/3d-20141028090252757-201x201.jpg', price: 7990,
    name: { en: '3D printer with red filament', no: '3D-skriver med rød filament' },
    description: { en: 'The black 3D printer supplied with a 1 kg spool of red PLA filament.', no: 'Den svarte 3D-skriveren levert med en 1 kg spole rød PLA-filament.' },
    specs: { build: '200 × 200 × 180 mm', filament: 'PLA', spool: '1 kg', colour: 'Red' },
  },
  {
    id: '3d-print-blue-figure', category: 'robots', emoji: '🧸', image: 'photos/3d-6352384907_b58aa28c18_b-400x600.jpg', price: 199,
    name: { en: 'Blue 3D-printed figure', no: 'Blå 3D-utskrevet figur' },
    description: { en: 'A blue 3D-printed figure, 12 cm tall, in PLA.', no: 'En blå 3D-utskrevet figur, 12 cm høy, i PLA.' },
    specs: { height: '12 cm', material: 'PLA', colour: 'Blue' },
  },
  {
    id: '3d-print-red-robot', category: 'robots', emoji: '🤖', image: 'photos/3d-6846203491_46be86682d_b-323x202.jpg', price: 149,
    name: { en: 'Red robot figure', no: 'Rød robotfigur' },
    description: { en: 'A hand-painted 8 cm robot figure produced on a 3D printer.', no: 'En håndmalt robotfigur på 8 cm produsert på 3D-skriver.' },
    specs: { height: '8 cm', material: 'PLA', painted: 'By hand' },
  },
  {
    id: '3d-print-red-robot-two', category: 'robots', emoji: '🤖', image: 'photos/3d-6846218495_b4d9348d2c_b-331x209.jpg', price: 149,
    name: { en: 'Red robot figure, second pose', no: 'Rød robotfigur, annen stilling' },
    description: { en: 'The same 8 cm robot figure photographed from a second angle.', no: 'Samme robotfigur på 8 cm fotografert fra en annen vinkel.' },
    specs: { height: '8 cm', material: 'PLA', painted: 'By hand' },
  },
  {
    id: '3d-printer-toolkit', category: 'robots', emoji: '🧰', image: 'photos/3d-WanHao_Duplicator4S_Bild09_1280x720-1280x720-600x337.jpg', price: 399,
    name: { en: '3D printer tool kit', no: 'Verktøysett til 3D-skriver' },
    description: { en: 'A 12-piece maintenance kit for 3D printers, including tweezers, scrapers and nozzle cleaners.', no: 'Et 12-dels vedlikeholdssett for 3D-skrivere, med pinsett, skraper og dyserensere.' },
    specs: { pieces: '12', includes: 'Tweezers, scrapers', case: 'Fabric' },
  },
  {
    id: 'apache-fpv-frame', category: 'robots', emoji: '🚁', image: 'photos/APACHE-kamera.20071016144030394-572x429.jpg', price: 990,
    name: { en: 'Apache FPV camera frame', no: 'Apache FPV-kameraramme' },
    description: { en: 'An aluminium camera frame and landing gear for the Apache 450 helicopter, prepared for an FPV camera.', no: 'En aluminiumskameraramme og landingsunderstell til Apache 450-helikopteret, klargjort for FPV-kamera.' },
    specs: { fits: 'Apache 450', material: 'Aluminium', camera: 'Not included' },
  },
  {
    id: 'avatar-toy-drone', category: 'robots', emoji: '🚁', image: 'photos/AVATAR.rh-2996022-550-520x520.jpg', price: 399,
    name: { en: 'Avatar toy quadcopter', no: 'Avatar leke-quadcopter' },
    description: { en: 'A four-rotor toy quadcopter with a simple controller and a flight time of approximately six minutes.', no: 'En fire-rotors leke-quadcopter med enkel kontroller og flytid på omtrent seks minutter.' },
    specs: { channels: '4', battery: '3.7 V', runtime: '6 min', age: '8+' },
  },
  {
    id: 'rc-heli-apache-flight', category: 'robots', emoji: '🚁', image: 'photos/ApAcHe.eh-678-1-542x357.jpg', price: 1490,
    name: { en: 'Apache RC helicopter', no: 'Apache RC-helikopter' },
    description: { en: 'A scale Apache radio-controlled helicopter with a four-channel radio and a 45 cm fuselage.', no: 'Et Apache-helikopter i skala med firekanals radio og 45 cm skrog.' },
    specs: { channels: '4', battery: '7.4 V', runtime: '10 min', length: '45 cm' },
  },
  {
    id: 'rc-heli-apache-box', category: 'robots', emoji: '🚁', image: 'photos/ApAcHe.rh-9088-3-585x394.jpg', price: 1490,
    name: { en: 'Apache RC helicopter kit', no: 'Apache RC-helikoptersett' },
    description: { en: 'The complete Apache helicopter set with transmitter, charger, battery and carrying case.', no: 'Det komplette Apache-helikoptersettet med sender, lader, batteri og bæreveske.' },
    specs: { channels: '4', battery: '7.4 V', runtime: '10 min', case: 'Included' },
  },
  {
    id: 'rc-truck-chassis', category: 'robots', emoji: '🚙', image: 'photos/BIL.10030pro-010-346x259.jpg', price: 2490,
    name: { en: 'RC monster truck chassis', no: 'RC-monstertruck-chassis' },
    description: { en: 'A 1:10 four-wheel-drive monster truck chassis with blue anodised components and off-road tyres.', no: 'Et 1:10 firehjulsdrevet monstertruck-chassis med blå anodiserte deler og offroad-dekk.' },
    specs: { scale: '1:10', drive: '4WD', motor: 'Brushed', battery: '7.4 V' },
  },
  {
    id: 'rc-truck-wheel', category: 'robots', emoji: '🛞', image: 'photos/BIL.10030pro-012-390x293.jpg', price: 199,
    name: { en: 'RC monster truck wheel', no: 'RC-monstertruck-hjul' },
    description: { en: 'A spare 120 mm wheel with an off-road tyre for the 1:10 monster truck.', no: 'Et reservehjul på 120 mm med offroad-dekk til 1:10-monstertrucken.' },
    specs: { scale: '1:10', diameter: '120 mm', hex: '12 mm' },
  },
  {
    id: 'rc-transmitter-two-channel', category: 'robots', emoji: '🎮', image: 'photos/BIL.10030pro-024-505x550.jpg', price: 399,
    name: { en: '2-channel RC transmitter', no: '2-kanals RC-sender' },
    description: { en: 'A two-channel pistol-grip transmitter with a steering wheel and throttle trigger, operating on 2.4 GHz.', no: 'En tokanals pistolgrep-sender med ratt og gassavtrekk, på 2,4 GHz.' },
    specs: { channels: '2', frequency: '2.4 GHz', power: '4 × AA' },
  },
  {
    id: 'rc-buggy-blue', category: 'robots', emoji: '🚙', image: 'photos/BIL.10070pro-011-566x566.jpg', price: 2490,
    name: { en: 'Blue RC buggy', no: 'Blå RC-buggy' },
    description: { en: 'A blue 1:10 four-wheel-drive buggy with oil-filled shock absorbers.', no: 'En blå 1:10 firehjulsdrevet buggy med oljefylte støtdempere.' },
    specs: { scale: '1:10', drive: '4WD', motor: 'Brushed', battery: '7.4 V' },
  },
  {
    id: 'rc-transmitter-two-channel-b', category: 'robots', emoji: '🎮', image: 'photos/BIL.10070pro-022-508x550.jpg', price: 399,
    name: { en: '2-channel RC transmitter, black', no: '2-kanals RC-sender, svart' },
    description: { en: 'The black version of the two-channel pistol-grip transmitter, operating on 2.4 GHz.', no: 'Den svarte utgaven av den tokanals pistolgrep-senderen, på 2,4 GHz.' },
    specs: { channels: '2', frequency: '2.4 GHz', power: '4 × AA' },
  },
  {
    id: 'rc-monster-truck-yellow', category: 'robots', emoji: '🚙', image: 'photos/BILoffroad.08881-003-275x206.jpg', price: 1990,
    name: { en: 'Yellow RC monster truck', no: 'Gul RC-monstertruck' },
    description: { en: 'A yellow 1:12 four-wheel-drive off-road truck with a flight time of approximately 15 minutes.', no: 'En gul 1:12 firehjulsdrevet offroad-lastebil med kjøretid på omtrent 15 minutter.' },
    specs: { scale: '1:12', drive: '4WD', battery: '7.4 V', runtime: '15 min' },
  },
  {
    id: 'rc-seaplane-red', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.679-421x316.jpg', price: 1490,
    name: { en: 'Red RC seaplane', no: 'Rødt RC-sjøfly' },
    description: { en: 'A red three-channel radio-controlled seaplane with an 80 cm wingspan, designed for take-off and landing on water.', no: 'Et rødt trekanals radiostyrt sjøfly med 80 cm vingespenn, beregnet for letting og landing på vann.' },
    specs: { channels: '3', wingspan: '80 cm', battery: '7.4 V', runtime: '10 min' },
  },
  {
    id: 'rc-seaplane-red-two', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.680-407x305.jpg', price: 1490,
    name: { en: 'Red RC seaplane, side view', no: 'Rødt RC-sjøfly, side' },
    description: { en: 'Side view of the red seaplane, showing the propeller and the floats.', no: 'Sidebilde av det røde sjøflyet, med propell og pontonger.' },
    specs: { channels: '3', wingspan: '80 cm', battery: '7.4 V', floats: 'Yes' },
  },
  {
    id: 'rc-seaplane-water', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.682-443x332.jpg', price: 1590,
    name: { en: 'RC seaplane on the water', no: 'RC-sjøfly på vannet' },
    description: { en: 'The radio-controlled seaplane resting on calm water before take-off.', no: 'Det radiostyrte sjøflyet på stille vann før letting.' },
    specs: { channels: '3', wingspan: '80 cm', battery: '7.4 V', runtime: '10 min' },
  },
  {
    id: 'rc-stunt-car-set', category: 'robots', emoji: '🚗', image: 'photos/Bil-stunt.cars1es-479x330.jpg', price: 599,
    name: { en: 'RC stunt car set', no: 'RC-stuntbilsett' },
    description: { en: 'A 1:16 four-wheel-drive stunt car capable of flips and spins, with an integrated music player.', no: 'En 1:16 firehjulsdrevet stuntbil som kan snu og spinne, med innebygd musikkavspiller.' },
    specs: { scale: '1:16', drive: '4WD', battery: 'Rechargeable', music: 'Yes' },
  },
  {
    id: 'rc-car-track-blue', category: 'robots', emoji: '🏁', image: 'photos/Bilbane-blaa-Bil.6618-1550x1217.jpg', price: 899,
    name: { en: 'Blue RC car track', no: 'Blå RC-bilbane' },
    description: { en: 'A modular blue race track of approximately six metres, suitable for 1:43 scale cars.', no: 'En modulbasert blå racerbane på omtrent seks meter, egnet for 1:43-biler.' },
    specs: { length: '6 m', pieces: '40+', scale: '1:43', age: '5+' },
  },
  {
    id: 'mini-rc-car-red', category: 'robots', emoji: '🚗', image: 'photos/Boy.mini_1_main_200_5737-205x205.jpg', price: 299,
    name: { en: 'Mini RC rally car', no: 'Mini RC-rallybil' },
    description: { en: 'A 1:58 scale remote-controlled rally car with a controller mounted on the packaging.', no: 'En 1:58 fjernstyrt rallybil med kontroller festet på emballasjen.' },
    specs: { scale: '1:58', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'mini-rc-car-kit', category: 'robots', emoji: '🚗', image: 'photos/Brun-diskolit.AN0055-236x236.jpg', price: 349,
    name: { en: 'Mini RC car in display pack', no: 'Mini RC-bil i displaypakke' },
    description: { en: 'A 1:58 scale remote-controlled car supplied in a blister pack with controller and charger.', no: 'En 1:58 fjernstyrt bil levert i blisterpakning med kontroller og lader.' },
    specs: { scale: '1:58', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'devo-f7-transmitter', category: 'robots', emoji: '🎮', image: 'photos/DEVO-F7-2-431x676.jpg', price: 1990,
    name: { en: 'Walkera Devo F7 transmitter', no: 'Walkera Devo F7-sender' },
    description: { en: 'A seven-channel transmitter with a built-in 4.3-inch video monitor for FPV flying.', no: 'En sjukanals sender med innebygd 4,3-tommers videoskjerm for FPV-flyging.' },
    specs: { channels: '7', screen: '4.3"', frequency: '2.4 GHz', battery: 'LiPo' },
  },
  {
    id: 'drone-backpack', category: 'robots', emoji: '🎒', image: 'photos/DRONE-Bag_5-400x600.jpg', price: 599,
    name: { en: 'Yellow drone backpack', no: 'Gul drone-ryggsekk' },
    description: { en: 'A padded yellow backpack with three compartments for a drone, transmitter and batteries.', no: 'En polstret gul ryggsekk med tre rom til drone, sender og batterier.' },
    specs: { material: 'Nylon', compartments: '3', fits: 'Up to 350 mm' },
  },
  {
    id: 'fpv-monitor', category: 'robots', emoji: '📺', image: 'photos/DRONE-JdfpR1-G.jpg.thumb_400x400-384x384.jpg', price: 990,
    name: { en: 'FPV monitor', no: 'FPV-skjerm' },
    description: { en: 'A 4.3-inch clip-on FPV monitor with a built-in battery and 5.8 GHz receiver.', no: 'En 4,3-tommers FPV-skjerm med innebygd batteri og 5,8 GHz-mottaker.' },
    specs: { size: '4.3"', battery: 'Built-in', input: '5.8 GHz' },
  },
  {
    id: 'helmet-action-camera', category: 'robots', emoji: '📷', image: 'photos/DRONE-Kdfpj6ya-600x390.jpg', price: 1490,
    name: { en: 'Helmet action camera', no: 'Hjelmkamera' },
    description: { en: 'A compact 1080p action camera with a helmet strap and a 900 mAh battery.', no: 'Et kompakt 1080p actionkamera med hjelmreim og 900 mAh batteri.' },
    specs: { resolution: '1080p', storage: 'microSD', battery: '900 mAh', mount: 'Helmet strap' },
  },
  {
    id: 'drone-battery-pack', category: 'robots', emoji: '🔋', image: 'photos/DRONE-graph_batteries-600x496.jpg', price: 1290,
    name: { en: 'Drone battery pack, 3 pcs', no: 'Dronebatteripakke, 3 stk' },
    description: { en: 'Three 3S 2200 mAh flight batteries with XT60 connectors and a discharge chart.', no: 'Tre 3S 2200 mAh flybatterier med XT60-kontakter og utladningsdiagram.' },
    specs: { cells: '3S', capacity: '2200 mAh', voltage: '11.1 V', plugs: 'XT60' },
  },
  {
    id: 'quadcopter-black', category: 'robots', emoji: '🚁', image: 'photos/DROne-71mr-ylmr2L__SL1500_-600x600.jpg', price: 3990,
    name: { en: 'Black quadcopter', no: 'Svart quadcopter' },
    description: { en: 'A black six-channel quadcopter with a gimbal mount and a programmable transmitter.', no: 'En svart sekskanals quadcopter med gimbal-feste og programmerbar sender.' },
    specs: { channels: '6', battery: '11.1 V', runtime: '15 min', camera: 'Optional' },
  },
  {
    id: 'fpv-wiring-diagram', category: 'robots', emoji: '🔌', image: 'photos/DV04.fpv5801-733x468.jpg', price: null,
    name: { en: 'FPV wiring diagram', no: 'FPV-koblingsskjema' },
    description: { en: 'A colour-coded wiring diagram for the FPV system, supplied in A3 format.', no: 'Et fargekodet koblingsskjema for FPV-systemet, i A3-format.' },
    specs: { topic: 'Wiring', language: { en: 'English', no: 'Engelsk' }, format: 'A3' },
  },
  {
    id: 'scout-x4-drone-map', category: 'robots', emoji: '🚁', image: 'photos/DoRoNe.20141225162035_19913-978x360.jpg', price: 4990,
    name: { en: 'Scout X4 drone with GPS map', no: 'Scout X4-drone med GPS-kart' },
    description: { en: 'The Scout X4 drone shown alongside its GPS map view and flight information.', no: 'Scout X4-dronen vist sammen med GPS-kartvisning og flyinformasjon.' },
    specs: { channels: '6', range: '800 m', runtime: '20 min', camera: '1080p' },
  },
  {
    id: 'drone-flight-map-page', category: 'robots', emoji: '🗺️', image: 'photos/DrOnE-20141225162036_16338-398x413.jpg', price: null,
    name: { en: 'Drone flight map', no: 'Droneflykart' },
    description: { en: 'A printed map page for flight planning, with home point and restricted-zone markings.', no: 'En trykt kartside for flyplanlegging, med hjempunkt og markerte restriksjonssoner.' },
    specs: { topic: 'Navigation', format: 'A5', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'robot-dogs-silver-black', category: 'robots', emoji: '🤖', image: 'photos/Dscf0028-696x557.jpg', price: 3990,
    name: { en: 'Robot dogs, silver and black', no: 'Robothunder, sølv og svart' },
    description: { en: 'Two robot dogs, one silver and one black, each with a movable head and jointed legs.', no: 'To robothunder, en sølvfarget og en svart, med bevegelig hode og leddede ben.' },
    specs: { pieces: '2', battery: 'Rechargeable' },
  },
  {
    id: 'esky-rc-helicopter', category: 'robots', emoji: '🚁', image: 'photos/EKO.eco7_tb2_p3-307x221.jpg', price: 890,
    name: { en: 'Esky RC helicopter', no: 'Esky RC-helikopter' },
    description: { en: 'A three-channel beginner helicopter with a stabilising flybar and a flight time of approximately eight minutes.', no: 'Et trekanals nybegynnerhelikopter med stabiliserende flybar og flytid på omtrent åtte minutter.' },
    specs: { channels: '3', battery: '7.4 V', runtime: '8 min', length: '30 cm' },
  },
  {
    id: 'veni-cross-flying-car', category: 'robots', emoji: '🚗', image: 'photos/FLYBIL-1.ES3760-400x300.jpg', price: 699,
    name: { en: 'Veni-Cross flying car', no: 'Veni-Cross flybil' },
    description: { en: 'A four-channel radio-controlled hybrid vehicle that drives on the ground and hovers in the air.', no: 'Et firekanals radiostyrt hybridkjøretøy som kjører på bakken og svever i luften.' },
    specs: { channels: '4', battery: '3.7 V', runtime: '8 min', age: '8+' },
  },
  {
    id: 'micro-heli-hand', category: 'robots', emoji: '🚁', image: 'photos/HELI-LITE.rh-708a-1-493x493.jpg', price: 299,
    name: { en: 'Micro helicopter', no: 'Mikrohelikopter' },
    description: { en: 'A palm-sized three-channel helicopter with a 3.7 V battery and a flight time of approximately six minutes.', no: 'Et håndflatestort trekanals helikopter med 3,7 V batteri og flytid på omtrent seks minutter.' },
    specs: { channels: '3', battery: '3.7 V', runtime: '6 min', age: '8+' },
  },
  {
    id: 'heli-moskito-3ch', category: 'robots', emoji: '🚁', image: 'photos/HELIKOPter-3ch-MOSKITO.200711914164537115-466x259.jpg', price: 490,
    name: { en: 'Moskito 3-channel helicopter', no: 'Moskito 3-kanals helikopter' },
    description: { en: 'A three-channel helicopter with a 22 cm fuselage, supplied in a protective cardboard box.', no: 'Et trekanals helikopter med 22 cm skrog, levert i en beskyttende pappeske.' },
    specs: { channels: '3', battery: '3.7 V', runtime: '7 min', length: '22 cm' },
  },
  {
    id: 'micro-heli-3ch', category: 'robots', emoji: '🚁', image: 'photos/HELIkopter.lite.3ch.200711915262794959-458x254.jpg', price: 399,
    name: { en: 'Mini 3-channel helicopter', no: 'Mini 3-kanals helikopter' },
    description: { en: 'A mini three-channel helicopter supplied with transmitter and spare rotor blades.', no: 'Et mini trekanals helikopter levert med sender og reserve rotorblader.' },
    specs: { channels: '3', battery: '3.7 V', runtime: '7 min', spare: 'Blades' },
  },
  {
    id: 'heli-2ch-box', category: 'robots', emoji: '🚁', image: 'photos/Helicopter-2ch.10089-11-352x264.jpg', price: 790,
    name: { en: '2-channel helicopter kit', no: '2-kanals helikoptersett' },
    description: { en: 'A complete two-channel helicopter set with transmitter, charger and carrying box.', no: 'Et komplett tokanals helikoptersett med sender, lader og bæreveske.' },
    specs: { channels: '2', battery: '3.7 V', runtime: '8 min', case: 'Included' },
  },
  {
    id: 'heli-white-coast', category: 'robots', emoji: '🚁', image: 'photos/Helicopter.hvit-pent-bilde.Radio_Controlled_Helicopter-525x394.jpg', price: 890,
    name: { en: 'White RC helicopter', no: 'Hvitt RC-helikopter' },
    description: { en: 'A white three-channel radio-controlled helicopter with a 32 cm fuselage.', no: 'Et hvitt trekanals radiostyrt helikopter med 32 cm skrog.' },
    specs: { channels: '3', battery: '7.4 V', runtime: '8 min', length: '32 cm' },
  },
  {
    id: 'large-rc-helicopter', category: 'robots', emoji: '🚁', image: 'photos/Helikopter-60.2005125172110262-343x245.jpg', price: 4990,
    name: { en: 'Large 60-size RC helicopter', no: 'Stort RC-helikopter i 60-klassen' },
    description: { en: 'A 60-size petrol-powered radio-controlled helicopter with a 130 cm fuselage, intended for experienced pilots.', no: 'Et 60-klasse bensindrevet radiostyrt helikopter med 130 cm skrog, beregnet for erfarne piloter.' },
    specs: { engine: '60 size', length: '130 cm', channels: '6', skill: 'Advanced' },
  },
  {
    id: 'rc-f18-jet', category: 'robots', emoji: '✈️', image: 'photos/Jagerfly-stort.ep-f18-21-673x389.jpg', price: 1990,
    name: { en: 'F-18 RC fighter jet', no: 'F-18 RC-jagerfly' },
    description: { en: 'A scale F-18 model jet with a 70 cm wingspan, four-channel radio and a decal set.', no: 'En F-18-modelljet i skala med 70 cm vingespenn, firekanals radio og klistremerkesett.' },
    specs: { wingspan: '70 cm', channels: '4', battery: '7.4 V', skill: 'Intermediate' },
  },
  {
    id: 'qrx350-pro-kit', category: 'robots', emoji: '🚁', image: 'photos/QRX350pro-3-447x436.jpg', price: 3490,
    name: { en: 'QRX350 Pro drone kit', no: 'QRX350 Pro-dronesett' },
    description: { en: 'A white QRX350 Pro quadcopter with GPS, return-to-home functionality and a 15-minute flight time.', no: 'En hvit QRX350 Pro-quadcopter med GPS, retur-til-hjem-funksjon og 15 minutters flytid.' },
    specs: { channels: '6', range: '500 m', runtime: '15 min', gps: 'Yes' },
  },
  {
    id: 'qrx350-pro-box-back', category: 'robots', emoji: '🚁', image: 'photos/QRX350pro-4-447x600.jpg', price: 3490,
    name: { en: 'QRX350 Pro, box back', no: 'QRX350 Pro, eske bak' },
    description: { en: 'The rear of the QRX350 Pro packaging, listing specifications and included accessories.', no: 'Baksiden av QRX350 Pro-emballasjen, med spesifikasjoner og medfølgende tilbehør.' },
    specs: { channels: '6', range: '500 m', runtime: '15 min', gps: 'Yes' },
  },
  {
    id: 'qrx350-pro-transmitter', category: 'robots', emoji: '🚁', image: 'photos/QRX350pro-5-447x614.jpg', price: 3490,
    name: { en: 'QRX350 Pro with transmitter', no: 'QRX350 Pro med sender' },
    description: { en: 'The complete QRX350 Pro set with transmitter, propeller guards, battery and manual.', no: 'Det komplette QRX350 Pro-settet med sender, propellbeskyttelse, batteri og manual.' },
    specs: { channels: '6', range: '500 m', runtime: '15 min', guards: 'Included' },
  },
  {
    id: 'rc-car-instruction-sheet', category: 'robots', emoji: '📄', image: 'photos/RC-6.20130912114710_43947-682x358.jpg', price: null,
    name: { en: 'RC car instruction sheet', no: 'RC-bil bruksanvisning' },
    description: { en: 'An exploded-view assembly sheet for the RC car, listing each part by number.', no: 'Et monteringsark med sprengskisse for RC-bilen, der hver del er nummerert.' },
    specs: { topic: 'Assembly', language: { en: 'English', no: 'Engelsk' }, format: 'A3' },
  },
  {
    id: 'scout-x4-white', category: 'robots', emoji: '🚁', image: 'photos/Scout_X4-white-1445x991.jpg', price: 4990,
    name: { en: 'Scout X4 white drone', no: 'Scout X4 hvit drone' },
    description: { en: 'A white Scout X4 quadcopter with gimbal, GPS and a 20-minute flight time.', no: 'En hvit Scout X4-quadcopter med gimbal, GPS og 20 minutters flytid.' },
    specs: { channels: '6', range: '800 m', runtime: '20 min', camera: '1080p' },
  },
  {
    id: 'robot-vacuum-rv10', category: 'robots', emoji: '🤖', image: 'photos/Stovsuger-a.RV-10c.with.Remote.control-620x560.jpg', price: 2490,
    name: { en: 'RV-10C robot vacuum', no: 'RV-10C robotstøvsuger' },
    description: { en: 'A round robot vacuum cleaner with a remote control, a 2600 mAh battery and 90 minutes of runtime.', no: 'En rund robotstøvsuger med fjernkontroll, 2600 mAh batteri og 90 minutters driftstid.' },
    specs: { runtime: '90 min', battery: '2600 mAh', remote: 'Yes', height: '8 cm' },
  },
  {
    id: 'robot-vacuum-family', category: 'robots', emoji: '🤖', image: 'photos/Stovsuger-m.stor.Robot.Family.Ad-850x1144.jpg', price: 3490,
    name: { en: 'Robot Family vacuum', no: 'Robot Family-støvsuger' },
    description: { en: 'A robot vacuum with scheduling, a docking station and a runtime of approximately 120 minutes.', no: 'En robotstøvsuger med tidsinnstilling, dokkingstasjon og driftstid på omtrent 120 minutter.' },
    specs: { runtime: '120 min', battery: '3000 mAh', dock: 'Yes', schedule: 'Yes' },
  },
  {
    id: 'tali-h500-drone', category: 'robots', emoji: '🚁', image: 'photos/TALI-H500-Drone-397x383.jpg', price: 3990,
    name: { en: 'TALI H500 drone', no: 'TALI H500-drone' },
    description: { en: 'A black hexacopter with folding arms, a camera mount and a 25-minute flight time.', no: 'En svart hexacopter med sammenleggbare armer, kamerafeste og 25 minutters flytid.' },
    specs: { motors: '6', range: '1000 m', runtime: '25 min', camera: 'Optional' },
  },
  {
    id: 'rc-tank-kit', category: 'robots', emoji: '🪖', image: 'photos/TANK.rb-tub3818-1-503x503.jpg', price: 1290,
    name: { en: 'RC tank kit', no: 'RC-tanksett' },
    description: { en: 'A 1:24 scale tracked tank kit with radio control and a rechargeable battery.', no: 'Et 1:24 beltekjøretøy-tanksett med radiostyring og oppladbart batteri.' },
    specs: { scale: '1:24', drive: 'Tracked', battery: 'Rechargeable', age: '8+' },
  },
  {
    id: 'ufo-mx400-drone', category: 'robots', emoji: '🛸', image: 'photos/UF0-MX400_895_en-501x520.jpg', price: 890,
    name: { en: 'UFO MX400 drone', no: 'UFO MX400-drone' },
    description: { en: 'A four-channel quadcopter with LED lighting and a 480p camera, shaped like a flying saucer.', no: 'En firekanals quadcopter med LED-lys og 480p-kamera, formet som en flygende tallerken.' },
    specs: { channels: '4', battery: '3.7 V', runtime: '8 min', camera: '480p' },
  },
  {
    id: 'vtol-bluey', category: 'robots', emoji: '✈️', image: 'photos/VTOL-Bluey-750x640.jpg', price: 1990,
    name: { en: 'VTOL Bluey', no: 'VTOL Bluey' },
    description: { en: 'A four-channel VTOL model with an 80 cm wingspan that takes off vertically and flies as a fixed-wing aircraft.', no: 'En firekanals VTOL-modell med 80 cm vingespenn som letter vertikalt og flyr som et fastvinget fly.' },
    specs: { wingspan: '80 cm', channels: '4', battery: '7.4 V', mode: 'VTOL' },
  },
  {
    id: 'walkera-4f200lm', category: 'robots', emoji: '🚁', image: 'photos/WALKERA.4F200LM_big_e-392x256.jpg', price: 3990,
    name: { en: 'Walkera 4F200LM helicopter', no: 'Walkera 4F200LM-helikopter' },
    description: { en: 'A six-channel collective-pitch helicopter in coastguard livery, intended for advanced pilots.', no: 'Et sekskanals collective pitch-helikopter i kystvaktfarger, beregnet for viderekomne piloter.' },
    specs: { channels: '6', length: '45 cm', battery: '11.1 V', skill: 'Advanced' },
  },

  // ---------------- Telescopes & binoculars ----------------
  {
    id: 'flexible-camera-tripod', category: 'optics', emoji: '📷', image: 'photos/3d-8080042697_c7620a8594_b-363x233.jpg', price: 249,
    name: { en: 'Flexible camera tripod', no: 'Bøyelig kamerastativ' },
    description: { en: 'A flexible 25 cm tripod with a 1/4-inch mount and a load capacity suitable for compact cameras.', no: 'Et bøyelig stativ på 25 cm med 1/4-tommers feste og kapasitet for kompaktkameraer.' },
    specs: { height: '25 cm', mount: '1/4"', weight: '180 g' },
  },
  {
    id: 'digital-camera', category: 'optics', emoji: '📷', image: 'photos/Discovery-camera.668509_lg-293x245.jpg', price: 1490,
    name: { en: 'Discovery digital camera', no: 'Discovery digitalkamera' },
    description: { en: 'A compact 12 MP digital camera with 3x optical zoom and a 2.7-inch display.', no: 'Et kompakt 12 MP digitalkamera med 3x optisk zoom og 2,7-tommers skjerm.' },
    specs: { resolution: '12 MP', zoom: '3×', display: '2.7"', storage: 'SD' },
  },
  {
    id: 'binoculars-16x50', category: 'optics', emoji: '🔭', image: 'photos/Sports-20.16x50-kikert.pOLDSKU01-100090reg-223x223.jpg', price: 990,
    name: { en: '16×50 binoculars', no: '16×50 kikkert' },
    description: { en: '16x50 binoculars with multicoated lenses, a 3.5-degree field of view and an 850 g weight.', no: '16x50 kikkert med antirefleksbehandlede linser, 3,5 graders synsfelt og vekt på 850 g.' },
    specs: { magnification: '16×', lens: '50 mm', field: '3.5°', weight: '850 g' },
  },
  {
    id: 'binoculars-10x42', category: 'optics', emoji: '🔭', image: 'photos/kikkert-10796-600x321.jpg', price: 1290,
    name: { en: '10×42 binoculars', no: '10×42 kikkert' },
    description: { en: '10x42 binoculars with multicoated lenses, a 6.5-degree field of view and a neck strap.', no: '10x42 kikkert med antirefleksbehandlede linser, 6,5 graders synsfelt og nakkereim.' },
    specs: { magnification: '10×', lens: '42 mm', field: '6.5°', weight: '680 g' },
  },
  {
    id: 'monocular-10926', category: 'optics', emoji: '🔭', image: 'photos/kikkert-10926-600x321.jpg', price: 690,
    name: { en: '10×42 monocular', no: '10×42 monokular' },
    description: { en: 'A 10x42 monocular with centre focus and a weight of 310 g.', no: 'Et 10x42 monokular med sentralfokus og vekt på 310 g.' },
    specs: { magnification: '10×', lens: '42 mm', weight: '310 g', focus: 'Centre' },
  },
  {
    id: 'binoculars-11184', category: 'optics', emoji: '🔭', image: 'photos/kikkert-11184-600x321.jpg', price: 1590,
    name: { en: '12×50 binoculars', no: '12×50 kikkert' },
    description: { en: '12x50 binoculars with a 5.2-degree field of view, suited to low-light observation.', no: '12x50 kikkert med 5,2 graders synsfelt, egnet for observasjon i svakt lys.' },
    specs: { magnification: '12×', lens: '50 mm', field: '5.2°', weight: '900 g' },
  },
  {
    id: 'compact-binoculars-71012', category: 'optics', emoji: '🔭', image: 'photos/kikkert-71012-600x321.jpg', price: 490,
    name: { en: 'Compact 8×21 binoculars', no: 'Kompakt 8×21 kikkert' },
    description: { en: 'Compact folding 8x21 binoculars weighing 210 g.', no: 'Kompakt sammenleggbar 8x21 kikkert på 210 g.' },
    specs: { magnification: '8×', lens: '21 mm', weight: '210 g', type: 'Folding' },
  },
  {
    id: 'compact-binoculars-71020', category: 'optics', emoji: '🔭', image: 'photos/kikkert-71020-600x321.jpg', price: 590,
    name: { en: 'Compact 10×25 binoculars', no: 'Kompakt 10×25 kikkert' },
    description: { en: 'Compact folding 10x25 binoculars weighing 250 g.', no: 'Kompakt sammenleggbar 10x25 kikkert på 250 g.' },
    specs: { magnification: '10×', lens: '25 mm', weight: '250 g', type: 'Folding' },
  },
  {
    id: 'night-vision-yukon', category: 'optics', emoji: '🌙', image: 'photos/natkikkert-25028-600x600.jpg', price: 4990,
    name: { en: 'Yukon night vision binoculars', no: 'Yukon nattkikkert' },
    description: { en: 'Yukon night vision binoculars with 3x magnification, a 150 m detection range and CR123A batteries.', no: 'Yukon nattkikkert med 3x forstørrelse, 150 m rekkevidde og CR123A-batterier.' },
    specs: { magnification: '3×', range: '150 m', battery: 'CR123A', weight: '750 g' },
  },
  {
    id: 'night-vision-pulsar', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-1.75096-600x600.jpg', price: 6990,
    name: { en: 'Pulsar night vision monocular', no: 'Pulsar nattkikkert monokular' },
    description: { en: 'A compact Pulsar night vision monocular with 4x magnification and a built-in IR illuminator.', no: 'Et kompakt Pulsar nattkikkert-monokular med 4x forstørrelse og innebygd IR-lys.' },
    specs: { magnification: '4×', range: '200 m', battery: 'CR123A', ir: 'Built-in' },
  },
  {
    id: 'night-vision-helmet', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-10.75095-600x600.jpg', price: 8990,
    name: { en: 'Pulsar night vision helmet set', no: 'Pulsar nattkikkert-hjelmsett' },
    description: { en: 'A helmet-mounted night vision set with 1x magnification, a 180 m range and hands-free operation.', no: 'Et hjelmmontert nattkikkertsett med 1x forstørrelse, 180 m rekkevidde og handsfree bruk.' },
    specs: { magnification: '1×', range: '180 m', mount: 'Helmet', weight: '950 g' },
  },
  {
    id: 'night-vision-goggles-yukon', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-2-25025-464x464.jpg', price: 7990,
    name: { en: 'Yukon night vision goggles', no: 'Yukon nattbriller' },
    description: { en: 'Yukon binocular night vision goggles with 2x magnification and a 20-degree field of view.', no: 'Yukon binokulære nattbriller med 2x forstørrelse og 20 graders synsfelt.' },
    specs: { magnification: '2×', range: '140 m', field: '20°', weight: '1.1 kg' },
  },
  {
    id: 'night-vision-pulsar-binoculars', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-2.75096-600x600.jpg', price: 7990,
    name: { en: 'Pulsar night vision binoculars', no: 'Pulsar nattkikkert' },
    description: { en: 'Pulsar night vision binoculars with 3x magnification, rubber armour and a 250 m detection range.', no: 'Pulsar nattkikkert med 3x forstørrelse, gummibeskyttelse og 250 m rekkevidde.' },
    specs: { magnification: '3×', range: '250 m', battery: 'CR123A', weight: '1.2 kg' },
  },
  {
    id: 'night-vision-binoculars-three', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-3.75096-600x600.jpg', price: 6990,
    name: { en: 'Night vision binoculars, long body', no: 'Nattkikkert, lang utgave' },
    description: { en: 'Night vision binoculars with 4x magnification, a 50 mm objective lens and a 220 m range.', no: 'Nattkikkert med 4x forstørrelse, 50 mm objektiv og 220 m rekkevidde.' },
    specs: { magnification: '4×', range: '220 m', lens: '50 mm', weight: '1.3 kg' },
  },
  {
    id: 'night-vision-binoculars-four', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-4.75096-600x600.jpg', price: 6490,
    name: { en: 'Night vision binoculars, compact', no: 'Nattkikkert, kompakt' },
    description: { en: 'Compact night vision binoculars with 3x magnification, a 42 mm lens and a 180 m range.', no: 'Kompakt nattkikkert med 3x forstørrelse, 42 mm linse og 180 m rekkevidde.' },
    specs: { magnification: '3×', range: '180 m', lens: '42 mm', weight: '900 g' },
  },

  // ---------------- Weird & wonderful ----------------
  {
    id: 'popular-science-magazine', category: 'weird', emoji: '📰', image: 'photos/3d-20141028092834910-222x300.jpg', price: 79,
    name: { en: 'Popular Science, After Earth issue', no: 'Popular Science, After Earth-utgave' },
    description: { en: 'A collector issue of Popular Science from 2013 covering the science behind the film After Earth.', no: 'Et samlerutgave av Popular Science fra 2013 om vitenskapen bak filmen After Earth.' },
    specs: { pages: '80', year: '2013', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'blue-rubber-frog', category: 'weird', emoji: '🐸', image: 'photos/3d-8592839898_1b0d42f0c0_b-600x450.jpg', price: 99,
    name: { en: 'Blue rubber frog', no: 'Blå gummifrosk' },
    description: { en: 'A small blue rubber frog, 9 cm long.', no: 'En liten blå gummifrosk, 9 cm lang.' },
    specs: { material: 'Rubber', length: '9 cm', colour: 'Blue' },
  },
  {
    id: 'battery-6v-12ah', category: 'weird', emoji: '🔋', image: 'photos/6v.fiamm-fg-11201-317x201.jpg', price: 349,
    name: { en: 'FIAMM 6 V 12 Ah battery', no: 'FIAMM 6 V 12 Ah batteri' },
    description: { en: 'A sealed lead-acid 6 V battery with a 12 Ah capacity, intended for ride-on vehicles and alarm systems.', no: 'Et forseglet blybatteri på 6 V med 12 Ah kapasitet, beregnet for lekebiler og alarmsystemer.' },
    specs: { voltage: '6 V', capacity: '12 Ah', type: 'SLA', weight: '2.1 kg' },
  },
  {
    id: 'aquarium-background-coral', category: 'weird', emoji: '🐠', image: 'photos/AAA.tank_bgs_1-365x299.jpg', price: 199,
    name: { en: 'Aquarium background, coral reef', no: 'Akvariebakgrunn, korallrev' },
    description: { en: 'A waterproof printed aquarium backdrop depicting a tropical coral reef, 60 x 40 cm.', no: 'En vanntett trykt akvariebakgrunn med tropisk korallrev, 60 x 40 cm.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-plants', category: 'weird', emoji: '🌿', image: 'photos/AAA.tank_bgs_2-409x349.jpg', price: 199,
    name: { en: 'Aquarium background, freshwater plants', no: 'Akvariebakgrunn, ferskvannsplanter' },
    description: { en: 'A waterproof printed backdrop showing freshwater plants, 60 x 40 cm.', no: 'En vanntett trykt bakgrunn med ferskvannsplanter, 60 x 40 cm.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-lake', category: 'weird', emoji: '🌊', image: 'photos/AAA.tank_bgs_3-384x314.jpg', price: 199,
    name: { en: 'Aquarium background, turquoise lake', no: 'Akvariebakgrunn, turkis innsjø' },
    description: { en: 'A waterproof printed backdrop depicting a sunlit underwater landscape, 60 x 40 cm.', no: 'En vanntett trykt bakgrunn med et solbelyst undervannslandskap, 60 x 40 cm.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-reef-cave', category: 'weird', emoji: '🪸', image: 'photos/AAA.tank_bgs_4-395x323.jpg', price: 199,
    name: { en: 'Aquarium background, reef cave', no: 'Akvariebakgrunn, revhule' },
    description: { en: 'A waterproof printed backdrop depicting a coral cave, 60 x 40 cm.', no: 'En vanntett trykt bakgrunn med en korallhule, 60 x 40 cm.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-coral-garden', category: 'weird', emoji: '🪸', image: 'photos/AAA.tank_bgs_5-387x317.jpg', price: 199,
    name: { en: 'Aquarium background, coral garden', no: 'Akvariebakgrunn, korallhage' },
    description: { en: 'A waterproof printed backdrop with corals in red, orange and blue, 60 x 40 cm.', no: 'En vanntett trykt bakgrunn med koraller i rødt, oransje og blått, 60 x 40 cm.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-planted', category: 'weird', emoji: '🌿', image: 'photos/AAA.tank_bgs_6-389x318.jpg', price: 199,
    name: { en: 'Aquarium background, planted tank', no: 'Akvariebakgrunn, plantekar' },
    description: { en: 'A waterproof printed backdrop depicting a densely planted aquarium, 60 x 40 cm.', no: 'En vanntett trykt bakgrunn med et tett beplantet akvarium, 60 x 40 cm.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'universal-ac-dc-adapter', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER-2.ac-dc-adapter-6-15v-239x263.jpg', price: 299,
    name: { en: 'Universal 6–15 V AC/DC adapter', no: 'Universell 6–15 V AC/DC-adapter' },
    description: { en: 'A universal AC/DC adapter with selectable output from 6 to 15 V, eight connector tips and reversible polarity.', no: 'En universell AC/DC-adapter med valgbar utgang fra 6 til 15 V, åtte pluggtyper og reverserbar polaritet.' },
    specs: { voltage: '6–15 V', current: '1.5 A', plugs: '8 tips', polarity: 'Switchable' },
  },
  {
    id: 'power-supply-1000ma', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER-2.eup-stromforsyning-1000ma-264x264.jpg', price: 149,
    name: { en: '1000 mA power supply', no: '1000 mA strømforsyning' },
    description: { en: 'A 1000 mA mains power supply with adjustable voltage and six interchangeable tips.', no: 'En 1000 mA strømforsyning med justerbar spenning og seks utskiftbare plugger.' },
    specs: { current: '1000 mA', voltage: 'Adjustable', tips: '6' },
  },
  {
    id: 'power-supply-1500ma', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER-2.eup-stromforsyning-1500ma-273x273.jpg', price: 179,
    name: { en: '1500 mA power supply', no: '1500 mA strømforsyning' },
    description: { en: 'A 1500 mA mains power supply with adjustable voltage and six interchangeable tips.', no: 'En 1500 mA strømforsyning med justerbar spenning og seks utskiftbare plugger.' },
    specs: { current: '1500 mA', voltage: 'Adjustable', tips: '6' },
  },
  {
    id: 'travel-plug-adapter', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER.chinavasion-CVFR-K12-7_jpg-335x335.jpg', price: 79,
    name: { en: 'Travel plug adapter', no: 'Reisestøpsel' },
    description: { en: 'A universal travel plug adapter for EU, UK and US sockets.', no: 'En universell reiseadapter for EU-, britisk- og amerikanske stikkontakter.' },
    specs: { sockets: 'Universal', plugs: 'EU/UK/US', material: 'ABS' },
  },
  {
    id: 'aquarium-bubble-ornament', category: 'weird', emoji: '🫧', image: 'photos/AN1943-402x351.jpg', price: 249,
    name: { en: 'Aquarium bubble ornament', no: 'Akvarie-boblepryd' },
    description: { en: 'A resin aquarium ornament with an air-driven bubble effect, supplied with a 1.5 m hose.', no: 'En akvariepynt i resin med luftdrevet bobeeffekt, levert med 1,5 m slange.' },
    specs: { power: '2 W', hose: '1.5 m', material: 'Resin' },
  },
  {
    id: 'underwater-halogen-lamp', category: 'weird', emoji: '💡', image: 'photos/AN2975-210x214.jpg', price: 399,
    name: { en: 'Underwater halogen lamp', no: 'Undervanns-halogenlampe' },
    description: { en: 'A 50 W halogen lamp for ponds and aquariums, rated IP68 and supplied with a 5 m cable.', no: 'En 50 W halogenlampe for dammer og akvarier, IP68-godkjent og levert med 5 m kabel.' },
    specs: { power: '50 W', voltage: '12 V', cable: '5 m', waterproof: 'IP68' },
  },
  {
    id: 'android-tv-box', category: 'weird', emoji: '📺', image: 'photos/ANDROID.6-2-301x301.jpg', price: 899,
    name: { en: 'Android 6 TV box', no: 'Android 6 TV-boks' },
    description: { en: 'An Android 6 television box with 8 GB storage, 1 GB RAM and 4K HDMI output.', no: 'En Android 6 TV-boks med 8 GB lagring, 1 GB RAM og 4K HDMI-utgang.' },
    specs: { os: 'Android 6', storage: '8 GB', ram: '1 GB', hdmi: '4K' },
  },
  {
    id: 'aquarium-40cm', category: 'weird', emoji: '🐠', image: 'photos/AQUArie.B1003208056-223x223.jpg', price: 899,
    name: { en: '40 cm aquarium', no: '40 cm akvarium' },
    description: { en: 'A 40 cm glass aquarium with a 25 litre volume, built-in filter and LED lighting.', no: 'Et 40 cm glassakvarium med 25 liters volum, innebygd filter og LED-belysning.' },
    specs: { length: '40 cm', volume: '25 L', filter: 'Built-in', light: 'LED' },
  },
  {
    id: 'aquarium-picture-frame', category: 'weird', emoji: '🖼️', image: 'photos/AQUARIUM.B1003208081-436x436.jpg', price: 149,
    name: { en: 'Framed aquarium picture', no: 'Akvariebilde i ramme' },
    description: { en: 'A framed 30 x 20 cm print of an aquarium scene.', no: 'Et innrammet 30 x 20 cm trykk av en akvariescene.' },
    specs: { size: '30 × 20 cm', frame: 'Black', material: 'Paper' },
  },
  {
    id: 'aquarium-background-hawaii', category: 'weird', emoji: '🌺', image: 'photos/AQUARIUM.blueHawaii-1300x865.jpg', price: 199,
    name: { en: 'Aquarium background, Blue Hawaii', no: 'Akvariebakgrunn, Blue Hawaii' },
    description: { en: 'A waterproof printed backdrop with a blue Hawaiian reef motif, 100 x 60 cm.', no: 'En vanntett trykt bakgrunn med blått Hawaii-revmotiv, 100 x 60 cm.' },
    specs: { size: '100 × 60 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-green-stone', category: 'weird', emoji: '🌿', image: 'photos/AQUARIUM.greenplantandwhitestone-1250x832.jpg', price: 199,
    name: { en: 'Aquarium background, green stone', no: 'Akvariebakgrunn, grønn stein' },
    description: { en: 'A waterproof printed backdrop showing green plants and pale stones, 100 x 60 cm.', no: 'En vanntett trykt bakgrunn med grønne planter og lyse steiner, 100 x 60 cm.' },
    specs: { size: '100 × 60 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-waterfall', category: 'weird', emoji: '💧', image: 'photos/AQUARIUM.waterinfall-1250x832.jpg', price: 199,
    name: { en: 'Aquarium background, waterfall', no: 'Akvariebakgrunn, foss' },
    description: { en: 'A waterproof printed backdrop depicting an underwater waterfall scene, 100 x 60 cm.', no: 'En vanntett trykt bakgrunn med en undervannsfoss, 100 x 60 cm.' },
    specs: { size: '100 × 60 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-yellow-frame', category: 'weird', emoji: '🟡', image: 'photos/AQuarium.200751420575359-377x312.jpg', price: 199,
    name: { en: 'Aquarium background, yellow frame', no: 'Akvariebakgrunn, gul ramme' },
    description: { en: 'A 50 x 35 cm aquarium backdrop mounted in a yellow frame.', no: 'En 50 x 35 cm akvariebakgrunn montert i gul ramme.' },
    specs: { size: '50 × 35 cm', frame: 'Yellow', material: 'PVC' },
  },
  {
    id: 'aquarium-background-green', category: 'weird', emoji: '🌿', image: 'photos/Aquarium.2007414165828497-392x226.jpg', price: 149,
    name: { en: 'Aquarium background, green tank', no: 'Akvariebakgrunn, grønt kar' },
    description: { en: 'A waterproof printed backdrop with a green planted motif for smaller aquariums, 50 x 30 cm.', no: 'En vanntett trykt bakgrunn med grønt plantemotiv for mindre akvarier, 50 x 30 cm.' },
    specs: { size: '50 × 30 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-blue', category: 'weird', emoji: '🐟', image: 'photos/Aquarium.200741615520656-269x269.jpg', price: 149,
    name: { en: 'Aquarium background, blue reef', no: 'Akvariebakgrunn, blått rev' },
    description: { en: 'A waterproof printed backdrop with a deep blue reef motif, 50 x 30 cm.', no: 'En vanntett trykt bakgrunn med dypt blått revmotiv, 50 x 30 cm.' },
    specs: { size: '50 × 30 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'battery-12v-50ah', category: 'weird', emoji: '🔋', image: 'photos/BATERI-2.multipower-mp50-12c-232x251.jpg', price: 1490,
    name: { en: 'Multipower 12 V 50 Ah battery', no: 'Multipower 12 V 50 Ah batteri' },
    description: { en: 'A sealed AGM battery with a 12 V output, 50 Ah capacity and a weight of 16 kg.', no: 'Et forseglet AGM-batteri med 12 V utgang, 50 Ah kapasitet og vekt på 16 kg.' },
    specs: { voltage: '12 V', capacity: '50 Ah', type: 'AGM', weight: '16 kg' },
  },
  {
    id: 'disney-cars-poster', category: 'weird', emoji: '🏁', image: 'photos/Bil-disney-plakat-3.scan1-410x569.jpg', price: 99,
    name: { en: 'Disney Cars poster', no: 'Disney Cars-plakat' },
    description: { en: 'A 50 x 70 cm glossy poster featuring characters from Disney Cars.', no: 'En 50 x 70 cm glanset plakat med figurer fra Disney Cars.' },
    specs: { size: '50 × 70 cm', paper: 'Glossy', motif: 'Cars' },
  },
  {
    id: 'digital-photo-frame-7', category: 'weird', emoji: '🖼️', image: 'photos/Billed-Ramme-ny1.IMG_0600-685x514.jpg', price: 499,
    name: { en: '7-inch digital photo frame', no: '7-tommers digital fotoramme' },
    description: { en: 'A 7-inch digital photo frame with an 800 x 480 display and SD/USB input.', no: 'En 7-tommers digital fotoramme med 800 x 480 skjerm og SD/USB-inngang.' },
    specs: { display: '7"', storage: 'SD / USB', resolution: '800 × 480', power: 'Mains' },
  },
  {
    id: 'digital-photo-frame-10', category: 'weird', emoji: '🖼️', image: 'photos/Billed-Ramme-ny2.IMG_1313-913x721.jpg', price: 699,
    name: { en: '10-inch digital photo frame', no: '10-tommers digital fotoramme' },
    description: { en: 'A 10-inch digital photo frame with a 1024 x 600 display, remote control and SD/USB input.', no: 'En 10-tommers digital fotoramme med 1024 x 600 skjerm, fjernkontroll og SD/USB-inngang.' },
    specs: { display: '10"', remote: 'Yes', storage: 'SD / USB', resolution: '1024 × 600' },
  },
  {
    id: 'bugs-bunny-phone', category: 'weird', emoji: '☎️', image: 'photos/Bugs-bunny.tel.QF083-PIP-314x400.jpg', price: 399,
    name: { en: 'Bugs Bunny telephone', no: 'Bugs Bunny-telefon' },
    description: { en: 'A corded landline telephone shaped as a Bugs Bunny figure.', no: 'En fasttelefon formet som en Bugs Bunny-figur.' },
    specs: { type: 'Landline', cord: 'Coiled', power: 'Mains', motif: 'Bugs Bunny' },
  },
  {
    id: 'frog-terrarium', category: 'weird', emoji: '🐸', image: 'photos/Discovery-frog.669903_xl-426x356.jpg', price: 499,
    name: { en: 'Frog terrarium', no: 'Frosketerrarium' },
    description: { en: 'A round 30 cm terrarium with a vented lid and a small pond base.', no: 'Et rundt terrarium på 30 cm med ventilert lokk og liten dam-base.' },
    specs: { diameter: '30 cm', material: 'Plastic', lid: 'Vented' },
  },
  {
    id: 'white-day-cruiser', category: 'weird', emoji: '⛵', image: 'photos/Dscf0080-650x520.jpg', price: 189000,
    name: { en: 'White day cruiser', no: 'Hvit daycruiser' },
    description: { en: 'A white 5.5 m day cruiser with seating for five and an outboard engine.', no: 'En hvit 5,5 m daycruiser med plass til fem og påhengsmotor.' },
    specs: { length: '5.5 m', seats: '5', engine: 'Outboard', year: '2004' },
  },
  {
    id: 'golf-trolley-bag', category: 'weird', emoji: '⛳', image: 'photos/EL-bag1.golf-trolley-1-335x251.jpg', price: 299,
    name: { en: 'Golf trolley bag', no: 'Golftrolley-bag' },
    description: { en: 'A black nylon golf bag with six pockets and a double strap.', no: 'En svart golfbag i nylon med seks lommer og dobbel reim.' },
    specs: { pockets: '6', material: 'Nylon', straps: 'Double' },
  },
  {
    id: 'electric-water-scooter', category: 'weird', emoji: '🚤', image: 'photos/El-Boat-scooter1.Wheel-boat3-588x222.jpg', price: 2490,
    name: { en: 'Electric water scooter', no: 'Elektrisk vannscooter' },
    description: { en: 'A small electric water scooter with a 300 W motor, 45 minutes of runtime and a 100 kg load capacity.', no: 'En liten elektrisk vannscooter med 300 W motor, 45 minutters driftstid og 100 kg lastekapasitet.' },
    specs: { power: '300 W', battery: '24 V', runtime: '45 min', maxload: '100 kg' },
  },
  {
    id: 'electric-golf-trolley', category: 'weird', emoji: '⛳', image: 'photos/El-bag2-golf-trolley-2-333x250.jpg', price: 1990,
    name: { en: 'Electric golf trolley', no: 'Elektrisk golftralle' },
    description: { en: 'A battery-powered golf trolley with a 120 W motor and capacity for 18 holes.', no: 'En batteridrevet golftralle med 120 W motor og kapasitet for 18 hull.' },
    specs: { power: '120 W', battery: '12 V', runtime: '18 holes', folds: 'Yes' },
  },
  {
    id: 'boat-trailer-wheel', category: 'weird', emoji: '🛞', image: 'photos/El-bat-hjul-bilde.Wheel-boat4-650x487.jpg', price: 690,
    name: { en: 'Boat trailer wheel', no: 'Båthengerhjul' },
    description: { en: 'A galvanised 400 mm trailer wheel with a pneumatic tyre, four-bolt hub and 350 kg load rating.', no: 'Et galvanisert 400 mm hengerhjul med luftdekk, firebolts nav og 350 kg lastevne.' },
    specs: { diameter: '400 mm', tyre: 'Pneumatic', hub: '4 bolts', load: '350 kg' },
  },
  {
    id: 'inflatable-boat', category: 'weird', emoji: '🚤', image: 'photos/El-bat-under.Wheel-boat2-404x589.jpg', price: 8990,
    name: { en: 'Inflatable boat', no: 'Oppblåsbar båt' },
    description: { en: 'A 3.0 m inflatable boat with a solid transom, seating for four and a 450 kg load capacity.', no: 'En 3,0 m oppblåsbar båt med solid akterspeil, plass til fire og 450 kg lastekapasitet.' },
    specs: { length: '3.0 m', capacity: '4 people', material: 'PVC', maxload: '450 kg' },
  },
  {
    id: 'star-wars-figure-set', category: 'weird', emoji: '🌌', image: 'photos/Figur-starwars-6.HS87205lg-490x499.jpg', price: 399,
    name: { en: 'Star Wars figure set', no: 'Star Wars-figursett' },
    description: { en: 'A boxed set of six 3.75-inch Star Wars figures.', no: 'Et sett med seks Star Wars-figurer i 3,75-tommers skala i eske.' },
    specs: { pieces: '6', scale: '3.75"', box: 'Illustrated', age: '4+' },
  },
  {
    id: 'parabolic-spy-mic', category: 'weird', emoji: '🎤', image: 'photos/Gadget-spy-mic-stor.16361-268x200.jpg', price: 499,
    name: { en: 'Parabolic spy microphone', no: 'Parabolsk spionmikrofon' },
    description: { en: 'A directional parabolic microphone with a 50 m pickup range and a 3.5 mm output.', no: 'En retningsbestemt parabolmikrofon med 50 m opptaksrekkevidde og 3,5 mm utgang.' },
    specs: { range: '50 m', pickup: 'Parabolic', output: '3.5 mm', power: '9 V' },
  },
  {
    id: 'online-games-portal', category: 'weird', emoji: '🎮', image: 'photos/Games.gameshots-373x381.jpg', price: null,
    name: { en: 'Online games portal', no: 'Nettspillportal' },
    description: { en: 'A browser-based games portal offering more than 500 small games.', no: 'En nettleserbasert spillportal med mer enn 500 små spill.' },
    specs: { games: '500+', platform: 'Browser', price: 'Free' },
  },
  {
    id: 'spy-watch', category: 'weird', emoji: '⌚', image: 'photos/H3.navi_mk2_03-250x347.jpg', price: 399,
    name: { en: 'Spy wristwatch', no: 'Spionklokke' },
    description: { en: 'A black wristwatch with an analogue display and 4 GB of built-in recording storage.', no: 'En svart armbåndsklokke med analog visning og 4 GB innebygd lagring.' },
    specs: { display: 'Analogue', storage: '4 GB', battery: 'USB', strap: 'Rubber' },
  },
  {
    id: 'spy-watch-two', category: 'weird', emoji: '⌚', image: 'photos/H3.visere.store.p6500d-237x391.jpg', price: 449,
    name: { en: 'Spy wristwatch, black', no: 'Spionklokke, svart' },
    description: { en: 'A black wristwatch with a 720p camera, 8 GB storage and a rubber strap.', no: 'En svart armbåndsklokke med 720p-kamera, 8 GB lagring og gummireim.' },
    specs: { display: 'Analogue', camera: '720p', storage: '8 GB', strap: 'Rubber' },
  },
  {
    id: 'horse-race-game', category: 'weird', emoji: '🐴', image: 'photos/Horse-Race.vlarge.3411f-650x487.jpg', price: 399,
    name: { en: 'Horse race board game', no: 'Hesteløp-brettspill' },
    description: { en: 'A tabletop horse racing game for two to four players, recommended from six years of age.', no: 'Et hesteløp-brettspill for to til fire spillere, anbefalt fra seks år.' },
    specs: { players: '2–4', age: '6+', pieces: '12', duration: '30 min' },
  },
  {
    id: 'ultrasonic-pest-repeller', category: 'weird', emoji: '🐭', image: 'photos/Izola.a1pro-pest_repeller-277x220.jpg', price: 249,
    name: { en: 'Ultrasonic pest repeller', no: 'Ultrasonisk skadedyrjager' },
    description: { en: 'An ultrasonic pest repeller covering up to 80 square metres, operating between 22 and 45 kHz.', no: 'En ultrasonisk skadedyrjager som dekker opptil 80 kvadratmeter, med drift mellom 22 og 45 kHz.' },
    specs: { coverage: '80 m²', frequency: '22–45 kHz', power: '3 W', plug: 'EU' },
  },
  {
    id: 'lap-desk-cinema', category: 'weird', emoji: '🛋️', image: 'photos/Kino.pike-bord.Model.TPH-03.Portable.Cinema1-850x1203.jpg', price: 249,
    name: { en: 'Techwood lap desk cinema', no: 'Techwood kinobrett for fanget' },
    description: { en: 'A padded lap desk with an adjustable angle for tablets up to 10 inches.', no: 'Et polstret fangbrett med justerbar vinkel for nettbrett opptil 10 tommer.' },
    specs: { fits: 'Up to 10"', material: 'Foam', angle: 'Adjustable' },
  },
  {
    id: 'ansmann-battery-charger', category: 'weird', emoji: '🔋', image: 'photos/LADER-2.ansmann_acs_2-24-1_204-296x211.jpg', price: 399,
    name: { en: 'Ansmann battery charger', no: 'Ansmann batterilader' },
    description: { en: 'A four-slot Ansmann charger for NiMH batteries with an LCD display.', no: 'En Ansmann-lader med fire spor for NiMH-batterier og LCD-skjerm.' },
    specs: { slots: '4', chemistry: 'NiMH', display: 'LCD', voltage: '100–240 V' },
  },
  {
    id: 'led-flashlight', category: 'weird', emoji: '🔦', image: 'photos/LED.CVNY-G257-23-419x419.jpg', price: 199,
    name: { en: 'CREE LED flashlight', no: 'CREE LED-lommelykt' },
    description: { en: 'A compact CREE LED flashlight with a metal body, 400 lumens and a 150 m beam range.', no: 'En kompakt CREE LED-lommelykt med metallkropp, 400 lumen og 150 m lysrekkevidde.' },
    specs: { power: '5 W', lumens: '400', battery: '18650', range: '150 m' },
  },
  {
    id: 'led-headlamp', category: 'weird', emoji: '🔦', image: 'photos/LED.CVNY-G257-24-266x266.jpg', price: 249,
    name: { en: 'CREE LED headlamp', no: 'CREE LED-hodelykt' },
    description: { en: 'A rechargeable CREE LED headlamp with 300 lumens and three brightness levels.', no: 'En oppladbar CREE LED-hodelykt med 300 lumen og tre styrkenivåer.' },
    specs: { lumens: '300', modes: '3', battery: 'Rechargeable', waterproof: 'IPX4' },
  },
  {
    id: 'led-flashlight-kit', category: 'weird', emoji: '🔦', image: 'photos/LED.CVNY-G257-4-408x408.jpg', price: 299,
    name: { en: 'LED flashlight kit', no: 'LED-lommelyktsett' },
    description: { en: 'A 500-lumen LED flashlight supplied with battery, charger and belt holster.', no: 'En 500-lumen LED-lommelykt levert med batteri, lader og beltehylster.' },
    specs: { lumens: '500', battery: '18650', charger: 'Included', holster: 'Yes' },
  },
  {
    id: 'led-strip-light', category: 'weird', emoji: '💡', image: 'photos/LEDen.free-shipping-28c12856891e14aca308a9648f4760e1-462x204.jpg', price: 149,
    name: { en: 'LED strip light', no: 'LED-lyslist' },
    description: { en: 'A one-metre flexible LED strip with 30 LEDs, powered by three AA batteries.', no: 'En én meter fleksibel LED-list med 30 LED-er, drevet av tre AA-batterier.' },
    specs: { length: '1 m', leds: '30', power: '3 × AA', colour: 'White' },
  },
  {
    id: 'spotlight-in-box', category: 'weird', emoji: '🔦', image: 'photos/LYKT.DSCN9135-431x323.jpg', price: 349,
    name: { en: 'Rechargeable spotlight', no: 'Oppladbar spotlight' },
    description: { en: 'A rechargeable spotlight with 1000 lumens, a four-hour runtime and a 300 m range.', no: 'En oppladbar spotlight med 1000 lumen, fire timers driftstid og 300 m rekkevidde.' },
    specs: { lumens: '1000', battery: 'Rechargeable', runtime: '4 h', range: '300 m' },
  },
  {
    id: 'handheld-spotlight', category: 'weird', emoji: '🔦', image: 'photos/LYKT.DSCN9186-441x331.jpg', price: 299,
    name: { en: 'Handheld spotlight', no: 'Håndholdt spotlight' },
    description: { en: 'A handheld rechargeable spotlight with a pistol grip, 800 lumens and a five-hour runtime.', no: 'En håndholdt oppladbar spotlight med pistolgrep, 800 lumen og fem timers driftstid.' },
    specs: { lumens: '800', battery: 'Rechargeable', runtime: '5 h', grip: 'Pistol' },
  },
  {
    id: 'large-spotlight', category: 'weird', emoji: '🔦', image: 'photos/LYKT.TL1079-1-625x469.jpg', price: 599,
    name: { en: 'Large rechargeable spotlight', no: 'Stor oppladbar spotlight' },
    description: { en: 'A large rechargeable spotlight with 2000 lumens, a carry handle and a six-hour runtime.', no: 'En stor oppladbar spotlight med 2000 lumen, bærehåndtak og seks timers driftstid.' },
    specs: { lumens: '2000', battery: 'Rechargeable', runtime: '6 h', range: '500 m' },
  },
  {
    id: 'large-spotlight-two', category: 'weird', emoji: '🔦', image: 'photos/LYKT.TL1079-3-625x469.jpg', price: 599,
    name: { en: 'Large spotlight, side view', no: 'Stor spotlight, side' },
    description: { en: 'The same 2000-lumen spotlight shown from the side, with charging port and folding stand.', no: 'Samme 2000-lumen spotlight fra siden, med ladeport og sammenleggbart stativ.' },
    specs: { lumens: '2000', battery: 'Rechargeable', runtime: '6 h', stand: 'Foldable' },
  },
  {
    id: 'searchlight-10-mile', category: 'weird', emoji: '🔦', image: 'photos/Lykt-stor-10mil.2940RF-521x391.jpg', price: 899,
    name: { en: '10-mile searchlight', no: '10-mils søkelys' },
    description: { en: 'A rechargeable searchlight with a 3000-lumen output and a beam range of up to 10 miles.', no: 'Et oppladbart søkelys med 3000 lumen og lysrekkevidde på opptil 10 miles.' },
    specs: { range: '10 miles', lumens: '3000', battery: '12 V', weight: '2.4 kg' },
  },
  {
    id: 'mp3-player-m40g', category: 'weird', emoji: '🎵', image: 'photos/MP3-m40G-1.dgv4002-850x725.jpg', price: 499,
    name: { en: 'MP3 player 40 GB', no: 'MP3-spiller 40 GB' },
    description: { en: 'A 40 GB MP3 player with a 2.5-inch colour display and approximately 12 hours of battery life.', no: 'En 40 GB MP3-spiller med 2,5-tommers fargeskjerm og omtrent 12 timers batteritid.' },
    specs: { storage: '40 GB', display: '2.5"', battery: '12 h', format: 'MP3/WMA' },
  },
  {
    id: 'wireless-micro-camera', category: 'weird', emoji: '📷', image: 'photos/Micro-Camera.total.801wireless-650x866.jpg', price: 899,
    name: { en: 'Wireless micro camera set', no: 'Trådløst mikrokamera-sett' },
    description: { en: 'A wireless micro camera set with a 640 x 480 resolution, 30 m range and a receiver unit.', no: 'Et trådløst mikrokamera-sett med 640 x 480 oppløsning, 30 m rekkevidde og mottakerenhet.' },
    specs: { resolution: '640 × 480', range: '30 m', battery: 'Rechargeable', receiver: 'Included' },
  },
  {
    id: 'multi-player-media', category: 'weird', emoji: '🎬', image: 'photos/Multi-Player.4.dgv009a_22-359x298.jpg', price: 599,
    name: { en: 'Multi-player media box', no: 'Multi-player medieboks' },
    description: { en: 'A media player for USB and SD storage with HDMI and AV output, supporting MP4, AVI and MP3.', no: 'En mediespiller for USB- og SD-lagring med HDMI- og AV-utgang, som støtter MP4, AVI og MP3.' },
    specs: { storage: 'SD / USB', output: 'HDMI / AV', formats: 'MP4, AVI, MP3', power: 'Mains' },
  },
  {
    id: 'chinavasion-projector', category: 'weird', emoji: '📽️', image: 'photos/PROjector2.chinavasion-CVIK-E26-11-657x432.jpg', price: 1990,
    name: { en: 'Chinavasion projector', no: 'Chinavasion-projektor' },
    description: { en: 'A compact LED projector with 800 x 480 resolution, 1200 lumens and HDMI/USB input.', no: 'En kompakt LED-projektor med 800 x 480 oppløsning, 1200 lumen og HDMI/USB-inngang.' },
    specs: { resolution: '800 × 480', brightness: '1200 lm', input: 'HDMI / USB', lamp: 'LED' },
  },
  {
    id: 'rousseau-picture-tile', category: 'weird', emoji: '🖼️', image: 'photos/Picture-Tiles.Rousseau_Jean-Jacques_Bridge_In_Sevres-558x447.jpg', price: 399,
    name: { en: 'Rousseau picture tile', no: 'Rousseau-bildflis' },
    description: { en: 'A 30 x 30 cm ceramic decorative tile printed with the Rousseau painting Bridge in Sevres.', no: 'En 30 x 30 cm dekorativ keramisk flis trykt med Rousseau-maleriet Broen i Sèvres.' },
    specs: { size: '30 × 30 cm', material: 'Ceramic', motif: 'Rousseau' },
  },
  {
    id: 'camera-backpack-harness', category: 'weird', emoji: '🎒', image: 'photos/RYGSEKK.IMG_1080-571x321.jpg', price: 399,
    name: { en: 'Camera backpack harness', no: 'Kamera-ryggsekksele' },
    description: { en: 'A padded nylon harness that keeps a DSLR camera within reach during walks, with two accessory pockets.', no: 'En polstret nylonsele som holder et speilreflekskamera innen rekkevidde på tur, med to tilbehørslommer.' },
    specs: { material: 'Nylon', padding: 'Yes', fits: 'DSLR', pockets: '2' },
  },
  {
    id: 'gps-tracker-kit', category: 'weird', emoji: '📍', image: 'photos/RYGSEKK4.ProductMgmtResourceServlet-295x295.jpg', price: 899,
    name: { en: 'GPS tracker kit', no: 'GPS-sporingssett' },
    description: { en: 'A GPS tracker with handlebar mount, GSM module, rechargeable battery and display unit.', no: 'Et GPS-sporingssett med styrefeste, GSM-modul, oppladbart batteri og displayenhet.' },
    specs: { gps: 'Yes', gsm: 'Quad-band', battery: 'Rechargeable', mount: 'Handlebar' },
  },
  {
    id: 'safe-drive-breathalyzer', category: 'weird', emoji: '🍺', image: 'photos/Safe-Drive_2-337x275.jpg', price: 349,
    name: { en: 'Safe Drive breathalyzer', no: 'Safe Drive alkotester' },
    description: { en: 'A keyring breathalyzer with a semiconductor sensor and a measuring range of 0 to 1.0 per mille.', no: 'En alkotester for nøkkelring med halvledersensor og måleområde fra 0 til 1,0 promille.' },
    specs: { sensor: 'Semiconductor', range: '0–1.0 ‰', power: '2 × AAA', size: 'Keyring' },
  },
  {
    id: 'alarm-kit', category: 'weird', emoji: '🚨', image: 'photos/Smart-sv_malarm-uv.32210dgmbig-274x280.jpg', price: 199,
    name: { en: 'DIY alarm kit', no: 'DIY-alarmsett' },
    description: { en: 'A DIY motion alarm kit based on a PIR sensor, supplied as a soldering project.', no: 'Et DIY-bevegelsesalarmeringssett basert på PIR-sensor, levert som loddeprosjekt.' },
    specs: { sensor: 'PIR', range: '6 m', voltage: '9 V', assembly: 'Soldering' },
  },
  {
    id: 'camera-sunglasses', category: 'weird', emoji: '🕶️', image: 'photos/Solbriller.Digital.Sunglasses-818x555.jpg', price: 799,
    name: { en: 'Camera sunglasses', no: 'Kamera-solbriller' },
    description: { en: 'Sunglasses with a built-in 720p camera, 4 GB storage and UV400 lenses.', no: 'Solbriller med innebygd 720p-kamera, 4 GB lagring og UV400-linser.' },
    specs: { camera: '720p', storage: '4 GB', battery: 'Rechargeable', lens: 'UV400' },
  },
  {
    id: 'metal-detector', category: 'weird', emoji: '🪙', image: 'photos/Sports-20-metal-detector.p762132reg-214x214.jpg', price: 1290,
    name: { en: 'Metal detector', no: 'Metallsøker' },
    description: { en: 'An adjustable metal detector with a 20 cm search coil, 20 cm detection depth and a 9 V battery.', no: 'En justerbar metallsøker med 20 cm søkespole, 20 cm søkedybde og 9 V batteri.' },
    specs: { depth: '20 cm', coil: '20 cm', headphone: '3.5 mm', battery: '9 V' },
  },
  {
    id: 'walkie-talkie', category: 'weird', emoji: '📻', image: 'photos/Sports-20-motorola-1st.p671055reg-108x108.jpg', price: 249,
    name: { en: 'Motorola walkie-talkie', no: 'Motorola walkie-talkie' },
    description: { en: 'A single Motorola walkie-talkie with an eight-channel radio, a 3 km range and a belt clip.', no: 'En enkelt Motorola walkie-talkie med åttekanals radio, 3 km rekkevidde og belteklips.' },
    specs: { range: '3 km', channels: '8', battery: 'AA', clip: 'Belt' },
  },
  {
    id: 'paintball-marker', category: 'weird', emoji: '🎯', image: 'photos/Sports-20-paintbal-kit.p447952_mont_reg-93x93.jpg', price: 1290,
    name: { en: 'Paintball marker', no: 'Paintball-markør' },
    description: { en: 'A .68 calibre paintball marker with a 200-ball hopper and CO2 operation.', no: 'En paintball-markør i .68 kaliber med 200-balls hopper og CO2-drift.' },
    specs: { calibre: '.68', tank: 'CO₂', hopper: '200 balls', mode: 'Semi' },
  },
  {
    id: 'radar-speed-gun', category: 'weird', emoji: '📡', image: 'photos/Sports-20-radarv1.p720394reg-214x214.jpg', price: 1990,
    name: { en: 'Radar speed gun', no: 'Radarhastighetsmåler' },
    description: { en: 'A handheld radar speed gun with a 300 m range and a measurement range of 10 to 300 km/h.', no: 'En håndholdt radarhastighetsmåler med 300 m rekkevidde og måleområde fra 10 til 300 km/t.' },
    specs: { range: '300 m', speed: '10–300 km/h', display: 'LCD', battery: '9 V' },
  },
  {
    id: 'radar-speed-gun-two', category: 'weird', emoji: '📡', image: 'photos/Sports-20-radarv2.p720432reg-209x209.jpg', price: 2490,
    name: { en: 'Radar speed gun, pro', no: 'Radarhastighetsmåler, proff' },
    description: { en: 'A larger radar speed gun with a 500 m range, a tripod mount and measurement up to 400 km/h.', no: 'En større radarhastighetsmåler med 500 m rekkevidde, stativfeste og måling opptil 400 km/t.' },
    specs: { range: '500 m', speed: '5–400 km/h', mount: 'Tripod', battery: '9 V' },
  },
  {
    id: 'walkie-talkie-pair', category: 'weird', emoji: '📻', image: 'photos/Sports-20-motorola-wt.pG01-1001481reg-182x182.jpg', price: 449,
    name: { en: 'Motorola walkie-talkie pair', no: 'Motorola walkie-talkie-par' },
    description: { en: 'A pair of Motorola walkie-talkies with 16 channels, a 5 km range and a charging dock.', no: 'Et par Motorola walkie-talkier med 16 kanaler, 5 km rekkevidde og ladestasjon.' },
    specs: { range: '5 km', channels: '16', battery: 'Rechargeable', pieces: '2' },
  },
  {
    id: 'headrest-dvd-player', category: 'weird', emoji: '📀', image: 'photos/TFT-LCD-DVD.liten.8.series.bags-207x207.jpg', price: 999,
    name: { en: 'Headrest DVD player', no: 'Nakkestøtte-DVD-spiller' },
    description: { en: 'A 7-inch DVD player that mounts on the rear of a headrest, with USB input and remote control.', no: 'En 7-tommers DVD-spiller som festes på baksiden av en nakkestøtte, med USB-inngang og fjernkontroll.' },
    specs: { display: '7"', format: 'DVD / USB', mount: 'Headrest', remote: 'Yes' },
  },
  {
    id: 'portable-dvd-player', category: 'weird', emoji: '📀', image: 'photos/TFT-LCD-DVD.stor.9080-576-271x200.jpg', price: 1290,
    name: { en: 'Portable DVD player', no: 'Bærbar DVD-spiller' },
    description: { en: 'A portable DVD player with a 9-inch swivel display, SD card input and a three-hour battery.', no: 'En bærbar DVD-spiller med 9-tommers vribar skjerm, SD-kortinngang og tre timers batteri.' },
    specs: { display: '9"', format: 'DVD / SD', battery: '3 h', case: 'Included' },
  },
  {
    id: 'headrest-dvd-pair', category: 'weird', emoji: '📀', image: 'photos/TFT-LCD-DVD.stor.Img_0010-686x514.jpg', price: 1490,
    name: { en: 'Headrest DVD pair', no: 'Nakkestøtte-DVD-par' },
    description: { en: 'Two 7-inch headrest-mounted DVD players with USB input, supplied as a pair.', no: 'To 7-tommers nakkestøtte-DVD-spillere med USB-inngang, levert i par.' },
    specs: { displays: '2 × 7"', format: 'DVD / USB', mount: 'Headrest', pieces: '2' },
  },
  {
    id: 'tv-32-inch', category: 'weird', emoji: '📺', image: 'photos/TV-42.stort-sort.32LW10-817x572.jpg', price: 2990,
    name: { en: '32-inch TV', no: '32-tommers TV' },
    description: { en: 'A 32-inch television with a 1366 x 768 resolution, two HDMI inputs and a DVB-T tuner.', no: 'En 32-tommers TV med 1366 x 768 oppløsning, to HDMI-innganger og DVB-T-tuner.' },
    specs: { size: '32"', resolution: '1366 × 768', hdmi: '2', tuner: 'DVB-T' },
  },
  {
    id: 'tv-42-inch', category: 'weird', emoji: '📺', image: 'photos/TV-42.stort.26LW10-42LW10-908x636.jpg', price: 4990,
    name: { en: '42-inch TV', no: '42-tommers TV' },
    description: { en: 'A 42-inch full HD television with a 1920 x 1080 resolution and three HDMI inputs.', no: 'En 42-tommers full HD-TV med 1920 x 1080 oppløsning og tre HDMI-innganger.' },
    specs: { size: '42"', resolution: '1920 × 1080', hdmi: '3', tuner: 'DVB-T/C' },
  },
  {
    id: 'tv-remote-control', category: 'weird', emoji: '📱', image: 'photos/TV-Fjernkontroll-blister.stor.20-b6a-card2-750x1046.jpg', price: 149,
    name: { en: 'TV remote control', no: 'TV-fjernkontroll' },
    description: { en: 'A universal replacement television remote control in a blister pack.', no: 'En universell erstatningsfjernkontroll for TV i blisterpakning.' },
    specs: { buttons: '45', compatible: 'Universal', battery: '2 × AAA', code: 'Manual' },
  },
  {
    id: 'tv-glasses', category: 'weird', emoji: '🕶️', image: 'photos/TV-briller.PD635-314x236.jpg', price: 1990,
    name: { en: 'Personal TV glasses', no: 'Personlige TV-briller' },
    description: { en: 'Personal video glasses with two 0.3-inch displays, AV input and a four-hour battery.', no: 'Personlige videobriller med to 0,3-tommers skjermer, AV-inngang og fire timers batteri.' },
    specs: { displays: '2 × 0.3"', input: 'AV', battery: '4 h', weight: '85 g' },
  },
  {
    id: 'tv-dvd-connections', category: 'weird', emoji: '📺', image: 'photos/TV-med-DVD.Tilkoblinger.2027-353x235.jpg', price: 2490,
    name: { en: 'TV with DVD, connection panel', no: 'TV med DVD, tilkoblinger' },
    description: { en: 'A 26-inch television with a built-in DVD player, shown from the rear connection panel.', no: 'En 26-tommers TV med innebygd DVD-spiller, vist fra tilkoblingspanelet bak.' },
    specs: { size: '26"', dvd: 'Built-in', hdmi: '2', scart: '1' },
  },
  {
    id: 'tv-with-dvd', category: 'weird', emoji: '📺', image: 'photos/TV-med-DVD1.20.20side.20redigert-378x411.jpg', price: 1990,
    name: { en: 'TV with built-in DVD', no: 'TV med innebygd DVD' },
    description: { en: 'A 20-inch television with a built-in DVD player, 1366 x 768 resolution and one HDMI input.', no: 'En 20-tommers TV med innebygd DVD-spiller, 1366 x 768 oppløsning og én HDMI-inngang.' },
    specs: { size: '20"', dvd: 'Built-in', resolution: '1366 × 768', hdmi: '1' },
  },
  {
    id: 'usb-cable', category: 'weird', emoji: '🔌', image: 'photos/USB-kabel-342x221.jpg', price: 49,
    name: { en: 'USB cable', no: 'USB-kabel' },
    description: { en: 'A 1.8 m USB-A to Mini-USB cable for charging and data transfer.', no: 'En 1,8 m USB-A til Mini-USB-kabel for lading og dataoverføring.' },
    specs: { length: '1.8 m', type: 'USB-A', connector: 'Mini-USB' },
  },
  {
    id: 'v-go-flyer', category: 'weird', emoji: '🚁', image: 'photos/V-GOflyerN1-1350x924.jpg', price: 1990,
    name: { en: 'V-Go flyer', no: 'V-Go flyger' },
    description: { en: 'An A2 format concept poster for the V-Go personal VTOL aircraft.', no: 'En A2-plakat med konseptet for det personlige VTOL-fartøyet V-Go.' },
    specs: { format: 'A2', topic: 'VTOL', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'zeno-toy-figure', category: 'weird', emoji: '🧸', image: 'photos/ZENO-1-344x417.jpg', price: 149,
    name: { en: 'Zeno toy figure', no: 'Zeno-lekefigur' },
    description: { en: 'A 10 cm plastic Zeno toy figure supplied in a display box.', no: 'En 10 cm Zeno-lekefigur i plast, levert i displayeske.' },
    specs: { height: '10 cm', material: 'Plastic', age: '3+' },
  },
  {
    id: 'willy-comic', category: 'weird', emoji: '📚', image: 'photos/willy-20-riktig-338x228.jpg', price: 149,
    name: { en: 'Willy comic book', no: 'Willy-tegneserie' },
    description: { en: 'A 48-page hardcover Willy adventure comic about a rocket journey.', no: 'En 48-siders innbundet Willy-tegneserie om en rakettreise.' },
    specs: { pages: '48', language: { en: 'Norwegian', no: 'Norsk' }, format: 'Hardcover' },
  },
   {
    id: 'fat-tire-city-scooter',
    category: 'ebikes', // use your own category id
    emoji: '🛵',
    price: null,
    image: 'photos/elscooter-2hjul.IMG_7298-450x600.jpg',
    name: { en: 'Fat-tire city scooter', no: 'Elscooter med brede dekk' },
    description: {
      en: 'A compact two-wheel electric scooter on wide, chunky tires. The low, open frame makes it easy to hop on, and there is a small basket at the front and a rack at the back for your things. Made for short trips around town or along the coast.',
      no: 'Kompakt elscooter med to hjul og brede, kraftige dekk. Den lave, åpne rammen gjør det lett å sette seg på, og det er en liten kurv foran og et brett bak til tingene dine. Laget for korte turer i byen eller langs kysten.',
    },
    specs: {},
  },
  {
    id: 'three-wheel-scooter',
    category: 'ebikes',
    emoji: '🛺',
    price: null,
    image: 'photos/elscooter-3hjul-2-416x623.jpg',
    name: { en: 'Three-wheel electric scooter', no: 'Elscooter med tre hjul' },
    description: {
      en: 'A stable three-wheeler in glossy red, so you do not have to balance. It has a seat with a backrest, a flat floor for your feet, a handlebar that folds down and a wire basket at the back. A good pick if you want something calm and easy.',
      no: 'En stabil trehjuling i blank rød, så du slipper å holde balansen. Den har sete med ryggstøtte, flatt gulv til føttene, sammenleggbart styre og en trådkurv bak. Et godt valg hvis du vil ha noe rolig og enkelt.',
    },
    specs: { seats: '1' },
  },
  {
    id: 'e-rider-scooter',
    category: 'ebikes',
    emoji: '🛵',
    price: null,
    image: 'photos/elsykkel-elsykkel_1-600x450-594x443.jpg',
    name: { en: 'E-Rider electric scooter', no: 'E-Rider elscooter' },
    description: {
      en: 'A classic scooter shape in matte grey with a long, padded seat and a lockable top box at the back. It has mirrors on both sides, rear suspension and a kickstand, so it feels like a real moped but runs on electricity.',
      no: 'En klassisk scooterfasong i matt grå med langt, polstret sete og en boks bak til oppbevaring. Den har speil på begge sider, støtdemper bak og støtteføtter, så den føles som en ekte moped, men går på strøm.',
    },
    specs: {},
  },
  {
    id: 'whizzy-es2',
    category: 'ebikes',
    emoji: '🛵',
    price: null,
    image: 'photos/elsykkel-s-20218_Whizzy_El_Sykkel_Es2_Norges_R_este_1-370x239.jpg',
    name: { en: 'Whizzy ES2', no: 'Whizzy ES2' },
    description: {
      en: 'A friendly electric scooter that comes in blue, black and red. Each one has a top box behind the seat, a low step-through frame and a windshield-style front. Sold as "Norway\'s coolest", and light enough for a beginner to handle.',
      no: 'En lettkjørt elscooter som kommer i blå, svart og rød. Alle har en boks bak setet, lav innstigning og en liten frontskjerm. Solgt som «Norges råeste», og lett nok for en nybegynner å håndtere.',
    },
    specs: {},
  },
  {
    id: 'freego-fat-bike-1000w',
    category: 'ebikes',
    emoji: '🚲',
    price: null,
    image: 'photos/fatbike-1-33856_Fat_bike_1000w_48v_1-600x450.jpg',
    name: { en: 'FreeGo Fat Bike 1000 W', no: 'FreeGo Fatbike 1000 W' },
    description: {
      en: 'An electric fat bike with big knobby tires that grip gravel, snow and wet roads. Matte black with green FreeGo Norge lettering, a motor in the rear wheel, front suspension, disc brakes, fenders and a kickstand.',
      no: 'En elektrisk fatbike med store, grove dekk som tar tak på grus, snø og vått underlag. Matt svart med grønn FreeGo Norge-skrift, motor i bakhjulet, fjærgaffel, skivebremser, skjermer og støtteben.',
    },
    specs: { power: '1000 W', battery: '48 V' },
  },
  {
    id: 'freego-fat-bikers-500w',
    category: 'ebikes',
    emoji: '🚲',
    price: null,
    image: 'photos/fatbike-1-34006_Fat_Bikers_Svart_matt_500w_1-600x450.jpg',
    name: { en: 'FreeGo Fat Biker 500 W', no: 'FreeGo Fat Biker 500 W' },
    description: {
      en: 'The gentler fat bike in the family. Matte black, with the battery mounted on the frame, full fenders, a rear rack-style fender stay and wide tires. A comfortable choice for everyday rides.',
      no: 'Den roligere fatbiken i familien. Matt svart, med batteriet montert på rammen, fulle skjermer og brede dekk. Et behagelig valg til hverdagsturer.',
    },
    specs: { power: '500 W' },
  },
  {
    id: 'freego-fat-bike-1500w',
    category: 'ebikes',
    emoji: '🚲',
    price: null,
    image: 'photos/fatbike-1-59407_Fat_Bike_el_sykkel_1500w_48v_3-600x450.jpg',
    name: { en: 'FreeGo Fat Bike 1500 W', no: 'FreeGo Fatbike 1500 W' },
    description: {
      en: 'The most powerful bike here, and the most eye-catching: a big triangle battery built into the frame, bright red rims, thick knobby tires and a chain with pedals if you want to help the motor along.',
      no: 'Den kraftigste sykkelen her, og den som er lettest å legge merke til: et stort, trekantet batteri bygget inn i rammen, knallrøde felger, tykke grove dekk og kjede med pedaler hvis du vil hjelpe motoren.',
    },
    specs: { power: '1500 W', battery: '48 V' },
  },
  {
    id: 'harley-style-scooter',
    category: 'ebikes',
    emoji: '🛵',
    price: null,
    image: 'photos/HARLEY-86284_Harley_Scooter_1500w_60v_20AHX2_6-561x371.jpg',
    name: { en: 'Harley-style scooter', no: 'Scooter i Harley-stil' },
    description: {
      en: 'A chunky cruiser with fat tires, a round headlight, a wide seat and mirrors. It comes in yellow, red, black and a starry-sky blue. The two batteries give it a long reach for a scooter this size.',
      no: 'En røff cruiser med brede dekk, rund lykt, bredt sete og speil. Den kommer i gul, rød, svart og stjernehimmel-blå. De to batteriene gir lang rekkevidde til en scooter i denne størrelsen.',
    },
    specs: { power: '1500 W', battery: '60 V, 2 × 20 Ah' },
  },
  {
    id: 'modern-retro-scooter',
    category: 'ebikes',
    emoji: '🛵',
    price: null,
    image: 'photos/moped-el-10-03337_MODEN_RETRO_3000w__1-404x404.jpg',
    name: { en: 'Modern Retro scooter', no: 'Moden Retro-scooter' },
    description: {
      en: 'An old-school Italian-style scooter in cream and black. It has a round headlight, round mirrors, a long two-tone seat and disc brakes. It looks like a classic but is powered by a strong electric motor.',
      no: 'En scooter i gammeldags, italiensk stil i krem og svart. Den har rund lykt, runde speil, langt todelt sete og skivebremser. Den ser ut som en klassiker, men drives av en sterk elektrisk motor.',
    },
    specs: { power: '3000 W' },
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
