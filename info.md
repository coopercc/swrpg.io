# All information needed for character

```js
Character = {
  information: {
    name: string,
    species: string,
    career: string,
    specialization: string,
    obligation: number,
    conflict: number,
    morality: number,
    duty: number,
    xp: {
      total: number,
      available: number,
    },
  },
  health: {
    soak: number,
    wounds: {
      threshold: number,
      current: number, //TODO: decide if this accumulates or deteriorates
    },
    strain: {
      threshold: number,
      current: number, //TODO: decide if this accumulates or deteriorates
    },
    defence: {
      melee: number,
      ranged: number,
    },
    criticals: number,
    encumberance: {
      threshold: number,
      current: number, // base 0
    },
  },
  characteristics: {
    brawn: number,
    agility: number,
    intellect: number,
    cunning: number,
    willpower: number,
    presence: number,
    force rank: number,
  },
  // Break this into {general: [], combat: [], knowledge: []}
  skills: {
    combat: [
      {
        skill: name
        career: boolean,
        characteristic: enum of characteristic types,
        rank: [0-5],
      }
      ...
    ]
  },
  weapons: [
    {
      name: string,
      skill: string, //MUST MATCH skill.combat object prop name
      range: string,
      damage: number,
      crit: number,
      hp: number,
      qualities: [
        {
          quality: string,
          rank?: number
        }
      ],
      mods: [
        {
          name: string,
          hpRequired: number,
          base: string, //long
          mods: string //long
        }
      ]
    }
  ],
  cybernetics: [{
    bodyPart: string,
    make: string,
    bonus: string,
  }],
  credits: {
    owed: number,
    available: number,
  },
  items: [
    {
      name: string,
      quantity: number,
      encumberance: number, //per item
    }
  ]
}
```

## Overall data

```
  users: [
    userId: {
      characters: [
        {Character}
      ]
    }
  ]
```
