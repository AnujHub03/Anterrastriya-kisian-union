import React from 'react'

const About = () => {
  return (
    <div className="py-6 max-w-5xl mx-auto space-y-12">
      {/* Preamble / प्रस्तावना */}
      <section className="bg-base-200 p-6 sm:p-10 rounded-2xl border border-base-300 shadow-sm space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary border-b border-base-300 pb-3">
          प्रस्तावना (Preamble)
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-justify font-medium">
          यह संघ किसी राजनीतिक दल से नहीं जुड़ेगा और केवल किसान मुद्दों, सामाजिक विषयों ओर वंचित वर्ग के लिए काम करेगा। हम, विश्व के किसान ओर वंचित वर्ग, अपनी आर्थिक-सामाजिक स्थिति सुधारने, कृषि को लाभकारी बनाने और किसानों ओर शोषित वर्ग के हितों की रक्षा के लिए इस गैर-राजनीतिक संगठन का गठन करते हैं।
        </p>
      </section>

      {/* Structural Data Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Scope and Field Card */}
        <div className="card bg-base-200 border border-base-300 shadow-md p-6">
          <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">📍 नाम और कार्यक्षेत्र</h3>
          <div className="space-y-3 font-semibold">
            <div className="flex justify-between border-b border-base-300 pb-2">
              <span className="opacity-70">नाम:</span>
              <span className="text-primary">अंतर्राष्ट्रीय किसान यूनियन</span>
            </div>
            <div className="flex justify-between border-b border-base-300 pb-2">
              <span className="opacity-70">कार्यक्षेत्र:</span>
              <span>सम्पूर्ण विश्व (Global)</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="opacity-70">मुख्य कार्यालय:</span>
              <span>मेरठ (उत्तर प्रदेश), भारत</span>
            </div>
          </div>
        </div>

        {/* Vision Statements */}
        <div className="card bg-base-200 border border-base-300 shadow-md p-6">
          <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">🌱 हमारे मुख्य संकल्प</h3>
          <ul className="space-y-3 text-sm font-medium opacity-90">
            <li className="flex gap-2">⚡ <span>किसानों को तकनीकी, कानूनी और बाजार की सही जानकारी प्रदान करना।</span></li>
            <li className="flex gap-2">⚡ <span><strong>कर्ज माफी नहीं, बल्कि स्थाई कर्ज मुक्ति</strong> के लिए ठोस नीति सुझाना।</span></li>
            <li className="flex gap-2">⚡ <span>पारंपरिक और पूर्णतः जैविक खेती (Organic Farming) को बढ़ावा देना।</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About