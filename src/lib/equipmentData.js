export const categories = [
  { id: 'boom', label: 'Boom Lifts', icon: '🏗️', desc: 'Articulating & telescopic — reach up to 185 ft' },
  { id: 'scissor', label: 'Scissor Lifts', icon: '🔧', desc: 'Electric & diesel — indoor & rough terrain' },
  { id: 'telehandler', label: 'Telehandlers', icon: '🚜', desc: 'Versatile material handling, up to 9,000 lb' },
  { id: 'forklift', label: 'Forklifts', icon: '⚙️', desc: 'Electric, propane & diesel — 3,000–36,000 lb' },
];

export const equipment = [
  // BOOM LIFTS
  {
    id: 'e300ajp', cat: 'boom', model: 'JLG E300AJP', name: 'Electric Articulating Boom', fuel: 'Electric',
    height: '29 ft 5 in', reach: '20 ft 1 in', capacity: '500 lb',
    dailyRate: 320, weeklyRate: 890, monthlyRate: 2400,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/60452-source/e300ajp-hero',
    badge: 'Indoor Safe', available: true,
  },
  {
    id: 'e450aj', cat: 'boom', model: 'JLG E450AJ', name: 'Electric Articulating Boom', fuel: 'Electric',
    height: '45 ft', reach: '22 ft 5 in', capacity: '500 lb',
    dailyRate: 390, weeklyRate: 1100, monthlyRate: 2900,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/139724-source/e450aj-gallery',
    badge: 'Popular', available: true,
  },
  {
    id: '450aj', cat: 'boom', model: 'JLG 450AJ', name: 'Diesel Articulating Boom', fuel: 'Diesel',
    height: '45 ft', reach: '25 ft', capacity: '500 lb',
    dailyRate: 440, weeklyRate: 1250, monthlyRate: 3200,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7516-source/450aj-hero',
    badge: null, available: true,
  },
  {
    id: '800aj', cat: 'boom', model: 'JLG 800AJ', name: 'Diesel Articulating Boom', fuel: 'Diesel',
    height: '80 ft', reach: '50 ft', capacity: '500 lb',
    dailyRate: 680, weeklyRate: 1900, monthlyRate: 4800,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7528-source/800aj-hero',
    badge: 'High Reach', available: true,
  },
  {
    id: '600s', cat: 'boom', model: 'JLG 600S', name: 'Diesel Telescopic Boom', fuel: 'Diesel',
    height: '60 ft', reach: '49 ft', capacity: '500 lb',
    dailyRate: 520, weeklyRate: 1450, monthlyRate: 3800,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7551-source/600s-hero',
    badge: null, available: true,
  },
  {
    id: '1850sj', cat: 'boom', model: 'JLG 1850SJ', name: 'Ultra-High Telescopic Boom', fuel: 'Diesel',
    height: '185 ft', reach: '80 ft', capacity: '500 lb',
    dailyRate: 1800, weeklyRate: 5200, monthlyRate: 13500,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/77200-source/1850sj-hero',
    badge: 'Extreme Height', available: true,
  },
  // SCISSOR LIFTS
  {
    id: 'es2646', cat: 'scissor', model: 'JLG ES2646', name: 'Electric Scissor Lift', fuel: 'Electric',
    height: '26 ft', reach: 'N/A', capacity: '500 lb',
    dailyRate: 195, weeklyRate: 540, monthlyRate: 1400,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7578-source/es2646-hero',
    badge: 'Best Value', available: true,
  },
  {
    id: '3246es', cat: 'scissor', model: 'JLG 3246ES', name: 'Electric Scissor Lift', fuel: 'Electric',
    height: '32 ft', reach: 'N/A', capacity: '500 lb',
    dailyRate: 225, weeklyRate: 625, monthlyRate: 1650,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7580-source/3246es-hero',
    badge: null, available: true,
  },
  {
    id: '4069le', cat: 'scissor', model: 'JLG 4069LE', name: 'Electric Rough-Terrain Scissor', fuel: 'Electric',
    height: '40 ft', reach: 'N/A', capacity: '1,500 lb',
    dailyRate: 340, weeklyRate: 950, monthlyRate: 2500,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7594-source/4069le-hero',
    badge: 'Rough Terrain', available: true,
  },
  // TELEHANDLERS
  {
    id: '6042', cat: 'telehandler', model: 'JLG SkyTrak 6042', name: 'Telehandler', fuel: 'Diesel',
    height: '42 ft', reach: '27 ft 11 in', capacity: '6,000 lb',
    dailyRate: 490, weeklyRate: 1380, monthlyRate: 3500,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7612-source/6042-hero',
    badge: 'Popular', available: true,
  },
  {
    id: 'g9-43a', cat: 'telehandler', model: 'JLG G9-43A', name: 'Heavy-Duty Telehandler', fuel: 'Diesel',
    height: '43 ft', reach: '27 ft', capacity: '9,000 lb',
    dailyRate: 560, weeklyRate: 1580, monthlyRate: 4100,
    img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/133612-source/g9-43a-hero',
    badge: 'Heavy Lift', available: true,
  },
  // FORKLIFTS
  {
    id: 'fl-elec-5k', cat: 'forklift', model: 'Toyota 8FBE18', name: 'Electric Sit-Down Forklift', fuel: 'Electric',
    height: '15 ft', reach: 'N/A', capacity: '4,000 lb',
    dailyRate: 165, weeklyRate: 460, monthlyRate: 1200,
    img: 'https://www.toyota-forklifts.us/siteassets/products/forklift/electric-pneumatic-tire-forklift/3-wheel-electric/toyota-8fbct-electric-forklift.jpg',
    badge: 'Indoor Safe', available: true,
  },
  {
    id: 'fl-prop-8k', cat: 'forklift', model: 'Toyota 8FGU30', name: 'LPG Cushion Forklift', fuel: 'Propane',
    height: '15 ft', reach: 'N/A', capacity: '6,000 lb',
    dailyRate: 185, weeklyRate: 510, monthlyRate: 1350,
    img: 'https://www.toyota-forklifts.us/siteassets/products/forklift/ic-pneumatic-tire-forklift/large-ic-pneumatic/toyota-large-ic-pneumatic-tire-forklift-8fgu.jpg',
    badge: null, available: true,
  },
  {
    id: 'fl-diesel-heavy', cat: 'forklift', model: 'Hyster H80FT', name: 'Diesel Pneumatic Forklift', fuel: 'Diesel',
    height: '17 ft', reach: 'N/A', capacity: '8,000 lb',
    dailyRate: 240, weeklyRate: 670, monthlyRate: 1750,
    img: 'https://www.hyster.com/globalassets/na/products/big-trucks/h-80-100-120ft/hyster-h80ft-forklift.png',
    badge: 'Heavy Duty', available: false,
  },
  {
    id: 'fl-reach', cat: 'forklift', model: 'Crown RR 5020', name: 'Electric Reach Truck', fuel: 'Electric',
    height: '30 ft', reach: 'N/A', capacity: '3,500 lb',
    dailyRate: 210, weeklyRate: 580, monthlyRate: 1500,
    img: 'https://www.crown.com/content/dam/crown/en/products/rr5020-reach-truck.png',
    badge: 'Narrow Aisle', available: true,
  },
];

export const fuelBadge = {
  Electric: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Diesel:   'bg-slate-100 text-slate-600 border-slate-200',
  Propane:  'bg-blue-50 text-blue-700 border-blue-200',
  Hybrid:   'bg-teal-50 text-teal-700 border-teal-200',
};