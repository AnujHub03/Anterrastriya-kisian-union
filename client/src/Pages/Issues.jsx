import React from 'react'
import { useLanguage } from './LanguageContext'

const Issues = () => {
  const { t } = useLanguage() // 👈 Destructure global translation state engine

  // Dynamic localization structural safety fallback validation check block
  if (!t || !t.issues) {
    return <div className="py-24 text-center text-lg">Loading Analytics Systems...</div>
  }

  return (
    <div className="py-8 space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Structural Branding Header - Glassmorphism Hero */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(8px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 via-base-200/80 to-base-100/80 dark:from-base-900/80 dark:via-base-800/80 dark:to-base-900/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-10 sm:p-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-error/10 border border-error/20 text-error px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            {t.issues.warning}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-base-content tracking-tight leading-tight drop-shadow-sm">
            ⚠️ {t.issues.title}
          </h2>
        </div>
      </div>

      {/* Financial Critique Analytics Two-Column Flex Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Issue Card 1: Input Costs vs Market Value */}
        <div className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          {/* Subtle Red Hover Glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-error"></div>

          <div className="relative z-10 space-y-4">
            <span className="inline-block text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg bg-gradient-to-r from-red-600 to-red-500">
              {t.issues.badge1}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-base-content group-hover:text-error transition-colors">
              {t.issues.card1Title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed opacity-80 text-justify font-medium">
              {t.issues.card1Body}
            </p>
          </div>
        </div>

        {/* Issue Card 2: Income Disparity Breakdown */}
        <div className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          {/* Subtle Red Hover Glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-error"></div>

          <div className="relative z-10 space-y-4">
            <span className="inline-block text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg bg-gradient-to-r from-red-600 to-red-500">
              {t.issues.badge2}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-base-content group-hover:text-error transition-colors">
              {t.issues.card2Title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed opacity-80 text-justify font-medium">
              {t.issues.card2Body}
            </p>
          </div>
        </div>
      </div>

      {/* Global Institution Policy Warning Footer Banner */}
      <div className="relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-error/30 rounded-[2rem] p-6 sm:p-8 max-w-4xl mx-auto shadow-xl overflow-hidden">
        {/* Left Accent Stripe */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-600 to-red-400"></div>
        
        <div className="relative z-10 text-center font-medium">
          <p className="text-sm sm:text-base leading-relaxed text-base-content">
            🚨 <strong className="text-error font-black uppercase tracking-wider">{t.issues.footerAlertTitle}</strong> {t.issues.footerAlertBody}
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Issues