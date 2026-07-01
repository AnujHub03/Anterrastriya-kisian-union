import React, { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

const catColors = { 
  Policy: { bg: 'bg-gradient-to-r from-blue-600 to-blue-500', glow: 'bg-blue-500' }, 
  Farming: { bg: 'bg-gradient-to-r from-green-700 to-green-500', glow: 'bg-green-500' }, 
  Welfare: { bg: 'bg-gradient-to-r from-purple-600 to-purple-500', glow: 'bg-purple-500' }, 
  Awareness: { bg: 'bg-gradient-to-r from-amber-600 to-amber-500', glow: 'bg-amber-500' } 
}

const initialPosts = [
  {
    id: 1,
    titleHi: "MSP की लड़ाई: किसानों का संघर्ष और सरकार की जिम्मेदारी",
    titleEn: "The MSP Battle: Farmers' Struggle and Government Responsibility",
    author: "डॉ. रमेश शर्मा / Dr. Ramesh Sharma",
    category: "Policy",
    date: "2026-06-10",
    contentHi: "न्यूनतम समर्थन मूल्य (MSP) किसानों के लिए जीवन-रेखा है। पिछले दशक में MSP और बाजार मूल्य के बीच की खाई लगातार बढ़ती जा रही है। सरकार को तत्काल एक कानूनी MSP गारंटी प्रणाली स्थापित करनी चाहिए जो किसानों को उनकी लागत पर उचित लाभ दे। अंतर्राष्ट्रीय किसान यूनियन मांग करती है कि C2+50% फॉर्मूले के आधार पर MSP तय किया जाए। यह सिर्फ आर्थिक मांग नहीं है, यह किसानों की गरिमा और अस्तित्व की लड़ाई है। हमें मिलकर इस मुद्दे पर एकजुट होना होगा और सरकार पर दबाव बनाना होगा।",
    contentEn: "The Minimum Support Price (MSP) is the lifeline for farmers. Over the past decade, the gap between MSP and market price has been growing continuously. The government must immediately establish a legal MSP guarantee system that provides farmers fair profit over their costs. The International Farmers Union demands that MSP be fixed on the basis of the C2+50% formula. This is not just an economic demand — it is a fight for the dignity and survival of farmers worldwide.",
    readTime: 3
  },
  {
    id: 2,
    titleHi: "जैविक खेती: भविष्य का रास्ता",
    titleEn: "Organic Farming: The Path to the Future",
    author: "सुनीता देवी / Sunita Devi",
    category: "Farming",
    date: "2026-06-05",
    contentHi: "रासायनिक खाद और कीटनाशकों के अत्यधिक उपयोग से भूमि की उर्वरता लगातार घट रही है। जैविक खेती न केवल स्वास्थ्यवर्धक उत्पाद देती है बल्कि दीर्घकालिक रूप से लागत भी कम करती है। अंतर्राष्ट्रीय किसान यूनियन जैविक खेती को बढ़ावा देने के लिए किसानों को प्रशिक्षण और बाजार से जोड़ने का काम कर रही है। कम्पोस्ट खाद, वर्मी कम्पोस्ट और जैव कीटनाशकों का उपयोग करके किसान अपनी लागत को 40% तक कम कर सकते हैं।",
    contentEn: "Excessive use of chemical fertilizers and pesticides is continuously degrading soil fertility. Organic farming not only provides healthier products but also reduces costs in the long run. The International Farmers Union is working to promote organic farming by training farmers and connecting them to markets. Using compost, vermicompost, and bio-pesticides, farmers can reduce their costs by up to 40%.",
    readTime: 4
  },
  {
    id: 3,
    titleHi: "महिला किसान: अनदेखी शक्ति",
    titleEn: "Women Farmers: The Unseen Force",
    author: "प्रो. मीना पाठक / Prof. Meena Pathak",
    category: "Welfare",
    date: "2026-05-28",
    contentHi: "भारत में 60% से अधिक कृषि श्रम महिलाओं द्वारा किया जाता है, फिर भी उन्हें भूमि अधिकार, ऋण सुविधाएं और बाजार तक पहुंच में भेदभाव का सामना करना पड़ता है। अंतर्राष्ट्रीय किसान यूनियन महिला किसानों के अधिकारों के लिए प्रतिबद्ध है और महिला विंग के माध्यम से उन्हें संगठित और सशक्त बनाने का काम कर रही है।",
    contentEn: "Over 60% of agricultural labor in India is done by women, yet they face discrimination in land rights, credit facilities and market access. The International Farmers Union is committed to the rights of women farmers and through its Women Wing is organizing and empowering them.",
    readTime: 5
  }
]

const Blog = () => {
  const { lang, t } = useLanguage()
  const [posts, setPosts] = useState(initialPosts)
  const [expandedId, setExpandedId] = useState(null)
  const [toast, setToast] = useState('')
  const [filterCat, setFilterCat] = useState('All')
  const [newPost, setNewPost] = useState({ titleHi: '', titleEn: '', author: '', category: 'Policy', contentHi: '', contentEn: '' })

  useEffect(() => {
    if (toast) { const timer = setTimeout(() => setToast(''), 4000); return () => clearTimeout(timer) }
  }, [toast])

  if (!t || !t.blog) return <div className="py-24 text-center text-lg">Loading...</div>
  const b = t.blog

  const catLabel = (cat) => ({ Policy: b.catPolicy, Farming: b.catFarming, Welfare: b.catWelfare, Awareness: b.catAwareness }[cat] || cat)

  const filtered = filterCat === 'All' ? posts : posts.filter(p => p.category === filterCat)

  const handlePublish = (e) => {
    e.preventDefault()
    if (!newPost.titleEn || !newPost.contentEn) return
    setPosts(prev => [{
      ...newPost,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(newPost.contentEn.split(' ').length / 200) || 1
    }, ...prev])
    setNewPost({ titleHi: '', titleEn: '', author: '', category: 'Policy', contentHi: '', contentEn: '' })
    setToast(b.toastAdded)
  }

  return (
    <div className="py-8 max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-2xl text-white font-bold text-sm rounded-2xl border border-green-600 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{toast}</span>
          </div>
        </div>
      )}

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Blog Posts Section */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Category Filter - Frosted Glass Sticky UI */}
          <div className="flex flex-wrap  gap-2 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-1.5 rounded-xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-20">
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

          {filtered.length === 0 ? (
            <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-lg font-bold text-base-content/60">{b.noPosts}</p>
            </div>
          ) : (
            filtered.map(post => (
              <div key={post.id} className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                
                {/* Subtle Category Glow Effect */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${catColors[post.category]?.glow || 'bg-base-300'}`}></div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${catColors[post.category]?.bg || 'bg-base-600'}`}>
                      {catLabel(post.category)}
                    </span>
                    <span className="text-xs font-mono font-bold text-base-content/40 bg-base-100/50 dark:bg-base-900/50 px-3 py-1.5 rounded-full border border-base-300/30">
                      {post.date}
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

                  <div className={`text-sm leading-relaxed text-base-content/80 overflow-hidden transition-all duration-500 ${expandedId === post.id ? '' : 'line-clamp-3'}`}>
                    {lang === 'hi' ? post.contentHi || post.contentEn : post.contentEn}
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-base-300/30">
                    <button onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                      className="btn btn-xs bg-green-800 hover:bg-green-700 text-white border-none font-bold rounded-full shadow-lg shadow-green-800/20 hover:scale-105 active:scale-95 transition-transform duration-300">
                      {expandedId === post.id ? b.readLess : b.readMore}
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

        {/* Write Blog Form - Sidebar */}
        <div className="bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 p-6 sm:p-8 rounded-[2rem] shadow-xl lg:sticky lg:top-20 space-y-6">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400 text-xs font-extrabold uppercase tracking-widest border-b border-base-300/40 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            {b.formTitle}
          </div>
          
          <form onSubmit={handlePublish} className="space-y-4">
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelTitle} (Hindi)</span></label>
              <input type="text" value={newPost.titleHi} onChange={e => setNewPost(p => ({...p, titleHi: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 w-full font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelTitle} (English) *</span></label>
              <input type="text" value={newPost.titleEn} onChange={e => setNewPost(p => ({...p, titleEn: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 w-full font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text">{b.labelAuthor}</span></label>
                <input type="text" value={newPost.author} onChange={e => setNewPost(p => ({...p, author: e.target.value}))} className="input input-bordered input-sm bg-base-100/80 dark:bg-base-900/80 w-full font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text">{b.labelCategory}</span></label>
                <select value={newPost.category} onChange={e => setNewPost(p => ({...p, category: e.target.value}))} className="select select-bordered select-sm bg-base-100/80 dark:bg-base-900/80 w-full font-bold focus:border-green-800 transition-all">
                  {['Policy', 'Farming', 'Welfare', 'Awareness'].map(c => (
                    <option key={c} value={c}>{catLabel(c)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelContent} (Hindi)</span></label>
              <textarea value={newPost.contentHi} onChange={e => setNewPost(p => ({...p, contentHi: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100/80 dark:bg-base-900/80 h-24 font-medium w-full leading-relaxed focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelContent} (English) *</span></label>
              <textarea value={newPost.contentEn} onChange={e => setNewPost(p => ({...p, contentEn: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100/80 dark:bg-base-900/80 h-24 font-medium w-full leading-relaxed focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
            </div>
            <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none w-full font-black rounded-full shadow-lg shadow-green-800/20 hover:scale-[1.02] active:scale-95 transition-transform duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              {b.btnPublish}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Blog