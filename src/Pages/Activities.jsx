import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import img16 from '../../public/Gallery/img16.jpg';
import img1 from '../../public/Gallery/img1.jpg';
import img2 from '../../public/Gallery/img2.jpg';
import img3 from '../../public/Gallery/img3.jpg';
import img4 from '../../public/Gallery/img4.jpg';
import img5 from '../../public/Gallery/img5.jpg';
import img6 from '../../public/Gallery/img6.jpg';
import img7 from '../../public/Gallery/img7.jpg';
import img8 from '../../public/Gallery/img8.jpg';
import img9 from '../../public/Gallery/img9.jpg';
import img10 from '../../public/Gallery/img10.jpg';
import img11 from '../../public/Gallery/img11.jpg';
import img13 from '../../public/Gallery/img13.jpg';
import img14 from '../../public/Gallery/img14.jpg';
import img15 from '../../public/Gallery/img15.jpg';
import img17 from '../../public/Gallery/img17.jpg';
import img18 from '../../public/Gallery/img18.jpg';
import img19 from '../../public/Gallery/img19.jpg';
import vid1 from '../../public/Gallery/vid1.mp4';


const initialEvents = [
  { id: 1, titleHi: "अंतर्राष्ट्रीय किसान सम्मेलन 2026", titleEn: "International Farmers Conference 2026", date: "2026-07-15", locationHi: "मेरठ, उत्तर प्रदेश", locationEn: "Meerut, Uttar Pradesh", type: "Meeting", descHi: "वार्षिक अंतर्राष्ट्रीय किसान सम्मेलन जिसमें देश-विदेश के किसान प्रतिनिधि भाग लेंगे।", descEn: "Annual international farmers conference with delegates from across the country and abroad." },
  { id: 2, titleHi: "किसान न्याय रैली — दिल्ली", titleEn: "Farmers Justice Rally — Delhi", date: "2026-06-30", locationHi: "नई दिल्ली", locationEn: "New Delhi", type: "Rally", descHi: "MSP कानूनी गारंटी की मांग को लेकर देशव्यापी किसान रैली।", descEn: "Nationwide farmers rally demanding legal MSP guarantee." },
  { id: 3, titleHi: "जैविक खेती कार्यशाला", titleEn: "Organic Farming Workshop", date: "2026-06-10", locationHi: "लखनऊ, उत्तर प्रदेश", locationEn: "Lucknow, Uttar Pradesh", type: "Workshop", descHi: "जैविक खेती की तकनीक, मिट्टी स्वास्थ्य और बाजार जोड़ पर व्यावहारिक कार्यशाला।", descEn: "Practical workshop on organic farming techniques, soil health and market linkages." },
  { id: 4, titleHi: "महिला किसान सशक्तिकरण बैठक", titleEn: "Women Farmer Empowerment Meeting", date: "2026-05-20", locationHi: "जयपुर, राजस्थान", locationEn: "Jaipur, Rajasthan", type: "Meeting", descHi: "महिला किसानों के भूमि अधिकार और ऋण सुविधाओं पर विशेष बैठक।", descEn: "Special meeting on land rights and credit facilities for women farmers." },
  { id: 5, titleHi: "किसान अधिकार रैली — लखनऊ", titleEn: "Farmers Rights Rally — Lucknow", date: "2026-03-15", locationHi: "लखनऊ, उत्तर प्रदेश", locationEn: "Lucknow, Uttar Pradesh", type: "Rally", descHi: "किसानों के कर्ज माफी और भूमि अधिकारों के लिए बड़ी रैली।", descEn: "Large rally for farmers debt waiver and land rights." }
]

const initialPhotos = [
  { id: 1, url: img16, caption: "किसान रैली — मेरठ | Farmer Rally — Meerut" },
  { id: 2, url: img1, caption: "राजा चरत प्रताप सिंह जी , इंटरनेशनल चेयरमैन | Raja Chatar Pratap Singh ji , International Chairperson" },
  { id: 3, url: img2, caption: "किसान सम्मेलन   | Farmer Conference  " },
  { id: 4, url: img3, caption: "नवनीत कुमार ,संस्थापक सदस्य | Naveen Kumar, Founding Member" },
  { id: 5, url: img4, caption: "संजीव कुमार , संस्थापक सदस्य | Sanjeev Kumar, Founding Member" },
  { id: 6, url: img5, caption: "प्रदीप कुमार , संस्थापक सदस्य | Pradeep Kumar, Founding Member" },
  { id: 7, url: img6, caption: "रवि पंवार , संस्थापक सदस्य | Ravi Pawar, Founding Member" },
  { id: 8, url: img7, caption: "संजीव दांगी , संस्थापक सदस्य | Sanjeev Dangi, Founding Member" },
  { id: 9, url: img8, caption: "मुकेश सिंह बिष्ट , संस्थापक सदस्य | Mukesha Singh Bist, Founding Member" },
  { id: 10, url: img9, caption: "अशोक कुमार , संस्थापक सदस्य | Ashok Kumar, Founding Member" },
  { id: 11, url: img10, caption: "राजेंद्र सिंह पंवार , संस्थापक सदस्य | Rajendra Singh Pawar, Founding Member" },
  { id: 12, url: img11, caption: "विनोद तोमर , संस्थापक सदस्य | Vinod Tomar, Founding Member" },
  { id: 14, url: img13, caption: "सुरेश पाल , संस्थापक सदस्य | Suresh Pal, Founding Member" },
  { id: 15, url: img14, caption: "दिलवर सिंह रावत , संस्थापक सदस्य | Dilwar Singh Rawat, Founding Member" },
  { id: 16, url: img15, caption: "सुरेश पाल , संस्थापक सदस्य | Suresh Pal, Founding Member" },
  { id: 17, url: img17, caption: "किसान अधिकार सम्मेलन | Farmers Rights Conference" },
  { id: 18, url: img18, caption: "संस्थापक सदस्य | Founding Members" },
  { id: 19, url: img19, caption: "संस्थापक सदस्य | Founding Members" },
]

// Updated with real farmer/agriculture related video IDs
const initialVideos = [
  { id: 1, title: "किसान आंदोलन: आवाज़ और संघर्ष | Farmers Movement: Voices & Struggles", url: vid1 },
  { id: 2, title: "जैविक खेती की आधुनिक तकनीकें | Modern Organic Farming Techniques", url: "https://www.youtube.com/embed/LHx7bWE2gNI" },
  { id: 3, title: "भारतीय किसानों की सफलता की कहानियाँ | Success Stories of Indian Farmers", url: "https://www.youtube.com/embed/mFdjEwD7pMk" }
]

const typeStyles = { 
  Rally: { bg: 'bg-gradient-to-r from-red-600 to-red-500', text: 'text-red-600', glow: 'bg-red-500' }, 
  Meeting: { bg: 'bg-gradient-to-r from-blue-600 to-blue-500', text: 'text-blue-600', glow: 'bg-blue-500' }, 
  Workshop: { bg: 'bg-gradient-to-r from-amber-600 to-amber-500', text: 'text-amber-600', glow: 'bg-amber-500' } 
}

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

  if (!t || !t.activities) return <div className="py-24 text-center text-lg">Loading...</div>
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

  const EventCard = ({ event }) => {
    const style = typeStyles[event.type] || typeStyles.Rally
    return (
      <div className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${style.glow}`}></div>
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <span className={`text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${style.bg}`}>
              {event.type === 'Rally' ? a.typeRally : event.type === 'Meeting' ? a.typeMeeting : a.typeWorkshop}
            </span>
            <span className="text-xs font-mono font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800/40">
              {event.date}
            </span>
          </div>
          <h3 className="text-lg font-black text-base-content group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors leading-tight mb-2">
            {lang === 'hi' ? event.titleHi : event.titleEn}
          </h3>
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {lang === 'hi' ? event.locationHi : event.locationEn}
          </p>
          <p className="text-sm opacity-70 leading-relaxed">{lang === 'hi' ? event.descHi : event.descEn}</p>
        </div>
      </div>
    )
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
    <div className="py-8 max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      
      {/* Structural Branding Header - Glassmorphism Hero */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(8px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 via-base-200/80 to-base-100/80 dark:from-base-900/80 dark:via-base-800/80 dark:to-base-900/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-10 sm:p-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-green-800/10 border border-green-800/20 text-green-800 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            {a.subtitle}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-base-content tracking-tight leading-tight drop-shadow-sm">
            {a.title}
          </h2>
        </div>
      </div>

      {/* Tabs - Frosted Glass Sticky UI */}
      <div className="flex flex-wrap gap-2 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-1.5 rounded-xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-20">
        {tabBtn('events', a.tabEvents)}
        {tabBtn('photos', a.tabPhotos)}
        {tabBtn('videos', a.tabVideos)}
      </div>

      {/* EVENTS TAB */}
      {activeTab === 'events' && (
        <div className="space-y-10">
          <div className="flex justify-end">
            <button onClick={() => setShowForm(!showForm)} className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold rounded-full shadow-lg shadow-green-800/20 hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              {a.formTitle}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleAddEvent} className="bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelTitle} (Hindi)</span></label>
                  <input type="text" value={newEvent.titleHi} onChange={e => setNewEvent(p => ({...p, titleHi: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelTitle} (English) *</span></label>
                  <input type="text" value={newEvent.titleEn} onChange={e => setNewEvent(p => ({...p, titleEn: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelDate} *</span></label>
                  <input type="date" value={newEvent.date} onChange={e => setNewEvent(p => ({...p, date: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelType}</span></label>
                  <select value={newEvent.type} onChange={e => setNewEvent(p => ({...p, type: e.target.value}))} className="select select-bordered select-sm bg-base-100/80 dark:bg-base-900/80 font-bold focus:border-green-800 transition-all">
                    <option value="Rally">{a.typeRally}</option>
                    <option value="Meeting">{a.typeMeeting}</option>
                    <option value="Workshop">{a.typeWorkshop}</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelLocation} (Hindi)</span></label>
                  <input type="text" value={newEvent.locationHi} onChange={e => setNewEvent(p => ({...p, locationHi: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold"><span className="label-text">{a.labelLocation} (English) *</span></label>
                  <input type="text" value={newEvent.locationEn} onChange={e => setNewEvent(p => ({...p, locationEn: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
                </div>
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text">{a.labelDesc} (Hindi)</span></label>
                <textarea value={newEvent.descHi} onChange={e => setNewEvent(p => ({...p, descHi: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100/80 dark:bg-base-900/80 font-medium h-20 focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text">{a.labelDesc} (English) *</span></label>
                <textarea value={newEvent.descEn} onChange={e => setNewEvent(p => ({...p, descEn: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100/80 dark:bg-base-900/80 font-medium h-20 focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold flex-1 rounded-full shadow-lg shadow-green-800/20">{a.btnAdd}</button>
                <button type="button" onClick={() => setShowForm(false)} className="btn btn-sm btn-ghost flex-1 rounded-full">Cancel</button>
              </div>
            </form>
          )}

          {upcomingEvents.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-black text-green-700 dark:text-green-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {a.upcoming}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcomingEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
              </div>
            </div>
          )}

          {pastEvents.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-black text-base-content/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-base-content/30"></span>
                {a.past}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pastEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
              </div>
            </div>
          )}

          {events.length === 0 && (
            <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-lg font-bold text-base-content/60">{a.noEvents}</p>
            </div>
          )}
        </div>
      )}

      {/* PHOTOS TAB */}
      {activeTab === 'photos' && (
        <div className="space-y-8">
          <div className="bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-4 rounded-2xl border border-white/40 dark:border-white/10 shadow-lg flex flex-col sm:flex-row items-end gap-4">
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{a.labelCaption}</span></label>
              <input type="text" value={photoCaption} onChange={e => setPhotoCaption(e.target.value)} placeholder="Add a caption..." className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
            </div>
            <label className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold cursor-pointer whitespace-nowrap rounded-full shadow-lg shadow-green-800/20 hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {a.uploadPhoto}
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
          </div>

          {photos.length === 0 ? (
            <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
              <div className="text-5xl mb-4">🖼️</div>
              <p className="text-lg font-bold text-base-content/60">{a.noPhotos}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div key={photo.id} className={`group relative cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-white/10 hover:-translate-y-2 bg-white/10 ${index === 0 ? 'sm:col-span-2 lg:col-span-2 rounded-[2rem]' : 'rounded-[2rem]'}`} onClick={() => setLightbox(photo)}>
                  <div className={`overflow-hidden ${index === 0 ? 'h-64 sm:h-80' : 'h-64'}`}>
                    <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-white text-sm font-bold leading-snug drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{photo.caption}</span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIDEOS TAB - Upgraded & Modernized */}
      {activeTab === 'videos' && (
        <div className="space-y-8">
          
          {/* Modern Add Video Form */}
          <div className="bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/40 dark:border-white/10 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-400 text-xs font-extrabold uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              {a.formTitle}
            </div>
            <form onSubmit={handleAddVideo} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="form-control w-full">
                <label className="label text-xs font-bold"><span className="label-text">{a.labelVideoTitle}</span></label>
                <input type="text" value={newVideo.title} onChange={e => setNewVideo(p => ({...p, title: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
              </div>
              <div className="form-control w-full">
                <label className="label text-xs font-bold"><span className="label-text">{a.labelVideoUrl}</span></label>
                <input type="url" value={newVideo.url} onChange={e => setNewVideo(p => ({...p, url: e.target.value}))} placeholder="https://youtube.com/watch?v=..." className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
              </div>
              <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold whitespace-nowrap rounded-full shadow-lg shadow-green-800/20 hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center gap-2 h-[42px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                {a.btnAddVideo}
              </button>
            </form>
          </div>

          {videos.length === 0 ? (
            <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
              <div className="text-5xl mb-4">🎬</div>
              <p className="text-lg font-bold text-base-content/60">{a.noVideos}</p>
            </div>
          ) : (
            /* Premium Magazine Video Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div key={video.id} className={`group bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${index === 0 ? 'md:col-span-2' : ''}`}>
                  
                  {/* Video Container with Cinematic Overlay */}
                  <div className="relative overflow-hidden bg-base-200">
                    <iframe 
                      src={video.url} 
                      title={video.title} 
                      className="w-full aspect-video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                    {/* Subtle gradient at the bottom of the video for clean text attachment */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
                    
                    {/* Floating "Play/Record" Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Featured Video</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-gradient-to-b from-transparent to-base-100/20 dark:to-base-900/20">
                    <h4 className="font-black text-base-content text-base leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-3 opacity-50">
                      <span className="text-xs font-bold flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        YouTube
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lightbox - Modernized */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.caption} className="w-full rounded-[2rem] shadow-2xl max-h-[80vh] object-contain" />
            <p className="text-white/80 text-center mt-4 font-bold text-sm">{lightbox.caption}</p>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors border border-white/20">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Activities