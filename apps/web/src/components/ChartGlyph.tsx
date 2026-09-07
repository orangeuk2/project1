const planets=['Su','Mo','Ma','Me','Ju','Ve','Sa','Ra','Ke'];
export function ChartGlyph({title='D1'}:{title?:string}){return <div className="chart-glyph" aria-label={`${title} demo chart`}><div className="chart-diamond"/><div className="chart-title">{title}</div>{planets.map((p,i)=><span className={`planet p${i}`} key={p}>{p}</span>)}</div>}
