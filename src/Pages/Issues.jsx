import React from 'react'

const Issues = () => {
  return (
    <div className="py-6 space-y-12">
      {/* Alert Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-error mb-2">*क्या किसानों को खत्म करके जमीन हड़पना चाहती है सरकार?*</h2>
        <p className="font-semibold opacity-85">वैश्विक वित्तीय संस्थाओं एवं पूंजीपतियों की नियत का एक विश्लेषणात्मक विवरण।</p>
      </div>

      {/* Financial Critique Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Issue Card 1: Input Costs vs Market Value */}
        <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm space-y-4">
          <div className="badge badge-error text-white font-bold">बाजार मूल्य का खेल (3X Price Trap)</div>
          <h3 className="text-xl font-bold text-base-content">लागत बनाम उपभोक्ता मूल्य</h3>
          <p className="text-sm leading-relaxed opacity-90 text-justify">
            यदि रासायनिक खाद, बीज, पानी, जुताई, कृषि श्रम, और कीटनाशक का कुल योग किया जाए तो किसानों को समर्थन मूल्य (MSP) के रूप में कुछ भी प्राप्त नहीं होता। जैसे ही कृषि उत्पाद बाजार या कारखानों के माध्यम से उपभोक्ता तक पहुंचता है, उसका मूल्य खेत के उत्पाद मूल्य की तुलना में <strong>तीन गुना (3x) तक बढ़ जाता है</strong>। सरकारें औद्योगिक उत्पादों पर नियंत्रण नहीं रखतीं, पर कृषि उत्पाद मूल्य दबाती हैं।
          </p>
        </div>

        {/* Issue Card 2: Income Disparity Breakdown */}
        <div className="bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm space-y-4">
          <div className="badge badge-error text-white font-bold">आय में भारी असमानता</div>
          <h3 className="text-xl font-bold text-base-content">कर्मचारी बनाम 1 हेक्टेयर किसान</h3>
          <p className="text-sm leading-relaxed opacity-90 text-justify">
            आज के समय में सबसे छोटे सरकारी कर्मचारी का न्यूनतम वेतन भी ₹25,000 महीने हो चुका है। इसके विपरीत, एक हेक्टेयर जमीन का मालिक किसान अपनी दिन-रात की मेहनत और पूरी पूंजी लगाने के बाद भी ₹2,000 महीना शुद्ध मुनाफा नहीं बचा पाता। इसी कारणवश किसानों पर लगातार भारी कर्ज का बोझ चढ़ता जा रहा है।
          </p>
        </div>
      </div>

      {/* Global Institution Warning Footer */}
      <div className="bg-error/10 border border-error/30 text-base-content p-6 rounded-xl max-w-4xl mx-auto text-center font-medium">
        ⚠️ <strong>वैश्विक संस्थागत चुनौती:</strong> विश्वव्यापी किसान समस्याओं के पीछे विश्व बैंक (World Bank) और अंतरराष्ट्रीय मुद्राकोश (IMF) जैसी वित्तीय संस्थाएं जिम्मेदार हैं, जो कथित रूप से जनकल्याणकारी योजनाएं बनाकर खाद्य व्यवस्था को हथियार की तरह उपयोग कर रही हैं।
      </div>
    </div>
  )
}

export default Issues