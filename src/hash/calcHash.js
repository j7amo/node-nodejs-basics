import { createHash } from 'crypto';
import { promises as fsPromises } from 'fs';

const calculateHash = async () => {
    // Write your code here
    try {
        const fileContent = await fsPromises.readFile('./files/fileToCalculateHashFor.txt', { encoding: 'utf8' });
        const hash = createHash('sha256');
        hash.update(fileContent);
        console.log(hash.digest('hex'));
    } catch (err) {
        console.error(err);
    }
};

await calculateHash();