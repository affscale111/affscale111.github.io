const AFFILIATE_LINK = "https://your-weightloss-offer.com?hop=user";

const questions = [
    { q: "Primary weight loss goal?", options: ["Stubborn Fat", "Total Body Change", "Tone up", "Health"] },
    { q: "Current metabolic speed?", options: ["Slow", "Average", "Stalled", "Fast"] },
    { q: "Typical energy levels?", options: ["Low", "Crashes", "Steady", "High"] },
    { q: "Hours of sleep?", options: ["< 6 hours", "6-8 hours", "8+ hours"] },
    { q: "Eating habits?", options: ["Healthy/No loss", "Stress Eating", "Yo-Yo Dieting"] },
    { q: "Your age range?", options: ["Under 35", "35-55", "Over 55"] }
];

let currentStep = 0;
const container = document.getElementById('quiz-container');

function showIntro() {
    container.innerHTML = `
        <div class="text-center fade-in">
            <h1 class="text-5xl font-black text-slate-900 mb-6 uppercase">Stop Guessing.<br><span class="text-emerald-600">Start Burning.</span></h1>
            <button onclick="startQuiz()" class="bg-emerald-600 text-white text-xl font-bold py-6 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-transform">Find My Archetype</button>
        </div>
    `;
}

function startQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentStep];
    container.innerHTML = `
        <div class="w-full max-w-md bg-white p-8 rounded-quiz shadow-2xl border border-emerald-50 fade-in">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">${q.q}</h2>
            <div class="space-y-3">
                ${q.options.map(opt => `
                    <button onclick="handleAnswer()" class="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all font-semibold text-slate-700">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
}

function handleAnswer() {
    currentStep++;
    if (currentStep < questions.length) {
        renderQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    container.innerHTML = `<div class="text-center"><div class="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div><p class="font-bold">Analyzing Markers...</p></div>`;
    setTimeout(showResults, 3000);
}

function showResults() {
    container.innerHTML = `
        <div class="w-full max-w-xl bg-white rounded-quiz shadow-2xl overflow-hidden fade-in">
            <div class="bg-emerald-600 p-8 text-center text-white font-black text-3xl">Archetype: The Metabolic Resistor</div>
            <div class="p-8 text-center">
                <p class="text-slate-600 mb-8 text-lg">Your metabolism is in a "protected" state. Watch the protocol below to restart it.</p>
                <a href="${AFFILIATE_LINK}" class="shimmer-btn block text-white text-2xl font-black py-8 px-4 rounded-3xl shadow-xl hover:scale-[1.02] transition-transform">WATCH PROTOCOL NOW</a>
            </div>
        </div>
    `;
}

showIntro();
