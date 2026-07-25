import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { Link } from 'react-router-dom'

const Samvidhan = () => {
  const { t } = useLanguage()
  const [activeChapter, setActiveChapter] = useState('preamble')

  const scrollToChapter = (id) => {
    setActiveChapter(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  if (!t || !t.sam) {
    return <div className="min-h-screen flex items-center justify-center text-lg bg-base-100">Loading Constitution...</div>
  }

  const chapters = [
    {
      id: 'preamble',
      num: t.sam.tocPreamble || 'प्रस्तावना',
      content: (
        <p className="text-sm sm:text-base text-base-content/80 leading-relaxed text-justify">
          {t.sam.pre || 'हम, विश्व के किसान, मजदूर, श्रमिक, दलित, आदिवासी, वंचित, शोषित एवं पीड़ित वर्ग के लोग, मानवता, समानता, न्याय, स्वतंत्रता, बंधुत्व तथा सम्मानपूर्ण जीवन के अधिकारों को सर्वोपरि मानते हुए यह संविधान स्वीकार करते हैं। हमारा उद्देश्य विश्व के किसानों एवं श्रमिकों को संगठित कर उनके अधिकारों की रक्षा करना तथा न्यायपूर्ण, समतामूलक और मानव कल्याणकारी समाज की स्थापना करना है।'}
        </p>
      )
    },
    {
      id: 'ch1',
      num: t.sam.tocCh1 || 'अध्याय–1',
      title: t.sam.tocCh1Title || 'नाम, स्वरूप एवं मुख्यालय',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
          <div className="flex gap-4 border-b border-base-300/30 pb-4">
            <span className="font-black text-primary w-28 shrink-0">{t.sam.art1 || 'अनुच्छेद 1'} :</span>
            <span>{t.sam.art1Text || 'संगठन का नाम "अंतर्राष्ट्रीय किसान यूनियन™️ (International Kisan Union™️)" होगा।'}</span>
          </div>
          <div className="flex gap-4 border-b border-base-300/30 pb-4">
            <span className="font-black text-primary w-28 shrink-0">{t.sam.art2 || 'अनुच्छेद 2'} :</span>
            <span>{t.sam.art2Text || 'यह संगठन एक लोकतांत्रिक, गैर-राजनीतिक, गैर-लाभकारी एवं सामाजिक संगठन होगा।'}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-black text-primary w-28 shrink-0">{t.sam.art3 || 'अनुच्छेद 3'} :</span>
            <span>{t.sam.art3Text || 'राष्ट्रीय मुख्यालय विलेज भराला, जिला मेरठ उत्तर प्रदेश भारत 250221 में होगा। आवश्यकता अनुसार विभिन्न देशों, राज्यों एवं जिलों में कार्यालय स्थापित किए जा सकेंगे।'}</span>
          </div>
        </div>
      )
    },
    {
      id: 'ch2',
      num: t.sam.tocCh2 || 'अध्याय–2',
      title: t.sam.tocCh2Title || 'उद्देश्य',
      content: (
        <div className="text-sm sm:text-base text-base-content/80 leading-relaxed">
          <p className="mb-4">{t.sam.ch2Intro || 'संगठन के प्रमुख उद्देश्य होंगे—'}</p>
          <ul className="space-y-2">
            {(t.sam.ch2List || [
              'किसानों एवं मजदूरों के अधिकारों की रक्षा।',
              'कृषि को लाभकारी एवं सम्मानजनक व्यवसाय बनाना।',
              'प्राकृतिक एवं जैविक खेती को बढ़ावा।',
              'जलवायु परिवर्तन से प्रभावित किसानों के लिए विशेष योजनाओं की वकालत।',
              'कृषि उत्पादों का न्यूनतम समर्थन मूल्य सुनिश्चित कराने हेतु प्रयास।',
              'श्रमिकों के सामाजिक एवं आर्थिक अधिकारों की रक्षा।',
              'शिक्षा, स्वास्थ्य एवं रोजगार के अवसरों को बढ़ावा देना।',
              'महिला किसानों एवं कृषि श्रमिकों को समान अवसर दिलाना।',
              'दलित, आदिवासी एवं वंचित वर्ग के अधिकारों की रक्षा।',
              'पर्यावरण संरक्षण एवं जल, जंगल, जमीन की सुरक्षा।',
              'लोकतांत्रिक एवं संवैधानिक मूल्यों का संरक्षण।',
              'विश्वभर के किसानों के बीच सहयोग एवं संवाद स्थापित करना।'
            ]).map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'ch3',
      num: t.sam.tocCh3 || 'अध्याय–3',
      title: t.sam.tocCh3Title || 'मूल सिद्धांत',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(t.sam.ch3List || ['समानता', 'न्याय', 'मानवता', 'लोकतंत्र', 'अहिंसा', 'पारदर्शिता', 'उत्तरदायित्व', 'सामाजिक समरसता', 'विश्वबंधुत्व']).map((val, i) => (
            <div key={i} className="bg-base-100/80 border border-base-300 rounded-xl p-4 text-center font-bold text-primary hover:shadow-md transition-shadow">
              {val}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'ch4',
      num: t.sam.tocCh4 || 'अध्याय–4',
      title: t.sam.tocCh4Title || 'सदस्यता',
      content: (
        <div className="space-y-6 text-sm sm:text-base text-base-content/80 leading-relaxed">
          <div>
            <h4 className="font-black text-base-content mb-3">{t.sam.ch4CriteriaTitle || 'सदस्य बनने के लिए:'}</h4>
            <ul className="space-y-2 ml-4">
              {(t.sam.ch4Criteria || [
                '18 वर्ष या उससे अधिक आयु का कोई भी व्यक्ति।',
                'किसान, मजदूर, श्रमिक अथवा संगठन के उद्देश्यों में विश्वास रखने वाला व्यक्ति।',
                'संविधान एवं आचार संहिता का पालन करने वाला।'
              ]).map((s, i) => (
                <li key={i} className="list-disc">{s}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {(t.sam.ch4Types || ['संस्थापक सदस्य', 'प्राथमिक सदस्य', 'सक्रिय सदस्य', 'आजीवन सदस्य', 'सम्मानित सदस्य', 'सहयोगी सदस्य', 'संस्थागत सदस्य']).map((s, i) => (
              <div key={i} className="bg-primary/10 border border-primary/20 rounded-xl px-3 py-2 text-center text-xs font-bold text-primary">{s}</div>
            ))}
          </div>
          <div>
            <h4 className="font-black text-base-content mb-3 text-red-500">{t.sam.ch4TerminationTitle || 'सदस्यता समाप्ति की स्थितियाँ:'}</h4>
            <ul className="space-y-2 ml-4 text-red-400/80">
              {(t.sam.ch4Termination || [
                'संविधान का उल्लंघन हो।',
                'भ्रष्टाचार सिद्ध हो।',
                'संगठन विरोधी गतिविधि की जाए।',
                'लगातार निर्धारित अवधि तक निष्क्रिय रहे।',
                'स्वेच्छा से त्यागपत्र दे।'
              ]).map((s, i) => (
                <li key={i} className="list-disc">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-base-content mb-3">{t.sam.ch4CatTitle || 'सदस्यता के प्रकार:'}</h4>
            <div className="flex flex-wrap gap-2">
              {(t.sam.ch4CatList || ['संस्थापक सदस्य', 'आजीवन सदस्य', 'वार्षिक सदस्य', 'सम्मानित सदस्य', 'सहयोगी सदस्य']).map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-base-200 border border-base-300 text-xs font-bold">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ch5',
      num: t.sam.tocCh5 || 'अध्याय–5',
      title: t.sam.tocCh5Title || 'सदस्यों के अधिकार',
      content: (
        <ul className="space-y-3 text-sm sm:text-base text-base-content/80 leading-relaxed ml-4">
          {(t.sam.ch5List || [
            'मतदान का अधिकार (निर्धारित श्रेणी अनुसार)',
            'चुनाव लड़ने का अधिकार (सिर्फ संस्थापक सदस्य, बोर्ड मेंबर और आजीवन सदस्यों के लिए होगा)',
            'सुझाव देने का अधिकार',
            'संगठन की बैठकों में भाग लेने का अधिकार',
            'संगठन की गतिविधियों की जानकारी प्राप्त करने का अधिकार'
          ]).map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'ch6',
      num: t.sam.tocCh6 || 'अध्याय–6',
      title: t.sam.tocCh6Title || 'सदस्यों के कर्तव्य',
      content: (
        <ul className="space-y-3 text-sm sm:text-base text-base-content/80 leading-relaxed ml-4">
          {(t.sam.ch6List || [
            'संविधान का पालन करना।',
            'संगठन की गरिमा बनाए रखना।',
            'सदस्यता शुल्क जमा करना।',
            'सामाजिक सद्भाव बनाए रखना।',
            'भ्रष्टाचार एवं भेदभाव का विरोध करना।'
          ]).map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'ch7',
      num: t.sam.tocCh7 || 'अध्याय–7',
      title: t.sam.tocCh7Title || 'संगठनात्मक संरचना',
      content: (
        <div className="space-y-3 text-sm sm:text-base text-base-content/80">
          <p className="mb-4">{t.sam.ch7Intro || 'संगठन की संरचना निम्न प्रकार होगी (ऊपर से नीचे):'}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {(t.sam.ch7List || ['अंतर्राष्ट्रीय कार्यकारिणी', 'राष्ट्रीय कार्यकारिणी', 'राज्य कार्यकारिणी', 'जिला कार्यकारिणी', 'तहसील/ब्लॉक इकाई', 'ग्राम इकाई']).map((s, i) => (
              <div key={i} className={`px-4 py-2 rounded-xl border font-bold text-xs ${i === 0 ? 'bg-primary/10 border-primary/30 text-primary' : i === 5 ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-base-200 border-base-300'}`}>
                {i + 1}. {s}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ch8',
      num: t.sam.tocCh8 || 'अध्याय–8',
      title: t.sam.tocCh8Title || 'पदाधिकारी',
      content: (
        <div className="text-sm sm:text-base text-base-content/80 leading-relaxed space-y-4">
          <ul className="space-y-2 ml-4">
            {(t.sam.ch8List || ['मुख्य संरक्षक', 'संरक्षक मंडल (संख्या अनिश्चित रहेगी)', 'अंतर्राष्ट्रीय अध्यक्ष', 'अंतर्राष्ट्रीय संयोजक', 'अंतर्राष्ट्रीय प्रभारी', 'अंतर्राष्ट्रीय कोषाध्यक्ष/ सहकोषाध्यक्ष', 'अंतर्राष्ट्रीय संगठन महासचिव', 'अंतर्राष्ट्रीय वरिष्ठ उपाध्यक्ष', 'अंतर्राष्ट्रीय प्रवक्ता (संख्या बढ़ाई जा सकती है)', 'अंतर्राष्ट्रीय प्रचार मंत्री', 'अंतर्राष्ट्रीय संगठन मंत्री', 'अंतर्राष्ट्रीय उपाध्यक्ष', 'अंतर्राष्ट्रीय महासचिव', 'अंतर्राष्ट्रीय सचिव', 'अंतर्राष्ट्रीय मीडिया प्रभारी (संख्या बढ़ाई जा सकती है)', 'सहायक पद', 'अंतर्राष्ट्रीय अनुसंधान एवं नीति प्रकोष्ठ', 'अंतर्राष्ट्रीय विधि प्रकोष्ठ प्रमुख', 'अंतर्राष्ट्रीय महिला प्रकोष्ठ अध्यक्ष', 'अंतर्राष्ट्रीय युवा प्रकोष्ठ अध्यक्ष', 'अंतर्राष्ट्रीय सलाहकार परिषद अध्यक्ष', 'अंतर्राष्ट्रीय किसान कल्याण प्रमुख', 'अंतर्राष्ट्रीय अल्पसंख्यक परिषद/प्रकोष्ठ अध्यक्ष', 'अंतर्राष्ट्रीय सूचना प्रौद्योगिकी प्रकोष्ठ प्रमुख']).map((p, i) => (
              <li key={i} className="list-disc">{p}</li>
            ))}
          </ul>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mt-4">
            <p className="text-xs font-bold text-accent">{t.sam.ch8Note || "* 'एक जैसी' कार्यकारिणी राष्ट्रीय, प्रदेश, मंडल, जिला, तहसील, ब्लॉक और गांव तक होगी। आवश्यकतानुसार अन्य पद सृजित किए जा सकेंगे。"}</p>
          </div>
        </div>
      )
    },
    {
      id: 'ch9',
      num: t.sam.tocCh9 || 'अध्याय–9',
      title: t.sam.tocCh9Title || 'चुनाव',
      content: (
        <ul className="space-y-3 text-sm sm:text-base text-base-content/80 leading-relaxed ml-4">
          {(t.sam.ch9List || [
            'प्रत्येक पदाधिकारी का कार्यकाल 3 वर्ष होगा।',
            'चुनाव लोकतांत्रिक एवं पारदर्शी प्रक्रिया से होंगे।',
            'मतदान प्रत्यक्ष अथवा संगठन द्वारा स्वीकृत प्रक्रिया से कराया जा सकेगा।',
            'मतदान में केवल संस्थापक/बोर्ड एवं आजीवन सदस्य ही हिस्सा ले सकते हैं।'
          ]).map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'ch10',
      num: t.sam.tocCh10 || 'अध्याय–10',
      title: t.sam.tocCh10Title || 'बैठकें',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
          <ul className="space-y-3 ml-4">
            <li className="list-disc"><strong>{t.sam.meet1Title || 'वार्षिक महासभा'}</strong> – {t.sam.meet1Desc || 'वर्ष में एक बार।'}</li>
            <li className="list-disc"><strong>{t.sam.meet2Title || 'कार्यकारिणी बैठक'}</strong> – {t.sam.meet2Desc || 'प्रत्येक तीन माह में।'}</li>
            <li className="list-disc"><strong>{t.sam.meet3Title || 'आपात बैठक'}</strong> – {t.sam.meet3Desc || 'आवश्यकता अनुसार।'}</li>
          </ul>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-primary">{t.sam.meetNote || "राष्ट्र/प्रदेश/प्रांत/मंडल/जिला/तहसील/ब्लॉक ओर गांव की बैठक हर महीने होगी। जिसकी करने की जिम्मेदारी संबंधित अध्यक्ष, संयोजक और प्रभारी की होगी。"}</p>
          </div>
        </div>
      )
    },
    {
      id: 'ch11',
      num: t.sam.tocCh11 || 'अध्याय–11',
      title: t.sam.tocCh11Title || 'वित्त',
      content: (
        <div className="text-sm sm:text-base text-base-content/80 leading-relaxed">
          <p className="mb-3 font-bold text-base-content">{t.sam.finTitle || 'आय के स्रोत:'}</p>
          <ul className="space-y-2 ml-4 mb-4">
            {(t.sam.finList || ['सदस्यता शुल्क', 'स्वैच्छिक सहयोग', 'वैध दान', 'प्रकाशन एवं प्रशिक्षण कार्यक्रम']).map((item, i) => (
              <li key={i} className="list-disc">{item}</li>
            ))}
          </ul>
          <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4">
            <p className="text-xs font-bold text-secondary">{t.sam.finNote || '* सभी आय-व्यय का लेखा-जोखा पारदर्शी रूप से रखा जाएगा।'}</p>
          </div>
        </div>
      )
    },
    {
      id: 'ch12',
      num: t.sam.tocCh12 || 'अध्याय–12',
      title: t.sam.tocCh12Title || 'अनुशासन',
      content: (
        <div className="text-sm sm:text-base text-base-content/80 leading-relaxed">
          <p className="mb-3">{t.sam.discIntro || 'यदि कोई सदस्य—'}</p>
          <ul className="space-y-2 ml-4 mb-4 text-red-400/80">
            {(t.sam.discList || [
              'संगठन विरोधी गतिविधि करे।',
              'भ्रष्टाचार में लिप्त हो।',
              'जातीय, धार्मिक या सामाजिक विद्वेष फैलाए।',
              'संविधान का उल्लंघन करे।'
            ]).map((item, i) => (
              <li key={i} className="list-disc">{item}</li>
            ))}
          </ul>
          <p>{t.sam.discOutro || 'तो उसे कारण बताओ नोटिस देकर अनुशासनात्मक कार्रवाई की जा सकेगी।'}</p>
        </div>
      )
    },
    {
      id: 'ch13',
      num: t.sam.tocCh13 || 'अध्याय–13',
      title: t.sam.tocCh13Title || 'संशोधन',
      content: (
        <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
          {t.sam.amendText || 'संविधान में संशोधन संस्थापक एवं आजीवन सदस्यों के'} <strong className="text-base-content">{t.sam.amendBold || 'दो-तिहाई बहुमत'}</strong> {t.sam.amendTextEnd || 'से किया जा सकेगा।'}
        </p>
      )
    },
    {
      id: 'ch14',
      num: t.sam.tocCh14 || 'अध्याय–14',
      title: t.sam.tocCh14Title || 'विघटन',
      content: (
        <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
          {t.sam.dissolveText || 'संगठन का विघटन केवल विशेष महासभा (बोर्ड मेंबर) में उपस्थित सदस्यों के'} <strong className="text-base-content">{t.sam.dissolveBold || 'कम से कम दो तिहाई बहुमत'}</strong> {t.sam.dissolveTextEnd || 'से ही किया जा सकेगा।'}
        </p>
      )
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden pb-16 bg-base-100">

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Hero Header */}
        <div className="relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl mb-10">
          <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&h=500&q=80)', filter: 'blur(10px) brightness(0.25)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-base-900/90 via-base-900/80 to-base-900/95"></div>
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-l-[2rem]"></div>
          
          <div className="relative z-10 p-8 sm:p-14 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <span className="text-2xl">⚖️</span>
              <span className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase">{t.sam.heroBadge || 'Official Document'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 leading-[1.15] mb-4">
              {t.sam.heroTitle || 'संविधान'} <span className="text-accent">({t.sam.heroSub || 'प्रारूप'})</span>
            </h1>
            <p className="text-base text-slate-300  mb-6 italic opacity-80">{t.sam.heroOrg || 'अंतर्राष्ट्रीय किसान यूनियन™️'}</p>
            <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-2.5 max-w-2xl">
              <p className="text-xs text-slate-300 leading-relaxed">{t.sam.heroNote || '*पंजीकृत या सदस्य देशों के अनुसार हर देश में संविधान भिन्न हो सकता है'}</p>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sticky Sidebar TOC (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-8 bg-base-200/40 backdrop-blur-sm border border-base-300 rounded-2xl p-6 shadow-lg">
              <h3 className="text-sm font-black mb-4 tracking-wide text-base-content/50 uppercase">{t.sam.tocTitle || 'विषय सूची'}</h3>
              <div className="space-y-1">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => scrollToChapter(ch.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                      activeChapter === ch.id 
                        ? 'bg-primary text-primary-content shadow-md' 
                        : 'text-base-content/60 hover:bg-base-100 hover:text-base-content'
                    }`}
                  >
                    <span className="opacity-60 truncate">{ch.num}</span>
                    <span className="truncate">{ch.title}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-base-300 pt-6">
                <button onClick={handlePrint} className="btn btn-sm btn-outline border-base-300 w-full gap-2 font-bold">{t.sam.printBtn || '🖨️ प्रिंट करें'}</button>
                <Link to="/" className="btn btn-sm btn-ghost w-full gap-2 font-semibold text-base-content/50">{t.sam.homeBtn || '← होम पर जाएं'}</Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">
            
            {/* Mobile TOC */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  className={`whitespace-nowrap shrink-0 px-3 py-2 rounded-lg text-[10px] font-bold border transition-all ${
                    activeChapter === ch.id ? 'bg-primary text-primary-content border-primary' : 'border-base-300 text-base-content/60 hover:bg-base-200'
                  }`}
                >
                  {ch.num}
                </button>
              ))}
            </div>

            {/* Accordion Chapters */}
            {chapters.map((ch, index) => (
              <div key={ch.id} id={ch.id} className="scroll-mt-4 collapse collapse-arrow bg-base-200/50 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <input type="radio" name="samvidhan-accordion" defaultChecked={index === 0} onChange={() => setActiveChapter(ch.id)} />
                <div className="collapse-title text-sm sm:text-base font-black py-4 px-6 flex items-center justify-between">
                  <span><span className="text-primary mr-2">{ch.num}:</span>{ch.title}</span>
                </div>
                <div className="collapse-content px-6 pb-6">{ch.content}</div>
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="lg:hidden flex gap-3 pt-4">
              <button onClick={handlePrint} className="btn btn-sm btn-outline border-base-300 flex-1 gap-2 font-bold">{t.sam.printBtn || '🖨️ प्रिंट करें'}</button>
              <Link to="/" className="btn btn-sm btn-ghost flex-1 gap-2 font-semibold text-base-content/50">{t.sam.homeBtn || '← होम पर जाएं'}</Link>
            </div>
          </div>
        </div>

        {/* Final Footer */}
        <div className="mt-16 relative rounded-[2rem] overflow-hidden border border-base-300 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-base-900/95 via-base-900/90 to-base-900/95"></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 p-8 sm:p-14 text-center space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-2xl mb-3 opacity-40">⚖️</div>
                <div className="text-[10px] text-base-400 uppercase tracking-widest mb-2 font-bold">{t.sam.mottoLabel || 'ध्येय वाक्य'}</div>
                <p className="text-xl font-black text-base-400 tracking-wider">{t.sam.motto || 'एकता • समानता • न्याय • मानवता'}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-2xl mb-3 opacity-40">📢</div>
                <div className="text-[10px] text-base-400 uppercase tracking-widest mb-2 font-bold">{t.sam.sloganLabel || 'मूल मंत्र'}</div>
                <p className="text-xl font-black text-accent tracking-wider">{t.sam.slogan || 'जय जवान • जय किसान'}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-2xl mb-3 opacity-40">✊</div>
                <div className="text-[10px] text-base-400 uppercase tracking-widest mb-2 font-bold">{t.sam.pledgeLabel || 'संकल्प'}</div>
                <p className="text-sm font-bold text-base-400 leading-relaxed">{t.sam.pledge || '"विश्व के किसानों, मजदूरों, श्रमिकों, दलितों, आदिवासियों एवं वंचित समाज के सम्मान, अधिकार और समृद्धि के लिए संगठित रहेंगे।"'}</p>
              </div>
            </div>
            <div className="text-[11px] text-base-500 pt-4">{t.sam.footerLoc || 'अंतर्राष्ट्रीय किसान यूनियन™️ | विलेज भराला, मेरठ, उत्तर प्रदेश — 250221'}</div>
          </div>
        </div>

      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        ::selection { background: rgba(234, 88, 12, 0.2); }
        @media print {
          .no-print { display: none !important; }
          .collapse-content { max-height: none !important; overflow: visible !important; }
        }
      `}</style>
    </div>
  )
}

export default Samvidhan