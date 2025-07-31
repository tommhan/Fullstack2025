// index.js tai app.js

// Tuo dotenv vain, jos sovellus ei ole tuotantoympäristössä (esim. paikallisessa kehityksessä)
// Renderissä process.env.NODE_ENV on yleensä 'production'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const mongoose = require('mongoose');

// Hae yhteysmerkkijono ympäristömuuttujasta
// Renderissä tämä tulee suoraan Renderin asetuksista
// Paikallisesti tämä tulee .env-tiedostosta (jos dotenv on ladattu)
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000; // Käytä Renderin antamaa porttia tai oletusta 3000

if (!uri) {
  console.error('Virhe: MONGODB_URI-ympäristömuuttujaa ei ole asetettu!');
  console.error('Varmista, että se on asetettu Renderin hallintapaneelissa tai .env-tiedostossa paikallisesti.');
  process.exit(1); // Lopeta sovellus, jos URI puuttuu
}

mongoose.connect(uri)
  .then(() => {
    console.log('Yhdistetty MongoDB Atlasiin onnistuneesti!');
    // Tässä voit aloittaa Express-palvelimen tai muun sovelluslogiikan
    // Esimerkiksi:
    // app.listen(port, () => {
    //   console.log(`Palvelin käynnissä portissa ${port}`);
    // });
  })
  .catch((err) => {
    console.error('Virhe yhdistettäessä MongoDB Atlasiin:', err.message);
    // Voit myös kirjata koko virheobjektin, jos haluat lisätietoja
    // console.error(err);
    process.exit(1); // Lopeta sovellus virheen sattuessa
  });

// Muu sovelluskoodisi (esim. Express-reitit, mallit jne.)