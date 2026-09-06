import React, { useEffect, useState } from 'react'
import { useAuth } from '../AuthCont.jsx'

const API_BASE = window.location.hostname === "localhost"
  ? 'http://localhost:5000'
  : 'https://anterrastriya-kisian-union.onrender.com'

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'approved', label: 'Approved' },
  { key: 'rejected', label: 'Rejected' },
]

const PaymentsAdmin = () => {
  // ASSUMPTION: your AuthCont exposes the logged-in user with a JWT on
  // `user.token`. Adjust if your token lives elsewhere.
  const { user } = useAuth()

  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busyId, setBusyId] = useState(null)
  const [tab, setTab] = useState('pending')

  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  }

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/payments`, { headers: authHeaders })
      if (!res.ok) throw new Error('Failed to load payments')
      setPayments(await res.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const act = async (id, action) => {
    setBusyId(id)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/payments/${id}/${action}`, {
        method: 'PUT',
        headers: authHeaders,
      })
      if (!res.ok) throw new Error(`Failed to ${action} payment`)
      const updated = await res.json()
      setPayments(prev => prev.map(p => (p._id === updated._id ? updated : p)))
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyId(null)
    }
  }

  if (loading) return <div className="p-6">Loading payments…</div>

  const filtered = tab === 'all' ? payments : payments.filter(p => p.status === tab)
  const totalApproved = payments.filter(p => p.status === 'approved').reduce((sum, p) => sum + (p.amount || 0), 0)

  const formatDate = (iso) => (iso ? new Date(iso).toLocaleString('en-IN') : '—')

  return (
    <div className="max-w-5xl space-y-8 pb-20">
      <div>
        <h1 className="text-2xl font-black">Payments</h1>
        <p className="text-sm opacity-60 mt-1">
          Check each reference ID, amount, and time against your own UPI statement, then approve or reject.
          Approving a membership payment also approves that member automatically.
        </p>
      </div>

      {error && <div className="alert alert-error text-sm">{error}</div>}

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Payments', value: payments.length, icon: '💳' },
          { label: 'Pending Review', value: payments.filter(p => p.status === 'pending').length, icon: '⏳' },
          { label: 'Approved', value: payments.filter(p => p.status === 'approved').length, icon: '✅' },
          { label: 'Approved Amount', value: `₹${totalApproved}`, icon: '💰' },
        ].map((s, i) => (
          <div key={i} className="bg-base-200 border border-base-300 rounded-2xl p-5 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-black">{s.value}</div>
            <div className="text-[10px] font-bold opacity-60 mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* TABS */}
      <div className="flex gap-2">
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`btn btn-sm ${tab === t.key ? 'btn-neutral' : 'btn-outline'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {filtered.length === 0 && <p className="text-sm opacity-60">No payments in this view.</p>}

        {filtered.map(p => (
          <div key={p._id} className="border border-base-300 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-bold text-green-800">{p.referenceId}</span>
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  p.status === 'approved' ? 'bg-green-600 text-white' :
                  p.status === 'rejected' ? 'bg-red-500 text-white' :
                  'bg-amber-400 text-stone-900'
                }`}>
                  {p.status}
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-base-300">
                  {p.purpose === 'membership' ? 'Membership Fee' : 'ID Card Fee'}
                </span>
              </div>
              <p className="font-bold text-sm">{p.name} · ₹{p.amount}</p>
              <p className="text-xs opacity-60">📱 {p.phone}</p>
              <p className="text-[11px] opacity-50">Paid {formatDate(p.paidAt || p.createdAt)}</p>
            </div>

            {p.status === 'pending' && (
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => act(p._id, 'approve')}
                  disabled={busyId === p._id}
                  className="btn btn-xs bg-green-700 hover:bg-green-600 text-white border-none"
                >
                  Approve
                </button>
                <button
                  onClick={() => act(p._id, 'reject')}
                  disabled={busyId === p._id}
                  className="btn btn-xs btn-outline btn-error"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentsAdmin