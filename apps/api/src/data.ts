import type { BlogPost, Celebrity, Consultation, Expert, Panchang, Product, Report, ToolSummary, Wallet } from '@vedanova/contracts';

export const experts: Expert[] = [
  {id:'anaya',name:'Anaya Rao',role:'Senior Vedic guide',specialty:'Vedic',signature:'Divisional charts & life timing',years:18,languages:['English','Hindi'],rating:4.96,reviews:2840,rate:24,online:true,avatar:'/assets/expert-anaya.svg',tags:['D1-D10','Dashas','Career'],bio:'Anaya combines classical Parashari technique with a calm, decision-first consultation style.',methods:['Parashari','Vimshottari','Divisional charts'],nextAvailable:'Now',verified:true},
  {id:'dev',name:'Dev Mehta',role:'KP specialist',specialty:'KP',signature:'Sub-lord event timing',years:14,languages:['English','Hindi','Gujarati'],rating:4.91,reviews:1920,rate:22,online:true,avatar:'/assets/expert-dev.svg',tags:['KP','Questions','Timing'],bio:'Dev works best with concrete questions and narrow timing windows.',methods:['KP','Ruling planets','Cuspal sub-lords'],nextAvailable:'Now',verified:true},
  {id:'meera',name:'Meera Iyer',role:'Nadi reader',specialty:'Nadi',signature:'Bhrigu Nandi patterns',years:26,languages:['English','Tamil'],rating:4.94,reviews:3184,rate:29,online:false,avatar:'/assets/expert-meera.svg',tags:['Nadi','Karma','Relationships'],bio:'Meera reads planetary chains and life themes with emphasis on context rather than fear.',methods:['Bhrigu Nandi Nadi','Transit chains'],nextAvailable:'Today · 18:30',verified:true},
  {id:'kavya',name:'Kavya Sen',role:'Tarot & intuition guide',specialty:'Tarot',signature:'Decision clarity readings',years:11,languages:['English','Hindi','Bengali'],rating:4.89,reviews:1442,rate:18,online:true,avatar:'/assets/expert-kavya.svg',tags:['Tarot','Love','Choices'],bio:'Kavya uses Tarot as a reflective tool for choices, relationships and emotional clarity.',methods:['Tarot','Symbolic coaching'],nextAvailable:'Now',verified:true},
  {id:'arjun',name:'Arjun Bhat',role:'Numerology guide',specialty:'Numerology',signature:'Name, timing & Lo Shu',years:16,languages:['English','Hindi'],rating:4.87,reviews:1336,rate:17,online:true,avatar:'/assets/expert-arjun.svg',tags:['Names','Lo Shu','Business'],bio:'Arjun focuses on practical numerology for names, launches and personal cycles.',methods:['Chaldean','Lo Shu','Personal year'],nextAvailable:'Now',verified:true},
  {id:'isha',name:'Isha Kulkarni',role:'Vastu consultant',specialty:'Vastu',signature:'Home & workspace alignment',years:20,languages:['English','Hindi','Marathi'],rating:4.93,reviews:2219,rate:31,online:false,avatar:'/assets/expert-isha.svg',tags:['Vastu','Home','Business'],bio:'Isha translates Vastu principles into realistic changes for modern homes and offices.',methods:['Vastu','Directional audit'],nextAvailable:'Tomorrow · 09:00',verified:true},
  {id:'riya',name:'Riya Malhotra',role:'Palmistry consultant',specialty:'Palmistry',signature:'Life-line & vocation reading',years:13,languages:['English','Hindi'],rating:4.88,reviews:1120,rate:20,online:true,avatar:'/assets/expert-riya.svg',tags:['Palmistry','Career','Temperament'],bio:'Riya combines hand-shape, major lines and mounts into grounded life-pattern readings.',methods:['Classical palmistry','Mount analysis'],nextAvailable:'Now',verified:true},
  {id:'kabir',name:'Kabir Joshi',role:'Vedic relationship guide',specialty:'Vedic',signature:'D9 & compatibility',years:15,languages:['English','Hindi'],rating:4.92,reviews:2051,rate:26,online:true,avatar:'/assets/expert-kabir.svg',tags:['D9','Marriage','Compatibility'],bio:'Kabir specializes in relationship dynamics, Navamsa and timing without deterministic claims.',methods:['D9','Ashta-koota','Upapada'],nextAvailable:'Now',verified:true}
];

const tool = (id:string,title:string,eyebrow:string,description:string,category:ToolSummary['category'],inputKind:ToolSummary['inputKind'],highlights:string[],premium=false,price?:number):ToolSummary => ({id,title,eyebrow,description,category,inputKind,highlights,premium,price,path:`/tools/${id}`});

export const tools: ToolSummary[] = [
  tool('kundli','Birth Chart · D1','Core chart','Planetary placements, houses, dignity and a concise chart summary.','Core chart','birth',['D1 chart','Planet table','Core themes']),
  tool('dasha','Vimshottari Dasha','Timing','Mahadasha to Pratyantar timeline with D1/D9/D10 lenses.','Timing','birth',['MD → AD → PD','Current period','Life themes']),
  tool('compatibility','Compatibility · Guna Milan','Relationships','Compare two birth profiles with an explainable 36-point demo score.','Relationships','two-births',['Ashta-koota','Strengths','Friction points']),
  tool('nakshatra','Nakshatra Deep Analysis','Purpose','Janma nakshatra, pada, temperament, symbols and practical themes.','Purpose','birth',['Nakshatra','Pada','Gana & yoni']),
  tool('numerology','Name Numerology','Purpose','Name vibration, life path and personal-year snapshot.','Purpose','name-date',['Life path','Expression','Personal year']),
  tool('deep-numerology','Deep Numerology & Lo Shu','Purpose','Lo Shu grid, driver/conductor and 12-month demo forecast.','Purpose','name-date',['Lo Shu','Lucky patterns','12-month view'],true,299),
  tool('rahu','Rahu Placement','Core chart','House-by-house Rahu themes for ambition, technology and amplification.','Core chart','birth',['House','Sign','Opportunity & risk']),
  tool('astro-gps','Astro GPS','Research','Rank demo cities for money, love, peace, fame or spirituality.','Research','birth-goal',['Goal scoring','City ranking','Planet line'],true,499),
  tool('forecast-20','20-Year Life Arc','Timing','A long-range demo roadmap organized by dasha chapters and year clusters.','Timing','birth',['20-year arc','Year clusters','Decision prompts'],true,899),
  tool('life-visual','Astro Visualization','Timing','A visual life-journey storyboard through your mahadasha phases.','Timing','birth',['Journey phases','Key motifs','Visual chapters'],true,5000),
  tool('life-replay','Life Replay','Timing','A cinematic chapter-by-chapter karmic timeline with major cycles.','Timing','birth',['9 chapters','Returns','Narrative timeline'],true,999),
  tool('varshaphal','Varshaphal · Yearly Reading','Timing','Tajaka-inspired annual themes with Muntha, year-lord and focus areas.','Timing','birth-year',['Year lord','Muntha','Annual themes'],true,399),
  tool('d27','Saptavimshamsha · D27','Core chart','Hidden strengths and resilience themes through the D27 lens.','Core chart','birth',['D27','Strength map','Resilience'],true,299),
  tool('planet-remedies','9-Planet Effects & Remedies','Remedies','Nine graha placements with reflective remedies and practice prompts.','Remedies','birth',['All 9 grahas','Mantra prompts','Gemstone cautions'],true,249),
  tool('bhrigu-bindu','Bhrigu Bindu','Purpose','A demo karmic midpoint reading for purpose and trigger transits.','Purpose','birth',['Moon-Rahu midpoint','Purpose','Trigger transits'],true,199),
  tool('kp-console','KP Sub-Lord Console','Timing','Planet and cusp sub-lord chains with ruling-planet snapshots.','Timing','birth',['Sub-lord chain','12 CSLs','Ruling planets'],true,499),
  tool('past-life','Past Life · D60','Purpose','An 11-chapter symbolic Shashtiamsa demo with birth-time sensitivity.','Purpose','birth',['D60','11 chapters','Karmic themes'],true,599),
  tool('navamsa','Navamsa · D9','Relationships','Marriage, dharma and second-half-of-life themes through D9.','Relationships','birth',['D9 chart','7H themes','Vargottama'],true,349),
  tool('d11','Rudramsha · D11','Wealth','Gains, networks and financial-karma themes through D11.','Wealth','birth',['D11','Gains','Network strength'],true,349),
  tool('d2','Hora · D2 Wealth','Wealth','A holistic D2 wealth demo with practical savings and business prompts.','Wealth','birth',['D2 chart','Wealth houses','Practical actions'],true,349),
  tool('doshas','Doshas & Remedies','Remedies','Mangal, Pitru, Shrapit, Grahan and other classical checks with context.','Remedies','birth',['Dosha checks','Severity','Remedy playbook'],true,299),
  tool('yogas','Raja Yogas','Core chart','Detect major classical yoga patterns and explain why they matter.','Core chart','birth',['Gajakesari','Panchamahapurusha','Jaimini']),
  tool('divisional','Divisional Charts · D1 → D60','Core chart','Browse a demo set of 19 vargas from one shared birth profile.','Core chart','birth',['19 vargas','Planet positions','Dignity']),
  tool('muhurat','Muhurat Finder','Timing','Pick an activity and see demo-ranked dates, windows and avoid periods.','Timing','birth-activity',['Activity filter','Best dates','Time windows']),
  tool('marriage-muhurat','Marriage Muhurat','Relationships','Two-person wedding-date finder with year and compatibility constraints.','Relationships','two-births-year',['Couple inputs','Year filter','4-hour windows']),
  tool('ishta-devata','Ishta Devata','Purpose','Jaimini-inspired Atmakaraka and Karakamsa demo pathway.','Purpose','birth',['Atmakaraka','Karakamsa','Deity archetype']),
  tool('ashtakavarga','Ashtakavarga','Core chart','BAV and SAV bindu-style house-strength demo.','Core chart','birth',['BAV','SAV','House strength']),
  tool('rashi-tulya','Rashi Tulya Navamsa','Relationships','Overlay D9 planets onto D1 to surface activated house themes.','Relationships','birth',['D1 + D9 overlay','Activated houses','Dasha cues']),
  tool('kalachakra','Kalachakra Dasha','Timing','Major-turnaround timeline with relationship, wealth and promotion tags.','Timing','birth',['9 MDs','9 ADs','Turnaround tags']),
  tool('chakra-map','Chakra & Purushartha Map','Purpose','A reflective chart-to-chakra and dharma/artha/kama/moksha heat-map.','Purpose','birth',['7 chakras','4 pursuits','Balance prompts']),
  tool('wealth-programming','Wealth Programming','Wealth','Curated reflective practices, mantras and habit prompts for money mindset.','Wealth','none',['Practice library','Weekly plan','Free module']),
  tool('celebrity-lookalike','Celebrity Chart Match','Research','Search the demo celebrity catalog by lagna and placement patterns.','Research','chart-search',['Lagna filter','Placement match','Research links']),
  tool('career-compass','Career Compass','Purpose','D1/D10-inspired strengths, work environments and timing prompts.','Purpose','birth',['Career strengths','Work style','5-year prompts'],true,399)
];

export const panchang:Panchang = {
  location:'Mumbai, India',dateLabel:'Monday · 7 September 2026',tithi:'Krishna Dwadashi',nakshatra:'Pushya',yoga:'Siddhi',rahuKaal:'07:47–09:20',moonSign:'Cancer',sunrise:'06:24',sunset:'18:47',
  note:'A quieter demo day for consolidation, review and finishing work already in motion.',
  auspicious:['Documentation','Planning','Mentor conversations'],avoid:['Impulse purchases','Unnecessary confrontation']
};

export const celebrities:Celebrity[] = [
  {id:'jobs',name:'Steve Jobs',field:'Technology',category:'Billionaires',rating:'AA',milestone:'Apple turnaround era',dasha:'Mercury · Venus',pattern:'Communication, aesthetics and product focus become the public signature.',birth:'24 Feb 1955 · 19:15',place:'San Francisco, USA',ascendant:'Virgo',navamsa:'Capricorn',story:'A research-demo entry connecting product focus and public milestones to a timing narrative.',tags:['Technology','Design','Founder']},
  {id:'oprah',name:'Oprah Winfrey',field:'Media',category:'Rags to Riches',rating:'AA',milestone:'National syndication breakthrough',dasha:'Venus · Jupiter',pattern:'Audience growth aligns with benefic visibility and network expansion.',birth:'29 Jan 1954 · 04:30',place:'Kosciusko, USA',ascendant:'Sagittarius',navamsa:'Taurus',story:'A demo research story focused on scale, voice and audience trust.',tags:['Media','Self-made','Communication']},
  {id:'ambani',name:'Dhirubhai Ambani',field:'Business',category:'Billionaires',rating:'AA',milestone:'Reliance public expansion',dasha:'Rahu · Mercury',pattern:'Scale, markets and communications dominate the growth narrative.',birth:'28 Dec 1932 · 06:37',place:'Chorwad, India',ascendant:'Sagittarius',navamsa:'Virgo',story:'A demo case about scale, trade, markets and network effects.',tags:['Business','Markets','India']},
  {id:'vivekananda',name:'Swami Vivekananda',field:'Spirituality',category:'Spiritual Guides',rating:'A',milestone:'Chicago Parliament of Religions',dasha:'Mercury · Jupiter',pattern:'Teaching and cross-cultural transmission activate at once.',birth:'12 Jan 1863 · 06:33',place:'Kolkata, India',ascendant:'Sagittarius',navamsa:'Aquarius',story:'A demo research case focused on teaching, travel and public philosophy.',tags:['Spirituality','Teacher','Travel']},
  {id:'chaplin',name:'Charlie Chaplin',field:'Film',category:'Internet & Culture',rating:'AA',milestone:'Global silent-film fame',dasha:'Venus · Mercury',pattern:'Artistry and expressive skill combine into mass recognition.',birth:'16 Apr 1889 · 20:00',place:'London, UK',ascendant:'Libra',navamsa:'Gemini',story:'A demo case about performance, symbolism and mass reach.',tags:['Film','Art','Fame']},
  {id:'elizabeth',name:'Queen Elizabeth II',field:'Royalty',category:'Royalty',rating:'AA',milestone:'Accession to the throne',dasha:'Saturn · Mercury',pattern:'Duty, institution and formal responsibility define the period.',birth:'21 Apr 1926 · 02:40',place:'London, UK',ascendant:'Capricorn',navamsa:'Taurus',story:'A demo case about institutional duty, continuity and public role.',tags:['Royalty','Duty','Institution']},
  {id:'musk',name:'Elon Musk',field:'Technology',category:'Billionaires',rating:'A',milestone:'SpaceX commercial expansion',dasha:'Rahu · Jupiter',pattern:'Technology, risk and global amplification dominate the narrative.',birth:'28 Jun 1971 · 07:30',place:'Pretoria, South Africa',ascendant:'Cancer',navamsa:'Libra',story:'A demo case about high-risk technology and scaling narratives.',tags:['Technology','Space','Founder']},
  {id:'rowling',name:'J. K. Rowling',field:'Publishing',category:'Rags to Riches',rating:'A',milestone:'Harry Potter publication breakthrough',dasha:'Jupiter · Mercury',pattern:'Writing, education and publishing themes synchronize with the milestone.',birth:'31 Jul 1965 · 14:00',place:'Yate, UK',ascendant:'Scorpio',navamsa:'Pisces',story:'A demo case about writing craft, persistence and scale.',tags:['Writing','Publishing','Self-made']}
];

export const reports:Report[] = [
  {id:'twenty-year',title:'20-Year Life Arc',description:'A long-form roadmap covering major dasha chapters, opportunities and reflective prompts.',price:899,pages:'40+ pages',badge:'Most complete',includes:['Birth chart snapshot','Dasha chapters','Year-by-year prompts','Remedy cautions'],delivery:'Instant demo preview'},
  {id:'relationships',title:'Relationship Blueprint',description:'D1/D9-inspired relationship themes, communication patterns and timing windows.',price:499,pages:'18+ pages',badge:'Popular',includes:['D1/D9 themes','Communication map','Timing windows','Compatibility prompts'],delivery:'Instant demo preview'},
  {id:'career',title:'Career Compass',description:'Career themes, strengths, decision prompts and a five-year demo timeline.',price:599,pages:'22+ pages',badge:'New',includes:['D1/D10 lenses','Work style','5-year timeline','Decision checklist'],delivery:'Instant demo preview'}
];

export const products:Product[] = [
  {id:'yellow-sapphire',title:'Yellow Sapphire · Demo',category:'Gemstone',description:'A product-detail demo for a certified-stone storefront flow.',price:12500,badge:'Lab report',image:'/assets/gem-yellow.svg',details:['Natural-stone demo card','Certification placeholder','7-day demo return policy']},
  {id:'red-coral',title:'Italian Red Coral · Demo',category:'Gemstone',description:'A product-detail demo for Mars-oriented recommendations.',price:9800,badge:'Popular',image:'/assets/gem-coral.svg',details:['Origin placeholder','Certification placeholder','Insured shipping demo']},
  {id:'ruby',title:'Ruby · Demo',category:'Gemstone',description:'A storefront demo item with transparent non-medical/non-guarantee language.',price:15400,badge:'Premium',image:'/assets/gem-ruby.svg',details:['Natural-stone demo card','No guaranteed outcomes','Certification placeholder']}
];

export const blogPosts:BlogPost[] = [
  {slug:'how-to-read-dasha',title:'How to read a Dasha without turning it into fate',excerpt:'A practical framework for timing periods as context, not certainty.',date:'Aug 28, 2026',readTime:'7 min',category:'Timing',body:['A dasha is best treated as a changing emphasis in the chart rather than a guaranteed event list.','Start with the mahadasha lord, then inspect house ownership, placement and dignity before narrowing to antardasha.','Use real-life context and decisions as the final layer. Astrology should support reflection rather than replace judgment.']},
  {slug:'navamsa-marriage',title:'Navamsa beyond marriage',excerpt:'Why D9 can be useful for values, maturity and dharma—not only spouse predictions.',date:'Aug 20, 2026',readTime:'6 min',category:'Relationships',body:['D9 is often marketed as a marriage chart, but its interpretive range is broader.','A useful reading compares D1 promises with D9 reinforcement, contradiction and maturity.','Avoid treating one placement as a verdict about marriage quality.']},
  {slug:'birth-time-sensitivity',title:'Birth-time sensitivity in D60',excerpt:'Why a few minutes can radically alter fine divisional charts.',date:'Aug 12, 2026',readTime:'5 min',category:'Technique',body:['Fine vargas change quickly, which makes birth-time quality a first-order input.','D60 should never be presented with false precision when the recorded birth time is uncertain.','Use it as a research layer only after time quality is established.']}
];

export const consultations:Consultation[] = [
  {id:'c-1042',expertId:'anaya',expertName:'Anaya Rao',specialty:'Vedic',startedAt:'5 Sep 2026 · 19:10',minutes:18,amount:432,status:'completed',topic:'Career timing'},
  {id:'c-1038',expertId:'kabir',expertName:'Kabir Joshi',specialty:'Vedic',startedAt:'1 Sep 2026 · 13:30',minutes:12,amount:312,status:'completed',topic:'Relationship patterns'},
  {id:'c-1051',expertId:'dev',expertName:'Dev Mehta',specialty:'KP',startedAt:'8 Sep 2026 · 10:00',minutes:30,amount:660,status:'scheduled',topic:'Job-change timing'}
];

export const wallet:Wallet = {
  balance:780,currency:'INR',welcomeCredits:120,
  transactions:[
    {id:'w1',label:'Welcome credit',amount:120,date:'1 Sep 2026',kind:'credit'},
    {id:'w2',label:'Wallet top-up',amount:1500,date:'2 Sep 2026',kind:'credit'},
    {id:'w3',label:'Chat · Anaya Rao',amount:-432,date:'5 Sep 2026',kind:'debit'},
    {id:'w4',label:'Relationship Blueprint',amount:-408,date:'6 Sep 2026',kind:'debit'}
  ]
};
