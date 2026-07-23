import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { Link } from 'react-router-dom'

const SankalpPatra = () => {
  const { t } = useLanguage()
  const [agreedCount, setAgreedCount] = useState(12456)
  const [hasAgreed, setHasAgreed] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleAgree = () => {
    if (hasAgreed) return
    setHasAgreed(true)
    setAgreedCount(prev => prev + 1)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  if (!t || !t.sankalp) {
    return <div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>
  }

  const resolutions = [
    { num: '01', icon: '💰', title: t.sankalp.r1Title, desc: t.sankalp.r1Desc, color: 'green' },
    { num: '02', icon: '⚖️', title: t.sankalp.r2Title, desc: t.sankalp.r2Desc, color: 'blue' },
    { num: '03', icon: '🏪', title: t.sankalp.r3Title, desc: t.sankalp.r3Desc, color: 'orange' },
    { num: '04', icon: '📉', title: t.sankalp.r4Title, desc: t.sankalp.r4Desc, color: 'amber' },
    { num: '05', icon: '🏦', title: t.sankalp.r5Title, desc: t.sankalp.r5Desc, color: 'red' },
    { num: '06', icon: '⏱️', title: t.sankalp.r6Title, desc: t.sankalp.r6Desc, color: 'purple' },
    { num: '07', icon: '💧', title: t.sankalp.r7Title, desc: t.sankalp.r7Desc, color: 'cyan' },
    { num: '08', icon: '🎓', title: t.sankalp.r8Title, desc: t.sankalp.r8Desc, color: 'indigo' },
    { num: '09', icon: '🐂', title: t.sankalp.r9Title, desc: t.sankalp.r9Desc, color: 'yellow' },
    { num: '10', icon: '🏔️', title: t.sankalp.r10Title, desc: t.sankalp.r10Desc, color: 'emerald' },
    { num: '11', icon: '🏥', title: t.sankalp.r11Title, desc: t.sankalp.r11Desc, color: 'rose' },
    { num: '12', icon: '👴', title: t.sankalp.r12Title, desc: t.sankalp.r12Desc, color: 'teal' },
    { num: '13', icon: '👩‍🌾', title: t.sankalp.r13Title, desc: t.sankalp.r13Desc, color: 'pink' },
    { num: '14', icon: '🚀', title: t.sankalp.r14Title, desc: t.sankalp.r14Desc, color: 'violet' },
    { num: '15', icon: '🌿', title: t.sankalp.r15Title, desc: t.sankalp.r15Desc, color: 'lime' },
    { num: '16', icon: '🏪', title: t.sankalp.r16Title, desc: t.sankalp.r16Desc, color: 'orange' },
    { num: '17', icon: '🥛', title: t.sankalp.r17Title, desc: t.sankalp.r17Desc, color: 'sky' },
    { num: '18', icon: '📚', title: t.sankalp.r18Title, desc: t.sankalp.r18Desc, color: 'blue' },
    { num: '19', icon: '✊', title: t.sankalp.r19Title, desc: t.sankalp.r19Desc, color: 'red' },
    { num: '20', icon: '🔍', title: t.sankalp.r20Title, desc: t.sankalp.r20Desc, color: 'amber' },
    { num: '21', icon: '🛡️', title: t.sankalp.r21Title, desc: t.sankalp.r21Desc, color: 'green' },
    { num: '22', icon: '🌍', title: t.sankalp.r22Title, desc: t.sankalp.r22Desc, color: 'cyan' },
    { num: '23', icon: '🤝', title: t.sankalp.r23Title, desc: t.sankalp.r23Desc, color: 'purple' },
    { num: '24', icon: '🌐', title: t.sankalp.r24Title, desc: t.sankalp.r24Desc, color: 'indigo' },
    { num: '25', icon: '🌾', title: t.sankalp.r25Title, desc: t.sankalp.r25Desc, color: 'primary' },
  ]

  const colorMap = {
    green: { bg: 'bg-green-500/10', border: 'hover:border-green-500/40', num: 'text-green-500/30 group-hover:text-green-500/70', line: 'from-green-500 to-green-400' },
    blue: { bg: 'bg-blue-500/10', border: 'hover:border-blue-500/40', num: 'text-blue-500/30 group-hover:text-blue-500/70', line: 'from-blue-500 to-blue-400' },
    orange: { bg: 'bg-orange-500/10', border: 'hover:border-orange-500/40', num: 'text-orange-500/30 group-hover:text-orange-500/70', line: 'from-orange-500 to-orange-400' },
    amber: { bg: 'bg-amber-500/10', border: 'hover:border-amber-500/40', num: 'text-amber-500/30 group-hover:text-amber-500/70', line: 'from-amber-500 to-amber-400' },
    red: { bg: 'bg-red-500/10', border: 'hover:border-red-500/40', num: 'text-red-500/30 group-hover:text-red-500/70', line: 'from-red-500 to-red-400' },
    purple: { bg: 'bg-purple-500/10', border: 'hover:border-purple-500/40', num: 'text-purple-500/30 group-hover:text-purple-500/70', line: 'from-purple-500 to-purple-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/40', num: 'text-cyan-500/30 group-hover:text-cyan-500/70', line: 'from-cyan-500 to-cyan-400' },
    indigo: { bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/40', num: 'text-indigo-500/30 group-hover:text-indigo-500/70', line: 'from-indigo-500 to-indigo-400' },
    yellow: { bg: 'bg-yellow-500/10', border: 'hover:border-yellow-500/40', num: 'text-yellow-500/30 group-hover:text-yellow-500/70', line: 'from-yellow-500 to-yellow-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/40', num: 'text-emerald-500/30 group-hover:text-emerald-500/70', line: 'from-emerald-500 to-emerald-400' },
    rose: { bg: 'bg-rose-500/10', border: 'hover:border-rose-500/40', num: 'text-rose-500/30 group-hover:text-rose-500/70', line: 'from-rose-500 to-rose-400' },
    teal: { bg: 'bg-teal-500/10', border: 'hover:border-teal-500/40', num: 'text-teal-500/30 group-hover:text-teal-500/70', line: 'from-teal-500 to-teal-400' },
    pink: { bg: 'bg-pink-500/10', border: 'hover:border-pink-500/40', num: 'text-pink-500/30 group-hover:text-pink-500/70', line: 'from-pink-500 to-pink-400' },
    violet: { bg: 'bg-violet-500/10', border: 'hover:border-violet-500/40', num: 'text-violet-500/30 group-hover:text-violet-500/70', line: 'from-violet-500 to-violet-400' },
    lime: { bg: 'bg-lime-500/10', border: 'hover:border-lime-500/40', num: 'text-lime-500/30 group-hover:text-lime-500/70', line: 'from-lime-500 to-lime-400' },
    sky: { bg: 'bg-sky-500/10', border: 'hover:border-sky-500/40', num: 'text-sky-500/30 group-hover:text-sky-500/70', line: 'from-sky-500 to-sky-400' },
    primary: { bg: 'bg-primary/10', border: 'hover:border-primary/40', num: 'text-primary/30 group-hover:text-primary/70', line: 'from-primary to-accent' },
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                backgroundColor: ['#f97316', '#ea580c', '#22c55e', '#3b82f6', '#a855f7', '#eab308'][Math.floor(Math.random() * 6)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-8 pb-20">

        {/* ============ HERO SECTION ============ */}
        <div className="relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&h=500&q=80)',
              filter: 'blur(10px) brightness(0.35)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-base-900/80 via-base-900/60 to-base-900/85"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          {/* Left Accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-l-[2rem]"></div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <span className="text-2xl">📜</span>
              <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">{t.sankalp.heroBadge || 'संकल्प पत्र'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-100 leading-[1.15] mb-6 max-w-4xl mx-auto">
              {t.sankalp.heroTitle || 'संकल्प पत्र'}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              {t.sankalp.heroDesc || 'अंतर्राष्ट्रीय किसान यूनियन™️ यह संकल्प लेती है कि विश्व के किसानों, खेत मजदूरों एवं कृषि आधारित परिवारों के सम्मान, सुरक्षा और समृद्धि के लिए निम्नलिखित 25 संकल्पों पर निरंतर कार्य करेगी—'}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="#resolutions" className="btn bg-gradient-to-r from-primary to-accent text-base-100 border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 btn-md sm:btn-lg">
                {t.sankalp.heroBtn1 || '25 संकल्प पढ़ें'} ↓
              </a>
              <button
                onClick={handleAgree}
                disabled={hasAgreed}
                className={`btn btn-md sm:btn-lg transition-all duration-300 ${hasAgreed ? 'btn-success' : 'btn-outline border-base-100 p-2 text-slate-200 hover:bg-white/10 hover:border-base-100'}`}
              >
                {hasAgreed ? (
                  <><span className="text-slate-100">✓</span> {t.sankalp.agreedText || 'सहमति दी गई'}</>
                ) : (
                  t.sankalp.heroBtn2 || 'सहमति दें'
                )}
              </button>
            </div>

            {/* Agreement Counter */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span className="text-xs text-slate-300 font-medium">
                {agreedCount.toLocaleString('en-IN')}+ {t.sankalp.counterText || 'लोगों ने सहमति दी'}
              </span>
            </div>
          </div>
        </div>

        {/* ============ 25 RESOLUTIONS GRID ============ */}
        <div id="resolutions">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-[11px] font-bold text-accent tracking-[0.15em] uppercase">{t.sankalp.gridBadge || '25 संकल्प'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.sankalp.gridTitle || 'हमारे 25 संकल्प'}
            </h2>
            <p className="text-sm text-base-content/50 max-w-xl mx-auto">{t.sankalp.gridSubtitle || 'किसानों के अधिकारों और समृद्धि के लिए 25 अटल संकल्प'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {resolutions.map((r, i) => {
              const colors = colorMap[r.color] || colorMap.primary
              return (
                <div
                  key={i}
                  className={`group relative ${colors.bg} border border-base-300 ${colors.border} rounded-2xl p-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-default`}
                >
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.line} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Number */}
                  <div className={`text-4xl font-black ${colors.num} absolute top-4 right-4 transition-colors duration-500`}>
                    {r.num}
                  </div>

                  {/* Icon */}
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{r.icon}</div>

                  {/* Title */}
                  <h3 className="text-sm font-black mb-2 leading-snug pr-8">{r.title}</h3>

                  {/* Description */}
                  <p className="text-[11px] text-base-content/55 leading-relaxed">{r.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ============ MAIN PLEDGE QUOTE ============ */}
        <div className="relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1400&h=500&q=80)',
              filter: 'blur(12px) brightness(0.3)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-base-900/95 via-base-900/80 to-base-900/95"></div>

          {/* Decorative Quotes */}
          <div className="absolute top-8 left-8 text-[120px] font-black text-slate-300 leading-none">"</div>
          <div className="absolute bottom-8 right-8 text-[120px] font-black text-slate-300 leading-none rotate-180">"</div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <span className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase">{t.sankalp.pledgeBadge || 'मूल संकल्प'}</span>
            </div>

            <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100 leading-relaxed max-w-4xl mx-auto mb-4">
              "{t.sankalp.pledgeQuote1 || 'हम संकल्प लेते हैं कि किसान की मेहनत का पूरा सम्मान, उसकी उपज का उचित मूल्य, उसकी भूमि की सुरक्षा, उसके परिवार का सम्मान और उसके अधिकारों की रक्षा के लिए सदैव संघर्ष करेंगे।'}"
            </blockquote>

            <blockquote className="text-base sm:text-lg font-semibold text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              "{t.sankalp.pledgeQuote2 || 'हमारा संगठन किसी दल का नहीं, बल्कि हर किसान का होगा।'}"
            </blockquote>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-md mx-auto mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40"></div>
              <span className="text-primary/50 text-xl">🌾</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>

            {/* Triple Motto */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3  sm:gap-0">
              {[
                t.sankalp.motto1 || 'हर खेत सुरक्षित',
                t.sankalp.motto2 || 'हर किसान समृद्ध',
                t.sankalp.motto3 || 'हर किसान परिवार सम्मानित',
              ].map((m, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm sm:text-base font-black text-slate-100 tracking-wide">{m}</span>
                  {i < 2 && <span className="hidden sm:block text-slate-300 mx-4 text-xl">—</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ============ FINAL CTA ============ */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative z-10 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <div className="text-3xl mb-3">✊</div>
              <h2 className="text-2xl sm:text-3xl font-black text-base-100 mb-3">
                {t.sankalp.ctaTitle || 'क्या आप इन 25 संकल्पों से सहमत हैं?'}
              </h2>
              <p className="text-sm sm:text-base text-base-100/80 leading-relaxed">
                {t.sankalp.ctaDesc || 'अपनी सहमति दर्ज करें और किसान आंदोलन को अपना साथ दें। संगठन जुटेगा, तभी आवाज़ बुलंद होगी।'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 items-center">
              <button
                onClick={handleAgree}
                disabled={hasAgreed}
                className={`btn btn-md sm:btn-lg shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ${hasAgreed ? 'btn-success' : 'btn-neutral'}`}
              >
                {hasAgreed ? (
                  <><span>✓</span> {t.sankalp.agreedText || 'सहमति दी गई'}</>
                ) : (
                  <>{t.sankalp.ctaBtn1 || 'मैं सहमत हूँ'} ✊</>
                )}
              </button>
              <Link to="/register" className="btn btn-outline btn-md sm:btn-lg border-neutral text-neutral hover:bg-neutral hover:text-primary-content transition-colors">
                {t.sankalp.ctaBtn2 || 'अभी जुड़ें'}
              </Link>
            </div>
          </div>
        </div>

        {/* ============ BRANDING FOOTER ============ */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
              <span className="text-xl">🌾</span>
            </div>
            <span className="text-lg font-black tracking-tight">अंतर्राष्ट्रीय किसान यूनियन™️</span>
          </div>
          <p className="text-[11px] text-base-content/25 tracking-wider">📍 बराला, मेरठ, उत्तर प्रदेश — 250221</p>
        </div>
      </div>

      <style>{`
        ::selection {
          background: rgba(234, 88, 12, 0.2);
        }
      `}</style>
    </div>
  )
}

export default SankalpPatra