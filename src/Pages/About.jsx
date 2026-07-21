import React from 'react'
import { useLanguage } from './LanguageContext'

const About = () => {
  const { t } = useLanguage()

  if (!t || !t.about) {
    return <div className="py-24 text-center text-lg">Loading Profile Systems...</div>
  }

  return (
    <div className="relative min-h-screen overflow-hidden pb-16">

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-8">

        {/* ============ SECTION 1: HERO — किसान कोष ============ */}
        <div className="relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&h=500&q=80)',
              filter: 'blur(10px) brightness(0.4)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-base-900/70 via-base-900/50 to-base-900/80"></div>

          {/* Geometric Grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          {/* Left Accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-l-[2rem]"></div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-100 tracking-[0.15em] uppercase">{t.about.koshBadge || 'किसान कोष'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 leading-[1.15] mb-6 max-w-3xl">
              {t.about.koshTitle || 'हम एक किसान कोष का निर्माण करेंगे'}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
              {t.about.koshDesc || 'सिर्फ विश्व के गरीब किसान और मजदूरों को आर्थिक सहायता प्रदान करने के लिए — ताकि कोई भी किसान भूखा न सोए, कोई भी मजदूर असहाय न रहे।'}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/kisan-kosh" className="btn bg-gradient-to-r from-primary to-accent text-base-100 border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 btn-md sm:btn-lg">
                {t.about.koshBtn || 'कोष जानें'} →
              </a>
              <a href="/register" className="btn btn-outline border-slate-300 text-slate-300 hover:bg-white/10 hover:border-base-100 btn-md sm:btn-lg backdrop-blur-sm">
                {t.about.koshJoinBtn || 'शामिल हों'}
              </a>
            </div>
          </div>
        </div>

        {/* ============ SECTION 2: हमारी माँगें — Demands Grid ============ */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-[11px] font-bold text-accent tracking-[0.15em] uppercase">{t.about.demandsBadge || 'हमारी माँगें'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {t.about.demandsTitle || 'किसानों को क्या चाहिए?'}
            </h2>
            <p className="text-sm text-base-content/50 max-w-xl mx-auto leading-relaxed">
              {t.about.demandsSubtitle || 'बड़े-बड़े वादे नहीं, आधुनिक तकनीक और खेती के संसाधन चाहिए, तभी खेत और देश दोनों समृद्ध होंगे।'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '🌱', label: t.about.demand1 || 'समय पर खाद', color: 'from-green-500/20 to-green-600/5', border: 'hover:border-green-500/40', iconBg: 'bg-green-500/15' },
              { icon: '⚡', label: t.about.demand2 || 'बिजली', color: 'from-yellow-500/20 to-yellow-600/5', border: 'hover:border-yellow-500/40', iconBg: 'bg-yellow-500/15' },
              { icon: '💧', label: t.about.demand3 || 'पानी', color: 'from-blue-500/20 to-blue-600/5', border: 'hover:border-blue-500/40', iconBg: 'bg-blue-500/15' },
              { icon: '⛽', label: t.about.demand4 || 'सस्ता पेट्रोल-डीजल', color: 'from-orange-500/20 to-orange-600/5', border: 'hover:border-orange-500/40', iconBg: 'bg-orange-500/15' },
              { icon: '🚜', label: t.about.demand5 || 'आधुनिक तकनीक', color: 'from-purple-500/20 to-purple-600/5', border: 'hover:border-purple-500/40', iconBg: 'bg-purple-500/15' },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-b ${item.color} border border-base-300 ${item.border} rounded-2xl p-5 sm:p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden`}
              >
                {/* Hover Glow */}
                <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-current opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>

                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Philosophy Quote */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-base-200/50 border border-base-300 rounded-2xl px-8 py-5 max-w-2xl">
              <p className="text-sm sm:text-base font-bold italic text-base-content/70 leading-relaxed">
                "{t.about.philosophyQuote || 'किसानों को बड़े-बड़े वादे नहीं, आधुनिक तकनीक और खेती के संसाधन चाहिए, तभी खेत और देश दोनों समृद्ध होंगे।'}"
              </p>
            </div>
          </div>
        </div>

        {/* ============ SECTION 3: चुनौतियाँ — Challenges ============ */}
        <div className="bg-base-200/40 border border-base-300 rounded-[2rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <span className="text-[11px] font-bold text-secondary tracking-[0.15em] uppercase">{t.about.challengesBadge || 'गंभीर चुनौतियाँ'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
                {t.about.challengesTitle || 'जिन मुद्दों पर गंभीर चिंतन किया'}
              </h2>
              <p className="text-sm text-base-content/50 max-w-xl mx-auto">{t.about.challengesSubtitle || 'ये वो चुनौतियाँ हैं जो हर किसान की ज़िंदगी को प्रभावित करती हैं।'}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: '🌡️',
                  title: t.about.ch1Title || 'जलवायु परिवर्तन',
                  desc: t.about.ch1Desc || 'बदलते मौसम और अनियमित बारिश से फसलों को भारी नुकसान, किसानों की मेहनत पर पानी फिर रहा है।',
                  accent: 'red'
                },
                {
                  icon: '🪨',
                  title: t.about.ch2Title || 'मिट्टी की गिरती उत्पादकता',
                  desc: t.about.ch2Desc || 'लगातार रासायनिक खादों के अत्यधिक प्रयोग से मिट्टी बंजर होती जा रही है, उत्पादकता गिर रही है।',
                  accent: 'amber'
                },
                {
                  icon: '⚗️',
                  title: t.about.ch3Title || 'रासायनिक खादों का असंतुलित प्रयोग',
                  desc: t.about.ch3Desc || 'न जाने के बिना ज़हरीले रसायनों का इस्तेमाल ज़मीन और सेहत दोनों को नुकसान पहुँचा रहा है।',
                  accent: 'orange'
                },
                {
                  icon: '📈',
                  title: t.about.ch4Title || 'बाजार की अस्थिरता',
                  desc: t.about.ch4Desc || 'फसलों का उचित दाम न मिलना, मंडियों में भ्रष्टाचार और बिचौलियों का शोषण — किसान को सही कीमत नहीं मिल पा रही।',
                  accent: 'purple'
                },
              ].map((ch, i) => (
                <div
                  key={i}
                  className="group relative bg-base-100/80 backdrop-blur-sm border border-base-300 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    ch.accent === 'red' ? 'from-red-500 to-red-400' :
                    ch.accent === 'amber' ? 'from-amber-500 to-amber-400' :
                    ch.accent === 'orange' ? 'from-orange-500 to-orange-400' :
                    'from-purple-500 to-purple-400'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{ch.icon}</div>
                  <h3 className="text-sm font-black mb-2 leading-snug">{ch.title}</h3>
                  <p className="text-xs text-base-content/60 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>    

        {/* ============ SECTION 4: ग्राम इकाई — The Core Philosophy ============ */}
        <div className="relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl">
          {/* Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&h=600&q=80)',
              filter: 'blur(8px) brightness(0.35)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-base-900/90 via-base-900/70 to-base-900/90"></div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left - Statement */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
                  <span className="text-[11px] font-bold text-slate-100 tracking-[0.15em] uppercase">{t.about.gramBadge || 'संगठन का आधार'}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 leading-[1.15] mb-6">
                  {t.about.gramTitle || 'ग्राम इकाई ही'}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                    {t.about.gramTitleHighlight || 'संगठन का आधार है'}
                  </span>
                </h2>

                <p className="text-base text-slate-300 leading-relaxed mb-6">
                  {t.about.gramDesc1 || 'जब गाँव मज़बूत होंगे, तभी संगठन मज़बूत होगा।'}
                </p>

                <p className="text-base text-slate-300 leading-relaxed">
                  {t.about.gramDesc2 || 'हर किसान की भागीदारी, हर ग्राम इकाई की एकता — यही संगठन की ताक़त है।'}
                </p>
              </div>

              {/* Right - 3 Principle Cards */}
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: t.about.gramP1Title || 'गाँव की मज़बूती',
                    desc: t.about.gramP1Desc || 'ग्राम स्तर पर संगठन को मजबूत करने का प्रयास करें। हर गाँव को एक इकाई बनाकर किसानों को एकजुट करें।',
                    color: 'primary'
                  },
                  {
                    num: '02',
                    title: t.about.gramP2Title || 'हर किसान की भागीदारी',
                    desc: t.about.gramP2Desc || 'कोई भी किसान छोटा या बड़ा नहीं होता — सबकी भागीदारी बराबर है। सबकी आवाज़ सुनी जाएगी।',
                    color: 'accent'
                  },
                  {
                    num: '03',
                    title: t.about.gramP3Title || 'एकता ही ताकत',
                    desc: t.about.gramP3Desc || 'अकेला किसान कमज़ोर है, लेकिन गाँव की एकजुट इकाई अजेय है। यही हमारी शक्ति का स्रोत है।',
                    color: 'secondary'
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-${p.color}/30 transition-all duration-500 cursor-default`}
                  >
                    <div className="flex gap-4 items-start">
                      <div className={`text-3xl font-black text-${p.color}/30 group-hover:text-${p.color}/60 transition-colors duration-500`}>
                        {p.num}
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-100 mb-1.5">{p.title}</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============ SECTION 5: Original Data Cards (Redesigned) ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Scope Card */}
          <div className="group relative bg-base-200/40 backdrop-blur-sm border border-base-300 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden p-6 sm:p-8">
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-primary"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-[10px] font-bold text-primary tracking-[0.15em] uppercase">{t.about.scopeBadge || 'संगठन प्रोफ़ाइल'}</span>
              </div>
              <h3 className="text-xl font-black text-primary mb-6 tracking-tight">{t.about.scopeHeading}</h3>
              <div className="space-y-4">
                {[
                  { label: t.about.labelName, value: t.about.valueName, valueColor: 'text-accent' },
                  { label: t.about.labelScope, value: t.about.valueScope, valueColor: 'text-base-content' },
                  { label: t.about.labelOffice, value: t.about.valueOffice, valueColor: 'text-base-content' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-base-300/40 pb-3 last:border-0 last:pb-0">
                    <span className="opacity-50 text-xs uppercase tracking-wider font-semibold">{row.label}</span>
                    <span className={`${row.valueColor} font-black text-right text-sm`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resolution Card */}
          <div className="group relative bg-base-200/40 backdrop-blur-sm border border-base-300 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden p-6 sm:p-8">
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-accent"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-[10px] font-bold text-accent tracking-[0.15em] uppercase">{t.about.resBadge || 'संकल्प'}</span>
              </div>
              <h3 className="text-xl font-black text-accent mb-6 tracking-tight">{t.about.resolutionHeading}</h3>
              <ul className="space-y-5">
                {[
                  { text: t.about.res1, color: 'primary' },
                  { bold: t.about.res2Bold, text: t.about.res2Text, color: 'accent' },
                  { text: t.about.res3, color: 'primary' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${item.color} mt-2 shrink-0`}></span>
                    <span className="text-sm font-semibold opacity-85 leading-relaxed">
                      {item.bold && <strong className="text-accent font-extrabold">{item.bold}</strong>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============ SECTION 6: CTA — ग्राम इकाई बनाएं ============ */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative z-10 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-base-100 mb-3">
                {t.about.ctaTitle || 'ग्राम स्तर पर संगठन को मजबूत करने का प्रयास करें'}
              </h2>
              <p className="text-sm sm:text-base text-base-100/80 leading-relaxed">
                {t.about.ctaDesc || 'अपने गाँव की ग्राम इकाई बनाएं, किसानों को जोड़ें, और इस आंदोलन को धरती की ज़मीन से मज़बूत करें।'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="/gram-unit" className="btn btn-neutral text-slate-100 btn-md sm:btn-lg shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">
                {t.about.ctaBtn1 || 'ग्राम इकाई बनाएं'}
              </a>
              <a href="/register" className="btn btn-outline btn-md sm:btn-lg border-neutral text-neutral hover:bg-neutral hover:text-primary-content transition-colors">
                {t.about.ctaBtn2 || 'अभी जुड़ें'}
              </a>
            </div>
          </div>
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

export default About