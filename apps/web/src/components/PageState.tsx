import { AlertTriangle,LoaderCircle } from 'lucide-react';
export function PageState({loading,error,children}:{loading?:boolean;error?:string|null;children:React.ReactNode}){
  if(loading)return <div className="state-card card"><LoaderCircle className="spin"/><div><b>Loading demo data</b><p>The API stub is preparing this screen.</p></div></div>;
  if(error)return <div className="state-card card error-state"><AlertTriangle/><div><b>Could not load this module</b><p>{error}</p></div></div>;
  return <>{children}</>;
}
export function EmptyState({title,body}:{title:string;body:string}){return <div className="state-card card"><div><b>{title}</b><p>{body}</p></div></div>}
