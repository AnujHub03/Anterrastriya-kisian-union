import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

const API_BASE = 'http://localhost:5000'

const catColors = { 
  Policy: { bg: 'bg-gradient-to-r from-blue-600 to-blue-500', glow: 'bg-blue-500' }, 
  Farming: { bg: 'bg-gradient-to-r from-green-700 to-green-500', glow: 'bg-green-500' }, 
  Welfare: { bg: 'bg-gradient-to-r from-purple-600 to-purple-500', glow: 'bg-purple-500' }, 
  Awareness: { bg: 'bg-gradient-to-r from-amber-600 to-amber-500', glow: 'bg-amber-500' } 
}

 /*const static_post = {
    id: 1,
    titleHi: "MSP की लड़ाई: किसानों का संघर्ष और सरकार की जिम्मेदारी",
    titleEn: "The MSP Battle: Farmers' Struggle and Government Responsibility",
    author: "डॉ. रमेश शर्मा / Dr. Ramesh Sharma",
    category: "Policy",
    date: "2026-06-10",
    contentHi: "न्यूनतम समर्थन मूल्य (MSP) किसानों के लिए जीवन-रेखा है। पिछले दशक में MSP और बाजार मूल्य के बीच की खाई लगातार बढ़ती जा रही है। सरकार को तत्काल एक कानूनी MSP गारंटी प्रणाली स्थापित करनी चाहिए जो किसानों को उनकी लागत पर उचित लाभ दे। अंतर्राष्ट्रीय किसान यूनियन मांग करती है कि C2+50% फॉर्मूले के आधार पर MSP तय किया जाए। यह सिर्फ आर्थिक मांग नहीं है, यह किसानों की गरिमा और अस्तित्व की लड़ाई है। हमें मिलकर इस मुद्दे पर एकजुट होना होगा और सरकार पर दबाव बनाना होगा।",
    contentEn: "The Minimum Support Price (MSP) is the lifeline for farmers. Over the past decade, the gap between MSP and market price has been growing continuously. The government must immediately establish a legal MSP guarantee system that provides farmers fair profit over their costs. The International Farmers Union demands that MSP be fixed on the basis of the C2+50% formula. This is not just an economic demand — it is a fight for the dignity and survival of farmers worldwide.",
    readTime: 3
  }*/
  

const Blog = () => {
  const { lang, t } = useLanguage()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)
  const [filterCat, setFilterCat] = useState('All')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blog`)
        if (!res.ok) throw new Error('Failed to load posts')
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (!t || !t.blog) return <div className="py-24 text-center text-lg">Loading...</div>
  const b = t.blog

  const catLabel = (cat) => ({ Policy: b.catPolicy, Farming: b.catFarming, Welfare: b.catWelfare, Awareness: b.catAwareness }[cat] || cat)

  const filtered = filterCat === 'All' ? posts : posts.filter(p => p.category === filterCat)

  return (
    <div className="py-8 max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">

      {/* Structural Branding Header - Glassmorphism Hero */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(8px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 via-base-200/80 to-base-100/80 dark:from-base-900/80 dark:via-base-800/80 dark:to-base-900/80 backdrop-blur-sm"></div>

        <div className="relative z-10 p-10 sm:p-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-green-800/10 border border-green-800/20 text-green-800 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            {b.subtitle}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-base-content tracking-tight leading-tight drop-shadow-sm">
            {b.title}
          </h2>
        </div>
      </div>

      {/* Category Filter - Frosted Glass Sticky UI */}
      <div className="flex flex-wrap gap-2 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-1.5 rounded-xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-20">
        {['All', 'Policy', 'Farming', 'Welfare', 'Awareness'].map(cat => (
          <button key={cat} onClick={() => setFilterCat(cat)}
            className={`btn btn-sm rounded-lg font-bold p-2 transition-all duration-300 flex-1 sm:flex-none border-none ${
              filterCat === cat 
                ? 'bg-green-800 text-white shadow-lg shadow-green-800/25' 
                : 'bg-transparent hover:bg-base-200/50 text-base-content/70'
            }`}>
            {cat === 'All' ? (lang === 'hi' ? 'सभी' : 'All') : catLabel(cat)}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="max-w-3xl mx-auto space-y-8">
        {loading ? (
          <div className="text-center py-16 text-sm opacity-60">Loading posts…</div>
        ) : filtered.length === 0 ? (
          <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
            <div className="text-5xl mb-4">📝</div>
            <p className="text-lg font-bold text-base-content/60">{b.noPosts}</p>
          </div>
        ) : (
          filtered.map(post => (
            <div key={post._id} className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">

              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${catColors[post.category]?.glow || 'bg-base-300'}`}></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${catColors[post.category]?.bg || 'bg-base-600'}`}>
                    {catLabel(post.category)}
                  </span>
                  <span className="text-xs font-mono font-bold text-base-content/40 bg-base-100/50 dark:bg-base-900/50 px-3 py-1.5 rounded-full border border-base-300/30">
                    {new Date(post.createdAt).toISOString().split('T')[0]}
                  </span>
                  <span className="text-xs font-bold text-base-content/40 ml-auto flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {post.readTime} {b.minRead}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-base-content group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors leading-tight mb-2">
                  {lang === 'hi' ? post.titleHi || post.titleEn : post.titleEn}
                </h3>

                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  ✍️ {post.author}
                </p>

                <div className={`text-sm leading-relaxed text-base-content/80 overflow-hidden transition-all duration-500 ${expandedId === post._id ? '' : 'line-clamp-3'}`}>
                  {lang === 'hi' ? post.contentHi || post.contentEn : post.contentEn}
                </div>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-base-300/30">
                  <button onClick={() => setExpandedId(expandedId === post._id ? null : post._id)}
                    className="btn btn-xs bg-green-800 hover:bg-green-700 text-white border-none font-bold rounded-full shadow-lg shadow-green-800/20 hover:scale-105 active:scale-95 transition-transform duration-300">
                    {expandedId === post._id ? b.readLess : b.readMore}
                  </button>
                  <button onClick={() => { if (navigator.share) navigator.share({ title: post.titleEn, text: post.contentEn }) }}
                    className="btn btn-xs btn-ghost font-bold rounded-full hover:bg-base-200/50 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    {b.share}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Blog