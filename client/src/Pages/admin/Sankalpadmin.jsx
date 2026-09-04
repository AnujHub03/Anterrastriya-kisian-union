import { useEffect, useState } from 'react'
import { useAuth } from '../AuthCont.jsx'

const API_BASE = 'http://localhost:5000'

const COLOR_OPTIONS = [
  'green', 'blue', 'orange', 'amber', 'red', 'purple', 'cyan', 'indigo',
  'yellow', 'emerald', 'rose', 'teal', 'pink', 'violet', 'lime', 'sky', 'primary',
]

const emptyResolution = () => ({ num: '', icon: '📜', title: '', desc: '', color: 'green' })

const SankalpAdmin = () => {
  const { user } = useAuth()

  const [resolutions, setResolutions] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/sankalp`)
        if (!res.ok) throw new Error('Failed to load resolutions')
        const data = await res.json()
        setResolutions(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const updateResolution = (index, field, value) => {
    setResolutions(prev => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      return next
    })
  }

  const addResolution = () => {
    setResolutions(prev => [...prev, emptyResolution()])
  }

  const removeResolution = (index) => {
    setResolutions(prev => prev.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/sankalp`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ resolutions }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to save changes')
      }
      const data = await res.json()
      setResolutions(data)
      setMessage('Saved successfully.')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-6">Loading resolutions…</div>

  return (
    <div className="max-w-5xl space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Sankalp Patra — 25 Resolutions</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-neutral btn-sm sm:btn-md"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {message && <div className="alert alert-success text-sm">{message}</div>}
      {error && <div className="alert alert-error text-sm">{error}</div>}

      <div className="flex items-center justify-between border-b border-base-300 pb-2">
        <h2 className="font-bold text-lg">Resolutions ({resolutions.length})</h2>
        <button onClick={addResolution} className="btn btn-outline btn-xs sm:btn-sm">
          + Add Resolution
        </button>
      </div>

      <div className="space-y-4">
        {resolutions.map((r, i) => (
          <div key={i} className="border border-base-300 rounded-xl p-4 space-y-2 relative">
            <button
              onClick={() => removeResolution(i)}
              className="absolute top-3 right-3 text-xs text-red-600 hover:underline"
            >
              Remove
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Field label="Number" value={r.num} onChange={v => updateResolution(i, 'num', v)} />
              <Field label="Icon (emoji)" value={r.icon} onChange={v => updateResolution(i, 'icon', v)} />
              <div>
                <label className="text-xs font-bold opacity-60 block mb-1">Color</label>
                <select
                  className="select select-bordered select-sm w-full"
                  value={r.color}
                  onChange={e => updateResolution(i, 'color', e.target.value)}
                >
                  {COLOR_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <Field label="Title" value={r.title} onChange={v => updateResolution(i, 'title', v)} />
            <Field label="Description" textarea value={r.desc} onChange={v => updateResolution(i, 'desc', v)} />
          </div>
        ))}
      </div>

      <button onClick={handleSave} disabled={saving} className="btn btn-neutral w-full">
        {saving ? 'Saving…' : 'Save Changes'}
      </button>
    </div>
  )
}

const Field = ({ label, value, onChange, textarea = false, type = 'text' }) => (
  <div>
    <label className="text-xs font-bold opacity-60 block mb-1">{label}</label>
    {textarea ? (
      <textarea
        className="textarea textarea-bordered w-full text-sm"
        rows={2}
        value={value ?? ''}
        onChange={e => onChange(e.target.value)}
      />
    ) : (
      <input
        type={type}
        className="input input-bordered w-full text-sm"
        value={value ?? ''}
        onChange={e => onChange(e.target.value)}
      />
    )}
  </div>
)

export default SankalpAdmin