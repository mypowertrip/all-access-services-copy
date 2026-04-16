import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const categories = ['Boom Lifts', 'Scissor Lifts', 'Telehandlers'];

const equipment = {
  'Boom Lifts': [
    { model: 'JLG E300AJP', name: 'Electric Articulating Boom', ht: '29 ft 5 in', reach: '20 ft 1 in', cap: '500 lb', fuel: 'Electric', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/60452-source/e300ajp-hero' },
    { model: 'JLG E450AJ', name: 'Electric Articulating Boom', ht: '45 ft', reach: '22 ft 5 in', cap: '500 lb', fuel: 'Electric', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/139724-source/e450aj-gallery' },
    { model: 'JLG 450AJ', name: 'Diesel Articulating Boom', ht: '45 ft', reach: '25 ft', cap: '500 lb', fuel: 'Diesel', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7516-source/450aj-hero' },
    { model: 'JLG 800AJ', name: 'Diesel Articulating Boom', ht: '80 ft', reach: '50 ft', cap: '500 lb', fuel: 'Diesel', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7528-source/800aj-hero' },
    { model: 'JLG 600S', name: 'Diesel Telescopic Boom', ht: '60 ft', reach: '49 ft', cap: '500 lb', fuel: 'Diesel', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7551-source/600s-hero' },
    { model: 'JLG 1850SJ', name: 'Ultra-High Telescopic Boom', ht: '185 ft', reach: '80 ft', cap: '500 lb', fuel: 'Diesel', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/77200-source/1850sj-hero' },
  ],
  'Scissor Lifts': [
    { model: 'JLG ES2646', name: 'Electric Scissor Lift', ht: '26 ft', reach: 'N/A', cap: '500 lb', fuel: 'Electric', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7578-source/es2646-hero' },
    { model: 'JLG 3246ES', name: 'Electric Scissor Lift', ht: '32 ft', reach: 'N/A', cap: '500 lb', fuel: 'Electric', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7580-source/3246es-hero' },
    { model: 'JLG 4069LE', name: 'Electric Scissor Lift', ht: '40 ft', reach: 'N/A', cap: '1,500 lb', fuel: 'Electric', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7594-source/4069le-hero' },
  ],
  'Telehandlers': [
    { model: 'JLG SkyTrak 6042', name: 'Telehandler', ht: '42 ft', reach: '27 ft 11 in', cap: '6,000 lb', fuel: 'Diesel', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/7612-source/6042-hero' },
    { model: 'JLG G9-43A', name: 'Agri Telehandler', ht: '43 ft', reach: '27 ft', cap: '9,000 lb', fuel: 'Diesel', img: 'https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/133612-source/g9-43a-hero' },
  ],
};

const fuelColors = {
  Electric: 'bg-gc-teal/15 text-gc-teal border-gc-teal/20',
  Diesel:   'bg-muted text-muted-foreground border-border',
  Hybrid:   'bg-gc-green/10 text-gc-green border-gc-green/20',
};

export default function LandingEquipment() {
  const [active, setActive] = useState('Boom Lifts');

  return (
    <section id="equipment" className="py-28 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-gc-orange" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-gc-orange">Fleet Catalog</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground">
              Equipment built for extreme operations
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">All units ship with ClearSky™ Telematics included.</p>
          </div>
          <div className="flex gap-1">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-2 rounded-md text-xs font-bold transition-all uppercase tracking-wide ${
                  active === c
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipment[active].map((e, i) => (
            <motion.div
              key={e.model}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-lg border border-border bg-card overflow-hidden group hover:border-gc-orange/20 transition-all"
            >
              <div className="relative h-48 bg-muted/30 overflow-hidden flex items-center justify-center">
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded border ${fuelColors[e.fuel]}`}>
                  {e.fuel}
                </span>
                <img
                  src={e.img}
                  alt={e.model}
                  className="h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={ev => { ev.target.style.display = 'none'; }}
                />
              </div>
              <div className="p-4">
                <div className="text-xs font-black text-foreground">{e.model}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{e.name}</div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[['Ht', e.ht], ['H. Reach', e.reach], ['Cap', e.cap]].map(([l, v]) => (
                    <div key={l}>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{l}</div>
                      <div className="text-xs font-semibold text-foreground mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-[10px] font-bold text-gc-teal flex items-center gap-1">
                  <Zap className="w-3 h-3" /> ClearSky™ Telematics Included
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}