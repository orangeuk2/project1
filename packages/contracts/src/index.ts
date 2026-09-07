export type Specialty = 'Vedic'|'Nadi'|'KP'|'Tarot'|'Numerology'|'Palmistry'|'Vastu';
export type ToolCategory = 'Core chart'|'Timing'|'Relationships'|'Purpose'|'Research'|'Wealth'|'Remedies';
export type ToolInputKind = 'birth'|'birth-goal'|'two-births'|'name-date'|'birth-year'|'birth-activity'|'two-births-year'|'chart-search'|'none';

export type Expert = {
  id:string; name:string; role:string; specialty:Specialty; signature:string; years:number;
  languages:string[]; rating:number; reviews:number; rate:number; online:boolean; avatar:string;
  tags:string[]; bio:string; methods:string[]; nextAvailable:string; verified:boolean;
};

export type ToolSummary = {
  id:string; title:string; eyebrow:string; description:string; category:ToolCategory; path:string;
  premium?:boolean; price?:number; inputKind:ToolInputKind; highlights:string[];
};

export type BirthProfile = { name:string; date:string; time:string; place:string; timezone:string };
export type Panchang = { location:string; dateLabel:string; tithi:string; nakshatra:string; yoga:string; rahuKaal:string; moonSign:string; sunrise:string; sunset:string; note:string; auspicious:string[]; avoid:string[] };
export type ChatMessage = { id:string; role:'user'|'assistant'; content:string; createdAt:string };
export type Consultation = { id:string; expertId:string; expertName:string; specialty:string; startedAt:string; minutes:number; amount:number; status:'completed'|'active'|'scheduled'; topic:string };
export type Wallet = { balance:number; currency:'INR'; welcomeCredits:number; transactions:Array<{id:string;label:string;amount:number;date:string;kind:'credit'|'debit'}> };

export type Metric = { label:string; value:string; note?:string };
export type ResultSection = { title:string; body:string; items?:string[]; tone?:'neutral'|'positive'|'caution' };
export type TimelineItem = { title:string; start:string; end:string; tag:string; note:string };
export type TableBlock = { columns:string[]; rows:string[][] };
export type ToolRunResult = {
  toolId:string; title:string; summary:string; disclaimer:string; score?:{value:number;max:number;label:string};
  metrics:Metric[]; sections:ResultSection[]; timeline?:TimelineItem[]; table?:TableBlock;
};

export type Celebrity = {
  id:string; name:string; field:string; category:string; rating:'AA'|'A'|'B'; milestone:string; dasha:string; pattern:string;
  birth:string; place:string; ascendant:string; navamsa:string; story:string; tags:string[];
};

export type Report = { id:string; title:string; description:string; price:number; pages:string; badge:string; includes:string[]; delivery:string };
export type Product = { id:string; title:string; category:string; description:string; price:number; badge?:string; image:string; details:string[] };
export type BlogPost = { slug:string; title:string; excerpt:string; date:string; readTime:string; category:string; body:string[] };
export type Order = { id:string; itemType:'report'|'product'|'service'|'course'; itemId:string; title:string; amount:number; status:'paid'|'demo'; createdAt:string };

export type DashboardData = {
  profile:BirthProfile; wallet:Wallet; consultations:Consultation[]; reports:Report[];
  recentTools:Array<{toolId:string;title:string;when:string}>; savedInsights:Array<{title:string;body:string}>;
};

export type PortalStats = {
  status:'demo'|'pending'|'approved'; todayEarnings:number; monthEarnings:number; activeChats:number;
  rating:number; responseTime:string; upcoming:Array<{time:string;client:string;topic:string}>;
};
