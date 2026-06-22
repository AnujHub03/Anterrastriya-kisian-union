import React, { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'

const catColors = { Policy: 'bg-blue-600', Farming: 'bg-green-700', Welfare: 'bg-purple-600', Awareness: 'bg-amber-600' }

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
    if (toast) { const t = setTimeout(() => setToast(''), 4000); return () => clearTimeout(t) }
  }, [toast])

  if (!t || !t.blog) return <div className="py-12 text-center">Loading...</div>
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
    <div className="py-6 max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-xl text-white font-bold text-sm rounded-xl border border-green-600">
            <span>{toast}</span>
          </div>
        </div>
      )}

      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">{b.title}</h2>
        <p className="text-sm font-semibold opacity-75">{b.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 bg-base-200 p-2 rounded-2xl border border-base-300">
            {['All', 'Policy', 'Farming', 'Welfare', 'Awareness'].map(cat => (
              <button key={cat} onClick={() => setFilterCat(cat)}
                className={`btn btn-sm rounded-xl font-bold transition-all ${filterCat === cat ? 'bg-green-800 text-white border-none shadow-md' : 'btn-ghost'}`}>
                {cat === 'All' ? (lang === 'hi' ? 'सभी' : 'All') : catLabel(cat)}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="bg-base-200 border border-base-300 rounded-2xl p-12 text-center font-bold opacity-60">{b.noPosts}</div>
          ) : (
            filtered.map(post => (
              <div key={post.id} className="bg-base-200 border border-base-300 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${catColors[post.category]}`}>
                    {catLabel(post.category)}
                  </span>
                  <span className="text-xs font-mono text-base-content/50">{post.date}</span>
                  <span className="text-xs font-bold text-base-content/50 ml-auto">⏱ {post.readTime} {b.minRead}</span>
                </div>
                <h3 className="text-xl font-black text-base-content group-hover:text-green-700 transition-colors leading-tight mb-1">
                  {lang === 'hi' ? post.titleHi || post.titleEn : post.titleEn}
                </h3>
                <p className="text-xs font-bold text-amber-600 mb-3">✍️ {post.author}</p>

                <div className={`text-sm leading-relaxed opacity-90 overflow-hidden transition-all ${expandedId === post.id ? '' : 'line-clamp-3'}`}>
                  {lang === 'hi' ? post.contentHi || post.contentEn : post.contentEn}
                </div>

                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-base-300/60">
                  <button onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                    className="btn btn-xs bg-green-800 hover:bg-green-700 text-white border-none font-bold rounded-lg">
                    {expandedId === post.id ? b.readLess : b.readMore}
                  </button>
                  <button onClick={() => { if (navigator.share) navigator.share({ title: post.titleEn, text: post.contentEn }) }}
                    className="btn btn-xs btn-ghost font-bold rounded-lg">{b.share}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Write Blog Form */}
        <div className="bg-base-200 border border-base-300 p-6 rounded-3xl shadow-xl space-y-4 lg:sticky lg:top-6">
          <h3 className="text-xl font-black text-green-700 border-b border-base-300 pb-2">{b.formTitle}</h3>
          <form onSubmit={handlePublish} className="space-y-3">
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelTitle} (Hindi)</span></label>
              <input type="text" value={newPost.titleHi} onChange={e => setNewPost(p => ({...p, titleHi: e.target.value}))} className="input input-bordered input-sm bg-base-100 w-full font-medium" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelTitle} (English)*</span></label>
              <input type="text" value={newPost.titleEn} onChange={e => setNewPost(p => ({...p, titleEn: e.target.value}))} className="input input-bordered input-sm bg-base-100 w-full font-medium" required />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelAuthor}</span></label>
              <input type="text" value={newPost.author} onChange={e => setNewPost(p => ({...p, author: e.target.value}))} className="input input-bordered input-sm bg-base-100 w-full font-medium" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelCategory}</span></label>
              <select value={newPost.category} onChange={e => setNewPost(p => ({...p, category: e.target.value}))} className="select select-bordered select-sm bg-base-100 w-full font-bold">
                {['Policy', 'Farming', 'Welfare', 'Awareness'].map(c => (
                  <option key={c} value={c}>{catLabel(c)}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelContent} (Hindi)</span></label>
              <textarea value={newPost.contentHi} onChange={e => setNewPost(p => ({...p, contentHi: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100 h-20 font-medium w-full leading-relaxed" />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text">{b.labelContent} (English)*</span></label>
              <textarea value={newPost.contentEn} onChange={e => setNewPost(p => ({...p, contentEn: e.target.value}))} className="textarea textarea-bordered textarea-sm bg-base-100 h-20 font-medium w-full leading-relaxed" required />
            </div>
            <button type="submit" className="btn btn-sm bg-green-800 hover:bg-green-700 text-white border-none w-full font-black shadow">{b.btnPublish}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Blog
