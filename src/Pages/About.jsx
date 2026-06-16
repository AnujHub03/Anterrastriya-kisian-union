import React from 'react'
import { useLanguage } from './LanguageContext'

const About = () => {
  const { t } = useLanguage() // 👈 Deconstruct vocabulary access logic

  // Dynamic context availability validation loop
  if (!t || !t.about) {
    return <div className="py-12 text-center text-lg">Loading Profile Systems...</div>
  }

  return (
    <div className="py-6 max-w-5xl mx-auto space-y-12 px-4 sm:px-6">
      
      {/* Preamble / प्रस्तावना Header Section */}
      <section className="bg-base-200 p-6 sm:p-10 rounded-3xl border border-base-300 shadow-xl relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-500 to-orange-500"></div>
        <h2 className="text-2xl sm:text-3xl font-black text-teal-500 border-b border-base-300 pb-3 tracking-wide">
          {t.about.preambleTitle}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-justify font-medium pt-2 opacity-95">
          {t.about.preambleBody}
        </p>
      </section>

      {/* Structural Data Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Scope and Field Profile Card */}
        <div className="card bg-base-200 border border-base-300 shadow-xl p-6 sm:p-8 rounded-3xl hover:shadow-2xl hover:border-teal-500/20 transition-all duration-300">
          <h3 className="text-xl font-black text-teal-500 mb-6 flex items-center gap-2 tracking-wide">
            {t.about.scopeHeading}
          </h3>
          <div className="space-y-4 font-bold text-sm sm:text-base">
            <div className="flex justify-between items-center border-b border-base-300/60 pb-3">
              <span className="opacity-60 text-xs sm:text-sm uppercase tracking-wider">{t.about.labelName}</span>
              <span className="text-orange-500 font-black text-right">{t.about.valueName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-base-300/60 pb-3">
              <span className="opacity-60 text-xs sm:text-sm uppercase tracking-wider">{t.about.labelScope}</span>
              <span className="text-base-content text-right">{t.about.valueScope}</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="opacity-60 text-xs sm:text-sm uppercase tracking-wider">{t.about.labelOffice}</span>
              <span className="text-base-content text-right font-semibold">{t.about.valueOffice}</span>
            </div>
          </div>
        </div>

        {/* Vision/Resolution Commitments Card */}
        <div className="card bg-base-200 border border-base-300 shadow-xl p-6 sm:p-8 rounded-3xl hover:shadow-2xl hover:border-orange-500/20 transition-all duration-300">
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
  )
}

export default About