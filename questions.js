var CreationTableauLangages = function () {
  CreationTableauLangages = ['Html', 'CSS' , 'Java' , 'PHP'];
  return CreationTableauLangages;
}

var CreationTableauNombres = function () {
  CreationTableauNombres = [0,1,2,3,4, 5];
  return CreationTableauNombres;
}

var RemplacementElement = function (langages) {
   langages[2] = 'Javascript';
  return langages;
}

var AjoutElementLangages = function (langages) {
langages.push('Ruby', 'Python');
  return langages;
}

var AjoutElementNombres = function (nombres) {
nombres.unshift(-2 , -1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
   langages.splice (0, 1);
  return langages;
}

var SuppressionDernierElement = function (langages) {
  langages.splice (4, 1);
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
reseaux_sociaux_chaine = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn']
  return reseaux_sociaux_chaine;
}

var ConversionTableauChaine = function (langages) {
langages_chaines = langages.toString(',')
  return langages_chaines;
}

var TriTableau = function (reseaux_sociaux) {
reseaux_sociaux.sort()
  return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
  InversionTableau = reseaux_sociaux.reverse();
  return InversionTableau;
}
