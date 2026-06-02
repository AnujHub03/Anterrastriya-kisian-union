import React from 'react'

const Home = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-12 border border-base-300">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="badge badge-primary font-bold px-4 py-3 mb-4 tracking-wider">अंतर्राष्ट्रीय मंच</div>
            <h1 className="text-4xl sm:text-6xl font-black text-primary mb-2">अंतर्राष्ट्रीय किसान यूनियन</h1>
            <p className="text-xl sm:text-2xl font-bold text-accent tracking-wide italic mb-6">
              "समानता - न्याय एवं मानवता"
            </p>
            <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto opacity-90">
              हम विश्व के किसान और वंचित वर्ग, अपनी आर्थिक-सामाजिक स्थिति सुधारने, कृषि को लाभकारी बनाने और शोषित वर्ग के हितों की रक्षा के लिए पूरी तरह प्रतिबद्ध हैं।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-primary btn-md sm:btn-lg shadow-lg">जुड़ें (Join Us)</button>
              <button className="btn btn-outline btn-md sm:btn-lg">घोषणापत्र पढ़ें</button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md text-center">
          <div className="stat-title font-bold text-sm text-base-content opacity-70">खाद्यान्न सुरक्षा सहायता</div>
          <div className="stat-value text-primary my-2 text-3xl sm:text-4xl font-black">80 करोड़+</div>
          <div className="stat-desc font-medium text-xs whitespace-normal">भारत में सरकार द्वारा भोजन सहायता प्राप्त नागरिक</div>
        </div>
        
        <div className="stat bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md text-center">
          <div className="stat-title font-bold text-sm text-base-content opacity-70">वैश्विक किसान चेतना</div>
          <div className="stat-value text-accent my-2 text-3xl sm:text-4xl font-black">वैश्विक मंच</div>
          <div className="stat-desc font-medium text-xs whitespace-normal">फ़्रांस, जर्मनी, ऑस्ट्रेलिया, म्यामार और अफ़्रीका आंदोलनों का एकीकरण</div>
        </div>

        <div className="stat bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md text-center">
          <div className="stat-title font-bold text-sm text-base-content opacity-70">मुख्य प्रशासनिक केंद्र</div>
          <div className="stat-value text-secondary my-2 text-2xl sm:text-3xl font-black">मेरठ, UP</div>
          <div className="stat-desc font-medium text-xs whitespace-normal">भारत में स्थित मुख्य वैश्विक कार्यालय</div>
        </div>
      </div>
    </div>
  )
}

export default Home
