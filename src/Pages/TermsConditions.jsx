import React from 'react'
import { useLanguage } from './LanguageContext'

const TermsConditions = () => {
  const { t } = useLanguage()

  if (!t || !t.terms) return <div className="py-12 text-center">Loading...</div>
  const tc = t.terms

  return (
    <div className="py-6 max-w-4xl mx-auto space-y-8 px-4 sm:px-6">
      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">{tc.title}</h2>
        <p className="text-xs font-semibold opacity-50 uppercase tracking-wider">{tc.lastUpdated}</p>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 text-sm font-medium">
        ⚠️ कृपया इस वेबसाइट का उपयोग करने से पहले इन नियमों को ध्यानपूर्वक पढ़ें। / Please read these terms carefully before using this website.
      </div>

      <div className="space-y-6">
        {tc.sections.map((section, idx) => (
          <div key={idx} className="bg-base-200 border border-base-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500 text-stone-900 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-amber-600">{section.heading}</h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">{section.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-base-200 border border-base-300 rounded-2xl p-6 text-center text-sm opacity-60 font-medium">
        किसी प्रश्न के लिए संपर्क करें / For queries contact: <a href="mailto:info@anterrastriyakisanunion.com" className="text-green-700 font-bold hover:underline">info@anterrastriyakisanunion.com</a>
      </div>
    </div>
  )
}

export default TermsConditions
