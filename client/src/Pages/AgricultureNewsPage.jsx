import React, { useState } from 'react';
import { 
  ExternalLink, 
  Search, 
  TrendingUp, 
  Sprout, 
  CloudSun, 
  BookOpen, 
  Award, 
  Newspaper,
  Calendar,
  CheckCircle2
} from 'lucide-react';

// Sample curated Indian Agriculture news feed linked to major covering channels
const INITIAL_NEWS_DATA = [
  {
    id: 1,
    title: "Centre Releases ₹2,100 Crore Subsidy Support for Nano-DAP and Bio-Fertilizers",
    category: "Schemes & Policy",
    channel: "DD Kisan",
    channelLogo: "https://prasarbharati.gov.in/wp-content/uploads/2021/05/dd-kisan-logo.png",
    sourceUrl: "https://prasarbharati.gov.in/dd-kisan/",
    publishedAt: "2 Hours ago",
    summary: "The Ministry of Agriculture has approved additional outlay to promote organic farming inputs and nano-fertilizer adoption among smallholder farmers across North India.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600",
    isFeatured: true,
    tags: ["Fertilizer", "Subsidy", "PM-PRANAM"]
  },
  {
    id: 2,
    title: "Monsoon Update: IMD Predicts Normal Rainfall Across Central & Western Belts",
    category: "Weather & Monsoon",
    channel: "The Hindu - Agriculture",
    channelLogo: "https://www.thehindu.com/favicon.ico",
    sourceUrl: "https://www.thehindu.com/sci-tech/agriculture/",
    publishedAt: "4 Hours ago",
    summary: "Agricultural meteorologists advise Kharif paddy and soybean cultivators to prepare for timely sowing as rainfall distribution remains optimal across Maharashtra & MP.",
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80&w=600",
    isFeatured: false,
    tags: ["IMD", "Kharif", "Monsoon 2026"]
  },
  {
    id: 3,
    title: "AgriTech Startups Introduce Solar-Powered Smart Drones for Precision Spraying",
    category: "AgTech & Innovation",
    channel: "Krishi Jagran",
    channelLogo: "https://krishijagran.com/favicon.ico",
    sourceUrl: "https://krishijagran.com/",
    publishedAt: "6 Hours ago",
    summary: "New DGCA-approved agricultural drones promise up to 40% reduction in pesticide usage through AI-driven target spraying technology.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600",
    isFeatured: false,
    tags: ["Drones", "AgriTech", "Precision Farming"]
  },
  {
    id: 4,
    title: "Wheat Mandi Prices Surge Above MSP in Punjab and Haryana Markets",
    category: "Crop & Market",
    channel: "Agriwatch",
    channelLogo: "https://www.agriwatch.com/favicon.ico",
    sourceUrl: "https://www.agriwatch.com/",
    publishedAt: "Today, 10:30 AM",
    summary: "Strong demand from flour millers and tight private stocks lead to a 5-7% gain in spot market prices for quality durum wheat varieties.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600",
    isFeatured: false,
    tags: ["Mandi Rates", "Wheat", "MSP"]
  },
  {
    id: 5,
    title: "Regenerative Farming Restores Soil Health in Rainfed Regions of Karnataka",
    category: "Sustainability",
    channel: "Down To Earth",
    channelLogo: "https://www.downtoearth.org.in/favicon.ico",
    sourceUrl: "https://www.downtoearth.org.in/agriculture",
    publishedAt: "Yesterday",
    summary: "Community-led soil conservation projects demonstrate a 25% increase in groundwater retention and improved organic carbon levels.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    isFeatured: false,
    tags: ["Organic", "Soil Health", "Conservation"]
  }
];

const CATEGORIES = ["All", "Crop & Market", "Schemes & Policy", "AgTech & Innovation", "Weather & Monsoon", "Sustainability"];

export default function AgricultureNewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  const filteredNews = INITIAL_NEWS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = INITIAL_NEWS_DATA.find(item => item.isFeatured) || INITIAL_NEWS_DATA[0];

  return (
    <div className="min-h-screen bg-emerald-50/50 font-sans text-slate-800">
      
      {/* 1. TOP ANNOUNCEMENT / MANDI TICKER */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-amber-500 text-emerald-950 font-bold px-2 py-0.5 rounded text-xs uppercase tracking-wider">
              Mandi Ticker
            </span>
            <p className="truncate">
              🌾 Wheat (Punjab): <span className="text-amber-300 font-semibold">₹2,450/qtl</span> (+2.1%) | 
              🌽 Maize (Bihar): <span className="text-amber-300 font-semibold">₹2,180/qtl</span> | 
              🌱 Mustard (Rajasthan): <span className="text-amber-300 font-semibold">₹5,600/qtl</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-emerald-300 text-xs shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Verified Indian Agri News Feeds
          </div>
        </div>
      </div>

      {/* 2. HEADER BAR */}
      <header className="sticky top-0 z-30 bg-emerald-800/95 backdrop-blur-md text-white shadow-md border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-600 rounded-xl shadow-inner border border-emerald-400/30">
              <Sprout className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-50">
                KrishiSamachar <span className="text-amber-400 font-light">India</span>
              </h1>
              <p className="text-xs text-emerald-200">National Agricultural Bulletin & Media Hub</p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md min-w-[260px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crops, schemes, MSP, tech..."
              className="w-full pl-9 pr-4 py-2 bg-emerald-900/60 border border-emerald-600 rounded-lg text-sm text-white placeholder-emerald-300/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
      </header>

      {/* 3. HERO / FEATURED ARTICLE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!searchQuery && selectedCategory === "All" && featuredArticle && (
          <section className="mb-10">
            <h2 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" /> Top Headline Today
            </h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-emerald-100 grid md:grid-cols-12 hover:shadow-xl transition-shadow">
              <div className="md:col-span-7 relative min-h-[280px] md:min-h-[380px]">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-700/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-emerald-50/30 to-emerald-100/40">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 mb-2">
                    <span className="font-bold text-slate-900">Coverage:</span>
                    <span className="px-2 py-0.5 bg-emerald-200/60 text-emerald-900 rounded font-semibold">
                      {featuredArticle.channel}
                    </span>
                    <span>•</span>
                    <span className="text-slate-500">{featuredArticle.publishedAt}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-200/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredArticle.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] bg-white border border-emerald-200 text-emerald-800 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={featuredArticle.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-200/70 hover:bg-emerald-300 px-3 py-2 rounded-lg transition-colors shrink-0"
                  >
                    Read on {featuredArticle.channel}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. CATEGORY FILTERS */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-emerald-700" /> Latest Agriculture Updates
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredNews.length} articles
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                    : "bg-white text-slate-600 hover:bg-emerald-100/60 border border-emerald-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* 5. NEWS GRID */}
        {filteredNews.length > 0 ? (
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <article 
                key={news.id} 
                className="bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <span className="absolute top-3 left-3 bg-emerald-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {news.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {news.channel}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {news.publishedAt}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed mb-4">
                      {news.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <a
                    href={news.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-700 hover:text-white border border-emerald-200 py-2 px-3 rounded-lg transition-all"
                  >
                    View Story on {news.channel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="bg-white rounded-xl border border-emerald-100 p-12 text-center my-8">
            <Sprout className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No News Articles Found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search terms or switching categories.
            </p>
          </div>
        )}

        {/* 6. PARTNER CHANNELS FOOTER BAR */}
        <section className="mt-16 bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
          <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-4 text-center">
            Broadcasting Channels & News Sources Covered
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-80 text-xs font-semibold text-slate-600">
            <a href="https://prasarbharati.gov.in/dd-kisan/" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">📺 DD Kisan</a>
            <a href="https://krishijagran.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">📰 Krishi Jagran</a>
            <a href="https://www.thehindu.com/sci-tech/agriculture/" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">🗞️ The Hindu Agri</a>
            <a href="https://www.agriwatch.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">📊 Agriwatch Market</a>
            <a href="https://www.downtoearth.org.in/agriculture" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">🌍 Down To Earth</a>
          </div>
        </section>
      </main>
    </div>
  );
}