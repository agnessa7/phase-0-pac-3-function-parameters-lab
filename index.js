let language = ""
function introduction(name) {
   let phrase = `Hi, my name is ${name}.`;
   return phrase;
}
let result = introduction("Aki")

function introductionWithLanguage(name, language) {
   let phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}

function introductionWithLanguageOptional(name, language) {
     let phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
      return phrase;
}
 function introductionWithLanguageOptional(name, language = "JavaScript") {
   const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
   return phrase;
}
   result = introductionWithLanguageOptional("Gracie", language)