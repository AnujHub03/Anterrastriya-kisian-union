import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

const API_BASE = 'http://localhost:5000/api/gallery'

const Gallery = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('photos')

  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const loadGallery = async () => {
      setLoading(true)
      setError(null)
      try {
        const [photosRes, videosRes] = await Promise.all([
          fetch(`${API_BASE}/photos`),
          fetch(`${API_BASE}/videos`)
        ])

        if (!photosRes.ok || !videosRes.ok) {
          throw new Error('Failed to load gallery')
        }

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

  if (!t || !t.gallery) return <div className="py-12 text-center">Loading...</div>
  const g = t.gallery

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">{g.title}</h2>
        <p className="text-sm font-semibold opacity-75">{g.subtitle}</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-semibold rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {/* Tab Switch */}
      <div className="flex gap-2 bg-base-200 p-2 rounded-2xl border border-base-300 w-fit">
        <button onClick={() => setActiveTab('photos')}
          className={`btn btn-sm rounded-xl font-bold transition-all px-6 ${activeTab === 'photos' ? 'bg-green-800 text-white border-none shadow-md' : 'btn-ghost'}`}>
          {g.tabPhotos}
        </button>
        <button onClick={() => setActiveTab('videos')}
          className={`btn btn-sm rounded-xl font-bold transition-all px-6 ${activeTab === 'videos' ? 'bg-green-800 text-white border-none shadow-md' : 'btn-ghost'}`}>
          {g.tabVideos}
        </button>
      </div>

      {loading ? (
        <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">
          Loading gallery...
        </div>
      ) : (
        <>
          {/* PHOTO GALLERY */}
          {activeTab === 'photos' && (
            photos.length === 0 ? (
              <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{g.noPhotos}</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map(photo => (
                  <div key={photo._id} className="group relative cursor-pointer rounded-2xl overflow-hidden border border-base-300 shadow-md hover:shadow-xl transition-all" onClick={() => setLightbox(photo)}>
                    <div className="aspect-[4/5]">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 bg-base-100">
                      <p className="font-bold text-xs text-base-content leading-snug line-clamp-2">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {/* VIDEO GALLERY */}
          {activeTab === 'videos' && (
            videos.length === 0 ? (
              <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{g.noVideos}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {videos.map(video => (
                  <div key={video._id} className="bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="aspect-video">
                      {video.publicId ? (
                        <video src={video.url} controls className="w-full h-full object-cover" />
                      ) : (
                        <iframe src={video.url} title={video.title} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      )}
                    </div>
                    <div className="p-4 border-t border-base-300/60">
                      <p className="font-black text-sm text-base-content leading-snug">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.caption} className="w-full rounded-2xl shadow-2xl max-h-[85vh] object-contain" />
            <p className="text-white text-center mt-3 font-bold text-sm">{lightbox.caption}</p>
            <button onClick={() => setLightbox(null)} className="absolute -top-4 -right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center font-black text-lg transition-colors border border-white/30">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery