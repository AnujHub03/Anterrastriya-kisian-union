import React, { useState, useRef } from 'react'

const IdGenerator = () => {
  // State for Form Inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    role: 'सामान्य सदस्य (Member)',
    photo: null,
    memberId: 'IFU-2026-8491'
  })

  // Ref to target the ID card bounding box for isolated printing
  const cardRef = useRef()

  // Generate a random ID number
  const handleGenerateId = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000)
    setFormData(prev => ({
      ...prev,
      memberId: `IFU-2026-${randomDigits}`
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
    <div className="py-6 max-w-5xl mx-auto space-y-8">
      {/* Top Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black text-primary">डिजिटल पहचान पत्र जनरेटर</h2>
        <p className="text-sm font-semibold opacity-75 max-w-xl mx-auto">
          केंद्रित विवरण एवं कॉम्पैक्ट क्यूआर कोड के साथ आधिकारिक पहचान पत्र।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* LEFT COLUMN: Input Form Section */}
        <div className="bg-base-200 border border-base-300 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
          <h3 className="text-xl font-bold text-accent border-b border-base-300 pb-2">📋 विवरण दर्ज करें</h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">पूरा नाम (Full Name)</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="नाम दर्ज करें" className="input input-bordered w-full bg-base-100 font-medium" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label font-bold text-xs"><span className="label-text">मोबाइल नंबर (Mobile)</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="98765XXXXX" maxLength="10" className="input input-bordered w-full bg-base-100 font-medium" />
              </div>
              
              <div className="form-control">
                <label className="label font-bold text-xs"><span className="label-text">स्थान (State & District)</span></label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="उदा. मेरठ, उत्तर प्रदेश" className="input input-bordered w-full bg-base-100 font-medium" />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">यूनियन पद / श्रेणी (Designation)</span></label>
              <select name="role" value={formData.role} onChange={handleChange} className="select select-bordered w-full bg-base-100 font-medium">
                <option>सामान्य सदस्य (Member)</option>
                <option>कृषि श्रमिक प्रतिनिधि (Laborer Rep)</option>
                <option>महिला विंग कार्यकर्ता (Women Wing Worker)</option>
                <option>क्षेत्रीय प्रशासनिक अधिकारी (Regional Leader)</option>
                <option>केंद्रीय कोर कमेटी सदस्य (Core Committee Member)</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs"><span className="label-text">पासपोर्ट फोटो (Profile Picture)</span></label>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="file-input file-input-bordered file-input-primary w-full bg-base-100" />
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button type="button" onClick={handleGenerateId} className="btn btn-outline btn-secondary flex-1 font-bold text-xs sm:text-sm">
                नया ID नंबर बनाएं
              </button>
              <button type="button" onClick={handlePrint} className="btn btn-primary flex-1 font-bold text-xs sm:text-sm shadow-md">
                🖨️ प्रिंट / डाउनलोड ID
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Live View Interface Block */}
        <div className="flex flex-col items-center justify-center p-4 bg-base-300/40 rounded-3xl border border-base-300 min-h-[520px]">
          <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Live Identity Card Preview</span>
          
          {/* Printable Scope Wrapper Box */}
          <div ref={cardRef} className="bg-white text-stone-900 w-80 h-[490px] rounded-2xl shadow-2xl relative border-4 border-green-800 flex flex-col justify-between overflow-hidden font-sans">
            
            {/* Header Identity Container */}
            <div className="bg-green-800 text-white text-center p-3 relative space-y-0.5 border-b-2 border-amber-400">
              <h4 className="text-lg font-black tracking-wide leading-tight">अंतर्राष्ट्रीय किसान यूनियन</h4>
              <p className="text-[10px] font-bold text-amber-300 tracking-widest uppercase italic">"समानता - न्याय एवं मानवता"</p>
            </div>

            {/* Tri-Color Trim Stripe */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

            {/* Central Content Area (Marked relative to hold our absolute small QR code) */}
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
                    <span className="text-[8px] font-bold block mt-0.5">NO PHOTO</span>
                  </div>
                )}
              </div>

              {/* Status/Designation Tag */}
              <div className="bg-amber-500 text-stone-950 px-4 py-0.5 rounded-full text-[11px] font-black tracking-wide shadow-sm uppercase">
                {formData.role.split(' ')[0]}
              </div>

              {/* CENTERED USER DETAILS BLOCK */}
              <div className="w-full space-y-2 text-center pt-3 border-t border-stone-150">
                <div>
                  <span className="text-[9px] text-stone-400 font-bold tracking-wider block uppercase leading-none mb-0.5">नाम / Name</span>
                  <span className="text-stone-950 text-base font-extrabold tracking-wide block uppercase truncate">{formData.name || '-----------------'}</span>
                </div>
                
                <div>
                  <span className="text-[9px] text-stone-400 font-bold tracking-wider block uppercase leading-none mb-0.5">आईडी संख्या / ID No</span>
                  <span className="text-green-800 text-sm font-black font-mono tracking-widest block">{formData.memberId}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 max-w-[220px] mx-auto text-xs">
                  <div className="border-r border-stone-200 pr-1">
                    <span className="text-[9px] text-stone-400 font-bold block leading-none mb-0.5">मोब / Mobile</span>
                    <span className="text-stone-900 font-bold font-mono block truncate">{formData.phone || '----------'}</span>
                  </div>
                  <div className="pl-1">
                    <span className="text-[9px] text-stone-400 font-bold block leading-none mb-0.5">स्थान / Place</span>
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
              <div>मुख्य कार्यालय: मेरठ (उत्तर प्रदेश), भारत</div>
              <div className="text-[8px] text-stone-400 font-mono tracking-widest mt-0.5">WWW.KISANUNION.ORG</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default IdGenerator