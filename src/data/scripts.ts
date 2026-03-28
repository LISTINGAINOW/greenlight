export type Genre = 'Drama' | 'Comedy' | 'Thriller' | 'Horror' | 'Sci-Fi' | 'Action' | 'Romance' | 'Documentary' | 'Animation' | 'Musical';
export type Format = 'Feature' | 'Pilot' | 'Short' | 'Limited Series';
export type Rating = 'greenlight' | 'consider' | 'pass' | null;
export type BudgetLevel = 'Micro' | 'Low' | 'Medium' | 'High' | 'Tentpole';

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
  // Extended fields
  tags?: string[];
  budget?: BudgetLevel;
  writerBio?: string;
  pastCredits?: string[];
  // Coverage fields (filled after full read)
  synopsis?: string;
  strengths?: string[];
  weaknesses?: string[];
  marketability?: string;
}

export const mockScripts: Script[] = [
  {
    id: '1', title: 'The Last Beekeeper', author: 'Maria Chen',
    logline: 'When the last wild bee colony in North America is discovered on a dying farmer\'s land, a disgraced entomologist must team up with his estranged daughter to protect it from a biotech corporation that will stop at nothing to patent the colony\'s unique genetics.',
    genre: 'Drama', format: 'Feature', pages: 118, tone: 'Emotional, grounded, urgent',
    comparables: 'Interstellar meets Erin Brockovich', submittedBy: 'CAA', submittedDate: '2026-03-15',
    budget: 'Medium', tags: ['eco-thriller', 'father-daughter', 'corporate villain'], writerBio: 'Sundance Lab Fellow 2024. Former environmental journalist turned screenwriter.', pastCredits: ['Pollinator (short, SXSW 2024)'],
  },
  {
    id: '2', title: 'Ctrl+Z', author: 'Jake Morrison',
    logline: 'A burnt-out tech worker discovers her company\'s productivity app can literally undo the last 60 seconds of real life — but every undo creates a ripple effect that makes the world slightly worse for someone else.',
    genre: 'Sci-Fi', format: 'Feature', pages: 105, tone: 'Dark comedy, Black Mirror-esque',
    comparables: 'Everything Everywhere All At Once meets The Social Network', submittedBy: 'WME', submittedDate: '2026-03-18',
    budget: 'Medium', tags: ['tech-satire', 'high-concept', 'moral-dilemma'], writerBio: 'Former Google engineer. Nicholl semifinalist 2025.', pastCredits: ['Debug (Black List 2024)'],
  },
  {
    id: '3', title: 'Nana\'s House', author: 'Destiny Williams',
    logline: 'Three estranged siblings return to their grandmother\'s crumbling Harlem brownstone after her death, only to discover she\'d been running an underground supper club for undocumented immigrants — and the community expects them to keep it going.',
    genre: 'Comedy', format: 'Feature', pages: 112, tone: 'Warm, funny, culturally rich',
    comparables: 'The Farewell meets Soul Food', submittedBy: 'UTA', submittedDate: '2026-03-20',
    budget: 'Low', tags: ['ensemble', 'food-culture', 'family-drama', 'social-commentary'], writerBio: 'Playwright with three Off-Broadway productions. MFA Columbia.', pastCredits: ['Sunday Supper (Off-Broadway, 2023)', 'Block Party (short, Tribeca 2025)'],
  },
  {
    id: '4', title: 'Skin Deep', author: 'Alexa Novak',
    logline: 'A celebrity dermatologist with a perfect public image starts receiving anonymous packages containing before-and-after photos of patients she botched — patients who officially don\'t exist.',
    genre: 'Thriller', format: 'Limited Series', pages: 62, tone: 'Sleek, paranoid, LA noir',
    comparables: 'Sharp Objects meets Nightcrawler', submittedBy: 'Verve', submittedDate: '2026-03-21',
    budget: 'Medium', tags: ['LA-set', 'unreliable-narrator', 'beauty-industry', 'limited-series'], writerBio: 'TV writer with credits on two streaming shows.', pastCredits: ['The Surface (Hulu, staff writer)', 'Mirror (spec pilot, Tracking Board Top 10)'],
  },
  {
    id: '5', title: 'Dead Air', author: 'Tommy Russo',
    logline: 'When a late-night radio host in a dying Midwest town starts receiving calls from someone who knows details about murders that haven\'t happened yet, he must decide: warn the victims and expose himself, or stay silent and stay alive.',
    genre: 'Horror', format: 'Feature', pages: 98, tone: 'Atmospheric, slow-burn dread',
    comparables: 'Zodiac meets Pontypool', submittedBy: 'Paradigm', submittedDate: '2026-03-22',
    budget: 'Low', tags: ['single-location', 'midwest-gothic', 'contained', 'elevated-horror'], writerBio: 'Horror specialist. Two produced features under $2M.', pastCredits: ['The Signal (Shudder, 2024)', 'Whiteout (theatrical, 2023)'],
  },
  {
    id: '6', title: 'Trophy Wife', author: 'Sarah Blake',
    logline: 'A 28-year-old trophy wife in Beverly Hills starts a secret fight club with the other trophy wives on her block after discovering their husbands are all in the same Ponzi scheme.',
    genre: 'Comedy', format: 'Feature', pages: 102, tone: 'Sharp, satirical, empowering',
    comparables: 'Fight Club meets Promising Young Woman', submittedBy: 'Anonymous submission', submittedDate: '2026-03-23',
    budget: 'Medium', tags: ['satire', 'female-ensemble', 'wealth', 'subversive'], writerBio: 'Unknown. Anonymous submission via website portal.',
  },
  {
    id: '7', title: 'The Translator', author: 'Ahmed Hassan',
    logline: 'An Afghan interpreter who helped the US military is stuck in bureaucratic limbo in a motel outside Fort Bragg, slowly losing his mind — until he befriends a Vietnam vet next door who is fighting the same system from the other side.',
    genre: 'Drama', format: 'Feature', pages: 124, tone: 'Quiet, devastating, human',
    comparables: 'The Visitor meets First Reformed', submittedBy: 'ICM', submittedDate: '2026-03-24',
    budget: 'Low', tags: ['true-events-inspired', 'military', 'immigration', 'two-hander', 'awards-bait'], writerBio: 'Afghan-American writer and former interpreter. This is semi-autobiographical.', pastCredits: ['Between Two Flags (memoir, published 2024)'],
  },
  {
    id: '8', title: 'Frequency', author: 'Lena Park',
    logline: 'A deaf DJ who feels music through vibration becomes an underground sensation — until she discovers the frequency she\'s been sampling is actually a coded distress signal from a submarine crew trapped on the ocean floor.',
    genre: 'Action', format: 'Feature', pages: 110, tone: 'Kinetic, inventive, propulsive',
    comparables: 'Baby Driver meets CODA', submittedBy: 'APA', submittedDate: '2026-03-25',
    budget: 'High', tags: ['deaf-protagonist', 'music-driven', 'race-against-time', 'disability-rep'], writerBio: 'Korean-American screenwriter. Austin Film Festival winner 2025.', pastCredits: ['Resonance (short, Oscar shortlist 2025)'],
  },
  {
    id: '9', title: 'The Algorithm', author: 'Dev Patel (not that one)',
    logline: 'A dating app engineer who has never been in a real relationship beta-tests the company\'s new "perfect match" algorithm on herself — and gets paired with her building\'s grumpy 74-year-old super.',
    genre: 'Romance', format: 'Pilot', pages: 58, tone: 'Charming, unexpected, multi-generational',
    comparables: 'The Good Place meets When Harry Met Sally', submittedBy: 'Manager: Circle of Confusion', submittedDate: '2026-03-26',
    budget: 'Low', tags: ['rom-com', 'intergenerational', 'tech-world', 'NYC-set'], writerBio: 'Comedy writer with a viral Twitter following. First TV spec.', pastCredits: ['Twitter threads (viral)'],
  },
  {
    id: '10', title: 'Burn Rate', author: 'Chris Pak',
    logline: 'A 22-year-old founder raises $50M for an AI startup that doesn\'t work. Instead of coming clean, he hires actors to play engineers and builds an elaborate Potemkin village for investors — until a real engineer joins and starts asking questions.',
    genre: 'Comedy', format: 'Feature', pages: 115, tone: 'Fast, absurd, topical',
    comparables: 'The Big Short meets Silicon Valley', submittedBy: 'WME', submittedDate: '2026-03-27',
    budget: 'Medium', tags: ['tech-satire', 'con-artist', 'based-on-true-events', 'topical'], writerBio: 'Former VC associate turned writer. YC dropout (on purpose).', pastCredits: ['Exit Strategy (Black List 2025)'],
  },
  {
    id: '11', title: 'Inheritance', author: 'Priya Sharma',
    logline: 'A first-generation Indian-American lawyer discovers her late father\'s will leaves everything to a woman in Mumbai nobody in the family has heard of — and she has 30 days to contest it or lose a $40M estate.',
    genre: 'Drama', format: 'Feature', pages: 120, tone: 'Layered, cross-cultural, suspenseful',
    comparables: 'Crazy Rich Asians meets Knives Out', submittedBy: 'CAA', submittedDate: '2026-03-27',
    budget: 'Medium', tags: ['mystery', 'family-secrets', 'dual-timeline', 'cross-cultural'], writerBio: 'Entertainment lawyer turned screenwriter. Knows the courtroom scenes are accurate.', pastCredits: ['Deposition (short, TIFF 2025)'],
  },
  {
    id: '12', title: 'The Quiet Room', author: 'Emma Frost',
    logline: 'A child psychologist who specializes in nonverbal children takes on a new patient — a 7-year-old who hasn\'t spoken since witnessing something in her parents\' basement. The deeper the doctor digs, the more she realizes the girl\'s silence is protecting everyone.',
    genre: 'Horror', format: 'Feature', pages: 96, tone: 'Creeping, psychological, devastating twist',
    comparables: 'The Sixth Sense meets The Others', submittedBy: 'Gersh', submittedDate: '2026-03-27',
    budget: 'Low', tags: ['psychological', 'child-POV', 'twist-ending', 'contained'], writerBio: 'Child psychologist turned horror writer. Uses real case studies (anonymized) for inspiration.', pastCredits: ['Little Voices (Blumhouse, in development)'],
  },
  // === WAVE 2: 38 MORE SCRIPTS ===
  {
    id: '13', title: 'Graveyard Shift', author: 'Marcus Cole',
    logline: 'A newly hired overnight security guard at a natural history museum discovers the exhibits actually come alive at night — but unlike the movie, they\'re angry, territorial, and one of them is a serial killer.',
    genre: 'Horror', format: 'Feature', pages: 104, tone: 'Fun-scary, creature feature vibes',
    comparables: 'Night at the Museum meets Ready or Not', submittedBy: 'APA', submittedDate: '2026-03-20',
    budget: 'Medium', tags: ['single-location', 'survival', 'dark-comedy', 'creature-feature'], writerBio: 'Former museum night guard. Yes, really.', pastCredits: ['Exhibits (short, Fantastic Fest 2025)'],
  },
  {
    id: '14', title: 'The Understudy', author: 'Celia Marquis',
    logline: 'A Broadway understudy who has never gone on finally gets her chance when the lead breaks her ankle — then realizes the lead didn\'t fall. Someone pushed her. And they\'ll push anyone who gets too close to the spotlight.',
    genre: 'Thriller', format: 'Feature', pages: 108, tone: 'Hitchcockian, glamorous danger',
    comparables: 'Black Swan meets All About Eve', submittedBy: 'CAA', submittedDate: '2026-03-21',
    budget: 'Low', tags: ['NYC-set', 'theater-world', 'female-driven', 'psychological'], writerBio: 'Tony-nominated playwright pivoting to film.', pastCredits: ['Opening Night (Broadway, 2024)', 'Curtain Call (Off-Broadway)'],
  },
  {
    id: '15', title: 'Repo', author: 'Danny Vega',
    logline: 'In 2031, a repo man who repossesses AI companions from people who can\'t make payments starts to question his job when a widower\'s AI wife begs him not to shut her down — and he can\'t tell if she\'s really sentient or just programmed to beg.',
    genre: 'Sci-Fi', format: 'Feature', pages: 112, tone: 'Melancholy, Philip K. Dick meets Spike Jonze',
    comparables: 'Her meets Repo Men', submittedBy: 'WME', submittedDate: '2026-03-22',
    budget: 'Medium', tags: ['AI-ethics', 'near-future', 'philosophical', 'blue-collar-sci-fi'], writerBio: 'Sci-fi novelist with two published books. First screenplay.', pastCredits: ['Synthetic Hearts (novel, 2024)'],
  },
  {
    id: '16', title: 'Hot Ones: The Movie', author: 'Tyler Brandt',
    logline: 'When the host of the world\'s biggest interview show gets kidnapped by a cartel boss who wants to be his next guest, he has to survive a series of increasingly dangerous challenges — each paired with increasingly hotter wings.',
    genre: 'Action', format: 'Feature', pages: 98, tone: 'Absurd, hilarious, surprisingly tense',
    comparables: 'John Wick meets Game Night', submittedBy: 'Anonymous submission', submittedDate: '2026-03-23',
    budget: 'Medium', tags: ['IP-adjacent', 'meta', 'comedy-action', 'viral-potential'], writerBio: 'Former late-night TV writer. This is spec, no IP attached.',
  },
  {
    id: '17', title: 'The Good Immigrant', author: 'Juan Carlos Reyes',
    logline: 'A DACA recipient who works as an ICE translator must secretly help detained families navigate the system from the inside — while his own renewal application hangs by a thread.',
    genre: 'Drama', format: 'Limited Series', pages: 65, tone: 'Tense, empathetic, politically charged',
    comparables: 'The Night Of meets McFarland USA', submittedBy: 'UTA', submittedDate: '2026-03-24',
    budget: 'Low', tags: ['immigration', 'social-justice', 'double-life', 'limited-series', 'topical'], writerBio: 'DACA recipient. Immigration attorney. This is personal.', pastCredits: ['Borders (short doc, Emmy-nominated 2025)'],
  },
  {
    id: '18', title: 'Dopamine', author: 'Zoe Chen',
    logline: 'Five strangers check into a luxury digital detox retreat in Big Sur, only to discover the retreat is actually a psych experiment — and the "therapists" running it are studying which of them will break first.',
    genre: 'Thriller', format: 'Feature', pages: 106, tone: 'Claustrophobic, twisty, paranoid',
    comparables: 'The Menu meets Ex Machina', submittedBy: 'Gersh', submittedDate: '2026-03-24',
    budget: 'Low', tags: ['contained', 'ensemble', 'tech-addiction', 'psychological', 'single-location'], writerBio: 'Former tech ethics researcher at Stanford.', pastCredits: ['Screen Time (short, SXSW 2025)'],
  },
  {
    id: '19', title: 'Fumble', author: 'Mike Tanaka',
    logline: 'A washed-up NFL quarterback gets hired as the head coach of a women\'s flag football team fighting for Olympic inclusion — and slowly realizes they\'re better athletes than he ever was.',
    genre: 'Comedy', format: 'Feature', pages: 108, tone: 'Heartwarming, funny, feminist sports',
    comparables: 'Ted Lasso meets A League of Their Own', submittedBy: 'ICM', submittedDate: '2026-03-25',
    budget: 'Medium', tags: ['sports', 'fish-out-of-water', 'Olympics', 'female-ensemble', 'topical'], writerBio: 'Former ESPN writer. Women\'s sports advocate.', pastCredits: ['Fourth Quarter (Peacock, staff writer)'],
  },
  {
    id: '20', title: 'Sleepwalkers', author: 'Mara Santos',
    logline: 'In a near-future where insomnia has become a global pandemic, a black-market sleep dealer discovers that the stolen dreams she\'s selling contain real memories — including evidence of a murder that someone powerful is desperate to cover up.',
    genre: 'Sci-Fi', format: 'Feature', pages: 116, tone: 'Noir, dreamy, conspiracy thriller',
    comparables: 'Inception meets Blade Runner 2049', submittedBy: 'Verve', submittedDate: '2026-03-25',
    budget: 'High', tags: ['noir', 'world-building', 'female-lead', 'mystery', 'visual'], writerBio: 'Sleep researcher turned writer. PhD in neuroscience.', pastCredits: ['REM (short, Venice 2025)'],
  },
  {
    id: '21', title: 'God\'s Country Club', author: 'Blake Whitfield',
    logline: 'When a Black family moves into an elite Southern country club community, the HOA president wages a covert war to drive them out — told from the perspective of his 14-year-old son who\'s falling for the neighbors\' daughter.',
    genre: 'Drama', format: 'Feature', pages: 122, tone: 'Simmering, coming-of-age, social thriller',
    comparables: 'Get Out meets The Hate U Give', submittedBy: 'CAA', submittedDate: '2026-03-25',
    budget: 'Low', tags: ['race-relations', 'coming-of-age', 'suburban-gothic', 'young-protagonist'], writerBio: 'Southern writer. Grew up in a gated community in Georgia.', pastCredits: ['Property Lines (Sundance short, 2024)'],
  },
  {
    id: '22', title: 'Last Call', author: 'Fiona Walsh',
    logline: 'A bartender in a dive bar in Queens realizes that every drink she makes tonight is the last drink of someone\'s life — and she has until closing time to figure out why.',
    genre: 'Thriller', format: 'Feature', pages: 92, tone: 'Real-time, contained, Twilight Zone energy',
    comparables: '1917 meets The Twilight Zone', submittedBy: 'Paradigm', submittedDate: '2026-03-26',
    budget: 'Micro', tags: ['single-location', 'real-time', 'supernatural', 'contained', 'one-night'], writerBio: 'Irish-American playwright. Bartended for 8 years.', pastCredits: ['On Tap (Off-Broadway, 2025)'],
  },
  {
    id: '23', title: 'The Nanny Cam', author: 'Rachel Kim',
    logline: 'A stay-at-home mom who suspects her nanny of neglect installs hidden cameras — and instead captures footage of her husband doing something far worse.',
    genre: 'Thriller', format: 'Pilot', pages: 55, tone: 'Domestic noir, gaslight suspense',
    comparables: 'Gone Girl meets Big Little Lies', submittedBy: 'APA', submittedDate: '2026-03-26',
    budget: 'Low', tags: ['domestic-thriller', 'surveillance', 'suburban', 'female-driven', 'twist'], writerBio: 'Bestselling domestic thriller novelist.', pastCredits: ['Watch Me (novel, NYT bestseller 2024)', 'Close the Door (novel, 2025)'],
  },
  {
    id: '24', title: 'Compound Interest', author: 'Victor Okafor',
    logline: 'A Wall Street quant discovers his firm\'s algorithm has accidentally predicted the exact date of the next financial collapse — six days from now. He has to decide: profit from it, warn the public, or try to stop it.',
    genre: 'Thriller', format: 'Feature', pages: 110, tone: 'Fast-paced, cerebral, ticking clock',
    comparables: 'The Big Short meets Uncut Gems', submittedBy: 'WME', submittedDate: '2026-03-26',
    budget: 'Medium', tags: ['finance', 'ticking-clock', 'moral-dilemma', 'topical', 'smart'], writerBio: 'Former quantitative analyst at Goldman Sachs. Left finance for film.', pastCredits: ['Short Sell (Black List 2025)'],
  },
  {
    id: '25', title: 'Abuela\'s Recipes', author: 'Sofia Gutierrez',
    logline: 'When a Mexican-American food blogger goes viral for "discovering" recipes her late grandmother made for decades, she must confront the difference between honoring a legacy and commodifying it — especially when a cookbook deal worth millions is on the table.',
    genre: 'Comedy', format: 'Feature', pages: 100, tone: 'Warm, funny, culturally specific, bittersweet',
    comparables: 'Julie & Julia meets Coco', submittedBy: 'UTA', submittedDate: '2026-03-27',
    budget: 'Low', tags: ['food-culture', 'cultural-identity', 'social-media', 'family', 'Latina-lead'], writerBio: 'Mexican-American food writer and comedian.', pastCredits: ['Sazón (web series, 2M+ views)'],
  },
  {
    id: '26', title: 'The Body Double', author: 'Nina Volkov',
    logline: 'A struggling actress hired to be a pop star\'s body double for public appearances slowly starts losing her own identity — until the real pop star disappears and everyone expects the double to become her permanently.',
    genre: 'Thriller', format: 'Feature', pages: 114, tone: 'Psychological, identity crisis, glamorous horror',
    comparables: 'Black Swan meets A Star Is Born', submittedBy: 'CAA', submittedDate: '2026-03-27',
    budget: 'Medium', tags: ['identity', 'celebrity-culture', 'female-driven', 'psychological', 'doppelgänger'], writerBio: 'Russian-American writer. Former personal assistant to a celebrity (unnamed).', pastCredits: ['Stand-In (short, Cannes Court Métrage 2025)'],
  },
  {
    id: '27', title: 'Hotline', author: 'James Obi',
    logline: 'Two crisis hotline operators fall in love over their shared night shift — but they\'ve never met in person, and when they finally agree to, one of them doesn\'t show up. The other has to figure out if they got cold feet or if something happened.',
    genre: 'Romance', format: 'Feature', pages: 96, tone: 'Intimate, voice-driven, emotional detective story',
    comparables: 'Her meets Before Sunrise', submittedBy: 'Gersh', submittedDate: '2026-03-27',
    budget: 'Micro', tags: ['two-hander', 'voice-driven', 'romance-mystery', 'minimal-cast', 'contained'], writerBio: 'Poet and playwright. Former crisis counselor.', pastCredits: ['Dial Tone (poetry collection, 2024)'],
  },
  {
    id: '28', title: 'Farm to Fable', author: 'Elise Murray',
    logline: 'A social media-famous "farm-to-table" restaurant owner is exposed as a fraud — she buys everything from Costco. Now she must actually learn to farm in 30 days before a documentary crew arrives to film her "authentic" operation.',
    genre: 'Comedy', format: 'Feature', pages: 104, tone: 'Cringe comedy, fish-out-of-water, redemption',
    comparables: 'Schitt\'s Creek meets The Menu', submittedBy: 'Anonymous submission', submittedDate: '2026-03-27',
    budget: 'Low', tags: ['foodie', 'social-media-satire', 'fish-out-of-water', 'fraud', 'redemption'], writerBio: 'Food TV producer tired of the industry\'s BS.',
  },
  {
    id: '29', title: 'Switchboard', author: 'Clara Johnson',
    logline: 'In 1952, a Black switchboard operator at a segregated Southern telephone company discovers she can listen to any call in town — including the ones planning a lynching.',
    genre: 'Drama', format: 'Feature', pages: 108, tone: 'Period, tense, moral courage',
    comparables: 'Hidden Figures meets Mississippi Burning', submittedBy: 'ICM', submittedDate: '2026-03-27',
    budget: 'Medium', tags: ['period-piece', 'civil-rights', 'true-events-inspired', 'female-lead', 'awards-bait'], writerBio: 'Historian and screenwriter. Discovered this story in her grandmother\'s letters.', pastCredits: ['Long Distance (novel, Oprah Book Club 2025)'],
  },
  {
    id: '30', title: 'Player Two', author: 'Kevin Chung',
    logline: 'A retired esports champion dying of ALS agrees to let a company upload his consciousness into a video game — where he discovers his digital self can do everything his dying body can\'t, but at the cost of slowly forgetting who he was.',
    genre: 'Sci-Fi', format: 'Feature', pages: 118, tone: 'Heartbreaking, philosophical, visually stunning',
    comparables: 'Inside Out meets The Diving Bell and the Butterfly', submittedBy: 'WME', submittedDate: '2026-03-28',
    budget: 'High', tags: ['gaming', 'disability', 'consciousness', 'visual-spectacle', 'cry-factor'], writerBio: 'Former esports commentator. Brother has ALS.', pastCredits: ['Continue? (short, Annecy 2025)'],
  },
  {
    id: '31', title: 'Blood Harmony', author: 'Jesse & Taylor Rawlings',
    logline: 'Twin sisters who were country music\'s biggest act haven\'t spoken in five years. When their father is diagnosed with terminal cancer, their mother books them for one final concert together — but neither one is willing to be the harmony.',
    genre: 'Drama', format: 'Feature', pages: 116, tone: 'Musical, raw, sibling warfare',
    comparables: 'Walk the Line meets August: Osage County', submittedBy: 'CAA', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['music', 'family', 'sibling-rivalry', 'Nashville', 'two-hander'], writerBio: 'Writing duo and actual siblings. This is "mostly not autobiographical."', pastCredits: ['Harmony (play, Nashville Rep 2024)'],
  },
  {
    id: '32', title: 'Safecracker', author: 'Leo Torres',
    logline: 'An 80-year-old retired locksmith is forced out of retirement when his granddaughter is kidnapped by a crew that needs him to crack one last safe — the vault at the Federal Reserve.',
    genre: 'Action', format: 'Feature', pages: 106, tone: 'Heist, tense, older-protagonist action',
    comparables: 'Logan meets The Italian Job', submittedBy: 'Paradigm', submittedDate: '2026-03-28',
    budget: 'High', tags: ['heist', 'older-protagonist', 'family', 'ticking-clock', 'one-last-job'], writerBio: 'Action writer with two produced action features.', pastCredits: ['Breach (theatrical, 2024)', 'Hard Target 3 (Netflix)'],
  },
  {
    id: '33', title: 'The Apology Tour', author: 'Kenji Yamamoto',
    logline: 'A disgraced comedian cancelled for a tweet goes on a cross-country road trip to personally apologize to every person he\'s ever offended — but each apology makes things exponentially worse.',
    genre: 'Comedy', format: 'Feature', pages: 98, tone: 'Cringey, uncomfortable, eventually moving',
    comparables: 'Borat meets The Disaster Artist', submittedBy: 'Anonymous submission', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['cancel-culture', 'road-trip', 'cringe-comedy', 'topical', 'redemption'], writerBio: 'Stand-up comedian who was briefly cancelled (for something minor).', pastCredits: ['Sorry Not Sorry (Netflix special, 2025)'],
  },
  {
    id: '34', title: 'The Flood', author: 'Isaiah Washington',
    logline: 'When a levee breaks in a poor Louisiana parish, a Black pastor and a white sheriff — lifelong enemies — must work together to evacuate 200 people in 12 hours while the state government argues about whose jurisdiction it is.',
    genre: 'Drama', format: 'Feature', pages: 112, tone: 'Urgent, sweaty, two-hander, based on real events',
    comparables: 'When the Levees Broke meets Dunkirk', submittedBy: 'UTA', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['disaster', 'race-relations', 'real-time', 'based-on-true-events', 'ticking-clock'], writerBio: 'Louisiana native. Journalist who covered Hurricane Ida.', pastCredits: ['Rising Water (documentary, PBS 2024)'],
  },
  {
    id: '35', title: 'Ghost Kitchen', author: 'Amy Liu',
    logline: 'A chef running a ghost kitchen from her apartment discovers that the delivery orders she\'s getting are being placed by dead people — addresses that don\'t exist, names from obituaries, and the food always disappears from the drop-off locations.',
    genre: 'Horror', format: 'Pilot', pages: 52, tone: 'Atmospheric, cozy horror, mystery box',
    comparables: 'Yellowjackets meets Ratatouille (dark version)', submittedBy: 'Verve', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['food-horror', 'mystery-box', 'female-lead', 'pilot', 'supernatural'], writerBio: 'Former ghost kitchen operator. Created a viral TikTok series about haunted restaurants.', pastCredits: ['Dead Eats (TikTok, 5M followers)'],
  },
  {
    id: '36', title: 'Clean Slate', author: 'David Park',
    logline: 'A crime scene cleaner who has seen the worst humanity has to offer accidentally finds a survivor hiding in a closet at his latest job — and must decide whether to call the police or handle things himself, knowing the killer is a cop.',
    genre: 'Thriller', format: 'Feature', pages: 100, tone: 'Taut, morally grey, noirish',
    comparables: 'No Country for Old Men meets Nightcrawler', submittedBy: 'APA', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['crime', 'moral-dilemma', 'blue-collar', 'corruption', 'neo-noir'], writerBio: 'Former crime scene investigator. 12 years on the job.', pastCredits: ['Evidence (short, Tribeca 2025)'],
  },
  {
    id: '37', title: 'Halftime', author: 'Robyn Okafor',
    logline: 'A 45-year-old divorced mom trains to become the first female NFL referee — not because she loves football, but because her ex said she "doesn\'t understand the game" in their custody hearing.',
    genre: 'Comedy', format: 'Feature', pages: 108, tone: 'Crowd-pleaser, underdog, empowering',
    comparables: 'Legally Blonde meets The Blind Side', submittedBy: 'Gersh', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['sports', 'female-empowerment', 'underdog', 'crowd-pleaser', 'divorce'], writerBio: 'Sports journalist. Covered the NFL for 15 years. Divorced.', pastCredits: ['Offside (book, 2024)'],
  },
  {
    id: '38', title: 'Sanctuary', author: 'Hannah Moore',
    logline: 'A megachurch pastor discovers that his church has been unknowingly laundering money for a cartel. When the feds come knocking, he has to choose: protect his 10,000-member congregation or confess and watch everything crumble.',
    genre: 'Drama', format: 'Limited Series', pages: 68, tone: 'Prestige drama, moral complexity, Southern Gothic',
    comparables: 'Ozark meets The Righteous Gemstones', submittedBy: 'WME', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['religion', 'crime', 'moral-dilemma', 'limited-series', 'southern-gothic'], writerBio: 'Preacher\'s kid. Studied theology at Duke before film school.', pastCredits: ['Revival (short, SXSW 2025)'],
  },
  {
    id: '39', title: 'The Deepfake', author: 'Nadia Petrov',
    logline: 'A high school teacher discovers a deepfake sex tape of herself going viral. The police can\'t help, the school won\'t act, and her only lead is a 16-year-old student she suspects made it — but she can\'t prove it without breaking the law herself.',
    genre: 'Thriller', format: 'Feature', pages: 102, tone: 'Timely, rage-inducing, empathetic',
    comparables: 'Gone Girl meets The Social Network', submittedBy: 'ICM', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['tech-horror', 'deepfake', 'revenge', 'topical', 'female-driven', 'ripped-from-headlines'], writerBio: 'Digital privacy lawyer turned screenwriter.', pastCredits: ['Synthetic (short, Berlinale 2025)'],
  },
  {
    id: '40', title: 'Cosmic Latte', author: 'Sam Ortega',
    logline: 'NASA discovers the universe is dying — not in billions of years, but in 18 months. The only person who can explain it to the public without causing mass panic is a washed-up science communicator who hasn\'t been sober in years.',
    genre: 'Sci-Fi', format: 'Feature', pages: 120, tone: 'Melancholy, darkly funny, existential',
    comparables: 'Don\'t Look Up meets Arrival', submittedBy: 'CAA', submittedDate: '2026-03-28',
    budget: 'High', tags: ['end-of-world', 'science', 'dark-comedy', 'media-satire', 'existential'], writerBio: 'Astrophysicist and science writer. Neil deGrasse Tyson called this "the only accurate doomsday movie."', pastCredits: ['Pale Blue Dot (book, 2025)'],
  },
  {
    id: '41', title: 'Stunt Double', author: 'Rick Navarro',
    logline: 'An aging stunt performer whose body is falling apart takes one last job doubling for a method actor who insists on doing his own stunts badly — and the stunt man must sabotage each stunt to keep the star alive without getting caught.',
    genre: 'Comedy', format: 'Feature', pages: 104, tone: 'Physical comedy, love letter to stunt work, meta',
    comparables: 'The Fall Guy meets Birdman', submittedBy: 'Paradigm', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['Hollywood-satire', 'stunt-work', 'behind-the-scenes', 'meta', 'physical-comedy'], writerBio: 'Actual stunt coordinator with 20+ years experience.', pastCredits: ['Stunt coordinator credits on 15+ films'],
  },
  {
    id: '42', title: 'The Waiting Room', author: 'Dr. Amara Osei',
    logline: 'Five strangers in an ER waiting room on Christmas Eve slowly reveal why they\'re really there — and by midnight, their stories intersect in a way none of them expected.',
    genre: 'Drama', format: 'Feature', pages: 94, tone: 'Intimate, ensemble, emotional gut-punch',
    comparables: 'Magnolia meets The Breakfast Club', submittedBy: 'UTA', submittedDate: '2026-03-28',
    budget: 'Micro', tags: ['ensemble', 'single-location', 'Christmas', 'contained', 'nonlinear'], writerBio: 'ER doctor who writes between shifts. This is based on one real night.', pastCredits: ['Code Blue (play, 2024)'],
  },
  {
    id: '43', title: 'Anchor', author: 'Pete Sullivan',
    logline: 'A local news anchor in Tulsa who has been reading the teleprompter for 30 years goes off-script on live television and tells the truth about everything — the station, the sponsors, the city\'s corruption. He has 11 minutes before they cut his feed.',
    genre: 'Drama', format: 'Short', pages: 28, tone: 'Real-time, electric, Howard Beale energy',
    comparables: 'Network meets Good Night and Good Luck', submittedBy: 'Anonymous submission', submittedDate: '2026-03-28',
    budget: 'Micro', tags: ['media', 'real-time', 'one-man-show', 'short', 'single-location', 'monologue'], writerBio: 'Former local news producer. Quit on air (not as dramatically).',
  },
  {
    id: '44', title: 'The Donor', author: 'Gabriella Rossi',
    logline: 'A woman conceived via sperm donor discovers she has 97 half-siblings scattered across the country — and someone is killing them off one by one in birth order. She\'s number 98.',
    genre: 'Thriller', format: 'Limited Series', pages: 60, tone: 'Genetic thriller, conspiracy, identity crisis',
    comparables: 'Orphan Black meets Knives Out', submittedBy: 'CAA', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['genetics', 'identity', 'conspiracy', 'limited-series', 'high-concept'], writerBio: 'Donor-conceived person who actually discovered 40+ siblings.', pastCredits: ['Sister, Sister (short doc, Sundance 2025)'],
  },
  {
    id: '45', title: 'First Generation', author: 'Maria Esperanza',
    logline: 'A Salvadoran immigrant janitor at Harvard secretly audits classes for years until a professor catches him — and instead of reporting him, offers to sponsor his admission. Now he has to survive the Ivy League while cleaning it.',
    genre: 'Drama', format: 'Feature', pages: 118, tone: 'Inspirational, class commentary, warm but never corny',
    comparables: 'Good Will Hunting meets The Pursuit of Happyness', submittedBy: 'WME', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['immigration', 'education', 'class', 'inspirational', 'based-on-true-events'], writerBio: 'First-generation college graduate. Former janitor.', pastCredits: ['Night Shift (short, audience award at LALIFF 2025)'],
  },
  {
    id: '46', title: 'Unpublished', author: 'Eleanor Vance',
    logline: 'A literary agent discovers a manuscript in her slush pile that is, without question, the greatest novel ever written — but the author is a death row inmate with 30 days to live, and the manuscript is a confession.',
    genre: 'Drama', format: 'Feature', pages: 110, tone: 'Literary, morally knotty, page-turner',
    comparables: 'The Shawshank Redemption meets Capote', submittedBy: 'Gersh', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['literary-world', 'death-row', 'moral-dilemma', 'two-hander', 'smart'], writerBio: 'Former literary agent who found a manuscript almost this good.', pastCredits: ['Remainders (novel, 2024)'],
  },
  {
    id: '47', title: 'The Proposal', author: 'Ben Adeyemi',
    logline: 'A man plans an elaborate public proposal at a baseball game, but his girlfriend sees it on the Jumbotron before he gets to his knee — and says no. Now 40,000 people are watching, and he has to figure out his next move on national TV.',
    genre: 'Romance', format: 'Feature', pages: 100, tone: 'Cringe, romantic, unexpectedly deep',
    comparables: 'Forgetting Sarah Marshall meets The Truman Show', submittedBy: 'APA', submittedDate: '2026-03-28',
    budget: 'Low', tags: ['rom-com', 'public-humiliation', 'viral-moment', 'crowd-pleaser', 'male-vulnerability'], writerBio: 'His proposal actually got rejected on a Jumbotron. They got married a year later.', pastCredits: ['The Big Ask (short, Vimeo Staff Pick 2025)'],
  },
  {
    id: '48', title: 'Buried Lede', author: 'Diana Chen',
    logline: 'A Pulitzer-winning war correspondent returns to her small hometown newspaper after a breakdown — and discovers the biggest story of her career is happening in her own backyard: the town\'s water supply is poisoned, and everyone knows except the residents.',
    genre: 'Drama', format: 'Feature', pages: 114, tone: 'Investigative, Erin Brockovich energy, personal reckoning',
    comparables: 'Spotlight meets Dark Waters', submittedBy: 'ICM', submittedDate: '2026-03-28',
    budget: 'Medium', tags: ['journalism', 'small-town', 'whistleblower', 'environmental', 'awards-bait'], writerBio: 'Former NYT reporter. Covered Flint water crisis.', pastCredits: ['Deadline (short, Tribeca 2024)'],
  },
  {
    id: '49', title: 'The Roast', author: 'Charlie Huang',
    logline: 'At a celebrity roast for a beloved comedian, each roaster\'s jokes get darker and more personal until it becomes clear this isn\'t comedy — it\'s a coordinated public execution of his reputation, and he can\'t leave the stage.',
    genre: 'Comedy', format: 'Feature', pages: 92, tone: 'Dark, uncomfortable, meta-comedy, one-location',
    comparables: 'The Menu meets Birdman', submittedBy: 'Anonymous submission', submittedDate: '2026-03-28',
    budget: 'Micro', tags: ['comedy-world', 'single-location', 'real-time', 'meta', 'dark-comedy', 'cancel-culture'], writerBio: 'Comedy writer who has worked on 3 actual roasts.',
  },
  {
    id: '50', title: 'Blackout', author: 'Tanya Richardson',
    logline: 'During a city-wide blackout in Chicago, eight strangers are trapped in an elevator for 14 hours. By the time the power comes back, one of them is dead — and the security camera that would have caught it was off the whole time.',
    genre: 'Thriller', format: 'Feature', pages: 96, tone: 'Claustrophobic, Agatha Christie in an elevator',
    comparables: '12 Angry Men meets Devil', submittedBy: 'Verve', submittedDate: '2026-03-28',
    budget: 'Micro', tags: ['contained', 'whodunit', 'single-location', 'ensemble', 'bottle-episode'], writerBio: 'Playwright known for small-space dramas.', pastCredits: ['Confined (Off-Broadway, 2024)', 'Four Walls (Steppenwolf, 2025)'],
  },
];
