import React, { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

const sampleMembers = [
  { id: 1, name: "रमेश सिंह / Ramesh Singh", state: "Uttar Pradesh", city: "Meerut", land: "Small", phone: "9876543210", status: "approved", joinDate: "Jan 2026" },
  { id: 2, name: "सुनीता देवी / Sunita Devi", state: "Haryana", city: "Rohtak", land: "Medium", phone: "9765432100", status: "pending", joinDate: "Feb 2026" },
  { id: 3, name: "प्रदीप कुमार / Pradeep Kumar", state: "Punjab", city: "Amritsar", land: "Small", phone: "9654321000", status: "approved", joinDate: "Mar 2026" },
  { id: 4, name: "मीना पटेल / Meena Patel", state: "Gujarat", city: "Surat", land: "Other", phone: "9543210000", status: "pending", joinDate: "Apr 2026" },
  { id: 5, name: "राजेन्द्र यादव / Rajendra Yadav", state: "Bihar", city: "Patna", land: "Small", phone: "9432100000", status: "approved", joinDate: "May 2026" },
  { id: 6, name: "लक्ष्मी बाई / Lakshmi Bai", state: "Madhya Pradesh", city: "Bhopal", land: "Medium", phone: "9321000000", status: "approved", joinDate: "May 2026" },
  { id: 7, name: "विजय शर्मा / Vijay Sharma", state: "Rajasthan", city: "Jaipur", land: "Small", phone: "9210000000", status: "pending", joinDate: "Jun 2026" },
  { id: 8, name: "अनिता कुमारी / Anita Kumari", state: "West Bengal", city: "Kolkata", land: "Other", phone: "9100000001", status: "approved", joinDate: "Jun 2026" },
  { id: 9, name: "मोहन लाल / Mohan Lal", state: "Uttar Pradesh", city: "Agra", land: "Small", phone: "9000000002", status: "approved", joinDate: "Jun 2026" },
  { id: 10, name: "शांति देवी / Shanti Devi", state: "Maharashtra", city: "Nagpur", land: "Medium", phone: "8900000003", status: "pending", joinDate: "Jun 2026" }
]

const Membership = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('apply')
  const [members, setMembers] = useState(sampleMembers)
  const [search, setSearch] = useState('')
  const [filterState, setFilterState] = useState('All')
  const [toast, setToast] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', land: '', state: '', city: '' })

  useEffect(() => {
    if (toast) { const timer = setTimeout(() => setToast(''), 4000); return () => clearTimeout(timer) }
  }, [toast])

  if (!t || !t.membership) return <div className="py-24 text-center text-lg">Loading Form Systems...</div>
  const m = t.membership

  const allStates = ['All', ...Array.from(new Set(members.map(mb => mb.state))).sort()]

  const filteredMembers = members.filter(mb => {
    const matchState = filterState === 'All' || mb.state === filterState
    const q = search.toLowerCase()
    const matchSearch = mb.name.toLowerCase().includes(q) || mb.city.toLowerCase().includes(q) || mb.state.toLowerCase().includes(q)
    return matchState && matchSearch
  })

  const totalApproved = members.filter(mb => mb.status === 'approved').length
  const totalPending = members.filter(mb => mb.status === 'pending').length
  const thisMonth = members.filter(mb => mb.status === 'approved' && mb.joinDate.includes('Jun 2026')).length
  const statesCount = new Set(members.map(mb => mb.state)).size

  const handleApprove = (id) => {
    setMembers(prev => prev.map(mb => mb.id === id ? { ...mb, status: 'approved' } : mb))
  }
  const handleReject = (id) => {
    setMembers(prev => prev.filter(mb => mb.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMember = { id: Date.now(), name: form.name, state: form.state || 'Unknown', city: form.city || 'Unknown', land: form.land, phone: form.phone, status: 'pending', joinDate: 'Jun 2026' }
    setMembers(prev => [newMember, ...prev])
    setForm({ name: '', phone: '', land: '', state: '', city: '' })
    setToast(m.successMsg)
  }

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

      {/* Structural Branding Header - Glassmorphism Hero */}
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

      {/* Tabs - Frosted Glass Sticky UI */}
      <div className="flex flex-wrap gap-2 p bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-1.5 rounded-xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-20">
        {tabBtn('apply', m.tabApply)}
        {tabBtn('directory', m.tabDirectory)}
        {tabBtn('dashboard', m.tabDashboard)}
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
                <button className="btn bg-green-800 hover:bg-green-700 text-white border-none w-full text-base font-bold shadow-lg shadow-green-800/25 rounded-full hover:scale-[1.02] active:scale-95 transition-transform duration-300">
                  {m.submitBtn}
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
          {/* Sleek Search + Filter */}
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

          {filteredMembers.length === 0 ? (
            <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-bold text-base-content/60">{m.noMembers}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMembers.map(mb => (
                <div key={mb.id} className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Modern Side Stripe */}
                  <div className={`absolute top-0 left-0 h-full w-2 rounded-l-[2rem] ${mb.status === 'approved' ? 'bg-gradient-to-b from-green-600 to-green-400' : 'bg-gradient-to-b from-amber-500 to-amber-300'}`}></div>
                  
                  {/* Subtle Hover Glow */}
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
                      <span className="flex items-center gap-1.5"><span>🗓</span>{mb.joinDate}</span>
                      <span className="flex items-center gap-1.5"><span>🌾</span>{mb.land}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* DASHBOARD TAB */}
      {activeTab === 'dashboard' && (
        <div className="space-y-10">
          {/* Modernized Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: m.totalMembers, value: members.length, color: 'text-green-700 dark:text-green-400', bg: 'bg-green-50/80 dark:bg-green-900/20', border: 'border-green-500/20', icon: '👥' },
              { label: m.pendingApprovals, value: totalPending, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50/80 dark:bg-amber-900/20', border: 'border-amber-500/20', icon: '⏳' },
              { label: m.approvedThisMonth, value: thisMonth, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50/80 dark:bg-blue-900/20', border: 'border-blue-500/20', icon: '✅' },
              { label: m.statesRepresented, value: statesCount, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50/80 dark:bg-purple-900/20', border: 'border-purple-500/20', icon: '🗺️' }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} backdrop-blur-sm border ${stat.border} rounded-[1.5rem] p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                <div className="text-3xl mb-2 drop-shadow-sm">{stat.icon}</div>
                <div className={`text-3xl sm:text-4xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] sm:text-xs font-bold opacity-60 mt-2 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Pending Approval Queue */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              {m.pendingApprovals}
            </h3>
            {members.filter(mb => mb.status === 'pending').length === 0 ? (
              <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-12 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-bold text-base-content/60">{t.navbar.home === 'Home' ? 'No pending approvals!' : 'कोई लंबित अनुमोदन नहीं!'}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {members.filter(mb => mb.status === 'pending').map(mb => (
                  <div key={mb.id} className="group bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-amber-400/30 rounded-[1.5rem] p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center text-lg shrink-0">
                        {mb.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-base-content text-sm">{mb.name}</h4>
                        <p className="text-xs font-semibold text-base-content/50 mt-0.5">📍 {mb.city}, {mb.state} · 📱 {mb.phone} · 🌾 {mb.land} · 🗓 {mb.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => handleApprove(mb.id)} className="btn btn-xs bg-green-700 hover:bg-green-600 text-white border-none font-bold rounded-full shadow-md shadow-green-700/20 hover:scale-105 transition-transform">{m.btnApprove}</button>
                      <button onClick={() => handleReject(mb.id)} className="btn btn-xs btn-outline btn-error font-bold rounded-full hover:scale-105 transition-transform">{m.btnReject}</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Approved Members Summary */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-green-700 dark:text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {m.statusApproved} ({totalApproved})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.filter(mb => mb.status === 'approved').map(mb => (
                <div key={mb.id} className="group bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-green-500/20 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center text-sm font-black shrink-0">
                      {mb.name.charAt(0)}
                    </div>
                    <p className="font-black text-sm text-base-content group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{mb.name}</p>
                  </div>
                  <p className="text-xs opacity-50 font-semibold ml-11">📍 {mb.city}, {mb.state} · {mb.joinDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Membership