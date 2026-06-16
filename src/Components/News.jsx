import React, { useState, useEffect } from 'react'
import { useLanguage } from '../Pages/LanguageContext'

const NewsSection = () => {
  const { t } = useLanguage()

  // 1. Core State Array Pre-seeded with realistic June 2026 data pools
  const [newsFeed, setNewsFeed] = useState([
    {
      id: 1,
      title: "El Niño Shifts Weather Patterns: Shock Impact on Kharif 2026 Sowing Timelines",
      content: "Meteorological monitoring clusters confirm evolving El Niño moisture depressions. Crop scientists recommend shifting coarse grain seed sowing windows by 14 days to prevent early root-rot cycles across dryland farming districts.",
      category: "Urgent",
      date: "2026-06-15",
      isUrgent: true,
      isPinned: true
    },
    {
      id: 2,
      title: "Annam.AI Open-Source Agricultural Language Model Rolled Out Nationally",
      content: "Built explicitly on specialized agronomy data collections, Annam.AI delivers localized algorithmic diagnostics covering structural pest control and automated soil hydration analysis directly through low-bandwidth edge device queries.",
      category: "Tech",
      date: "2026-06-14",
      isUrgent: false,
      isPinned: false
    },
    {
      id: 3,
      title: "BRICS Agriculture Executives Convene to Solidify Indore Grain Corridor Framework",
      content: "Multilateral policy coordinates finalized trade updates reducing baseline customs barriers for strategic organic grain movements, mitigating global fertilizer supply dependencies across emerging trade systems.",
      category: "Policy",
      date: "2026-06-12",
      isUrgent: false,
      isPinned: false
    }
  ])

  // 2. Auxiliary System Management UI States
  const [activeFilter, setActiveFilter] = useState('All')
  const [toastMessage, setToastMessage] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  // Form State Elements
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    category: 'Tech',
    isUrgent: false
  })

  // Toast Auto-Clear Routine
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 4000)
      return () => clearTimeout(timer)
    }
  }, [toastMessage])

  // Safety context validation pipeline layer
  if (!t || !t.news) {
    return <div className="py-12 text-center text-lg">Initializing Automated News Protocols...</div>
  }

  // 3. Automated Ingestion Stream Emulator
  const handleAutoFetchUpdates = () => {
    if (isFetching) return
    setIsFetching(true)

    // Simulating asynchronous API endpoint latency delay
    setTimeout(() => {
      const liveIncomingArticle = {
        id: Date.now(),
        title: "National Fertilizer Subsidy Readjusted to Support Micro-Irrigation Protocols",
        content: "New financial distribution clauses redirect capital infrastructure allowances directly to precision subsurface drip frameworks, capping traditional chemical broad-broadcast runtime inefficiencies.",
        category: "Policy",
        date: new Date().toISOString().split('T')[0],
        isUrgent: true,
        isPinned: false
      }

      setNewsFeed(prev => [liveIncomingArticle, ...prev])
      setIsFetching(false)
      setToastMessage(t.news.toastFetched)
    }, 1200)
  }

  // 4. Manual Feed Override Commands
  const handleAddNewArticle = (e) => {
    e.preventDefault()
    if (!newArticle.title || !newArticle.content) return

    const dispatchPayload = {
      id: Date.now(),
      title: newArticle.title,
      content: newArticle.content,
      category: newArticle.isUrgent ? 'Urgent' : newArticle.category,
      date: new Date().toISOString().split('T')[0],
      isUrgent: newArticle.isUrgent,
      isPinned: false
    }

    setNewsFeed(prev => [dispatchPayload, ...prev])
    setNewArticle({ title: '', content: '', category: 'Tech', isUrgent: false })
    setToastMessage(t.news.toastAdded)
  }

  const handleDeleteArticle = (id) => {
    setNewsFeed(prev => prev.filter(item => item.id !== id))
  }

  const handleTogglePin = (id) => {
    setNewsFeed(prev => prev.map(item => 
      item.id === id ? { ...item, isPinned: !item.isPinned } : item
    ))
  }

  // 5. Array Slice Sorting Strategy Pipeline
  const filteredAndSortedNews = newsFeed
    .filter(item => {
      if (activeFilter === 'All') return true
      if (activeFilter === 'Urgent') return item.isUrgent
      return item.category === activeFilter
    })
    .sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0)) // Pin entries stay elevated globally

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-8 px-4 sm:px-6 relative">
      
      {/* Dynamic Action Success Notification Banner System */}
      {toastMessage && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-xl border border-green-600 text-white font-bold text-sm rounded-xl">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Structural Layout Branding Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-base-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl font-black text-primary tracking-tight">{t.news.title}</h2>
          <p className="text-sm font-semibold opacity-75">{t.news.subtitle}</p>
        </div>
        <button 
          onClick={handleAutoFetchUpdates} 
          disabled={isFetching}
          className={`btn btn-outline btn-accent font-black tracking-wide shadow-md ${isFetching ? 'loading' : ''}`}
        >
          {isFetching ? 'Connecting to Agri-Feed...' : t.news.btnFetch}
        </button>
      </div>

      {/* Split Stream Content Panel Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT/CENTER STREAMS: Filters and Sorted News Container */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Filtering Row */}
          <div className="flex flex-wrap gap-2 bg-base-200 p-2 rounded-2xl border border-base-300">
            <button onClick={() => setActiveFilter('All')} className={`btn btn-sm rounded-xl font-bold transition-all ${activeFilter === 'All' ? 'btn-primary shadow-md' : 'btn-ghost'}`}>{t.news.filterAll}</button>
            <button onClick={() => setActiveFilter('Urgent')} className={`btn btn-sm rounded-xl font-bold transition-all ${activeFilter === 'Urgent' ? 'btn-error text-white shadow-md' : 'btn-ghost'}`}>{t.news.filterUrgent}</button>
            <button onClick={() => setActiveFilter('Tech')} className={`btn btn-sm rounded-xl font-bold transition-all ${activeFilter === 'Tech' ? 'btn-accent shadow-md' : 'btn-ghost'}`}>{t.news.filterTech}</button>
            <button onClick={() => setActiveFilter('Policy')} className={`btn btn-sm rounded-xl font-bold transition-all ${activeFilter === 'Policy' ? 'btn-secondary shadow-md' : 'btn-ghost'}`}>{t.news.filterPolicy}</button>
          </div>

          {/* Conditional Empty List Handler Layer */}
          {filteredAndSortedNews.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-3xl p-12 text-center text-base font-bold opacity-60">
              {t.news.noNews}
            </div>
          ) : (
            /* Render Dynamic Active Array Streams */
            <div className="space-y-4">
              {filteredAndSortedNews.map((article) => (
                <div 
                  key={article.id} 
                  className={`bg-base-200 border-2 rounded-3xl p-6 shadow-md transition-all relative overflow-hidden group hover:shadow-lg ${
                    article.isUrgent ? 'border-error/30 bg-gradient-to-br from-base-200 via-base-200 to-error/5' : 'border-base-300 hover:border-base-content/20'
                  }`}
                >
                  {/* Subtle Accent Stripe indicator flags */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${article.isUrgent ? 'bg-error' : 'bg-base-content/20'}`}></div>

                  {/* Top Notification Badges Strip */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 ml-2">
                    {article.isUrgent && <span className="badge badge-error badge-sm text-white font-black text-[10px] tracking-wider rounded-md px-2 py-1.5">{t.news.badgeUrgent}</span>}
                    {article.isPinned && <span className="badge badge-warning badge-sm text-stone-900 font-black text-[10px] tracking-wider rounded-md px-2 py-1.5">📌 {t.news.badgePinned}</span>}
                    <span className="text-xs font-mono font-bold opacity-50 ml-auto">{article.date}</span>
                  </div>

                  {/* Body Content Blocks */}
                  <div className="space-y-2 ml-2">
                    <h4 className="text-lg sm:text-xl font-black text-base-content tracking-wide leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm sm:text-base opacity-90 leading-relaxed text-justify font-medium">
                      {article.content}
                    </p>
                  </div>

                  {/* Interactive Administration Micro-Overlays */}
                  <div className="flex items-center justify-end gap-2 pt-4 mt-4 border-t border-base-300/60 ml-2">
                    <button 
                      onClick={() => handleTogglePin(article.id)}
                      className={`p-2 btn btn-xs sm:btn-sm font-bold rounded-lg border-none ${article.isPinned ? 'bg-amber-500 hover:bg-amber-600 text-stone-900' : 'bg-base-300 hover:bg-base-400'}`}
                    >
                      {article.isPinned ? 'Unpin' : 'Pin Feed'}
                    </button>
                    <button 
                      onClick={() => handleDeleteArticle(article.id)}
                      className="btn btn-xs sm:btn-sm btn-outline btn-error p-2 font-bold rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Interactive Dynamic Management Formulation Panel */}
        <div className="bg-base-200 border border-base-300 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 lg:sticky lg:top-6">
          <h3 className="text-xl font-black text-accent border-b border-base-300 pb-2 flex items-center gap-2">
            {t.news.formTitle}
          </h3>

          <form onSubmit={handleAddNewArticle} className="space-y-4">
            <div className="form-control w-full">
              <label className="label font-bold text-xs"><span className="label-text">{t.news.inputTitle}</span></label>
              <input 
                type="text" 
                value={newArticle.title}
                onChange={(e) => setNewArticle(p => ({ ...p, title: e.target.value }))}
                placeholder="Enter headline..." 
                className="input input-bordered w-full bg-base-100 font-medium" 
                required 
              />
            </div>

            <div className="form-control w-full">
              <label className="label font-bold text-xs"><span className="label-text">{t.news.inputCategory}</span></label>
              <select 
                value={newArticle.category}
                onChange={(e) => setNewArticle(p => ({ ...p, category: e.target.value }))}
                className="select select-bordered w-full bg-base-100 font-bold"
                disabled={newArticle.isUrgent}
              >
                <option value="Tech">🌱 Tech & Machinery</option>
                <option value="Policy">⚖️ Policy & Trade</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label font-bold text-xs"><span className="label-text">{t.news.inputContent}</span></label>
              <textarea 
                value={newArticle.content}
                onChange={(e) => setNewArticle(p => ({ ...p, content: e.target.value }))}
                placeholder="Write background information here..." 
                className="textarea textarea-bordered w-full bg-base-100 font-medium h-28 leading-relaxed" 
                required 
              />
            </div>

            <div className="form-control p-2 bg-base-100 rounded-xl border border-base-300 mt-2">
              <label className="label cursor-pointer justify-between py-1">
                <span className="label-text font-bold text-xs text-error uppercase tracking-wider flex items-center gap-1">
                  🚨 {t.news.toggleUrgent}
                </span> 
                <input 
                  type="checkbox" 
                  checked={newArticle.isUrgent}
                  onChange={(e) => setNewArticle(p => ({ ...p, isUrgent: e.target.checked }))}
                  className="toggle toggle-error toggle-sm" 
                />
              </label>
            </div>

            <div className="form-control pt-2">
              <button type="submit" className="btn btn-primary w-full text-base font-black shadow-md transform active:scale-95 transition-transform">
                {t.news.btnSubmit}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default NewsSection