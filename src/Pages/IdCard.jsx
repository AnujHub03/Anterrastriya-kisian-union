import React, { useState, useRef } from 'react'
import { useLanguage } from './LanguageContext'


const IdGenerator = () => {
  const { t } = useLanguage() // 👈 Sourced translation dictionary object

  // State for Form Inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    role: 'सामान्य सदस्य (Member)',
    photo: null,
    memberId: 'IKU-2026-8491'
  })

  // Ref to target the ID card bounding box for isolated printing
  const cardRef = useRef()

  // Dynamic initialization safety loop
  if (!t || !t.idCard) {
    return <div className="py-24 text-center text-lg">Loading Identifier Engine...</div>
  }

  // Generate a random ID number
  const handleGenerateId = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000)
    setFormData(prev => ({
      ...prev,
      memberId: `IKU-2026-${randomDigits}`
    }))
  }

  // Handle Form field state updates
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle local passport photo loading
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: URL.createObjectURL(file)
      }))
    }
  }

  // Isolates the card node and triggers systemic print dialogs
  const handlePrint = () => {
    const printContent = cardRef.current.innerHTML
    const originalContent = document.body.innerHTML
    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = originalContent
    window.location.reload()
  }

  // Build the textual string to write inside the QR Code structure
  const qrDataString = `ID: ${formData.memberId}\nName: ${formData.name || 'Not Provided'}\nRole: ${formData.role}`
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrDataString)}`

  return (
    <div className="py-8 max-w-6xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      
      {/* Structural Branding Header - Glassmorphism Hero */}
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
          <div className="inline-flex items-center gap-2 bg-green-800/10 border border-green-800/20 text-green-800 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            {t.idCard.pageSubtitle}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight drop-shadow-sm">
            {t.idCard.pageTitle}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* LEFT COLUMN: Modern Glassmorphic Input Form Section */}
        <div className="bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 p-6 sm:p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow space-y-6">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400 text-xs font-extrabold uppercase tracking-widest border-b border-base-300/40 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
            {t.idCard.formHeading}
          </div>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelName}</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.idCard.placeholderName} className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelMobile}</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="98765XXXXX" maxLength="10" className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
              </div>
              
              <div className="form-control">
                <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelLocation}</span></label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder={t.idCard.placeholderLocation} className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelDesignation}</span></label>
              <select name="role" value={formData.role} onChange={handleChange} className="select select-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 transition-all">
                <option>Ref: सामान्य सदस्य (Member)</option>
                <option>Ref: कृषि श्रमिक प्रतिनिधि (Laborer Rep)</option>
                <option>Ref: महिला विंग कार्यकर्ता (Women Wing Worker)</option>
                <option>Ref: क्षेत्रीय प्रशासनिक अधिकारी (Regional Leader)</option>
                <option>Ref: केंद्रीय कोर कमेटी सदस्य (Core Committee Member)</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelPhoto}</span></label>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="file-input file-input-bordered file-input-primary w-full bg-base-100/80 dark:bg-base-900/80" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" onClick={handleGenerateId} className="btn btn-outline btn-secondary flex-1 font-bold text-xs sm:text-sm rounded-full hover:scale-105 active:scale-95 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                {t.idCard.btnNewId}
              </button>
              <button type="button" onClick={handlePrint} className="btn btn-primary flex-1 font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                {t.idCard.btnPrint}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Live View Interface Block */}
        <div className="flex flex-col items-center justify-center p-6 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-white/10 shadow-xl min-h-[520px]">
          <div className="inline-flex items-center gap-2 bg-base-100/50 dark:bg-base-900/50 text-base-content/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-base-300/30">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            {t.idCard.previewTitle}
          </div>
          
          {/* Printable Scope Wrapper Box - Kept completely standard for clean physical printing */}
          <div ref={cardRef} className="bg-white text-stone-900 w-80 h-[490px] rounded-2xl shadow-2xl relative border-4 border-green-800 flex flex-col justify-between overflow-hidden font-sans">
            
            {/* Header Identity Container */}
            <div className="bg-green-800 text-white text-center p-3 relative space-y-0.5 border-b-2 border-amber-400">
              <h4 className="text-lg font-black tracking-wide leading-tight">{t.idCard.cardBrand}</h4>
              <p className="text-[10px] font-bold text-amber-300 tracking-widest uppercase italic">{t.idCard.cardMotto}</p>
            </div>

            {/* Tri-Color Trim Stripe */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

            {/* Central Content Area */}
            <div className="flex-1 flex flex-col items-center pt-5 px-6 space-y-3 bg-gradient-to-b from-green-50/30 to-white relative">
              
              {/* Profile Image Node */}
              <div className="w-24 h-28 rounded-lg border-2 border-stone-400 overflow-hidden bg-stone-100 shadow-md flex items-center justify-center">
                {formData.photo ? (
                  <img src={formData.photo} alt="User Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center text-stone-400 p-2 select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-[8px] font-bold block mt-0.5">{t.idCard.noPhoto}</span>
                  </div>
                )}
              </div>

              {/* Status/Designation Tag */}
              <div className="bg-amber-500 text-stone-950 px-4 py-0.5 rounded-full text-[11px] font-black tracking-wide shadow-sm uppercase">
                {formData.role.includes(":") ? formData.role.split(':')[1].trim() : formData.role.split(' ')[0]}
              </div>

              {/* CENTERED USER DETAILS BLOCK */}
              <div className="w-full space-y-2 text-center pt-3 border-t border-stone-150">
                <div>
                  <span className="text-[9px] text-stone-400 font-bold tracking-wider block uppercase leading-none mb-0.5">{t.idCard.cardName}</span>
                  <span className="text-stone-950 text-base font-extrabold tracking-wide block uppercase truncate">{formData.name || '-----------------'}</span>
                </div>
                
                <div>
                  <span className="text-[9px] text-stone-400 font-bold tracking-wider block uppercase leading-none mb-0.5">{t.idCard.cardIdNo}</span>
                  <span className="text-green-800 text-sm font-black font-mono tracking-widest block">{formData.memberId}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 max-w-[220px] mx-auto text-xs">
                  <div className="border-r border-stone-200 pr-1">
                    <span className="text-[9px] text-stone-400 font-bold block leading-none mb-0.5">{t.idCard.cardMobile}</span>
                    <span className="text-stone-900 font-bold font-mono block truncate">{formData.phone || '----------'}</span>
                  </div>
                  <div className="pl-1">
                    <span className="text-[9px] text-stone-400 font-bold block leading-none mb-0.5">{t.idCard.cardPlace}</span>
                    <span className="text-stone-900 font-bold block truncate">{formData.location || '---------'}</span>
                  </div>
                </div>
              </div>

              {/* SMALL COMPACT QR CODE PINNED TO THE RIGHT SIDE */}
              <div className="absolute bottom-3 right-3 w-12 h-12 border border-green-800/40 p-0.5 bg-white shadow-sm flex items-center justify-center rounded-md transition-opacity">
                <img 
                  src={qrCodeUrl} 
                  alt="Verification QR" 
                  className="w-full h-full object-contain"
                />
              </div>

            </div>

            {/* Official Regional Base Footer */}
            <div className="bg-stone-900 text-white text-[10px] text-center py-2 px-1 font-medium tracking-wide border-t border-amber-400 z-10">
              <div>{t.idCard.cardFooterOffice}</div>
              <div className="text-[8px] text-stone-400 font-mono tracking-widest mt-0.5">www.anterratriyakisanunion </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default IdGenerator