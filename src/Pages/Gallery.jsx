import React, { useState } from 'react'
import { useLanguage } from './LanguageContext';
import img1 from "../../public/Gallery/img1.jpg";
import img2 from "../../public/Gallery/img2.jpg";
import img3 from "../../public/Gallery/img3.jpg";
import img4 from "../../public/Gallery/img4.jpg";
import img5 from "../../public/Gallery/img5.jpg";
import img6 from "../../public/Gallery/img6.jpg";
import img7 from "../../public/Gallery/img7.jpg";
import img8 from "../../public/Gallery/img8.jpg";
import img9 from "../../public/Gallery/img9.jpg";
import img10 from "../../public/Gallery/img10.jpg";
import img11 from "../../public/Gallery/img11.jpg";
import img12 from "../../public/Gallery/img12.jpg";
import img13 from "../../public/Gallery/img13.jpg";
import img14 from "../../public/Gallery/img14.jpg";
import img15 from "../../public/Gallery/img15.jpg";


const initialPhotos = [
  { id: 1, url: img1, caption: "राजा चरत प्रताप सिंह जी , इंटरनेशनल चेयरमैन | Raja Chatar Pratap Singh ji , International Chairperson" },
  { id: 2, url: img2, caption: "जैविक खेती प्रशिक्षण | Organic Farming Training" },
  { id: 3, url: img3, caption: "नवनीत कुमार ,संस्थापक सदस्य | Naveen Kumar, Founding Member" },
  { id: 4, url: img4, caption: "संजीव कुमार , संस्थापक सदस्य | Sanjeev Kumar, Founding Member" },
  { id: 5, url: img5, caption: "प्रदीप कुमार , संस्थापक सदस्य | Pradeep Kumar, Founding Member" },
  { id: 6, url: img6, caption: "रवि पंवार , संस्थापक सदस्य | Ravi Pande, Founding Member" },
  { id: 7, url: img7, caption: "संजीव दांगी , संस्थापक सदस्य | Sanjeev Dangi, Founding Member" },
  { id: 8, url: img8, caption: "मुकेश सिंह बिष्ट , संस्थापक सदस्य | Mukesha Singh Bist, Founding Member" },
  { id: 9, url: img9, caption: "अशोक कुमार , संस्थापक सदस्य | Ashok Kumar, Founding Member" },
  { id: 10, url: img10, caption: "राजेंद्र सिंह पंवार , संस्थापक सदस्य | Rajendra Singh Pande, Founding Member" },
  { id: 11, url: img11, caption: "विनोद तोमर , संस्थापक सदस्य | Vinod Tomar, Founding Member" },
  { id: 12, url: img12, caption: "दिलवर सिंह रावत , संस्थापक सदस्य | Dilwar Singh Raut, Founding Member" },
  { id: 13, url: img13, caption: "सुरेश पाल , संस्थापक सदस्य | Suresh Pal, Founding Member" },
  { id: 14, url: img14, caption: "दिलवर सिंह रावत , संस्थापक सदस्य | Dilwar Singh Raut, Founding Member" },
  { id: 15, url: img15, caption: "सुरेश पाल , संस्थापक सदस्य | Suresh Pal, Founding Member" },
]

const initialVideos = [
  { id: 1, title: "किसान सम्मेलन 2025 मुख्य भाषण | IFU Conference 2025 Keynote", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "जैविक खेती प्रशिक्षण | Organic Farming Training Session", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, title: "MSP गारंटी रैली — दिल्ली | MSP Guarantee Rally — Delhi", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
]

const Gallery = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('photos')
  const [photos, setPhotos] = useState(initialPhotos)
  const [videos, setVideos] = useState(initialVideos)
  const [lightbox, setLightbox] = useState(null)
  const [caption, setCaption] = useState('')
  const [newVideo, setNewVideo] = useState({ title: '', url: '' })

  if (!t || !t.gallery) return <div className="py-12 text-center">Loading...</div>
  const g = t.gallery

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPhotos(prev => [{ id: Date.now(), url: URL.createObjectURL(file), caption: caption || file.name }, ...prev])
      setCaption('')
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

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">{g.title}</h2>
        <p className="text-sm font-semibold opacity-75">{g.subtitle}</p>
      </div>

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

      {/* PHOTO GALLERY */}
      {activeTab === 'photos' && (
        <div className="space-y-6">
          {/* Upload Section */}
          <div className="bg-base-200 border border-base-300 rounded-2xl p-5 flex flex-col sm:flex-row items-end gap-4">
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{g.labelCaption}</span></label>
              <input type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder="Caption for photo..." className="input input-bordered input-sm bg-base-100 font-medium w-full" />
            </div>
            <label className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold cursor-pointer whitespace-nowrap">
              {g.uploadPhoto}
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
          </div>

          {photos.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{g.noPhotos}</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map(photo => (
                <div key={photo.id} className="group relative cursor-pointer rounded-2xl overflow-hidden border border-base-300 shadow-md hover:shadow-xl transition-all" onClick={() => setLightbox(photo)}>
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
          )}
        </div>
      )}

      {/* VIDEO GALLERY */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          <form onSubmit={handleAddVideo} className="bg-base-200 border border-base-300 rounded-2xl p-5 flex flex-col sm:flex-row items-end gap-4">
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{g.labelVideoTitle}</span></label>
              <input type="text" value={newVideo.title} onChange={e => setNewVideo(p => ({...p, title: e.target.value}))} className="input input-bordered input-sm bg-base-100 font-medium w-full" required />
            </div>
            <div className="form-control flex-1 w-full">
              <label className="label text-xs font-bold"><span className="label-text">{g.labelVideoUrl}</span></label>
              <input type="url" value={newVideo.url} onChange={e => setNewVideo(p => ({...p, url: e.target.value}))} placeholder="https://youtube.com/watch?v=..." className="input input-bordered input-sm bg-base-100 font-medium w-full" required />
            </div>
            <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none font-bold whitespace-nowrap">{g.btnAdd}</button>
          </form>

          {videos.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{g.noVideos}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {videos.map(video => (
                <div key={video.id} className="bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <div className="aspect-video">
                    <iframe src={video.url} title={video.title} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="p-4 border-t border-base-300/60">
                    <p className="font-black text-sm text-base-content leading-snug">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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