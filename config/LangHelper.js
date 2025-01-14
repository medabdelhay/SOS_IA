import i18n from "./i18n";


export const getLibelle=(object)=>{
   // alert(i18n.language)
    if (object === null) return '';
    else if (object.libelle_fr && i18n.language==='fr') return object.libelle_fr;
    else if (object.libelle_ar && i18n.language==='ar') return object.libelle_ar;
    else if (object.libelle) return object.libelle;
    else
    return object.libelle_fr;
}