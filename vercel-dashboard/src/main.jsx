import React from 'react';
import ReactDOM from 'react-dom/client';
import { Activity, Database, ShieldCheck, Cpu, BarChart3 } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import './styles.css';

const data=[{name:'Mon',throughput:20},{name:'Tue',throughput:45},{name:'Wed',throughput:30},{name:'Thu',throughput:65},{name:'Fri',throughput:90}];
const cards=[
{title:'Streaming Events',value:'12.5M/day',icon:Activity},
{title:'ML Predictions',value:'98.7%',icon:Cpu},
{title:'Data Quality',value:'99.99%',icon:ShieldCheck},
{title:'Warehouse Sync',value:'1.2 TB',icon:Database},
];

function App(){
return <div className='page'>
<div className='hero'>
<h1>Enterprise Data Pipeline Command Center</h1>
<p>Modernized end-to-end data engineering platform with Kafka streaming, Spark transformations, ML observability, data governance and scalable deployment architecture.</p>
</div>
<div className='grid'>
{cards.map((c,i)=><div key={i} className='card'>
<c.icon size={32}/>
<h3>{c.title}</h3>
<h2>{c.value}</h2>
</div>)}
</div>
<div className='chart'>
<div className='chart-header'>
<h2><BarChart3/> Pipeline Throughput Analytics</h2>
<span>Real-time monitoring dashboard</span>
</div>
<ResponsiveContainer width='100%' height={300}>
<AreaChart data={data}>
<XAxis dataKey='name'/>
<YAxis/>
<Tooltip/>
<Area type='monotone' dataKey='throughput' stroke='#7c3aed' fill='#a78bfa'/>
</AreaChart>
</ResponsiveContainer>
</div>
<div className='features'>
<div>
<h2>Enhanced Features</h2>
<ul>
<li>Real-time Kafka ingestion pipelines</li>
<li>Automated Great Expectations validation</li>
<li>MLFlow experiment tracking integration</li>
<li>Production-grade observability stack</li>
<li>Kubernetes + Terraform deployment ready</li>
<li>Vercel-compatible analytics dashboard</li>
</ul>
</div>
<div className='glass'>
<h3>Deployment</h3>
<p>Run <code>npm install</code> and <code>npm run build</code>, then deploy the <code>vercel-dashboard</code> directory to Vercel.</p>
</div>
</div>
</div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
