import { useEffect, useState } from 'react'
import { useAuth } from '../AuthCont.jsx'

// ASSUMPTION: adjust to wherever your app's API base URL actually lives.
const API_BASE = window.location.hostname == "localhost"?'http://localhost:5000': 'https://anterrastriya-kisian-union-8cdn.onrender.com'

const MembershipAdmin = () => {
  // ASSUMPTION: your AuthCont exposes the logged-in user with a JWT on
  // `user.token`. Adjust if your token lives elsewhere.
  const { auth } = useAuth()

  console.log('auth',auth)
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busyId, setBusyId] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false);
const [addingMember, setAddingMember] = useState(false);

const [newMember, setNewMember] = useState({
  name: "",
  phone: "",
  land: "",
  state: "",
  city: "",
});

  const authHeaders = {
    'Content-Type': 'application/json',
    authorization: auth?.token,
  }

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/members`,{
        headers:{authorization:auth?.token}
      })
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
  const handleAddMember = async (e) => {
  e.preventDefault();

  setAddingMember(true);
  setError(null);

  try {
    // Step 1: Create member
    const createResponse = await fetch(`${API_BASE}/api/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    });

    const createdMember = await createResponse.json();

    if (!createResponse.ok || createdMember.error || !createdMember._id) {
      throw new Error(
        createdMember.message || createdMember.error || "Failed to add member"
      );
    }

    // Step 2: Approve the newly created member
    const approveResponse = await fetch(
      `${API_BASE}/api/members/${createdMember._id}/approve`,
      {
        method: "PUT",
        headers: authHeaders,
      }
    );

    const approvedMember = await approveResponse.json();

    if (!approveResponse.ok) {
      throw new Error(
        approvedMember.message || "Member created but approval failed"
      );
    }

    // Step 3: Update frontend
    setMembers((prev) => [approvedMember, ...prev]);

    setNewMember({
      name: "",
      phone: "",
      land: "",
      state: "",
      city: "",
    });

    setShowAddForm(false);

  } catch (err) {
    setError(err.message);
  } finally {
    setAddingMember(false);
  }
};

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
      <div className="flex flex-wrap justify-between items-center gap-4">
  <div>
    <h1 className="text-2xl font-black">Membership</h1>
    <p className="text-sm opacity-60 mt-1">
      Manage membership applications and registered members.
    </p>
  </div>

  <button
    className="btn bg-green-700 text-white hover:bg-green-800"
    onClick={() => setShowAddForm(!showAddForm)}
  >
    {showAddForm ? "Cancel" : "+ Add Member"}
  </button>
</div>

      {error && <div className="alert alert-error text-sm">{error}</div>}
      {showAddForm && (
  <div className="bg-base-200 rounded-2xl p-6 space-y-4">
    <div>
      <h2 className="text-xl font-bold">Add Known Member</h2>
      <p className="text-sm opacity-60 mt-1">
        This member will be directly added with approved status.
        No membership payment is required.
      </p>
    </div>

    <form onSubmit={handleAddMember} className="space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Full Name *"
          className="input input-bordered w-full"
          value={newMember.name}
          onChange={(e) =>
            setNewMember({ ...newMember, name: e.target.value })
          }
          required
        />

        <input
          type="tel"
          placeholder="Phone Number *"
          className="input input-bordered w-full"
          value={newMember.phone}
          onChange={(e) =>
            setNewMember({ ...newMember, phone: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="State *"
          className="input input-bordered w-full"
          value={newMember.state}
          onChange={(e) =>
            setNewMember({ ...newMember, state: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="City"
          className="input input-bordered w-full"
          value={newMember.city}
          onChange={(e) =>
            setNewMember({ ...newMember, city: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Land / Agricultural Land"
          className="input input-bordered w-full md:col-span-2"
          value={newMember.land}
          onChange={(e) =>
            setNewMember({ ...newMember, land: e.target.value })
          }
        />

      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={addingMember}
          className="btn bg-green-700 text-white hover:bg-green-800"
        >
          {addingMember ? "Adding Member..." : "Add & Approve Member"}
        </button>

        <button
          type="button"
          onClick={() => setShowAddForm(false)}
          className="btn btn-ghost"
        >
          Cancel
        </button>
      </div>

    </form>
  </div>
)}

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