import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import img1 from "../../public/Gallery/img1.jpg";
import img3 from "../../public/Gallery/img3.jpg";
import img4 from "../../public/Gallery/img4.jpg";
import img5 from "../../public/Gallery/img5.jpg";
import img6 from "../../public/Gallery/img6.jpg";
import img7 from "../../public/Gallery/img7.jpg";
import img8 from "../../public/Gallery/img8.jpg";
import img10 from "../../public/Gallery/img10.jpg";
import img11 from "../../public/Gallery/img11.jpg";
import img12 from "../../public/Gallery/img12.jpg";
import img13 from "../../public/Gallery/img13.jpg";
import img14 from "../../public/Gallery/img14.jpg";
import img15 from "../../public/Gallery/img15.jpg";
import img20 from "../../public/Gallery/img20.jpeg";

const LeadershipDirectory = () => {
  const { t } = useLanguage()
  const [activeTier, setActiveTier] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // 1. Data Store Arrays representing organizational hierarchy tiers with images
  const [leaders] = useState([
    {
      id: 1,
      name: "Dr. Ramesh Kumar Shrivastav",
      tier: "State",
      region: "Uttar Pradesh",
      designation: "State Executive Director",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
      email: "r.shrivastav@agriorg.org",
      phone: "+91 94150 11223",
      joinedDate: "January 2024",
      responsibilities: [
        "Inter-departmental coordination with State ministries",
        "Allocation of quarterly subsidy pipelines across development sectors",
        "Policy deployment validation for organic farming frameworks"
      ]
    },
    {
      id: 2,
      name: "Smt. Sunita Deshmukh",
      tier: "District",
      region: "Nashik District",
      designation: "District Lead Coordinator",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      email: "s.deshmukh@agriorg.org",
      phone: "+91 98220 44556",
      joinedDate: "May 2024",
      responsibilities: [
        "Management of soil-health diagnostic field test deployments",
        "Resolving local crop insurance pricing dispute escalations",
        "Organizing bi-weekly cooperative training workshops"
      ]
    },
    {
      id: 3,
      name: "Anuj Hooda",
      tier: "City",
      region: "Rohtak City",
      designation: "Urban Agriculture Superintendent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      email: "a.hooda@agriorg.org",
      phone: "+91 90123 45678",
      joinedDate: "March    ",
      responsibilities: [
        "Supervising urban vertical farming rooftop initiatives",
        "Managing municipal direct-to-consumer micro market setups",
        "Mitigating industrial runoff concerns in peri-urban farm boundaries"
      ]
    },
    {
      id: 4,
      name: "राजा चरत प्रताप सिंह जी | Raja Chatar Pratap Singh ji",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img1,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 5,
      name: "नवनीत कुमार  |  Navnet Kumar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img3,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 6,
      name: "संजीव कुमार | Sanjeev Kumar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img4,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 7,
      name: "प्रदीप कुमार | Pradeep Kumar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img6,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 8,
      name: "अशोक कुमार  | Ashok Kumar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img11,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 9,
      name: "राजेंद्र सिंह पंवार| Rajendra Singh Panwar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img14,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 10,
      name: "सुरेश पाल  | Suresh Pal",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img15,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 11,
      name: "नीरज कुमार  | Neeraj Kumar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img20,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 12,
      name: "राजेंद्र सिंह पंवार  | Rajendra Singh Pawar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img12,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 13,
      name: "विनोद तोमर  | Vinod Tomar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img13,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 14,
      name: "मुकेश सिंह बिष्ट  | Mukesh Singh Bisht",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img10,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 15,
      name: "संजीव डांगी  | Sanjeev Dangi",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img8,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
    {
      id: 16,
      name: "रवि पंवार | Ravi Pawar",
      tier: "BoardMember",
      region: "National Headquarters",
      designation: "संस्थापक सदस्य | Founding Member",
      avatar: img7,
      email: "r.singh@agriorg.org",
      phone: "+91 98110 99887",
      joinedDate: "2026",
      responsibilities: [
        "Strategic governance and international donor relations oversight",
        "Approval of annual agricultural infrastructure expenditure",
        "Directing sustainable technology adoption roadmap for 2030"
      ]
    },
  ])

  // Safeguard structural rendering boundary
  if (!t || !t.leadership) {
    return <div className="py-24 text-center text-lg">Initializing Directory Framework...</div>
  }

  // 2. Real-time Search and Filter Pipeline
  const filteredLeaders = leaders.filter(leader => {
    const matchesTier = activeTier === 'All' || leader.tier === activeTier
    const matchesSearch = 
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.designation.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTier && matchesSearch
  })

  // Helper for tier colors
  const getTierStyles = (tier) => {
    switch(tier) {
      case 'BoardMember': return { text: 'text-primary', bg: 'bg-primary/10 border-primary/20', badge: 'bg-gradient-to-r from-primary to-primary/80', stripe: 'bg-gradient-to-b from-primary via-primary/80 to-primary', ring: 'ring-primary' }
      case 'InternationalHead':
      case 'NationalHead':
      case 'State': return { text: 'text-accent', bg: 'bg-accent/10 border-accent/20', badge: 'bg-gradient-to-r from-accent to-accent/80', stripe: 'bg-gradient-to-b from-accent via-accent/80 to-accent', ring: 'ring-accent' }
      case 'District': return { text: 'text-secondary', bg: 'bg-secondary/10 border-secondary/20', badge: 'bg-gradient-to-r from-secondary to-secondary/80', stripe: 'bg-gradient-to-b from-secondary via-secondary/80 to-secondary', ring: 'ring-secondary' }
      default: return { text: 'text-base-content', bg: 'bg-neutral/10 border-neutral/20', badge: 'bg-gradient-to-r from-neutral to-neutral/80', stripe: 'bg-gradient-to-b from-neutral via-neutral/80 to-neutral', ring: 'ring-neutral' }
    }
  }

  return (
    <div className="py-8 max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      
      {/* Structural Branding Header - Glassmorphism Modernized */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(8px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 via-base-200/80 to-base-100/80 dark:from-base-900/80 dark:via-base-800/80 dark:to-base-900/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 p-10 sm:p-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {t.leadership.subtitle}
          </div>
          <h2 className="text-4xl text-slate-100 sm:text-5xl font-black tracking-tight leading-tight drop-shadow-sm">
            {t.leadership.title}
          </h2>
        </div>
      </div>

      {/* Control Panel - Frosted Glass UI */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl p-3 rounded-2xl border border-white/40 dark:border-white/10 shadow-lg sticky top-4 z-20">
        
        {/* Modern Pill Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-base-100/50 dark:bg-base-900/50 rounded-xl">
          {['All','BoardMember' , 'NationalHead', 'InternationalHead', 'State', 'District', 'City'].map((tier) => (
            <button 
              key={tier} 
              onClick={() => setActiveTier(tier)} 
              className={`btn btn-sm rounded-lg px-5 font-bold transition-all duration-300 border-none ${
                activeTier === tier 
                  ? (tier === 'All' ? 'bg-primary text-primary-content shadow-lg shadow-primary/25' : tier === 'BoardMember' || tier === 'NationalHead' || tier === 'InternationalHead' ? 'bg-primary text-primary-content shadow-lg shadow-primary/25' : tier === 'State' ? 'bg-accent text-accent-content shadow-lg shadow-accent/25' : tier === 'District' ? 'bg-secondary text-secondary-content shadow-lg shadow-secondary/25' : 'bg-neutral text-neutral-content shadow-lg shadow-neutral/25')
                  : 'bg-transparent hover:bg-base-200/50 text-base-content/70'
              }`}
            >
              {t.leadership[`filter${tier}`] || tier}
            </button>
          ))}
        </div>

        {/* Sleek Search Input */}
        <div className="w-52 md:w-36 relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.leadership.searchPlaceholder}
            className="input input-sm input-bordered w-42 pl-10 rounded-xl bg-base-100/80 dark:bg-base-900/80 border-base-300/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium"
          />
        </div>
      </div>

      {/* Empty Result Notification Safeguard */}
      {filteredLeaders.length === 0 ? (
        <div className="bg-base-100/50 backdrop-blur-sm border border-dashed border-base-300 rounded-[2rem] p-16 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-bold text-base-content/60">{t.leadership.noRecords}</p>
        </div>
      ) : (
        /* Dynamic Grid System Layout - Elevated Cards */
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredLeaders.map((leader) => {
            const styles = getTierStyles(leader.tier);
            return (
              <div 
                key={leader.id} 
                className="group relative bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Contextual Gradient Accent Stripe */}
                <div className={`absolute top-0 left-0 h-full w-2 rounded-l-[2rem] ${styles.stripe}`}></div>
                
                {/* Subtle Hover Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${leader.tier === 'State' ? 'bg-accent' : leader.tier === 'District' ? 'bg-secondary' : 'bg-neutral'}`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Identification Header Row with Profile Image */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pl-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar Component */}
                      <div className="relative group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={leader.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80"} 
                          alt={leader.name}
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ${styles.ring} ring-offset-2 ring-offset-base-100 shadow-md`}
                        />
                        {leader.tier === 'BoardMember' && (
                          <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full text-xs shadow-md" title="Board Member">
                            ⭐
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-base-content tracking-tight group-hover:text-primary transition-colors duration-300">{leader.name}</h3>
                        <p className="text-xs sm:text-sm font-semibold text-base-content/60 mt-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          {leader.designation}
                        </p>
                      </div>
                    </div>

                    <span className={`${styles.badge} text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg`}>
                      {t.leadership[`filter${leader.tier}`] || leader.tier} Head
                    </span>
                  </div>

                  {/* Scope Metadata Block */}
                  <div className={`grid grid-cols-2 gap-4 p-4 rounded-2xl border mb-6 ml-4 ${styles.bg}`}>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-base-content/40">{t.leadership.scopeLabel}</span>
                      <span className="block text-sm font-bold text-base-content">{leader.region}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-base-content/40">{t.leadership.joinedLabel}</span>
                      <span className="block text-sm font-bold text-base-content">{leader.joinedDate}</span>
                    </div>
                  </div>

                  {/* Modernized Responsibilities List */}
                  <div className="space-y-3 ml-4 mb-8 flex-grow">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-500">{t.leadership.responsibilities}</h4>
                    <ul className="space-y-3 text-sm font-medium text-base-content/80">
                      {leader.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Refined Action Toolbar */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-base-300/30 ml-4">
                    <a href={`tel:${leader.phone}`} className="btn btn-sm btn-primary rounded-full px-6 shadow-lg shadow-primary/20 font-bold border-none hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {t.leadership.btnContact}
                    </a>
                    <a href={`mailto:${leader.email}`} className="btn btn-sm btn-outline border-base-content/20 hover:border-primary hover:bg-primary/5 rounded-full px-6 font-bold hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {t.leadership.btnEmail}
                    </a>
                    <span className="ml-auto text-[10px] font-mono text-base-content/30 tracking-widest hidden sm:block bg-base-100/50 px-3 py-1 rounded-full border border-base-300/30">
                      ID: #00{leader.id}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}

export default LeadershipDirectory