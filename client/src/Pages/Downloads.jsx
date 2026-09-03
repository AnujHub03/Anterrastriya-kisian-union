import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'

const documents = [
  { id: 1, titleHi: "यूनियन सदस्यता आवेदन फॉर्म 2026", titleEn: "Union Membership Application Form 2026", category: "Form", size: "245 KB", date: "Jan 2026" },
  { id: 2, titleHi: "अंतर्राष्ट्रीय किसान यूनियन घोषणापत्र", titleEn: "International Farmers Union Manifesto", category: "Manifesto", size: "1.2 MB", date: "Dec 2025" },
  { id: 3, titleHi: "नोटिस: वार्षिक महासम्मेलन जुलाई 2026", titleEn: "Notice: Annual Grand Convention July 2026", category: "Notice", size: "180 KB", date: "Jun 2026" },
  { id: 4, titleHi: "परिपत्र: MSP सुधार की मांगें", titleEn: "Circular: MSP Reform Demands", category: "Circular", size: "320 KB", date: "May 2026" },
  { id: 5, titleHi: "पहचान पत्र आवेदन फॉर्म", titleEn: "ID Card Application Form", category: "Form", size: "200 KB", date: "Mar 2026" },
  { id: 6, titleHi: "जैविक खेती दिशानिर्देश पुस्तिका", titleEn: "Organic Farming Guidelines Booklet", category: "Circular", size: "890 KB", date: "Apr 2026" },
  { id: 7, titleHi: "नोटिस: राज्य प्रतिनिधि चुनाव 2026", titleEn: "Notice: State Representative Election 2026", category: "Notice", size: "145 KB", date: "May 2026" },
  { id: 8, titleHi: "किसान शिकायत आवेदन फॉर्म", titleEn: "Farmer Grievance Application Form", category: "Form", size: "190 KB", date: "Feb 2026" }
]

const catIcons = { Notice: '📢', Form: '📋', Manifesto: '📜', Circular: '🔔' }
const catColors = { Notice: 'bg-red-100 text-red-700 border-red-200', Form: 'bg-blue-100 text-blue-700 border-blue-200', Manifesto: 'bg-green-100 text-green-700 border-green-200', Circular: 'bg-amber-100 text-amber-700 border-amber-200' }

const Downloads = () => {
  const { lang, t } = useLanguage()
  const [filter, setFilter] = useState('All')
  const [toast, setToast] = useState('')

  if (!t || !t.downloads) return <div className="py-12 text-center">Loading...</div>
  const d = t.downloads

  const filtered = filter === 'All' ? documents : documents.filter(doc => doc.category === filter)

  const handleDownload = (doc) => {
    setToast(`⬇️ "${lang === 'hi' ? doc.titleHi : doc.titleEn}" — ${lang === 'hi' ? 'डाउनलोड शुरू...' : 'Downloading...'}`)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="py-6 max-w-5xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      {toast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-info shadow-xl font-bold text-sm rounded-xl border border-blue-400">
            <span>{toast}</span>
          </div>
        </div>
      )}

      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">{d.title}</h2>
        <p className="text-sm font-semibold opacity-75">{d.subtitle}</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 bg-base-200 p-2 rounded-2xl border border-base-300">
        {[
          { key: 'All', label: d.filterAll },
          { key: 'Notice', label: d.filterNotice },
          { key: 'Form', label: d.filterForm },
          { key: 'Manifesto', label: d.filterManifesto },
          { key: 'Circular', label: d.filterCircular }
        ].map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            className={`btn btn-sm rounded-xl font-bold transition-all ${filter === f.key ? 'bg-green-800 text-white border-none shadow-md' : 'btn-ghost'}`}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {['Notice', 'Form', 'Manifesto', 'Circular'].map(cat => (
          <div key={cat} className="bg-base-200 border border-base-300 rounded-xl p-3 text-center shadow-sm">
            <div className="text-2xl">{catIcons[cat]}</div>
            <div className="text-lg font-black text-green-800 dark:text-green-400">{documents.filter(d => d.category === cat).length}</div>
            <div className="text-xs font-bold opacity-60 uppercase tracking-wide">{cat}</div>
          </div>
        ))}
      </div>

      {/* Document List */}
      {filtered.length === 0 ? (
        <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{d.noFiles}</div>
      ) : (
        <div className="space-y-3">
          {filtered.map(doc => (
            <div key={doc.id} className="bg-base-200 border border-base-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-wrap items-center justify-between gap-4 group">
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="text-3xl flex-shrink-0">{catIcons[doc.category]}</div>
                <div className="min-w-0">
                  <h3 className="font-black text-base-content group-hover:text-green-700 transition-colors leading-tight text-sm sm:text-base truncate">
                    {lang === 'hi' ? doc.titleHi : doc.titleEn}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className={`text-[11px] font-black px-2 py-0.5 rounded-full border ${catColors[doc.category]}`}>
                      {catIcons[doc.category]} {doc.category}
                    </span>
                    <span className="text-[11px] font-bold text-base-content/50">📁 {doc.size}</span>
                    <span className="text-[11px] font-bold text-base-content/50">📅 {doc.date}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDownload(doc)}
                className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold shadow transition-all transform active:scale-95 whitespace-nowrap"
              >
                {d.btnDownload}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Downloads
