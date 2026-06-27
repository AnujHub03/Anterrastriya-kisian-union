import React from 'react'
import { useLanguage } from './LanguageContext'
import NewsSection from '../Components/News'

const Home = () => {
  const { t } = useLanguage()

  // Safety fallback verification logic protection loop
  if (!t || !t.home) {
    return <div className="p-12 text-center text-lg">Loading Content...</div>
  }

  return (
    <>
    <div className="space-y-12 pb-12">
      {/* Main Hero Section */}
      <div className="hero bg-base-200 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-12 border border-base-300">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="badge badge-primary font-bold px-4 py-3 mb-4 tracking-wider">{t.home.stage}</div>
            <h1 className="text-4xl sm:text-6xl font-black text-primary mb-2">{t.home.brand}</h1>
            <p className="text-xl sm:text-2xl font-bold text-accent tracking-wide italic mb-6">
              {t.home.motto}
            </p>
            <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto opacity-90">
              {t.home.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-primary btn-md sm:btn-lg shadow-lg">{t.home.joinBtn}</button>
              <button className="btn btn-outline btn-md sm:btn-lg"> {t.home.manifestoBtn}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md text-center">
          <div className="stat-title font-bold text-sm text-base-content opacity-70">{t.home.stat1Title}</div>
          <div className="stat-value text-primary my-2 text-3xl sm:text-4xl font-black">{t.home.stat1Value}</div>
          <div className="stat-desc font-medium text-xs whitespace-normal">{t.home.stat1Desc}</div>
        </div>
        
        <div className="stat bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md text-center">
          <div className="stat-title font-bold text-sm text-base-content opacity-70">{t.home.stat2Title}</div>
          <div className="stat-value text-accent my-2 text-3xl sm:text-4xl font-black">{t.home.stat2Value}</div>
          <div className="stat-desc font-medium text-xs whitespace-normal">{t.home.stat2Desc}</div>
        </div>

        <div className="stat bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md text-center">
          <div className="stat-title font-bold text-sm text-base-content opacity-70">{t.home.stat3Title}</div>
          <div className="stat-value text-secondary my-2 text-2xl sm:text-3xl font-black">{t.home.stat3Value}</div>
          <div className="stat-desc font-medium text-xs whitespace-normal">{t.home.stat3Desc}</div>
        </div>
      </div>

      {/* Our Pillars Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="badge badge-outline badge-primary font-bold px-4 py-3 mb-4 tracking-wider">{t.home.pillarsBadge}</div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-3">{t.home.pillarsTitle}</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">{t.home.pillarsDesc}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '⚖️', title: t.home.pillar1Title, desc: t.home.pillar1Desc },
            { icon: '🤝', title: t.home.pillar2Title, desc: t.home.pillar2Desc },
            { icon: '🌍', title: t.home.pillar3Title, desc: t.home.pillar3Desc },
            { icon: '💡', title: t.home.pillar4Title, desc: t.home.pillar4Desc },
          ].map((pillar, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">{pillar.title}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works / Take Action Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="badge badge-outline badge-accent font-bold px-4 py-3 mb-4 tracking-wider">{t.home.actionBadge}</div>
          <h2 className="text-3xl sm:text-4xl font-black text-accent mb-3">{t.home.actionTitle}</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">{t.home.actionDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: t.home.step1Title, desc: t.home.step1Desc },
            { step: '02', title: t.home.step2Title, desc: t.home.step2Desc },
            { step: '03', title: t.home.step3Title, desc: t.home.step3Desc },
          ].map((item, i) => (
            <div key={i} className="relative bg-base-100 border border-base-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-black text-base-300 absolute top-4 right-6">{item.step}</div>
              <h3 className="text-xl font-bold text-accent mb-3 relative z-10">{item.title}</h3>
              <p className="text-sm opacity-75 leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="btn btn-accent btn-md sm:btn-lg shadow-lg">{t.home.actionBtn}</button>
        </div>
      </div>
 <NewsSection />
      {/* Voices / Testimonials Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="badge badge-outline badge-secondary font-bold px-4 py-3 mb-4 tracking-wider">{t.home.voicesBadge}</div>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary mb-3">{t.home.voicesTitle}</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">{t.home.voicesDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: t.home.voice1Name, role: t.home.voice1Role, quote: t.home.voice1Quote },
            { name: t.home.voice2Name, role: t.home.voice2Role, quote: t.home.voice2Quote },
            { name: t.home.voice3Name, role: t.home.voice3Role, quote: t.home.voice3Quote },
          ].map((voice, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl text-secondary opacity-30 mb-2">"</div>
              <p className="text-sm leading-relaxed opacity-85 mb-4 -mt-4">{voice.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="avatar placeholder">
                  <div className="bg-secondary text-secondary-content rounded-full w-10">
                    <span className="text-sm font-bold">{voice.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">{voice.name}</div>
                  <div className="text-xs opacity-60">{voice.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 sm:p-12 shadow-xl text-primary-content">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">{t.home.ctaTitle}</h2>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">{t.home.ctaDesc}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button className="btn btn-neutral btn-md sm:btn-lg shadow-lg">{t.home.ctaJoinBtn}</button>
            <button className="btn btn-outline btn-md sm:btn-lg border-neutral text-neutral hover:bg-neutral hover:text-primary-content">{t.home.ctaShareBtn}</button>
          </div>
        </div>
      </div>

      {/* Partners / Allies Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-8">
          <div className="badge badge-outline font-bold px-4 py-3 mb-4 tracking-wider border-base-content/20 text-base-content/60">{t.home.alliesBadge}</div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">{t.home.alliesTitle}</h2>
          <p className="text-sm opacity-70 max-w-xl mx-auto">{t.home.alliesDesc}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            t.home.ally1,
            t.home.ally2,
            t.home.ally3,
            t.home.ally4,
            t.home.ally5,
            t.home.ally6,
          ].map((ally, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-xl p-4 flex items-center justify-center aspect-square shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl mb-1 opacity-40">🤝</div>
                <div className="text-xs font-bold opacity-40">{ally}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="badge badge-outline badge-accent font-bold px-4 py-3 mb-4 tracking-wider">{t.home.eventsBadge}</div>
          <h2 className="text-3xl sm:text-4xl font-black text-accent mb-3">{t.home.eventsTitle}</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">{t.home.eventsDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { date: t.home.ev1Date, title: t.home.ev1Title, loc: t.home.ev1Loc, type: t.home.ev1Type },
            { date: t.home.ev2Date, title: t.home.ev2Title, loc: t.home.ev2Loc, type: t.home.ev2Type },
            { date: t.home.ev3Date, title: t.home.ev3Title, loc: t.home.ev3Loc, type: t.home.ev3Type },
          ].map((ev, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="bg-accent/10 group-hover:bg-accent/20 transition-colors p-4 flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider">{ev.type}</div>
                  <div className="text-sm font-bold">{ev.date}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold mb-2">{ev.title}</h3>
                <div className="flex items-center gap-2 text-xs opacity-60">
                  <span>📍</span>
                  <span>{ev.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="btn btn-outline btn-accent btn-md sm:btn-lg">{t.home.eventsBtn}</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="badge badge-outline badge-secondary font-bold px-4 py-3 mb-4 tracking-wider">{t.home.faqBadge}</div>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary mb-3">{t.home.faqTitle}</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">{t.home.faqDesc}</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { q: t.home.faq1Q, a: t.home.faq1A },
            { q: t.home.faq2Q, a: t.home.faq2A },
            { q: t.home.faq3Q, a: t.home.faq3A },
            { q: t.home.faq4Q, a: t.home.faq4A },
            { q: t.home.faq5Q, a: t.home.faq5A },
          ].map((item, i) => (
            <div key={i} className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <input type="radio" name="faq-accordion" defaultChecked={i === 0} />
              <div className="collapse-title text-sm font-bold">{item.q}</div>
              <div className="collapse-content">
                <p className="text-sm opacity-75 leading-relaxed pt-1">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources / Downloads Section */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <div className="badge badge-outline badge-primary font-bold px-4 py-3 mb-4 tracking-wider">{t.home.resourcesBadge}</div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-3">{t.home.resourcesTitle}</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">{t.home.resourcesDesc}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '📄', label: t.home.res1, tag: t.home.resTag1 },
            { icon: '📋', label: t.home.res2, tag: t.home.resTag2 },
            { icon: '📊', label: t.home.res3, tag: t.home.resTag3 },
            { icon: '📖', label: t.home.res4, tag: t.home.resTag4 },
          ].map((res, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start gap-3">
                <div className="text-3xl group-hover:scale-110 transition-transform">{res.icon}</div>
                <div>
                  <div className="badge badge-ghost badge-xs font-bold mb-1 opacity-60">{res.tag}</div>
                  <div className="text-sm font-bold">{res.label}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                ↓ {t.home.resDownload}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Newsletter / Stay Connected Section */}
      <div className="bg-base-300 border border-base-300 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-2xl sm:text-3xl font-black mb-3">{t.home.newsletterTitle}</h2>
            <p className="text-sm opacity-70 leading-relaxed max-w-lg">{t.home.newsletterDesc}</p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t.home.newsletterPlaceholder}
                className="input input-bordered w-full flex-1 bg-base-100"
              />
              <button className="btn btn-primary shadow-lg shrink-0">{t.home.newsletterBtn}</button>
            </div>
            <p className="text-xs opacity-50 mt-2 text-center sm:text-left">{t.home.newsletterNote}</p>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Home