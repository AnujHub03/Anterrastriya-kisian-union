import { useEffect, useState } from 'react'
import { useAuth } from '../AuthCont.jsx'

// ASSUMPTION: adjust to wherever your app's API base URL actually lives.
const API_BASE = 'http://localhost:5000'

const MembershipAdmin = () => {
  // ASSUMPTION: your AuthCont exposes the logged-in user with a JWT on
  // `user.token`. Adjust if your token lives elsewhere.
  const { user } = useAuth()

  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busyId, setBusyId] = useState(null)

  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  }

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/members`)
      if (!res.ok) throw new Error('Failed to load members')
      setMembers(await res.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const handleApprove = async (id) => {
    setBusyId(id)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/members/${id}/approve`, {
        method: 'PUT',
        headers: authHeaders,
      })
      if (!res.ok) throw new Error('Failed to approve')
      const updated = await res.json()
      setMembers(prev => prev.map(m => (m._id === updated._id ? updated : m)))
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyId(null)
    }
  }

  const handleReject = async (id) => {
    if (!confirm('Reject and remove this application?')) return
    setBusyId(id)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/members/${id}`, {
        method: 'DELETE',
        headers: authHeaders,
      })
      if (!res.ok) throw new Error('Failed to reject')
      setMembers(prev => prev.filter(m => m._id !== id))
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyId(null)
    }
  }

  if (loading) return <div className="p-6">Loading members…</div>

  const pending = members.filter(m => m.status === 'pending')
  const approved = members.filter(m => m.status === 'approved')
  const statesCount = new Set(members.map(m => m.state)).size
  const now = new Date()
  const thisMonth = approved.filter(m => {
    const d = new Date(m.createdAt)
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  }).length

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

  return (
    <div className="max-w-5xl space-y-10 pb-20">
      <h1 className="text-2xl font-black">Membership</h1>

      {error && <div className="alert alert-error text-sm">{error}</div>}

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Members', value: members.length, color: 'text-green-700', bg: 'bg-green-50', icon: '👥' },
          { label: 'Pending Approvals', value: pending.length, color: 'text-amber-600', bg: 'bg-amber-50', icon: '⏳' },
          { label: 'Approved This Month', value: thisMonth, color: 'text-blue-600', bg: 'bg-blue-50', icon: '✅' },
          { label: 'States Represented', value: statesCount, color: 'text-purple-600', bg: 'bg-purple-50', icon: '🗺️' },
        ].map((s, i) => (
          <div key={i} className={`${s.bg} border border-base-300 rounded-2xl p-5 text-center`}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-[10px] font-bold opacity-60 mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PENDING */}
      <section className="space-y-4">
        <h2 className="font-bold text-lg text-amber-600 border-b border-base-300 pb-2">
          Pending Approvals ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="text-sm opacity-60">No pending applications.</p>
        ) : (
          <div className="space-y-3">
            {pending.map(m => (
              <div key={m._id} className="border border-amber-400/30 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-sm">{m.name}</p>
                  <p className="text-xs opacity-60 mt-0.5">
                    📍 {m.city}, {m.state} · 📱 {m.phone} · 🌾 {m.land || '—'} · 🗓 {formatDate(m.createdAt)}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleApprove(m._id)}
                    disabled={busyId === m._id}
                    className="btn btn-xs bg-green-700 hover:bg-green-600 text-white border-none"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(m._id)}
                    disabled={busyId === m._id}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* APPROVED */}
      <section className="space-y-4">
        <h2 className="font-bold text-lg text-green-700 border-b border-base-300 pb-2">
          Approved Members ({approved.length})
        </h2>
        {approved.length === 0 ? (
          <p className="text-sm opacity-60">No approved members yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {approved.map(m => (
              <div key={m._id} className="border border-green-500/20 rounded-xl p-4">
                <p className="font-bold text-sm">{m.name}</p>
                <p className="text-xs opacity-60 mt-1">📍 {m.city}, {m.state} · {formatDate(m.createdAt)}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default MembershipAdmin