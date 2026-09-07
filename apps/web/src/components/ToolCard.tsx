import type { ToolSummary } from '@vedanova/contracts';
import { ArrowUpRight,LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ToolCard({tool}:{tool:ToolSummary}){return <Link className="card tool-card" to={tool.path}><div className="tool-card-head"><span className="eyebrow">{tool.eyebrow}</span>{tool.premium?<span className="premium-pill"><LockKeyhole size={11}/> ₹{tool.price}</span>:<span className="free-pill">Free demo</span>}</div><h3>{tool.title}</h3><p>{tool.description}</p><div className="tag-row">{tool.highlights.slice(0,3).map(x=><span className="tag" key={x}>{x}</span>)}</div><div className="tool-card-foot"><span>{tool.category}</span><ArrowUpRight size={17}/></div></Link>}
