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
    </div>
    <NewsSection />
    </>
  )
}

export default Home