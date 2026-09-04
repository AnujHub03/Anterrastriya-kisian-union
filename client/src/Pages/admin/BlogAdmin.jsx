import { useEffect, useState } from 'react'
import { useAuth } from '../AuthCont.jsx'

const API_BASE = 'http://localhost:5000'
const CATEGORIES = ['Policy', 'Farming', 'Welfare', 'Awareness']

const emptyPost = () => ({ titleHi: '', titleEn: '', author: '', category: 'Policy', contentHi: '', contentEn: '' })

const BlogAdmin = () => {
  const { user } = useAuth()

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const [newPost, setNewPost] = useState(emptyPost())
  const [creating, setCreating] = useState(false)

  const [editId, setEditId] = useState(null)
  const [editDraft, setEditDraft] = useState(null)
  const [savingId, setSavingId] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  }

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/blog`)
      if (!res.ok) throw new Error('Failed to load posts')
      setPosts(await res.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!newPost.titleEn || !newPost.contentEn) return
    setCreating(true)
    setError(null)
    setMessage(null)
    try {
      const res = await fetch(`${API_BASE}/api/blog`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(newPost),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to publish post')
      }
      const created = await res.json()
      setPosts(prev => [created, ...prev])
      setNewPost(emptyPost())
      setMessage('Post published.')
    } catch (err) {
      setError(err.message)
    } finally {
      setCreating(false)
    }
  }

  const startEdit = (post) => {
    setEditId(post._id)
    setEditDraft({ ...post })
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditDraft(null)
  }

  const handleUpdate = async (id) => {
    setSavingId(id)
    setError(null)
    setMessage(null)
    try {
      const res = await fetch(`${API_BASE}/api/blog/${id}`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify(editDraft),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to save changes')
      }
      const updated = await res.json()
      setPosts(prev => prev.map(p => (p._id === id ? updated : p)))
      setEditId(null)
      setEditDraft(null)
      setMessage('Post updated.')
    } catch (err) {
      setError(err.message)
    } finally {
      setSavingId(null)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post? This cannot be undone.')) return
    setDeletingId(id)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/blog/${id}`, {
        method: 'DELETE',
        headers: authHeaders,
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to delete post')
      }
      setPosts(prev => prev.filter(p => p._id !== id))
    } catch (err) {
      setError(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="max-w-4xl space-y-10 pb-20">
      <h1 className="text-2xl font-black">Blog</h1>

      {message && <div className="alert alert-success text-sm">{message}</div>}
      {error && <div className="alert alert-error text-sm">{error}</div>}

      {/* NEW POST FORM */}
      <section className="border border-base-300 rounded-xl p-5 space-y-3">
        <h2 className="font-bold text-lg border-b border-base-300 pb-2">Publish New Post</h2>
        <form onSubmit={handleCreate} className="space-y-3">
          <Field label="Title (Hindi)" value={newPost.titleHi} onChange={v => setNewPost(p => ({ ...p, titleHi: v }))} />
          <Field label="Title (English) *" value={newPost.titleEn} onChange={v => setNewPost(p => ({ ...p, titleEn: v }))} required />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Author" value={newPost.author} onChange={v => setNewPost(p => ({ ...p, author: v }))} />
            <div>
              <label className="text-xs font-bold opacity-60 block mb-1">Category</label>
              <select
                className="select select-bordered select-sm w-full"
                value={newPost.category}
                onChange={e => setNewPost(p => ({ ...p, category: e.target.value }))}
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <Field label="Content (Hindi)" textarea value={newPost.contentHi} onChange={v => setNewPost(p => ({ ...p, contentHi: v }))} />
          <Field label="Content (English) *" textarea value={newPost.contentEn} onChange={v => setNewPost(p => ({ ...p, contentEn: v }))} required />
          <button type="submit" disabled={creating} className="btn btn-neutral btn-sm">
            {creating ? 'Publishing…' : 'Publish Post'}
          </button>
        </form>
      </section>

      {/* EXISTING POSTS */}
      <section className="space-y-4">
        <h2 className="font-bold text-lg border-b border-base-300 pb-2">Existing Posts ({posts.length})</h2>

        {loading ? (
          <p className="text-sm opacity-60">Loading…</p>
        ) : posts.length === 0 ? (
          <p className="text-sm opacity-60">No posts yet.</p>
        ) : (
          <div className="space-y-4">
            {posts.map(post => {
              const isEditing = editId === post._id
              return (
                <div key={post._id} className="border border-base-300 rounded-xl p-4 space-y-2 relative">
                  <div className="absolute top-3 right-3 flex gap-3 text-xs font-bold">
                    {!isEditing && (
                      <button onClick={() => startEdit(post)} className="text-blue-600 hover:underline">Edit</button>
                    )}
                    <button
                      onClick={() => handleDelete(post._id)}
                      disabled={deletingId === post._id}
                      className="text-red-600 hover:underline"
                    >
                      {deletingId === post._id ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-3 pr-16">
                      <Field label="Title (Hindi)" value={editDraft.titleHi} onChange={v => setEditDraft(d => ({ ...d, titleHi: v }))} />
                      <Field label="Title (English)" value={editDraft.titleEn} onChange={v => setEditDraft(d => ({ ...d, titleEn: v }))} />
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Author" value={editDraft.author} onChange={v => setEditDraft(d => ({ ...d, author: v }))} />
                        <div>
                          <label className="text-xs font-bold opacity-60 block mb-1">Category</label>
                          <select
                            className="select select-bordered select-sm w-full"
                            value={editDraft.category}
                            onChange={e => setEditDraft(d => ({ ...d, category: e.target.value }))}
                          >
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>
                      <Field label="Content (Hindi)" textarea value={editDraft.contentHi} onChange={v => setEditDraft(d => ({ ...d, contentHi: v }))} />
                      <Field label="Content (English)" textarea value={editDraft.contentEn} onChange={v => setEditDraft(d => ({ ...d, contentEn: v }))} />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdate(post._id)}
                          disabled={savingId === post._id}
                          className="btn btn-neutral btn-xs"
                        >
                          {savingId === post._id ? 'Saving…' : 'Save'}
                        </button>
                        <button onClick={cancelEdit} className="btn btn-ghost btn-xs">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div className="pr-16">
                      <p className="text-xs font-bold opacity-50">{post.category} · {post.author}</p>
                      <p className="font-bold">{post.titleEn}</p>
                      <p className="text-sm opacity-70 line-clamp-2">{post.contentEn}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

const Field = ({ label, value, onChange, textarea = false, required = false }) => (
  <div>
    <label className="text-xs font-bold opacity-60 block mb-1">{label}</label>
    {textarea ? (
      <textarea
        className="textarea textarea-bordered w-full text-sm"
        rows={3}
        value={value ?? ''}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
    ) : (
      <input
        type="text"
        className="input input-bordered w-full text-sm"
        value={value ?? ''}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
    )}
  </div>
)

export default BlogAdmin