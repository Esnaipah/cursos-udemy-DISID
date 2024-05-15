

const {writeFileSync, mkdirSync} = require ('fs');

require('dotenv').config();

const targuetPath = './src/environments/environment.ts';

const envFileContent =`
  export const environment = {
    mapbox_key: "${process.env['MAPBOX_KEY']}",
    otra: "Propiedad ejemplo"
  }
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync(targuetPath, envFileContent);
