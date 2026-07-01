import React from 'react'
import { useLanguage } from './LanguageContext'

const About = () => {
  const { t } = useLanguage() // 👈 Deconstruct vocabulary access logic

  // Dynamic context availability validation loop
  if (!t || !t.about) {
    return <div className="py-24 text-center text-lg">Loading Profile Systems...</div>
  }

  return (
    <div className="py-8 max-w-5xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
      
      {/* Preamble / प्रस्तावना Header Section - Glassmorphism Hero */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(8px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 via-base-200/80 to-base-100/80 dark:from-base-900/80 dark:via-base-800/80 dark:to-base-900/80 backdrop-blur-sm"></div>
        
        {/* Left Accent Stripe adapted for massive radius */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-500 to-orange-500 rounded-l-[2.5rem]"></div>

        <div className="relative z-10 p-10 sm:p-16 pl-12 sm:pl-20">
          <h2 className="text-3xl sm:text-4xl font-black text-teal-400 tracking-tight drop-shadow-sm mb-4">
            {t.about.preambleTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed text-justify font-medium opacity-90 drop-shadow-sm max-w-4xl">
            {t.about.preambleBody}
          </p>
        </div>
      </div>

      {/* Structural Data Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Scope and Field Profile Card */}
        <div className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden p-6 sm:p-8">
          {/* Subtle Teal Hover Glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-teal-500"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-black text-teal-500 mb-6 flex items-center gap-2 tracking-wide">
              {t.about.scopeHeading}
            </h3>
            <div className="space-y-4 font-bold text-sm sm:text-base">
              <div className="flex justify-between items-center border-b border-base-300/40 pb-3">
                <span className="opacity-60 text-xs sm:text-sm uppercase tracking-wider">{t.about.labelName}</span>
                <span className="text-orange-500 font-black text-right">{t.about.valueName}</span>
              </div>
              <div className="flex justify-between items-center border-b border-base-300/40 pb-3">
                <span className="opacity-60 text-xs sm:text-sm uppercase tracking-wider">{t.about.labelScope}</span>
                <span className="text-base-content text-right">{t.about.valueScope}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="opacity-60 text-xs sm:text-sm uppercase tracking-wider">{t.about.labelOffice}</span>
                <span className="text-base-content text-right font-semibold">{t.about.valueOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision/Resolution Commitments Card */}
        <div className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden p-6 sm:p-8">
          {/* Subtle Orange Hover Glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-orange-500"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-black text-orange-500 mb-6 flex items-center gap-2 tracking-wide">
              {t.about.resolutionHeading}
            </h3>
            <ul className="space-y-4 text-sm sm:text-base font-semibold opacity-95">
              <li className="flex gap-3 items-start">
                <span className="text-teal-500 mt-1 text-xs">⚡</span>
                <span>{t.about.res1}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 mt-1 text-xs">⚡</span>
                <span>
                  <strong className="text-orange-500 font-extrabold">{t.about.res2Bold}</strong>
                  {t.about.res2Text}
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-teal-500 mt-1 text-xs">⚡</span>
                <span>{t.about.res3}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About