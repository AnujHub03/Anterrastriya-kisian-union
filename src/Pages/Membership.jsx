import React from 'react'

const Membership = () => {
  return (
    <div className="py-6 max-w-xl mx-auto">
      <div className="bg-base-200 border border-base-300 p-6 sm:p-10 rounded-3xl shadow-xl space-y-6">
        
        {/* Header Invitation */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-primary">यूनियन सदस्यता आवेदन</h2>
          <p className="text-xs sm:text-sm font-semibold opacity-85 px-2">
            "हम दुनिया भर के छोटे, महिला और आदिवासी किसानों को सशक्त, संगठित और समान स्थान पर लाना चाहते हैं।"
          </p>
        </div>

        {/* Registration Input Form Elements */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="form-control w-full">
            <label className="label font-bold text-xs sm:text-sm"><span className="label-text">किसान का पूरा नाम (Full Name)</span></label>
            <input type="text" placeholder="अपना नाम दर्ज करें" className="input input-bordered w-full bg-base-100 font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-control w-full">
              <label className="label font-bold text-xs sm:text-sm"><span className="label-text">मोबाइल नंबर (Mobile)</span></label>
              <input type="tel" placeholder="98765XXXXX" className="input input-bordered w-full bg-base-100 font-medium" />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-xs sm:text-sm"><span className="label-text">कृषि क्षेत्र आकार (Land Holding)</span></label>
              <select className="select select-bordered w-full bg-base-100 font-medium">
                <option disabled selected>चुनें</option>
                <option>छोटे किसान (&lt; 1 हेक्टेयर)</option>
                <option>मध्यम किसान (1 - 4 हेक्टेयर)</option>
                <option>अन्य / कृषि श्रमिक</option>
              </select>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label font-bold text-xs sm:text-sm"><span className="label-text">राज्य / जिला (State & District)</span></label>
            <input type="text" placeholder="उदा. मेरठ, उत्तर प्रदेश" className="input input-bordered w-full bg-base-100 font-medium" />
          </div>

          <div className="form-control pt-4">
            <button className="btn btn-primary w-full text-base font-bold shadow-lg transform active:scale-95 transition-transform">
              सदस्यता के लिए आवेदन सबमिट करें
            </button>
          </div>
        </form>

        <div className="text-center text-xs opacity-60 font-semibold pt-2 border-t border-base-300">
          * अंतर्राष्ट्रीय किसान यूनियन एक पूर्णतः गैर-राजनीतिक एवं स्वतंत्र संगठन है।
        </div>
      </div>
    </div>
  )
}

export default Membership