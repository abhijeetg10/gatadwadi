document.addEventListener('DOMContentLoaded', () => {
    // Current Year for footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // ----------------------------------------------------
    // Multilingual Translation Dictionary
    // ----------------------------------------------------
    const translations = {
        en: {
            logoTitle: "Gatadwadi <span>Panchayat</span>",
            navHome: "Home",
            navServices: "Services",
            navComplaints: "Complaints",
            navPayDues: "Pay Dues",
            navAdmin: "Admin Login",
            heroTitle: "Digital <span class='highlight' data-i18n='heroTitleHighlight'>Governance</span> for a Better Village",
            heroTitleHighlight: "Governance",
            heroSubtitle: "Empowering villagers with AI-driven, transparent, and seamless online services. Pay your water bills, house tax (Ghar Patti), or submit instant complaints with ease.",
            heroBtnServices: "View Services",
            heroBtnComplaints: "Register Complaint",
            heroBadgeVerified: "Digital Panchayat",
            heroBadgeGreen: "Green Gatadwadi",
            heroBadgeSmart: "Smart Village",
            servicesTitle: "Online <span class='highlight' data-i18n='servicesTitleHighlight'>Services</span>",
            servicesTitleHighlight: "Services",
            servicesSubtitle: "Secure, fast, and transparent fee payments for village facilities.",
            waterBillTitle: "Water Bill Payment",
            waterBillDesc: "Pay your monthly water maintenance tax quickly. Avoid late fees by paying before the 5th of every month.",
            labelHouseNo: "House Number",
            labelAmount: "Amount (₹)",
            btnPayNow: "Proceed to Pay",
            houseBillTitle: "Ghar Patti (House Tax)",
            houseBillDesc: "Clear your annual house property tax dues to contribute to the village's development and infrastructure.",
            labelHouseNo2: "House Number",
            labelOwnerName: "Owner Name",
            labelAmount2: "Amount (₹)",
            btnPayNow2: "Proceed to Pay",
            complaintsTitle: "Support & <span class='highlight' data-i18n='complaintsTitleHighlight'>Complaints</span>",
            complaintsTitleHighlight: "Complaints",
            complaintsSubtitle: "Help us improve Gatadwadi by sharing your concerns. We address issues within 48 hours.",
            labelFullName: "Full Name",
            labelPhoneName: "Phone Number",
            labelCategory: "Complaint Category",
            catSelect: "Select Category",
            catWater: "Water Supply Issue",
            catElectricity: "Street Lights / Electricity",
            catRoads: "Road Maintenance & Potholes",
            catClean: "Sanitation & Garbage Collection",
            catOther: "Other Issues",
            labelDesc: "Detailed Description",
            btnSubmitComplaint: "Submit Complaint",
            footerLogoTitle: "Gatadwadi <span>Panchayat</span>",
            footerCopyright: "Digital Gatadwadi. All rights reserved.",
            toastSuccessTitle: "Success!",
            toastSuccessMessage: "Your request has been processed.",
            placeholderHouseNo: "e.g. 104/A",
            placeholderFullName: "Full Name",
            placeholderYourName: "Your Name",
            placeholderPhone: "10-digit mobile number",
            placeholderPhone: "10-digit mobile number",
            placeholderDesc: "Describe your issue in detail so we can help faster...",
            aboutTitle: "About <span class='highlight'>Gatadwadi</span>",
            aboutDesc: "Gatadwadi (गाताडवाडी) is a small yet distinct village nestled in the Walwa (वाळवा) tehsil of Sangli (सांगली) district, within the Indian state of Maharashtra (महाराष्ट्र). Known for its charm, it contributes to the cultural and demographic richness of the region.",
            statTalukaLbl: "Taluka",
            statTalukaVal: "Walwa (वाळवा)",
            statDistLbl: "District",
            statDistVal: "Sangli (सांगली)",
            statStateLbl: "State",
            statStateVal: "Maharashtra (महाराष्ट्र)",
            statPopLbl: "Total Population",
            statPopVal: "1,586+",
            noticeTitle: "Gram Panchayat <span class='highlight' data-i18n='noticeTitleHighlight'>Notices</span>",
            noticeTitleHighlight: "Notices",
            loadingNotices: "Loading latest updates...",
            certTitle: "Certificate Requests",
            certDesc: "Apply for essential documents like Birth, Marriage, or Income certificates online without visiting the office.",
            labelCertType: "Certificate Type",
            certSelect: "Select Type",
            certBirth: "Birth Certificate",
            certMarriage: "Marriage Certificate",
            certIncome: "Income Certificate",
            certDomicile: "Domicile Certificate",
            labelApplicantName: "Applicant Name",
            btnApplyCert: "Apply Now",
            galleryTitle: "Village <span class='highlight' data-i18n='galleryTitleHighlight'>Gallery</span>",
            galleryTitleHighlight: "Gallery",
            gallerySubtitle: "Glimpses of life, development, and festivals in Gatadwadi.",
            contactsTitle: "Important <span class='highlight' data-i18n='contactsTitleHighlight'>Contacts</span>",
            contactsTitleHighlight: "Contacts",
            contactSarpanch: "Sarpanch Office",
            contactGramSevak: "Gram Sevak",
            contactHospital: "Primary Health Center",
            contactPolice: "Police Station (Walwa)",
            navSchemes: "Schemes",
            trackTitle: "Track <span class='highlight'>Application</span>",
            trackDesc: "Check the live status of your submitted Complaints or Certificate requests instantly.",
            btnTrack: "Track",
            schemesTitle: "Government <span class='highlight'>Schemes</span>",
            schemesDesc: "Explore various beneficial Yojanas available for the villagers of Gatadwadi.",
            scheme1Title: "PM Kisan Samman Nidhi",
            scheme1Desc: "Financial support of ₹6,000 per year in three equal installments to all landholding farmers' families.",
            scheme2Title: "Ramai Gharkul Yojana",
            scheme2Desc: "Financial assistance provided by the state government to build pucca houses for the homeless and financially weak families.",
            scheme3Title: "Mahila Bachat Gat",
            scheme3Desc: "Empowering women through self-help groups by facilitating microfinance, skill development, and small scale business loans.",
            btnKnowMore: "Know More",
            dirTitle: "Gram Panchayat <span class='highlight'>Directory</span>",
            dirDesc: "Meet the dedicated elected representatives working for Gatadwadi's progress.",
            dirSarpanchName: "Hon. Sarpanch",
            dirSarpanchRole: "Sarpanch",
            dirUpSarpanchName: "Hon. Deputy Sarpanch",
            dirUpSarpanchRole: "Deputy Sarpanch",
            dirMembersTitle: "7 Gram Panchayat Members",
            dirMembersDesc: "Working together across 3 wards for village development.",
            dirSabhaTitle: "Upcoming Gram Sabha",
            dirSabhaDateLbl: "Date:",
            dirSabhaTimeLbl: "Time:",
            dirSabhaVenueLbl: "Venue:",
            dirSabhaVenue: "Panchayat Office Hall",
            sosAmbulance: "Ambulance",
            sosPolice: "Police",
            sosFire: "Fire"
        },
        mr: {
            logoTitle: "गाताडवाडी <span>पंचायत</span>",
            navHome: "मुख्यपृष्ठ",
            navServices: "सेवा",
            navComplaints: "तक्रारी",
            navPayDues: "बिल भरा",
            navAdmin: "प्रशासन लॉगिन",
            heroTitle: "उत्तम गावासाठी डिजिटल <span class='highlight' data-i18n='heroTitleHighlight'>प्रशासन</span>",
            heroTitleHighlight: "प्रशासन",
            heroSubtitle: "पारदर्शक आणि विनाअडथळा ऑनलाइन सेवांनी गावकऱ्यांचे सक्षमीकरण. तुमचे पाण्याचे बिल, घरपट्टी भरा किंवा त्वरित तक्रार नोंदवा.",
            heroBtnServices: "सेवा पहा",
            heroBtnComplaints: "तक्रार नोंदवा",
            heroBadgeVerified: "डिजिटल पंचायत",
            heroBadgeGreen: "हरित गाताडवाडी",
            heroBadgeSmart: "स्मार्ट गाव",
            servicesTitle: "ऑनलाइन <span class='highlight' data-i18n='servicesTitleHighlight'>सेवा</span>",
            servicesTitleHighlight: "सेवा",
            servicesSubtitle: "गावातील सुविधांसाठी सुरक्षित, जलद आणि पारदर्शक शुल्क भरणे.",
            waterBillTitle: "पाणी बिल भरणे",
            waterBillDesc: "तुमचा मासिक पाणी देखभाल कर त्वरित भरा. विलंब शुल्क टाळण्यासाठी दर महिन्याच्या ५ तारखेपूर्वी पैसे भरा.",
            labelHouseNo: "घर क्रमांक",
            labelAmount: "रक्कम (₹)",
            btnPayNow: "पैसे भरा",
            houseBillTitle: "घरपट्टी (घर कर)",
            houseBillDesc: "गावाच्या विकासात आणि पायाभूत सुविधांमध्ये योगदान देण्यासाठी तुमची वार्षिक घरपट्टी भरा.",
            labelHouseNo2: "घर क्रमांक",
            labelOwnerName: "मालकाचे नाव",
            labelAmount2: "रक्कम (₹)",
            btnPayNow2: "पैसे भरा",
            complaintsTitle: "मदत आणि <span class='highlight' data-i18n='complaintsTitleHighlight'>तक्रारी</span>",
            complaintsTitleHighlight: "तक्रारी",
            complaintsSubtitle: "तुमच्या समस्या मांडून गाताडवाडी सुधारण्यास मदत करा. आम्ही ४८ तासांत समस्या सोडवतो.",
            labelFullName: "पूर्ण नाव",
            labelPhoneName: "फोन क्रमांक",
            labelCategory: "तक्रार श्रेणी",
            catSelect: "श्रेणी निवडा",
            catWater: "पाणीपुरवठा समस्या",
            catElectricity: "पथदिवे / वीज",
            catRoads: "रस्त्यांची देखभाल आणि खड्डे",
            catClean: "स्वच्छता आणि कचरा संकलन",
            catOther: "इतर समस्या",
            labelDesc: "सविस्तर वर्णन",
            btnSubmitComplaint: "तक्रार सबमिट करा",
            footerLogoTitle: "गाताडवाडी <span>पंचायत</span>",
            footerCopyright: "डिजिटल गाताडवाडी. सर्व हक्क राखीव.",
            toastSuccessTitle: "यशस्वी!",
            toastSuccessMessage: "तुमच्या विनंतीवर प्रक्रिया झाली आहे.",
            placeholderHouseNo: "उदा. १०४/अ",
            placeholderFullName: "पूर्ण नाव",
            placeholderYourName: "तुमचे नाव",
            placeholderPhone: "१० अंकी मोबाईल नंबर",
            placeholderPhone: "१० अंकी मोबाईल नंबर",
            placeholderDesc: "तुमच्या समस्येचे सविस्तर वर्णन करा...",
            aboutTitle: "<span class='highlight'>गाताडवाडी</span> बद्दल",
            aboutDesc: "गाताडवाडी हे महाराष्ट्र राज्यातील सांगली जिल्ह्यातील वाळवा तालुक्यातील एक छोटे पण वेगळे गाव आहे. त्याच्या आकर्षणासाठी ओळखले जाणारे, हे गाव प्रदेशाच्या सांस्कृतिक आणि लोकसंख्याशास्त्रीय समृद्धीमध्ये योगदान देते.",
            statTalukaLbl: "तालुका",
            statTalukaVal: "वाळवा",
            statDistLbl: "जिल्हा",
            statDistVal: "सांगली",
            statStateLbl: "राज्य",
            statStateVal: "महाराष्ट्र",
            statPopLbl: "एकूण लोकसंख्या",
            statPopVal: "१,५८६+",
            noticeTitle: "ग्रामपंचायत <span class='highlight' data-i18n='noticeTitleHighlight'>सूचना</span>",
            noticeTitleHighlight: "सूचना",
            loadingNotices: "नवीनतम अद्यतने लोड करत आहे...",
            certTitle: "प्रमाणपत्र विनंत्या",
            certDesc: "जन्म, विवाह किंवा उत्पन्न प्रमाणपत्रांसारख्या आवश्यक कागदपत्रांसाठी कार्यालयात न जाता ऑनलाइन अर्ज करा.",
            labelCertType: "प्रमाणपत्राचा प्रकार",
            certSelect: "प्रकार निवडा",
            certBirth: "जन्म प्रमाणपत्र",
            certMarriage: "विवाह प्रमाणपत्र",
            certIncome: "उत्पन्न प्रमाणपत्र",
            certDomicile: "रहिवासी प्रमाणपत्र",
            labelApplicantName: "अर्जदाराचे नाव",
            btnApplyCert: "आता अर्ज करा",
            galleryTitle: "गाव <span class='highlight' data-i18n='galleryTitleHighlight'>गॅलरी</span>",
            galleryTitleHighlight: "गॅलरी",
            gallerySubtitle: "गाताडवाडीतील जीवन, विकास आणि सणांची झलक.",
            contactsTitle: "महत्वाचे <span class='highlight' data-i18n='contactsTitleHighlight'>संपर्क</span>",
            contactsTitleHighlight: "संपर्क",
            contactSarpanch: "सरपंच कार्यालय",
            contactGramSevak: "ग्रामसेवक",
            contactHospital: "प्राथमिक आरोग्य केंद्र",
            contactPolice: "पोलीस स्टेशन (वाळवा)",
            navSchemes: "योजना",
            trackTitle: "<span class='highlight'>अर्ज</span> ट्रॅक करा",
            trackDesc: "तुमच्या नोंदणीकृत तक्रारी किंवा प्रमाणपत्र विनंत्यांची सद्यस्थिती त्वरित तपासा.",
            btnTrack: "ट्रॅक करा",
            schemesTitle: "सरकारी <span class='highlight'>योजना</span>",
            schemesDesc: "गाताडवाडीच्या ग्रामस्थांसाठी उपलब्ध असलेल्या विविध उपयुक्त योजनांची माहिती घ्या.",
            scheme1Title: "पीएम किसान सन्मान निधी",
            scheme1Desc: "सर्व भूधारक शेतकरी कुटुंबांना तीन समान हप्त्यांमध्ये दरवर्षी ₹६,००० ची आर्थिक मदत.",
            scheme2Title: "रमाई घरकुल योजना",
            scheme2Desc: "बेघर आणि आर्थिकदृष्ट्या दुर्बल कुटुंबांना पक्की घरे बांधण्यासाठी राज्य सरकारकडून आर्थिक मदत.",
            scheme3Title: "महिला बचत गट",
            scheme3Desc: "सूक्ष्म वित्तपुरवठा, कौशल्य विकास आणि लघु उद्योगांसाठी कर्जे सुलभ करून स्वयंसहायता गटांद्वारे महिलांचे सक्षमीकरण.",
            btnKnowMore: "अधिक जाणून घ्या",
            dirTitle: "ग्रामपंचायत <span class='highlight'>माहिती</span>",
            dirDesc: "गाताडवाडीच्या प्रगतीसाठी काम करणाऱ्या समर्पित लोकप्रतिनिधींना भेटा.",
            dirSarpanchName: "मा. सरपंच",
            dirSarpanchRole: "सरपंच",
            dirUpSarpanchName: "मा. उपसरपंच",
            dirUpSarpanchRole: "उपसरपंच",
            dirMembersTitle: "७ ग्रामपंचायत सदस्य",
            dirMembersDesc: "गावाच्या विकासासाठी ३ प्रभागांमध्ये एकत्र काम करत आहेत.",
            dirSabhaTitle: "आगामी ग्रामसभा",
            dirSabhaDateLbl: "दिनांक:",
            dirSabhaTimeLbl: "वेळ:",
            dirSabhaVenueLbl: "स्थळ:",
            dirSabhaVenue: "पंचायत कार्यालय सभागृह",
            sosAmbulance: "रुग्णवाहिका",
            sosPolice: "पोलीस",
            sosFire: "अग्निशमन दला"
        },
        hi: {
            logoTitle: "गाताडवाडी <span>पंचायत</span>",
            navHome: "मुख्य पृष्ठ",
            navServices: "सेवाएं",
            navComplaints: "शिकायतें",
            navPayDues: "बिल भरें",
            navAdmin: "प्रशासक लॉगिन",
            heroTitle: "बेहतर गांव के लिए डिजिटल <span class='highlight' data-i18n='heroTitleHighlight'>प्रशासन</span>",
            heroTitleHighlight: "प्रशासन",
            heroSubtitle: "पारदर्शी और निर्बाध ऑनलाइन सेवाओं से ग्रामीणों का सशक्तिकरण। अपना पानी का बिल, हाउस टैक्स (घर पट्टी) का भुगतान करें या तुरंत शिकायत दर्ज करें।",
            heroBtnServices: "सेवाएं देखें",
            heroBtnComplaints: "शिकायत दर्ज करें",
            heroBadgeVerified: "डिजिटल पंचायत",
            heroBadgeGreen: "हरित गाताडवाडी",
            heroBadgeSmart: "स्मार्ट गांव",
            servicesTitle: "ऑनलाइन <span class='highlight' data-i18n='servicesTitleHighlight'>सेवाएं</span>",
            servicesTitleHighlight: "सेवाएं",
            servicesSubtitle: "गांव की सुविधाओं के लिए सुरक्षित, तेज़ और पारदर्शी शुल्क भुगतान।",
            waterBillTitle: "पानी का बिल भुगतान",
            waterBillDesc: "अपना मासिक जल रखरखाव कर जल्दी से भरें। विलंब शुल्क से बचने के लिए हर महीने की 5 तारीख से पहले भुगतान करें।",
            labelHouseNo: "मकान नंबर",
            labelAmount: "रकम (₹)",
            btnPayNow: "भुगतान करें",
            houseBillTitle: "घर पट्टी (हाउस टैक्स)",
            houseBillDesc: "गांव के विकास और बुनियादी ढांचे में योगदान देने के लिए अपने वार्षिक हाउस प्रॉपर्टी टैक्स का भुगतान करें।",
            labelHouseNo2: "मकान नंबर",
            labelOwnerName: "मालिक का नाम",
            labelAmount2: "रकम (₹)",
            btnPayNow2: "भुगतान करें",
            complaintsTitle: "सहायता और <span class='highlight' data-i18n='complaintsTitleHighlight'>शिकायतें</span>",
            complaintsTitleHighlight: "शिकायतें",
            complaintsSubtitle: "अपनी समस्याएं साझा करके गाताडवाडी को बेहतर बनाने में हमारी मदद करें। हम 48 घंटों के भीतर समस्याओं का समाधान करते हैं।",
            labelFullName: "पूरा नाम",
            labelPhoneName: "फोन नंबर",
            labelCategory: "शिकायत श्रेणी",
            catSelect: "श्रेणी चुनें",
            catWater: "जल आपूर्ति समस्या",
            catElectricity: "स्ट्रीट लाइट / बिजली",
            catRoads: "सड़क रखरखाव और गड्ढे",
            catClean: "स्वच्छता और कचरा संग्रहण",
            catOther: "अन्य समस्याएं",
            labelDesc: "विस्तृत विवरण",
            btnSubmitComplaint: "शिकायत सबमिट करें",
            footerLogoTitle: "गाताडवाडी <span>पंचायत</span>",
            footerCopyright: "डिजिटल गाताडवाडी। सर्वाधिकार सुरक्षित।",
            toastSuccessTitle: "सफल!",
            toastSuccessMessage: "आपके अनुरोध पर कार्रवाई की गई है।",
            placeholderHouseNo: "उदा. 104/A",
            placeholderFullName: "पूरा नाम",
            placeholderYourName: "आपका नाम",
            placeholderPhone: "10 अंकों का मोबाइल नंबर",
            placeholderPhone: "10 अंकों का मोबाइल नंबर",
            placeholderDesc: "अपनी समस्या का विस्तार से वर्णन करें ताकि हम तेज़ी से मदद कर सकें...",
            aboutTitle: "<span class='highlight'>गाताडवाडी</span> के बारे में",
            aboutDesc: "गाताडवाडी महाराष्ट्र राज्य के सांगली जिले के वालवा तहसील में बसा एक छोटा लेकिन विशिष्ट गांव है। अपने आकर्षण के लिए जाना जाने वाला यह गांव क्षेत्र की सांस्कृतिक और जनसांख्यिकीय समृद्धि में योगदान देता है।",
            statTalukaLbl: "तालुका",
            statTalukaVal: "वालवा",
            statDistLbl: "जिला",
            statDistVal: "सांगली",
            statStateLbl: "राज्य",
            statStateVal: "महाराष्ट्र",
            statPopLbl: "कुल जनसंख्या",
            statPopVal: "1,586+",
            noticeTitle: "ग्राम पंचायत <span class='highlight' data-i18n='noticeTitleHighlight'>सूचनाएं</span>",
            noticeTitleHighlight: "सूचनाएं",
            loadingNotices: "नवीनतम अपडेट लोड हो रहे हैं...",
            certTitle: "प्रमाणपत्र अनुरोध",
            certDesc: "जन्म, विवाह या आय प्रमाण पत्र जैसे आवश्यक दस्तावेजों के लिए कार्यालय जाए बिना ऑनलाइन आवेदन करें।",
            labelCertType: "प्रमाणपत्र का प्रकार",
            certSelect: "प्रकार चुनें",
            certBirth: "जन्म प्रमाण पत्र",
            certMarriage: "विवाह प्रमाण पत्र",
            certIncome: "आय प्रमाण पत्र",
            certDomicile: "निवास प्रमाण पत्र",
            labelApplicantName: "आवेदक का नाम",
            btnApplyCert: "अभी आवेदन करें",
            galleryTitle: "ग्राम <span class='highlight' data-i18n='galleryTitleHighlight'>गैलरी</span>",
            galleryTitleHighlight: "गैलरी",
            gallerySubtitle: "गाताडवाडी में जीवन, विकास और त्योहारों की झलक।",
            contactsTitle: "महत्वपूर्ण <span class='highlight' data-i18n='contactsTitleHighlight'>संपर्क</span>",
            contactsTitleHighlight: "संपर्क",
            contactSarpanch: "सरपंच कार्यालय",
            contactGramSevak: "ग्राम सेवक",
            contactHospital: "प्राथमिक स्वास्थ्य केंद्र",
            contactPolice: "पुलिस स्टेशन (वालवा)",
            navSchemes: "योजनाएं",
            trackTitle: "ट्रैक <span class='highlight'>आवेदन</span>",
            trackDesc: "अपनी दर्ज की गई शिकायतों या प्रमाणपत्र अनुरोधों की लाइव स्थिति तुरंत देखें।",
            btnTrack: "ट्रैक करें",
            schemesTitle: "सरकारी <span class='highlight'>योजनाएं</span>",
            schemesDesc: "गाताडवाडी के ग्रामीणों के लिए उपलब्ध विभिन्न लाभकारी योजनाओं का अन्वेषण करें।",
            scheme1Title: "पीएम किसान सम्मान निधि",
            scheme1Desc: "सभी भूमिधारक किसान परिवारों को तीन समान किश्तों में प्रति वर्ष ₹6,000 की वित्तीय सहायता।",
            scheme2Title: "रमाई घरकुल योजना",
            scheme2Desc: "बेघर और आर्थिक रूप से कमजोर परिवारों के लिए पक्के घर बनाने के लिए राज्य सरकार द्वारा प्रदान की जाने वाली वित्तीय सहायता।",
            scheme3Title: "महिला बचत गट",
            scheme3Desc: "माइक्रोफाइनेंस, कौशल विकास और छोटे पैमाने के व्यापार ऋण की सुविधा प्रदान करके स्वयं सहायता समूहों के माध्यम से महिलाओं को सशक्त बनाना।",
            btnKnowMore: "और जानें",
            dirTitle: "ग्राम पंचायत <span class='highlight'>निर्देशिका</span>",
            dirDesc: "गाताडवाडी की प्रगति के लिए काम करने वाले समर्पित निर्वाचित प्रतिनिधियों से मिलें।",
            dirSarpanchName: "माननीय सरपंच",
            dirSarpanchRole: "सरपंच (Sarpanch)",
            dirUpSarpanchName: "माननीय उपसरपंच",
            dirUpSarpanchRole: "उपसरपंच (Deputy Sarpanch)",
            dirMembersTitle: "7 ग्राम पंचायत सदस्य",
            dirMembersDesc: "गांव के विकास के लिए 3 वार्डों में एक साथ काम करना।",
            dirSabhaTitle: "आगामी ग्राम सभा",
            dirSabhaDateLbl: "दिनांक:",
            dirSabhaTimeLbl: "समय:",
            dirSabhaVenueLbl: "स्थान:",
            dirSabhaVenue: "पंचायत कार्यालय हॉल",
            sosAmbulance: "एंबुलेंस",
            sosPolice: "पुलिस",
            sosFire: "अग्नि शमन"
        }
    };

    // Function to change language (exposed globally for inline onclick handlers)
    window.setLanguage = (lang) => {
        const dict = translations[lang];
        if (!dict) return;

        // Translate innerHTML based text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Update active class on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById('btn-lang-' + lang);
        if (activeBtn) activeBtn.classList.add('active');

        // Save user preference
        localStorage.setItem('gatadwadi_lang', lang);
    };

    // Initialize Language
    const savedLang = localStorage.getItem('gatadwadi_lang') || 'en';
    window.setLanguage(savedLang);
    // ----------------------------------------------------

    // Scroll Header Effect
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form Submissions Mocking & Saving to LocalStorage
    const forms = [
        { id: 'waterBillForm', title: 'Payment Successful', message: 'Water bill has been paid successfully. Receipt sent via SMS.', type: 'payment', category: 'Water Bill' },
        { id: 'houseBillForm', title: 'Payment Successful', message: 'Ghar Patti paid successfully. Thank you!', type: 'payment', category: 'House Tax (Ghar Patti)' },
        { id: 'complaintForm', title: 'Complaint Registered', message: 'Ticket raised. Our team will resolve it within 48 hrs.', type: 'complaint' },
        { id: 'certForm', title: 'Application Submitted', message: 'Your certificate request is under review.', type: 'certificate' }
    ];

    forms.forEach(formObj => {
        const formEl = document.getElementById(formObj.id);
        if (formEl) {
            formEl.addEventListener('submit', (e) => {
                e.preventDefault();

                const btn = e.target.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                // Add loading state
                btn.innerHTML = '<span class="material-icons rotating" style="animation: spin 1s linear infinite;">autorenew</span> Processing...';
                btn.disabled = true;
                btn.style.opacity = '0.8';

                // Extract data based on form type
                let formDataObj = {
                    id: 'REQ-' + Math.floor(10000 + Math.random() * 90000),
                    date: new Date().toLocaleDateString('en-GB'),
                    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                    status: 'Pending'
                };

                if (formObj.type === 'payment') {
                    formDataObj.amount = formEl.querySelector('input[type="number"]').value;
                    if (formObj.id === 'waterBillForm') {
                        formDataObj.houseNo = document.getElementById('waterHouseNo').value;
                        formDataObj.name = document.getElementById('waterName').value;
                    } else if (formObj.id === 'houseBillForm') {
                        formDataObj.houseNo = document.getElementById('houseNo').value;
                        formDataObj.name = document.getElementById('ownerName').value;
                    }
                    formDataObj.category = formObj.category;
                    formDataObj.status = 'Paid';
                } else if (formObj.type === 'complaint') {
                    formDataObj.name = document.getElementById('complaintName').value;
                    formDataObj.phone = document.getElementById('complaintPhone').value;
                    formDataObj.category = document.getElementById('complaintType').value;
                    formDataObj.desc = document.getElementById('complaintDesc').value;
                } else if (formObj.type === 'certificate') {
                    formDataObj.category = document.getElementById('certType').value;
                    formDataObj.name = document.getElementById('certName').value;
                }

                // Helper to finalize form submission
                const finalizeSubmission = (photoDataUrl = null) => {
                    if (photoDataUrl) {
                        formDataObj.photo = photoDataUrl;
                    }

                    setTimeout(() => {
                        // Show Success Toast
                        showToast(formObj.title, formObj.message);

                        // Reset Form UI
                        formEl.reset();
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.style.opacity = '1';

                        // Save Data
                        let targetStorage = 'gatadwadi_' + formObj.type + 's';
                        let existingData = JSON.parse(localStorage.getItem(targetStorage)) || [];
                        existingData.unshift(formDataObj); // Add to beginning
                        localStorage.setItem(targetStorage, JSON.stringify(existingData));

                        // Redirect for Payments
                        if (formObj.type === 'payment') {
                            const upiId = '9028596505-2@ybl';
                            const amount = formDataObj.amount;
                            const payeeName = "Gram Panchayat";
                            const transactionNote = encodeURIComponent(`Payment for ${formDataObj.category} House No ${formDataObj.houseNo}`);

                            const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}`;

                            setTimeout(() => {
                                window.location.href = upiUrl;
                            }, 1500);
                        }

                    }, 1500);
                };

                // Check for photo upload in complaints
                if (formObj.type === 'complaint') {
                    const photoInput = document.getElementById('complaintPhoto');
                    if (photoInput && photoInput.files && photoInput.files[0]) {
                        const file = photoInput.files[0];
                        // Optional: Validate size (2MB max)
                        if (file.size > 2 * 1024 * 1024) {
                            alert("Photo size must be less than 2MB.");
                            btn.innerHTML = originalText;
                            btn.disabled = false;
                            btn.style.opacity = '1';
                            return;
                        }
                        const reader = new FileReader();
                        reader.onload = function (evt) {
                            finalizeSubmission(evt.target.result);
                        };
                        reader.readAsDataURL(file);
                    } else {
                        finalizeSubmission(); // No photo
                    }
                } else {
                    finalizeSubmission(); // Payments and Certificates
                }

            });
        }
    });

    // Toast Notification System
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');
    let toastTimeout;

    const showToast = (title, message) => {
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        toast.classList.remove('hidden');

        // Force reflow
        void toast.offsetWidth;

        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 400); // match transition duration
        }, 4000);
    };

    // Smooth Scrolling & Active State
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust scroll position for fixed header
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animation with Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // 15% of item must be visible to trigger
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Render Notice Board
    const renderNotices = () => {
        const noticeList = document.getElementById('noticeList');
        if (!noticeList) return;

        let notices = JSON.parse(localStorage.getItem('gatadwadi_notices'));

        // Seed some notices if empty
        if (!notices || notices.length === 0) {
            notices = [
                { id: 'N-' + Math.floor(Math.random() * 9000), text: "Gram Sabha meeting scheduled for 15th March at Panchayat Office.", date: "03/03/2026" },
                { id: 'N-' + Math.floor(Math.random() * 9000), text: "Water supply will be affected tomorrow morning due to pipeline repairs.", date: "02/03/2026" },
                { id: 'N-' + Math.floor(Math.random() * 9000), text: "New PM Kisan Yojana forms are available. Submit before 30th March.", date: "28/02/2026" }
            ];
            localStorage.setItem('gatadwadi_notices', JSON.stringify(notices));
        }

        noticeList.innerHTML = '';
        notices.forEach(n => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="material-icons" style="color: var(--button-green); vertical-align: middle; margin-right: 8px;">campaign</span>
                            <div style="flex:1;">
                                <div style="font-weight: 500; font-size: 0.95rem;">${n.text}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Posted: ${n.date}</div>
                            </div>`;
            noticeList.appendChild(li);
        });
    };

    renderNotices();

    // Application Status Tracker Logic
    const trackForm = document.getElementById('trackForm');
    const trackResult = document.getElementById('trackResult');

    if (trackForm && trackResult) {
        trackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const trackId = document.getElementById('trackId').value.trim();
            if (!trackId) return;

            const submitBtn = trackForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="material-icons rotating">autorenew</span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                let foundRecord = null;
                let recordType = '';

                // Search Complaints
                const complaints = JSON.parse(localStorage.getItem('gatadwadi_complaints')) || [];
                foundRecord = complaints.find(c => c.id === trackId);
                if (foundRecord) recordType = 'Complaint';

                // Search Certificates if not found in Complaints
                if (!foundRecord) {
                    const certs = JSON.parse(localStorage.getItem('gatadwadi_certificates')) || [];
                    foundRecord = certs.find(c => c.id === trackId);
                    if (foundRecord) recordType = 'Certificate';
                }

                // Also search Payments just in case user tracks payment
                if (!foundRecord) {
                    const payments = JSON.parse(localStorage.getItem('gatadwadi_payments')) || [];
                    foundRecord = payments.find(c => c.id === trackId);
                    if (foundRecord) recordType = 'Payment';
                }

                if (foundRecord) {
                    document.getElementById('trackTypeResult').textContent = recordType + ` (${foundRecord.category || '-'})`;
                    document.getElementById('trackNameResult').textContent = foundRecord.name || 'Resident';

                    const badge = document.getElementById('trackStatusBadge');
                    badge.textContent = foundRecord.status;

                    // Reset classes
                    badge.className = 'badge';
                    if (foundRecord.status === 'Solved' || foundRecord.status === 'Approved' || foundRecord.status === 'Paid') {
                        badge.classList.add('solved');
                    } else if (foundRecord.status === 'Pending') {
                        badge.classList.add('pending');
                    } else if (foundRecord.status === 'Rejected') {
                        badge.classList.add('rejected');
                    }

                    trackResult.classList.remove('hidden');
                } else {
                    showToast('Not Found', 'No application found with ID: ' + trackId);
                    trackResult.classList.add('hidden');
                }

                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 800);
        });
    }

});

// Polyfill keyframes for the rotating icon in script
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
