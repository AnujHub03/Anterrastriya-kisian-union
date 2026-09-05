import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

// ASSUMPTION: adjust if you have a shared axios instance / different env
// var name for the API base URL elsewhere in the app.
const API_BASE ='http://localhost:5000'

const Membership = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('apply')
  const [members, setMembers] = useState([])
  const [loadingMembers, setLoadingMembers] = useState(true)
  const [search, setSearch] = useState('')
  const [filterState, setFilterState] = useState('All')
  const [toast, setToast] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', land: '', state: '', city: '' })
  const [submitting, setSubmitting] = useState(false)

  // Scan & Pay Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const qrImageUrl = '/QrCode/Qrcode.png'

  useEffect(() => {
    if (toast) { const timer = setTimeout(() => setToast(''), 4000); return () => clearTimeout(timer) }
  }, [toast])

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/members`)
        if (!res.ok) throw new Error('Failed to load members')
        setMembers(await res.json())
      } catch {
        setMembers([]) // directory just shows "no members" rather than breaking the page
      } finally {
        setLoadingMembers(false)
      }
    }
    loadMembers()
  }, [])

  if (!t || !t.membership) return <div className="py-24 text-center text-lg">Loading Form Systems...</div>
  const m = t.membership

  const allStates = ['All', ...Array.from(new Set(members.map(mb => mb.state))).sort()]

  const filteredMembers = members.filter(mb => {
    const matchState = filterState === 'All' || mb.state === filterState
    const q = search.toLowerCase()
    const matchSearch = mb.name.toLowerCase().includes(q) || (mb.city || '').toLowerCase().includes(q) || mb.state.toLowerCase().includes(q)
    return matchState && matchSearch
  })

  const formatJoinDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

  const tabBtn = (key, label) => (
    <button key={key} onClick={() => setActiveTab(key)}
      className={`btn btn-sm rounded-lg p-2 font-bold transition-all duration-300 flex-1 sm:flex-none border-none ${
        activeTab === key 
          ? 'bg-green-800 text-white shadow-lg shadow-green-800/25' 
          : 'bg-transparent hover:bg-base-200/50 text-base-content/70'
      }`}>
      {label}
    </button>
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(`${API_BASE}/api/members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to submit application')
      }
      const created = await res.json()
      setMembers(prev => [created, ...prev]) // shows up in Directory immediately, as "pending"
      setForm({ name: '', phone: '', land: '', state: '', city: '' })
      setToast(m.successMsg)
      setIsModalOpen(true) // Triggers the payment QR modal strictly on form submission
    } catch (err) {
      setToast(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-2xl text-white font-bold text-sm rounded-2xl border border-green-600 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Structural Branding Header */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(8px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 via-base-200/80 to-base-100/80 dark:from-base-900/80 dark:via-base-800/80 dark:to-base-900/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-10 sm:p-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-green-800/10 border border-green-800/20 text-green-800 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            {m.subtitle}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-base-content tracking-tight leading-tight drop-shadow-sm">
            {m.title}
          </h2>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 p bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-1.5 rounded-xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-20">
        {tabBtn('apply', m.tabApply)}
        {tabBtn('directory', m.tabDirectory)}
      </div>

      {/* APPLY TAB */}
      {activeTab === 'apply' && (
        <div className="max-w-xl mx-auto">
          <div className="bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] shadow-xl p-8 sm:p-12 space-y-8">
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelName} *</span></label>
                <input type="text" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} placeholder={m.placeholderName} className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelMobile} *</span></label>
                  <input type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} placeholder="98765XXXXX" className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
                </div>
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelLand}</span></label>
                  <select value={form.land} onChange={e => setForm(p => ({...p, land: e.target.value}))} className="select select-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all">
                    <option value="">{m.selectOptionDefault}</option>
                    <option value="Small">{m.selectOptionSmall}</option>
                    <option value="Medium">{m.selectOptionMedium}</option>
                    <option value="Other">{m.selectOptionOther}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelState} *</span></label>
                  <input type="text" value={form.state} onChange={e => setForm(p => ({...p, state: e.target.value}))} placeholder="e.g. Uttar Pradesh" className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
                </div>
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelCity}</span></label>
                  <input type="text" value={form.city} onChange={e => setForm(p => ({...p, city: e.target.value}))} placeholder={m.placeholderLocation} className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
                </div>
              </div>

              <div className="form-control pt-2">
                <button type="submit" disabled={submitting} className="btn bg-green-800 hover:bg-green-700 text-white border-none w-full text-base font-bold shadow-lg shadow-green-800/25 rounded-full hover:scale-[1.02] active:scale-95 transition-transform duration-300">
                  {submitting ? '...' : m.submitBtn}
                </button>
              </div>
            </form>

            <div className="text-center text-xs opacity-50 font-semibold pt-6 border-t border-base-300/50">
              {m.footerNote}
            </div>
          </div>
        </div>
      )}

      {/* DIRECTORY TAB */}
      {activeTab === 'directory' && (
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-3 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-3 rounded-2xl border border-white/40 dark:border-white/10 shadow-lg">
            <div className="w-full sm:flex-1 relative group">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40 group-focus-within:text-green-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={m.searchPlaceholder}
                className="input input-bordered input-sm w-full pl-10 bg-base-100/80 dark:bg-base-900/80 border-base-300/50 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all"
              />
            </div>
            <select value={filterState} onChange={e => setFilterState(e.target.value)} className="select select-bordered select-sm bg-base-100/80 dark:bg-base-900/80 border-base-300/50 font-bold w-full sm:w-48 focus:border-green-800 transition-all">
              {allStates.map(s => <option key={s} value={s}>{s === 'All' ? m.allStates : s}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            <p className="text-xs font-bold opacity-50">{filteredMembers.length} {t.navbar.membership || 'members'}</p>
          </div>

          {loadingMembers ? (
            <div className="text-center py-12 text-sm opacity-60">Loading members…</div>
          ) : filteredMembers.length === 0 ? (
            <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-bold text-base-content/60">{m.noMembers}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMembers.map(mb => (
                <div key={mb._id} className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full w-2 rounded-l-[2rem] ${mb.status === 'approved' ? 'bg-gradient-to-b from-green-600 to-green-400' : 'bg-gradient-to-b from-amber-500 to-amber-300'}`}></div>
                  
                  <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${mb.status === 'approved' ? 'bg-green-600' : 'bg-amber-500'}`}></div>

                  <div className="relative z-10 ml-3">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-black text-base-content text-sm leading-tight group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{mb.name}</h4>
                        <p className="text-xs text-base-content/60 font-semibold mt-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          {mb.city}, {mb.state}
                        </p>
                      </div>
                      <span className={`text-[10px] font-extrabold border-none text-white rounded-full px-3 py-1 shadow-lg ${mb.status === 'approved' ? 'bg-gradient-to-r from-green-600 to-green-500' : 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-900'}`}>
                        {mb.status === 'approved' ? m.statusApproved : m.statusPending}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-base-content/60 mt-4 bg-base-100/50 dark:bg-base-900/50 rounded-xl px-4 py-3 border border-base-300/30">
                      <span className="flex items-center gap-1.5"><span>📱</span>{mb.phone}</span>
                      <span className="flex items-center gap-1.5"><span>🗓</span>{formatJoinDate(mb.createdAt)}</span>
                      <span className="flex items-center gap-1.5"><span>🌾</span>{mb.land || '—'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SCAN & PAY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="bg-base-100 dark:bg-base-900 border border-white/20 rounded-[2.5rem] shadow-2xl max-w-md w-full p-6 space-y-4 relative overflow-hidden">
            
            <div className="flex justify-between items-center border-b border-base-300 pb-3">
              <div>
                <h3 className="text-xl font-black text-green-800 dark:text-green-400">
                  Scan & Pay
                </h3>
                <p className="text-xs text-base-content/60 font-medium">
                  Scan to complete membership fee payment
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="btn btn-sm btn-circle btn-ghost font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="w-full flex items-center justify-center rounded-2xl border border-base-300 overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-800 p-3 max-h-[460px]">
              <img 
                src={qrImageUrl} 
                alt="Anterrastriya Kisan Union Scan & Pay QR Code" 
                className="max-h-[420px] w-auto object-contain rounded-xl shadow-md"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="btn btn-primary px-8 rounded-full font-bold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Membership