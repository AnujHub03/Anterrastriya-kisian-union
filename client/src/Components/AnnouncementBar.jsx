import React, { useState } from 'react'
import { useLanguage } from '../Pages/LanguageContext'

const AnnouncementBar = () => {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(true)

  if (!visible || !t || !t.announcement) return null

  return (
    <div className="bg-amber-500 text-stone-900 py-2 px-4 relative overflow-hidden">
      {/* Scrolling marquee text on mobile, static on desktop */}
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        <div className="flex-1 overflow-hidden">
          <p className="text-xs sm:text-sm font-black tracking-wide truncate sm:whitespace-normal text-center sm:text-left leading-relaxed">
            {t.announcement.text}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-black text-stone-900 hover:bg-amber-600 rounded-full transition-colors text-sm"
          aria-label="Close announcement"
        >
          {t.announcement.close}
        </button>
      </div>
    </div>
  )
}

export default AnnouncementBar
