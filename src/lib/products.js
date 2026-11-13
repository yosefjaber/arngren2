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

export const products = [
  // ---------------- Electric bikes ----------------
  {
    id: 'summit-mountain-bike', category: 'ebikes', emoji: '🚵', image: 'photos/SYkkel180.summit-175x105.jpg', price: 4990,
    name: { en: 'Summit mountain bike', no: 'Summit terrengsykkel' },
    description: { en: 'A light 26-inch mountain bike with 21 gears for forest trails and gravel roads.', no: 'En lett 26-tommers terrengsykkel med 21 gir for skogsstier og grusveier.' },
    specs: { gears: '21', size: '26"', weight: '14 kg' },
  },
  {
    id: 'ambassador-city-bike', category: 'ebikes', emoji: '🚲', image: 'photos/Sykkel28.ambassador-erc-203x123.jpg', price: 7490,
    name: { en: 'Ambassador city bike', no: 'Ambassador bysykkel' },
    description: { en: 'A comfortable 28-inch city bike with a basket, mudguards and a relaxed upright ride.', no: 'En komfortabel 28-tommers bysykkel med kurv, skjermer og avslappet oppreist sittestilling.' },
    specs: { gears: '3', size: '28"', weight: '15 kg', basket: 'Standard' },
  },

  // ---------------- Scooters & mopeds ----------------
  {
    id: 'e-scooter-40', category: 'scooters', emoji: '🛴', image: 'photos/ATV-1.6438_37-273x273.jpg', price: 12990,
    name: { en: 'Street e-scooter 40', no: 'Gate-e-scooter 40' },
    description: { en: 'A sturdy stand-up scooter with a 1200 W motor and a top speed of 40 km/h. Road legal and ready for the commute.', no: 'En solid ståscooter med 1200 W motor og toppfart på 40 km/t. Gatelegal og klar for pendlerlivet.' },
    specs: { power: '1200 W', battery: '48 V', speed: kmh('40'), range: '45 km' },
  },
  {
    id: 'e-scooter-red-40', category: 'scooters', emoji: '🛴', image: 'photos/ATV-1.9804_13-272x272.jpg', price: 13990,
    name: { en: 'Red e-scooter 40', no: 'Rød e-scooter 40' },
    description: { en: 'The same road-legal 40 km/h scooter in a loud red paint job that is easy to spot in traffic.', no: 'Samme gatelegale 40 km/t-scooter i en høylytt rødfarge som er lett å se i trafikken.' },
    specs: { power: '1200 W', battery: '48 V', speed: kmh('40'), range: '45 km' },
  },
  {
    id: 'e-scooter-black', category: 'scooters', emoji: '🛴', image: 'photos/ATV-1.9851_0-246x246.jpg', price: 9990,
    name: { en: 'Black city e-scooter', no: 'Svart by-e-scooter' },
    description: { en: 'A compact folding scooter with an 800 W motor, made for short trips and easy carrying on the bus.', no: 'En kompakt sammenleggbar scooter med 800 W motor, laget for korte turer og enkel transport på bussen.' },
    specs: { power: '800 W', battery: '36 V', speed: kmh('30'), range: '30 km' },
  },
  {
    id: 'e-scooter-street-grey', category: 'scooters', emoji: '🛴', image: 'photos/ATV-20-6438_37-284x284.jpg', price: 13490,
    name: { en: 'Grey street e-scooter', no: 'Grå gate-e-scooter' },
    description: { en: 'A practical grey scooter with wide footboard and turn signals. Built for bumpy Norwegian pavements.', no: 'En praktisk grå scooter med bred fotplate og blinklys. Bygget for humpete norske fortau.' },
    specs: { power: '1200 W', battery: '48 V', speed: kmh('40'), range: '45 km' },
  },
  {
    id: 'scooter-speedometer', category: 'scooters', emoji: '🏍️', image: 'photos/Go.speedmeter-1050x787.jpg', price: 890,
    name: { en: 'Scooter speedometer, 80 km/h', no: 'Scooter-speedometer, 80 km/t' },
    description: { en: 'A round analogue speedometer with odometer for scooters and small mopeds. Fits most 12 V setups.', no: 'Et rundt analogt speedometer med kilometerteller for scootere og små mopeder. Passer de fleste 12 V-oppsett.' },
    specs: { speed: kmh('80'), supply: '12 V', size: '85 mm' },
  },
  {
    id: 'urban-electric-moped', category: 'scooters', emoji: '🛵', image: 'photos/MOPED-1.32-267x378.jpg', price: 24990,
    name: { en: 'Urban electric moped', no: 'Urban elektrisk moped' },
    description: { en: 'A full-size electric moped with room for two. Quiet, cheap to run and perfect for city errands.', no: 'En full størrelse elektrisk moped med plass til to. Stille, billig i drift og perfekt for ærend i byen.' },
    specs: { power: '3000 W', battery: '60 V', speed: kmh('45'), range: '70 km' },
  },
  {
    id: 'mobility-scooter-comfort', category: 'scooters', emoji: '♿', image: 'photos/MOPED-2.34-360x240.jpg', price: 18990,
    name: { en: 'Comfort mobility scooter', no: 'Komfort-mobilitetsscooter' },
    description: { en: 'A four-wheel mobility scooter with a padded captain seat and a basket for the weekly shopping.', no: 'En firehjuls mobilitetsscooter med polstret kapteinstol og kurv til ukens handle.' },
    specs: { power: '500 W', battery: '24 V', speed: kmh('12'), range: '35 km' },
  },
  {
    id: 'scooter-silver', category: 'scooters', emoji: '🛵', image: 'photos/MOPEE.b-410x400.jpg', price: 21990,
    name: { en: 'Silver electric scooter', no: 'Sølv elektrisk scooter' },
    description: { en: 'A classic silver scooter with a 2000 W hub motor, LED lights and a lockable storage box under the seat.', no: 'En klassisk sølvfarget scooter med 2000 W navmotor, LED-lys og låsbar oppbevaringsboks under setet.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), range: '60 km' },
  },
  {
    id: 'scooter-blue-xm3500', category: 'scooters', emoji: '🛵', image: 'photos/MOPEE.xm3500li-side-left-blue-400px-412x300.jpg', price: 22990,
    name: { en: 'Blue XM3500 scooter', no: 'Blå XM3500-scooter' },
    description: { en: 'A sporty blue scooter with disc brakes, a digital dash and enough range for a week of commuting.', no: 'En sporty blå scooter med skivebremser, digitalt dashbord og nok rekkevidde til en uke med pendling.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), range: '65 km' },
  },
  {
    id: 'scooter-touring-convoy', category: 'scooters', emoji: '🛵', image: 'photos/MOPEEE.2008123112228-721x541.jpg', price: 24990,
    name: { en: 'Touring electric scooter', no: 'Turscooter elektrisk' },
    description: { en: 'A comfortable touring scooter with a long seat, windscreen and luggage rack for weekend trips.', no: 'En komfortabel turscooter med lang sal, vindskjerm og bagasjerack for helgeturer.' },
    specs: { power: '3000 W', battery: '60 V', speed: kmh('50'), range: '80 km' },
  },
  {
    id: 'scooter-red-retro', category: 'scooters', emoji: '🛵', image: 'photos/Scooter-Gashandel.DSC06385-979x734.jpg', price: 23990,
    name: { en: 'Red retro scooter', no: 'Rød retro-scooter' },
    description: { en: 'A red retro scooter with chrome details and a soft ride. The friendliest way to get through town.', no: 'En rød retroscooter med kromdetaljer og myk gange. Den vennligste måten å komme seg gjennom byen på.' },
    specs: { power: '2500 W', battery: '60 V', speed: kmh('45'), range: '60 km' },
  },
  {
    id: 'scooter-silver-disc', category: 'scooters', emoji: '🛵', image: 'photos/Scooter-solv-diskbrake.DSC06613-441x331.jpg', price: 21990,
    name: { en: 'Silver scooter with disc brake', no: 'Sølv-scooter med skivebrems' },
    description: { en: 'A silver scooter with a hydraulic disc brake up front and a smooth, quiet 2000 W motor.', no: 'En sølvscoter med hydraulisk skivebrems foran og en jevn og stille 2000 W motor.' },
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
    description: { en: 'The original self-balancing Segway. Lean forward to go, lean back to stop, and enjoy the strange looks.', no: 'Den originale selvbalanserende Segwayen. Len deg fremover for å kjøre, bakover for å stoppe, og nyt de rare blikkene.' },
    specs: { speed: kmh('20'), range: '38 km', battery: 'Lithium', weight: '48 kg' },
  },
  {
    id: 'segway-x2-offroad', category: 'scooters', emoji: '🛴', image: 'photos/Swgway-large.B00007EPJ6.01.LZZZZZZZ-336x493.jpg', price: 64990,
    name: { en: 'Segway x2 off-road', no: 'Segway x2 offroad' },
    description: { en: 'A Segway with knobbly tyres and extra ground clearance for gravel paths, lawns and gentle off-road use.', no: 'En Segway med grove dekk og ekstra bakkeklaring for grusveier, plener og lett terrengkjøring.' },
    specs: { speed: kmh('18'), range: '19 km', battery: 'Lithium', weight: '54 kg' },
  },

  // ---------------- Cars & ATVs ----------------
  {
    id: 'ev-city-blue', category: 'cars', emoji: '🚙', image: 'photos/2-944x678.jpg', price: 119000,
    name: { en: 'Blue four-seat city EV', no: 'Blå fireseters bybil' },
    description: { en: 'A compact electric city car with four seats, a quiet motor and room for the weekly shop.', no: 'En kompakt elektrisk bybil med fire seter, stille motor og plass til ukens handel.' },
    specs: { seats: '4', range: '100 km', speed: kmh('80'), power: '5 kW' },
  },
  {
    id: 'ev-pickup-white', category: 'cars', emoji: '🛻', image: 'photos/2-low-908x681.jpg', price: 129000,
    name: { en: 'White electric pickup', no: 'Hvit elektrisk pickup' },
    description: { en: 'An electric utility pickup with a tipping cargo bed. Made for parks, farms and small deliveries.', no: 'En elektrisk nyttebil med tippbart lasteplan. Laget for parker, gårder og små leveranser.' },
    specs: { payload: '300 kg', range: '90 km', speed: kmh('80'), power: '7 kW' },
  },
  {
    id: 'ev-van-grey', category: 'cars', emoji: '🚐', image: 'photos/3-low-936x702.jpg', price: 139000,
    name: { en: 'Grey electric utility van', no: 'Grå elektrisk nyttebil' },
    description: { en: 'A two-seat electric van with sliding doors and a large flat floor for tools and equipment.', no: 'En toseters elektrisk varebil med skyvedører og stort flatt gulv for verktøy og utstyr.' },
    specs: { seats: '2', range: '100 km', speed: kmh('80'), power: '7 kW' },
  },
  {
    id: 'ev-utility-street-white', category: 'cars', emoji: '🚙', image: 'photos/4-955x702.jpg', price: 124000,
    name: { en: 'White electric utility car', no: 'Hvit elektrisk nyttebil' },
    description: { en: 'A neat little electric car with four seats and a boot, equally at home on the street and at the cabin.', no: 'En nett liten elektrisk bil med fire seter og bagasjerom, like hjemme i gata og på hytta.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'ev-utility-red', category: 'cars', emoji: '🚙', image: 'photos/ARNGREN-POSTEN.Ny_DSC_4744_929px-492x341.jpg', price: 129000,
    name: { en: 'Red electric utility car', no: 'Rød elektrisk nyttebil' },
    description: { en: 'The red version of our popular utility car, seen here at a trade fair with a very proud driver.', no: 'Den røde utgaven av vår populære nyttebil, her fra en messe med en svært stolt sjåfør.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'quad-red-250', category: 'cars', emoji: '🏍️', image: 'photos/ATV-1.2-578x249.jpg', price: 39990,
    name: { en: 'Red sport quad 250', no: 'Rød sportskvad 250' },
    description: { en: 'A pair of red 250 cc sport quads for trail riding. Sold one at a time, fun included.', no: 'Et par røde 250 cm³ sportskvader for stikjøring. Selges en og en, moroa følger med.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', start: 'Electric' },
  },
  {
    id: 'quad-s8-black', category: 'cars', emoji: '🏍️', image: 'photos/ATV-1.s8_elektrik_schwarz_seitevr-279x279.jpg', price: 34990,
    name: { en: 'S8 black electric quad', no: 'S8 svart elektrisk kvad' },
    description: { en: 'A full-size electric quad with reverse gear. Quiet enough for the neighbourhood, strong enough for the woods.', no: 'En full størrelse elektrisk kvad med revers. Stille nok for nabolaget, sterk nok for skogen.' },
    specs: { power: '1500 W', battery: '60 V', speed: kmh('45'), range: '45 km' },
  },
  {
    id: 'quad-s10-white', category: 'cars', emoji: '🏍️', image: 'photos/ATV-2.s10_1000watt_weiss_seitevr-283x283.jpg', price: 39990,
    name: { en: 'S10 white electric quad', no: 'S10 hvit elektrisk kvad' },
    description: { en: 'A white electric quad with a 2000 W motor, sturdy racks and tyres that handle mud and snow.', no: 'En hvit elektrisk kvad med 2000 W motor, solide rack og dekk som takler gjørme og snø.' },
    specs: { power: '2000 W', battery: '60 V', speed: kmh('45'), range: '50 km' },
  },
  {
    id: 'quad-camo-orange', category: 'cars', emoji: '🏍️', image: 'photos/ATV-CE.1247032168DSCI0490-353x353.jpg', price: 54990,
    name: { en: 'Camo 300 quad', no: 'Kamuflasjekvad 300' },
    description: { en: 'A 300 cc petrol quad in camouflage, with selectable gears and a tow hitch for light farm work.', no: 'En 300 cm³ bensinkvad i kamuflasje, med girvalg og hengerfeste for lett gårdsarbeid.' },
    specs: { engine: '300 cc', speed: kmh('70'), gears: '5', towing: '250 kg' },
  },
  {
    id: 'quad-blue-110', category: 'cars', emoji: '🏍️', image: 'photos/ATV-EEC-2000x1799.jpg', price: 24990,
    name: { en: 'Blue 110 quad', no: 'Blå 110-kvad' },
    description: { en: 'A small blue 110 cc quad that is easy to handle, with a speed limiter for new riders.', no: 'En liten blå 110 cm³ kvad som er enkel å håndtere, med hastighetsbegrenser for nye førere.' },
    specs: { engine: '110 cc', speed: kmh('50'), gears: '4', start: 'Electric' },
  },
  {
    id: 'quad-yellow-250', category: 'cars', emoji: '🏍️', image: 'photos/ATV-NY.DSC06918-1250x937.jpg', price: 44990,
    name: { en: 'Yellow 250 quad', no: 'Gul 250-kvad' },
    description: { en: 'A bright yellow 250 cc quad with chunky tyres and a comfortable seat for long days out.', no: 'En knallgul 250 cm³ kvad med grove dekk og komfortabel sal for lange dager ute.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', start: 'Electric' },
  },
  {
    id: 'quad-yellow-front', category: 'cars', emoji: '🏍️', image: 'photos/ATV-NY.DSC06922-1050x787.jpg', price: 44990,
    name: { en: 'Yellow quad, front view', no: 'Gul kvad, front' },
    description: { en: 'Front view of the yellow 250. Note the twin headlights and the sturdy front bumper.', no: 'Frontbilde av den gule 250en. Legg merke til de to frontlyktene og den solide støtfangeren.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', lights: 'LED' },
  },
  {
    id: 'quad-yellow-side', category: 'cars', emoji: '🏍️', image: 'photos/ATV-NY.DSC06923-950x712.jpg', price: 43990,
    name: { en: 'Yellow quad, side view', no: 'Gul kvad, side' },
    description: { en: 'The yellow quad from the side, showing the long seat and the practical rear rack.', no: 'Den gule kvaden fra siden, med lang sal og praktisk bakrack.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', rack: 'Rear' },
  },
  {
    id: 'quad-electric-cargo', category: 'cars', emoji: '🏍️', image: 'photos/ATV.2_Wheel_Motors_Drive_Electric_ATV-646x500.jpg', price: 49990,
    name: { en: 'Electric cargo quad', no: 'Elektrisk lastkvad' },
    description: { en: 'A two-wheel-drive electric quad with a big cargo box. Ideal for feeding animals or hauling firewood.', no: 'En tohjulsdrevet elektrisk kvad med stor lasteboks. Ideell til foring av dyr eller vedtransport.' },
    specs: { power: '3000 W', battery: '60 V', speed: kmh('40'), range: '60 km' },
  },
  {
    id: 'quad-country-250', category: 'cars', emoji: '🏍️', image: 'photos/ATVE.GeoCOuntryquadhorse-640x964.jpg', price: 45990,
    name: { en: 'Country quad 250', no: 'Landlig 250-kvad' },
    description: { en: 'A practical country quad with road-legal lights and a quiet exhaust for early morning rides.', no: 'En praktisk landlig kvad med gatelegale lys og stille eksos for tidlige morgenturer.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', roadlegal: 'Yes' },
  },
  {
    id: 'quad-camo-utility', category: 'cars', emoji: '🏍️', image: 'photos/ATVE.Web20HATV20-2-677x508.jpg', price: 52990,
    name: { en: 'Camo utility quad', no: 'Nyttekvad i kamuflasje' },
    description: { en: 'A camouflage utility quad with front and rear racks, tow hitch and a low-range gearbox.', no: 'En kamuflasjefarget nyttekvad med rack foran og bak, hengerfeste og lavgir.' },
    specs: { engine: '300 cc', speed: kmh('70'), gears: '5', towing: '300 kg' },
  },
  {
    id: 'quad-blue-sport', category: 'cars', emoji: '🏍️', image: 'photos/ATVE.Web20HATV20-3-675x507.jpg', price: 42990,
    name: { en: 'Blue sport quad 250', no: 'Blå sportskvad 250' },
    description: { en: 'A blue 250 cc sport quad with wide footrests and a punchy single-cylinder engine.', no: 'En blå 250 cm³ sportskvad med brede fothvilere og en sprek enkeltsylindret motor.' },
    specs: { engine: '250 cc', speed: kmh('70'), gears: '5', start: 'Electric' },
  },
  {
    id: 'quad-blue-200', category: 'cars', emoji: '🏍️', image: 'photos/ATVEE.quad01-411x308.jpg', price: 36990,
    name: { en: 'Blue 200 quad', no: 'Blå 200-kvad' },
    description: { en: 'A friendly blue 200 cc quad for beginners, with automatic clutch and reverse.', no: 'En vennlig blå 200 cm³ kvad for nybegynnere, med automatisk klutch og revers.' },
    specs: { engine: '200 cc', speed: kmh('60'), gears: 'Automatic', reverse: 'Yes' },
  },
  {
    id: 'buggy-offroad-red', category: 'cars', emoji: '🏎️', image: 'photos/BIL-_MG_6756_310-338x225.jpg', price: 89990,
    name: { en: 'Red off-road buggy', no: 'Rød offroad-buggy' },
    description: { en: 'An open two-seat buggy with roll cage and chunky tyres. Pure gravel-road entertainment.', no: 'En åpen toseter buggy med veltebur og grove dekk. Ren underholdning på grusveien.' },
    specs: { engine: '800 cc', seats: '2', speed: kmh('90'), drive: 'RWD' },
  },
  {
    id: 'utility-cart-yellow', category: 'cars', emoji: '🚜', image: 'photos/BIL.IMG-0011-300x225.jpg', price: 79990,
    name: { en: 'Yellow utility cart', no: 'Gul nyttevogn' },
    description: { en: 'A yellow electric utility cart with a flat bed and a low step-in. A favourite at festivals and yards.', no: 'En gul elektrisk nyttevogn med flatt plan og lav innstigning. En favoritt på festivaler og i gårdsrom.' },
    specs: { power: '4 kW', seats: '2', speed: kmh('40'), range: '70 km' },
  },
  {
    id: 'golf-cart-red', category: 'cars', emoji: '⛳', image: 'photos/BIL.JEEPE-B100767-222x222.jpg', price: 89990,
    name: { en: 'Red electric golf cart', no: 'Rød elektrisk golfbil' },
    description: { en: 'A four-seat electric golf cart with a canopy and a quiet motor. Also excellent for campsites.', no: 'En fireseters elektrisk golfbil med tak og stille motor. Også utmerket på campingplasser.' },
    specs: { seats: '4', power: '3 kW', speed: kmh('30'), range: '60 km' },
  },
  {
    id: 'van-red-delivery', category: 'cars', emoji: '🚐', image: 'photos/BIL.T-crsportpostennorge-333x241.jpg', price: 159000,
    name: { en: 'Red electric delivery van', no: 'Rød elektrisk leveringsbil' },
    description: { en: 'A compact electric delivery van with a big cargo area and sliding side doors for quick stops.', no: 'En kompakt elektrisk leveringsbil med stort lasterom og skyvedører for raske stopp.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), payload: '500 kg' },
  },
  {
    id: 'truck-yellow-mini', category: 'cars', emoji: '🚚', image: 'photos/BIL.T-truck-corredera-313x227.jpg', price: 149000,
    name: { en: 'Yellow electric mini truck', no: 'Gul elektrisk minilastebil' },
    description: { en: 'A narrow electric truck that fits where vans cannot. The New Model badge is included at no extra cost.', no: 'En smal elektrisk lastebil som kommer seg dit varebiler ikke kommer. «New Model»-merket koster ingenting ekstra.' },
    specs: { payload: '500 kg', range: '80 km', speed: kmh('60'), power: '7 kW' },
  },
  {
    id: 'minibus-electric-blue', category: 'cars', emoji: '🚌', image: 'photos/BIL.buss-06-296x222.jpg', price: 249000,
    name: { en: 'Blue electric minibus', no: 'Blå elektrisk minibuss' },
    description: { en: 'An eight-seat electric minibus with big windows and easy access. Perfect for small tours and shuttle runs.', no: 'En åtteseters elektrisk minibuss med store vinduer og enkel adkomst. Perfekt for små turer og transport.' },
    specs: { seats: '8', range: '120 km', speed: kmh('60'), power: '15 kW' },
  },
  {
    id: 'ev-four-seat-white', category: 'cars', emoji: '🚙', image: 'photos/BIL.fire-seter-297x218.jpg', price: 115000,
    name: { en: 'White four-seat electric car', no: 'Hvit fireseters elbil' },
    description: { en: 'A simple, honest electric car with four seats, a heater and a boot. No touchscreen required.', no: 'En enkel og ærlig elbil med fire seter, varmeapparat og bagasjerom. Ingen berøringsskjerm nødvendig.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'ev-city-red', category: 'cars', emoji: '🚗', image: 'photos/BILEN-220x358.jpg', price: 99000,
    name: { en: 'Red electric city car', no: 'Rød elektrisk bybil' },
    description: { en: 'A cheerful red city car that charges from a normal socket and parks almost anywhere.', no: 'En blid rød bybil som lades fra vanlig stikkontakt og parkerer nesten overalt.' },
    specs: { seats: '2', range: '80 km', speed: kmh('70'), power: '5 kW' },
  },
  {
    id: 'ev-city-red-classic', category: 'cars', emoji: '🚗', image: 'photos/BILEN.2006E-I-733x454.jpg', price: 89000,
    name: { en: 'Red classic-style EV', no: 'Rød elbil i klassisk stil' },
    description: { en: 'Retro body, modern electric drivetrain. A small car that makes people smile at the lights.', no: 'Retro karosseri, moderne elektrisk drivlinje. En liten bil som får folk til å smile i lyskrysset.' },
    specs: { seats: '2', range: '80 km', speed: kmh('60'), power: '4 kW' },
  },
  {
    id: 'ev-battery-open', category: 'cars', emoji: '🔋', image: 'photos/BILEN.5-525x394.jpg', price: 95000,
    name: { en: 'EV with visible battery pack', no: 'Elbil med synlig batteripakke' },
    description: { en: 'A demonstrator car with the battery pack on show. Great for the mechanically curious.', no: 'En demonstrasjonsbil med batteripakken synlig. Perfekt for teknisk nysgjerrige.' },
    specs: { battery: '72 V', range: '80 km', seats: '2', power: '5 kW' },
  },
  {
    id: 'ev-motor-red', category: 'cars', emoji: '⚙️', image: 'photos/BILEN.DSC05574-526x395.jpg', price: 95000,
    name: { en: 'Red EV motor compartment', no: 'Rød elbil, motorrom' },
    description: { en: 'A look under the bonnet of the red EV: controller, contactor and a very tidy wiring loom.', no: 'En titt under panseret på den røde elbilen: kontroller, kontaktstykke og et svært ryddig ledningsnett.' },
    specs: { battery: '72 V', motor: 'AC', power: '5 kW' },
  },
  {
    id: 'ev-dashboard-indicator', category: 'cars', emoji: '💡', image: 'photos/BILEN.indicator-598x449.jpg', price: 450,
    name: { en: 'EV dashboard indicator', no: 'Elbil-indikator' },
    description: { en: 'A replacement indicator lamp for the dashboard. Green means go, and it really is that simple.', no: 'En erstatningsindikator for dashbordet. Grønt betyr kjør, og det er faktisk så enkelt.' },
    specs: { type: 'LED', supply: '12 V', colour: 'Green' },
  },
  {
    id: 'buggy-camo-four-seat', category: 'cars', emoji: '🏎️', image: 'photos/DSC03937-511x383.jpg', price: 109990,
    name: { en: 'Camo four-seat buggy', no: 'Kamuflasjebuggy med fire seter' },
    description: { en: 'A four-seat off-road buggy in camouflage with roll cage, harnesses and serious suspension.', no: 'En fireseters offroad-buggy i kamuflasje med veltebur, seler og seriøs fjæring.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), drive: 'RWD' },
  },
  {
    id: 'buggy-camo-four-seat-b', category: 'cars', emoji: '🏎️', image: 'photos/DSC03938-510x383.jpg', price: 109990,
    name: { en: 'Camo buggy, trail view', no: 'Kamuflasjebuggy, på stien' },
    description: { en: 'The camo buggy on a wet forest trail, where it feels most at home.', no: 'Kamuflasjebuggyen på en våt skogssti, der den føler seg mest hjemme.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), drive: 'RWD' },
  },
  {
    id: 'buggy-camo-four-seat-c', category: 'cars', emoji: '🏎️', image: 'photos/DSC03939-545x409.jpg', price: 109990,
    name: { en: 'Camo buggy, side view', no: 'Kamuflasjebuggy, side' },
    description: { en: 'Side view of the four-seater showing the long wheelbase and the knobbly off-road tyres.', no: 'Sidebilde av fireseteren som viser den lange akselavstanden og de grove offroad-dekkene.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), tyres: 'Off-road' },
  },
  {
    id: 'buggy-camo-four-seat-d', category: 'cars', emoji: '🏎️', image: 'photos/DSC03940-510x382.jpg', price: 109990,
    name: { en: 'Camo buggy, rear view', no: 'Kamuflasjebuggy, bak' },
    description: { en: 'Rear view with the spare wheel and the tow point. Mud not included, but likely.', no: 'Bakfra med reservehjul og slepepunkt. Gjørme følger ikke med, men er sannsynlig.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), spare: 'Yes' },
  },
  {
    id: 'buggy-camo-four-seat-e', category: 'cars', emoji: '🏎️', image: 'photos/DSC03941-509x381.jpg', price: 109990,
    name: { en: 'Camo buggy, front view', no: 'Kamuflasjebuggy, front' },
    description: { en: 'Front view with the LED light bar and the wide stance that keeps it stable on rough ground.', no: 'Frontbilde med LED-lyslist og den brede stansen som holder den stabil i ulendt terreng.' },
    specs: { engine: '800 cc', seats: '4', speed: kmh('90'), lights: 'LED bar' },
  },
  {
    id: 'porsche-911-silver', category: 'cars', emoji: '🏎️', image: 'photos/EL-porsche.LamoTitle019-1500x1004.jpg', price: 899000,
    name: { en: 'Silver Porsche 911', no: 'Sølv Porsche 911' },
    description: { en: 'A silver 911 for the driveway. Not electric, despite the file name our web editor gave it.', no: 'En sølv 911 til innkjørselen. Ikke elektrisk, til tross for filnavnet vår webredaktør ga den.' },
    specs: { engine: '3.6 L', power: '272 hp', seats: '4', drive: 'RWD' },
  },
  {
    id: 'ev-green-utility', category: 'cars', emoji: '🚙', image: 'photos/El-Bil-gon-stor-1.ygpE3F01-650x676.jpg', price: 119000,
    name: { en: 'Green electric utility car', no: 'Grønn elektrisk nyttebil' },
    description: { en: 'A green four-seat utility car with a glass cabin and a small rear bed. Practical and very quiet.', no: 'En grønn fireseters nyttebil med glasskabin og lite lasteplan bak. Praktisk og svært stille.' },
    specs: { seats: '4', range: '90 km', speed: kmh('80'), power: '6 kW' },
  },
  {
    id: 'ev-beetle-yellow', category: 'cars', emoji: '🚗', image: 'photos/El-Bil-gul-3.04-1-850x637.jpg', price: 99000,
    name: { en: 'Yellow electric Beetle', no: 'Gul elektrisk Boble' },
    description: { en: 'A yellow Beetle-shaped electric car. All the charm of the original, none of the oil leaks.', no: 'En gul elektrisk bil i Boble-form. All sjarmen fra originalen, ingen oljelekkasjer.' },
    specs: { seats: '2', range: '80 km', speed: kmh('70'), power: '5 kW' },
  },
  {
    id: 'ev-sports-orange', category: 'cars', emoji: '🏎️', image: 'photos/El-Bil-orange-2.Electric_Car-210x210.jpg', price: 149000,
    name: { en: 'Orange electric sports car', no: 'Oransje elektrisk sportsbil' },
    description: { en: 'A low, orange two-seater with an electric motor. Looks fast standing still.', no: 'En lav, oransje toseter med elektrisk motor. Ser rask ut selv når den står stille.' },
    specs: { seats: '2', range: '100 km', speed: kmh('90'), power: '10 kW' },
  },
  {
    id: 'ev-hotrod-red', category: 'cars', emoji: '🚗', image: 'photos/El-Bil-rod-2.02-1-533x518.jpg', price: 159000,
    name: { en: 'Red electric hot rod', no: 'Rød elektrisk hot rod' },
    description: { en: 'A red hot-rod body with a silent electric heart. The neighbours will never hear you leave.', no: 'Et rødt hot rod-karosseri med et stille elektrisk hjerte. Naboene hører deg aldri dra.' },
    specs: { seats: '2', range: '100 km', speed: kmh('90'), power: '10 kW' },
  },
  {
    id: 'ev-van-grey-tall', category: 'cars', emoji: '🚐', image: 'photos/IMG_1270-low-948x711.jpg', price: 139000,
    name: { en: 'Grey electric van, tall roof', no: 'Grå elektrisk varebil, høyt tak' },
    description: { en: 'A tall electric van with sliding doors and a flat load floor. Ready for a logo on the side.', no: 'En høy elektrisk varebil med skyvedører og flatt lastegulv. Klar for logo på siden.' },
    specs: { seats: '2', range: '100 km', speed: kmh('80'), power: '7 kW' },
  },
  {
    id: 'golf-cart-red-two', category: 'cars', emoji: '⛳', image: 'photos/JEEPE.B1007676975-367x367.jpg', price: 84990,
    name: { en: 'Red golf cart, compact', no: 'Rød golfbil, kompakt' },
    description: { en: 'A compact red golf cart with two seats, a roof and a small rear cargo box.', no: 'En kompakt rød golfbil med to seter, tak og liten lasteboks bak.' },
    specs: { seats: '2', power: '2.5 kW', speed: kmh('25'), range: '50 km' },
  },
  {
    id: 'utv-black-800', category: 'cars', emoji: '🏍️', image: 'photos/UTV.BALCK-928x619.jpg', price: 89990,
    name: { en: 'Black UTV 800', no: 'Svart UTV 800' },
    description: { en: 'A black side-by-side UTV with a cargo bed, roof and seat belts for two. Workhorse by day, toy by weekend.', no: 'En svart side-by-side UTV med lasteplan, tak og belter til to. Arbeidshest om dagen, leketøy i helgen.' },
    specs: { engine: '800 cc', seats: '2', speed: kmh('80'), drive: '4WD' },
  },
  {
    id: 'comarth-black-one', category: 'cars', emoji: '🚗', image: 'photos/comarth-sort-sh-1-1303x791.jpg', price: 189000,
    name: { en: 'Black Comarth electric car', no: 'Svart Comarth elbil' },
    description: { en: 'A black Comarth city car with proper doors, windows and a real boot. Small but grown-up.', no: 'En svart Comarth bybil med ordentlige dører, vinduer og ekte bagasjerom. Liten, men voksen.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), power: '13 kW' },
  },
  {
    id: 'comarth-black-two', category: 'cars', emoji: '🚗', image: 'photos/comarth-sort-sh-4-1221x743.jpg', price: 189000,
    name: { en: 'Black Comarth, rear view', no: 'Svart Comarth, bak' },
    description: { en: 'The Comarth from behind, showing the hatchback boot and the compact dimensions.', no: 'Comarthen bakfra, med hengslet bakluke og kompakte mål.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), boot: '210 L' },
  },
  {
    id: 'comarth-white-red', category: 'cars', emoji: '🚗', image: 'photos/elbil-comarth.10-363x272.jpg', price: 179000,
    name: { en: 'White and red Comarth', no: 'Hvit og rød Comarth' },
    description: { en: 'A white Comarth with red accents. The friendliest little car on the lot.', no: 'En hvit Comarth med røde detaljer. Den vennligste lille bilen på plassen.' },
    specs: { seats: '2', range: '120 km', speed: kmh('90'), power: '13 kW' },
  },

  // ---------------- Kids' vehicles ----------------
  {
    id: 'gokart-offroad-800', category: 'kids', emoji: '🏎️', image: 'photos/ATV-1.gokart_800_seitevr-279x279.jpg', price: 14990,
    name: { en: 'Off-road go-kart 800', no: 'Offroad-gokart 800' },
    description: { en: 'An 800 W electric go-kart with big knobbly tyres and a low seat. Grass, gravel and garden ready.', no: 'En 800 W elektrisk gokart med store grove dekk og lav sittestilling. Klar for gress, grus og hage.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('30'), age: '8+' },
  },
  {
    id: 'miniquad-blue-800', category: 'kids', emoji: '🏍️', image: 'photos/ATV-1.miniquad_racer_800_blau_seitevr-279x279.jpg', price: 7990,
    name: { en: 'Blue mini quad 800', no: 'Blå minikvad 800' },
    description: { en: 'A blue 800 W mini quad with a speed limiter and a parental remote. Small riders, big grins.', no: 'En blå 800 W minikvad med hastighetsbegrenser og foreldrefjernkontroll. Små førere, store smil.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('25'), age: '6+' },
  },
  {
    id: 'miniquad-red-800', category: 'kids', emoji: '🏍️', image: 'photos/ATV-1.miniquad_racer_800_rot_seitevr-600x593.jpg', price: 7990,
    name: { en: 'Red mini quad 800', no: 'Rød minikvad 800' },
    description: { en: 'The red mini quad, with a padded seat, disc brakes and a top speed you can dial down.', no: 'Den røde minikvaden, med polstret sal, skivebremser og toppfart du kan skru ned.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('25'), age: '6+' },
  },
  {
    id: 'gokart-black-red', category: 'kids', emoji: '🏎️', image: 'photos/ATV-9.gokart_800_seitehl-710x710.jpg', price: 14990,
    name: { en: 'Black and red go-kart', no: 'Svart og rød gokart' },
    description: { en: 'A side view of the 800 W go-kart with a sturdy frame and a bucket seat that holds you in place.', no: 'Et sidebilde av 800 W-gokarten med solid ramme og et bøttesete som holder deg på plass.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('30'), age: '8+' },
  },
  {
    id: 'miniquad-petrol-50', category: 'kids', emoji: '🏍️', image: 'photos/ATV-Bensin.v01_E27D604A8302AC78D123AADD9AE23595_357X398_-239x214.jpg', price: 5990,
    name: { en: 'Petrol mini quad 50', no: 'Bensin-minikvad 50' },
    description: { en: 'A 50 cc petrol mini quad for the petrol-head in the family. Pull start, no charging required.', no: 'En 50 cm³ bensin-minikvad for familiens bensinhode. Snorstart, ingen lading nødvendig.' },
    specs: { engine: '50 cc', speed: kmh('35'), start: 'Pull', age: '6+' },
  },
  {
    id: 'miniquad-red-48v', category: 'kids', emoji: '🏍️', image: 'photos/ATV.grand-quad-electrique-pour-ados-48v-800w-1303731197-365x274.jpg', price: 8490,
    name: { en: 'Red 48 V mini quad', no: 'Rød 48 V minikvad' },
    description: { en: 'A slightly larger 48 V mini quad for older children, with reverse and a proper disc brake.', no: 'En litt større 48 V minikvad for større barn, med revers og ordentlig skivebrems.' },
    specs: { power: '800 W', battery: '48 V', speed: kmh('30'), age: '8+' },
  },
  {
    id: 'miniquad-handlebar', category: 'kids', emoji: '🔧', image: 'photos/ATV.miniquad_racer_500_blau_lade-309x309.jpg', price: 350,
    name: { en: 'Blue mini quad handlebar', no: 'Blått minikvad-styre' },
    description: { en: 'Replacement handlebar with grips and a thumb throttle for the blue 500 W mini quad.', no: 'Erstatningsstyre med håndtak og tommelgass til den blå 500 W-minikvaden.' },
    specs: { fits: '500 W mini quad', material: 'Steel', grips: 'Rubber' },
  },
  {
    id: 'aston-martin-rc', category: 'kids', emoji: '🏎️', image: 'photos/Aston-Martin-bond-car.BN600-PIP-323x396.jpg', price: 499,
    name: { en: 'Aston Martin RC car', no: 'Aston Martin RC-bil' },
    description: { en: 'A silver Aston Martin toy car with remote control. Licence to drive is not required.', no: 'En sølv Aston Martin leketøysbil med fjernkontroll. Førerkort er ikke påkrevd.' },
    specs: { scale: '1:18', drive: 'RWD', battery: 'AA', age: '6+' },
  },
  {
    id: 'ride-on-yellow', category: 'kids', emoji: '🚗', image: 'photos/BILEN.11-424x318.jpg', price: 1990,
    name: { en: 'Yellow ride-on car', no: 'Gul lekebil' },
    description: { en: 'A yellow foot-to-floor ride-on car for toddlers. No motor, plenty of imagination.', no: 'En gul lekebil for de minste. Ingen motor, masse fantasi.' },
    specs: { age: '2+', seats: '1', power: 'None', material: 'Plastic' },
  },
  {
    id: 'kids-electric-dirt-bike', category: 'kids', emoji: '🏍️', image: 'photos/DIRT-bike-electrique-zzz350-une-moto-enfant-phenomenale-1326146700-433x325.jpg', price: 4990,
    name: { en: 'Kids electric dirt bike', no: 'Elektrisk terrengsykkel for barn' },
    description: { en: 'A 24 V electric dirt bike with knobbly tyres and a twist throttle. Quiet enough for the garden.', no: 'En 24 V elektrisk terrengsykkel med grove dekk og gassrulle. Stille nok for hagen.' },
    specs: { power: '350 W', battery: '24 V', speed: kmh('20'), age: '6+' },
  },
  {
    id: 'ferrari-f1-rc', category: 'kids', emoji: '🏎️', image: 'photos/FERRARI.ferrari-x-sito-marchio-684x434.jpg', price: 599,
    name: { en: 'Ferrari F1 RC car', no: 'Ferrari F1 RC-bil' },
    description: { en: 'A red Ferrari Formula 1 car with remote control. Includes sticker sheet for the full race look.', no: 'En rød Ferrari Formel 1-bil med fjernkontroll. Inkluderer klistremerker for komplett racing-look.' },
    specs: { scale: '1:24', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'ferrari-california-rc', category: 'kids', emoji: '🏎️', image: 'photos/FERRARI.ferrari_california_02marchi_1-603x402.jpg', price: 599,
    name: { en: 'Ferrari California RC car', no: 'Ferrari California RC-bil' },
    description: { en: 'A red Ferrari California with working headlights and a controller sized for small hands.', no: 'En rød Ferrari California med fungerende frontlys og en kontroller tilpasset små hender.' },
    specs: { scale: '1:24', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'hummer-yellow-rideon', category: 'kids', emoji: '🚙', image: 'photos/Hummer.DSC00514-274x205.jpg', price: 2990,
    name: { en: 'Yellow Hummer ride-on', no: 'Gul Hummer-lekebil' },
    description: { en: 'A yellow Hummer-style ride-on with big wheels and a working horn. Very popular in kindergartens.', no: 'En gul Hummer-lekebil med store hjul og fungerende horn. Veldig populær i barnehager.' },
    specs: { battery: '12 V', speed: kmh('5'), seats: '1', age: '3+' },
  },
  {
    id: 'hummer-white-rideon', category: 'kids', emoji: '🚙', image: 'photos/Hummer.DSC00699-1-396x528.jpg', price: 2990,
    name: { en: 'White Hummer ride-on', no: 'Hvit Hummer-lekebil' },
    description: { en: 'The white Hummer ride-on with opening doors and a roomy seat for one small driver.', no: 'Den hvite Hummer-lekebilen med åpningsbare dører og romslig sete til en liten sjåfør.' },
    specs: { battery: '12 V', speed: kmh('5'), seats: '1', age: '3+' },
  },
  {
    id: 'jeep-rideon-catalogue', category: 'kids', emoji: '🚙', image: 'photos/JEEP3.scan3-559x800.jpg', price: 5990,
    name: { en: 'Military-style jeep ride-on', no: 'Militærjeep-lekebil' },
    description: { en: 'A military-style jeep ride-on with chunky tyres and a spare wheel on the back.', no: 'En militærjeep-lekebil med grove dekk og reservehjul bak.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'jeep-rideon-dark', category: 'kids', emoji: '🚙', image: 'photos/Jeep.JEEP2-605x843.jpg', price: 6990,
    name: { en: 'Dark Jeep ride-on', no: 'Mørk Jeep-lekebil' },
    description: { en: 'A dark green jeep ride-on with a rugged look, big wheels and a parent remote control.', no: 'En mørkegrønn Jeep-lekebil med røff look, store hjul og fjernkontroll for foreldre.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'jeep-rideon-yellow-show', category: 'kids', emoji: '🚙', image: 'photos/Jeep.Raider.IFEMA013-717x537.jpg', price: 5990,
    name: { en: 'Yellow Jeep ride-on', no: 'Gul Jeep-lekebil' },
    description: { en: 'A yellow Jeep ride-on on show at a fair, with a driver who clearly enjoys the job.', no: 'En gul Jeep-lekebil på messe, med en sjåfør som tydeligvis storkoser seg.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'jeep-rideon-yellow-street', category: 'kids', emoji: '🚙', image: 'photos/Jeep.foto1-730x509.jpg', price: 5990,
    name: { en: 'Yellow Jeep ride-on, street', no: 'Gul Jeep-lekebil, gate' },
    description: { en: 'The yellow Jeep out on the pavement, proving that toy cars also need fresh air.', no: 'Den gule Jeepen ute på fortauet, et bevis på at lekebiler også trenger frisk luft.' },
    specs: { battery: '12 V', speed: kmh('6'), seats: '2', age: '3+' },
  },
  {
    id: 'mercedes-ml63-rideon', category: 'kids', emoji: '🚙', image: 'photos/ML63red_11_-p-600x399.jpg', price: 3490,
    name: { en: 'Mercedes ML63 ride-on', no: 'Mercedes ML63-lekebil' },
    description: { en: 'A red ML63 ride-on with chrome trim and a comfortable seat. Luxury at walking pace.', no: 'En rød ML63-lekebil med kromdetaljer og komfortabelt sete. Luksus i gangfart.' },
    specs: { battery: '12 V', speed: kmh('5'), seats: '2', age: '3+' },
  },
  {
    id: 'minority-report-car-toy', category: 'kids', emoji: '🚗', image: 'photos/Minority-report-car.PW538-PIP-311x398.jpg', price: 699,
    name: { en: 'Minority Report concept car', no: 'Minority Report-konseptbil' },
    description: { en: 'A red concept car model from Minority Report. For fans of futuristic transport and small doors.', no: 'En rød konseptbilmodell fra Minority Report. For fans av fremtidstransport og små dører.' },
    specs: { scale: '1:32', material: 'Die-cast', age: '6+' },
  },
  {
    id: 'polaris-rzr-rideon', category: 'kids', emoji: '🏎️', image: 'photos/POLARIS.polaris-ranger-rzr-900-peg-perego-233x233.jpg', price: 5990,
    name: { en: 'Polaris RZR ride-on', no: 'Polaris RZR-lekebil' },
    description: { en: 'A two-seat Polaris RZR ride-on with a roll bar, big tyres and a surprisingly good turning circle.', no: 'En toseter Polaris RZR-lekebil med veltebøyle, store hjul og en overraskende god svingradius.' },
    specs: { battery: '24 V', speed: kmh('8'), seats: '2', age: '6+' },
  },
  {
    id: 'porsche-carrera-gt-model', category: 'kids', emoji: '🏎️', image: 'photos/Porsce-carrera-GT.PW535-PIP-291x365.jpg', price: 499,
    name: { en: 'Porsche Carrera GT model', no: 'Porsche Carrera GT-modell' },
    description: { en: 'A silver Carrera GT scale model with opening doors. Ideal for the shelf or the desk.', no: 'En sølv Carrera GT-modell med åpningsbare dører. Ideell for hylla eller skrivebordet.' },
    specs: { scale: '1:32', material: 'Die-cast', doors: 'Opening' },
  },
  {
    id: 'race-sports-car-rc', category: 'kids', emoji: '🏎️', image: 'photos/Race2_Sports_Car-405x214.jpg', price: 399,
    name: { en: 'Race sports car RC', no: 'Race sportsbil RC' },
    description: { en: 'A red remote-controlled sports car with soft tyres for indoor racing around the kitchen table.', no: 'En rød fjernstyrt sportsbil med myke dekk for innendørsracing rundt kjøkkenbordet.' },
    specs: { scale: '1:24', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'tractor-rideon', category: 'kids', emoji: '🚜', image: 'photos/TRAKTOR-litebilde.1260498571-208x208.jpg', price: 2490,
    name: { en: 'Ride-on tractor', no: 'Traktor-lekebil' },
    description: { en: 'A green ride-on tractor with a matching trailer. For harvesting toy vegetables at speed.', no: 'En grønn traktor-lekebil med passende tilhenger. For innhøsting av lekegrønnsaker i høy fart.' },
    specs: { age: '3+', seats: '1', trailer: 'Included', material: 'Plastic' },
  },

  // ---------------- Robots & RC ----------------
  {
    id: 'rc-heli-md500', category: 'robots', emoji: '🚁', image: 'photos/2ch-MINI-Helicopter-MD500-3.B1003198957-279x279.jpg', price: 1290,
    name: { en: 'MD500 mini helicopter', no: 'MD500 minihelikopter' },
    description: { en: 'A two-channel RC helicopter in police colours. Simple enough for the living room, brave enough for the garden.', no: 'Et tokanals RC-helikopter i politifarger. Enkelt nok for stua, modig nok for hagen.' },
    specs: { channels: '2', battery: '3.7 V', runtime: '8 min', age: '8+' },
  },
  {
    id: '3d-printer-duplicator-4s', category: 'robots', emoji: '🖨️', image: 'photos/3D-20141028090054846-591x591.jpg', price: 8990,
    name: { en: 'Wanhao Duplicator 4S 3D printer', no: 'Wanhao Duplicator 4S 3D-skriver' },
    description: { en: 'A dual-nozzle 3D printer that prints PLA and ABS. Comes mostly assembled and fully enthusiastic.', no: 'En 3D-skriver med to dyser som skriver PLA og ABS. Kommer nesten ferdig montert og full av entusiasme.' },
    specs: { build: '225 × 145 × 150 mm', nozzles: '2', filament: 'PLA / ABS', connectivity: 'USB / SD' },
  },
  {
    id: '3d-print-sample-pack', category: 'robots', emoji: '🧸', image: 'photos/3d-20141016092236807-600x398.jpg', price: 249,
    name: { en: '3D print sample pack', no: '3D-utskriftspakke' },
    description: { en: 'A box of 3D-printed samples in assorted colours, plus a tiny green quadcopter for scale.', no: 'En eske med 3D-utskrifter i ulike farger, pluss en bitte liten grønn quadcopter for størrelsessammenligning.' },
    specs: { pieces: '20+', material: 'PLA', colours: 'Assorted' },
  },
  {
    id: '3d-printed-figure-shelf', category: 'robots', emoji: '🧸', image: 'photos/3D-2-securedownload-261x261.jpg', price: 349,
    name: { en: '3D-printed figure set', no: '3D-utskrevet figursett' },
    description: { en: 'A shelf of 3D-printed figures, from a small dog to a very relaxed fisherman. Painted by hand.', no: 'En hylle med 3D-utskrevne figurer, fra en liten hund til en svært avslappet fisker. Malt for hånd.' },
    specs: { pieces: '4', material: 'PLA', height: '8–15 cm', painted: 'By hand' },
  },
  {
    id: '3d-printer-black', category: 'robots', emoji: '🖨️', image: 'photos/3d-20141028090250839-652x600.jpg', price: 7990,
    name: { en: 'Black 3D printer', no: 'Svart 3D-skriver' },
    description: { en: 'A sturdy black 3D printer with a heated bed and a clear front door for watching the magic happen.', no: 'En solid svart 3D-skriver med varmebed og klar frontdør for å se magien skje.' },
    specs: { build: '200 × 200 × 180 mm', nozzle: '0.4 mm', filament: 'PLA / ABS', connectivity: 'USB' },
  },
  {
    id: '3d-printer-red-spool', category: 'robots', emoji: '🖨️', image: 'photos/3d-20141028090252757-201x201.jpg', price: 7990,
    name: { en: '3D printer with red filament', no: '3D-skriver med rød filament' },
    description: { en: 'The same black printer, loaded with a fresh red spool and ready for its first print.', no: 'Samme svarte skriver, lastet med en fersk rød spole og klar for sin første utskrift.' },
    specs: { build: '200 × 200 × 180 mm', filament: 'PLA', spool: '1 kg', colour: 'Red' },
  },
  {
    id: '3d-print-blue-figure', category: 'robots', emoji: '🧸', image: 'photos/3d-6352384907_b58aa28c18_b-400x600.jpg', price: 199,
    name: { en: 'Blue 3D-printed figure', no: 'Blå 3D-utskrevet figur' },
    description: { en: 'A chunky blue figure straight off the printer. Layer lines included as a design feature.', no: 'En kraftig blå figur rett fra skriveren. Laglinjer følger med som et designelement.' },
    specs: { height: '12 cm', material: 'PLA', colour: 'Blue' },
  },
  {
    id: '3d-print-red-robot', category: 'robots', emoji: '🤖', image: 'photos/3d-6846203491_46be86682d_b-323x202.jpg', price: 149,
    name: { en: 'Red robot figure', no: 'Rød robotfigur' },
    description: { en: 'A small red and green robot figure, printed in one piece and painted by hand.', no: 'En liten rød og grønn robotfigur, skrevet ut i ett stykke og malt for hånd.' },
    specs: { height: '8 cm', material: 'PLA', painted: 'By hand' },
  },
  {
    id: '3d-print-red-robot-two', category: 'robots', emoji: '🤖', image: 'photos/3d-6846218495_b4d9348d2c_b-331x209.jpg', price: 149,
    name: { en: 'Red robot figure, second pose', no: 'Rød robotfigur, annen stilling' },
    description: { en: 'Another look at the little red robot, this time showing off its antenna.', no: 'En ny titt på den lille røde roboten, denne gangen med antennen på display.' },
    specs: { height: '8 cm', material: 'PLA', painted: 'By hand' },
  },
  {
    id: '3d-printer-toolkit', category: 'robots', emoji: '🧰', image: 'photos/3d-WanHao_Duplicator4S_Bild09_1280x720-1280x720-600x337.jpg', price: 399,
    name: { en: '3D printer tool kit', no: 'Verktøysett til 3D-skriver' },
    description: { en: 'Everything you need to keep a printer happy: nozzle cleaners, tweezers, scrapers and spare parts.', no: 'Alt du trenger for å holde skriveren fornøyd: dyserensere, pinsett, skraper og reservedeler.' },
    specs: { pieces: '12', includes: 'Tweezers, scrapers', case: 'Fabric' },
  },
  {
    id: 'apache-fpv-frame', category: 'robots', emoji: '🚁', image: 'photos/APACHE-kamera.20071016144030394-572x429.jpg', price: 990,
    name: { en: 'Apache FPV camera frame', no: 'Apache FPV-kameraramme' },
    description: { en: 'A camera frame and landing gear for the Apache-style RC helicopter, ready for a first-person camera.', no: 'En kameraramme og landingsunderstell til Apache-helikopteret, klar for et FPV-kamera.' },
    specs: { fits: 'Apache 450', material: 'Aluminium', camera: 'Not included' },
  },
  {
    id: 'avatar-toy-drone', category: 'robots', emoji: '🚁', image: 'photos/AVATAR.rh-2996022-550-520x520.jpg', price: 399,
    name: { en: 'Avatar toy quadcopter', no: 'Avatar leke-quadcopter' },
    description: { en: 'A small four-rotor toy with a simple controller. Bounces off walls and keeps going.', no: 'En liten fire-rotors leke med enkel kontroller. Spretter av veggene og fortsetter.' },
    specs: { channels: '4', battery: '3.7 V', runtime: '6 min', age: '8+' },
  },
  {
    id: 'rc-heli-apache-flight', category: 'robots', emoji: '🚁', image: 'photos/ApAcHe.eh-678-1-542x357.jpg', price: 1490,
    name: { en: 'Apache RC helicopter', no: 'Apache RC-helikopter' },
    description: { en: 'A scale Apache gunship helicopter flying over the water. Looks serious, flies gently.', no: 'Et Apache-helikopter i skala som flyr over vannet. Ser alvorlig ut, flyr forsiktig.' },
    specs: { channels: '4', battery: '7.4 V', runtime: '10 min', length: '45 cm' },
  },
  {
    id: 'rc-heli-apache-box', category: 'robots', emoji: '🚁', image: 'photos/ApAcHe.rh-9088-3-585x394.jpg', price: 1490,
    name: { en: 'Apache RC helicopter kit', no: 'Apache RC-helikoptersett' },
    description: { en: 'The full Apache kit with helicopter, transmitter, charger and a box that survives the car boot.', no: 'Komplett Apache-sett med helikopter, sender, lader og en eske som tåler bagasjerommet.' },
    specs: { channels: '4', battery: '7.4 V', runtime: '10 min', case: 'Included' },
  },
  {
    id: 'rc-truck-chassis', category: 'robots', emoji: '🚙', image: 'photos/BIL.10030pro-010-346x259.jpg', price: 2490,
    name: { en: 'RC monster truck chassis', no: 'RC-monstertruck-chassis' },
    description: { en: 'A 1:10 monster truck chassis with blue anodised parts and tyres taller than the body.', no: 'Et 1:10 monstertruck-chassis med blå anodiserte deler og dekk høyere enn karosseriet.' },
    specs: { scale: '1:10', drive: '4WD', motor: 'Brushed', battery: '7.4 V' },
  },
  {
    id: 'rc-truck-wheel', category: 'robots', emoji: '🛞', image: 'photos/BIL.10030pro-012-390x293.jpg', price: 199,
    name: { en: 'RC monster truck wheel', no: 'RC-monstertruck-hjul' },
    description: { en: 'A spare wheel and knobbly tyre for the 1:10 monster truck. Sold singly, because one is always the first to go.', no: 'Et reservehjul med grovt dekk til 1:10-monstertrucken. Selges enkeltvis, fordi ett alltid ryker først.' },
    specs: { scale: '1:10', diameter: '120 mm', hex: '12 mm' },
  },
  {
    id: 'rc-transmitter-two-channel', category: 'robots', emoji: '🎮', image: 'photos/BIL.10030pro-024-505x550.jpg', price: 399,
    name: { en: '2-channel RC transmitter', no: '2-kanals RC-sender' },
    description: { en: 'A pistol-grip transmitter with steering wheel and throttle trigger. Bind it to your own receiver.', no: 'En pistolgrep-sender med ratt og gassavtrekk. Koble den til din egen mottaker.' },
    specs: { channels: '2', frequency: '2.4 GHz', power: '4 × AA' },
  },
  {
    id: 'rc-buggy-blue', category: 'robots', emoji: '🚙', image: 'photos/BIL.10070pro-011-566x566.jpg', price: 2490,
    name: { en: 'Blue RC buggy', no: 'Blå RC-buggy' },
    description: { en: 'A blue 1:10 buggy with oil-filled shocks and a body that shrugs off small crashes.', no: 'En blå 1:10 buggy med oljefylte støtdempere og et karosseri som tåler små krasj.' },
    specs: { scale: '1:10', drive: '4WD', motor: 'Brushed', battery: '7.4 V' },
  },
  {
    id: 'rc-transmitter-two-channel-b', category: 'robots', emoji: '🎮', image: 'photos/BIL.10070pro-022-508x550.jpg', price: 399,
    name: { en: '2-channel RC transmitter, black', no: '2-kanals RC-sender, svart' },
    description: { en: 'The black version of our pistol-grip transmitter. Same triggers, same dependable range.', no: 'Den svarte utgaven av pistolgrep-senderen vår. Samme avtrekk, samme pålitelige rekkevidde.' },
    specs: { channels: '2', frequency: '2.4 GHz', power: '4 × AA' },
  },
  {
    id: 'rc-monster-truck-yellow', category: 'robots', emoji: '🚙', image: 'photos/BILoffroad.08881-003-275x206.jpg', price: 1990,
    name: { en: 'Yellow RC monster truck', no: 'Gul RC-monstertruck' },
    description: { en: 'A yellow off-road RC truck with huge wheels and a suspension setup that loves gravel.', no: 'En gul offroad-RC-lastebil med enorme hjul og en fjæring som elsker grus.' },
    specs: { scale: '1:12', drive: '4WD', battery: '7.4 V', runtime: '15 min' },
  },
  {
    id: 'rc-seaplane-red', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.679-421x316.jpg', price: 1490,
    name: { en: 'Red RC seaplane', no: 'Rødt RC-sjøfly' },
    description: { en: 'A red seaplane that takes off from water and lands on it again, most of the time.', no: 'Et rødt sjøfly som letter fra vannet og lander på det igjen, for det meste.' },
    specs: { channels: '3', wingspan: '80 cm', battery: '7.4 V', runtime: '10 min' },
  },
  {
    id: 'rc-seaplane-red-two', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.680-407x305.jpg', price: 1490,
    name: { en: 'Red RC seaplane, side view', no: 'Rødt RC-sjøfly, side' },
    description: { en: 'Side view of the red seaplane, showing the propeller and the floats that make water landings possible.', no: 'Sidebilde av det røde sjøflyet, med propellen og pontongene som gjør vannlandinger mulige.' },
    specs: { channels: '3', wingspan: '80 cm', battery: '7.4 V', floats: 'Yes' },
  },
  {
    id: 'rc-seaplane-water', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.682-443x332.jpg', price: 1590,
    name: { en: 'RC seaplane on the water', no: 'RC-sjøfly på vannet' },
    description: { en: 'The seaplane resting on calm water, waiting for the throttle. A very peaceful way to crash.', no: 'Sjøflyet hvilende på stille vann, og venter på gass. En svært fredelig måte å krasje på.' },
    specs: { channels: '3', wingspan: '80 cm', battery: '7.4 V', runtime: '10 min' },
  },
  {
    id: 'rc-seaplane-white', category: 'robots', emoji: '✈️', image: 'photos/Baat-Fly.Pic.684-441x331.jpg', price: 1590,
    name: { en: 'White and red RC seaplane', no: 'Hvitt og rødt RC-sjøfly' },
    description: { en: 'A white and red seaplane with a high wing and a gentle glide. Includes a spare propeller.', no: 'Et hvitt og rødt sjøfly med høyt vingeparti og en mild glideflukt. Inkluderer reservepropell.' },
    specs: { channels: '3', wingspan: '90 cm', battery: '7.4 V', spare: 'Propeller' },
  },
  {
    id: 'rc-stunt-car-set', category: 'robots', emoji: '🚗', image: 'photos/Bil-stunt.cars1es-479x330.jpg', price: 599,
    name: { en: 'RC stunt car set', no: 'RC-stuntbilsett' },
    description: { en: 'A stunt car that flips, spins and plays music. Everything a kitchen floor never asked for.', no: 'En stuntbil som snurrer, spinner og spiller musikk. Alt kjøkkengulvet aldri ba om.' },
    specs: { scale: '1:16', drive: '4WD', battery: 'Rechargeable', music: 'Yes' },
  },
  {
    id: 'rc-car-track-blue', category: 'robots', emoji: '🏁', image: 'photos/Bilbane-blaa-Bil.6618-1550x1217.jpg', price: 899,
    name: { en: 'Blue RC car track', no: 'Blå RC-bilbane' },
    description: { en: 'A flexible blue race track with tight corners and a big loop. Fits a living room, just about.', no: 'En fleksibel blå racerbane med trange svinger og en stor loop. Får akkurat plass i en stue.' },
    specs: { length: '6 m', pieces: '40+', scale: '1:43', age: '5+' },
  },
  {
    id: 'mini-rc-car-red', category: 'robots', emoji: '🚗', image: 'photos/Boy.mini_1_main_200_5737-205x205.jpg', price: 299,
    name: { en: 'Mini RC rally car', no: 'Mini RC-rallybil' },
    description: { en: 'A tiny red and white rally car with a controller clipped to the side. Stocking filler, fully charged.', no: 'En bitte liten rød og hvit rallybil med kontroller festet på siden. Perfekt i julestrømpen, fulladet.' },
    specs: { scale: '1:58', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'mini-rc-car-kit', category: 'robots', emoji: '🚗', image: 'photos/Brun-diskolit.AN0055-236x236.jpg', price: 349,
    name: { en: 'Mini RC car in display pack', no: 'Mini RC-bil i displaypakke' },
    description: { en: 'A mini RC car in a blister pack with controller and charger. The brown packaging is, frankly, a choice.', no: 'En mini RC-bil i blisterpakning med kontroller og lader. Den brune emballasjen er, ærlig talt, et valg.' },
    specs: { scale: '1:58', drive: 'RWD', battery: 'Rechargeable', age: '6+' },
  },
  {
    id: 'devo-f7-transmitter', category: 'robots', emoji: '🎮', image: 'photos/DEVO-F7-2-431x676.jpg', price: 1990,
    name: { en: 'Walkera Devo F7 transmitter', no: 'Walkera Devo F7-sender' },
    description: { en: 'A 7-channel transmitter with a built-in video screen, for flying with a live camera feed.', no: 'En 7-kanals sender med innebygd videoskjerm, for å fly med levende kamerabilde.' },
    specs: { channels: '7', screen: '4.3"', frequency: '2.4 GHz', battery: 'LiPo' },
  },
  {
    id: 'drone-backpack', category: 'robots', emoji: '🎒', image: 'photos/DRONE-Bag_5-400x600.jpg', price: 599,
    name: { en: 'Yellow drone backpack', no: 'Gul drone-ryggsekk' },
    description: { en: 'A bright yellow backpack with padded compartments for a drone, transmitter and spare batteries.', no: 'En knallgul ryggsekk med polstrede rom til drone, sender og reservebatterier.' },
    specs: { material: 'Nylon', compartments: '3', fits: 'Up to 350 mm' },
  },
  {
    id: 'fpv-monitor', category: 'robots', emoji: '📺', image: 'photos/DRONE-JdfpR1-G.jpg.thumb_400x400-384x384.jpg', price: 990,
    name: { en: 'FPV monitor', no: 'FPV-skjerm' },
    description: { en: 'A small clip-on monitor for first-person flying. Shows battery voltage, so you land before the drama.', no: 'En liten skjerm du fester på senderen for FPV-flyging. Viser batterispenning, så du lander før dramatikken.' },
    specs: { size: '4.3"', battery: 'Built-in', input: '5.8 GHz' },
  },
  {
    id: 'helmet-action-camera', category: 'robots', emoji: '📷', image: 'photos/DRONE-Kdfpj6ya-600x390.jpg', price: 1490,
    name: { en: 'Helmet action camera', no: 'Hjelmkamera' },
    description: { en: 'A compact action camera that straps to a helmet and records the ride in 1080p.', no: 'Et kompakt actionkamera som festes på hjelmen og filmer turen i 1080p.' },
    specs: { resolution: '1080p', storage: 'microSD', battery: '900 mAh', mount: 'Helmet strap' },
  },
  {
    id: 'drone-battery-pack', category: 'robots', emoji: '🔋', image: 'photos/DRONE-graph_batteries-600x496.jpg', price: 1290,
    name: { en: 'Drone battery pack, 3 pcs', no: 'Dronebatteripakke, 3 stk' },
    description: { en: 'Three flight batteries with a discharge chart on the box. Enough power for a proper afternoon.', no: 'Tre flybatterier med utladningsdiagram på esken. Nok strøm til en skikkelig ettermiddag.' },
    specs: { cells: '3S', capacity: '2200 mAh', voltage: '11.1 V', plugs: 'XT60' },
  },
  {
    id: 'drone-manual-overview', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_10889-910x873.jpg', price: null,
    name: { en: 'Drone manual, overview page', no: 'Dronehåndbok, oversiktsside' },
    description: { en: 'The opening pages of the drone manual, with switches, LEDs and a diagram of the whole aircraft.', no: 'De første sidene av dronehåndboken, med brytere, LED-lys og et diagram av hele fartøyet.' },
    specs: { pages: '48', language: { en: 'English', no: 'Engelsk' }, format: 'A5' },
  },
  {
    id: 'drone-manual-flight-modes', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_12239-916x1135.jpg', price: null,
    name: { en: 'Drone manual, flight modes', no: 'Dronehåndbok, flymoduser' },
    description: { en: 'A page explaining GPS, attitude and manual flight modes, with helpful little diagrams.', no: 'En side som forklarer GPS-, attitude- og manuell flymodus, med nyttige små diagrammer.' },
    specs: { pages: '48', topic: 'Flight modes', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-manual-map', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_16338-910x941.jpg', price: null,
    name: { en: 'Drone manual, map page', no: 'Dronehåndbok, kartside' },
    description: { en: 'The map page from the manual, showing how to set a home point and a flight boundary.', no: 'Kartsiden fra håndboken som viser hvordan du setter hjempunkt og flygrense.' },
    specs: { pages: '48', topic: 'GPS map', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-manual-transmitter', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_19963-915x776.jpg', price: null,
    name: { en: 'Drone manual, transmitter page', no: 'Dronehåndbok, senderside' },
    description: { en: 'A labelled drawing of the transmitter, so you know which stick does what before take-off.', no: 'En navngitt tegning av senderen, så du vet hvilken stikke gjør hva før letting.' },
    specs: { pages: '48', topic: 'Transmitter', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-manual-camera', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_36419-907x987.jpg', price: null,
    name: { en: 'Drone manual, camera page', no: 'Dronehåndbok, kameraside' },
    description: { en: 'How to mount and aim the camera, including the bit about not pointing it at the sun.', no: 'Hvordan montere og rette kameraet, inkludert det om å ikke peke det mot solen.' },
    specs: { pages: '48', topic: 'Camera', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-manual-flight-basics', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_39132-911x763.jpg', price: null,
    name: { en: 'Drone manual, flight basics', no: 'Dronehåndbok, flygrunnlag' },
    description: { en: 'The flight basics spread: take-off, hover, turn and the always popular controlled landing.', no: 'Grunnleggende flyging: letting, hover, sving og den alltid populære kontrollerte landingen.' },
    specs: { pages: '48', topic: 'Flight basics', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-manual-diagram', category: 'robots', emoji: '📘', image: 'photos/DROne-1-20141225162036_54973-910x325.jpg', price: null,
    name: { en: 'Drone manual, parts diagram', no: 'Dronehåndbok, delediagram' },
    description: { en: 'A wide parts diagram showing motors, arms, landing gear and where the screws go.', no: 'Et bredt delediagram som viser motorer, armer, landingsunderstell og hvor skruene skal.' },
    specs: { pages: '48', topic: 'Parts', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-spec-sheet', category: 'robots', emoji: '📄', image: 'photos/DROne-20141225162156_69296-918x348.jpg', price: null,
    name: { en: 'Drone specification sheet', no: 'Dronespesifikasjoner' },
    description: { en: 'The full specification table: weight, range, battery, camera and every number in between.', no: 'Den komplette spesifikasjonstabellen: vekt, rekkevidde, batteri, kamera og hvert eneste tall imellom.' },
    specs: { pages: '2', topic: 'Specifications', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'quadcopter-black', category: 'robots', emoji: '🚁', image: 'photos/DROne-71mr-ylmr2L__SL1500_-600x600.jpg', price: 3990,
    name: { en: 'Black quadcopter', no: 'Svart quadcopter' },
    description: { en: 'A black quadcopter with a gimbal mount and a transmitter that looks like it means business.', no: 'En svart quadcopter med gimbal-feste og en sender som ser ut som den mener alvor.' },
    specs: { channels: '6', battery: '11.1 V', runtime: '15 min', camera: 'Optional' },
  },
  {
    id: 'fpv-wiring-diagram', category: 'robots', emoji: '🔌', image: 'photos/DV04.fpv5801-733x468.jpg', price: null,
    name: { en: 'FPV wiring diagram', no: 'FPV-koblingsskjema' },
    description: { en: 'A colour-coded wiring diagram for the FPV setup. Red to red, black to black, and pray.', no: 'Et fargekodet koblingsskjema for FPV-oppsettet. Rødt til rødt, svart til svart, og be en bønn.' },
    specs: { topic: 'Wiring', language: { en: 'English', no: 'Engelsk' }, format: 'A3' },
  },
  {
    id: 'scout-x4-drone-map', category: 'robots', emoji: '🚁', image: 'photos/DoRoNe.20141225162035_19913-978x360.jpg', price: 4990,
    name: { en: 'Scout X4 drone with GPS map', no: 'Scout X4-drone med GPS-kart' },
    description: { en: 'The Scout X4 shown next to its GPS map view, so you can see exactly where it is not.', no: 'Scout X4 vist ved siden av GPS-kartvisningen, så du ser nøyaktig hvor den ikke er.' },
    specs: { channels: '6', range: '800 m', runtime: '20 min', camera: '1080p' },
  },
  {
    id: 'drone-flight-map-page', category: 'robots', emoji: '🗺️', image: 'photos/DrOnE-20141225162036_16338-398x413.jpg', price: null,
    name: { en: 'Drone flight map', no: 'Droneflykart' },
    description: { en: 'A printed map page for planning a flight, with a home marker and a no-fly zone.', no: 'En trykt kartside for å planlegge flyging, med hjempunkt og forbudssone.' },
    specs: { topic: 'Navigation', format: 'A5', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-gimbal-manual', category: 'robots', emoji: '📘', image: 'photos/Drove-20150123135125_47128-602x764.jpg', price: null,
    name: { en: 'Drone gimbal manual', no: 'Drone-gimbal-håndbok' },
    description: { en: 'A step-by-step guide to removing the gimbal for transport and putting it back without swearing.', no: 'En trinnvis guide for å ta av gimbalen ved transport og sette den tilbake uten banning.' },
    specs: { pages: '12', topic: 'Gimbal', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'drone-pilot-camera', category: 'robots', emoji: '🚁', image: 'photos/Dscf0028-696x557.jpg', price: 4990,
    name: { en: 'Drone with camera and pilot', no: 'Drone med kamera og pilot' },
    description: { en: 'A red and black drone held by its pilot. The camera is small, the enthusiasm is not.', no: 'En rød og svart drone holdt av piloten sin. Kameraet er lite, entusiasmen er det ikke.' },
    specs: { channels: '6', camera: '1080p', runtime: '18 min', battery: '11.1 V' },
  },
  {
    id: 'esky-rc-helicopter', category: 'robots', emoji: '🚁', image: 'photos/EKO.eco7_tb2_p3-307x221.jpg', price: 890,
    name: { en: 'Esky RC helicopter', no: 'Esky RC-helikopter' },
    description: { en: 'A beginner-friendly helicopter with a stabilising flybar. Hovers politely while you panic.', no: 'Et nybegynnervennlig helikopter med stabiliserende flybar. Hoverer høflig mens du får panikk.' },
    specs: { channels: '3', battery: '7.4 V', runtime: '8 min', length: '30 cm' },
  },
  {
    id: 'veni-cross-flying-car', category: 'robots', emoji: '🚗', image: 'photos/FLYBIL-1.ES3760-400x300.jpg', price: 699,
    name: { en: 'Veni-Cross flying car', no: 'Veni-Cross flybil' },
    description: { en: 'A hovercraft toy that drives on the floor and flies when you tilt the controller. Landings are a skill.', no: 'Et svevetøy som kjører på gulvet og flyr når du vipper kontrolleren. Landinger er en ferdighet.' },
    specs: { channels: '4', battery: '3.7 V', runtime: '8 min', age: '8+' },
  },
  {
    id: 'micro-heli-hand', category: 'robots', emoji: '🚁', image: 'photos/HELI-LITE.rh-708a-1-493x493.jpg', price: 299,
    name: { en: 'Micro helicopter', no: 'Mikrohelikopter' },
    description: { en: 'A palm-sized helicopter that weighs almost nothing and is almost impossible to break.', no: 'Et håndflatestort helikopter som veier nesten ingenting og nesten ikke kan ødelegges.' },
    specs: { channels: '3', battery: '3.7 V', runtime: '6 min', age: '8+' },
  },
  {
    id: 'heli-moskito-3ch', category: 'robots', emoji: '🚁', image: 'photos/HELIKOPter-3ch-MOSKITO.200711914164537115-466x259.jpg', price: 490,
    name: { en: 'Moskito 3-channel helicopter', no: 'Moskito 3-kanals helikopter' },
    description: { en: 'A bright 3-channel helicopter with a cardboard box that doubles as a hangar.', no: 'Et fargerikt 3-kanals helikopter med en pappeske som dobler som hangar.' },
    specs: { channels: '3', battery: '3.7 V', runtime: '7 min', length: '22 cm' },
  },
  {
    id: 'micro-heli-3ch', category: 'robots', emoji: '🚁', image: 'photos/HELIkopter.lite.3ch.200711915262794959-458x254.jpg', price: 399,
    name: { en: 'Mini 3-channel helicopter', no: 'Mini 3-kanals helikopter' },
    description: { en: 'A mini helicopter with a transmitter and spare blades. Perfect for indoor flying on a rainy day.', no: 'Et minihelikopter med sender og reserveblader. Perfekt for innendørs flyging på en regnværsdag.' },
    specs: { channels: '3', battery: '3.7 V', runtime: '7 min', spare: 'Blades' },
  },
  {
    id: 'heli-2ch-box', category: 'robots', emoji: '🚁', image: 'photos/Helicopter-2ch.10089-11-352x264.jpg', price: 790,
    name: { en: '2-channel helicopter kit', no: '2-kanals helikoptersett' },
    description: { en: 'A complete 2-channel helicopter set in a blue box. Charge, fly, charge again.', no: 'Et komplett 2-kanals helikoptersett i en blå eske. Lad, fly, lad igjen.' },
    specs: { channels: '2', battery: '3.7 V', runtime: '8 min', case: 'Included' },
  },
  {
    id: 'heli-white-coast', category: 'robots', emoji: '🚁', image: 'photos/Helicopter.hvit-pent-bilde.Radio_Controlled_Helicopter-525x394.jpg', price: 890,
    name: { en: 'White RC helicopter', no: 'Hvitt RC-helikopter' },
    description: { en: 'A white helicopter photographed over the Norwegian coast. Wind not included, but likely.', no: 'Et hvitt helikopter fotografert over norskekysten. Vind følger ikke med, men er sannsynlig.' },
    specs: { channels: '3', battery: '7.4 V', runtime: '8 min', length: '32 cm' },
  },
  {
    id: 'large-rc-helicopter', category: 'robots', emoji: '🚁', image: 'photos/Helikopter-60.2005125172110262-343x245.jpg', price: 4990,
    name: { en: 'Large 60-size RC helicopter', no: 'Stort RC-helikopter i 60-klassen' },
    description: { en: 'A big petrol-powered helicopter for experienced pilots with a large field and a calm pulse.', no: 'Et stort bensindrevet helikopter for erfarne piloter med stor slette og rolig puls.' },
    specs: { engine: '60 size', length: '130 cm', channels: '6', skill: 'Advanced' },
  },
  {
    id: 'rc-f18-jet', category: 'robots', emoji: '✈️', image: 'photos/Jagerfly-stort.ep-f18-21-673x389.jpg', price: 1990,
    name: { en: 'F-18 RC fighter jet', no: 'F-18 RC-jagerfly' },
    description: { en: 'A grey F-18 model jet with a full sticker set. Looks fast even before the battery is in.', no: 'En grå F-18-modelljet med komplett klistremerkesett. Ser rask ut allerede før batteriet er i.' },
    specs: { wingspan: '70 cm', channels: '4', battery: '7.4 V', skill: 'Intermediate' },
  },
  {
    id: 'qrx350-pro-kit', category: 'robots', emoji: '🚁', image: 'photos/QRX350pro-3-447x436.jpg', price: 3490,
    name: { en: 'QRX350 Pro drone kit', no: 'QRX350 Pro-dronesett' },
    description: { en: 'A white QRX350 Pro quadcopter with GPS, return-to-home and a box full of accessories.', no: 'En hvit QRX350 Pro-quadcopter med GPS, retur-til-hjem og en eske full av tilbehør.' },
    specs: { channels: '6', range: '500 m', runtime: '15 min', gps: 'Yes' },
  },
  {
    id: 'qrx350-pro-box-back', category: 'robots', emoji: '🚁', image: 'photos/QRX350pro-4-447x600.jpg', price: 3490,
    name: { en: 'QRX350 Pro, box back', no: 'QRX350 Pro, eske bak' },
    description: { en: 'The back of the QRX350 Pro box, listing every feature in three languages and one very small font.', no: 'Baksiden av QRX350 Pro-esken, med alle funksjoner på tre språk og en svært liten skrift.' },
    specs: { channels: '6', range: '500 m', runtime: '15 min', gps: 'Yes' },
  },
  {
    id: 'qrx350-pro-transmitter', category: 'robots', emoji: '🚁', image: 'photos/QRX350pro-5-447x614.jpg', price: 3490,
    name: { en: 'QRX350 Pro with transmitter', no: 'QRX350 Pro med sender' },
    description: { en: 'The complete QRX350 Pro set with transmitter, propeller guards and a serious-looking manual.', no: 'Det komplette QRX350 Pro-settet med sender, propellbeskyttelse og en alvorlig manual.' },
    specs: { channels: '6', range: '500 m', runtime: '15 min', guards: 'Included' },
  },
  {
    id: 'rc-car-instruction-sheet', category: 'robots', emoji: '📄', image: 'photos/RC-6.20130912114710_43947-682x358.jpg', price: null,
    name: { en: 'RC car instruction sheet', no: 'RC-bil bruksanvisning' },
    description: { en: 'The exploded-view instruction sheet for the RC car. Every screw has a number and a purpose.', no: 'Bruksanvisningen med sprengskisse til RC-bilen. Hver skrue har et nummer og et formål.' },
    specs: { topic: 'Assembly', language: { en: 'English', no: 'Engelsk' }, format: 'A3' },
  },
  {
    id: 'scout-x4-white', category: 'robots', emoji: '🚁', image: 'photos/Scout_X4-white-1445x991.jpg', price: 4990,
    name: { en: 'Scout X4 white drone', no: 'Scout X4 hvit drone' },
    description: { en: 'A white Scout X4 with a gimbal, GPS and a controller that has more switches than a small aircraft.', no: 'En hvit Scout X4 med gimbal, GPS og en sender med flere brytere enn et lite fly.' },
    specs: { channels: '6', range: '800 m', runtime: '20 min', camera: '1080p' },
  },
  {
    id: 'robot-vacuum-rv10', category: 'robots', emoji: '🤖', image: 'photos/Stovsuger-a.RV-10c.with.Remote.control-620x560.jpg', price: 2490,
    name: { en: 'RV-10C robot vacuum', no: 'RV-10C robotstøvsuger' },
    description: { en: 'A round robot vacuum with a remote control. It finds dust, furniture and occasionally the charger.', no: 'En rund robotstøvsuger med fjernkontroll. Den finner støv, møbler og av og til laderen.' },
    specs: { runtime: '90 min', battery: '2600 mAh', remote: 'Yes', height: '8 cm' },
  },
  {
    id: 'robot-vacuum-family', category: 'robots', emoji: '🤖', image: 'photos/Stovsuger-m.stor.Robot.Family.Ad-850x1144.jpg', price: 3490,
    name: { en: 'Robot Family vacuum', no: 'Robot Family-støvsuger' },
    description: { en: 'A robot vacuum from the Robot Family, with scheduling and a docking station. The family that cleans together.', no: 'En robotstøvsuger fra Robot Family, med tidsinnstilling og dokkingstasjon. Familien som støvsuger sammen.' },
    specs: { runtime: '120 min', battery: '3000 mAh', dock: 'Yes', schedule: 'Yes' },
  },
  {
    id: 'tali-h500-drone', category: 'robots', emoji: '🚁', image: 'photos/TALI-H500-Drone-397x383.jpg', price: 3990,
    name: { en: 'TALI H500 drone', no: 'TALI H500-drone' },
    description: { en: 'A black hexacopter with folding arms and a camera mount. Six motors, twice the confidence.', no: 'En svart hexacopter med sammenleggbare armer og kamerafeste. Seks motorer, dobbelt så selvsikker.' },
    specs: { motors: '6', range: '1000 m', runtime: '25 min', camera: 'Optional' },
  },
  {
    id: 'rc-tank-kit', category: 'robots', emoji: '🪖', image: 'photos/TANK.rb-tub3818-1-503x503.jpg', price: 1290,
    name: { en: 'RC tank kit', no: 'RC-tanksett' },
    description: { en: 'A build-your-own RC tank with tracks, gears and a controller. Slow, steady and deeply satisfying.', no: 'En bygg-selv RC-tank med belter, gir og kontroller. Sakte, stødig og dypt tilfredsstillende.' },
    specs: { scale: '1:24', drive: 'Tracked', battery: 'Rechargeable', age: '8+' },
  },
  {
    id: 'ufo-mx400-drone', category: 'robots', emoji: '🛸', image: 'photos/UF0-MX400_895_en-501x520.jpg', price: 890,
    name: { en: 'UFO MX400 drone', no: 'UFO MX400-drone' },
    description: { en: 'A UFO-shaped drone with lights, a camera and a name that promises more than it delivers.', no: 'En UFO-formet drone med lys, kamera og et navn som lover mer enn den holder.' },
    specs: { channels: '4', battery: '3.7 V', runtime: '8 min', camera: '480p' },
  },
  {
    id: 'vtol-bluey', category: 'robots', emoji: '✈️', image: 'photos/VTOL-Bluey-750x640.jpg', price: 1990,
    name: { en: 'VTOL Bluey', no: 'VTOL Bluey' },
    description: { en: 'A blue VTOL model that lifts off like a drone and flies like a plane. The best of two hobbies.', no: 'En blå VTOL-modell som letter som en drone og flyr som et fly. Det beste fra to hobbyer.' },
    specs: { wingspan: '80 cm', channels: '4', battery: '7.4 V', mode: 'VTOL' },
  },
  {
    id: 'walkera-4f200lm', category: 'robots', emoji: '🚁', image: 'photos/WALKERA.4F200LM_big_e-392x256.jpg', price: 3990,
    name: { en: 'Walkera 4F200LM helicopter', no: 'Walkera 4F200LM-helikopter' },
    description: { en: 'A collective-pitch helicopter in coastguard colours, for pilots who have outgrown toys.', no: 'Et collective pitch-helikopter i kystvaktfarger, for piloter som har vokst fra leketøy.' },
    specs: { channels: '6', length: '45 cm', battery: '11.1 V', skill: 'Advanced' },
  },

  // ---------------- Telescopes & binoculars ----------------
  {
    id: 'flexible-camera-tripod', category: 'optics', emoji: '📷', image: 'photos/3d-8080042697_c7620a8594_b-363x233.jpg', price: 249,
    name: { en: 'Flexible camera tripod', no: 'Bøyelig kamerastativ' },
    description: { en: 'A bendy tripod with grippy legs that cling to fences, branches and kitchen chairs.', no: 'Et bøyelig stativ med gripeføtter som klorer seg fast i gjerder, greiner og kjøkkenstoler.' },
    specs: { height: '25 cm', mount: '1/4"', weight: '180 g' },
  },
  {
    id: 'digital-camera', category: 'optics', emoji: '📷', image: 'photos/Discovery-camera.668509_lg-293x245.jpg', price: 1490,
    name: { en: 'Discovery digital camera', no: 'Discovery digitalkamera' },
    description: { en: 'A pocket camera with a 12 MP sensor and a screen on the back. Batteries not included, memories are.', no: 'Et lommekamera med 12 MP sensor og skjerm på baksiden. Batterier følger ikke med, minner gjør det.' },
    specs: { resolution: '12 MP', zoom: '3×', display: '2.7"', storage: 'SD' },
  },
  {
    id: 'binoculars-16x50', category: 'optics', emoji: '🔭', image: 'photos/Sports-20.16x50-kikert.pOLDSKU01-100090reg-223x223.jpg', price: 990,
    name: { en: '16×50 binoculars', no: '16×50 kikkert' },
    description: { en: 'Powerful 16×50 binoculars for birds, boats and neighbours who really should close their curtains.', no: 'Kraftig 16×50 kikkert for fugler, båter og naboer som virkelig burde lukke gardinene.' },
    specs: { magnification: '16×', lens: '50 mm', field: '3.5°', weight: '850 g' },
  },
  {
    id: 'binoculars-10x42', category: 'optics', emoji: '🔭', image: 'photos/kikkert-10796-600x321.jpg', price: 1290,
    name: { en: '10×42 binoculars', no: '10×42 kikkert' },
    description: { en: 'A solid pair of 10×42 binoculars with multicoated lenses and a comfortable neck strap.', no: 'En solid 10×42 kikkert med antirefleksbehandlede linser og komfortabel nakkereim.' },
    specs: { magnification: '10×', lens: '42 mm', field: '6.5°', weight: '680 g' },
  },
  {
    id: 'monocular-10926', category: 'optics', emoji: '🔭', image: 'photos/kikkert-10926-600x321.jpg', price: 690,
    name: { en: '10×42 monocular', no: '10×42 monokular' },
    description: { en: 'Half the weight of binoculars and twice as easy to fit in a jacket pocket.', no: 'Halve vekten av en kikkert og dobbelt så enkel å få plass i jakkelomma.' },
    specs: { magnification: '10×', lens: '42 mm', weight: '310 g', focus: 'Centre' },
  },
  {
    id: 'binoculars-11184', category: 'optics', emoji: '🔭', image: 'photos/kikkert-11184-600x321.jpg', price: 1590,
    name: { en: '12×50 binoculars', no: '12×50 kikkert' },
    description: { en: 'Bright 12×50 optics that work well at dusk, when the interesting things come out.', no: 'Lyse 12×50-optikker som fungerer godt i skumringen, når de interessante tingene dukker opp.' },
    specs: { magnification: '12×', lens: '50 mm', field: '5.2°', weight: '900 g' },
  },
  {
    id: 'compact-binoculars-71012', category: 'optics', emoji: '🔭', image: 'photos/kikkert-71012-600x321.jpg', price: 490,
    name: { en: 'Compact 8×21 binoculars', no: 'Kompakt 8×21 kikkert' },
    description: { en: 'Folding binoculars that disappear into a coat pocket. Small, light and surprisingly sharp.', no: 'Sammenleggbar kikkert som forsvinner ned i frakkelomma. Liten, lett og overraskende skarp.' },
    specs: { magnification: '8×', lens: '21 mm', weight: '210 g', type: 'Folding' },
  },
  {
    id: 'compact-binoculars-71020', category: 'optics', emoji: '🔭', image: 'photos/kikkert-71020-600x321.jpg', price: 590,
    name: { en: 'Compact 10×25 binoculars', no: 'Kompakt 10×25 kikkert' },
    description: { en: 'A slightly stronger pocket binocular, good for concerts, stadiums and startled birds.', no: 'En litt kraftigere lommekikkert, god for konserter, stadioner og forskremte fugler.' },
    specs: { magnification: '10×', lens: '25 mm', weight: '250 g', type: 'Folding' },
  },
  {
    id: 'night-vision-yukon', category: 'optics', emoji: '🌙', image: 'photos/natkikkert-25028-600x600.jpg', price: 4990,
    name: { en: 'Yukon night vision binoculars', no: 'Yukon nattkikkert' },
    description: { en: 'Yukon night vision that turns moonlight into a green-and-black TV picture. Wildlife never rests.', no: 'Yukon nattkikkert som gjør måneskinn om til et grønnsvart TV-bilde. Dyrelivet hviler aldri.' },
    specs: { magnification: '3×', range: '150 m', battery: 'CR123A', weight: '750 g' },
  },
  {
    id: 'night-vision-pulsar', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-1.75096-600x600.jpg', price: 6990,
    name: { en: 'Pulsar night vision monocular', no: 'Pulsar nattkikkert monokular' },
    description: { en: 'A compact Pulsar monocular with a built-in IR illuminator. See what the garden is doing at midnight.', no: 'Et kompakt Pulsar-monokular med innebygd IR-lys. Se hva hagen driver med ved midnatt.' },
    specs: { magnification: '4×', range: '200 m', battery: 'CR123A', ir: 'Built-in' },
  },
  {
    id: 'night-vision-helmet', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-10.75095-600x600.jpg', price: 8990,
    name: { en: 'Pulsar night vision helmet set', no: 'Pulsar nattkikkert-hjelmsett' },
    description: { en: 'A helmet-mounted night vision set that leaves both hands free for maps and thermoses.', no: 'Et hjelmmontert nattkikkertsett som gir begge hendene fri til kart og termoser.' },
    specs: { magnification: '1×', range: '180 m', mount: 'Helmet', weight: '950 g' },
  },
  {
    id: 'night-vision-goggles-yukon', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-2-25025-464x464.jpg', price: 7990,
    name: { en: 'Yukon night vision goggles', no: 'Yukon nattbriller' },
    description: { en: 'True binocular night vision goggles with a wide field of view and a very serious face strap.', no: 'Ekte binokulære nattbriller med bredt synsfelt og en svært alvorlig ansiktsreim.' },
    specs: { magnification: '2×', range: '140 m', field: '20°', weight: '1.1 kg' },
  },
  {
    id: 'night-vision-pulsar-binoculars', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-2.75096-600x600.jpg', price: 7990,
    name: { en: 'Pulsar night vision binoculars', no: 'Pulsar nattkikkert' },
    description: { en: 'A rugged Pulsar binocular with rubber armour and enough range to spot a fox at the tree line.', no: 'En robust Pulsar-kikkert med gummibeskyttelse og nok rekkevidde til å se en rev ved skogkanten.' },
    specs: { magnification: '3×', range: '250 m', battery: 'CR123A', weight: '1.2 kg' },
  },
  {
    id: 'night-vision-binoculars-three', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-3.75096-600x600.jpg', price: 6990,
    name: { en: 'Night vision binoculars, long body', no: 'Nattkikkert, lang utgave' },
    description: { en: 'Long-body night vision binoculars with a large objective lens and a steady, clear image.', no: 'Nattkikkert med lang kropp og stort objektiv, som gir et stødig og klart bilde.' },
    specs: { magnification: '4×', range: '220 m', lens: '50 mm', weight: '1.3 kg' },
  },
  {
    id: 'night-vision-binoculars-four', category: 'optics', emoji: '🌙', image: 'photos/nattkikkert-4.75096-600x600.jpg', price: 6490,
    name: { en: 'Night vision binoculars, compact', no: 'Nattkikkert, kompakt' },
    description: { en: 'The compact night vision model: lighter on the neck and still good for a dark forest.', no: 'Den kompakte nattkikkertmodellen: lettere for nakken og fortsatt god i mørk skog.' },
    specs: { magnification: '3×', range: '180 m', lens: '42 mm', weight: '900 g' },
  },

  // ---------------- Weird & wonderful ----------------
  {
    id: 'popular-science-magazine', category: 'weird', emoji: '📰', image: 'photos/3d-20141028092834910-222x300.jpg', price: 79,
    name: { en: 'Popular Science, After Earth issue', no: 'Popular Science, After Earth-utgave' },
    description: { en: 'A collector issue of Popular Science about the science of After Earth. Beach reading for engineers.', no: 'Et samlerutgave av Popular Science om vitenskapen bak After Earth. Strandlektyre for ingeniører.' },
    specs: { pages: '80', year: '2013', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'blue-rubber-frog', category: 'weird', emoji: '🐸', image: 'photos/3d-8592839898_1b0d42f0c0_b-600x450.jpg', price: 99,
    name: { en: 'Blue rubber frog', no: 'Blå gummifrosk' },
    description: { en: 'A small blue frog with very large feet. Perfect for desks, shelves and confusing guests.', no: 'En liten blå frosk med svært store føtter. Perfekt for skrivebord, hyller og forvirrede gjester.' },
    specs: { material: 'Rubber', length: '9 cm', colour: 'Blue' },
  },
  {
    id: 'battery-6v-12ah', category: 'weird', emoji: '🔋', image: 'photos/6v.fiamm-fg-11201-317x201.jpg', price: 349,
    name: { en: 'FIAMM 6 V 12 Ah battery', no: 'FIAMM 6 V 12 Ah batteri' },
    description: { en: 'A sealed lead-acid battery for ride-on cars, alarms and other small electrical adventures.', no: 'Et forseglet blybatteri til lekebiler, alarmer og andre små elektriske eventyr.' },
    specs: { voltage: '6 V', capacity: '12 Ah', type: 'SLA', weight: '2.1 kg' },
  },
  {
    id: 'aquarium-background-coral', category: 'weird', emoji: '🐠', image: 'photos/AAA.tank_bgs_1-365x299.jpg', price: 199,
    name: { en: 'Aquarium background, coral reef', no: 'Akvariebakgrunn, korallrev' },
    description: { en: 'A printed backdrop that turns a plain tank into a tropical coral reef. Fish not included.', no: 'En trykt bakgrunn som gjør et enkelt akvarium om til et tropisk korallrev. Fisk følger ikke med.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-plants', category: 'weird', emoji: '🌿', image: 'photos/AAA.tank_bgs_2-409x349.jpg', price: 199,
    name: { en: 'Aquarium background, freshwater plants', no: 'Akvariebakgrunn, ferskvannsplanter' },
    description: { en: 'Lush green planting for the back of the tank, with no pruning required.', no: 'Frodig grønn beplantning til baksiden av akvariet, uten behov for beskjæring.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-lake', category: 'weird', emoji: '🌊', image: 'photos/AAA.tank_bgs_3-384x314.jpg', price: 199,
    name: { en: 'Aquarium background, turquoise lake', no: 'Akvariebakgrunn, turkis innsjø' },
    description: { en: 'A sunlit underwater landscape in turquoise and green. Instantly makes the tank look deeper.', no: 'Et solbelyst undervannslandskap i turkis og grønt. Får akvariet til å se dypere ut med en gang.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-reef-cave', category: 'weird', emoji: '🪸', image: 'photos/AAA.tank_bgs_4-395x323.jpg', price: 199,
    name: { en: 'Aquarium background, reef cave', no: 'Akvariebakgrunn, revhule' },
    description: { en: 'A coral cave scene with plenty of hiding places, at least visually.', no: 'En korallhule med masse skjulesteder, i hvert fall visuelt.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-coral-garden', category: 'weird', emoji: '🪸', image: 'photos/AAA.tank_bgs_5-387x317.jpg', price: 199,
    name: { en: 'Aquarium background, coral garden', no: 'Akvariebakgrunn, korallhage' },
    description: { en: 'Bright corals in red, orange and blue. A reef holiday without the flight.', no: 'Sterke koraller i rødt, oransje og blått. En revferie uten flyreisen.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-planted', category: 'weird', emoji: '🌿', image: 'photos/AAA.tank_bgs_6-389x318.jpg', price: 199,
    name: { en: 'Aquarium background, planted tank', no: 'Akvariebakgrunn, plantekar' },
    description: { en: 'A dense planted scene that makes even a lonely guppy feel like it lives in a forest.', no: 'En tett beplantet scene som får selv en ensom guppy til å føle at den bor i en skog.' },
    specs: { size: '60 × 40 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'universal-ac-dc-adapter', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER-2.ac-dc-adapter-6-15v-239x263.jpg', price: 299,
    name: { en: 'Universal 6–15 V AC/DC adapter', no: 'Universell 6–15 V AC/DC-adapter' },
    description: { en: 'One adapter, many plugs and a voltage switch. The drawer-dweller every household needs.', no: 'Én adapter, mange plugger og en spenningsbryter. Skuffebeholderen alle husstander trenger.' },
    specs: { voltage: '6–15 V', current: '1.5 A', plugs: '8 tips', polarity: 'Switchable' },
  },
  {
    id: 'power-supply-1000ma', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER-2.eup-stromforsyning-1000ma-264x264.jpg', price: 149,
    name: { en: '1000 mA power supply', no: '1000 mA strømforsyning' },
    description: { en: 'A straightforward 1000 mA wall supply with a set of interchangeable tips.', no: 'En enkel 1000 mA veggadapter med et sett utskiftbare plugger.' },
    specs: { current: '1000 mA', voltage: 'Adjustable', tips: '6' },
  },
  {
    id: 'power-supply-1500ma', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER-2.eup-stromforsyning-1500ma-273x273.jpg', price: 179,
    name: { en: '1500 mA power supply', no: '1500 mA strømforsyning' },
    description: { en: 'The bigger brother of the 1000 mA supply. More current for routers, drives and gadgets.', no: 'Storebroren til 1000 mA-adapteren. Mer strøm til rutere, disker og dingser.' },
    specs: { current: '1500 mA', voltage: 'Adjustable', tips: '6' },
  },
  {
    id: 'travel-plug-adapter', category: 'weird', emoji: '🔌', image: 'photos/ADAPTER.chinavasion-CVFR-K12-7_jpg-335x335.jpg', price: 79,
    name: { en: 'Travel plug adapter', no: 'Reisestøpsel' },
    description: { en: 'A small white adapter that makes foreign sockets slightly less foreign.', no: 'En liten hvit adapter som gjør utenlandske stikkontakter litt mindre utenlandske.' },
    specs: { sockets: 'Universal', plugs: 'EU/UK/US', material: 'ABS' },
  },
  {
    id: 'aquarium-bubble-ornament', category: 'weird', emoji: '🫧', image: 'photos/AN1943-402x351.jpg', price: 249,
    name: { en: 'Aquarium bubble ornament', no: 'Akvarie-boblepryd' },
    description: { en: 'A bubbling decoration that adds movement and a suspicious amount of joy to the tank.', no: 'En boblende dekorasjon som gir bevegelse og en mistenkelig mengde glede til akvariet.' },
    specs: { power: '2 W', hose: '1.5 m', material: 'Resin' },
  },
  {
    id: 'underwater-halogen-lamp', category: 'weird', emoji: '💡', image: 'photos/AN2975-210x214.jpg', price: 399,
    name: { en: 'Underwater halogen lamp', no: 'Undervanns-halogenlampe' },
    description: { en: 'A green halogen lamp for ponds and tanks. Lights up the depths without lighting up the bill.', no: 'En grønn halogenlampe for dammer og akvarier. Lyser opp dypet uten å lyse opp strømregningen.' },
    specs: { power: '50 W', voltage: '12 V', cable: '5 m', waterproof: 'IP68' },
  },
  {
    id: 'android-tv-box', category: 'weird', emoji: '📺', image: 'photos/ANDROID.6-2-301x301.jpg', price: 899,
    name: { en: 'Android 6 TV box', no: 'Android 6 TV-boks' },
    description: { en: 'A small black box that turns any TV into a smart TV, complete with a small black remote.', no: 'En liten svart boks som gjør enhver TV om til en smart-TV, komplett med en liten svart fjernkontroll.' },
    specs: { os: 'Android 6', storage: '8 GB', ram: '1 GB', hdmi: '4K' },
  },
  {
    id: 'aquarium-40cm', category: 'weird', emoji: '🐠', image: 'photos/AQUArie.B1003208056-223x223.jpg', price: 899,
    name: { en: '40 cm aquarium', no: '40 cm akvarium' },
    description: { en: 'A compact glass tank with a built-in filter and a background already fitted. Just add water.', no: 'Et kompakt glassakvarium med innebygd filter og bakgrunn allerede montert. Bare tilsett vann.' },
    specs: { length: '40 cm', volume: '25 L', filter: 'Built-in', light: 'LED' },
  },
  {
    id: 'aquarium-picture-frame', category: 'weird', emoji: '🖼️', image: 'photos/AQUARIUM.B1003208081-436x436.jpg', price: 149,
    name: { en: 'Framed aquarium picture', no: 'Akvariebilde i ramme' },
    description: { en: 'A printed aquarium scene in a black frame. All the calm, none of the water changes.', no: 'En trykt akvariescene i svart ramme. All roen, ingen vannbytter.' },
    specs: { size: '30 × 20 cm', frame: 'Black', material: 'Paper' },
  },
  {
    id: 'aquarium-background-hawaii', category: 'weird', emoji: '🌺', image: 'photos/AQUARIUM.blueHawaii-1300x865.jpg', price: 199,
    name: { en: 'Aquarium background, Blue Hawaii', no: 'Akvariebakgrunn, Blue Hawaii' },
    description: { en: 'A vivid blue Hawaiian reef backdrop. Your goldfish will never know the difference.', no: 'En livlig blå Hawaii-revbakgrunn. Gullfisken din vil aldri merke forskjellen.' },
    specs: { size: '100 × 60 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-green-stone', category: 'weird', emoji: '🌿', image: 'photos/AQUARIUM.greenplantandwhitestone-1250x832.jpg', price: 199,
    name: { en: 'Aquarium background, green stone', no: 'Akvariebakgrunn, grønn stein' },
    description: { en: 'Green plants and pale stones in soft light. Very calming, even before the fish arrive.', no: 'Grønne planter og lyse steiner i mykt lys. Svært beroligende, selv før fiskene kommer.' },
    specs: { size: '100 × 60 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-waterfall', category: 'weird', emoji: '💧', image: 'photos/AQUARIUM.waterinfall-1250x832.jpg', price: 199,
    name: { en: 'Aquarium background, waterfall', no: 'Akvariebakgrunn, foss' },
    description: { en: 'A green underwater waterfall scene. It does not actually flow, which is good for the floor.', no: 'En grønn undervannsfoss. Den renner ikke på ekte, noe gulvet setter pris på.' },
    specs: { size: '100 × 60 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-yellow-frame', category: 'weird', emoji: '🟡', image: 'photos/AQuarium.200751420575359-377x312.jpg', price: 199,
    name: { en: 'Aquarium background, yellow frame', no: 'Akvariebakgrunn, gul ramme' },
    description: { en: 'A bright reef backdrop mounted in a yellow frame. Subtle it is not.', no: 'En fargerik revbakgrunn montert i gul ramme. Diskret er den ikke.' },
    specs: { size: '50 × 35 cm', frame: 'Yellow', material: 'PVC' },
  },
  {
    id: 'aquarium-background-green', category: 'weird', emoji: '🌿', image: 'photos/Aquarium.2007414165828497-392x226.jpg', price: 149,
    name: { en: 'Aquarium background, green tank', no: 'Akvariebakgrunn, grønt kar' },
    description: { en: 'A soft green planted backdrop for smaller tanks. Instant depth for very little money.', no: 'En myk grønn plantebakgrunn for mindre kar. Umiddelbar dybde for svært lite penger.' },
    specs: { size: '50 × 30 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'aquarium-background-blue', category: 'weird', emoji: '🐟', image: 'photos/Aquarium.200741615520656-269x269.jpg', price: 149,
    name: { en: 'Aquarium background, blue reef', no: 'Akvariebakgrunn, blått rev' },
    description: { en: 'A deep blue reef background that makes small fish look like they have a big world.', no: 'En dyphlå revbakgrunn som får små fisk til å se ut som de har en stor verden.' },
    specs: { size: '50 × 30 cm', material: 'PVC', finish: 'Waterproof' },
  },
  {
    id: 'battery-12v-50ah', category: 'weird', emoji: '🔋', image: 'photos/BATERI-2.multipower-mp50-12c-232x251.jpg', price: 1490,
    name: { en: 'Multipower 12 V 50 Ah battery', no: 'Multipower 12 V 50 Ah batteri' },
    description: { en: 'A big sealed battery for boats, cabins and solar setups. Heavy, dependable and fully charged.', no: 'Et stort forseglet batteri for båter, hytter og soloppsett. Tungt, pålitelig og fulladet.' },
    specs: { voltage: '12 V', capacity: '50 Ah', type: 'AGM', weight: '16 kg' },
  },
  {
    id: 'disney-cars-poster', category: 'weird', emoji: '🏁', image: 'photos/Bil-disney-plakat-3.scan1-410x569.jpg', price: 99,
    name: { en: 'Disney Cars poster', no: 'Disney Cars-plakat' },
    description: { en: 'A poster of Lightning McQueen and the gang. Guaranteed to brighten a child\'s wall.', no: 'En plakat av Lightning McQueen og gjengen. Garantert å lyse opp en barnevegg.' },
    specs: { size: '50 × 70 cm', paper: 'Glossy', motif: 'Cars' },
  },
  {
    id: 'digital-photo-frame-7', category: 'weird', emoji: '🖼️', image: 'photos/Billed-Ramme-ny1.IMG_0600-685x514.jpg', price: 499,
    name: { en: '7-inch digital photo frame', no: '7-tommers digital fotoramme' },
    description: { en: 'A digital frame that cycles through family photos. The modern equivalent of a crowded mantelpiece.', no: 'En digital ramme som viser familiebilder på repeat. Den moderne versjonen av en overfylt peishylle.' },
    specs: { display: '7"', storage: 'SD / USB', resolution: '800 × 480', power: 'Mains' },
  },
  {
    id: 'digital-photo-frame-10', category: 'weird', emoji: '🖼️', image: 'photos/Billed-Ramme-ny2.IMG_1313-913x721.jpg', price: 699,
    name: { en: '10-inch digital photo frame', no: '10-tommers digital fotoramme' },
    description: { en: 'A larger digital frame with a remote control, because walking over to change the photo is too much.', no: 'En større digital ramme med fjernkontroll, fordi det å gå bort for å bytte bilde er for mye.' },
    specs: { display: '10"', remote: 'Yes', storage: 'SD / USB', resolution: '1024 × 600' },
  },
  {
    id: 'bugs-bunny-phone', category: 'weird', emoji: '☎️', image: 'photos/Bugs-bunny.tel.QF083-PIP-314x400.jpg', price: 399,
    name: { en: 'Bugs Bunny telephone', no: 'Bugs Bunny-telefon' },
    description: { en: 'A landline shaped like Bugs Bunny. Answers the phone with considerably more attitude.', no: 'En fasttelefon formet som Bugs Bunny. Svarer på telefonen med betydelig mer holdning.' },
    specs: { type: 'Landline', cord: 'Coiled', power: 'Mains', motif: 'Bugs Bunny' },
  },
  {
    id: 'frog-terrarium', category: 'weird', emoji: '🐸', image: 'photos/Discovery-frog.669903_xl-426x356.jpg', price: 499,
    name: { en: 'Frog terrarium', no: 'Frosketerrarium' },
    description: { en: 'A round terrarium with a lid and a small pond base, ready for a very small amphibian.', no: 'Et rundt terrarium med lokk og liten dam-base, klar for et svært lite amfibium.' },
    specs: { diameter: '30 cm', material: 'Plastic', lid: 'Vented' },
  },
  {
    id: 'white-day-cruiser', category: 'weird', emoji: '⛵', image: 'photos/Dscf0080-650x520.jpg', price: 189000,
    name: { en: 'White day cruiser', no: 'Hvit daycruiser' },
    description: { en: 'A white day cruiser for fjord trips, sunny lunches and pretending to know about boats.', no: 'En hvit daycruiser for fjordturer, solrike lunsjer og det å late som man kan båt.' },
    specs: { length: '5.5 m', seats: '5', engine: 'Outboard', year: '2004' },
  },
  {
    id: 'golf-trolley-bag', category: 'weird', emoji: '⛳', image: 'photos/EL-bag1.golf-trolley-1-335x251.jpg', price: 299,
    name: { en: 'Golf trolley bag', no: 'Golftrolley-bag' },
    description: { en: 'A black golf bag with pockets for tees, balls and the occasional sandwich.', no: 'En svart golfbag med lommer til tee, baller og den obligatoriske matpakka.' },
    specs: { pockets: '6', material: 'Nylon', straps: 'Double' },
  },
  {
    id: 'electric-water-scooter', category: 'weird', emoji: '🚤', image: 'photos/El-Boat-scooter1.Wheel-boat3-588x222.jpg', price: 2490,
    name: { en: 'Electric water scooter', no: 'Elektrisk vannscooter' },
    description: { en: 'A small electric water scooter for pools and calm lakes. Quiet, yellow and surprisingly quick.', no: 'En liten elektrisk vannscooter for basseng og rolige vann. Stille, gul og overraskende rask.' },
    specs: { power: '300 W', battery: '24 V', runtime: '45 min', maxload: '100 kg' },
  },
  {
    id: 'electric-golf-trolley', category: 'weird', emoji: '⛳', image: 'photos/El-bag2-golf-trolley-2-333x250.jpg', price: 1990,
    name: { en: 'Electric golf trolley', no: 'Elektrisk golftralle' },
    description: { en: 'A battery-powered golf trolley so you can save your energy for the actual golf.', no: 'En batteridrevet golftralle så du kan spare energien til selve golfen.' },
    specs: { power: '120 W', battery: '12 V', runtime: '18 holes', folds: 'Yes' },
  },
  {
    id: 'boat-trailer-wheel', category: 'weird', emoji: '🛞', image: 'photos/El-bat-hjul-bilde.Wheel-boat4-650x487.jpg', price: 690,
    name: { en: 'Boat trailer wheel', no: 'Båthengerhjul' },
    description: { en: 'A galvanised trailer wheel with a pneumatic tyre. Gets the boat to the water without drama.', no: 'Et galvanisert hengerhjul med luftdekk. Får båten til vannet uten dramatikk.' },
    specs: { diameter: '400 mm', tyre: 'Pneumatic', hub: '4 bolts', load: '350 kg' },
  },
  {
    id: 'inflatable-boat', category: 'weird', emoji: '🚤', image: 'photos/El-bat-under.Wheel-boat2-404x589.jpg', price: 8990,
    name: { en: 'Inflatable boat', no: 'Oppblåsbar båt' },
    description: { en: 'A folded inflatable boat with a solid transom for a small outboard or electric motor.', no: 'En sammenlagt oppblåsbar båt med solid akterspeil for en liten påhengs- eller elektromotor.' },
    specs: { length: '3.0 m', capacity: '4 people', material: 'PVC', maxload: '450 kg' },
  },
  {
    id: 'star-wars-figure-set', category: 'weird', emoji: '🌌', image: 'photos/Figur-starwars-6.HS87205lg-490x499.jpg', price: 399,
    name: { en: 'Star Wars figure set', no: 'Star Wars-figursett' },
    description: { en: 'A boxed set of Star Wars figures, including a cape that has seen things.', no: 'Et sett med Star Wars-figurer i eske, inkludert en kappe som har sett ting.' },
    specs: { pieces: '6', scale: '3.75"', box: 'Illustrated', age: '4+' },
  },
  {
    id: 'parabolic-spy-mic', category: 'weird', emoji: '🎤', image: 'photos/Gadget-spy-mic-stor.16361-268x200.jpg', price: 499,
    name: { en: 'Parabolic spy microphone', no: 'Parabolsk spionmikrofon' },
    description: { en: 'A directional microphone that picks up conversations across the garden. For journalism, obviously.', no: 'En retningsmikrofon som fanger samtaler tvers over hagen. For journalistikk, selvsagt.' },
    specs: { range: '50 m', pickup: 'Parabolic', output: '3.5 mm', power: '9 V' },
  },
  {
    id: 'online-games-portal', category: 'weird', emoji: '🎮', image: 'photos/Games.gameshots-373x381.jpg', price: null,
    name: { en: 'Online games portal', no: 'Nettspillportal' },
    description: { en: 'A portal with hundreds of small browser games. The screenshots promise more than the graphics deliver.', no: 'En portal med hundrevis av små nettspill. Skjermbildene lover mer enn grafikken holder.' },
    specs: { games: '500+', platform: 'Browser', price: 'Free' },
  },
  {
    id: 'spy-watch', category: 'weird', emoji: '⌚', image: 'photos/H3.navi_mk2_03-250x347.jpg', price: 399,
    name: { en: 'Spy wristwatch', no: 'Spionklokke' },
    description: { en: 'A chunky black watch that tells the time and, allegedly, records video. Mostly tells the time.', no: 'En kraftig svart klokke som viser tiden og angivelig tar opp video. Mest viser tiden.' },
    specs: { display: 'Analogue', storage: '4 GB', battery: 'USB', strap: 'Rubber' },
  },
  {
    id: 'spy-watch-two', category: 'weird', emoji: '⌚', image: 'photos/H3.visere.store.p6500d-237x391.jpg', price: 449,
    name: { en: 'Spy wristwatch, black', no: 'Spionklokke, svart' },
    description: { en: 'The black spy watch with a hidden camera lens and a strap that survives small explosions.', no: 'Den svarte spionklokken med skjult kameralinse og en reim som tåler små eksplosjoner.' },
    specs: { display: 'Analogue', camera: '720p', storage: '8 GB', strap: 'Rubber' },
  },
  {
    id: 'horse-race-game', category: 'weird', emoji: '🐴', image: 'photos/Horse-Race.vlarge.3411f-650x487.jpg', price: 399,
    name: { en: 'Horse race board game', no: 'Hesteløp-brettspill' },
    description: { en: 'A tabletop horse racing game with little jockeys and a lot of shouting. Family entertainment.', no: 'Et hesteløp-brettspill med små jockeyer og mye roping. Underholdning for hele familien.' },
    specs: { players: '2–4', age: '6+', pieces: '12', duration: '30 min' },
  },
  {
    id: 'ultrasonic-pest-repeller', category: 'weird', emoji: '🐭', image: 'photos/Izola.a1pro-pest_repeller-277x220.jpg', price: 249,
    name: { en: 'Ultrasonic pest repeller', no: 'Ultrasonisk skadedyrjager' },
    description: { en: 'A small white box that emits a sound only pests can hear. The cat remains unimpressed.', no: 'En liten hvit boks som sender ut lyd bare skadedyr hører. Katten er fortsatt uimponert.' },
    specs: { coverage: '80 m²', frequency: '22–45 kHz', power: '3 W', plug: 'EU' },
  },
  {
    id: 'lap-desk-cinema', category: 'weird', emoji: '🛋️', image: 'photos/Kino.pike-bord.Model.TPH-03.Portable.Cinema1-850x1203.jpg', price: 249,
    name: { en: 'Techwood lap desk cinema', no: 'Techwood kinobrett for fanget' },
    description: { en: 'A padded lap desk that turns a tablet into a personal cinema. Popcorn bowl not included.', no: 'Et polstret fangbrett som gjør et nettbrett om til en personlig kino. Popcornbollen følger ikke med.' },
    specs: { fits: 'Up to 10"', material: 'Foam', angle: 'Adjustable' },
  },
  {
    id: 'ansmann-battery-charger', category: 'weird', emoji: '🔋', image: 'photos/LADER-2.ansmann_acs_2-24-1_204-296x211.jpg', price: 399,
    name: { en: 'Ansmann battery charger', no: 'Ansmann batterilader' },
    description: { en: 'A smart charger for AA and AAA batteries, with a display that explains what it is doing.', no: 'En smart lader for AA- og AAA-batterier, med en skjerm som forklarer hva den gjør.' },
    specs: { slots: '4', chemistry: 'NiMH', display: 'LCD', voltage: '100–240 V' },
  },
  {
    id: 'led-flashlight', category: 'weird', emoji: '🔦', image: 'photos/LED.CVNY-G257-23-419x419.jpg', price: 199,
    name: { en: 'CREE LED flashlight', no: 'CREE LED-lommelykt' },
    description: { en: 'A compact CREE flashlight with a metal body and a beam that reaches the far end of the garden.', no: 'En kompakt CREE-lommelykt med metallkropp og en stråle som rekker til enden av hagen.' },
    specs: { power: '5 W', lumens: '400', battery: '18650', range: '150 m' },
  },
  {
    id: 'led-headlamp', category: 'weird', emoji: '🔦', image: 'photos/LED.CVNY-G257-24-266x266.jpg', price: 249,
    name: { en: 'CREE LED headlamp', no: 'CREE LED-hodelykt' },
    description: { en: 'A rechargeable headlamp with three brightness levels and a strap that fits over a hat.', no: 'En oppladbar hodelykt med tre styrkenivåer og en reim som passer over en lue.' },
    specs: { lumens: '300', modes: '3', battery: 'Rechargeable', waterproof: 'IPX4' },
  },
  {
    id: 'led-flashlight-kit', category: 'weird', emoji: '🔦', image: 'photos/LED.CVNY-G257-4-408x408.jpg', price: 299,
    name: { en: 'LED flashlight kit', no: 'LED-lommelyktsett' },
    description: { en: 'A flashlight with charger, battery and a belt holster. Everything except the dark.', no: 'En lommelykt med lader, batteri og beltehylster. Alt unntatt mørket.' },
    specs: { lumens: '500', battery: '18650', charger: 'Included', holster: 'Yes' },
  },
  {
    id: 'led-strip-light', category: 'weird', emoji: '💡', image: 'photos/LEDen.free-shipping-28c12856891e14aca308a9648f4760e1-462x204.jpg', price: 149,
    name: { en: 'LED strip light', no: 'LED-lyslist' },
    description: { en: 'A flexible LED strip with a battery box. Adds mood lighting to shelves, bikes and sheds.', no: 'En fleksibel LED-list med batteriboks. Gir stemningslys på hyller, sykler og i boder.' },
    specs: { length: '1 m', leds: '30', power: '3 × AA', colour: 'White' },
  },
  {
    id: 'spotlight-in-box', category: 'weird', emoji: '🔦', image: 'photos/LYKT.DSCN9135-431x323.jpg', price: 349,
    name: { en: 'Rechargeable spotlight', no: 'Oppladbar spotlight' },
    description: { en: 'A bright rechargeable spotlight in a box, ready for the cabin, the boat or the fuse box.', no: 'En kraftig oppladbar spotlight i eske, klar for hytta, båten eller sikringsskapet.' },
    specs: { lumens: '1000', battery: 'Rechargeable', runtime: '4 h', range: '300 m' },
  },
  {
    id: 'handheld-spotlight', category: 'weird', emoji: '🔦', image: 'photos/LYKT.DSCN9186-441x331.jpg', price: 299,
    name: { en: 'Handheld spotlight', no: 'Håndholdt spotlight' },
    description: { en: 'A handheld spotlight with a pistol grip and a wide, even beam. Excellent for finding the tent.', no: 'En håndholdt spotlight med pistolgrep og en bred, jevn stråle. Utmerket for å finne teltet.' },
    specs: { lumens: '800', battery: 'Rechargeable', runtime: '5 h', grip: 'Pistol' },
  },
  {
    id: 'large-spotlight', category: 'weird', emoji: '🔦', image: 'photos/LYKT.TL1079-1-625x469.jpg', price: 599,
    name: { en: 'Large rechargeable spotlight', no: 'Stor oppladbar spotlight' },
    description: { en: 'A big lantern-style spotlight with a carry handle and enough light to illuminate a whole driveway.', no: 'En stor lykt med bærehåndtak og nok lys til å lyse opp en hel innkjørsel.' },
    specs: { lumens: '2000', battery: 'Rechargeable', runtime: '6 h', range: '500 m' },
  },
  {
    id: 'large-spotlight-two', category: 'weird', emoji: '🔦', image: 'photos/LYKT.TL1079-3-625x469.jpg', price: 599,
    name: { en: 'Large spotlight, side view', no: 'Stor spotlight, side' },
    description: { en: 'The same big spotlight from the side, showing the charging port and the sturdy stand.', no: 'Samme store spotlight fra siden, med ladeport og solid stativ.' },
    specs: { lumens: '2000', battery: 'Rechargeable', runtime: '6 h', stand: 'Foldable' },
  },
  {
    id: 'searchlight-10-mile', category: 'weird', emoji: '🔦', image: 'photos/Lykt-stor-10mil.2940RF-521x391.jpg', price: 899,
    name: { en: '10-mile searchlight', no: '10-mils søkelys' },
    description: { en: 'A serious searchlight with a range measured in miles. Point it at the sky and wave.', no: 'Et seriøst søkelys med rekkevidde målt i mil. Pek det mot himmelen og vink.' },
    specs: { range: '10 miles', lumens: '3000', battery: '12 V', weight: '2.4 kg' },
  },
  {
    id: 'mp3-player-m40g', category: 'weird', emoji: '🎵', image: 'photos/MP3-m40G-1.dgv4002-850x725.jpg', price: 499,
    name: { en: 'MP3 player 40 GB', no: 'MP3-spiller 40 GB' },
    description: { en: 'A 40 GB MP3 player with a colour screen and a scroll wheel. A thousand songs in your pocket.', no: 'En 40 GB MP3-spiller med fargeskjerm og hjul. Tusen sanger i lomma.' },
    specs: { storage: '40 GB', display: '2.5"', battery: '12 h', format: 'MP3/WMA' },
  },
  {
    id: 'wireless-micro-camera', category: 'weird', emoji: '📷', image: 'photos/Micro-Camera.total.801wireless-650x866.jpg', price: 899,
    name: { en: 'Wireless micro camera set', no: 'Trådløst mikrokamera-sett' },
    description: { en: 'A tiny wireless camera with receiver, cables and a manual full of warnings.', no: 'Et bitte lite trådløst kamera med mottaker, kabler og en manual full av advarsler.' },
    specs: { resolution: '640 × 480', range: '30 m', battery: 'Rechargeable', receiver: 'Included' },
  },
  {
    id: 'multi-player-media', category: 'weird', emoji: '🎬', image: 'photos/Multi-Player.4.dgv009a_22-359x298.jpg', price: 599,
    name: { en: 'Multi-player media box', no: 'Multi-player medieboks' },
    description: { en: 'A media box that plays almost any file from a USB stick or memory card. Connections everywhere.', no: 'En medieboks som spiller nesten alle filer fra USB-pinne eller minnekort. Kontakter overalt.' },
    specs: { storage: 'SD / USB', output: 'HDMI / AV', formats: 'MP4, AVI, MP3', power: 'Mains' },
  },
  {
    id: 'chinavasion-projector', category: 'weird', emoji: '📽️', image: 'photos/PROjector2.chinavasion-CVIK-E26-11-657x432.jpg', price: 1990,
    name: { en: 'Chinavasion projector', no: 'Chinavasion-projektor' },
    description: { en: 'A compact projector for film nights, presentations and very large spreadsheet reviews.', no: 'En kompakt projektor for filmkvelder, presentasjoner og svært store regnearkgjennomganger.' },
    specs: { resolution: '800 × 480', brightness: '1200 lm', input: 'HDMI / USB', lamp: 'LED' },
  },
  {
    id: 'rousseau-picture-tile', category: 'weird', emoji: '🖼️', image: 'photos/Picture-Tiles.Rousseau_Jean-Jacques_Bridge_In_Sevres-558x447.jpg', price: 399,
    name: { en: 'Rousseau picture tile', no: 'Rousseau-bildflis' },
    description: { en: 'A decorative tile printed with Rousseau\'s Bridge in Sevres. Adds instant museum to a kitchen wall.', no: 'En dekorativ flis trykt med Rousseaus bro i Sèvres. Gir umiddelbar museumfølelse på kjøkkenveggen.' },
    specs: { size: '30 × 30 cm', material: 'Ceramic', motif: 'Rousseau' },
  },
  {
    id: 'camera-backpack-harness', category: 'weird', emoji: '🎒', image: 'photos/RYGSEKK.IMG_1080-571x321.jpg', price: 399,
    name: { en: 'Camera backpack harness', no: 'Kamera-ryggsekksele' },
    description: { en: 'A padded harness that keeps a camera within reach on long walks. Straps for everything.', no: 'En polstret sele som holder kameraet innen rekkevidde på lange turer. Reimer til alt.' },
    specs: { material: 'Nylon', padding: 'Yes', fits: 'DSLR', pockets: '2' },
  },
  {
    id: 'gps-tracker-kit', category: 'weird', emoji: '📍', image: 'photos/RYGSEKK4.ProductMgmtResourceServlet-295x295.jpg', price: 899,
    name: { en: 'GPS tracker kit', no: 'GPS-sporingssett' },
    description: { en: 'A GPS tracker with mount, cables and a display unit. Keep an eye on the bike, the boat or the teenager.', no: 'En GPS-sporer med feste, kabler og display. Hold øye med sykkelen, båten eller tenåringen.' },
    specs: { gps: 'Yes', gsm: 'Quad-band', battery: 'Rechargeable', mount: 'Handlebar' },
  },
  {
    id: 'safe-drive-breathalyzer', category: 'weird', emoji: '🍺', image: 'photos/Safe-Drive_2-337x275.jpg', price: 349,
    name: { en: 'Safe Drive breathalyzer', no: 'Safe Drive alkotester' },
    description: { en: 'A keyring breathalyzer that gives a reading before you make a bad decision.', no: 'En alkotester på nøkkelringen som gir en måling før du tar en dårlig beslutning.' },
    specs: { sensor: 'Semiconductor', range: '0–1.0 ‰', power: '2 × AAA', size: 'Keyring' },
  },
  {
    id: 'alarm-kit', category: 'weird', emoji: '🚨', image: 'photos/Smart-sv_malarm-uv.32210dgmbig-274x280.jpg', price: 199,
    name: { en: 'DIY alarm kit', no: 'DIY-alarmsett' },
    description: { en: 'A motion alarm kit you solder yourself. Beeps when someone approaches, and when you finish soldering.', no: 'Et bevegelsesalarmeringssett du lodder selv. Piper når noen nærmer seg, og når du er ferdig med loddingen.' },
    specs: { sensor: 'PIR', range: '6 m', voltage: '9 V', assembly: 'Soldering' },
  },
  {
    id: 'camera-sunglasses', category: 'weird', emoji: '🕶️', image: 'photos/Solbriller.Digital.Sunglasses-818x555.jpg', price: 799,
    name: { en: 'Camera sunglasses', no: 'Kamera-solbriller' },
    description: { en: 'Sunglasses with a built-in camera in the bridge. Records the beach in 720p, subtly.', no: 'Solbriller med innebygd kamera i nesebroen. Filmer stranden i 720p, diskret.' },
    specs: { camera: '720p', storage: '4 GB', battery: 'Rechargeable', lens: 'UV400' },
  },
  {
    id: 'metal-detector', category: 'weird', emoji: '🪙', image: 'photos/Sports-20-metal-detector.p762132reg-214x214.jpg', price: 1290,
    name: { en: 'Metal detector', no: 'Metallsøker' },
    description: { en: 'An adjustable metal detector for coins, relics and a truly impressive collection of bottle caps.', no: 'En justerbar metallsøker for mynter, oldsaker og en imponerende samling flaskekorker.' },
    specs: { depth: '20 cm', coil: '20 cm', headphone: '3.5 mm', battery: '9 V' },
  },
  {
    id: 'walkie-talkie', category: 'weird', emoji: '📻', image: 'photos/Sports-20-motorola-1st.p671055reg-108x108.jpg', price: 249,
    name: { en: 'Motorola walkie-talkie', no: 'Motorola walkie-talkie' },
    description: { en: 'A single Motorola walkie-talkie with a belt clip. Buy two if you want someone to talk to.', no: 'En enkelt Motorola walkie-talkie med belteklips. Kjøp to hvis du vil ha noen å snakke med.' },
    specs: { range: '3 km', channels: '8', battery: 'AA', clip: 'Belt' },
  },
  {
    id: 'paintball-marker', category: 'weird', emoji: '🎯', image: 'photos/Sports-20-paintbal-kit.p447952_mont_reg-93x93.jpg', price: 1290,
    name: { en: 'Paintball marker', no: 'Paintball-markør' },
    description: { en: 'A paintball marker with hopper and barrel. Protective gear strongly recommended, and not just for others.', no: 'En paintball-markør med hopper og løp. Verneutstyr anbefales sterkt, og ikke bare for andre.' },
    specs: { calibre: '.68', tank: 'CO₂', hopper: '200 balls', mode: 'Semi' },
  },
  {
    id: 'radar-speed-gun', category: 'weird', emoji: '📡', image: 'photos/Sports-20-radarv1.p720394reg-214x214.jpg', price: 1990,
    name: { en: 'Radar speed gun', no: 'Radarhastighetsmåler' },
    description: { en: 'A handheld radar gun for measuring football shots, RC cars and suspiciously fast cyclists.', no: 'En håndholdt radar for å måle fotballskudd, RC-biler og mistenkelig raske syklister.' },
    specs: { range: '300 m', speed: '10–300 km/h', display: 'LCD', battery: '9 V' },
  },
  {
    id: 'radar-speed-gun-two', category: 'weird', emoji: '📡', image: 'photos/Sports-20-radarv2.p720432reg-209x209.jpg', price: 2490,
    name: { en: 'Radar speed gun, pro', no: 'Radarhastighetsmåler, proff' },
    description: { en: 'A larger radar gun with a pistol grip and a tripod mount. For the serious speed enthusiast.', no: 'En større radar med pistolgrep og stativfeste. For den seriøse fartentusiasten.' },
    specs: { range: '500 m', speed: '5–400 km/h', mount: 'Tripod', battery: '9 V' },
  },
  {
    id: 'walkie-talkie-pair', category: 'weird', emoji: '📻', image: 'photos/Sports-20-motorola-wt.pG01-1001481reg-182x182.jpg', price: 449,
    name: { en: 'Motorola walkie-talkie pair', no: 'Motorola walkie-talkie-par' },
    description: { en: 'Two Motorola walkie-talkies with belt clips and a charging dock. Communication restored.', no: 'To Motorola walkie-talkier med belteklips og ladestasjon. Kommunikasjonen er gjenopprettet.' },
    specs: { range: '5 km', channels: '16', battery: 'Rechargeable', pieces: '2' },
  },
  {
    id: 'headrest-dvd-player', category: 'weird', emoji: '📀', image: 'photos/TFT-LCD-DVD.liten.8.series.bags-207x207.jpg', price: 999,
    name: { en: 'Headrest DVD player', no: 'Nakkestøtte-DVD-spiller' },
    description: { en: 'A DVD player that straps to the back of a headrest. Peace in the back seat, at last.', no: 'En DVD-spiller som festes på baksiden av nakkestøtten. Endelig fred i baksetet.' },
    specs: { display: '7"', format: 'DVD / USB', mount: 'Headrest', remote: 'Yes' },
  },
  {
    id: 'portable-dvd-player', category: 'weird', emoji: '📀', image: 'photos/TFT-LCD-DVD.stor.9080-576-271x200.jpg', price: 1290,
    name: { en: 'Portable DVD player', no: 'Bærbar DVD-spiller' },
    description: { en: 'A portable DVD player with a swivel screen and a bag full of cables for every occasion.', no: 'En bærbar DVD-spiller med vribar skjerm og en veske full av kabler til alle anledninger.' },
    specs: { display: '9"', format: 'DVD / SD', battery: '3 h', case: 'Included' },
  },
  {
    id: 'headrest-dvd-pair', category: 'weird', emoji: '📀', image: 'photos/TFT-LCD-DVD.stor.Img_0010-686x514.jpg', price: 1490,
    name: { en: 'Headrest DVD pair', no: 'Nakkestøtte-DVD-par' },
    description: { en: 'Two headrest screens for the car, so both children can watch different films and argue anyway.', no: 'To nakkestøtteskjermer til bilen, så begge barna kan se hver sin film og krangle likevel.' },
    specs: { displays: '2 × 7"', format: 'DVD / USB', mount: 'Headrest', pieces: '2' },
  },
  {
    id: 'tv-32-inch', category: 'weird', emoji: '📺', image: 'photos/TV-42.stort-sort.32LW10-817x572.jpg', price: 2990,
    name: { en: '32-inch TV', no: '32-tommers TV' },
    description: { en: 'A black 32-inch TV with a built-in tuner and a picture that is perfectly fine for the cabin.', no: 'En svart 32-tommers TV med innebygd tuner og et bilde som er helt greit for hytta.' },
    specs: { size: '32"', resolution: '1366 × 768', hdmi: '2', tuner: 'DVB-T' },
  },
  {
    id: 'tv-42-inch', category: 'weird', emoji: '📺', image: 'photos/TV-42.stort.26LW10-42LW10-908x636.jpg', price: 4990,
    name: { en: '42-inch TV', no: '42-tommers TV' },
    description: { en: 'A 42-inch TV with full HD and a slim bezel. Big enough for film night, small enough for the wall.', no: 'En 42-tommers TV med full HD og smal ramme. Stor nok for filmkveld, liten nok for veggen.' },
    specs: { size: '42"', resolution: '1920 × 1080', hdmi: '3', tuner: 'DVB-T/C' },
  },
  {
    id: 'tv-remote-control', category: 'weird', emoji: '📱', image: 'photos/TV-Fjernkontroll-blister.stor.20-b6a-card2-750x1046.jpg', price: 149,
    name: { en: 'TV remote control', no: 'TV-fjernkontroll' },
    description: { en: 'A universal replacement remote in a blister pack. The buttons are where you expect them.', no: 'En universell erstatningsfjernkontroll i blisterpakning. Knappene er der du forventer.' },
    specs: { buttons: '45', compatible: 'Universal', battery: '2 × AAA', code: 'Manual' },
  },
  {
    id: 'tv-glasses', category: 'weird', emoji: '🕶️', image: 'photos/TV-briller.PD635-314x236.jpg', price: 1990,
    name: { en: 'Personal TV glasses', no: 'Personlige TV-briller' },
    description: { en: 'Glasses with two tiny screens inside. Watch TV while pretending to listen to the conversation.', no: 'Briller med to bittesmå skjermer inni. Se TV mens du later som du hører på samtalen.' },
    specs: { displays: '2 × 0.3"', input: 'AV', battery: '4 h', weight: '85 g' },
  },
  {
    id: 'tv-dvd-connections', category: 'weird', emoji: '📺', image: 'photos/TV-med-DVD.Tilkoblinger.2027-353x235.jpg', price: 2490,
    name: { en: 'TV with DVD, connection panel', no: 'TV med DVD, tilkoblinger' },
    description: { en: 'A TV with a built-in DVD player, shown from the back where all the cables live.', no: 'En TV med innebygd DVD-spiller, vist bakfra der alle kablene bor.' },
    specs: { size: '26"', dvd: 'Built-in', hdmi: '2', scart: '1' },
  },
  {
    id: 'tv-with-dvd', category: 'weird', emoji: '📺', image: 'photos/TV-med-DVD1.20.20side.20redigert-378x411.jpg', price: 1990,
    name: { en: 'TV with built-in DVD', no: 'TV med innebygd DVD' },
    description: { en: 'A compact TV with a DVD slot on the side. One remote, one cable, one happy cabin.', no: 'En kompakt TV med DVD-sprekk på siden. Én fjernkontroll, én kabel, én glad hytte.' },
    specs: { size: '20"', dvd: 'Built-in', resolution: '1366 × 768', hdmi: '1' },
  },
  {
    id: 'usb-cable', category: 'weird', emoji: '🔌', image: 'photos/USB-kabel-342x221.jpg', price: 49,
    name: { en: 'USB cable', no: 'USB-kabel' },
    description: { en: 'A black USB cable for charging and data. The one that always disappears.', no: 'En svart USB-kabel for lading og data. Den som alltid forsvinner.' },
    specs: { length: '1.8 m', type: 'USB-A', connector: 'Mini-USB' },
  },
  {
    id: 'v-go-flyer', category: 'weird', emoji: '🚁', image: 'photos/V-GOflyerN1-1350x924.jpg', price: 1990,
    name: { en: 'V-Go flyer', no: 'V-Go flyger' },
    description: { en: 'A personal flying machine concept in poster form. Hopes not included, but encouraged.', no: 'Et personlig flyvemaskin-konsept i plakatformat. Forhåpninger følger ikke med, men oppmuntres.' },
    specs: { format: 'A2', topic: 'VTOL', language: { en: 'English', no: 'Engelsk' } },
  },
  {
    id: 'zeno-toy-figure', category: 'weird', emoji: '🧸', image: 'photos/ZENO-1-344x417.jpg', price: 149,
    name: { en: 'Zeno toy figure', no: 'Zeno-lekefigur' },
    description: { en: 'A small Zeno figure with a friendly face. The box is almost as big as the toy.', no: 'En liten Zeno-figur med et vennlig ansikt. Esken er nesten like stor som leketøyet.' },
    specs: { height: '10 cm', material: 'Plastic', age: '3+' },
  },
  {
    id: 'willy-comic', category: 'weird', emoji: '📚', image: 'photos/willy-20-riktig-338x228.jpg', price: 149,
    name: { en: 'Willy comic book', no: 'Willy-tegneserie' },
    description: { en: 'A Willy adventure comic about a rocket trip. Classic Norwegian reading for adventurous children.', no: 'Et Willy-eventyr om en rakettreise. Klassisk norsk lesning for eventyrlystne barn.' },
    specs: { pages: '48', language: { en: 'Norwegian', no: 'Norsk' }, format: 'Hardcover' },
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
