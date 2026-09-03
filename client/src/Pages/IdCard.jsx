import React, { useState, useRef } from 'react'
import { useLanguage } from './LanguageContext'

const IdGenerator = () => {
  const { t } = useLanguage()

  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    role: 'सामान्य सदस्य (Member)',
    photo: null,
    memberId: 'IKU-2026-8491'
  })

  // Modal display state & Payment QR Image Path (placed in public/QrCode/ folder)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qrImageUrl, setQrImageUrl] = useState('/QrCode/Qrcode.png') 
  
  // Reference for printable ID card container
  const cardRef = useRef(null)

  if (!t || !t.idCard) {
    return (
      <div className="py-24 text-center text-lg font-semibold text-base-content/70">
        Loading Identifier Engine...
      </div>
    )
  }

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle image upload for member photo
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: URL.createObjectURL(file)
      }))
    }
  }

  // Handle "Generate ID & Show Payment QR" action
  const handleGenerateIdAndShowQr = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000)
    const newMemberId = `IKU-2026-${randomDigits}`
    setFormData(prev => ({ ...prev, memberId: newMemberId }))

    setQrImageUrl('/QrCode/Qrcode.png')
    setIsModalOpen(true)
  }

  // System Print fallback
  const handlePrint = () => {
    if (!cardRef.current) return
    const printWindow = window.open('', '', 'width=600,height=800')
    printWindow.document.write(`
      <html>
        <head>
          <title>Print ID Card</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="flex items-center justify-center min-h-screen bg-white">
          ${cardRef.current.outerHTML}
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }

  // Generate dynamic QR code URL for card preview
  const qrDataString = `ID: ${formData.memberId}\nName: ${formData.name || 'Not Provided'}\nRole: ${formData.role}`
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrDataString)}`

  return (
    <div className="py-8 max-w-6xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
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
        
        {/* Form Controls */}
        <div className="bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 p-6 sm:p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow space-y-6">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400 text-xs font-extrabold uppercase tracking-widest border-b border-base-300/40 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            {t.idCard.formHeading}
          </div>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelName}</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder={t.idCard.placeholderName} 
                className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" 
                required 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelMobile}</span></label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="98765XXXXX" 
                  maxLength="10" 
                  className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" 
                />
              </div>
              
              <div className="form-control">
                <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelLocation}</span></label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange} 
                  placeholder={t.idCard.placeholderLocation} 
                  className="input input-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" 
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelDesignation}</span></label>
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange} 
                className="select select-bordered w-full bg-base-100/80 dark:bg-base-900/80 font-medium focus:border-green-800 transition-all"
              >
                <option>Ref: सामान्य सदस्य (Member)</option>
                <option>Ref: कृषि श्रमिक प्रतिनिधि (Laborer Rep)</option>
                <option>Ref: महिला विंग कार्यकर्ता (Women Wing Worker)</option>
                <option>Ref: क्षेत्रीय प्रशासनिक अधिकारी (Regional Leader)</option>
                <option>Ref: केंद्रीय कोर कमेटी सदस्य (Core Committee Member)</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">{t.idCard.labelPhoto}</span></label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handlePhotoUpload} 
                className="file-input file-input-bordered file-input-primary w-full bg-base-100/80 dark:bg-base-900/80" 
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                type="button" 
                onClick={handleGenerateIdAndShowQr} 
                className="btn btn-primary flex-1 font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.idCard.btnNewId || 'Generate & Show Payment QR'}
              </button>

              <button 
                type="button" 
                onClick={handlePrint} 
                className="btn btn-outline btn-secondary flex-1 font-bold text-xs sm:text-sm rounded-full hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                {t.idCard.btnPrint || 'Print Card'}
              </button>
            </div>
          </form>
        </div>

        {/* Live ID Card Preview */}
        <div className="flex flex-col items-center justify-center p-6 bg-white/60 dark:bg-base-900/60 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-white/10 shadow-xl min-h-[520px]">
          <div className="inline-flex items-center gap-2 bg-base-100/50 dark:bg-base-900/50 text-base-content/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-base-300/30">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            {t.idCard.previewTitle}
          </div>
          
          <div ref={cardRef} className="bg-white text-stone-900 w-80 h-[510px] rounded-2xl shadow-2xl relative border-4 border-green-800 flex flex-col justify-between overflow-hidden font-sans">
            
            <div className="bg-green-800 text-white text-center p-3 relative space-y-0.5 border-b-2 border-amber-400">
              <h4 className="text-lg font-black tracking-wide leading-tight">{t.idCard.cardBrand}</h4>
              <p className="text-[10px] font-bold text-amber-300 tracking-widest uppercase italic">{t.idCard.cardMotto}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

            <div className="flex-1 flex flex-col items-center pt-4 px-6 space-y-2 bg-gradient-to-b from-green-50/30 to-white relative pb-14">
              
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

              <div className="bg-amber-500 text-stone-950 px-4 py-0.5 rounded-full text-[11px] font-black tracking-wide shadow-sm uppercase">
                {formData.role.includes(":") ? formData.role.split(':')[1].trim() : formData.role.split(' ')[0]}
              </div>

              <div className="w-full space-y-1.5 text-center pt-2 border-t border-stone-150">
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

              {/* Dynamic Verification QR Code */}
              <div className="absolute bottom-1 right-2 w-12 h-12 border border-green-800/40 p-0.5 bg-white shadow-md flex items-center justify-center rounded-md z-20">
                <img 
                  src={qrCodeUrl} 
                  alt="Verification QR" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%2315803d' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='2'/><path d='M7 7h3v3H7zM14 7h3v3h-3zM7 14h3v3H7z'/></svg>";
                  }}
                />
              </div>

            </div>

            <div className="bg-stone-900 text-white text-[10px] text-center py-2 px-1 font-medium tracking-wide border-t border-amber-400 relative z-10">
              <div>{t.idCard.cardFooterOffice}</div>
              <div className="text-[8px] text-stone-400 font-mono tracking-widest mt-0.5">www.anterratriyakisanunion</div>
            </div>
          </div>

        </div>
      </div>

      {/* POPUP MODAL FOR DISPLAYING SCAN & PAY QR IMAGE ON SAME PAGE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="bg-base-100 dark:bg-base-900 border border-white/20 rounded-[2.5rem] shadow-2xl max-w-md w-full p-6 space-y-4 relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-base-300 pb-3">
              <div>
                <h3 className="text-xl font-black text-green-800 dark:text-green-400">
                  Scan & Pay
                </h3>
                <p className="text-xs text-base-content/60 font-medium">
                  Member ID: {formData.memberId}
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="btn btn-sm btn-circle btn-ghost font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Display QR Image */}
            <div className="w-full flex items-center justify-center rounded-2xl border border-base-300 overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-800 p-3 max-h-[460px]">
              <img 
                src={qrImageUrl} 
                alt="Anterrastriya Kisan Union Scan & Pay QR Code" 
                className="max-h-[420px] w-auto object-contain rounded-xl shadow-md"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="btn btn-primary px-8 rounded-full font-bold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default IdGenerator