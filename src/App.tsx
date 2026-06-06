import { useState } from 'react';
import { 
  FileText, 
  Film, 
  Video, 
  ClipboardCheck, 
  Copy, 
  Download, 
  Printer, 
  Clock, 
  Play,
  Monitor,
  Volume2,
  Mic,
  Camera,
  CheckSquare,
  FileCheck2
} from 'lucide-react';

// Interfaces for Script & Storyboard Data
interface Scene {
  number: number;
  title: string;
  timeStart: number;
  timeEnd: number;
  visual: string;
  onScreenText: string[];
  voiceover: string;
  audio: string;
  directorNote: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'script' | 'storyboard' | 'production' | 'approval'>('script');
  const [copied, setCopied] = useState(false);

  // Script Scenes Data
  const scenes: Scene[] = [
    {
      number: 1,
      title: "THE HOOK",
      timeStart: 0,
      timeEnd: 6,
      visual: "Extreme close-up of a Shungite pyramid rotating slowly on black velvet. Gold rim light catches the edges.",
      onScreenText: ["2,000,000,000 years old."],
      voiceover: "None",
      audio: "Single deep tone, silence, then soft ambient music begins",
      directorNote: "Use macro lens. Slow 360° rotation. No cuts."
    },
    {
      number: 2,
      title: "THE PROBLEM",
      timeStart: 6,
      timeEnd: 18,
      visual: "Quick cuts — person checking phone in bed at night, WiFi router with signal waves visualised, child using tablet, office worker surrounded by screens.",
      onScreenText: ["Your phone.", "Your WiFi.", "Your laptop.", "All day. Every day."],
      voiceover: "Electromagnetic radiation. It surrounds us. In our homes. Our offices. Our bedrooms.",
      audio: "Tension builds subtly",
      directorNote: "Juxtapose cold blue screen lights against the dark surroundings to highlight EMF exposure."
    },
    {
      number: 3,
      title: "THE DISCOVERY",
      timeStart: 18,
      timeEnd: 28,
      visual: "Ancient map of Karelia Russia, then cut to dark rocky landscape, then hands holding raw Shungite.",
      onScreenText: ["Deep in Karelia, Russia.", "Scientists discovered something extraordinary."],
      voiceover: "Shungite — a rare carbon mineral found only in one place on Earth. Studied for its remarkable ability to absorb and neutralise electromagnetic fields.",
      audio: "Music shifts — wonder, discovery tone",
      directorNote: "Use historical map overlay style. Transition from sepia map to rich dark gray stone texture."
    },
    {
      number: 4,
      title: "THE SCIENCE",
      timeStart: 28,
      timeEnd: 38,
      visual: "Clean white lab aesthetic — close up of carbon molecular structure animation, Nobel Prize medal visual reference.",
      onScreenText: ["Nobel Prize-winning research.", "Fullerene carbon structure.", "Nature's own shield."],
      voiceover: "Its secret? Fullerenes — a carbon molecule so unique, its discovery earned a Nobel Prize in Chemistry.",
      audio: "Confident, building music",
      directorNote: "Create clean 3D render animations of fullerenes rotating. Maintain high scientific credibility."
    },
    {
      number: 5,
      title: "THE PRODUCT",
      timeStart: 38,
      timeEnd: 52,
      visual: "Product beauty shots — pyramid next to laptop, sphere on meditation mat, stones in glass water jug, sticker on back of iPhone. Each shot clean, lit, premium.",
      onScreenText: ["EMF Protection.", "Water Purification.", "Energy Grounding.", "Shungite Shield."],
      voiceover: "Shungite Shield brings you certified Type II Karelian Shungite — authenticated, lab tested, and beautifully crafted for the modern wellness lifestyle.",
      audio: "Music peaks — warm, confident",
      directorNote: "Use slow sliders and turntable tracking. Emphasize the deep carbon sheen and modern integration."
    },
    {
      number: 6,
      title: "SOCIAL PROOF",
      timeStart: 52,
      timeEnd: 62,
      visual: "Real customer lifestyle shots — person sleeping peacefully, family at home, yoga practitioner, corporate professional.",
      onScreenText: ["5,000+ wellness seekers.", "Across India and beyond."],
      voiceover: "Trusted by wellness practitioners, Ayurvedic consultants, and health-conscious families across India.",
      audio: "Warm, reassuring",
      directorNote: "Natural daylight aesthetic. Show real people feeling grounded and relaxed in their spaces."
    },
    {
      number: 7,
      title: "THE CTA",
      timeStart: 62,
      timeEnd: 75,
      visual: "All 4 products displayed on black background. Slow zoom out to reveal full Shungite Shield branding.",
      onScreenText: [
        "Certified Authentic.",
        "Lab Tested.",
        "Ships Across India.",
        "[Brand logo appears]",
        "Ancient Stone. Modern Protection.",
        "From ₹799 | Free shipping above ₹999",
        "shungiteshield.in"
      ],
      voiceover: "Shungite Shield. Ancient protection for the modern age. Shop now at shungiteshield.in",
      audio: "Music resolves beautifully, fade out",
      directorNote: "Slow zoom out. Ensure the brand logo and URL remain sharp and central on the dark background."
    }
  ];

  // Helper to compile plain text script for copying
  const handleCopyScript = () => {
    const headerText = `PROJECT: Shungite Shield — Brand Launch Video Ad
FORMAT: 75 seconds (landscape + portrait versions)
PURPOSE: Instagram Reel, YouTube Pre-roll, Facebook Video Ad
TARGET AUDIENCE: Indian wellness consumers, Ayurvedic practitioners, corporate wellness buyers aged 25–45
BRAND VOICE: Premium, trustworthy, scientific yet spiritual
MUSIC DIRECTION: Ambient wellness — soft tabla + electronic undertones
PREPARED BY: GO-BRICS Business Lab Content Team
DATE: June 2026

==================================================
`;

    const bodyText = scenes.map(scene => {
      return `SCENE ${scene.number} — ${scene.title} (${scene.timeStart}-${scene.timeEnd} sec)
--------------------------------------------------
Visual Direction: ${scene.visual}
On-Screen Text: ${scene.onScreenText.join(" | ")}
Voiceover (VO): ${scene.voiceover}
Audio/Music: ${scene.audio}
Director's Notes: ${scene.directorNote}
`;
    }).join("\n");

    navigator.clipboard.writeText(headerText + bodyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF41] selection:text-black">
      
      {/* HEADER SECTION (no-print) */}
      <header className="border-b border-zinc-800 bg-[#0E0E0E] py-6 px-4 md:px-8 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#00FF41] animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">GO-BRICS Business Lab</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-white">
              Shungite Shield — <span className="text-glow-green text-[#00FF41]">Video Ad Script & Storyboard</span>
            </h1>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              TASK_C09 | 75-Second Brand Video | GO-BRICS Business Lab | June 2026
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-[#00FF41] px-4 py-2 rounded-lg border border-zinc-800 hover:border-[#00FF41] transition-all duration-300 text-sm font-medium w-full md:w-auto shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* PRINT-ONLY HEADER */}
      <div className="hidden print:block mb-8 border-b-2 border-black pb-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-serif font-bold text-black">Shungite Shield Video Ad Script & Storyboard</h1>
            <p className="text-sm text-zinc-600 mt-1 font-mono">
              TASK_C09 Approval Pack | GO-BRICS Business Lab | June 2026
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-zinc-600">PAGE REFERENCE: GOBRICS-BL-OPS-2026-004</span>
          </div>
        </div>
      </div>

      {/* TABS SELECTOR (no-print) */}
      <div className="bg-[#0E0E0E] sticky top-0 z-40 border-b border-zinc-900 shadow-md no-print">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-2 md:gap-6 py-3 scrollbar-none">
            <button
              onClick={() => setActiveTab('script')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'script' 
                  ? 'bg-zinc-900 border border-[#00FF41]/30 text-[#00FF41] border-glow-green' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <FileText className="w-4 h-4" />
              Script View
            </button>

            <button
              onClick={() => setActiveTab('storyboard')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'storyboard' 
                  ? 'bg-zinc-900 border border-[#00FF41]/30 text-[#00FF41] border-glow-green' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Film className="w-4 h-4" />
              Storyboard Frames
            </button>

            <button
              onClick={() => setActiveTab('production')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'production' 
                  ? 'bg-zinc-900 border border-[#00FF41]/30 text-[#00FF41] border-glow-green' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Video className="w-4 h-4" />
              Production Guidelines
            </button>

            <button
              onClick={() => setActiveTab('approval')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'approval' 
                  ? 'bg-zinc-900 border border-[#00FF41]/30 text-[#00FF41] border-glow-green' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              Approval Form
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* TAB 1: SCRIPT VIEW */}
        {(activeTab === 'script' || window.matchMedia('print').matches) && (
          <div className={`${activeTab !== 'script' ? 'hidden print:block' : 'block'}`}>
            
            {/* Header info card */}
            <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-6 md:p-8 mb-8 relative overflow-hidden print-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF41]/5 rounded-bl-full flex items-center justify-center border-l border-b border-zinc-800/50 print:hidden">
                <FileText className="w-8 h-8 text-zinc-600" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold font-serif mb-6 text-zinc-100 flex items-center gap-2 print:text-black">
                <span className="w-1.5 h-6 bg-[#00FF41] rounded print:bg-emerald-800"></span>
                Project Screenplay Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Project Name</span>
                  <span className="text-zinc-100 font-semibold print:text-black">Shungite Shield — Brand Launch Video Ad</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Format</span>
                  <span className="text-zinc-100 font-semibold print:text-black">75 Seconds (Landscape + Portrait aspect ratios)</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Deployment Purpose</span>
                  <span className="text-zinc-100 font-semibold print:text-black">Instagram Reels, YouTube Ads, Facebook Videos</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Target Audience</span>
                  <span className="text-zinc-100 font-semibold print:text-black">Indian wellness buyers, corporate managers, Ayurvedic practitioners (25–45)</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Brand Voice</span>
                  <span className="text-zinc-100 font-semibold print:text-black">Premium, trustworthy, scientific yet Ayurvedic & spiritual</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Music Mood</span>
                  <span className="text-zinc-100 font-semibold print:text-black">Ambient wellness — slow tabla beats + modular electronic tone</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Prepared By</span>
                  <span className="text-zinc-100 font-semibold print:text-black font-mono">GO-BRICS Business Lab Content Team</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-xs mb-1 font-mono">Prepared Date</span>
                  <span className="text-zinc-100 font-semibold print:text-black">June 2026</span>
                </div>
              </div>

              <div className="mt-8 flex justify-end no-print">
                <button
                  onClick={handleCopyScript}
                  className="flex items-center gap-2 bg-[#00FF41]/10 border border-[#00FF41]/40 text-[#00FF41] hover:bg-[#00FF41]/20 hover:border-[#00FF41] px-5 py-2.5 rounded-lg transition-all duration-300 text-sm font-semibold shadow-md active:scale-95"
                >
                  {copied ? (
                    <>
                      <ClipboardCheck className="w-4 h-4 animate-bounce" />
                      <span>Copied! ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Full Screenplay</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Script Scene Listing */}
            <div className="space-y-6">
              {scenes.map((scene) => (
                <div 
                  key={scene.number}
                  className="bg-[#1A1A1A] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 print-card"
                >
                  {/* Scene header badge */}
                  <div className="bg-[#151515] border-b border-zinc-800 px-6 py-4 flex flex-wrap justify-between items-center gap-2 print:bg-zinc-100 print:border-black">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 px-2.5 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase print:bg-emerald-100 print:text-emerald-900 print:border-emerald-800">
                        SCENE {scene.number}
                      </span>
                      <h3 className="font-serif font-semibold text-lg text-zinc-100 print:text-black">
                        {scene.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono print:text-zinc-800">
                      <Clock className="w-3.5 h-3.5 text-[#00FF41] print:text-emerald-900" />
                      <span>{scene.timeStart}s – {scene.timeEnd}s ({scene.timeEnd - scene.timeStart} sec)</span>
                    </div>
                  </div>

                  {/* Screenplay Content Body */}
                  <div className="p-6 space-y-6">
                    {/* Visual aspect */}
                    <div>
                      <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold block mb-1 font-mono">Visual Direction</span>
                      <p className="italic text-zinc-300 text-sm leading-relaxed print:text-black font-serif">
                        {scene.visual}
                      </p>
                    </div>

                    {/* On-screen text overlays */}
                    <div>
                      <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold block mb-1 font-mono">On-Screen Overlay Text</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {scene.onScreenText.map((text, idx) => (
                          <span 
                            key={idx} 
                            className="bg-black/40 text-white font-bold border border-zinc-800 px-3 py-1.5 rounded-md text-xs print:bg-zinc-100 print:text-black print:border-zinc-300"
                          >
                            &ldquo;{text}&rdquo;
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Voiceover (Dialogue formatting style) */}
                    <div className="border-t border-zinc-800/60 pt-4 print:border-zinc-300">
                      <div className="max-w-md mx-auto text-center">
                        <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold block mb-2 font-mono">Voiceover (VO)</span>
                        {scene.voiceover === "None" ? (
                          <span className="text-zinc-500 italic text-xs uppercase font-mono">[ SILENT / MUSIC ONLY ]</span>
                        ) : (
                          <p className="text-[#00FF41] text-md font-medium leading-relaxed tracking-wide px-4 print:text-emerald-900 print:font-semibold">
                            &ldquo;{scene.voiceover}&rdquo;
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Audio Direction */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-zinc-800/60 pt-4 text-xs font-mono text-zinc-400 print:border-zinc-300 print:text-zinc-800">
                      <div>
                        <span className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold block mb-1">Sound Design / SFX</span>
                        <span className="italic block text-zinc-300 print:text-black font-sans">{scene.audio}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold block mb-1">Director Notes</span>
                        <span className="block text-zinc-300 print:text-black font-sans">{scene.directorNote}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Print Friendly spacer */}
            <div className="hidden print:block page-break-after" />
          </div>
        )}

        {/* TAB 2: STORYBOARD VIEW */}
        {(activeTab === 'storyboard' || window.matchMedia('print').matches) && (
          <div className={`${activeTab !== 'storyboard' ? 'hidden print:block' : 'block'}`}>
            <div className="flex justify-between items-center mb-6 no-print">
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Scene-by-Scene Storyboard</h2>
                <p className="text-xs text-zinc-500 mt-1">8 frames — visual direction for production team</p>
              </div>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-[#00FF41] text-zinc-300 hover:text-[#00FF41] px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Storyboard PDF</span>
              </button>
            </div>

            {/* Storyboard grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* FRAME 1 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F1</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">The Stone</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:00 – 00:06 (6s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFE066" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                      <radialGradient id="shadowPyramid" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(0,0,0,0.8)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                      </radialGradient>
                    </defs>
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Rotating lines guides */}
                    <ellipse cx="200" cy="170" rx="90" ry="15" stroke="rgba(255,224,102,0.15)" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M100,170 C100,180 300,180 300,170" stroke="rgba(255,224,102,0.3)" strokeWidth="1" />
                    <path d="M290,165 L300,170 L290,175" fill="rgba(255,224,102,0.3)" />
                    {/* Shadow underneath pyramid */}
                    <ellipse cx="200" cy="170" rx="55" ry="10" fill="url(#shadowPyramid)" />
                    {/* Pyramid Shape */}
                    <path d="M200,50 L150,160 L200,170 Z" fill="#181818" stroke="url(#goldGrad)" strokeWidth="2" />
                    <path d="M200,50 L250,160 L200,170 Z" fill="#252525" stroke="url(#goldGrad)" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M200,50 L200,170" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2,2" />
                    {/* Sparkles */}
                    <circle cx="160" cy="90" r="1.5" fill="#FFE066" />
                    <circle cx="230" cy="80" r="2" fill="#FFE066" />
                    <circle cx="210" cy="130" r="1" fill="#FFE066" />
                    {/* On-screen text box representation */}
                    <rect x="90" y="185" width="220" height="22" rx="4" fill="rgba(0,0,0,0.7)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="10" fontFamily="Playfair Display, serif" textAnchor="middle" letterSpacing="1">&ldquo;2,000,000,000 years old.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Macro lens. Slow 360° rotation.</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      Extreme close-up of a Shungite pyramid rotating slowly on black velvet. Gold rim light catches the edges.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 2 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F2</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">The Problem — Devices</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:06 – 00:12 (6s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Red tint warning overlay suggestion */}
                    <rect x="0" y="0" width="400" height="220" fill="rgba(239,68,68,0.06)" />
                    {/* Laptop outline */}
                    <rect x="180" y="100" width="130" height="70" rx="4" stroke="#FFF" strokeWidth="2" fill="#111" />
                    <line x1="170" y1="170" x2="320" y2="170" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
                    {/* Router outline */}
                    <rect x="70" y="110" width="60" height="40" rx="2" stroke="#FFF" strokeWidth="2" fill="#111" />
                    <line x1="85" y1="110" x2="85" y2="95" stroke="#FFF" strokeWidth="2" />
                    <line x1="115" y1="110" x2="115" y2="95" stroke="#FFF" strokeWidth="2" />
                    {/* Waves from Router (red/white radiation waves) */}
                    <path d="M60,80 C80,65 120,65 140,80" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M50,65 C90,45 110,45 150,65" stroke="#EF4444" strokeWidth="2" />
                    {/* Phone outline */}
                    <rect x="330" y="60" width="45" height="90" rx="6" stroke="#FFF" strokeWidth="2" fill="#111" />
                    <rect x="335" y="70" width="35" height="70" rx="2" fill="#222" />
                    <circle cx="352.5" cy="145" r="2" fill="#FFF" />
                    {/* Radiation waves from phone */}
                    <path d="M310,75 C295,95 295,115 310,135" stroke="#EF4444" strokeWidth="2" />
                    <path d="M295,65 C275,95 275,125 295,155" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,3" />
                    {/* Text overlays in screen */}
                    <text x="245" y="135" fill="#EF4444" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">RADIATION</text>
                    
                    <rect x="50" y="185" width="300" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;Your phone. Your WiFi. Your laptop.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Quick cuts, handheld jittery feel</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      Rapid visual transitions displaying consumer digital devices with overlay warning signals simulating electromagnetic fields.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 3 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F3</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">The Problem — Person</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:12 – 00:18 (6s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Bed outline */}
                    <path d="M80,160 L320,160 M80,160 L80,120 M320,160 L320,130" stroke="#444" strokeWidth="3" />
                    <rect x="90" y="135" width="220" height="25" rx="3" fill="#1C1C1C" stroke="#444" strokeWidth="1" />
                    <rect x="250" y="125" width="40" height="12" rx="4" fill="#2A2A2A" />
                    {/* Stick figure person */}
                    <circle cx="220" cy="115" r="10" stroke="#FFF" strokeWidth="2" fill="#111" />
                    <line x1="220" y1="125" x2="170" y2="140" stroke="#FFF" strokeWidth="2" />
                    <line x1="170" y1="140" x2="100" y2="140" stroke="#FFF" strokeWidth="2" />
                    {/* Phone on nightstand */}
                    <rect x="330" y="110" width="10" height="3" fill="#666" />
                    <rect x="335" y="113" width="12" height="25" rx="1" fill="#FF5555" stroke="#FFF" strokeWidth="1" />
                    <path d="M335,115 L347,125" stroke="#FFF" strokeWidth="0.5" />
                    {/* Radiation waves attacking the person */}
                    <path d="M325,120 Q290,110 260,115" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M325,130 Q285,120 250,130" stroke="#EF4444" strokeWidth="2" />
                    {/* Night clock */}
                    <rect x="40" y="80" width="35" height="25" rx="3" fill="#111" stroke="#333" />
                    <text x="57" y="96" fill="#EF4444" fontSize="8" fontFamily="monospace" textAnchor="middle">02:14</text>
                    
                    <rect x="110" y="185" width="180" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;All day. Every day.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Wide shot, static lockoff frame</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      A visual representation of late night tech usage showing sleep disturbance patterns caused by nearby emitting devices.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 4 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F4</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">Karelia Discovery</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:18 – 00:28 (10s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Stylised Map outline */}
                    <path d="M30,50 L80,30 L150,40 L180,20 L230,30 L280,10 L330,30 L360,70 L340,110 L300,130 L220,110 L160,130 L110,120 L70,140 Z" fill="#151515" stroke="#333" strokeWidth="1.5" />
                    {/* Star Marker for Karelia Russia */}
                    <g transform="translate(190,45)">
                      <circle cx="0" cy="0" r="12" fill="none" stroke="#00FF41" strokeWidth="1" strokeDasharray="2,2" />
                      <circle cx="0" cy="0" r="4" fill="#00FF41" />
                      <text x="12" y="4" fill="#00FF41" fontSize="9" fontFamily="monospace" fontWeight="bold">KARELIA, RU</text>
                    </g>
                    {/* Direction arrow to raw Shungite */}
                    <path d="M210,80 Q250,110 280,95" stroke="#00FF41" strokeWidth="2" strokeDasharray="3,3" />
                    {/* Hands outline holding dark stone */}
                    <g transform="translate(260,100)">
                      <path d="M20,60 C40,40 70,45 80,60 M60,60 C65,30 90,30 95,60" stroke="#FFF" strokeWidth="2" />
                      <polygon points="40,30 65,15 80,25 75,45 50,48" fill="#1C1C1C" stroke="#888" strokeWidth="2" />
                      <path d="M48,25 L60,35 M55,18 L68,28" stroke="#333" strokeWidth="1" />
                    </g>
                    
                    <rect x="80" y="185" width="240" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;Deep in Karelia, Russia.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Map zoom-in transitioning to macro detail</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      Geographic outline animation highlighting the Karelia deposit coordinates, shifting into a raw mineral physical representation.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 5 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F5</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">The Science</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:28 – 00:38 (10s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* C60 Fullerene Structure */}
                    <g transform="translate(195,100)">
                      {/* Hexagons network */}
                      <polygon points="0,-45 39,-22 39,22 0,45 -39,22 -39,-22" stroke="#00FF41" strokeWidth="2" fill="rgba(0,255,65,0.05)" />
                      {/* Inner rings */}
                      <circle cx="0" cy="0" r="25" stroke="#00FF41" strokeWidth="0.5" strokeDasharray="3,3" />
                      <polygon points="0,-25 21,-12 21,12 0,25 -21,12 -21,-12" stroke="#00FF41" strokeWidth="1" />
                      {/* Nodes */}
                      <circle cx="0" cy="-45" r="4" fill="#FFF" stroke="#00FF41" strokeWidth="1.5" />
                      <circle cx="39" cy="-22" r="4" fill="#FFF" stroke="#00FF41" strokeWidth="1.5" />
                      <circle cx="39" cy="22" r="4" fill="#FFF" stroke="#00FF41" strokeWidth="1.5" />
                      <circle cx="0" cy="45" r="4" fill="#FFF" stroke="#00FF41" strokeWidth="1.5" />
                      <circle cx="-39" cy="22" r="4" fill="#FFF" stroke="#00FF41" strokeWidth="1.5" />
                      <circle cx="-39" cy="-22" r="4" fill="#FFF" stroke="#00FF41" strokeWidth="1.5" />
                    </g>
                    {/* Nobel Medal Ribbon Badge in upper right */}
                    <g transform="translate(320,30)">
                      <circle cx="20" cy="20" r="16" fill="#D4AF37" stroke="#FFE066" strokeWidth="1.5" />
                      <text x="20" y="24" fill="#000" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">NOBEL</text>
                      <polygon points="12,32 20,48 28,32" fill="#D4AF37" />
                    </g>
                    
                    <rect x="70" y="185" width="260" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;Nobel Prize-winning research.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Scientific studio render, slow rotation zoom</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      3D molecule configuration model highlighting the covalent bonds and fullerenes carbon properties.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 6 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F6</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">Product Lineup</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:38 – 00:52 (14s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFE066" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Floor reflection gradient */}
                    <rect x="0" y="140" width="400" height="80" fill="rgba(255,255,255,0.02)" />
                    {/* Pyramid */}
                    <polygon points="65,80 35,140 95,140" fill="url(#goldGrad2)" stroke="#555" strokeWidth="0.5" />
                    <line x1="65" y1="80" x2="65" y2="140" stroke="#000" strokeWidth="1" strokeDasharray="1,1" />
                    <text x="65" y="152" fill="#888" fontSize="7" textAnchor="middle">PYRAMID</text>
                    {/* Sphere */}
                    <circle cx="165" cy="110" r="30" fill="url(#goldGrad2)" stroke="#555" strokeWidth="0.5" />
                    <ellipse cx="165" cy="110" rx="30" ry="10" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                    <text x="165" y="152" fill="#888" fontSize="7" textAnchor="middle">SPHERE</text>
                    {/* Raw stones */}
                    <path d="M245,130 L255,120 L270,123 L280,135 L260,140 Z" fill="url(#goldGrad2)" stroke="#555" strokeWidth="0.5" />
                    <path d="M225,135 L235,125 L245,133 L240,140 Z" fill="url(#goldGrad2)" stroke="#555" strokeWidth="0.5" />
                    <text x="252" y="152" fill="#888" fontSize="7" textAnchor="middle">RAW PIECES</text>
                    {/* iPhone with sticker */}
                    <rect x="315" y="80" width="35" height="60" rx="4" fill="#222" stroke="#444" strokeWidth="1.5" />
                    <circle cx="332.5" cy="110" r="10" fill="url(#goldGrad2)" stroke="#111" strokeWidth="1" />
                    <text x="332.5" y="152" fill="#888" fontSize="7" textAnchor="middle">STICKER</text>
                    
                    <rect x="20" y="185" width="360" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;EMF Protection. Water Purification. Energy Grounding.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Slow sliders, studio display lighting</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      The core consumer product range displayed side-by-side on a dark studio platform highlights their shapes and signatures.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 7 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F7</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">Social Proof</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">00:52 – 01:02 (10s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Warm glow suggestion */}
                    <circle cx="200" cy="100" r="120" fill="rgba(0,255,65,0.03)" />
                    {/* Yoga Practitioner silhouette in green/white */}
                    <g transform="translate(100,105)">
                      <circle cx="0" cy="-30" r="8" stroke="#FFF" strokeWidth="1.5" />
                      <path d="M-5,-15 C-25,-10 -25,10 -10,30" stroke="#FFF" strokeWidth="1.5" fill="none" />
                      <path d="M5,-15 C25,-10 25,10 10,30" stroke="#FFF" strokeWidth="1.5" fill="none" />
                      <path d="M0,-22 L0,15" stroke="#FFF" strokeWidth="2" />
                      <path d="M-15,-5 L15,-5" stroke="#FFF" strokeWidth="1.5" />
                    </g>
                    {/* Corporate Professional sitting at desk silhouette */}
                    <g transform="translate(290,115)">
                      <rect x="-35" y="10" width="60" height="2" fill="#555" />
                      <circle cx="-5" cy="-25" r="7" stroke="#FFF" strokeWidth="1.5" />
                      <path d="M-15,-15 L5,-15 L0,12 L-15,12 Z" fill="#222" stroke="#FFF" strokeWidth="1.5" />
                      {/* Laptop on desk */}
                      <path d="M10,12 L30,12 L28,0" stroke="#FFF" strokeWidth="1.5" fill="none" />
                    </g>
                    {/* Verified check badge */}
                    <g transform="translate(200,60)">
                      <circle cx="0" cy="0" r="25" fill="#00FF41" fillOpacity="0.1" stroke="#00FF41" strokeWidth="1.5" />
                      <path d="M-8,0 L-2,6 L10,-6" stroke="#00FF41" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="0" y="20" fill="#00FF41" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle">5,000+ USER TRUST</text>
                    </g>
                    
                    <rect x="80" y="185" width="240" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;5,000+ wellness seekers.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Lifestyle tracking shots, warm light</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      A series of transitions showing real people incorporating EMF protectors and pyramids in their work and mindfulness regimes.
                    </span>
                  </div>
                </div>
              </div>

              {/* FRAME 8 */}
              <div className="bg-[#1A1A1A] border-t-4 border-t-[#00FF41] border border-zinc-800 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,65,0.05)] transition-all duration-300 print-card">
                <div className="p-4 bg-[#151515] border-b border-zinc-800/80 flex justify-between items-center print:bg-zinc-100 print:border-black">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00FF41] text-black text-xs font-mono font-bold px-2 py-0.5 rounded">F8</span>
                    <h3 className="font-serif font-bold text-sm text-zinc-200 print:text-black">The CTA</h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-800">01:02 – 01:15 (13s)</span>
                </div>
                
                {/* SVG ILLUSTRATION */}
                <div className="bg-black aspect-video flex items-center justify-center relative overflow-hidden border-b border-zinc-800/60 print:bg-zinc-50 print:border-zinc-300">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="400" height="220" fill="#060606" />
                    {/* Gold glow around Logo */}
                    <circle cx="200" cy="70" r="45" fill="rgba(0,255,65,0.03)" />
                    {/* Hexagonal Shield Logo */}
                    <g transform="translate(200,70)">
                      <polygon points="0,-25 22,-12 22,12 0,25 -22,12 -22,-12" fill="#111" stroke="#00FF41" strokeWidth="2.5" />
                      <line x1="0" y1="-25" x2="0" y2="25" stroke="#00FF41" strokeWidth="1" strokeDasharray="2,2" />
                      <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="#00FF41" fillOpacity="0.4" />
                    </g>
                    {/* Brand typography */}
                    <text x="200" y="118" fill="#FFF" fontSize="14" fontFamily="Playfair Display, serif" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">SHUNGITE SHIELD</text>
                    <text x="200" y="132" fill="#00FF41" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="semibold" textAnchor="middle" letterSpacing="2">ANCIENT STONE. MODERN PROTECTION.</text>
                    {/* Web link info */}
                    <rect x="110" y="145" width="180" height="20" rx="3" fill="#111" stroke="#333" strokeWidth="1" />
                    <text x="200" y="158" fill="#FFF" fontSize="9" fontFamily="monospace" textAnchor="middle">shungiteshield.in</text>
                    
                    <rect x="70" y="185" width="260" height="22" rx="4" fill="rgba(0,0,0,0.8)" stroke="#333" strokeWidth="0.5" />
                    <text x="200" y="200" fill="#FFF" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">&ldquo;Ancient Stone. Modern Protection.&rdquo;</text>
                  </svg>
                </div>

                <div className="p-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/50 pb-2 print:border-zinc-200">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold">Camera Motion</span>
                    <span className="text-zinc-200 print:text-black">Slow zoom out from logo resolving to full screen CTA</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block mb-1">Visual Description</span>
                    <span className="text-zinc-200 print:text-black font-sans leading-relaxed block">
                      The brand signature hexagon logo fades in alongside product URLs, shipping fees guidelines, and starting unit rates details.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: PRODUCTION GUIDELINES */}
        {(activeTab === 'production' || window.matchMedia('print').matches) && (
          <div className={`${activeTab !== 'production' ? 'hidden print:block' : 'block'} space-y-8`}>
            
            <div className="no-print">
              <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Production Guidelines</h2>
              <p className="text-xs text-zinc-500 mt-1">Operational guidelines for physical filming, audio recording, and editing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CARD 1 - Equipment List */}
              <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-6 print-card">
                <h3 className="text-lg font-serif font-bold text-zinc-100 mb-4 flex items-center gap-2 print:text-black">
                  <Camera className="w-5 h-5 text-[#00FF41] print:text-emerald-800" />
                  Recommended Equipment
                </h3>
                <ul className="space-y-3 text-sm text-zinc-300 print:text-zinc-800">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">✔</span>
                    <span><strong>Primary Camera:</strong> iPhone 14 Pro or above (Configure settings to shoot in 4K ProRes at 24fps or 30fps).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">✔</span>
                    <span><strong>Product Studio Lighting:</strong> High quality ring light or a studio softbox to illuminate the mineral surface.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">✔</span>
                    <span><strong>Product Backdrop:</strong> High density black velvet fabric to absorb light reflections for studio items.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">✔</span>
                    <span><strong>Slider/Turntable:</strong> A small battery-powered motorized turntable for smooth 360° slow rotations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">✔</span>
                    <span><strong>Camera Stabilization:</strong> Handheld gimbal stabilizer or heavy-duty studio tripod.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">✔</span>
                    <span><strong>Voiceover Mic:</strong> Rode Wireless Go / high sensitivity clip-on mic for offline audio tracks.</span>
                  </li>
                </ul>
              </div>

              {/* CARD 2 - Shoot Plan Schedule */}
              <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-6 print-card">
                <h3 className="text-lg font-serif font-bold text-zinc-100 mb-4 flex items-center gap-2 print:text-black">
                  <Play className="w-5 h-5 text-[#00FF41] print:text-emerald-800" />
                  Suggested Shoot Plan
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800 text-zinc-500 uppercase tracking-wider print:border-black print:text-zinc-600">
                        <th className="py-2">Session</th>
                        <th className="py-2">Target Scenes</th>
                        <th className="py-2">Location</th>
                        <th className="py-2 text-right">Est. Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 text-zinc-300 print:divide-zinc-200 print:text-zinc-800">
                      <tr>
                        <td className="py-2.5 font-sans font-semibold text-zinc-200 print:text-black">Product shots</td>
                        <td className="py-2.5">Scenes 1, 5, 8</td>
                        <td className="py-2.5">Studio (Black Velvet)</td>
                        <td className="py-2.5 text-right font-bold text-[#00FF41] print:text-emerald-800">2.0 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-sans font-semibold text-zinc-200 print:text-black">Lifestyle footage</td>
                        <td className="py-2.5">Scenes 2, 3, 6</td>
                        <td className="py-2.5">Home & Corporate Office</td>
                        <td className="py-2.5 text-right font-bold text-[#00FF41] print:text-emerald-800">1.5 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-sans font-semibold text-zinc-200 print:text-black">Map & graphics</td>
                        <td className="py-2.5">Scenes 4, 5</td>
                        <td className="py-2.5">Editing Suite / Screen Rec</td>
                        <td className="py-2.5 text-right font-bold text-[#00FF41] print:text-emerald-800">1.0 hr</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-sans font-semibold text-zinc-200 print:text-black">Final assembly</td>
                        <td className="py-2.5">All Scenes</td>
                        <td className="py-2.5">Editing Software / Sound</td>
                        <td className="py-2.5 text-right font-bold text-[#00FF41] print:text-emerald-800">2.0 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CARD 3 - Editing Guidelines */}
              <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-6 print-card">
                <h3 className="text-lg font-serif font-bold text-zinc-100 mb-4 flex items-center gap-2 print:text-black">
                  <Monitor className="w-5 h-5 text-[#00FF41] print:text-emerald-800" />
                  Editing Notes
                </h3>
                <ul className="space-y-3 text-sm text-zinc-300 print:text-zinc-800">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Editing Software:</strong> Compile in Adobe Premiere Pro, DaVinci Resolve, or CapCut.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Colour Grading:</strong> Dark, moody look with deep blacks, keeping shungite reflections bright with subtle gold/warm highlights.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Transitions:</strong> Use slow cross-dissolves for wellness vibes; implement hard cuts only during Scene 2 (EMF devices problem).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Text Overlays:</strong> Smooth fade-in, hold, fade-out. Do not use bouncy, sliding, or distracting animations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Outputs needed:</strong> Render 16:9 Landscape (YouTube) and 9:16 Vertical (Instagram Reels/TikTok).</span>
                  </li>
                </ul>
              </div>

              {/* CARD 4 - Music Direction */}
              <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-6 print-card">
                <h3 className="text-lg font-serif font-bold text-zinc-100 mb-4 flex items-center gap-2 print:text-black">
                  <Volume2 className="w-5 h-5 text-[#00FF41] print:text-emerald-800" />
                  Music & Sound Design
                </h3>
                <ul className="space-y-3 text-sm text-zinc-300 print:text-zinc-800">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Music style:</strong> Ambient wellness. Smooth, low-tempo tabla patterns combined with subtle analog electronic wave sounds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Beat Speed:</strong> 60–70 BPM. Keep the pacing highly deliberate and calming.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Royalty-free search terms:</strong> Search for &ldquo;Meditation&rdquo;, &ldquo;Ancient Indian&rdquo;, &ldquo;Ayurvedic Journey&rdquo; on Bensound or YouTube Audio Library.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Volume balances:</strong> Keep music at 30% loudness when voiceovers speak, and 80% loudness during silent visuals (Scene 1).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00FF41] print:text-emerald-800 font-mono mt-0.5">▪</span>
                    <span><strong>Audio Outro:</strong> Smooth audio fadeout across the last 3 seconds of the CTA screen.</span>
                  </li>
                </ul>
              </div>

              {/* CARD 5 - Voiceover Direction */}
              <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-6 md:col-span-2 print-card">
                <h3 className="text-lg font-serif font-bold text-zinc-100 mb-4 flex items-center gap-2 print:text-black">
                  <Mic className="w-5 h-5 text-[#00FF41] print:text-emerald-800" />
                  Voiceover Notes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold block mb-1">Tone & Pacing</span>
                    <p className="text-zinc-300 print:text-black font-sans leading-relaxed">
                      Deep, warm, grounding, and authoritative. Pacing should be slow and highly deliberate. Always pause between sentences to let the audience absorb the message. Avoid any standard upbeat sales announcer tropes.
                    </p>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold block mb-1">Recording Setup</span>
                    <p className="text-zinc-300 print:text-black font-sans leading-relaxed">
                      Record in a carpeted room or closet to eliminate echoes and ambient reverb. Use a high-quality condenser microphone if available. If not, record using a modern smartphone's voice memo app held 6 inches away from the mouth.
                    </p>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold block mb-1">AI Voice Alternatives</span>
                    <p className="text-zinc-300 print:text-black font-sans leading-relaxed">
                      If using synthesized audio tracks, use ElevenLabs.io. Select highly narrative, calm voices with warm tone structures like &ldquo;Adam&rdquo;, &ldquo;Rachel&rdquo;, or custom Calm/Meditation voice builds.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: APPROVAL DOCUMENT */}
        {(activeTab === 'approval' || window.matchMedia('print').matches) && (
          <div className={`${activeTab !== 'approval' ? 'hidden print:block' : 'block'}`}>
            
            <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-8 max-w-4xl mx-auto print-card relative overflow-hidden">
              
              {/* FORM BACKGROUND DECORATION */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00FF41]/5 rounded-bl-full flex items-center justify-center border-l border-b border-zinc-800/50 print:hidden">
                <CheckSquare className="w-12 h-12 text-[#00FF41]/20" />
              </div>

              {/* GOBRICS HEADER */}
              <div className="border-b-2 border-zinc-800 pb-6 mb-8 print:border-black">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#00FF41] font-mono font-bold print:text-emerald-900">GO-BRICS Business Lab</span>
                    <h2 className="text-2xl font-bold font-serif text-white mt-1 print:text-black">Content Lead Approval Document</h2>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5 print:text-zinc-700">TASK_C09 — Video Ad Script & Storyboard Review Pack</p>
                  </div>
                  <div className="text-left md:text-right font-mono text-xs text-zinc-400 print:text-zinc-800">
                    <div className="font-bold">REF: TASK_C09</div>
                    <div>DATE: June 2026</div>
                  </div>
                </div>
              </div>

              {/* SECTION 1 - SUBMISSION SUMMARY */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-[#00FF41] font-mono font-bold mb-4 print:text-emerald-950">
                  Section 1: Submission Details
                </h3>
                
                <div className="border border-zinc-800 rounded-lg overflow-hidden print:border-zinc-300">
                  <table className="w-full text-left text-xs font-mono">
                    <tbody className="divide-y divide-zinc-800 print:divide-zinc-200">
                      <tr className="bg-zinc-900/40 print:bg-zinc-50">
                        <td className="px-4 py-3 font-semibold text-zinc-400 w-1/3 print:text-zinc-700">Task ID</td>
                        <td className="px-4 py-3 text-white font-bold print:text-black">TASK_C09</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Task Name</td>
                        <td className="px-4 py-3 text-white print:text-black">Video Ad Script and Storyboard Produced</td>
                      </tr>
                      <tr className="bg-zinc-900/40 print:bg-zinc-50">
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Grade Required / Met</td>
                        <td className="px-4 py-3 text-[#00FF41] font-bold print:text-emerald-800">Grade A</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">GBP Evaluation Value</td>
                        <td className="px-4 py-3 text-white print:text-black">150 GBP</td>
                      </tr>
                      <tr className="bg-zinc-900/40 print:bg-zinc-50">
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Submitted by</td>
                        <td className="px-4 py-3 text-white italic print:text-black">[Participant Name]</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Product Range</td>
                        <td className="px-4 py-3 text-white print:text-black">Shungite Shield EMF Protection (Pyramid, Sphere, Stones, Sticker)</td>
                      </tr>
                      <tr className="bg-zinc-900/40 print:bg-zinc-50">
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Target Duration</td>
                        <td className="px-4 py-3 text-white print:text-black">75 Seconds (01:15 total run)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Script Completion Status</td>
                        <td className="px-4 py-3 text-[#00FF41] font-bold print:text-emerald-800">✅ Complete (7 Scenes)</td>
                      </tr>
                      <tr className="bg-zinc-900/40 print:bg-zinc-50">
                        <td className="px-4 py-3 font-semibold text-zinc-400 print:text-zinc-700">Storyboard Completion Status</td>
                        <td className="px-4 py-3 text-[#00FF41] font-bold print:text-emerald-800">✅ Complete (8 Vector Frames)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION 2 - ASSET CHECKLIST */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-[#00FF41] font-mono font-bold mb-4 print:text-emerald-950">
                  Section 2: Asset Verification Checklist
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  
                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Script includes spoken lines (all scenes)</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Script contains overlay screen text codes</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Script outlines complete visual direction</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Music tracks/beats cues included</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Closing call-to-action details ready</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Storyboard frames count matches limit (&ge;8)</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Storyboard displays layout outlines</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg print:border-zinc-300 print:bg-white">
                    <span className="h-5 w-5 rounded bg-[#00FF41]/20 border border-[#00FF41] flex items-center justify-center text-[#00FF41] font-bold print:text-emerald-800">
                      ✓
                    </span>
                    <span className="text-zinc-200 print:text-black">Camera/filming setup references checked</span>
                  </div>

                </div>
              </div>

              {/* SECTION 3 - CONTENT LEAD APPROVAL (SIGN OFF FORM) */}
              <div className="mb-8 p-6 bg-zinc-950/60 border border-zinc-800 rounded-lg print:border-zinc-400 print:bg-white">
                <h3 className="text-sm uppercase tracking-widest text-[#00FF41] font-mono font-bold mb-3 print:text-emerald-950">
                  Section 3: Content Lead Approval Sign-Off
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans print:text-zinc-800">
                  By signing below, the Content Lead verifies that the script and storyboard conform to standard brand directions, are compliant with all TASK_C09 specifications as noted in the GO-BRICS Business Lab Task Catalogue (GOBRICS-BL-OPS-2026-004), and are officially authorized for physical production release.
                </p>

                <div className="space-y-6 text-xs font-mono mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <span className="w-48 text-zinc-500 uppercase tracking-wider print:text-zinc-800">Content Lead Name:</span>
                    <span className="flex-1 border-b border-zinc-700 h-6 w-full print:border-black"></span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <span className="w-48 text-zinc-500 uppercase tracking-wider print:text-zinc-800">Signature:</span>
                    <span className="flex-1 border-b border-zinc-700 h-6 w-full print:border-black"></span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <span className="w-48 text-zinc-500 uppercase tracking-wider print:text-zinc-800">Date Approved:</span>
                    <span className="flex-1 border-b border-zinc-700 h-6 w-full print:border-black"></span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <span className="w-48 text-zinc-500 uppercase tracking-wider print:text-zinc-800">Review Notes:</span>
                    <span className="flex-1 border-b border-zinc-700 h-6 w-full print:border-black"></span>
                  </div>
                </div>
              </div>

              {/* SECTION 4 - SUBMISSION INSTRUCTIONS */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#00FF41] font-mono font-bold mb-2 print:text-emerald-950">
                  Section 4: Submission & Next Steps
                </h3>
                <ol className="list-decimal list-inside text-xs font-mono space-y-2 text-zinc-400 print:text-zinc-800">
                  <li>Print or screenshot this approval form document layout.</li>
                  <li>Have the regional Content Lead review, sign, and date the form.</li>
                  <li>Submit the completed review document along with the core script and storyboard documents.</li>
                  <li>Once authorized, coordinate with the production team using the guidelines in Tab 3.</li>
                </ol>
              </div>

              {/* DOWNLOAD FOR PRINT BUTTON */}
              <div className="mt-8 flex justify-end gap-3 no-print">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-[#00FF41] hover:bg-[#00D335] text-black px-5 py-2.5 rounded-lg transition-all duration-300 text-sm font-bold shadow-md active:scale-95"
                >
                  <Printer className="w-4 h-4" />
                  <span>Download Approval Form PDF</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* FOOTER (no-print) */}
      <footer className="border-t border-zinc-900 bg-[#0E0E0E] py-8 text-center text-xs text-zinc-600 no-print mt-12">
        <p className="max-w-md mx-auto leading-relaxed">
          GO-BRICS Video Ad Script & Storyboard Platform. Developed under TASK_C09 specifications. Confined to GO-BRICS Business Lab operations © June 2026.
        </p>
      </footer>
    </div>
  );
}
