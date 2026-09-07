import type { BlogPost, BirthProfile, Celebrity, Consultation, DashboardData, Expert, Order, Panchang, Product, Report, ToolRunResult, ToolSummary, Wallet, PortalStats } from '@vedanova/contracts';
const API_URL=(import.meta.env.VITE_API_URL as string|undefined)||'/api';
async function request<T>(path:string,init?:RequestInit):Promise<T>{
  const response=await fetch(`${API_URL}${path}`,{...init,headers:{'Content-Type':'application/json',...(init?.headers||{})}});
  if(!response.ok){let message=`API ${response.status}`;try{const body=await response.json() as {message?:string};if(body.message)message=body.message;}catch{message=`API ${response.status}: ${response.statusText||'Request failed'}`;}throw new Error(message);}
  return response.json() as Promise<T>;
}
const json=(body:unknown)=>JSON.stringify(body);
export const api={
  health:()=>request<{status:string;service:string;mode:string}>('/health'),
  home:()=>request<{experts:Expert[];tools:ToolSummary[];panchang:Panchang;reports:Report[];testimonials:Array<{name:string;city:string;quote:string;readBy:string}>}>('/home'),
  experts:(params:{specialty?:string;language?:string;online?:boolean;q?:string}={})=>{const q=new URLSearchParams();if(params.specialty&&params.specialty!=='All')q.set('specialty',params.specialty);if(params.language&&params.language!=='All')q.set('language',params.language);if(params.online!==undefined)q.set('online',String(params.online));if(params.q)q.set('q',params.q);return request<Expert[]>(`/experts?${q.toString()}`)},
  expert:(id:string)=>request<Expert>(`/experts/${id}`),
  createChat:(expertId:string)=>request<{sessionId:string;expert:Expert;freeMinutes:number;walletBalance:number;suggestedPrompts:string[]}>('/chat/sessions',{method:'POST',body:json({expertId})}),
  sendMessage:(sessionId:string,message:string,expertId?:string)=>request<{id:string;role:'assistant';content:string;createdAt:string}>(`/chat/sessions/${sessionId}/messages`,{method:'POST',body:json({message,expertId})}),
  tools:()=>request<ToolSummary[]>('/tools'),
  tool:(id:string)=>request<ToolSummary>(`/tools/${id}`),
  runTool:(id:string,body:Record<string,unknown>)=>request<ToolRunResult>(`/tools/${id}/run`,{method:'POST',body:json(body)}),
  profile:()=>request<BirthProfile>('/profile'),
  saveProfile:(profile:BirthProfile)=>request<BirthProfile&{saved:boolean}>('/profile',{method:'PATCH',body:json(profile)}),
  panchang:()=>request<Panchang>('/panchang'),
  celebrities:(q='',category='All')=>request<Celebrity[]>(`/celebrities?q=${encodeURIComponent(q)}&category=${encodeURIComponent(category)}`),
  celebrity:(id:string)=>request<Celebrity>(`/celebrities/${id}`),
  reports:()=>request<Report[]>('/reports'),
  report:(id:string)=>request<Report>(`/reports/${id}`),
  buyReport:(id:string)=>request<{order:Order;message:string}>(`/reports/${id}/purchase`,{method:'POST'}),
  products:()=>request<Product[]>('/store'),
  product:(id:string)=>request<Product>(`/store/${id}`),
  buyProduct:(id:string)=>request<{order:Order;message:string}>(`/store/${id}/purchase`,{method:'POST'}),
  blog:()=>request<BlogPost[]>('/blog'),
  post:(slug:string)=>request<BlogPost>(`/blog/${slug}`),
  wallet:()=>request<Wallet>('/wallet'),
  topUp:(amount:number)=>request<Wallet>('/wallet/top-up',{method:'POST',body:json({amount})}),
  consultations:()=>request<Consultation[]>('/consultations'),
  dashboard:()=>request<DashboardData>('/dashboard'),
  portal:()=>request<PortalStats>('/portal/stats'),
  applyExpert:(body:Record<string,unknown>)=>request<{applicationId:string;status:string;received:boolean}>('/portal/apply',{method:'POST',body:json(body)}),
  bookService:(id:string,body:Record<string,unknown>)=>request<{bookingId:string;serviceId:string;status:string;message:string}>(`/services/${id}/book`,{method:'POST',body:json(body)})
};
