import { Search,SlidersHorizontal } from 'lucide-react';
import { useEffect,useMemo,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Expert } from '@vedanova/contracts';
import { ExpertCard } from '../components/ExpertCard';
import { EmptyState,PageState } from '../components/PageState';
import { api } from '../lib/api';

const specialties=['All','Vedic','Nadi','KP','Tarot','Numerology','Palmistry','Vastu'];
const languages=['All','English','Hindi','Tamil','Gujarati','Bengali','Marathi'];
export function ExpertsPage(){
  const[params]=useSearchParams();
  const[specialty,setSpecialty]=useState(params.get('specialty')||'All');const[language,setLanguage]=useState('All');const[onlineOnly,setOnlineOnly]=useState(false);const[q,setQ]=useState('');const[data,setData]=useState<Expert[]>([]);const[loading,setLoading]=useState(true);const[error,setError]=useState<string|null>(null);
  useEffect(()=>{let alive=true;setLoading(true);setError(null);api.experts({specialty,language,online:onlineOnly?true:undefined,q}).then(x=>{if(alive)setData(x)}).catch(e=>{if(alive)setError(e instanceof Error?e.message:'Could not load experts')}).finally(()=>{if(alive)setLoading(false)});return()=>{alive=false}},[specialty,language,onlineOnly,q]);
  const avg=useMemo(()=>data.length?(data.reduce((sum,x)=>sum+x.rating,0)/data.length).toFixed(2):'—',[data]);
  return <section className="section page-top"><div className="container"><div className="page-hero compact-hero"><div className="eyebrow">Consultation marketplace</div><h1>Find the right guide for the question.</h1><p>Filter by practice, language and live availability. All expert profiles are fictional demo data.</p><div className="mini-metrics"><span><b>{data.length}</b> matches</span><span><b>{avg}</b> avg rating</span><span><b>{data.filter(x=>x.online).length}</b> online now</span></div></div><div className="expert-controls card"><label className="search-field wide-search"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name, method or topic…"/></label><div className="control-row"><div><span className="control-label"><SlidersHorizontal size={14}/> Practice</span><div className="filter-pills">{specialties.map(x=><button key={x} className={specialty===x?'filter-pill active':'filter-pill'} onClick={()=>setSpecialty(x)}>{x}</button>)}</div></div><label className="select-control"><span>Language</span><select value={language} onChange={e=>setLanguage(e.target.value)}>{languages.map(x=><option key={x}>{x}</option>)}</select></label><label className="toggle-control"><input type="checkbox" checked={onlineOnly} onChange={e=>setOnlineOnly(e.target.checked)}/><span/> Online only</label></div></div><PageState loading={loading} error={error}>{data.length?<div className="card-grid expert-grid roomy-grid">{data.map(e=><ExpertCard key={e.id} expert={e}/>)}</div>:<EmptyState title="No experts match these filters" body="Try another practice or turn off the online-only filter."/>}</PageState></div></section>
}
