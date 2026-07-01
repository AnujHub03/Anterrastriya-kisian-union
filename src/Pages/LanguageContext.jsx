import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("hi");

  const dictionary = {
    hi: {
      navbar: {
        brand: "किसान यूनियन",
        home: "मुख्य पृष्ठ",
        team: "टीम और नेतृत्व",
        membership: "सदस्यता",
        events: "गतिविधियाँ",
        idCard: "पहचान पत्र",
        issues: "चुनौतियां",
        blog: "ब्लॉग",
        gallery: "गैलरी",
        downloads: "डाउनलोड",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        login: "लॉगिन",
        more: "और देखें",
      },
      home: {
        stage: "अंतर्राष्ट्रीय मंच",
        brand: "अंतर्राष्ट्रीय किसान यूनियन",
        motto: '"समानता - न्याय एवं मानवता"',
        desc: "हम विश्व के किसान और वंचित वर्ग, अपनी आर्थिक-सामाजिक स्थिति सुधारने, कृषि को लाभकारी बनाने और शोषित वर्ग के हितों की रक्षा के लिए पूरी तरह प्रतिबद्ध हैं।",
        joinBtn: "जुड़ें (Join Us)",
        manifestoBtn: "घोषणापत्र पढ़ें",
        stat1Title: "खाद्यान्न सुरक्षा सहायता",
        stat1Value: "80 करोड़+",
        stat1Desc: "भारत में सरकार द्वारा भोजन सहायता प्राप्त नागरिक",
        stat2Title: "वैश्विक किसान चेतना",
        stat2Value: "वैश्विक मंच",
        stat2Desc:
          "फ़्रांस, जर्मनी, ऑस्ट्रेलिया, म्यामार और अफ़्रीका आंदोलनों का एकीकरण",
        stat3Title: "मुख्य प्रशासनिक केंद्र",
        stat3Value: "मेरठ, UP",
        stat3Desc: "भारत में स्थित मुख्य वैश्विक कार्यालय",
        // Pillars Section
        pillarsBadge: "मूल स्तंभ",
        pillarsTitle: "हम किसके लिए खड़े हैं",
        pillarsDesc:
          "हमारा आंदोलन उन मूलभूत सिद्धांतों पर बना है जो हर निर्णय और कार्रवाई का मार्गदर्शन करते हैं।",
        pillar1Title: "न्याय",
        pillar1Desc: "समाज के हर स्तर पर निष्पक्षता और जवाबदेही का पालन करना।",
        pillar2Title: "एकता",
        pillar2Desc: "लोगों को विभाजनों के पार लाकर आम धरातल बनाना।",
        pillar3Title: "सततता",
        pillar3Desc:
          "हमारे ग्रह की रक्षा करना और भावी पीढ़ियों के लिए संसाधन सुनिश्चित करना।",
        pillar4Title: "नवाचार",
        pillar4Desc:
          "लगातार चुनौतियों को हल करने के लिए नए विचारों और तकनीक को अपनाना।",

        // Take Action Section
        actionBadge: "कार्रवाई करें",
        actionTitle: "आप अंतर कैसे ला सकते हैं",
        actionDesc:
          "हर महान आंदोलन सामान्य लोगों के कार्रवाई करने के फैसले से शुरू होता है। यहाँ बताया गया है कि आज आप कैसे जुड़ सकते हैं।",
        step1Title: "साइन अप करें",
        step1Desc:
          "अपनी प्रोफ़ाइल बनाएं और दुनिया भर के परिवर्तनकारियों के बढ़ते नेटवर्क से जुड़ें।",
        step2Title: "जुड़ें",
        step2Desc:
          "स्थानीय शाखाएं खोजें, कार्यक्रमों में भाग लें, और अपने क्षेत्र में समान विचारधारा वाले लोगों के साथ सहयोग करें।",
        step3Title: "संगठित हों",
        step3Desc:
          "अभियानों में भाग लें, पहल शुरू करें, और अपने समुदाय में वास्तविक प्रभाव डालें।",
        actionBtn: "अभी शुरू करें",

        // Voices Section
        voicesBadge: "आवाज़ें",
        voicesTitle: "हमारे समुदाय से सुनें",
        voicesDesc: "इस आंदोलन का हिस्सा वास्तविक लोगों की वास्तविक कहानियां।",
        voice1Name: "सारा एम.",
        voice1Role: "सामुदायिक आयोजक",
        voice1Quote:
          "इस आंदोलन से जुड़ने ने मुझे एक उद्देश्य और एक ऐसा समुदाय दिया जो वास्तव में भविष्य की परवाह करता है।",
        voice2Name: "डेविड के.",
        voice2Role: "स्वयंसेवक नेता",
        voice2Quote:
          "मैंने स्वयं देखा है कि सामूहिक कार्रवाई पड़ोस और जीवन को कैसे बदल सकती है।",
        voice3Name: "अमीरा एच.",
        voice3Role: "युवा राजदूत",
        voice3Quote:
          "एक युवा के रूप में, मुझे आखिरकार ऐसा महसूस होता है कि मेरी आवाज़ मायने रखती है और मेरे काम बदलाव लाते हैं।",

        // CTA Banner
        ctaTitle: "क्या आप कुछ बड़े का हिस्सा बनने के लिए तैयार हैं?",
        ctaDesc:
          "हजारों लोग पहला कदम उठा चुके हैं। आपकी आवाज़, आपकी ऊर्जा, और आपकी प्रतिबद्धता एक बेहतर कल को आकार दे सकती है।",
        ctaJoinBtn: "आंदोलन से जुड़ें",
        ctaShareBtn: "यह पेज साझा करें",

        // Allies Section
        alliesBadge: "हमारे सहयोगी",
        alliesTitle: "विश्वसनीय भागीदार और सहयोगी",
        alliesDesc:
          "हम उन संगठनों के साथ सहयोग करते हैं जो एक बेहतर दुनिया के लिए हमारे विज़न को साझा करते हैं।",
        ally1: "भागीदार 1",
        ally2: "भागीदार 2",
        ally3: "भागीदार 3",
        ally4: "भागीदार 4",
        ally5: "भागीदार 5",
        ally6: "भागीदार 6",

        // Events
        eventsBadge: "आगामी",
        eventsTitle: "कार्यक्रम और एकत्रीकरण",
        eventsDesc:
          "जुड़ने, सीखने और साथ मिलकर कार्रवाई करने के लिए आगामी कार्यक्रमों में शामिल हों।",
        ev1Date: "15 अगस्त, 2025",
        ev1Title: "राष्ट्रीय एकता रैली",
        ev1Loc: "सेंट्रल पार्क, नई दिल्ली",
        ev1Type: "रैली",
        ev2Date: "5 सितंबर, 2025",
        ev2Title: "युवा नेतृत्व कार्यशाला",
        ev2Loc: "वर्चुअल — ज़ूम",
        ev2Type: "कार्यशाला",
        ev3Date: "2 अक्टूबर, 2025",
        ev3Title: "नीति चर्चा मंच",
        ev3Loc: "कन्वेंशन हॉल, मुंबई",
        ev3Type: "मंच",
        eventsBtn: "सभी कार्यक्रम देखें",

        // FAQ
        faqBadge: "सवाल-जवाब",
        faqTitle: "अक्सर पूछे जाने वाले सवाल",
        faqDesc:
          "कोई सवाल है? हमारे पास जवाब हैं। यहाँ वे बातें हैं जो लोग सबसे अधिक पूछते हैं।",
        faq1Q: "मैं आंदोलन से कैसे जुड़ सकता/सकती हूँ?",
        faq1A:
          "बस जुड़ें बटन पर क्लिक करें और पंजीकरण फ़ॉर्म भरें। इसमें एक मिनट से भी कम समय लगता है और आप अपने निकटतम अध्याय से जुड़ जाएंगे।",
        faq2Q: "क्या कोई सदस्यता शुल्क है?",
        faq2A:
          "नहीं। हमारा आंदोलन पूरी तरह मुफ्त है। हम मानते हैं कि पैसा भागीदारी में कभी बाधा नहीं होना चाहिए।",
        faq3Q: "क्या मैं अपने शहर में स्थानीय अध्याय शुरू कर सकता/सकती हूँ?",
        faq3A:
          "बिल्कुल। एक बार जब आप सदस्य बन जाते हैं, तो आप अध्याय लीडर बनने के लिए आवेदन कर सकते हैं। हम प्रशिक्षण, संसाधन और निरंतर सहायता प्रदान करते हैं।",
        faq4Q: "अध्याय किस तरह की गतिविधियाँ आयोजित करते हैं?",
        faq4A:
          "अध्याय स्थानीय जरूरतों के अनुसार सामुदायिक सफाई, जागरूकता अभियान, नीति चर्चा, कार्यशालाएं और सांस्कृतिक कार्यक्रम आयोजित करते हैं।",
        faq5Q: "संगठन को धन कहाँ से मिलता है?",
        faq5A:
          "हम समर्थकों से स्वैच्छिक दान और संरेखित फाउंडेशनों से छोटे अनुदानों के माध्यम से वित्त पोषित हैं। हम पूर्ण वित्तीय पारदर्शिता बनाए रखते हैं।",

        // Resources
        resourcesBadge: "संसाधन",
        resourcesTitle: "डाउनलोड करें और साझा करें",
        resourcesDesc:
          "संदेश को फैलाने के लिए हमारे प्रणय, रिपोर्ट, टूलकिट और गाइड तक पहुँचें।",
        res1: "आंदोलन प्रणय 2025",
        resTag1: "PDF",
        res2: "वार्षिक प्रभाव रिपोर्ट",
        resTag2: "PDF",
        res3: "अध्याय प्रारंभ किट",
        resTag3: "टूलकिट",
        res4: "स्वयंसेवक हैंडबुक",
        resTag4: "गाइड",
        resDownload: "डाउनलोड",

        // Newsletter
        newsletterTitle: "जुड़े रहें",
        newsletterDesc:
          "साप्ताहिक अपडेट, कार्यक्रम घोषणाओं और मैदान से कहानियों के लिए हमारे न्यूज़लेटर की सदस्यता लें।",
        newsletterPlaceholder: "अपना ईमेल दर्ज करें",
        newsletterBtn: "सदस्यता लें",
        newsletterNote:
          "हम आपकी गोपनीयता का सम्मान करते हैं। कभी भी सदस्यता रद्द करें।",
      },
      membership: {
        title: "यूनियन सदस्यता",
        subtitle:
          '"हम दुनिया भर के छोटे, महिला और आदिवासी किसानों को सशक्त, संगठित और समान स्थान पर लाना चाहते हैं।"',
        tabApply: "📝 आवेदन करें",
        tabDirectory: "👥 सदस्य सूची",
        tabDashboard: "📊 डैशबोर्ड",
        labelName: "किसान का पूरा नाम (Full Name)",
        placeholderName: "अपना नाम दर्ज करें",
        labelMobile: "मोबाइल नंबर (Mobile)",
        labelLand: "कृषि क्षेत्र आकार (Land Holding)",
        selectOptionDefault: "चुनें",
        selectOptionSmall: "छोटे किसान (< 1 हेक्टेयर)",
        selectOptionMedium: "मध्यम किसान (1 - 4 हेक्टेयर)",
        selectOptionOther: "अन्य / कृषि श्रमिक",
        labelLocation: "राज्य / जिला (State & District)",
        placeholderLocation: "उदा. मेरठ, उत्तर प्रदेश",
        labelState: "राज्य",
        labelCity: "शहर / जिला",
        submitBtn: "सदस्यता के लिए आवेदन सबमिट करें",
        footerNote:
          "* अंतर्राष्ट्रीय किसान यूनियन एक पूर्णतः गैर-राजनीतिक एवं स्वतंत्र संगठन है।",
        searchPlaceholder: "नाम, शहर या राज्य से खोजें...",
        filterState: "राज्य फ़िल्टर",
        allStates: "सभी राज्य",
        statusApproved: "अनुमोदित",
        statusPending: "प्रतीक्षारत",
        btnApprove: "✅ अनुमोदित",
        btnReject: "❌ अस्वीकार",
        totalMembers: "कुल सदस्य",
        pendingApprovals: "लंबित अनुमोदन",
        approvedThisMonth: "इस माह अनुमोदित",
        statesRepresented: "राज्य प्रतिनिधित्व",
        noMembers: "कोई सदस्य नहीं मिला।",
        successMsg: "✅ आवेदन सफलतापूर्वक जमा किया गया! हम जल्द संपर्क करेंगे।",
      },
      idCard: {
        pageTitle: "डिजिटल पहचान पत्र जनरेटर",
        pageSubtitle:
          "केंद्रित विवरण एवं कॉम्पैक्ट क्यूआर कोड के साथ आधिकारिक पहचान पत्र।",
        formHeading: "📋 विवरण दर्ज करें",
        labelName: "पूरा नाम (Full Name)",
        placeholderName: "नाम दर्ज करें",
        labelMobile: "मोबाइल नंबर (Mobile)",
        labelLocation: "स्थान (State & District)",
        placeholderLocation: "उदा. मेरठ, उत्तर प्रदेश",
        labelDesignation: "यूनियन पद / श्रेणी (Designation)",
        labelPhoto: "पासपोर्ट फोटो (Profile Picture)",
        btnNewId: "नया ID नंबर बनाएं",
        btnPrint: "🖨️ प्रिंट / डाउनलोड ID",
        previewTitle: "Live Identity Card Preview",
        cardBrand: "अंतर्राष्ट्रीय किसान यूनियन",
        cardMotto: '"समानता - न्याय एवं मानवता"',
        noPhoto: "NO PHOTO",
        cardName: "नाम / Name",
        cardIdNo: "आईडी संख्या / ID No",
        cardMobile: "मोब / Mobile",
        cardPlace: "स्थान / Place",
        cardFooterOffice: "मुख्य कार्यालय: मेरठ (उत्तर प्रदेश), भारत",
      },
      issues: {
        title: "क्या किसानों को खत्म करके जमीन हड़पना चाहती है सरकार?",
        warning:
          "वैश्विक वित्तीय संस्थाओं एवं पूंजीपतियों की नियत का एक विश्लेषणात्मक विवरण।",
        badge1: "बाजार मूल्य का खेल (3X Price Trap)",
        card1Title: "लागत बनाम उपभोक्ता मूल्य",
        card1Body:
          "यदि रासायनिक खाद, बीज, पानी, जुताई, कृषि श्रम, और कीटनाशक का कुल योग किया जाए तो किसानों को समर्थन मूल्य (MSP) के रूप में कुछ भी प्राप्त नहीं होता। जैसे ही कृषि उत्पाद बाजार या कारखानों के माध्यम से उपभोक्ता तक पहुंचता है, उसका मूल्य खेत के उत्पाद मूल्य की तुलना में तीन गुना (3x) तक बढ़ जाता है।",
        badge2: "आय में भारी असमानता",
        card2Title: "कर्मचारी बनाम 1 हेक्टेयर किसान",
        card2Body:
          "आज के समय में सबसे छोटे सरकारी कर्मचारी का न्यूनतम वेतन भी ₹25,000 महीने हो चुका है। इसके विपरीत, एक हेक्टेयर जमीन का मालिक किसान अपनी दिन-रात की मेहनत और पूरी पूंजी लगाने के बाद भी ₹2,000 महीना शुद्ध मुनाफा नहीं बचा पाता।",
        footerAlertTitle: "वैश्विक संस्थागत चुनौती:",
        footerAlertBody:
          "विश्वव्यापी किसान समस्याओं के पीछे विश्व बैंक (World Bank) और अंतरराष्ट्रीय मुद्राकोश (IMF) जैसी वित्तीय संस्थाएं जिम्मेदार हैं, जो कथित रूप से जनकल्याणकारी योजनाएं बनाकर खाद्य व्यवस्था को हथियार की तरह उपयोग कर रही हैं।",
      },
      about: {
        preambleTitle: "प्रस्तावना (Preamble)",
        preambleBody:
          "यह संघ किसी राजनीतिक दल से नहीं जुड़ेगा और केवल किसान मुद्दों, सामाजिक विषयों ओर वंचित वर्ग के लिए काम करेगा। हम, विश्व के किसान ओर वंचित वर्ग, अपनी आर्थिक-सामाजिक स्थिति सुधारने, कृषि को लाभकारी बनाने और किसानों ओर शोषित वर्ग के हितों की रक्षा के लिए इस गैर-राजनीतिक संगठन का गठन करते हैं।",
        scopeHeading: "📍 नाम और कार्यक्षेत्र",
        labelName: "नाम:",
        valueName: "अंतर्राष्ट्रीय किसान यूनियन",
        labelScope: "कार्यक्षेत्र:",
        valueScope: "सम्पूर्ण विश्व (Global)",
        labelOffice: "मुख्य कार्यालय:",
        valueOffice: "मेरठ (उत्तर प्रदेश), भारत",
        resolutionHeading: "🌱 हमारे मुख्य संकल्प",
        res1: "किसानों को तकनीकी, कानूनी और बाजार की सही जानकारी प्रदान करना।",
        res2Bold: "कर्ज माफी नहीं, बल्कि स्थाई कर्ज मुक्ति",
        res2Text: " के लिए ठोस नीति सुझाना।",
        res3: "पारंपरिक और पूर्णतः जैविक खेती (Organic Farming) को बढ़ावा देना।",
      },
      news: {
        title: "नवीनतम समाचार एवं कृषि चेतना",
        subtitle:
          "स्वचालित रूप से अपडेट होने वाली वैश्विक एवं क्षेत्रीय कृषि क्षेत्र की महत्वपूर्ण सूचनाएं।",
        btnFetch: "🔄 नए समाचार सिंक करें",
        filterAll: "सभी समाचार",
        filterUrgent: "🚨 आपातकालीन",
        filterTech: "🌱 एग्री-टेक",
        filterPolicy: "⚖️ नीति और व्यापार",
        badgeUrgent: "आपातकालीन",
        badgePinned: "पिन किया गया",
        noNews: "इस श्रेणी में कोई समाचार उपलब्ध नहीं है।",
        formTitle: "📝 नया लेख जोड़ें",
        inputTitle: "शीर्षक / Headline",
        inputCategory: "श्रेणी / Category",
        inputContent: "मुख्य समाचार विवरण / Content",
        toggleUrgent: "आपातकालीन अलर्ट है?",
        btnSubmit: "समाचार प्रकाशित करें",
        toastFetched: "ताजा कृषि समाचार डेटाबेस से सिंक कर दिया गया है!",
        toastAdded: "नया समाचार सफलतापूर्वक लाइव कर दिया गया है!",
      },
      leadership: {
        title: "नेतृत्व एवं प्रशासनिक संगठन मंडल",
        subtitle:
          "राज्य, जिला और नगर स्तर के आधिकारिक प्रमुखों की निर्देशिका एवं संपर्क विवरण।",
        filterAll: "सभी स्तर",
        filterState: "🏛️ राज्य प्रमुख",
        filterDistrict: "🚜 जिला प्रमुख",
        filterCity: "🏙️ नगर प्रमुख",
        searchPlaceholder: "नाम या क्षेत्र से खोजें...",
        responsibilities: "मुख्य जिम्मेदारियां",
        btnContact: "📞 संपर्क करें",
        btnEmail: "✉️ ईमेल",
        noRecords: "खोजे गए मानदंड के अनुसार कोई नेतृत्व प्रोफ़ाइल नहीं मिली।",
        scopeLabel: "प्रशासनिक क्षेत्र",
        joinedLabel: "कार्यकाल प्रारंभ",
      },
      activities: {
        title: "गतिविधियाँ और कार्यक्रम",
        subtitle:
          "किसान रैलियाँ, बैठकें, कार्यशालाएं और किसान गतिविधियों की झलकियाँ।",
        tabEvents: "📅 कार्यक्रम",
        tabPhotos: "📷 फोटो",
        tabVideos: "🎥 वीडियो",
        formTitle: " नया कार्यक्रम जोड़ें",
        labelTitle: "कार्यक्रम का नाम",
        labelDate: "तारीख",
        labelLocation: "स्थान",
        labelType: "प्रकार",
        labelDesc: "विवरण",
        btnAdd: "जोड़ें",
        typeRally: "रैली",
        typeMeeting: "बैठक",
        typeWorkshop: "कार्यशाला",
        upcoming: "🗓️ आगामी कार्यक्रम",
        past: "✅ पूर्व कार्यक्रम",
        uploadPhoto: "📷 फोटो अपलोड करें",
        labelCaption: "कैप्शन",
        btnUpload: "अपलोड करें",
        addVideoLink: "🔗 वीडियो लिंक जोड़ें",
        labelVideoTitle: "वीडियो शीर्षक",
        labelVideoUrl: "YouTube URL",
        btnAddVideo: "वीडियो जोड़ें",
        noEvents: "कोई कार्यक्रम उपलब्ध नहीं।",
        noPhotos: "कोई फोटो उपलब्ध नहीं।",
        noVideos: "कोई वीडियो उपलब्ध नहीं।",
      },
      blog: {
        title: "ब्लॉग और लेख",
        subtitle: "किसान मुद्दों पर विचार, विश्लेषण और जागरूकता लेख।",
        formTitle: "📝 नया ब्लॉग लिखें",
        labelTitle: "शीर्षक",
        labelAuthor: "लेखक का नाम",
        labelCategory: "श्रेणी",
        labelContent: "लेख सामग्री",
        btnPublish: "प्रकाशित करें",
        readMore: "पूरा पढ़ें ›",
        readLess: "← वापस",
        share: "📤 शेयर",
        minRead: "मिनट",
        catPolicy: "नीति",
        catFarming: "खेती",
        catWelfare: "कल्याण",
        catAwareness: "जागरूकता",
        noPosts: "कोई ब्लॉग पोस्ट उपलब्ध नहीं।",
        toastAdded: "नई ब्लॉग पोस्ट प्रकाशित की गई!",
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "हमसे जुड़ें — आपके सवाल और सुझाव हमारे लिए महत्वपूर्ण हैं।",
        formTitle: "✉️ संदेश भेजें",
        labelName: "आपका नाम",
        labelEmail: "ईमेल पता",
        labelPhone: "मोबाइल नंबर",
        labelSubject: "विषय",
        labelMessage: "संदेश लिखें",
        btnSend: "संदेश भेजें",
        officeTitle: "🏢 मुख्य कार्यालय",
        address: "मेरठ, उत्तर प्रदेश, भारत",
        emailLabel: "ईमेल",
        phoneLabel: "फोन",
        hoursLabel: "कार्यालय समय",
        hours: "सोम–शनि: 9 AM – 6 PM",
        successMsg:
          "✅ आपका संदेश सफलतापूर्वक भेजा गया! हम जल्द संपर्क करेंगे।",
        whatsapp: "💬 WhatsApp पर संपर्क करें",
        socialTitle: "🌐 सोशल मीडिया",
      },
      gallery: {
        title: "फोटो और वीडियो गैलरी",
        subtitle:
          "किसान रैलियों, कार्यक्रमों और गतिविधियों की तस्वीरें और वीडियो।",
        tabPhotos: "📷 फोटो गैलरी",
        tabVideos: "🎥 वीडियो गैलरी",
        uploadPhoto: "📷 फोटो अपलोड करें",
        labelCaption: "कैप्शन",
        btnUpload: "अपलोड करें",
        addVideoLink: "🔗 वीडियो जोड़ें",
        labelVideoTitle: "वीडियो शीर्षक",
        labelVideoUrl: "YouTube / Video URL",
        btnAdd: "जोड़ें",
        noPhotos: "अभी तक कोई फोटो अपलोड नहीं की गई।",
        noVideos: "अभी तक कोई वीडियो नहीं जोड़ा गया।",
        close: "✕ बंद करें",
      },
      downloads: {
        title: "📥 डाउनलोड केंद्र",
        subtitle:
          "यूनियन के नोटिस, घोषणापत्र, फॉर्म और महत्वपूर्ण दस्तावेज़ यहाँ से डाउनलोड करें।",
        btnDownload: "⬇️ डाउनलोड",
        filterAll: "सभी",
        filterNotice: "📢 नोटिस",
        filterForm: "📋 फॉर्म",
        filterManifesto: "📜 घोषणापत्र",
        filterCircular: "🔔 परिपत्र",
        sizeLabel: "आकार",
        dateLabel: "दिनांक",
        noFiles: "कोई दस्तावेज़ उपलब्ध नहीं।",
      },
      footer: {
        tagline: '"समानता - न्याय एवं मानवता"',
        desc: "अंतर्राष्ट्रीय किसान यूनियन — विश्व के किसानों और वंचित वर्ग के अधिकारों के लिए प्रतिबद्ध।",
        quickLinks: "त्वरित लिंक",
        contactInfo: "संपर्क जानकारी",
        followUs: "हमें फॉलो करें",
        rights: "© 2026 अंतर्राष्ट्रीय किसान यूनियन। सर्वाधिकार सुरक्षित।",
        privacyPolicy: "गोपनीयता नीति",
        terms: "नियम एवं शर्तें",
        madeWith: "❤️ विश्व के किसानों के लिए बनाया गया",
      },
      announcement: {
        text: "🌾 नई घोषणा: अंतर्राष्ट्रीय किसान सम्मेलन 2026 — मेरठ, 15 जुलाई | सदस्यता अभियान शुरू | अभी जुड़ें!",
        close: "✕",
      },
      privacy: {
        title: "गोपनीयता नीति",
        lastUpdated: "अंतिम अपडेट: जून 2026",
        sections: [
          {
            heading: "1. जानकारी का संग्रह",
            body: "हम आपकी व्यक्तिगत जानकारी (नाम, मोबाइल, पता) केवल सदस्यता प्रक्रिया और यूनियन संचालन के लिए एकत्र करते हैं।",
          },
          {
            heading: "2. जानकारी का उपयोग",
            body: "एकत्र की गई जानकारी का उपयोग केवल सदस्य पहचान, संचार और यूनियन की गतिविधियों के लिए किया जाएगा। इसे किसी तृतीय पक्ष को नहीं बेचा जाएगा।",
          },
          {
            heading: "3. डेटा सुरक्षा",
            body: "हम आपकी जानकारी को सुरक्षित रखने के लिए उचित तकनीकी उपाय अपनाते हैं। हमारी वेबसाइट SSL सुरक्षा से लैस है।",
          },
          {
            heading: "4. कुकीज़",
            body: "हमारी वेबसाइट बेहतर उपयोगकर्ता अनुभव के लिए कुकीज़ का उपयोग करती है। आप अपने ब्राउज़र सेटिंग से इसे नियंत्रित कर सकते हैं।",
          },
          {
            heading: "5. आपके अधिकार",
            body: "आप किसी भी समय अपनी जानकारी की समीक्षा, संशोधन या हटाने का अनुरोध कर सकते हैं। संपर्क: info@anterrastriyakisanunion.com",
          },
        ],
      },
      terms: {
        title: "नियम एवं शर्तें",
        lastUpdated: "अंतिम अपडेट: जून 2026",
        sections: [
          {
            heading: "1. वेबसाइट उपयोग",
            body: "इस वेबसाइट का उपयोग करके आप इन नियमों से सहमत होते हैं। यह वेबसाइट केवल जानकारी और सदस्यता प्रक्रिया के लिए है।",
          },
          {
            heading: "2. सदस्यता शर्तें",
            body: "सदस्यता के लिए आवेदनकर्ता को सही जानकारी प्रदान करनी होगी। गलत जानकारी देने पर सदस्यता रद्द की जा सकती है।",
          },
          {
            heading: "3. बौद्धिक संपदा",
            body: "इस वेबसाइट पर सभी सामग्री, लोगो और डिजाइन अंतर्राष्ट्रीय किसान यूनियन की संपत्ति है। बिना अनुमति के उपयोग वर्जित है।",
          },
          {
            heading: "4. सामग्री की सटीकता",
            body: "हम सटीक जानकारी प्रदान करने का प्रयास करते हैं, लेकिन किसी भी त्रुटि के लिए हम उत्तरदायी नहीं हैं।",
          },
          {
            heading: "5. परिवर्तन का अधिकार",
            body: "यूनियन किसी भी समय इन नियमों को बिना पूर्व सूचना के बदल सकती है। नवीनतम संस्करण वेबसाइट पर प्रकाशित रहेगा।",
          },
        ],
      },
    },
    en: {
      navbar: {
        brand: "Kisan Union",
        home: "Home",
        team: "Team & Leadership",
        membership: "Membership",
        events: "Activities",
        idCard: "ID Card",
        issues: "Issues",
        blog: "Blog",
        gallery: "Gallery",
        downloads: "Downloads",
        about: "About",
        contact: "Contact",
        login: "Login",
        more: "More",
      },
      home: {
        stage: "International Platform",
        brand: "International Farmers Union",
        motto: '"Equality - Justice & Humanity"',
        desc: "We, the farmers and marginalized communities of the world, are fully committed to improving our socio-economic status, making agriculture profitable, and protecting the interests of the exploited classes.",
        joinBtn: "Join Us",
        manifestoBtn: "Read Manifesto",
        stat1Title: "Food Security Aid",
        stat1Value: "800 Million+",
        stat1Desc:
          "Citizens receiving food assistance from the government in India",
        stat2Title: "Global Farmer Awakening",
        stat2Value: "Global Stage",
        stat2Desc:
          "Integration of movements across France, Germany, Australia, Myanmar, and Africa",
        stat3Title: "Main Administrative Hub",
        stat3Value: "Meerut, UP",
        stat3Desc: "Primary global office located in India",
        // Pillars Section
        pillarsBadge: "CORE PILLARS",
        pillarsTitle: "What We Stand For",
        pillarsDesc:
          "Our movement is built on these foundational principles that guide every decision and action we take.",
        pillar1Title: "Justice",
        pillar1Desc:
          "Upholding fairness and accountability across all levels of society.",
        pillar2Title: "Unity",
        pillar2Desc:
          "Bringing people together across divides to build common ground.",
        pillar3Title: "Sustainability",
        pillar3Desc:
          "Protecting our planet and ensuring resources for future generations.",
        pillar4Title: "Innovation",
        pillar4Desc:
          "Embracing new ideas and technology to solve persistent challenges.",

        // Take Action Section
        actionBadge: "TAKE ACTION",
        actionTitle: "How You Can Make a Difference",
        actionDesc:
          "Every great movement starts with ordinary people choosing to act. Here is how you can get involved today.",
        step1Title: "Sign Up",
        step1Desc:
          "Create your profile and join our growing network of changemakers from around the world.",
        step2Title: "Connect",
        step2Desc:
          "Find local chapters, attend events, and collaborate with like-minded individuals in your area.",
        step3Title: "Mobilize",
        step3Desc:
          "Participate in campaigns, organize initiatives, and drive real impact in your community.",
        actionBtn: "Get Started Now",

        // Voices Section
        voicesBadge: "VOICES",
        voicesTitle: "Hear From Our Community",
        voicesDesc:
          "Real stories from real people who are part of this movement.",
        voice1Name: "Sarah M.",
        voice1Role: "Community Organizer",
        voice1Quote:
          "Joining this movement gave me purpose and a community that truly cares about the future.",
        voice2Name: "David K.",
        voice2Role: "Volunteer Leader",
        voice2Quote:
          "I have seen firsthand how collective action can transform neighborhoods and lives.",
        voice3Name: "Amira H.",
        voice3Role: "Youth Ambassador",
        voice3Quote:
          "As a young person, I finally feel like my voice matters and my actions create change.",

        // CTA Banner
        ctaTitle: "Ready to Be Part of Something Bigger?",
        ctaDesc:
          "Thousands have already taken the first step. Your voice, your energy, and your commitment can help shape a better tomorrow.",
        ctaJoinBtn: "Join the Movement",
        ctaShareBtn: "Share This Page",

        // Allies Section
        alliesBadge: "OUR ALLIES",
        alliesTitle: "Trusted Partners & Allies",
        alliesDesc:
          "We collaborate with organizations that share our vision for a better world.",
        ally1: "Partner 1",
        ally2: "Partner 2",
        ally3: "Partner 3",
        ally4: "Partner 4",
        ally5: "Partner 5",
        ally6: "Partner 6",

        // Events
        eventsBadge: "UPCOMING",
        eventsTitle: "Events & Gatherings",
        eventsDesc:
          "Join us at upcoming events to connect, learn, and take action together.",
        ev1Date: "Aug 15, 2025",
        ev1Title: "National Unity Rally",
        ev1Loc: "Central Park, New Delhi",
        ev1Type: "Rally",
        ev2Date: "Sep 5, 2025",
        ev2Title: "Youth Leadership Workshop",
        ev2Loc: "Virtual — Zoom",
        ev2Type: "Workshop",
        ev3Date: "Oct 2, 2025",
        ev3Title: "Policy Discussion Forum",
        ev3Loc: "Convention Hall, Mumbai",
        ev3Type: "Forum",
        eventsBtn: "View All Events",

        // FAQ
        faqBadge: "FAQ",
        faqTitle: "Frequently Asked Questions",
        faqDesc:
          "Got questions? We have answers. Here are the things people ask us most.",
        faq1Q: "How can I join the movement?",
        faq1A:
          "Simply click the Join button and fill out the registration form. It takes less than a minute and you will be connected to your nearest chapter.",
        faq2Q: "Is there a membership fee?",
        faq2A:
          "No. Our movement is completely free to join. We believe that money should never be a barrier to participation.",
        faq3Q: "Can I start a local chapter in my city?",
        faq3A:
          "Absolutely. Once you are a member, you can apply to become a chapter lead. We provide training, resources, and ongoing support.",
        faq4Q: "What kind of activities do chapters organize?",
        faq4A:
          "Chapters organize community cleanups, awareness campaigns, policy discussions, workshops, and cultural events depending on local needs.",
        faq5Q: "How is the organization funded?",
        faq5A:
          "We are funded through voluntary donations from supporters and small grants from aligned foundations. We maintain full financial transparency.",

        // Resources
        resourcesBadge: "RESOURCES",
        resourcesTitle: "Download & Share",
        resourcesDesc:
          "Access our manifestos, reports, toolkits, and guides to spread the message.",
        res1: "Movement Manifesto 2025",
        resTag1: "PDF",
        res2: "Annual Impact Report",
        resTag2: "PDF",
        res3: "Chapter Starter Kit",
        resTag3: "Toolkit",
        res4: "Volunteer Handbook",
        resTag4: "Guide",
        resDownload: "Download",

        // Newsletter
        newsletterTitle: "Stay Connected",
        newsletterDesc:
          "Subscribe to our newsletter for weekly updates, event announcements, and stories from the field.",
        newsletterPlaceholder: "Enter your email",
        newsletterBtn: "Subscribe",
        newsletterNote: "We respect your privacy. Unsubscribe at any time.",
      },
      membership: {
        title: "Union Membership",
        subtitle:
          '"We aim to empower, organize, and bring small, female, and indigenous farmers worldwide onto a common platform."',
        tabApply: "📝 Apply",
        tabDirectory: "👥 Member Directory",
        tabDashboard: "📊 Dashboard",
        labelName: "Full Name",
        placeholderName: "Enter your full name",
        labelMobile: "Mobile Number",
        labelLand: "Land Holding Size",
        selectOptionDefault: "Select",
        selectOptionSmall: "Small Farmer (< 1 Hectare)",
        selectOptionMedium: "Medium Farmer (1 - 4 Hectares)",
        selectOptionOther: "Other / Agricultural Laborer",
        labelLocation: "State & District",
        placeholderLocation: "e.g. Meerut, Uttar Pradesh",
        labelState: "State",
        labelCity: "City / District",
        submitBtn: "Submit Membership Application",
        footerNote:
          "* International Farmers Union is a completely non-political and independent organization.",
        searchPlaceholder: "Search by name, city or state...",
        filterState: "Filter by State",
        allStates: "All States",
        statusApproved: "Approved",
        statusPending: "Pending",
        btnApprove: "✅ Approve",
        btnReject: "❌ Reject",
        totalMembers: "Total Members",
        pendingApprovals: "Pending Approvals",
        approvedThisMonth: "Approved This Month",
        statesRepresented: "States Represented",
        noMembers: "No members found.",
        successMsg:
          "✅ Application submitted successfully! We will contact you soon.",
      },
      idCard: {
        pageTitle: "Digital ID Card Generator",
        pageSubtitle:
          "Official identity card with centralized details and a compact QR code.",
        formHeading: "📋 Enter Details",
        labelName: "Full Name",
        placeholderName: "Enter your name",
        labelMobile: "Mobile Number",
        labelLocation: "State & District",
        placeholderLocation: "e.g. Meerut, Uttar Pradesh",
        labelDesignation: "Union Role / Designation",
        labelPhoto: "Profile Picture",
        btnNewId: "Generate New ID No",
        btnPrint: "🖨️ Print / Download ID",
        previewTitle: "Live Identity Card Preview",
        cardBrand: "International Farmers Union",
        cardMotto: '"Equality - Justice & Humanity"',
        noPhoto: "NO PHOTO",
        cardName: "Name",
        cardIdNo: "ID No",
        cardMobile: "Mobile",
        cardPlace: "Place",
        cardFooterOffice: "Head Office: Meerut (Uttar Pradesh), India",
      },
      issues: {
        title: "Does the Government Intend to Corporate Seize Farmlands?",
        warning:
          "An analytical breakdown of structural intents of global financial entities and capital markets.",
        badge1: "Market Value Manipulation (3X Price Trap)",
        card1Title: "Input Costs vs Consumer Value",
        card1Body:
          "When factoring in chemical fertilizers, seeds, diesel fuel, crop labor, and crop treatments, Minimum Support Prices (MSP) yield negligible returns. As soon as farm yields traverse processing channels to reach consumers, values jump up to three times (3x). State regulatory networks control agricultural caps while avoiding corporate oversight.",
        badge2: "Severe Income Disparity",
        card2Title: "Public Sector vs 1-Hectare Farmer",
        card2Body:
          "Today, baseline entry-tier public office employees clear a guaranteed minimum threshold of ₹25,000 monthly. In stark contrast, an independent farmer micro-managing a single hectare cannot secure even ₹2,000 in pure monthly net margins after absolute day-and-night structural manual labor, forcing compounding debts.",
        footerAlertTitle: "Global Institutional Challenge:",
        footerAlertBody:
          "Global agricultural disruptions are systemically driven by conditions tied to financial networks like the World Bank and IMF, structuring public policy initiatives that convert resource networks into market leverage tools.",
      },
      about: {
        preambleTitle: "Preamble",
        preambleBody:
          "This union remains entirely independent of political parties, working solely on behalf of agricultural reforms, civic welfare, and marginalized populations. We, the farmers and underserved global workforces, establish this independent framework to secure socio-economic advancement, ensure fair market yield returns, and protect trade livelihoods.",
        scopeHeading: "📍 Name & Jurisdiction",
        labelName: "Organization:",
        valueName: "International Farmers Union",
        labelScope: "Jurisdiction:",
        valueScope: "Global (Worldwide)",
        labelOffice: "Headquarters:",
        valueOffice: "Meerut (Uttar Pradesh), India",
        resolutionHeading: "🌱 Strategic Resolutions",
        res1: "Equipping farmers with modern agritech, regulatory pathways, and transparent pricing strategies.",
        res2Bold: "Debt elimination systems over loan waivers",
        res2Text: " to implement lasting socio-economic solutions.",
        res3: "Advancing indigenous organic cultivation methods and biological farming models.",
      },
      news: {
        title: "Latest Agri-Intelligence & News Feed",
        subtitle:
          "Automated, real-time fetching updates tracking global and regional agricultural developments.",
        btnFetch: "🔄 Sync Live Feeds",
        filterAll: "All Streams",
        filterUrgent: "🚨 Urgent Alerts",
        filterTech: "🌱 Agri-Tech",
        filterPolicy: "⚖️ Policy & Trade",
        badgeUrgent: "URGENT",
        badgePinned: "PINNED",
        noNews: "No articles found in this category.",
        formTitle: "📝 Dispatch New Article",
        inputTitle: "Headline / Title",
        inputCategory: "Stream Category",
        inputContent: "Article Body Content",
        toggleUrgent: "Flag as Urgent Alert?",
        btnSubmit: "Publish to Global Feed",
        toastFetched: "Fresh agro-intelligence successfully synchronized!",
        toastAdded: "New article successfully pushed live!",
      },
      leadership: {
        title: "Leadership & Regional Administration Directory",
        subtitle:
          "Official organizational contacts, jurisdictional scopes, and action portfolios across all operational tiers.",
        filterAll: "All Tiers",
        filterState: "🏛️ State Heads",
        filterDistrict: "🚜 District Heads",
        filterCity: "🏙️ City Heads",
        searchPlaceholder: "Search by name or region...",
        responsibilities: "Key Responsibilities",
        btnContact: "📞 Call Officer",
        btnEmail: "✉️ Email",
        noRecords: "No leadership profiles found matching the active criteria.",
        scopeLabel: "Jurisdiction Scope",
        joinedLabel: "Tenure Started",
      },
      activities: {
        title: "Activities & Events",
        subtitle:
          "Farmer rallies, meetings, workshops and activity highlights.",
        tabEvents: "📅 Events",
        tabPhotos: "📷 Photos",
        tabVideos: "🎥 Videos",
        formTitle: " Add New Event",
        labelTitle: "Event Name",
        labelDate: "Date",
        labelLocation: "Location",
        labelType: "Type",
        labelDesc: "Description",
        btnAdd: "Add",
        typeRally: "Rally",
        typeMeeting: "Meeting",
        typeWorkshop: "Workshop",
        upcoming: "🗓️ Upcoming Events",
        past: "✅ Past Events",
        uploadPhoto: "📷 Upload Photo",
        labelCaption: "Caption",
        btnUpload: "Upload",
        addVideoLink: "🔗 Add Video Link",
        labelVideoTitle: "Video Title",
        labelVideoUrl: "YouTube URL",
        btnAddVideo: "Add Video",
        noEvents: "No events available.",
        noPhotos: "No photos available.",
        noVideos: "No videos available.",
      },
      blog: {
        title: "Blog & Articles",
        subtitle: "Analysis, opinions and awareness articles on farmer issues.",
        formTitle: "📝 Write New Blog",
        labelTitle: "Title",
        labelAuthor: "Author Name",
        labelCategory: "Category",
        labelContent: "Article Content",
        btnPublish: "Publish",
        readMore: "Read More ›",
        readLess: "← Back",
        share: "📤 Share",
        minRead: "min read",
        catPolicy: "Policy",
        catFarming: "Farming",
        catWelfare: "Welfare",
        catAwareness: "Awareness",
        noPosts: "No blog posts available.",
        toastAdded: "New blog post published!",
      },
      contact: {
        title: "Contact Us",
        subtitle:
          "Reach out to us — your questions and suggestions matter to us.",
        formTitle: "✉️ Send Message",
        labelName: "Your Name",
        labelEmail: "Email Address",
        labelPhone: "Mobile Number",
        labelSubject: "Subject",
        labelMessage: "Your Message",
        btnSend: "Send Message",
        officeTitle: "🏢 Head Office",
        address: "Meerut, Uttar Pradesh, India",
        emailLabel: "Email",
        phoneLabel: "Phone",
        hoursLabel: "Office Hours",
        hours: "Mon–Sat: 9 AM – 6 PM",
        successMsg:
          "✅ Your message was sent successfully! We will contact you soon.",
        whatsapp: "💬 Contact via WhatsApp",
        socialTitle: "🌐 Social Media",
      },
      gallery: {
        title: "Photo & Video Gallery",
        subtitle:
          "Photos and videos from farmer rallies, events and activities.",
        tabPhotos: "📷 Photo Gallery",
        tabVideos: "🎥 Video Gallery",
        uploadPhoto: "📷 Upload Photo",
        labelCaption: "Caption",
        btnUpload: "Upload",
        addVideoLink: "🔗 Add Video",
        labelVideoTitle: "Video Title",
        labelVideoUrl: "YouTube / Video URL",
        btnAdd: "Add",
        noPhotos: "No photos uploaded yet.",
        noVideos: "No videos added yet.",
        close: "✕ Close",
      },
      downloads: {
        title: "📥 Download Center",
        subtitle:
          "Download union notices, manifestos, forms and important documents.",
        btnDownload: "⬇️ Download",
        filterAll: "All",
        filterNotice: "📢 Notices",
        filterForm: "📋 Forms",
        filterManifesto: "📜 Manifesto",
        filterCircular: "🔔 Circulars",
        sizeLabel: "Size",
        dateLabel: "Date",
        noFiles: "No documents available.",
      },
      footer: {
        tagline: '"Equality - Justice & Humanity"',
        desc: "International Farmers Union — Committed to the rights of farmers and marginalized communities worldwide.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        followUs: "Follow Us",
        rights: "© 2026 International Farmers Union. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        terms: "Terms & Conditions",
        madeWith: "❤️ Made for Farmers Worldwide",
      },
      announcement: {
        text: "🌾 New Announcement: International Farmers Conference 2026 — Meerut, July 15 | Membership Drive Active | Join Now!",
        close: "✕",
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: June 2026",
        sections: [
          {
            heading: "1. Information Collection",
            body: "We collect your personal information (name, mobile, address) only for membership processing and union operations.",
          },
          {
            heading: "2. Use of Information",
            body: "Collected information will be used only for member identification, communication and union activities. It will not be sold to any third party.",
          },
          {
            heading: "3. Data Security",
            body: "We employ appropriate technical measures to keep your information secure. Our website is protected with SSL encryption.",
          },
          {
            heading: "4. Cookies",
            body: "Our website uses cookies for a better user experience. You can control this through your browser settings.",
          },
          {
            heading: "5. Your Rights",
            body: "You may request to review, modify, or delete your information at any time. Contact: info@anterrastriyakisanunion.com",
          },
        ],
      },
      terms: {
        title: "Terms & Conditions",
        lastUpdated: "Last Updated: June 2026",
        sections: [
          {
            heading: "1. Website Use",
            body: "By using this website, you agree to these terms. This website is solely for information and membership processing.",
          },
          {
            heading: "2. Membership Terms",
            body: "Membership applicants must provide accurate information. Providing false information may result in membership cancellation.",
          },
          {
            heading: "3. Intellectual Property",
            body: "All content, logos and designs on this website are the property of International Farmers Union. Unauthorized use is prohibited.",
          },
          {
            heading: "4. Content Accuracy",
            body: "We strive to provide accurate information, but we are not liable for any errors or omissions.",
          },
          {
            heading: "5. Right to Modify",
            body: "The union may change these terms at any time without prior notice. The latest version will always be published on the website.",
          },
        ],
      },
    },
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
