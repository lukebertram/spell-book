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
    desc: [`Take out your super and lay a massive boom boom on 'em`],
    known: true
  }
};

export const initialState = {
  selectedSpell: null,
  spellDirectory: {
    isFetching: false,
    spellList: []
  },
  spellCache: cachedSpells,
  mySpells: {}
};
