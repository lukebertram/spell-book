const cachedSpells = {
  'Super Boom Boom': {
    id: 0,
    name: 'Super Boom Boom',
    level: 5,
    higher_level: [
      'When you cast this spell at lvl 7 or higher you lay two massive boom booms'
    ],
    school: { url: 'rickroll.com', name: 'Evocation' },
    casting_time: '1 Action',
    range: '90 feet',
    desc: [`Take out your super and lay a massive â€”boom boomâ€” on each targetâ€™s power flange â€� â€œ`],
    known: true
  }
};

export const initialState = {
  selectedSpell: 'Super Boom Boom',
  mySpells: {},
  spellDirectory: {
    isFetching: false,
    spellList: []
  },
  spellCache: cachedSpells,
  mySpells: {}
};
