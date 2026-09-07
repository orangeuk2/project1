import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { BirthProfile, Order } from '@vedanova/contracts';
import { blogPosts, celebrities, consultations, experts, panchang, products, reports, tools, wallet } from './data.js';
import { makeToolResult } from './results.js';

const app = new Hono();
const port = Number(process.env.API_PORT || 8787);
const origin = process.env.WEB_ORIGIN || 'http://localhost:5173';
const profile:BirthProfile = {name:'Demo Seeker',date:'1993-11-18',time:'07:42',place:'Mumbai, India',timezone:'Asia/Kolkata'};

app.use('/api/*', cors({origin}));
app.use('/api/*', async (c,next) => {
  const started=Date.now();
  await new Promise(r=>setTimeout(r,120));
  await next();
  c.header('X-Demo-Latency', String(Date.now()-started));
});

app.get('/api/health', c=>c.json({status:'ok',service:'vedanova-demo-api',mode:'static-demo'}));
app.get('/api/home', c=>c.json({experts:experts.slice(0,4),tools:tools.slice(0,8),panchang,reports:reports.slice(0,2),testimonials:[
  {name:'Priya S.',city:'Bengaluru',quote:'The consultation flow felt calm and specific instead of overwhelming.',readBy:'Anaya Rao'},
  {name:'Arjun M.',city:'Mumbai',quote:'I liked seeing the reasoning separated from the recommendation.',readBy:'Dev Mehta'},
  {name:'Divya R.',city:'Hyderabad',quote:'The tool library makes it easy to compare different lenses from one birth profile.',readBy:'Arjun Bhat'}
]}));

app.get('/api/experts', c=>{
  const specialty=c.req.query('specialty');
  const language=c.req.query('language');
  const online=c.req.query('online');
  const q=(c.req.query('q')||'').toLowerCase();
  return c.json(experts.filter(e=>(!specialty||specialty==='All'||e.specialty===specialty)&&(!language||language==='All'||e.languages.includes(language))&&(!online||String(e.online)===online)&&(!q||`${e.name} ${e.signature} ${e.tags.join(' ')}`.toLowerCase().includes(q))));
});
app.get('/api/experts/:id', c=>{
  const e=experts.find(x=>x.id===c.req.param('id'));
  return e?c.json(e):c.json({message:'Expert not found'},404);
});

app.post('/api/chat/sessions', async c=>{
  const body=await c.req.json<{expertId:string}>();
  const expert=experts.find(x=>x.id===body.expertId)||experts[0];
  return c.json({sessionId:`demo-${expert.id}-${Date.now()}`,expert,freeMinutes:3,walletBalance:wallet.balance,suggestedPrompts:['What is the main theme of my current dasha?','What should I focus on in career this year?','What relationship pattern should I understand?']});
});
app.post('/api/chat/sessions/:id/messages', async c=>{
  const body=await c.req.json<{message:string;expertId?:string}>();
  const topic=body.message.toLowerCase();
  const focus=topic.includes('career')?'career, the 10th-house lens and timing':topic.includes('love')||topic.includes('relationship')||topic.includes('marriage')?'relationship patterns and the D9 lens':topic.includes('money')||topic.includes('wealth')?'resources, gains and decision timing':'your current priorities and the active timing cycle';
  return c.json({id:`reply-${Date.now()}`,role:'assistant',createdAt:new Date().toISOString(),content:`For this demo reading I would begin with ${focus}. The static sample profile is in a Jupiter–Mercury chapter, so I would separate what is expanding from what needs a clearer system. In production this response will be generated from calculated chart data plus the selected advisor method.`});
});

app.get('/api/tools', c=>c.json(tools));
app.get('/api/tools/:id', c=>{
  const item=tools.find(x=>x.id===c.req.param('id'));
  return item?c.json(item):c.json({message:'Tool not found'},404);
});
app.post('/api/tools/:id/run', async c=>{
  const id=c.req.param('id');
  if(!tools.some(t=>t.id===id)) return c.json({message:'Tool not found'},404);
  const body=await c.req.json<Record<string,unknown>>().catch(()=>({}));
  return c.json(makeToolResult(id,body));
});

app.get('/api/profile', c=>c.json(profile));
app.patch('/api/profile', async c=>{
  const body=await c.req.json<BirthProfile>();
  return c.json({...profile,...body,saved:true});
});
app.get('/api/panchang', c=>c.json(panchang));

app.get('/api/celebrities', c=>{
  const q=(c.req.query('q')||'').toLowerCase();
  const category=c.req.query('category');
  return c.json(celebrities.filter(x=>(!category||category==='All'||x.category===category)&&(!q||`${x.name} ${x.field} ${x.tags.join(' ')}`.toLowerCase().includes(q))));
});
app.get('/api/celebrities/:id', c=>{
  const item=celebrities.find(x=>x.id===c.req.param('id'));
  return item?c.json(item):c.json({message:'Celebrity not found'},404);
});

app.get('/api/reports', c=>c.json(reports));
app.get('/api/reports/:id', c=>{
  const item=reports.find(x=>x.id===c.req.param('id'));
  return item?c.json(item):c.json({message:'Report not found'},404);
});
app.post('/api/reports/:id/purchase', c=>{
  const item=reports.find(x=>x.id===c.req.param('id'));
  if(!item) return c.json({message:'Report not found'},404);
  const order:Order={id:`ord-${Date.now()}`,itemType:'report',itemId:item.id,title:item.title,amount:item.price,status:'demo',createdAt:new Date().toISOString()};
  return c.json({order,message:'Demo purchase complete. No payment was processed.'});
});

app.get('/api/store', c=>c.json(products));
app.get('/api/store/:id', c=>{
  const item=products.find(x=>x.id===c.req.param('id'));
  return item?c.json(item):c.json({message:'Product not found'},404);
});
app.post('/api/store/:id/purchase', c=>{
  const item=products.find(x=>x.id===c.req.param('id'));
  if(!item) return c.json({message:'Product not found'},404);
  const order:Order={id:`ord-${Date.now()}`,itemType:'product',itemId:item.id,title:item.title,amount:item.price,status:'demo',createdAt:new Date().toISOString()};
  return c.json({order,message:'Demo checkout complete. No charge or shipment was created.'});
});

app.get('/api/blog', c=>c.json(blogPosts));
app.get('/api/blog/:slug', c=>{
  const item=blogPosts.find(x=>x.slug===c.req.param('slug'));
  return item?c.json(item):c.json({message:'Post not found'},404);
});

app.get('/api/wallet', c=>c.json(wallet));
app.post('/api/wallet/top-up', async c=>{
  const body=await c.req.json<{amount:number}>();
  const amount=Math.max(100,Math.min(Number(body.amount)||500,10000));
  return c.json({...wallet,balance:wallet.balance+amount,transactions:[{id:`top-${Date.now()}`,label:'Demo wallet top-up',amount,date:'Now',kind:'credit' as const},...wallet.transactions]});
});
app.get('/api/consultations', c=>c.json(consultations));
app.get('/api/dashboard', c=>c.json({profile,wallet,consultations:consultations.slice(0,3),reports,recentTools:[{toolId:'kundli',title:'Birth Chart · D1',when:'Today'},{toolId:'dasha',title:'Vimshottari Dasha',when:'Yesterday'},{toolId:'astro-gps',title:'Astro GPS',when:'3 days ago'}],savedInsights:[{title:'Current focus',body:'Turn learning into systems.'},{title:'Relationship note',body:'Name expectations earlier.'}]}));

app.get('/api/portal/stats', c=>c.json({status:'demo',todayEarnings:1240,monthEarnings:28450,activeChats:2,rating:4.93,responseTime:'42 sec',upcoming:[{time:'16:30',client:'Demo Client A',topic:'Career'},{time:'18:00',client:'Demo Client B',topic:'Compatibility'}]}));
app.post('/api/portal/apply', async c=>{
  const body=await c.req.json<Record<string,unknown>>();
  return c.json({applicationId:`app-${Date.now()}`,status:'demo',received:true,preview:body});
});

app.post('/api/services/:id/book', async c=>{
  const id=c.req.param('id');
  const body=await c.req.json<Record<string,unknown>>().catch(()=>({}));
  return c.json({bookingId:`book-${Date.now()}`,serviceId:id,status:'demo',request:body,message:'Demo booking created. No calendar event or payment was created.'});
});

app.notFound(c=>c.json({message:'Route not found'},404));
app.onError((error,c)=>{console.error(error);return c.json({message:'Demo API error'},500);});
serve({fetch:app.fetch,port},info=>console.log(`VedaNova API listening on http://localhost:${info.port}`));
