const { useState, useEffect } = React;

const AFFILIATE_LINK = "https://your-weightloss-offer.com?hop=user";

const QUESTIONS = [
    { id: 1, text: "Primary weight loss goal?", options: ["Stubborn Fat", "Total Transformation", "Tone & Muscle"] },
    { id: 2, text: "Metabolic speed?", options: ["Slow", "Average", "Stalled"] },
    { id: 3, text: "Energy levels?", options: ["Low", "Crashes", "Steady"] },
    { id: 4, text: "Sleep per night?", options: ["< 6 hours", "6-8 hours", "8+ hours"] },
    { id: 5, text: "Eating habits?", options: ["Healthy/No loss", "Stress eating", "Yo-Yo dieting"] },
    { id: 6, text: "Age range?", options: ["Under 35", "35-55", "Over 55"] }
];

function App() {
    const [view, setView] = useState('intro');
    const [curr, setCurr] = useState(0);

    const next = () => {
        if (curr < QUESTIONS.length - 1) setCurr(curr + 1);
        else {
            setView('loading');
            setTimeout(() => setView('results'), 3000);
        }
    };

    if (view === 'intro') return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <header className="fixed top-0 w-full p-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b">
                <div className="font-black text-emerald-600 text-xl tracking-tighter">VITALITYSCAN</div>
                <div className="text-[10px] font-bold text-slate-400">👤 8.4K DAILY</div>
            </header>
            <h1 className="text-5xl font-black text-slate-900 mb-6 italic uppercase">Stop Guessing.<br/>Start Burning.</h1>
            <button onClick={() => setView('quiz')} className="bg-emerald-600 text-white text-xl font-black py-6 px-12 rounded-2xl shadow-2xl">FIND MY ARCHETYPE</button>
        </div>
    );

    if (view === 'quiz') return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-10 rounded-4xl shadow-2xl">
                <h2 className="text-2xl font-black mb-8">{QUESTIONS[curr].text}</h2>
                <div className="space-y-3">
                    {QUESTIONS[curr].options.map((o, i) => (
                        <button key={i} onClick={next} className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 hover:border-emerald-500 font-bold text-slate-700">{o}</button>
                    ))}
                </div>
            </div>
        </div>
    );

    if (view === 'loading') return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-black italic">ANALYZING BIODATA...</h2>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#fcfbf7] p-4 py-12">
            <div className="max-w-2xl mx-auto bg-white rounded-4xl shadow-2xl overflow-hidden">
                <div className="bg-emerald-600 p-12 text-center text-white">
                    <h2 className="text-5xl font-black italic mb-4">PROFILE READY</h2>
                    <div className="bg-white text-emerald-800 px-6 py-2 rounded-full font-black">The Metabolic Resistor</div>
                </div>
                <div className="p-8">
                    <div className="critical-warning p-4 rounded-xl text-xs font-bold mb-6 flex items-center gap-2">
                        ⚠️ CRITICAL METABOLISM WARNING
                    </div>
                    <h3 className="text-3xl font-black mb-4 leading-tight">Why your current efforts are being <span className="text-red-600">blocked...</span></h3>
                    <p className="text-slate-600 mb-8">Your data indicates your system is currently in a <strong>"Conservation Trap."</strong></p>
                    
                    <a href={AFFILIATE_LINK} target="_blank" className="shimmer-btn block text-center text-white text-2xl font-black py-8 rounded-3xl shadow-xl">WATCH THE PROTOCOL</a>
                    
                    <div className="grid grid-cols-2 gap-4 mt-12">
                        <div className="p-6 bg-slate-50 rounded-3xl">
                            <div className="text-emerald-500 font-black">Sarah L.</div>
                            <div className="text-xs font-bold text-slate-400">LOST 22LBS</div>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-3xl">
                            <div className="text-emerald-500 font-black">David K.</div>
                            <div className="text-xs font-bold text-slate-400">LOST 45LBS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
