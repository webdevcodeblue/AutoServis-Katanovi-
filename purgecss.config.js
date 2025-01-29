const fs = require('fs');
const PurgeCSS = require('purgecss').PurgeCSS;

const purgeCSSResults = async () => {
  const result = await new PurgeCSS().purge({
    content: ['./*.html', './js/*.js'], // Putanje do HTML i JS datoteka
    css: ['./css/main.css'], // Putanja do CSS datoteke
  });

  fs.writeFileSync('./css/cleaned.css', result[0].css, 'utf-8'); // Spremanje rezultata
  console.log('Pročišćeni CSS spremljen u cleaned.css');
};

purgeCSSResults();
