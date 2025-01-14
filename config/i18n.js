import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from "react-native";
import * as Updates from "expo-updates";
import {ar, fr} from "./lang";

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
        try {
            const userLang = await AsyncStorage.getItem('lang');
            const deviceLang = userLang || 'fr';
            const isLangRTL = deviceLang === 'ar';
            console.log(I18nManager.isRTL);

            if (isLangRTL !== I18nManager.isRTL) {
                 I18nManager.allowRTL(isLangRTL);
                 I18nManager.forceRTL(isLangRTL);
                //  Updates.reloadAsync();
            }

            callback(deviceLang);
        } catch (error) {
            console.error('Error detecting language:', error);
            callback('fr'); 
        }
    },
    cacheUserLanguage: (lng) => {
        AsyncStorage.setItem('lang', lng);
    }
};


i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            fr:{
                translation: fr
            },
            ar:{
                translation: ar
            }
        },
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
