import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
i18n.use(Languagedetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    fallbackLng:"en",
    resources:{
        en:{
            translation:{name:"Smart farming with AI ",
                description:"Agriculture Presentation"
            }
        },
        hi:{
            translation:{name:"कृषि",
            description:"कृषि प्रस्तुति"
            }
        }
    }
})
export default i18n;