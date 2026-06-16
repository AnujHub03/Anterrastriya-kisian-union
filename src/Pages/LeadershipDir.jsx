import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'


const LeadershipDirectory = () => {
  const { t } = useLanguage()
  const [activeTier, setActiveTier] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // 1. Data Store Arrays representing organizational hierarchy tiers
  const [leaders] = useState([
    {
      id: 1,
      name: "Dr. Ramesh Kumar Shrivastav",
      tier: "State",
      region: "Uttar Pradesh",
      designation: "State Executive Director",
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
      email: "a.hooda@agriorg.org",
      phone: "+91 90123 45678",
      joinedDate: "March 2025",
      responsibilities: [
        "Supervising urban vertical farming rooftop initiatives",
        "Managing municipal direct-to-consumer micro market setups",
        "Mitigating industrial runoff concerns in peri-urban farm boundaries"
      ]
    }
  ])

  // Safeguard structural rendering boundary
  if (!t || !t.leadership) {
    return <div className="py-12 text-center text-lg">Initializing Directory Framework...</div>
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

  return (
    <div className="py-6 max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      
      {/* Structural Branding Header */}
      <div className="space-y-2 border-b border-base-300 pb-6">
        <h2 className="text-3xl font-black text-primary tracking-tight">{t.leadership.title}</h2>
        <p className="text-sm font-semibold opacity-75">{t.leadership.subtitle}</p>
      </div>

      {/* Control Panel: Filters & Search bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-base-200 p-4 rounded-3xl border border-base-300 shadow-sm">
        
        {/* Tier Tabs Selection */}
        <div className="flex flex-wrap gap-6">
          <button onClick={() => setActiveTier('All')} className={`btn btn-sm rounded-xl p-2 font-bold transition-all ${activeTier === 'All' ? 'btn-primary shadow-gray-400  shadow-md' : 'btn-ghost'}`}>{t.leadership.filterAll}</button>
          <button onClick={() => setActiveTier('State')} className={`btn btn-sm rounded-xl p-2 font-bold transition-all ${activeTier === 'State' ? 'btn-accent shadow-gray-400 shadow-md' : 'btn-ghost'}`}>{t.leadership.filterState}</button>
          <button onClick={() => setActiveTier('District')} className={`btn btn-sm rounded-xl p-2 font-bold transition-all ${activeTier === 'District' ? 'btn-secondary shadow-gray-400 shadow-md' : 'btn-ghost'}`}>{t.leadership.filterDistrict}</button>
          <button onClick={() => setActiveTier('City')} className={`btn btn-sm rounded-xl p-2 font-bold transition-all ${activeTier === 'City' ? 'btn-neutral text-white shadow-gray-400 shadow-md' : 'btn-ghost'}`}>{t.leadership.filterCity}</button>
        </div>

        {/* Query Input Filter */}
        <div className="w-full md:w-72">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.leadership.searchPlaceholder}
            className="input input-sm input-bordered w-full rounded-xl bg-base-100 font-medium focus:border-primary"
          />
        </div>
      </div>

      {/* Empty Result Notification Safeguard */}
      {filteredLeaders.length === 0 ? (
        <div className="bg-base-200 border border-base-300 rounded-3xl p-12 text-center text-base font-bold opacity-60">
          {t.leadership.noRecords}
        </div>
      ) : (
        /* Dynamic Grid System Layout */
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredLeaders.map((leader) => (
            <div 
              key={leader.id} 
              className="bg-base-200 border border-base-300 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Contextual Tier Identification Accent Stripe */}
              <div className={`absolute top-0 left-0 h-full w-1.5 ${
                leader.tier === 'State' ? 'bg-accent' : leader.tier === 'District' ? 'bg-secondary' : 'bg-neutral'
              }`}></div>

              <div>
                {/* Identification Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4 ml-2">
                  <div>
                    <h3 className="text-xl font-black text-base-content tracking-wide group-hover:text-primary transition-colors">{leader.name}</h3>
                    <p className="text-xs font-bold text-teal-600 dark:text-teal-400 mt-0.5">{leader.designation}</p>
                  </div>
                  <span className={`badge font-black text-[10px] tracking-wider rounded-md px-2 py-1.5 border-none text-white uppercase ${
                    leader.tier === 'State' ? 'bg-accent' : leader.tier === 'District' ? 'bg-secondary' : 'bg-neutral'
                  }`}>
                    {leader.tier} Head
                  </span>
                </div>

                {/* Scope Metadata Block */}
                <div className="grid grid-cols-2 gap-4 p-3 bg-base-100 rounded-2xl border border-base-300/60 text-xs font-bold ml-2 mb-4">
                  <div>
                    <span className="block opacity-50 uppercase tracking-wider text-[10px] mb-0.5">{t.leadership.scopeLabel}</span>
                    <span className="text-base-content">{leader.region}</span>
                  </div>
                  <div>
                    <span className="block opacity-50 uppercase tracking-wider text-[10px] mb-0.5">{t.leadership.joinedLabel}</span>
                    <span className="text-base-content">{leader.joinedDate}</span>
                  </div>
                </div>

                {/* Portfolio Action/Responsibilities Render */}
                <div className="space-y-2 ml-2 mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-orange-500">{t.leadership.responsibilities}</h4>
                  <ul className="space-y-1.5 text-sm font-medium opacity-90 pl-4 list-disc marker:text-primary">
                    {leader.responsibilities.map((item, idx) => (
                      <li key={idx} className="leading-relaxed text-justify">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Operations Toolbar */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-base-300/60 ml-2">
                <a href={`tel:${leader.phone}`} className="btn btn-sm btn-primary font-black rounded-xl shadow-sm tracking-wide grow sm:grow-0">
                  {t.leadership.btnContact}
                </a>
                <a href={`mailto:${leader.email}`} className="btn btn-sm btn-outline btn-primary font-black rounded-xl tracking-wide grow sm:grow-0">
                  {t.leadership.btnEmail}
                </a>
                <span className="text-xs font-mono opacity-40 ml-auto self-center hidden sm:inline">ID: #00{leader.id}</span>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default LeadershipDirectory