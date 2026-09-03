import React from 'react'
import { useLanguage } from './LanguageContext'
import NewsSection from '../Components/News'
import { Link } from 'react-router-dom'
import image from '../../public/Gallery/image.png'

const Home = () => {
  const { t } = useLanguage()

  // Safety fallback verification logic protection loop
  if (!t || !t.home) {
    return <div className="p-12 text-center text-lg">Loading Content...</div>
  }

  return (
    <>
    <div className="space-y-12 pb-12">

      {/* Farming Image Marquee Strip - Above Hero */}
      <div className="relative -mx-2 sm:-mx-4">
        <div className="overflow-hidden py-1">
          <div className="flex gap-2 animate-[scroll_30s_linear_infinite] w-max">
            {[
              { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=300&h=180&q=80', label: '🌾 Harvest' },
              { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&h=180&q=80', label: '🌿 Fields' },
              { src: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=300&h=180&q=80', label: '🌾 Wheat' },
              { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&h=180&q=80', label: '🌱 Greenhouse' },
              { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&h=180&q=80', label: '🌅 Sunrise' },
              { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&h=180&q=80', label: '🌻 Farmland' },
              { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=300&h=180&q=80', label: '🌾 Harvest' },
              { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&h=180&q=80', label: '🌿 Fields' },
              { src: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=300&h=180&q=80', label: '🌾 Wheat' },
              { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&h=180&q=80', label: '🌱 Greenhouse' },
              { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&h=180&q=80', label: '🌅 Sunrise' },
              { src: 'https://images.unsplash.com/photo-1622484211148-59ed3c755a2d?auto=format&fit=crop&w=300&h=180&q=80', label: '🏔️ Terraces' },
              { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&h=180&q=80', label: '🌻 Farmland' },
            ].map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] h-[90px] sm:h-[110px] md:h-[130px] rounded-xl overflow-hidden border border-base-300 group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900/70 via-base-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                  <span className="text-[10px] sm:text-xs font-bold text-base-100 tracking-wider">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-base-100 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-base-100 to-transparent pointer-events-none z-10"></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Main Hero Section */}
      <div className="hero rounded-3xl overflow-hidden shadow-xl p-6 sm:p-12 border border-base-300 relative">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&h=600&q=80)',
            filter: 'blur(6px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-base-200/95"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="badge badge-primary font-bold px-4 py-3 mb-4 tracking-wider">{t.home.stage}</div>
            <h1 className="text-4xl sm:text-6xl font-black text-primary mb-2 drop-shadow-sm">{t.home.brand}</h1>
            <p className="text-xl sm:text-2xl font-bold text-accent tracking-wide italic mb-6 drop-shadow-sm">
              {t.home.motto}
            </p>
            <p className="text-slate-100 sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto opacity-90 drop-shadow-sm">
              {t.home.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
             <Link to="/login"> <button className="btn btn-primary bg-slate-100 text-black p-2 btn-md sm:btn-lg shadow-lg">{t.home.joinBtn}</button> </Link>
              <Link to="/about"> <button className="btn btn-outline bg-slate-100 text-black p-2 btn-md sm:btn-lg"> {t.home.manifestoBtn}</button> </Link>
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
         <div className="stat-value text-secondary my-2 text-xl sm:text-2xl md:text-3xl font-black whitespace-normal break-words">
    {t.home.stat3Value}
  </div>
          <div className="stat-desc font-medium text-xs whitespace-normal">{t.home.stat3Desc}</div>
        </div>
      </div>

      {/* NEW: Farmer Unity & Message Section (Ravi Panwar Message) */}
      <div className="bg-base-200 border border-base-300 rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl shadow-lg border border-base-300">
            <img
              src={image}
              alt="Farmers standing together in unity"
              className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="badge badge-primary font-bold text-xs tracking-wider mb-1">
                {t.home.messageBadge || 'किसान संगठन'}
              </span>
              <p className="text-sm font-semibold opacity-90">
                {t.home.messageSubtitle || 'एकता ही हमारी शक्ति है'}
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <div className="inline-block">
              <div className="badge badge-outline badge-primary font-bold px-4 py-3 mb-2 tracking-wider">
                {t.home.messageHeadingTag || 'ग्राम इकाई एवं किसान कोष'}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-primary leading-tight">
              {t.home.messageTitle || 'ग्राम इकाई ही हर किसान संगठन का मजबूत आधार है'}
            </h2>

            <div className="space-y-3 text-base-content/90 leading-relaxed text-sm sm:text-base">
              <p>
                {t.home.messageP1 || 'जब गांव मजबूत होंगे तभी संगठन मजबूत होगा। हर किसान की भागीदारी, हर ग्राम इकाई की एकता यही संगठन एवं सभी किसानों की ताकत बनेगी।'}
              </p>
              <p className="bg-base-100 p-4 rounded-xl border-l-4 border-accent shadow-sm">
                {t.home.messageP2 || 'हम सब मिलकर एक किसान कोष का निर्माण करेंगे, जो विश्व के गरीब किसान और मजदूरों को आर्थिक सहायता प्रदान करने के लिए होगा।'}
              </p>
              <p>
                {t.home.messageP3 || 'किसानों को समय पर खाद, बिजली, पानी, सस्ता पेट्रोल और डीजल चाहिए। किसानों को बड़े-बड़े वादे नहीं, आधुनिक तकनीक और खेती के लिए संसाधनों की जरूरत है। जब यह सब होगा, तभी देश और खेत दोनों सुरक्षित होंगे।'}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-2 flex justify-end">
              <div className="text-right border-t border-base-300 pt-3 inline-block">
                <span className="block font-black text-lg text-secondary">
                  {t.home.messageAuthor || 'रवि पंवार'}
                </span>
                <span className="text-xs opacity-60">
                  {t.home.messageAuthorTitle || 'किसान नेता / संगठक'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image 1 - Full Width Agricultural Landscape */}
      <div className="rounded-3xl overflow-hidden shadow-xl border border-base-300">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&h=400&q=80"
          alt="Lush green agricultural fields stretching to the horizon"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />
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

      {/* Image 2 - Two Column: Farmer & Crops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-base-300">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=700&h=350&q=80"
            alt="Farmer working in the fields during harvest season"
            className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-base-300">
          <img
            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=700&h=350&q=80"
            alt="Golden wheat crops ready for harvest"
            className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
          />
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

      {/* Image 3 - Full Width with Overlay Text */}
      <div className="rounded-3xl overflow-hidden shadow-xl border border-base-300 relative group">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&h=180&q=80"
          alt="Terraced rice paddies showcasing sustainable farming"
          className="w-full h-56 sm:h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/80 via-base-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 sm:p-10">
          <p className="text-base-100 text-lg sm:text-2xl font-black max-w-xl leading-snug">{t.home.motto}</p>
        </div>
      </div>

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

      {/* Image 4 - Three Column: Harvest, Tools, Greenhouse */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-base-300">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&h=180&q=80"
            alt="Fresh vegetable harvest from organic farm"
            className="w-full h-32 sm:h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-base-300">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=300&h=180&q=80"
            alt="Tractor plowing the farmland"
            className="w-full h-32 sm:h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-base-300">
          <img
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500&h=400&q=80"
            alt="Greenhouse with thriving plants"
            className="w-full h-32 sm:h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
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

      {/* Image 5 - Final Closing Banner with Overlay */}
      <div className="rounded-3xl overflow-hidden shadow-xl border border-base-300 relative group">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&h=180&q=80"
          alt="Sunrise over farmland symbolizing a new era for agriculture"
          className="w-full h-40 sm:h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/70 via-transparent to-base-900/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-base-100 text-lg sm:text-2xl font-black text-black text-center px-4 drop-shadow-lg">{t.home.brand} — {t.home.motto}</p>
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