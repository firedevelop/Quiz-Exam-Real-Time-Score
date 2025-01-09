// issue works on local, stop to work on localhost becasu netigly doesnt get node.js package
// encrypt-questions.js
import { secretKey } from '../config.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function encrypt(questions, key) {
    const encrypted = questions.map(question => {
        const encryptedQuestion = {};
        for (const key in question) {
            if(typeof question[key] === 'string'){
                 encryptedQuestion[key] = xorCipher(question[key], key)
            }else if (Array.isArray(question[key])) {
               encryptedQuestion[key] = question[key].map(item => typeof item === 'string' ? xorCipher(item, key) : item);
           } else{
                encryptedQuestion[key] = question[key];
            }
        }
         return encryptedQuestion;
    });
     return encrypted
}

function xorCipher(str, key) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}
function xorCipherBuffer(buffer, key) {
    const keyBuffer = Buffer.from(key, 'utf-8');
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = buffer[i] ^ keyBuffer[i % keyBuffer.length];
    }
     return buffer;
}

async function processFile(filePath) {
    try {
        const absoluteFilePath = path.resolve(__dirname, filePath);
        const absoluteOriginalPath = path.resolve(__dirname, filePath.replace(/\.js$/, '-original.js'));

        if (!filePath.endsWith('-original.js')) {
          await fs.promises.copyFile(absoluteFilePath, absoluteOriginalPath);
          const { questions } = await import(absoluteOriginalPath);
          const key = secretKey;
          const encryptedQuestions = encrypt(questions, key);
           const outputString = `// This file has been encrypted\nexport const questions = ${JSON.stringify(encryptedQuestions)};`;
          await fs.promises.writeFile(absoluteFilePath, outputString, 'utf-8');
          console.log(`Encrypted and saved to: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}



async function processImage(originalImagePath, imagePath) {
    try {
        const absoluteOriginalImagePath = path.resolve(__dirname, originalImagePath);
      const absoluteImagePath = path.resolve(__dirname, imagePath);

      const key = secretKey;
      const imageBuffer = await fs.promises.readFile(absoluteOriginalImagePath);
      await fs.promises.mkdir(path.dirname(absoluteImagePath), { recursive: true });
       await fs.promises.writeFile(absoluteImagePath, xorCipherBuffer(imageBuffer, key));
        console.log(`Encrypted and saved to: ${imagePath}`);
    } catch (error) {
        console.error(`Error processing ${imagePath}:`, error);
    }
}

async function main() {
      const filesToProcess = [
        './js/questions-bases-de-datos-b.js',
        './js/questions-entornos-de-desarrollo.js',
        './js/questions-formacion-y-orientacion-laboral.js',
        './js/questions-programacion-b.js',
        './js/questions-lenguajes-de-marcas.js'
     ];
    const imagesToProcess = [];
     const imageFolders = [
        './images/private-originals/bases-de-datos-b',
        './images/private-originals/entornos-de-desarrollo',
        './images/private-originals/formacion-y-orientacion-laboral',
         './images/private-originals/programacion-b',
        './images/private-originals/lenguajes-de-marcas'
    ];
    // Function to recursively get all files in a directory
    const getFiles = async (dir, imageDir) => {
         try {
           const entries = await fs.promises.readdir(dir, { withFileTypes: true });
              for (let entry of entries) {
                 const absolutePath = path.resolve(dir, entry.name);
                   const relativePath = absolutePath.replace(__dirname,'.')
                  const newImagePath = relativePath.replace('images/private-originals', 'images/private');
                   if(entry.isDirectory()) {
                      await getFiles(absolutePath, newImagePath)
                   } else{
                       imagesToProcess.push({original: relativePath, new: newImagePath})
                   }
              }
         } catch(err){
          console.error("Error reading directory:", dir, err)
        }
    }
    for (const imageFolder of imageFolders){
       await getFiles(imageFolder)
    }


     for (const file of filesToProcess) {
       await processFile(file)
     }
     for (const imageInfo of imagesToProcess) {
         await processImage(imageInfo.original, imageInfo.new)
     }
}

main();