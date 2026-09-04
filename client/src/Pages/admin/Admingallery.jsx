import { useState, useEffect } from 'react'

const API_BASE = 'http://localhost:5000/api/gallery'

const AdminGallery = () => {
  const [activeTab, setActiveTab] = useState('photos')

  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [caption, setCaption] = useState('')
  const [newVideo, setNewVideo] = useState({ title: '', url: '' })
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  const [uploadingVideo, setUploadingVideo] = useState(false)

  useEffect(() => {
    const loadGallery = async () => {
      setLoading(true)
      setError(null)
      try {
        const [photosRes, videosRes] = await Promise.all([
          fetch(`${API_BASE}/photos`),
          fetch(`${API_BASE}/videos`)
        ])
        if (!photosRes.ok || !videosRes.ok) throw new Error('Failed to load gallery')
        setPhotos(await photosRes.json())
        setVideos(await videosRes.json())
      } catch (err) {
        setError(err.message === 'Failed to fetch'
          ? 'Could not reach the server. Is the backend running on port 5000?'
          : err.message)
      } finally {
        setLoading(false)
      }
    }
    loadGallery()
  }, [])

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploadingPhoto(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append('photo', file)
      formData.append('caption', caption || file.name)

      const res = await fetch(`${API_BASE}/photos`, {
        method: 'POST',
        body: formData
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.message || `Photo upload failed (status ${res.status})`)
      }

      setPhotos(prev => [data, ...prev])
      setCaption('')
    } catch (err) {
      setError(err.message === 'Failed to fetch'
        ? 'Could not reach the server. Is the backend running on port 5000?'
        : err.message)
    } finally {
      setUploadingPhoto(false)
      e.target.value = ''
    }
  }

  const handleVideoFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploadingVideo(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append('video', file)
      formData.append('title', newVideo.title || file.name)

      const res = await fetch(`${API_BASE}/videos/upload`, {
        method: 'POST',
        body: formData
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.message || `Video upload failed (status ${res.status})`)
      }

      setVideos(prev => [data, ...prev])
      setNewVideo({ title: '', url: '' })
    } catch (err) {
      setError(err.message === 'Failed to fetch'
        ? 'Could not reach the server. Is the backend running on port 5000?'
        : err.message)
    } finally {
      setUploadingVideo(false)
      e.target.value = ''
    }
  }

  const handleAddVideoLink = async (e) => {
    e.preventDefault()
    if (!newVideo.title || !newVideo.url) return

    setError(null)
    try {
      const res = await fetch(`${API_BASE}/videos/link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVideo)
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.message || 'Failed to add video')
      }

      setVideos(prev => [data, ...prev])
      setNewVideo({ title: '', url: '' })
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeletePhoto = async (id) => {
    if (!window.confirm('Delete this photo?')) return
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/photos/${id}`, { method: 'DELETE' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Failed to delete photo')
      setPhotos(prev => prev.filter(p => p._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeleteVideo = async (id) => {
    if (!window.confirm('Delete this video?')) return
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/videos/${id}`, { method: 'DELETE' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Failed to delete video')
      setVideos(prev => prev.filter(v => v._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-green-800">Gallery Management</h1>
        <p className="text-sm opacity-60">Upload and manage the photos and videos shown on the public gallery page.</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-semibold rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <div className="flex gap-2 bg-base-200 p-2 rounded-2xl border border-base-300 w-fit">
        <button onClick={() => setActiveTab('photos')} className={`btn btn-sm rounded-xl font-bold px-6 ${activeTab === 'photos' ? 'bg-green-800 text-white border-none' : 'btn-ghost'}`}>Photos</button>
        <button onClick={() => setActiveTab('videos')} className={`btn btn-sm rounded-xl font-bold px-6 ${activeTab === 'videos' ? 'bg-green-800 text-white border-none' : 'btn-ghost'}`}>Videos</button>
      </div>

      {loading ? (
        <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">Loading...</div>
      ) : activeTab === 'photos' ? (
        <div className="space-y-6">
          <div className="bg-base-200 border border-base-300 rounded-2xl p-5 flex flex-col sm:flex-row items-end gap-4">
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">Caption</span></label>
              <input type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder="Caption for photo..." className="input input-bordered input-sm bg-base-100 font-medium w-full" />
            </div>
            <label className={`btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold cursor-pointer whitespace-nowrap ${uploadingPhoto ? 'btn-disabled opacity-60' : ''}`}>
              {uploadingPhoto ? 'Uploading...' : 'Upload Photo'}
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} disabled={uploadingPhoto} />
            </label>
          </div>

          {photos.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">No photos yet</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map(photo => (
                <div key={photo._id} className="relative rounded-2xl overflow-hidden border border-base-300 shadow-md">
                  <div className="aspect-[4/5]">
                    <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 bg-base-100 flex items-center justify-between gap-2">
                    <p className="font-bold text-xs leading-snug line-clamp-2 flex-1">{photo.caption}</p>
                    <button onClick={() => handleDeletePhoto(photo._id)} className="text-red-500 hover:text-red-700 text-xs font-bold shrink-0">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-base-200 border border-base-300 rounded-2xl p-5 space-y-4">
            <div className="form-control w-full">
              <label className="label text-xs font-bold"><span className="label-text">Video Title</span></label>
              <input type="text" value={newVideo.title} onChange={e => setNewVideo(p => ({ ...p, title: e.target.value }))} className="input input-bordered input-sm bg-base-100 font-medium w-full" />
            </div>

            <form onSubmit={handleAddVideoLink} className="flex flex-col sm:flex-row items-end gap-4">
              <div className="form-control flex-1 w-full">
                <label className="label text-xs font-bold"><span className="label-text">YouTube / Video URL</span></label>
                <input type="url" value={newVideo.url} onChange={e => setNewVideo(p => ({ ...p, url: e.target.value }))} placeholder="https://youtube.com/watch?v=..." className="input input-bordered input-sm bg-base-100 font-medium w-full" />
              </div>
              <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold whitespace-nowrap">Add Link</button>
            </form>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-base-300"></div>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-wide">or</span>
              <div className="flex-1 h-px bg-base-300"></div>
            </div>

            <label className={`btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold cursor-pointer w-fit ${uploadingVideo ? 'btn-disabled opacity-60' : ''}`}>
              {uploadingVideo ? 'Uploading...' : 'Upload video file'}
              <input type="file" accept="video/*" className="hidden" onChange={handleVideoFileUpload} disabled={uploadingVideo} />
            </label>
          </div>

          {videos.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">No videos yet</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {videos.map(video => (
                <div key={video._id} className="bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-md">
                  <div className="aspect-video">
                    {video.publicId ? (
                      <video src={video.url} controls className="w-full h-full object-cover" />
                    ) : (
                      <iframe src={video.url} title={video.title} className="w-full h-full" frameBorder="0" allowFullScreen />
                    )}
                  </div>
                  <div className="p-4 border-t border-base-300/60 flex items-center justify-between gap-2">
                    <p className="font-black text-sm leading-snug flex-1">{video.title}</p>
                    <button onClick={() => handleDeleteVideo(video._id)} className="text-red-500 hover:text-red-700 text-xs font-bold shrink-0">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AdminGallery