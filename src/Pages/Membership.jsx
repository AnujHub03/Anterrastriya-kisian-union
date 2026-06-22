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

  if (!t || !t.membership) return <div className="py-12 text-center text-lg">Loading Form Systems...</div>
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
      className={`btn btn-sm rounded-xl font-bold transition-all flex-1 sm:flex-none ${activeTab === key ? 'bg-green-800 text-white border-none shadow-md' : 'btn-ghost'}`}>
      {label}
    </button>
  )

  return (
    <div className="py-6 max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-xl text-white font-bold text-sm rounded-xl border border-green-600">
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-green-800 dark:text-green-400">{m.title}</h2>
        <p className="text-xs sm:text-sm font-semibold opacity-85 px-2">{m.subtitle}</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-base-200 p-2 rounded-2xl border border-base-300">
        {tabBtn('apply', m.tabApply)}
        {tabBtn('directory', m.tabDirectory)}
        {tabBtn('dashboard', m.tabDashboard)}
      </div>

      {/* APPLY TAB */}
      {activeTab === 'apply' && (
        <div className="max-w-xl mx-auto">
          <div className="bg-base-200 border border-base-300 p-6 sm:p-10 rounded-3xl shadow-xl space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelName} *</span></label>
                <input type="text" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} placeholder={m.placeholderName} className="input input-bordered w-full bg-base-100 font-medium" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelMobile} *</span></label>
                  <input type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} placeholder="98765XXXXX" className="input input-bordered w-full bg-base-100 font-medium" required />
                </div>
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelLand}</span></label>
                  <select value={form.land} onChange={e => setForm(p => ({...p, land: e.target.value}))} className="select select-bordered w-full bg-base-100 font-medium">
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
                  <input type="text" value={form.state} onChange={e => setForm(p => ({...p, state: e.target.value}))} placeholder="e.g. Uttar Pradesh" className="input input-bordered w-full bg-base-100 font-medium" required />
                </div>
                <div className="form-control w-full">
                  <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{m.labelCity}</span></label>
                  <input type="text" value={form.city} onChange={e => setForm(p => ({...p, city: e.target.value}))} placeholder={m.placeholderLocation} className="input input-bordered w-full bg-base-100 font-medium" />
                </div>
              </div>

              <div className="form-control pt-4">
                <button className="btn bg-green-800 hover:bg-green-700 text-white border-none w-full text-base font-bold shadow-lg transform active:scale-95 transition-transform">
                  {m.submitBtn}
                </button>
              </div>
            </form>

            <div className="text-center text-xs opacity-60 font-semibold pt-2 border-t border-base-300">
              {m.footerNote}
            </div>
          </div>
        </div>
      )}

      {/* DIRECTORY TAB */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3 bg-base-200 p-4 rounded-2xl border border-base-300">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={m.searchPlaceholder}
              className="input input-bordered input-sm flex-1 bg-base-100 font-medium"
            />
            <select value={filterState} onChange={e => setFilterState(e.target.value)} className="select select-bordered select-sm bg-base-100 font-bold w-full sm:w-48">
              {allStates.map(s => <option key={s} value={s}>{s === 'All' ? m.allStates : s}</option>)}
            </select>
          </div>

          <p className="text-xs font-bold opacity-50">{filteredMembers.length} {t.navbar.membership || 'members'}</p>

          {filteredMembers.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{m.noMembers}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredMembers.map(mb => (
                <div key={mb.id} className="bg-base-200 border border-base-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${mb.status === 'approved' ? 'bg-green-600' : 'bg-amber-500'}`}></div>
                  <div className="ml-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-black text-base-content text-sm leading-tight">{mb.name}</h4>
                        <p className="text-xs text-green-700 font-bold mt-0.5">📍 {mb.city}, {mb.state}</p>
                      </div>
                      <span className={`badge text-[10px] font-black border-none text-white rounded-md px-2 py-1 ${mb.status === 'approved' ? 'bg-green-600' : 'bg-amber-500 text-stone-900'}`}>
                        {mb.status === 'approved' ? m.statusApproved : m.statusPending}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-xs font-bold opacity-70 mt-2">
                      <span>📱 {mb.phone}</span>
                      <span>🗓 {mb.joinDate}</span>
                      <span className="col-span-2">🌾 {mb.land}</span>
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
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: m.totalMembers, value: members.length, color: 'text-green-700', bg: 'bg-green-50 dark:bg-green-900/20', icon: '👥' },
              { label: m.pendingApprovals, value: totalPending, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20', icon: '⏳' },
              { label: m.approvedThisMonth, value: thisMonth, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', icon: '✅' },
              { label: m.statesRepresented, value: statesCount, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', icon: '🗺️' }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} border border-base-300 rounded-2xl p-5 text-center shadow-sm`}>
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs font-bold opacity-60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Pending Approval Queue */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-amber-600">⏳ {m.pendingApprovals}</h3>
            {members.filter(mb => mb.status === 'pending').length === 0 ? (
              <div className="bg-base-200 border border-base-300 rounded-2xl p-8 text-center font-bold opacity-60">
                ✅ {t.navbar.home === 'Home' ? 'No pending approvals!' : 'कोई लंबित अनुमोदन नहीं!'}
              </div>
            ) : (
              <div className="space-y-3">
                {members.filter(mb => mb.status === 'pending').map(mb => (
                  <div key={mb.id} className="bg-base-200 border border-amber-300/50 rounded-2xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="font-black text-base-content">{mb.name}</h4>
                      <p className="text-xs font-bold text-base-content/60">📍 {mb.city}, {mb.state} · 📱 {mb.phone} · 🌾 {mb.land} · 🗓 {mb.joinDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleApprove(mb.id)} className="btn btn-xs bg-green-700 hover:bg-green-600 text-white border-none font-bold">{m.btnApprove}</button>
                      <button onClick={() => handleReject(mb.id)} className="btn btn-xs btn-outline btn-error font-bold">{m.btnReject}</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Approved Members Summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-green-700">✅ {m.statusApproved} ({totalApproved})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {members.filter(mb => mb.status === 'approved').map(mb => (
                <div key={mb.id} className="bg-base-200 border border-green-600/20 rounded-xl p-4 shadow-sm">
                  <p className="font-black text-sm">{mb.name}</p>
                  <p className="text-xs opacity-60 font-bold">📍 {mb.city}, {mb.state} · {mb.joinDate}</p>
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
