const fs = require('fs');
const sharp = require('sharp');

const inputFolder = './images/';
const outputFolder = './output/';


fs.readdirSync(inputFolder).forEach(file => {
    const inputFile = inputFolder + file;
    try {
        console.log('[image-resizer]', 'Processing image:', inputFile);
        sharp(inputFile)
            .resize(1400, 1400, {fit: 'inside' })
            .toFile(outputFolder + file)
    } catch(error) {
        console.error('Unable to process file: ' + inputFile);
    }
    
});
