import I18n from 'react-native-i18n';
import hi from './hi';
import en from './en';


I18n.fallbacks = true;

I18n.translations = {
    hi,
    en

};

export default  I18n;