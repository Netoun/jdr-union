export const TITLE = 'Dungeons & Dragons'
export const BACKGROUND = '/images/dnd_background.jpg'

export const PLAYERS = [
  {
    name: 'Sounseth',
    class: 'Sorcier',
    background: '/images/netoun_bg.jpg',
    image: '/images/netoun_player.png',
    spreeadsheetId: '',
  },
  {
    name: 'Bran',
    class: 'Guerrier',
    background: '/images/brann_bg.jpg',
    image: '/images/brann_player.png',
  },
  {
    name: 'Khelen',
    class: 'Barde',
    background: '/images/khelen_bg.jpg',
    image: '/images/khelen_player.png',
  },
  {
    name: 'Agis',
    class: 'Rodeur',
    background: '/images/agis_bg.jpg',
    image: '/images/agis_player.png',
  },
]

const RANGES_PLAYER = {
  name: 'C6:R7',
  class: 'C91:R92',
  race: 'T7:AD7',
  character: {
    age: 'C149:E149',
    height: 'F149:H149',
    weight: 'I149:K149s',
    size: 'L149:N149',
    gender: 'C151:E151',
    eyes: 'F151:H151',
    hair: 'I151:K151',
    skin: 'L151:N151',
  },
  level: {
    currentLevel: 'AL6:AM7',
    experience: 'AH7:AJ7',
    nextLevel: 'AE7:AG7',
  },
  health: 'U16:AA16',
  characteristic: {
    strength: 'C13:D14',
    dexterity: 'C18:D19',
    consitution: 'C23:D24',
    intelligence: 'C28:D29',
    wisdom: 'C33:D34',
    charism: 'C38:D39',
  },
  skills: {
    acrobatics: 'I25',
    animalhandling: 'I26',
    arcana: 'I27',
    athletics: 'I28',
    deception: 'I29',
    history: 'I30',
    insight: 'I31',
    intimidation: 'I32',
    investigation: 'I33',
    medicine: 'I34',
    nature: 'I35',
    perception: 'I36',
    performance: 'I37',
    persuasion: 'I38',
    religion: 'I39',
    sleightofhand: 'I40',
    stealth: 'I41',
    survival: 'I42',
  },
  proficiencyBonus: 'K14:N15',
  allies: 'R147:AN162',
  backstory: 'R165:AN177',
}
