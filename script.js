const { useState, useEffect } = React;

// --- CONFIGURATION ---
const AFFILIATE_LINK = "https://your-weightloss-offer.com?hop=user";

const QUESTIONS = [
    { id: 1, text: "Primary weight loss goal?", options: [{ label: "Lose stubborn fat", val: "slow" }, { label: "Total transformation", val: "total" }, { label: "Tone & Muscle", val: "tone" }] },
    { id: 2, text: "Your metabolic speed?", options: [{ label: "Slow / Stalled", val: "slow" }, { label: "Average", val: "avg" }, { label: "Fast", val: "fast" }] },
    { id: 3, text: "Typical energy levels?", options: [{ label: "Low / Crashes", val: "low" }, { label: "Steady", val: "steady" }, { label: "High", val: "high" }] },
    { id: 4, text: "Sleep per night?", options: [{ label: "Under 6 hours", val: "poor" }, { label: "6-8 hours", val: "normal" }, { label: "8+ hours", val: "deep" }] },
    { id: 5, text: "Eating habits?", options: [{ label: "Healthy/No loss", val: "plateau" }, { label: "Stress eating", val: "stress" }, { label: "Yo-Yo dieting", val: "yo-yo" }] },
    { id: 6, text: "Age range?", options: [{ label: "Under 35", val: "young" }, { label: "35-55", val: "mid" }, { label: "Over 55", val: "mature" }] }
];

function App() {
    const [view, setView] = useState('intro');
    const [curr, setCurr] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [activeUsers] = useState(141);

    const handleAnswer = (val) => {
        const updated = [...answers, val];
        setAnswers(updated);
        if (curr < QUESTIONS.length - 1) setCurr(curr + 1);
        else {
            setView('loading');
            setTimeout(() => setView('results'), 3500);
        }
    };

    if (view === 'intro') return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center fade-up">
            <div className="bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold mb-6 border border-emerald-100">
                ● {activeUsers} USERS CURRENTLY TAKING THE ASSESSMENT
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">STOP GUESSING.<br/><span className="text-emerald-600">START BURNING.</span></h1>
            <button onClick={() => setView('quiz')} className="bg-emerald-600 text-white text-xl font-black py-6 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-all">FIND MY ARCHETYPE</button>
        </div>
    );

    if (view === 'quiz') return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-quiz shadow-2xl fade-up">
                <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8"><div className="bg-emerald-500 h-full transition-all duration-500" style={{width: `${((curr+1)/QUESTIONS.length)*100}%`}}></div></div>
                <h2 className="text-2xl font-bold mb-8">{QUESTIONS[curr].text}</h2>
                <div className="space-y-3">
                    {QUESTIONS[curr].options.map((o, i) => (
                        <button key={i} onClick={() => handleAnswer(o.val)} className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 hover:border-emerald-500 hover:bg-emerald-50 transition-all font-bold text-slate-700">{o.label}</button>
                    ))}
                </div>
            </div>
        </div>
    );

    if (view === 'loading') return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-black italic">ANALYZING BIODATA...</h2>
        </div>
    );

    return (
        <div className="min-h-screen p-4 md:p-8 fade-up">
            <div className="max-w-2xl mx-auto bg-white rounded-quiz shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-12 text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-black italic mb-4">PROFILE READY</h2>
                    <div className="bg-white text-emerald-800 px-6 py-2 rounded-full font-black text-lg inline-block shadow-lg">The Metabolic Resistor</div>
                </div>
                <div className="p-8 md:p-12 text-center">
                    <p className="text-slate-600 text-lg mb-10 font-medium">Your markers indicate a "Conservation Trap." Click below to watch the protocol designed to restart your fat-burning baseline.</p>
                    <a href={AFFILIATE_LINK} target="_blank" className="shimmer-cta block w-full text-white text-2xl font-black py-8 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform">WATCH THE PROTOCOL</a>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
