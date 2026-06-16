import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('hi'); // Defaulting to Hindi

  // Master Global Dictionary
 // Master Global Dictionary
  const dictionary = {
    hi: {
      navbar: {
        brand: "किसान यूनियन",
        home: "मुख्य पृष्ठ",
        team: "टीम और नेतृत्व",
        membership: "सदस्यता",
        events: "गतिविधियाँ और कार्यक्रम",
        idCard: "पहचान पत्र (ID Card)",
        issues: "चुनौतियां",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        login: "लॉगिन"
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
        stat2Desc: "फ़्रांस, जर्मनी, ऑस्ट्रेलिया, म्यामार और अफ़्रीका आंदोलनों का एकीकरण",
        stat3Title: "मुख्य प्रशासनिक केंद्र",
        stat3Value: "मेरठ, UP",
        stat3Desc: "भारत में स्थित मुख्य वैश्विक कार्यालय"
      },
      membership: {
        title: "यूनियन सदस्यता आवेदन",
        subtitle: '"हम दुनिया भर के छोटे, महिला और आदिवासी किसानों को सशक्त, संगठित और समान स्थान पर लाना चाहते हैं।"',
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
        submitBtn: "सदस्यता के लिए आवेदन सबमिट करें",
        footerNote: "* अंतर्राष्ट्रीय किसान यूनियन एक पूर्णतः गैर-राजनीतिक एवं स्वतंत्र संगठन है।"
      },
      idCard: {
        pageTitle: "डिजिटल पहचान पत्र जनरेटर",
        pageSubtitle: "केंद्रित विवरण एवं कॉम्पैक्ट क्यूआर कोड के साथ आधिकारिक पहचान पत्र।",
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
        cardFooterOffice: "मुख्य कार्यालय: मेरठ (उत्तर प्रदेश), भारत"
      },
      issues: {
        title: "क्या किसानों को खत्म करके जमीन हड़पना चाहती है सरकार?",
        warning: "वैश्विक वित्तीय संस्थाओं एवं पूंजीपतियों की नियत का एक विश्लेषणात्मक विवरण।",
        badge1: "बाजार मूल्य का खेल (3X Price Trap)",
        card1Title: "लागत बनाम उपभोक्ता मूल्य",
        card1Body: "यदि रासायनिक खाद, बीज, पानी, जुताई, कृषि श्रम, और कीटनाशक का कुल योग किया जाए तो किसानों को समर्थन मूल्य (MSP) के रूप में कुछ भी प्राप्त नहीं होता। जैसे ही कृषि उत्पाद बाजार या कारखानों के माध्यम से उपभोक्ता तक पहुंचता है, उसका मूल्य खेत के उत्पाद मूल्य की तुलना में तीन गुना (3x) तक बढ़ जाता है। सरकारें औद्योगिक उत्पादों पर नियंत्रण नहीं रखतीं, पर कृषि उत्पाद मूल्य दबाती हैं।",
        badge2: "आय में भारी असमानता",
        card2Title: "कर्मचारी बनाम 1 हेक्टेयर किसान",
        card2Body: "आज के समय में सबसे छोटे सरकारी कर्मचारी का न्यूनतम वेतन भी ₹25,000 महीने हो चुका है। इसके विपरीत, एक हेक्टेयर जमीन का मालिक किसान अपनी दिन-रात की मेहनत और पूरी पूंजी लगाने के बाद भी ₹2,000 महीना शुद्ध मुनाफा नहीं बचा पाता। इसी कारणवश किसानों पर लगातार भारी कर्ज का बोझ चढ़ता जा रहा है।",
        footerAlertTitle: "वैश्विक संस्थागत चुनौती:",
        footerAlertBody: "विश्वव्यापी किसान समस्याओं के पीछे विश्व बैंक (World Bank) और अंतरराष्ट्रीय मुद्राकोश (IMF) जैसी वित्तीय संस्थाएं जिम्मेदार हैं, जो कथित रूप से जनकल्याणकारी योजनाएं बनाकर खाद्य व्यवस्था को हथियार की तरह उपयोग कर रही हैं।"
      },
      about: {
        preambleTitle: "प्रस्तावना (Preamble)",
        preambleBody: "यह संघ किसी राजनीतिक दल से नहीं जुड़ेगा और केवल किसान मुद्दों, सामाजिक विषयों ओर वंचित वर्ग के लिए काम करेगा। हम, विश्व के किसान ओर वंचित वर्ग, अपनी आर्थिक-सामाजिक स्थिति सुधारने, कृषि को लाभकारी बनाने और किसानों ओर शोषित वर्ग के हितों की रक्षा के लिए इस गैर-राजनीतिक संगठन का गठन करते हैं।",
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
        res3: "पारंपरिक और पूर्णतः जैविक खेती (Organic Farming) को बढ़ावा देना।"
      },
      news: {
        title: "नवीनतम समाचार एवं कृषि चेतना",
        subtitle: "स्वचालित रूप से अपडेट होने वाली वैश्विक एवं क्षेत्रीय कृषि क्षेत्र की महत्वपूर्ण सूचनाएं।",
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
        toastAdded: "नया समाचार सफलतापूर्वक लाइव कर दिया गया है!"
      },
      leadership: {
      title: "नेतृत्व एवं प्रशासनिक संगठन मंडल",
      subtitle: "राज्य, जिला और नगर स्तर के आधिकारिक प्रमुखों की निर्देशिका एवं संपर्क विवरण।",
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
      joinedLabel: "कार्यकाल प्रारंभ"
    }
    },
    en: {
      navbar: {
        brand: "Kisan Union",
        home: "Home",
        team: "Team & Leadership",
        membership: "Membership",
        events: "Activities & Events",
        idCard: "ID Card",
        issues: "Issues",
        about: "About",
        contact: "Contact",
        login: "Login"
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
        stat1Desc: "Citizens receiving food assistance from the government in India",
        stat2Title: "Global Farmer Awakening",
        stat2Value: "Global Stage",
        stat2Desc: "Integration of movements across France, Germany, Australia, Myanmar, and Africa",
        stat3Title: "Main Administrative Hub",
        stat3Value: "Meerut, UP",
        stat3Desc: "Primary global office located in India"
      },
      membership: {
        title: "Union Membership Application",
        subtitle: '"We aim to empower, organize, and bring small, female, and indigenous farmers worldwide onto a common platform."',
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
        submitBtn: "Submit Application for Membership",
        footerNote: "* International Farmers Union is a completely non-political and independent organization."
      },
      idCard: {
        pageTitle: "Digital ID Card Generator",
        pageSubtitle: "Official identity card with centralized details and a compact QR code.",
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
        cardFooterOffice: "Head Office: Meerut (Uttar Pradesh), India"
      },
      issues: {
        title: "Does the Government Intend to Corporate Seize Farmlands?",
        warning: "An analytical breakdown of structural intents of global financial entities and capital markets.",
        badge1: "Market Value Manipulation (3X Price Trap)",
        card1Title: "Input Costs vs Consumer Value",
        card1Body: "When factoring in chemical fertilizers, seeds, diesel fuel, crop labor, and crop treatments, Minimum Support Prices (MSP) yield negligible returns. As soon as farm yields traverse processing channels to reach consumers, values jump up to three times (3x). State regulatory networks control agricultural caps while avoiding corporate oversight.",
        badge2: "Severe Income Disparity",
        card2Title: "Public Sector vs 1-Hectare Farmer",
        card2Body: "Today, baseline entry-tier public office employees clear a guaranteed minimum threshold of ₹25,000 monthly. In stark contrast, an independent farmer micro-managing a single hectare cannot secure even ₹2,000 in pure monthly net margins after absolute day-and-night structural manual labor, forcing compounding debts.",
        footerAlertTitle: "Global Institutional Challenge:",
        footerAlertBody: "Global agricultural disruptions are systemically driven by conditions tied to financial networks like the World Bank and IMF, structuring public policy initiatives that convert resource networks into market leverage tools."
      },
      about: {
        preambleTitle: "Preamble",
        preambleBody: "This union remains entirely independent of political parties, working solely on behalf of agricultural reforms, civic welfare, and marginalized populations. We, the farmers and underserved global workforces, establish this independent framework to secure socio-economic advancement, ensure fair market yield returns, and protect trade livelihoods.",
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
        res3: "Advancing indigenous organic cultivation methods and biological farming models."
      },
      news: {
        title: "Latest Agri-Intelligence & News Feed",
        subtitle: "Automated, real-time fetching updates tracking global and regional agricultural developments.",
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
        toastAdded: "New article successfully pushed live!"
      },
      leadership: {
      title: "Leadership & Regional Administration Directory",
      subtitle: "Official organizational contacts, jurisdictional scopes, and action portfolios across all operational tiers.",
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
      joinedLabel: "Tenure Started"
    }
    }

  };

  // Dynamic Lookup on every state change ensures "t" updates perfectly live!
  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);