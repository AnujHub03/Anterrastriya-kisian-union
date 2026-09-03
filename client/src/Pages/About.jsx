import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { Link } from 'react-router-dom'

const About = () => {
  const { t } = useLanguage()
  const [showFullPreamble, setShowFullPreamble] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setContactForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSending(false)
  }

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

        {/* ============ 1. PREAMBLE HERO ============ */}
        <div className="relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&h=500&q=80)',
              filter: 'blur(10px) brightness(0.35)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-base-900/85 via-base-900/70 to-base-900/90"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          {/* Left Accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-l-[2rem]"></div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase">{t.about.preambleBadge || 'हमारी प्रस्तावना'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-base-100 leading-[1.15] mb-6 max-w-4xl">
              {t.about.preambleTitle || 'हमारा संकल्प'}
            </h1>

            {/* Main Paragraph - Always Visible */}
            <p className="text-base sm:text-lg text-base-200 leading-[1.9] max-w-4xl mb-4 text-justify">
              {t.about.pre1 || 'हम, विश्व के किसान, मजदूर, श्रमिक, दलित, आदिवासी, वंचित, शोषित एवं पीड़ित वर्ग के लोग, मानवता, समानता, न्याय, स्वतंत्रता, बंधुत्व तथा सम्मानपूर्ण जीवन के मौलिक अधिकारों को सर्वोपरि मानते हुए यह दृढ़ संकल्प लेते हैं कि हम अन्याय, शोषण, भेदभाव, भूख, बेरोज़गारी, गरीबी एवं सामाजिक असमानता के विरुद्ध संगठित, शांतिपूर्ण और लोकतांत्रिक संघर्ष करेंगे।'}
            </p>

            {/* Expandable Paragraphs */}
            <div className={`overflow-hidden transition-all duration-700 ${showFullPreamble ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-5 pt-2">
                <p className="text-base sm:text-lg text-base-200 leading-[1.9] max-w-4xl text-justify">
                  {t.about.pre2 || 'हम मानते हैं कि किसान और श्रमिक ही विश्व की वास्तविक शक्ति हैं। धरती का अन्न, उत्पादन, श्रम, समृद्धि और विकास उनके अथक परिश्रम का परिणाम है। फिर भी यही वर्ग सबसे अधिक उपेक्षा, आर्थिक असुरक्षा और सामाजिक शोषण का सामना करता है। इसलिए हमारा संगठन किसानों, मजदूरों तथा सभी वंचित एवं पीड़ित समुदायों को सम्मान, शिक्षा, स्वास्थ्य, रोजगार, उचित मूल्य, सामाजिक सुरक्षा, मानवाधिकार तथा न्याय दिलाने के लिए निरंतर कार्य करेगा।'}
                </p>
                <p className="text-base sm:text-lg text-base-200 leading-[1.9] max-w-4xl text-justify">
                  {t.about.pre3 || 'हम जाति, धर्म, भाषा, रंग, लिंग, क्षेत्र और राष्ट्र की सीमाओं से ऊपर उठकर विश्वबंधुत्व, सहयोग, अहिंसा, लोकतंत्र, संवैधानिक मूल्यों तथा मानव गरिमा में विश्वास रखते हैं। हमारा उद्देश्य ऐसा समतामूलक समाज स्थापित करना है जहाँ प्रत्येक व्यक्ति को समान अवसर, सम्मान और न्याय प्राप्त हो तथा किसी भी प्रकार का शोषण, भेदभाव या अन्याय न हो।'}
                </p>

                {/* Final Pledge - Highlighted */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-6">
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t.about.finalPledgeBadge || 'अंतिम संकल्प'}</span>
                  </div>
                  <p className="text-base sm:text-lg text-base-100 leading-[1.9] font-semibold text-justify">
                    {t.about.pre4 || 'अंतर्राष्ट्रीय किसान यूनियन™️ यह संकल्प लेती है कि वह विश्वभर के किसानों, मजदूरों, श्रमिकों, दलितों, आदिवासियों, वंचित, शोषित एवं पीड़ित वर्ग की सशक्त आवाज़ बनकर उनके अधिकारों की रक्षा करेगी तथा न्यायपूर्ण, समतामूलक, लोकतांत्रिक और मानव कल्याणकारी विश्व व्यवस्था के निर्माण हेतु सदैव समर्पित रहेगी।'}
                  </p>
                </div>
              </div>
            </div>

            {/* Read More / Less Button */}
            <button
              onClick={() => setShowFullPreamble(!showFullPreamble)}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group"
            >
              {showFullPreamble ? (
                <>{t.about.readLess || 'संक्षिप्त देखें'} <span className="group-hover:-translate-y-0.5 transition-transform">↑</span></>
              ) : (
                <>{t.about.readMore || 'पूरी प्रस्तावना पढ़ें'} <span className="group-hover:translate-y-0.5 transition-transform">↓</span></>
              )}
            </button>
          </div>
        </div>

        {/* ============ 2. CORE VALUES BADGES ============ */}
        <div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: t.about.val1 || 'मानवता', icon: '🤝', color: 'bg-rose-500/10 border-rose-500/20 text-rose-500' },
              { label: t.about.val2 || 'समानता', icon: '⚖️', color: 'bg-blue-500/10 border-blue-500/20 text-blue-500' },
              { label: t.about.val3 || 'न्याय', icon: '🏛️', color: 'bg-amber-500/10 border-amber-500/20 text-amber-500' },
              { label: t.about.val4 || 'स्वतंत्रता', icon: '🕊️', color: 'bg-green-500/10 border-green-500/20 text-green-500' },
              { label: t.about.val5 || 'बंधुत्व', icon: '🤲', color: 'bg-purple-500/10 border-purple-500/20 text-purple-500' },
              { label: t.about.val6 || 'सम्मान', icon: '✊', color: 'bg-orange-500/10 border-orange-500/20 text-orange-500' },
              { label: t.about.val7 || 'लोकतंत्र', icon: '🗳️', color: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500' },
              { label: t.about.val8 || 'अहिंसा', icon: '☮️', color: 'bg-teal-500/10 border-teal-500/20 text-teal-500' },
            ].map((v, i) => (
              <div
                key={i}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border ${v.color} hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default`}
              >
                <span className="text-lg group-hover:scale-110 transition-transform">{v.icon}</span>
                <span className="text-xs font-black tracking-wide">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ============ 4. चुनौतियाँ ============ */}
        <div className="bg-base-200/40 border border-base-300 rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <span className="text-[11px] font-bold text-secondary tracking-[0.15em] uppercase">{t.about.challengesBadge || 'गंभीर चुनौतियाँ'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">{t.about.challengesTitle || 'जिन मुद्दों पर गंभीर चिंतन किया'}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: '🌡️', title: t.about.ch1Title || 'जलवायु परिवर्तन', desc: t.about.ch1Desc || 'बदलते मौसम और अनियमित बारिश से फसलों को भारी नुकसान।', accent: 'red' },
                { icon: '🪨', title: t.about.ch2Title || 'मिट्टी की गिरती उत्पादकता', desc: t.about.ch2Desc || 'रासायनिक खादों के अत्यधिक प्रयोग से मिट्टी बंजर हो रही है।', accent: 'amber' },
                { icon: '⚗️', title: t.about.ch3Title || 'रासायनिक खादों का असंतुलित प्रयोग', desc: t.about.ch3Desc || 'ज़हरीले रसायनों का इस्तेमाल ज़मीन और सेहत दोनों को नुकसान पहुँचा रहा है।', accent: 'orange' },
                { icon: '📈', title: t.about.ch4Title || 'बाजार की अस्थिरता', desc: t.about.ch4Desc || 'फसलों का उचित दाम न मिलना, बिचौलियों का शोषण।', accent: 'purple' },
              ].map((ch, i) => (
                <div key={i} className="group relative bg-base-100/80 backdrop-blur-sm border border-base-300 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ch.accent === 'red' ? 'from-red-500 to-red-400' : ch.accent === 'amber' ? 'from-amber-500 to-amber-400' : ch.accent === 'orange' ? 'from-orange-500 to-orange-400' : 'from-purple-500 to-purple-400'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{ch.icon}</div>
                  <h3 className="text-sm font-black mb-2 leading-snug">{ch.title}</h3>
                  <p className="text-xs text-base-content/60 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ 6. SCOPE + RESOLUTION CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="group relative bg-base-200/40 backdrop-blur-sm border border-base-300 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden p-6 sm:p-8">
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-accent"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-[10px] font-bold text-accent tracking-[0.15em] uppercase">{t.about.resBadge || 'संकल्प'}</span>
              </div>
              <h3 className="text-xl font-black text-accent mb-6 tracking-tight">{t.about.resolutionHeading}</h3>
              <ul className="space-y-5">
                {[
                  { text: t.about.res1, color: 'bg-primary' },
                  { bold: t.about.res2Bold, text: t.about.res2Text, color: 'bg-accent' },
                  { text: t.about.res3, color: 'bg-primary' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-2 shrink-0`}></span>
                    <span className="text-sm font-semibold opacity-85 leading-relaxed">
                      {item.bold && <strong className="text-accent font-extrabold">{item.bold}</strong>}{item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============ 8. FINAL CTA ============ */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          <div className="relative z-10 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-base-100 mb-3">{t.about.ctaTitle || 'ग्राम स्तर पर संगठन को मजबूत करने का प्रयास करें'}</h2>
              <p className="text-sm sm:text-base text-base-100/80 leading-relaxed">{t.about.ctaDesc || 'अपने गाँव की ग्राम इकाई बनाएं, किसानों को जोड़ें।'}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/gram-unit" className="btn btn-neutral btn-md sm:btn-lg shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">{t.about.ctaBtn1 || 'ग्राम इकाई बनाएं'}</Link>
              <Link to="/register" className="btn btn-outline btn-md sm:btn-lg border-neutral text-neutral hover:bg-neutral hover:text-primary-content transition-colors">{t.about.ctaBtn2 || 'अभी जुड़ें'}</Link>
            </div>
          </div>
        </div>

      </div>

      <style>{`::selection { background: rgba(234, 88, 12, 0.2); }`}</style>
    </div>
  )
}

export default About