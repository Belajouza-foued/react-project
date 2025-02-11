const translations = {
    fr: {
      welcome: "Bienvenue sur WorldFitness",
      about: "À propos",
      contact: "Contactez-nous",
      home: "Accueille",
      facts: "realité",
      programme_title: "Programme pour débutantes",
      programme_description: "Un programme sur mesure pour aider les débutantes à démarrer leur parcours de fitness en toute confiance.",
      programme_more: "Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !",


    },
    en: {
      welcome: "Welcome to WorldFitness",
      about: "About",
      contact: "Contact Us",
      home: "home",
      facts: "facts",
      programme_title: "Beginner Program",
      programme_description: "A tailored program to help beginners start their fitness journey with confidence.",
      programme_more: "This program is designed to build participants' self-confidence by offering sessions tailored to their level. Each exercise is designed to be accessible while ensuring gradual results. Additionally, nutritional advice will be provided to support your training and improve performance. Join us and start transforming your health today!",
  

    }
};

// ✅ Exportation de la fonction pour l'utiliser ailleurs
export function changeLanguage(lang) {
    document.getElementById("welcome").textContent = translations[lang].welcome;
    document.getElementById("about").textContent = translations[lang].about;
    document.getElementById("contact").textContent = translations[lang].contact;
    document.getElementById("home").textContent = translations[lang].home;
    document.getElementById("facts").textContent = translations[lang].realités;
}

// ✅ Export par défaut pour les traductions
export default translations;
