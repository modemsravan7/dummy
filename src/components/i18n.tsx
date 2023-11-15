// // i18n.ts
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import 

// i18n.use(initReactI18next).use(LanguageDetector)
//   .init({
//     resources: {
//       en: {
//         translation: import('./locales/en/translation.json').then((module) => module.default),
//       },
//       te: {
//         translation: import('./locales/te/translation.json').then((module) => module.default),
//       },
//       hi: {
//         translation: import('./locales/hi/translation.json').then((module) => module.default),
//       },
//     },
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // not needed for React as it escapes by default
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: {
              en: {
                translation: {
                  "United States" :"United States",
                  "Country":"Country",
                  "University":"University",
                    "welcome": "Welcome to our app!",
                    "Marywood University": "Marywood University",
                    "Lindenwood University": "Lindenwood University",
                    "Sullivan University": "Sullivan University",
                    "Florida State College at Jacksonville": "Florida State College at Jacksonville",
                    "Xavier University": "Xavier University",
                    "Tusculum College": "Tusculum College",
                    "Claremont School of Theology": "Claremont School of Theology",
                    "Columbia College (SC)": "Columbia College (SC)",
                    "Chabot-Las Positas Community College District": "Chabot-Las Positas Community College District",
                    "Keller Graduate School of Management": "Keller Graduate School of Management"
                },
              },
              hi: {
                translation: {
                  "United States" :"अमेरिका",
                  "Country":"देश",
                    "University": "विश्वविद्यालय", 
                    "welcome": "हमारे ऐप में आपका स्वागत है!",
                    "Marywood University": "मैरीवुड विश्वविद्यालय",
                    "Lindenwood University": "लिंडनवुड विश्वविद्यालय",
                    "Sullivan University": "सुलीवान विश्वविद्यालय",
                    "Florida State College at Jacksonville": "फ्लोरिडा स्टेट कॉलेज एट जैक्सनविल",
                    "Xavier University": "जेवियर विश्वविद्यालय",
                    "Tusculum College": "टस्कुलम कॉलेज",
                    "Claremont School of Theology": "क्लेमॉंट स्कूल ऑफ थियोलॉजी",
                    "Columbia College (SC)": "कोलंबिया कॉलेज (एससी)",
                    "Chabot-Las Positas Community College District": "चाबोट-लास पोसितस कम्यूनिटी कॉलेज जिला",
                    "Keller Graduate School of Management": "केलर स्नातक स्कूल ऑफ मैनेजमेंट"
                
                  },
              },
              te: {
                translation: {
                  "United States" :"అమెరికా",
                    "welcome": "మా యాప్‌కు స్వాగతం!",
                    "Country":"దేశం",
                    "University": "విశ్వవిద్యాలయం",
                    "Marywood University": "మేరీవుడ్ విశ్వవిద్యాలయం",
                    "Lindenwood University": "లిండన్వుడ్ విశ్వవిద్యాలయం",
                    "Sullivan University": "సల్లివన్ విశ్వవిద్యాలయం",
                    "Florida State College at Jacksonville": "ఫ్లోరిడా స్టేట్ కాలేజ్ అట్ జాక్సన్విల్",
                    "Xavier University": "జేవియర్ విశ్వవిద్యాలయం",
                    "Tusculum College": "టస్క్యూలమ్ కాలేజ్",
                    "Claremont School of Theology": "క్లేర్మాంట్ స్కూల్ అఫ్ థాలజీ",
                    "Columbia College (SC)": "కొలంబియా కాలేజ్ (ఎస్స్సి)",
                    "Chabot-Las Positas Community College District": "చాబాట్-లాస్ పొసిటాస్ కమ్యూనిటీ కాలేజ్ డిస్ట్రిక్ట్",
                    "Keller Graduate School of Management": "కెల్లర్ గ్రాజ్యూయట్ స్కూల్ అఫ్ మ్యానేజ్మెంట్"
                  } 
              },
            },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

  });


export default i18n;
