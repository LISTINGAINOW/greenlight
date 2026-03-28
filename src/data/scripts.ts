export type Genre = 'Drama' | 'Comedy' | 'Thriller' | 'Horror' | 'Sci-Fi' | 'Action' | 'Romance' | 'Documentary';
export type Format = 'Feature' | 'Pilot' | 'Short' | 'Limited Series';
export type Rating = 'greenlight' | 'consider' | 'pass' | null;

export interface Script {
  id: string;
  title: string;
  author: string;
  logline: string;
  genre: Genre;
  format: Format;
  pages: number;
  tone: string;
  comparables: string;
  submittedBy: string;
  submittedDate: string;
  rating?: Rating;
  notes?: string;
  // Coverage fields (filled after full read)
  synopsis?: string;
  strengths?: string[];
  weaknesses?: string[];
  marketability?: string;
  budget?: 'Low' | 'Medium' | 'High' | 'Tentpole';
}

export const mockScripts: Script[] = [
  {
    id: '1',
    title: 'The Last Beekeeper',
    author: 'Maria Chen',
    logline: 'When the last wild bee colony in North America is discovered on a dying farmer\'s land, a disgraced entomologist must team up with his estranged daughter to protect it from a biotech corporation that will stop at nothing to patent the colony\'s unique genetics.',
    genre: 'Drama',
    format: 'Feature',
    pages: 118,
    tone: 'Emotional, grounded, urgent',
    comparables: 'Interstellar meets Erin Brockovich',
    submittedBy: 'CAA',
    submittedDate: '2026-03-15',
  },
  {
    id: '2',
    title: 'Ctrl+Z',
    author: 'Jake Morrison',
    logline: 'A burnt-out tech worker discovers her company\'s productivity app can literally undo the last 60 seconds of real life — but every undo creates a ripple effect that makes the world slightly worse for someone else.',
    genre: 'Sci-Fi',
    format: 'Feature',
    pages: 105,
    tone: 'Dark comedy, Black Mirror-esque',
    comparables: 'Everything Everywhere All At Once meets The Social Network',
    submittedBy: 'WME',
    submittedDate: '2026-03-18',
  },
  {
    id: '3',
    title: 'Nana\'s House',
    author: 'Destiny Williams',
    logline: 'Three estranged siblings return to their grandmother\'s crumbling Harlem brownstone after her death, only to discover she\'d been running an underground supper club for undocumented immigrants — and the community expects them to keep it going.',
    genre: 'Comedy',
    format: 'Feature',
    pages: 112,
    tone: 'Warm, funny, culturally rich',
    comparables: 'The Farewell meets Soul Food',
    submittedBy: 'UTA',
    submittedDate: '2026-03-20',
  },
  {
    id: '4',
    title: 'Skin Deep',
    author: 'Alexa Novak',
    logline: 'A celebrity dermatologist with a perfect public image starts receiving anonymous packages containing before-and-after photos of patients she botched — patients who officially don\'t exist.',
    genre: 'Thriller',
    format: 'Limited Series',
    pages: 62,
    tone: 'Sleek, paranoid, LA noir',
    comparables: 'Sharp Objects meets Nightcrawler',
    submittedBy: 'Verve',
    submittedDate: '2026-03-21',
  },
  {
    id: '5',
    title: 'Dead Air',
    author: 'Tommy Russo',
    logline: 'When a late-night radio host in a dying Midwest town starts receiving calls from someone who knows details about murders that haven\'t happened yet, he must decide: warn the victims and expose himself, or stay silent and stay alive.',
    genre: 'Horror',
    format: 'Feature',
    pages: 98,
    tone: 'Atmospheric, slow-burn dread',
    comparables: 'Zodiac meets Pontypool',
    submittedBy: 'Paradigm',
    submittedDate: '2026-03-22',
  },
  {
    id: '6',
    title: 'Trophy Wife',
    author: 'Sarah Blake',
    logline: 'A 28-year-old trophy wife in Beverly Hills starts a secret fight club with the other trophy wives on her block after discovering their husbands are all in the same Ponzi scheme.',
    genre: 'Comedy',
    format: 'Feature',
    pages: 102,
    tone: 'Sharp, satirical, empowering',
    comparables: 'Fight Club meets Promising Young Woman',
    submittedBy: 'Anonymous submission',
    submittedDate: '2026-03-23',
  },
  {
    id: '7',
    title: 'The Translator',
    author: 'Ahmed Hassan',
    logline: 'An Afghan interpreter who helped the US military is stuck in bureaucratic limbo in a motel outside Fort Bragg, slowly losing his mind — until he befriends a Vietnam vet next door who is fighting the same system from the other side.',
    genre: 'Drama',
    format: 'Feature',
    pages: 124,
    tone: 'Quiet, devastating, human',
    comparables: 'The Visitor meets First Reformed',
    submittedBy: 'ICM',
    submittedDate: '2026-03-24',
  },
  {
    id: '8',
    title: 'Frequency',
    author: 'Lena Park',
    logline: 'A deaf DJ who feels music through vibration becomes an underground sensation — until she discovers the frequency she\'s been sampling is actually a coded distress signal from a submarine crew trapped on the ocean floor.',
    genre: 'Action',
    format: 'Feature',
    pages: 110,
    tone: 'Kinetic, inventive, propulsive',
    comparables: 'Baby Driver meets CODA',
    submittedBy: 'APA',
    submittedDate: '2026-03-25',
  },
  {
    id: '9',
    title: 'The Algorithm',
    author: 'Dev Patel (not that one)',
    logline: 'A dating app engineer who has never been in a real relationship beta-tests the company\'s new "perfect match" algorithm on herself — and gets paired with her building\'s grumpy 74-year-old super.',
    genre: 'Romance',
    format: 'Pilot',
    pages: 58,
    tone: 'Charming, unexpected, multi-generational',
    comparables: 'The Good Place meets When Harry Met Sally',
    submittedBy: 'Manager: Circle of Confusion',
    submittedDate: '2026-03-26',
  },
  {
    id: '10',
    title: 'Burn Rate',
    author: 'Chris Pak',
    logline: 'A 22-year-old founder raises $50M for an AI startup that doesn\'t work. Instead of coming clean, he hires actors to play engineers and builds an elaborate Potemkin village for investors — until a real engineer joins and starts asking questions.',
    genre: 'Comedy',
    format: 'Feature',
    pages: 115,
    tone: 'Fast, absurd, topical',
    comparables: 'The Big Short meets Silicon Valley',
    submittedBy: 'WME',
    submittedDate: '2026-03-27',
  },
  {
    id: '11',
    title: 'Inheritance',
    author: 'Priya Sharma',
    logline: 'A first-generation Indian-American lawyer discovers her late father\'s will leaves everything to a woman in Mumbai nobody in the family has heard of — and she has 30 days to contest it or lose a $40M estate.',
    genre: 'Drama',
    format: 'Feature',
    pages: 120,
    tone: 'Layered, cross-cultural, suspenseful',
    comparables: 'Crazy Rich Asians meets Knives Out',
    submittedBy: 'CAA',
    submittedDate: '2026-03-27',
  },
  {
    id: '12',
    title: 'The Quiet Room',
    author: 'Emma Frost',
    logline: 'A child psychologist who specializes in nonverbal children takes on a new patient — a 7-year-old who hasn\'t spoken since witnessing something in her parents\' basement. The deeper the doctor digs, the more she realizes the girl\'s silence is protecting everyone.',
    genre: 'Horror',
    format: 'Feature',
    pages: 96,
    tone: 'Creeping, psychological, devastating twist',
    comparables: 'The Sixth Sense meets The Others',
    submittedBy: 'Gersh',
    submittedDate: '2026-03-27',
  },
];
