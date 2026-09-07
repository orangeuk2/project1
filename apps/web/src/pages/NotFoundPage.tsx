import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export function NotFoundPage(){return <section className="section page-top"><div className="container narrow-wide"><div className="card not-found"><span>404</span><h1>This path is outside the chart.</h1><p>The page does not exist in the VedaNova demo.</p><Link className="button" to="/"><ArrowLeft/> Back home</Link></div></div></section>}
