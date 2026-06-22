import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'

const initialEvents = [
  { id: 1, titleHi: "अंतर्राष्ट्रीय किसान सम्मेलन 2026", titleEn: "International Farmers Conference 2026", date: "2026-07-15", locationHi: "मेरठ, उत्तर प्रदेश", locationEn: "Meerut, Uttar Pradesh", type: "Meeting", descHi: "वार्षिक अंतर्राष्ट्रीय किसान सम्मेलन जिसमें देश-विदेश के किसान प्रतिनिधि भाग लेंगे।", descEn: "Annual international farmers conference with delegates from across the country and abroad." },
  { id: 2, titleHi: "किसान न्याय रैली — दिल्ली", titleEn: "Farmers Justice Rally — Delhi", date: "2026-06-30", locationHi: "नई दिल्ली", locationEn: "New Delhi", type: "Rally", descHi: "MSP कानूनी गारंटी की मांग को लेकर देशव्यापी किसान रैली।", descEn: "Nationwide farmers rally demanding legal MSP guarantee." },
  { id: 3, titleHi: "जैविक खेती कार्यशाला", titleEn: "Organic Farming Workshop", date: "2026-06-10", locationHi: "लखनऊ, उत्तर प्रदेश", locationEn: "Lucknow, Uttar Pradesh", type: "Workshop", descHi: "जैविक खेती की तकनीक, मिट्टी स्वास्थ्य और बाजार जोड़ पर व्यावहारिक कार्यशाला।", descEn: "Practical workshop on organic farming techniques, soil health and market linkages." },
  { id: 4, titleHi: "महिला किसान सशक्तिकरण बैठक", titleEn: "Women Farmer Empowerment Meeting", date: "2026-05-20", locationHi: "जयपुर, राजस्थान", locationEn: "Jaipur, Rajasthan", type: "Meeting", descHi: "महिला किसानों के भूमि अधिकार और ऋण सुविधाओं पर विशेष बैठक।", descEn: "Special meeting on land rights and credit facilities for women farmers." },
  { id: 5, titleHi: "किसान अधिकार रैली — लखनऊ", titleEn: "Farmers Rights Rally — Lucknow", date: "2026-03-15", locationHi: "लखनऊ, उत्तर प्रदेश", locationEn: "Lucknow, Uttar Pradesh", type: "Rally", descHi: "किसानों के कर्ज माफी और भूमि अधिकारों के लिए बड़ी रैली।", descEn: "Large rally for farmers debt waiver and land rights." }
]

const initialPhotos = [
  { id: 1, url: "https://picsum.photos/seed/kisan1/400/300", caption: "किसान रैली — मेरठ | Farmer Rally — Meerut" },
  { id: 2, url: "https://picsum.photos/seed/kisan2/400/300", caption: "जैविक खेती प्रशिक्षण | Organic Farming Training" },
  { id: 3, url: "https://picsum.photos/seed/kisan3/400/300", caption: "किसान सम्मेलन 2025 | Farmer Conference 2025" },
  { id: 4, url: "https://picsum.photos/seed/kisan4/400/300", caption: "महिला किसान बैठक | Women Farmer Meeting" },
  { id: 5, url: "https://picsum.photos/seed/kisan5/400/300", caption: "मृदा स्वास्थ्य परीक्षण | Soil Health Testing" },
  { id: 6, url: "https://picsum.photos/seed/kisan6/400/300", caption: "बाजार समिति बैठक | Market Committee Meeting" }
]

const initialVideos = [
  { id: 1, title: "किसान सम्मेलन 2025 — मुख्य भाषण | Farmers Conference 2025 — Keynote", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "जैविक खेती प्रशिक्षण वीडियो | Organic Farming Training Video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
]

const typeColors = { Rally: 'bg-red-600', Meeting: 'bg-blue-600', Workshop: 'bg-amber-600' }

const Activities = () => {
  const { lang, t } = useLanguage()
  const [activeTab, setActiveTab] = useState('events')
  const [events, setEvents] = useState(initialEvents)
  const [photos, setPhotos] = useState(initialPhotos)
  const [videos, setVideos] = useState(initialVideos)
  const [showForm, setShowForm] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const [newEvent, setNewEvent] = useState({ titleHi: '', titleEn: '', date: '', locationHi: '', locationEn: '', type: 'Rally', descHi: '', descEn: '' })
  const [newVideo, setNewVideo] = useState({ title: '', url: '' })
  const [photoCaption, setPhotoCaption] = useState('')

  if (!t || !t.activities) return <div className="py-12 text-center">Loading...</div>
  const a = t.activities

  const today = new Date().toISOString().split('T')[0]
  const upcomingEvents = events.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))
  const pastEvents = events.filter(e => e.date < today).sort((a, b) => b.date.localeCompare(a.date))

  const handleAddEvent = (e) => {
    e.preventDefault()
    if (!newEvent.titleHi && !newEvent.titleEn) return
    setEvents(prev => [{ ...newEvent, id: Date.now() }, ...prev])
    setNewEvent({ titleHi: '', titleEn: '', date: '', locationHi: '', locationEn: '', type: 'Rally', descHi: '', descEn: '' })
    setShowForm(false)
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPhotos(prev => [{ id: Date.now(), url, caption: photoCaption || file.name }, ...prev])
      setPhotoCaption('')
    }
  }

  const handleAddVideo = (e) => {
    e.preventDefault()
    if (!newVideo.title || !newVideo.url) return
    let embedUrl = newVideo.url
    const match = newVideo.url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\s]+)/)
    if (match) embedUrl = `https://www.youtube.com/embed/${match[1]}`
    setVideos(prev => [{ id: Date.now(), title: newVideo.title, url: embedUrl }, ...prev])
    setNewVideo({ title: '', url: '' })
  }

  const EventCard = ({ event }) => (
    <div className="bg-base-200 border border-base-300 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all group">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <span className={`text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${typeColors[event.type] || 'bg-green-700'}`}>
          {event.type === 'Rally' ? a.typeRally : event.type === 'Meeting' ? a.typeMeeting : a.typeWorkshop}
        </span>
        <span className="text-xs font-mono font-bold text-green-700 bg-green-100 px-2 py-1 rounded-lg">{event.date}</span>
      </div>
      <h3 className="text-lg font-black text-base-content group-hover:text-green-700 transition-colors leading-tight mb-1">
        {lang === 'hi' ? event.titleHi : event.titleEn}
      </h3>
      <p className="text-xs font-bold text-amber-600 mb-2">📍 {lang === 'hi' ? event.locationHi : event.locationEn}</p>
      <p className="text-sm opacity-80 leading-relaxed">{lang === 'hi' ? event.descHi : event.descEn}</p>
    </div>
  )

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">{a.title}</h2>
        <p className="text-sm font-semibold opacity-75">{a.subtitle}</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-base-200 p-2 rounded-2xl border border-base-300">
        {['events', 'photos', 'videos'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`btn btn-sm rounded-xl font-bold transition-all flex-1 sm:flex-none ${activeTab === tab ? 'bg-green-800 text-white shadow-md border-none' : 'btn-ghost'}`}>
            {tab === 'events' ? a.tabEvents : tab === 'photos' ? a.tabPhotos : a.tabVideos}
          </button>
        ))}
      </div>

      {/* EVENTS TAB */}
      {activeTab === 'events' && (
        <div className="space-y-8">
          <div className="flex justify-end">
            <button onClick={() => setShowForm(!showForm)} className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold shadow">
              {a.formTitle}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleAddEvent} className="bg-base-200 border border-base-300 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelTitle} (Hindi)</span></label>
                  <input type="text" value={newEvent.titleHi} onChange={e => setNewEvent(p => ({...p, titleHi: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium" />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelTitle} (English)</span></label>
                  <input type="text" value={newEvent.titleEn} onChange={e => setNewEvent(p => ({...p, titleEn: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium" required />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelDate}</span></label>
                  <input type="date" value={newEvent.date} onChange={e => setNewEvent(p => ({...p, date: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium" required />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelType}</span></label>
                  <select value={newEvent.type} onChange={e => setNewEvent(p => ({...p, type: e.target.value}))} className="select select-bordered select-sm bg-base-100 font-bold">
                    <option value="Rally">{a.typeRally}</option>
                    <option value="Meeting">{a.typeMeeting}</option>
                    <option value="Workshop">{a.typeWorkshop}</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelLocation} (Hindi)</span></label>
                  <input type="text" value={newEvent.locationHi} onChange={e => setNewEvent(p => ({...p, locationHi: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium" />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelLocation} (English)</span></label>
                  <input type="text" value={newEvent.locationEn} onChange={e => setNewEvent(p => ({...p, locationEn: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium" required />
                </div>
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text">{a.labelDesc} (Hindi)</span></label>
                <textarea value={newEvent.descHi} onChange={e => setNewEvent(p => ({...p, descHi: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100 font-medium h-16" />
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text">{a.labelDesc} (English)</span></label>
                <textarea value={newEvent.descEn} onChange={e => setNewEvent(p => ({...p, descEn: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100 font-medium h-16" required />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold flex-1">{a.btnAdd}</button>
                <button type="button" onClick={() => setShowForm(false)} className="btn btn-sm btn-ghost flex-1">Cancel</button>
              </div>
            </form>
          )}

          {upcomingEvents.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-black text-green-700">{a.upcoming}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {upcomingEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
              </div>
            </div>
          )}

          {pastEvents.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-black text-base-content/60">{a.past}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 opacity-80">
                {pastEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
              </div>
            </div>
          )}

          {events.length === 0 && (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{a.noEvents}</div>
          )}
        </div>
      )}

      {/* PHOTOS TAB */}
      {activeTab === 'photos' && (
        <div className="space-y-6">
          <div className="bg-base-200 border border-base-300 rounded-2xl p-5 flex flex-col sm:flex-row items-end gap-4">
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{a.labelCaption}</span></label>
              <input type="text" value={photoCaption} onChange={e => setPhotoCaption(e.target.value)} placeholder="Add a caption..." className="input input-bordered input-sm bg-base-100 font-medium w-full" />
            </div>
            <label className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold cursor-pointer whitespace-nowrap">
              {a.uploadPhoto}
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
          </div>

          {photos.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{a.noPhotos}</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map(photo => (
                <div key={photo.id} className="group relative cursor-pointer rounded-xl overflow-hidden border border-base-300 shadow-md hover:shadow-xl transition-all" onClick={() => setLightbox(photo)}>
                  <img src={photo.url} alt={photo.caption} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-white text-xs font-bold leading-tight">{photo.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIDEOS TAB */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          <form onSubmit={handleAddVideo} className="bg-base-200 border border-base-300 rounded-2xl p-5 flex flex-col sm:flex-row items-end gap-4">
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{a.labelVideoTitle}</span></label>
              <input type="text" value={newVideo.title} onChange={e => setNewVideo(p => ({...p, title: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium w-full" required />
            </div>
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{a.labelVideoUrl}</span></label>
              <input type="url" value={newVideo.url} onChange={e => setNewVideo(p => ({...p, url: e.target.value}))} placeholder="https://youtube.com/watch?v=..." className="input input-bordered input-sm bg-base-100 font-medium w-full" required />
            </div>
            <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold whitespace-nowrap">{a.btnAddVideo}</button>
          </form>

          {videos.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{a.noVideos}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map(video => (
                <div key={video.id} className="bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <div className="aspect-video">
                    <iframe src={video.url} title={video.title} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="p-4">
                    <h4 className="font-black text-base-content text-sm leading-snug">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.caption} className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain" />
            <p className="text-white text-center mt-3 font-bold">{lightbox.caption}</p>
            <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center font-black text-lg transition-colors">✕</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Activities
