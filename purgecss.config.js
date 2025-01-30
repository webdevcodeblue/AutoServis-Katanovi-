const fs = require('fs');
const PurgeCSS = require('purgecss').PurgeCSS;

const purgeCSSResults = async () => {
  const result = await new PurgeCSS().purge({
    content: ['./*.html', './js/*.js'], // Traži klase u HTML i JS fajlovima
    css: ['./css/main.css', './css/cleaned.css'], // Obrađuje oba CSS fajla
  });

  fs.writeFileSync('./css/optimized.css', result[0].css, 'utf-8'); // Sprema pročišćeni CSS u novi fajl
  console.log('Pročišćeni CSS spremljen u optimized.css');
};

purgeCSSResults();
