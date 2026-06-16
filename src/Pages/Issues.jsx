import React from 'react'
import { useLanguage } from './LanguageContext'

const Issues = () => {
  const { t } = useLanguage() // 👈 Destructure global translation state engine

  // Dynamic localization structural safety fallback validation check block
  if (!t || !t.issues) {
    return <div className="py-12 text-center text-lg">Loading Analytics Systems...</div>
  }

  return (
    <div className="py-6 space-y-12 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Alert Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-4xl font-black text-error border-b-2 border-error/20 pb-4 leading-tight">
          ⚠️ {t.issues.title}
        </h2>
        <p className="text-sm sm:text-base font-semibold opacity-75 max-w-xl mx-auto">
          {t.issues.warning}
        </p>
      </div>

      {/* Financial Critique Analytics Two-Column Flex Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Issue Card 1: Input Costs vs Market Value */}
        <div className="bg-base-200 p-6 sm:p-8 rounded-3xl border border-base-300 shadow-lg hover:shadow-xl hover:border-error/30 transition-all duration-300 space-y-4 group transform hover:-translate-y-1">
          <div className="badge badge-error text-white font-black px-4 py-3 tracking-wide rounded-lg shadow-sm">
            {t.issues.badge1}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-base-content group-hover:text-error transition-colors">
            {t.issues.card1Title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 text-justify font-medium">
            {t.issues.card1Body}
          </p>
        </div>

        {/* Issue Card 2: Income Disparity Breakdown */}
        <div className="bg-base-200 p-6 sm:p-8 rounded-3xl border border-base-300 shadow-lg hover:shadow-xl hover:border-error/30 transition-all duration-300 space-y-4 group transform hover:-translate-y-1">
          <div className="badge badge-error text-white font-black px-4 py-3 tracking-wide rounded-lg shadow-sm">
            {t.issues.badge2}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-base-content group-hover:text-error transition-colors">
            {t.issues.card2Title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 text-justify font-medium">
            {t.issues.card2Body}
          </p>
        </div>
      </div>

      {/* Global Institution Policy Warning Footer Banner */}
      <div className="bg-error/10 border-2 border-error/30 text-base-content p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto text-center font-medium shadow-md relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-error"></div>
        <p className="text-sm sm:text-base leading-relaxed">
          🚨 <strong className="text-error font-black uppercase tracking-wider">{t.issues.footerAlertTitle}</strong> {t.issues.footerAlertBody}
        </p>
      </div>
      
    </div>
  )
}

export default Issues