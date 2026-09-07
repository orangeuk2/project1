import { Menu,Moon,Search,Sparkles,Sun,WalletCards,X } from 'lucide-react';
import { useEffect,useMemo,useState } from 'react';
import { Link,NavLink,Outlet,useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import type { ToolSummary } from '@vedanova/contracts';
import { Logo } from './Logo';

const nav=[['Consult','/experts'],['Tools','/tools'],['Research','/celebrities'],['Daily','/daily'],['Journal','/blog'],['Store','/store']];

export function Layout(){
  const[dark,setDark]=useState(()=>localStorage.getItem('theme')==='dark');
  const[menu,setMenu]=useState(false);const[search,setSearch]=useState(false);const[query,setQuery]=useState('');const[tools,setTools]=useState<ToolSummary[]>([]);const navigate=useNavigate();
  useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('theme',dark?'dark':'light')},[dark]);
  useEffect(()=>{void api.tools().then(setTools).catch(()=>undefined)},[]);
  useEffect(()=>{const handler=(event:KeyboardEvent)=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();setSearch(true)}if(event.key==='Escape'){setSearch(false);setMenu(false)}};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler)},[]);
  const matches=useMemo(()=>{const q=query.trim().toLowerCase();if(!q)return tools.slice(0,6);return tools.filter(t=>`${t.title} ${t.description} ${t.category}`.toLowerCase().includes(q)).slice(0,7)},[query,tools]);
  const open=(path:string)=>{setSearch(false);setQuery('');navigate(path)};
  return <div className="app-shell">
    <div className="cosmic-bar"><Sparkles size={14}/> Interactive demo · all tools use the API stub · no real payment or astrology math yet</div>
    <header className="site-header"><div className="container nav-wrap"><Logo/><nav className="desktop-nav">{nav.map(([label,path])=><NavLink key={path} to={path}>{label}</NavLink>)}</nav><div className="nav-actions"><button className="icon-btn" aria-label="Search" onClick={()=>setSearch(true)}><Search size={18}/></button><Link className="icon-btn" aria-label="Wallet" to="/wallet"><WalletCards size={18}/></Link><button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><Link className="button button-small" to="/dashboard">My space</Link><button className="icon-btn mobile-menu-btn" aria-label="Menu" onClick={()=>setMenu(!menu)}>{menu?<X size={20}/>:<Menu size={20}/>}</button></div></div>{menu&&<nav className="mobile-nav">{nav.map(([label,path])=><NavLink onClick={()=>setMenu(false)} key={path} to={path}>{label}</NavLink>)}<NavLink onClick={()=>setMenu(false)} to="/dashboard">My space</NavLink><NavLink onClick={()=>setMenu(false)} to="/reports">Reports</NavLink></nav>}</header>
    <main><Outlet/></main>
    <footer className="site-footer"><div className="container footer-grid"><div><Logo/><p>Modern Jyotish interfaces, human guidance and research tools built around one reusable birth profile.</p><div className="demo-note">Static demo backend now · production calculations later.</div></div><div><h4>Consult</h4><Link to="/experts">Experts</Link><Link to="/consultations">Consultations</Link><Link to="/reading">Private reading</Link><Link to="/expert-portal">Astrologer portal</Link></div><div><h4>Explore</h4><Link to="/tools">All tools</Link><Link to="/daily">Daily brief</Link><Link to="/celebrities">Celebrity research</Link><Link to="/blog">Journal</Link></div><div><h4>Account</h4><Link to="/dashboard">Dashboard</Link><Link to="/account">Birth profile</Link><Link to="/wallet">Wallet</Link><Link to="/reports">Reports</Link><Link to="/store">Store</Link></div></div><div className="container footer-bottom"><span>© 2026 VedaNova demo</span><span>Original design · API-first architecture</span></div></footer>
    {search&&<div className="modal-backdrop" onClick={()=>setSearch(false)}><div className="search-modal card" onClick={e=>e.stopPropagation()}><div className="search-input-row"><Search size={20}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tools…"/><kbd>Esc</kbd></div><div className="search-results">{matches.map(t=><button key={t.id} onClick={()=>open(t.path)}><span><b>{t.title}</b><small>{t.category} · {t.eyebrow}</small></span><span>→</span></button>)}{query&&matches.length===0&&<p>No matching tool. Try “Dasha”, “D9” or “money”.</p>}</div></div></div>}
  </div>;
}
